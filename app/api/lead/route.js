// Приём заявки с лендинга и создание сделки в amoCRM.
//
// Ключи берутся ТОЛЬКО из переменных окружения и живут на сервере —
// в браузер покупателя они не попадают. См. .env.example.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const AMO_BASE = (process.env.AMO_BASE_URL || "").replace(/\/+$/, "");
const AMO_TOKEN = process.env.AMO_ACCESS_TOKEN || "";
const PIPELINE_ID = process.env.AMO_PIPELINE_ID;
const STATUS_ID = process.env.AMO_STATUS_ID;
const RESPONSIBLE_ID = process.env.AMO_RESPONSIBLE_USER_ID;
const LEAD_TAG = process.env.AMO_LEAD_TAG || "Сайт MoySkladShop";
// Название сделки одинаковое для всех заявок — так их видно в воронке одним взглядом.
const LEAD_NAME = process.env.AMO_LEAD_NAME || "Заявка из сайта на мини апп приложение";

/* ------------------------- простая защита от спама ------------------------- */
// Память процесса: одного узла для лендинга достаточно. Нужен кластер —
// замените на Redis или уберите в пользу капчи.
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear(); // страховка от разрастания
  return list.length > MAX_PER_WINDOW;
}

/* ------------------------------- утилиты ---------------------------------- */
const clean = (v, max = 400) => String(v ?? "").trim().slice(0, max);

/** Номер к виду +998XXXXXXXXX. Если формат другой — отдаём как ввели. */
function normalizePhone(raw) {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (digits.length === 9) return `+998${digits}`;
  if (digits.length === 12 && digits.startsWith("998")) return `+${digits}`;
  return digits ? `+${digits}` : "";
}

async function amo(path, init = {}) {
  const res = await fetch(`${AMO_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${AMO_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`amoCRM ${res.status}: ${text.slice(0, 400)}`);
    err.status = res.status;
    throw err;
  }
  return text ? JSON.parse(text) : null;
}

/* --------------------------------- POST ----------------------------------- */
export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "too_many_requests" }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = normalizePhone(body.phone);
  const company = clean(body.company, 160);
  const comment = clean(body.comment, 1500);
  const lang = body.lang === "uz" ? "uz" : "ru";

  if (!name || phone.replace(/\D/g, "").length < 9) {
    return Response.json({ ok: false, error: "validation" }, { status: 422 });
  }

  // Заявку пишем в лог всегда — даже если CRM недоступна, контакт не потеряется.
  console.log("[lead]", JSON.stringify({ name, phone, company, lang, ip, at: new Date().toISOString() }));

  if (!AMO_BASE || !AMO_TOKEN) {
    console.error("[lead] amoCRM не настроен: задайте AMO_BASE_URL и AMO_ACCESS_TOKEN");
    return Response.json({ ok: false, error: "crm_not_configured" }, { status: 503 });
  }

  const lead = {
    name: LEAD_NAME,
    _embedded: {
      tags: [{ name: LEAD_TAG }],
      contacts: [
        {
          first_name: name,
          custom_fields_values: [
            { field_code: "PHONE", values: [{ value: phone, enum_code: "WORK" }] },
          ],
        },
      ],
    },
  };

  if (PIPELINE_ID) lead.pipeline_id = Number(PIPELINE_ID);
  if (STATUS_ID) lead.status_id = Number(STATUS_ID);
  if (RESPONSIBLE_ID) lead.responsible_user_id = Number(RESPONSIBLE_ID);

  try {
    const created = await amo("/api/v4/leads/complex", {
      method: "POST",
      body: JSON.stringify([lead]),
    });

    const leadId = Array.isArray(created) ? created[0]?.id : created?.id;

    // Детали заявки кладём примечанием: менеджеру удобнее, чем доп. поля заводить.
    if (leadId) {
      const lines = [
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        company ? `Компания: ${company}` : null,
        comment ? `Комментарий: ${comment}` : null,
        `Язык сайта: ${lang === "uz" ? "узбекский" : "русский"}`,
      ].filter(Boolean);

      try {
        await amo(`/api/v4/leads/${leadId}/notes`, {
          method: "POST",
          body: JSON.stringify([
            { note_type: "common", params: { text: lines.join("\n") } },
          ]),
        });
      } catch (e) {
        // Примечание — не повод терять сделку.
        console.error("[lead] примечание не добавилось:", e.message);
      }
    }

    return Response.json({ ok: true, leadId: leadId ?? null });
  } catch (e) {
    console.error("[lead] amoCRM:", e.message);
    return Response.json({ ok: false, error: "crm_error" }, { status: 502 });
  }
}
