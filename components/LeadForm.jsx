"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PHONE_RAW } from "@/lib/content";

const EMPTY = { name: "", phone: "", company: "", comment: "" };

export default function LeadForm() {
  const { lang, t } = useI18n();
  const f = t.form;

  const [values, setValues] = useState(EMPTY);
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  // Узбекистан: девять цифр после кода страны. Код можно не писать.
  const phoneOk = (raw) => String(raw).replace(/\D/g, "").length >= 9;

  async function submit(e) {
    e.preventDefault();
    setError("");

    if (!values.name.trim() || !values.phone.trim()) {
      setError(f.errRequired);
      return;
    }
    if (!phoneOk(values.phone)) {
      setError(f.errPhone);
      return;
    }

    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, lang, page: "landing" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("ok");
      setValues(EMPTY);
    } catch {
      setState("error");
      setError(f.errSend);
    }
  }

  if (state === "ok") {
    return (
      <div className="form-ok">
        <div className="oh">{f.okTitle}</div>
        <p>{f.okText}</p>
        <a className="btn btn-ghost" href={`tel:${PHONE_RAW}`}>
          {t.nav.callUs}
        </a>
        <button type="button" className="btn btn-ghost" onClick={() => setState("idle")}>
          {f.again}
        </button>
      </div>
    );
  }

  const sending = state === "sending";

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className={`field${error === f.errRequired && !values.name.trim() ? " err" : ""}`}>
        <label htmlFor="lead-name">{f.name}</label>
        <input
          id="lead-name"
          name="name"
          autoComplete="name"
          placeholder={f.namePh}
          value={values.name}
          onChange={set("name")}
          disabled={sending}
        />
      </div>

      <div className={`field${error && error !== f.errSend && !phoneOk(values.phone) ? " err" : ""}`}>
        <label htmlFor="lead-phone">{f.phone}</label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+998 90 123 45 67"
          value={values.phone}
          onChange={set("phone")}
          disabled={sending}
        />
      </div>

      <div className="field">
        <label htmlFor="lead-company">{f.company}</label>
        <input
          id="lead-company"
          name="company"
          autoComplete="organization"
          placeholder={f.companyPh}
          value={values.company}
          onChange={set("company")}
          disabled={sending}
        />
      </div>

      <div className="field">
        <label htmlFor="lead-comment">{f.comment}</label>
        <textarea
          id="lead-comment"
          name="comment"
          rows={3}
          placeholder={f.commentPh}
          value={values.comment}
          onChange={set("comment")}
          disabled={sending}
        />
      </div>

      {error ? <p className="form-err">{error}</p> : null}

      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? f.sending : f.submit}
      </button>

      <p className="form-note">{f.consent}</p>
    </form>
  );
}
