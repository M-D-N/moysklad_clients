"use client";

import { useState } from "react";
import { ArrowUpRight, SparkIcon, Plus } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { PHONE_RAW, PHONE_HUMAN } from "@/lib/content";

const EMPTY = { name: "", phone: "", company: "", comment: "" };

/* ============================ 09 · заявка ============================ */

export function Lead() {
  const { lang, t } = useI18n();
  const s = t.s9;
  const f = t.form;

  const [v, setV] = useState(EMPTY);
  const [state, setState] = useState("idle"); // idle | sending | ok
  const [err, setErr] = useState("");

  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }));
  // Узбекистан: девять цифр после кода страны, код можно не писать
  const phoneOk = (raw) => String(raw).replace(/\D/g, "").length >= 9;

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (!v.name.trim()) return setErr(f.errName);
    if (!phoneOk(v.phone)) return setErr(f.errPhone);

    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, lang, page: "landing" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setV(EMPTY);
      setState("ok");
    } catch {
      setState("idle");
      setErr(f.errSend + PHONE_HUMAN);
    }
  }

  const sending = state === "sending";

  return (
    <section className="band lead-band" id="lead">
      <div className="shell">
        <div className="lead-card lead-in">
          {/* шапка на всю ширину контейнера: номер — у правого края */}
          <div className="sec-head">
            <span className="badge badge-dark">
              <SparkIcon />
              {s.badge}
            </span>
            <span className="sec-num">{s.num}</span>
          </div>

          <div className="lead-copy">
            <h2 className="sec-title sec-title-dark lead-h2">
              <span>{s.ha}</span>
              <span className="hl">{s.hb}</span>
            </h2>

            {state === "ok" ? (
              <div className="lead-ok">
                <h3>{f.okH}</h3>
                <p>{f.okP}</p>
                <a className="btn btn-white" href={`tel:${PHONE_RAW}`}>
                  {PHONE_HUMAN}
                </a>
              </div>
            ) : (
              <form className="lead-form" onSubmit={submit} noValidate>
                <div className="lf-row">
                  <label className="lf-field">
                    <span>{f.name}</span>
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder={f.namePh}
                      value={v.name}
                      onChange={set("name")}
                      disabled={sending}
                    />
                  </label>
                  <label className="lf-field">
                    <span>{f.phone}</span>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder={f.phonePh}
                      value={v.phone}
                      onChange={set("phone")}
                      disabled={sending}
                    />
                  </label>
                </div>

                <label className="lf-field">
                  <span>{f.company}</span>
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder={f.companyPh}
                    value={v.company}
                    onChange={set("company")}
                    disabled={sending}
                  />
                </label>

                <label className="lf-field">
                  <span>{f.comment}</span>
                  <textarea
                    name="comment"
                    rows={3}
                    placeholder={f.commentPh}
                    value={v.comment}
                    onChange={set("comment")}
                    disabled={sending}
                  />
                </label>

                {err && <p className="lf-err">{err}</p>}

                <button type="submit" className="btn btn-white lf-submit" disabled={sending}>
                  {sending ? f.sending : f.submit}
                  <span className="btn-arrow">
                    <ArrowUpRight />
                  </span>
                </button>
              </form>
            )}
          </div>

          <figure className="lead-art">
            <img src="/img/cta2-art.webp" alt={s.alt} loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ============================== 10 · FAQ ============================== */

export function Faq() {
  const { t } = useI18n();
  const s = t.s10;
  const [open, setOpen] = useState(null);

  const col = (items, offset) =>
    items.map((q, n) => {
      const i = offset + n;
      const on = open === i;
      return (
        <div className={`faq-item${on ? " on" : ""}`} key={q.q}>
          <button type="button" aria-expanded={on} onClick={() => setOpen(on ? null : i)}>
            <span>{q.q}</span>
            <i>
              <Plus />
            </i>
          </button>
          {on && <p>{q.a}</p>}
        </div>
      );
    });

  const half = Math.ceil(t.faq.length / 2);

  return (
    <section className="band" id="faq">
      <div className="shell">
        <div className="sec-head">
          <span className="badge">
            <SparkIcon />
            {s.badge}
          </span>
          <span className="sec-num">{s.num}</span>
        </div>

        {/* в макете заголовок в две строки */}
        <h2 className="sec-title faq-h2">
          <span>{s.ha}</span>
          <span className="hl">{s.hb}</span>
        </h2>

        <div className="faq-grid">
          <div className="faq-col">{col(t.faq.slice(0, half), 0)}</div>
          <div className="faq-col">{col(t.faq.slice(half), half)}</div>
        </div>
      </div>
    </section>
  );
}
