"use client";

import { useState } from "react";
import Logo, { ArrowUpRight, TagIcon, StarIcon, CrownIcon, GiftIcon } from "./Logo";
import { SecHead } from "./Sections";
import { useI18n } from "@/lib/i18n";

/** 350000 → «350 000» */
const money = (n) => n.toLocaleString("ru-RU").replace(/ /g, " ");

/** Оформление карточки по порядку: базовый, профессиональный, корпоративный. */
const TONES = ["plan-base", "plan-pro", "plan-corp"];

/* ============================ 07 · тарифы ============================ */

export default function Plans() {
  const { t } = useI18n();
  const s = t.s7;
  const [year, setYear] = useState(false);

  return (
    <section className="band plans" id="plans">
      <div className="shell">
        <SecHead badge={s.badge} icon={<TagIcon />} num={s.num} />

        <div className="plans-head">
          {/* в макете заголовок разбит на две строки */}
          <h2 className="sec-title plans-h2">
            <span>{s.ha}</span>
            <span className="hl">{s.hb}</span>
          </h2>

          {/* тумблер «на месяц / на год» */}
          <div className="plans-switch" role="group" aria-label={s.badge}>
            <button type="button" aria-pressed={!year} className={year ? undefined : "on"} onClick={() => setYear(false)}>
              {s.month}
            </button>
            <button type="button" aria-pressed={year} className={year ? "on" : undefined} onClick={() => setYear(true)}>
              {s.year}
            </button>
          </div>
        </div>

        {year && <p className="plans-save">{s.yearSave}</p>}

        <div className="plans-grid">
          {s.plans.map((p, i) => {
            // год считаем со скидкой 20% — так же, как в прайсе
            const price = year ? Math.round(p.price * 12 * 0.8) : p.price;
            return (
              <article className={`plan ${TONES[i] || TONES[0]}`} key={p.name}>
                <div className="plan-head">
                  <span className="plan-name">{p.name}</span>
                  {p.featured && (
                    <span className="plan-trial">
                      <GiftIcon />
                      {s.trial}
                    </span>
                  )}
                  {i === 2 && (
                    <span className="plan-crown">
                      <CrownIcon />
                    </span>
                  )}
                </div>

                <div className="plan-price">
                  <b>{money(price)}</b>
                  <span>{year ? s.unitYear : s.unitMonth}</span>
                </div>

                <a className="plan-cta" href="#lead">
                  <span className="plan-cta-txt">
                    <b>{s.cta}</b>
                    <i>{p.sub}</i>
                  </span>
                  <span className="plan-arrow">
                    <ArrowUpRight />
                  </span>
                </a>

                <div className="plan-list">
                  <h4>{p.who}</h4>
                  <ul>
                    {p.u.map((u) => (
                      <li key={u}>
                        <StarIcon />
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================== 08 · наши клиенты ======================== */

export function Clients({ logos = [] }) {
  const { t } = useI18n();
  const s = t.s8;
  // пока логотипов нет — показываем сетку-заглушку, как в макете
  const cells = logos.length ? logos : Array.from({ length: 16 }, () => null);

  return (
    <section className="band clients" id="clients">
      <div className="shell">
        <SecHead badge={s.badge} icon={<StarIcon />} num={s.num} />

        <div className="clients-head">
          <h2 className="sec-title">
            {s.ha}
            <span className="hl">{s.hb}</span>
          </h2>
          <Logo className="clients-mark" />
        </div>

        <div className="clients-grid">
          {cells.map((l, i) => (
            <div className="client" key={l?.src || i}>
              {l ? <img src={l.src} alt={l.alt} loading="lazy" /> : <span>LOGO</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
