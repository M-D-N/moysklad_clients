"use client";

import { useState } from "react";
import Logo, { PhoneIcon, Flag, Caret, ArrowUpRight } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { PHONE_RAW, PHONE_HUMAN } from "@/lib/content";

/** Пункты меню шапки — совпадают с якорями секций страницы. */
export function navLinks(t) {
  return [
    { href: "#start", label: t.nav.start },
    { href: "#how", label: t.nav.how },
    { href: "#features", label: t.nav.features },
    { href: "#who", label: t.nav.who },
    { href: "#plans", label: t.nav.plans },
  ];
}

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const links = navLinks(t);

  // языков два, поэтому переключатель работает как тумблер, а не как список
  const toggleLang = () => setLang(lang === "ru" ? "uz" : "ru");

  return (
    <nav className="nav">
      <div className="shell nav-in">
        <div className="nav-bar">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <Logo />
            <span className="brand-txt">
              <span className="brand-name">
                Tele<i>dukon</i>
              </span>
              <span className="brand-by">{t.brandBy}</span>
            </span>
          </a>

          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <button type="button" className="nav-lang" onClick={toggleLang}>
            <Flag lang={lang} />
            {t.nav.langName}
            <Caret />
          </button>

          <a className="nav-phone" href={`tel:${PHONE_RAW}`} aria-label={t.nav.callUs}>
            <PhoneIcon />
            <span className="pn">{PHONE_HUMAN}</span>
          </a>
        </div>

        <a className="btn btn-dark btn-sm nav-cta" href="#lead">
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

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="shell mm-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}

          <div className="mm-row">
            <button type="button" className="nav-lang" onClick={toggleLang}>
              <Flag lang={lang} />
              {t.nav.langName}
            </button>
            <a className="nav-phone" href={`tel:${PHONE_RAW}`}>
              <PhoneIcon />
              {PHONE_HUMAN}
            </a>
          </div>

          <a className="btn btn-dark" href="#lead" onClick={() => setOpen(false)}>
            {t.nav.cta}
            <span className="btn-arrow">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
