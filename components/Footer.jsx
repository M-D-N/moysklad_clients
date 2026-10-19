"use client";

import Logo, { TelegramIcon, InstagramIcon, FacebookIcon } from "./Logo";
import { navLinks } from "./Nav";
import { useI18n } from "@/lib/i18n";
import {
  PHONE_RAW,
  PHONE_HUMAN,
  EMAIL,
  SITE_HUMAN,
  SITE_URL,
  TELEGRAM_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/content";

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;

  // в подвале к пунктам шапки добавляются ещё два раздела
  const links = [
    ...navLinks(t),
    { href: "#clients", label: t.nav.clients },
    { href: "#faq", label: t.nav.faq },
  ];

  const socials = [
    { href: TELEGRAM_URL, Icon: TelegramIcon, label: "Telegram" },
    { href: INSTAGRAM_URL, Icon: InstagramIcon, label: "Instagram" },
    { href: FACEBOOK_URL, Icon: FacebookIcon, label: "Facebook" },
  ];

  return (
    <footer className="footer">
      <div className="shell footer-in">
        <div className="footer-brand">
          <div className="brand">
            <Logo light />
            <span className="brand-txt">
              <span className="brand-name">
                Tele<i>dukon</i>
              </span>
              <span className="brand-by">{t.brandBy}</span>
            </span>
          </div>

          <p className="footer-tag">
            <i>{f.tagA}</i>
            {f.tagB}
          </p>

          <a className="footer-cta" href="#lead">
            {f.cta}
          </a>
        </div>

        <div>
          <h4>{f.navTitle}</h4>
          <div className="footer-nav">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>{f.contactsTitle}</h4>

          <div className="footer-k first">{f.phoneK}</div>
          <div className="footer-v">
            <a href={`tel:${PHONE_RAW}`}>{PHONE_HUMAN}</a>
          </div>

          <div className="footer-k">{f.emailK}</div>
          <div className="footer-v">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div className="footer-k">{f.addressK}</div>
          <div className="footer-v">{f.address}</div>

          <div className="footer-k">{f.socialK}</div>
          <div className="footer-soc">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>{f.rights}</span>
        <a href={SITE_URL}>{SITE_HUMAN}</a>
        <span>{f.by}</span>
      </div>
    </footer>
  );
}
