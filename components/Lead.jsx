"use client";

import LeadForm from "./LeadForm";
import Logo from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Lead() {
  const { t } = useI18n();
  const f = t.form;

  return (
    <section className="band" id="lead">
      <div className="shell">
        <div className="final">
          <div className="final-copy">
            <div className="eyebrow">{f.eyebrow}</div>
            <h2>{f.h}</h2>
            <p className="lead">{f.p}</p>

            <div className="contact-row">
              {t.contacts.map((c) => (
                <div key={c.k}>
                  <span className="ck">{c.k}</span>
                  <span className="cv">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener" : undefined}
                      >
                        {c.v}
                      </a>
                    ) : (
                      c.v
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="shell">
      <div className="fl">
        <Logo color="#E6EFEC" />
        <p>iCORP MoySkladShop</p>
      </div>
      <p>{t.footer}</p>
    </footer>
  );
}
