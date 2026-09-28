"use client";

import { useState } from "react";
import Logo, { PhoneIcon } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { PHONE_RAW, PHONE_HUMAN } from "@/lib/content";

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#how", label: t.nav.how },
    { href: "#screens", label: t.nav.screens },
    { href: "#features", label: t.nav.features },
    { href: "#cases", label: t.nav.cases },
    { href: "#plans", label: t.nav.plans },
  ];

  return (
    <nav className="nav">
      <div className="shell nav-in">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Logo />
          <b>iCORP</b>
          <span>MoySkladShop</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-tools">
          <a className="nav-phone" href={`tel:${PHONE_RAW}`} aria-label={t.nav.callUs}>
            <PhoneIcon />
            <span className="pn">{PHONE_HUMAN}</span>
          </a>

          <div className="lang-sw" role="group" aria-label="Язык / Til">
            <button type="button" aria-pressed={lang === "ru"} onClick={() => setLang("ru")}>
              RU
            </button>
            <button type="button" aria-pressed={lang === "uz"} onClick={() => setLang("uz")}>
              UZ
            </button>
          </div>

          <a className="btn btn-primary btn-sm nav-cta" href="#lead">
            {t.nav.cta}
          </a>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="shell mm-in">
          {links.map((l) => (
            <a key={l.href} className="mm-link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#lead" onClick={() => setOpen(false)}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
