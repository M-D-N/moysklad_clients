"use client";

import { useState } from "react";
import { ArrowUpRight, TagIcon, StarIcon, CrownIcon } from "./Logo";
import { SecHead } from "./Sections";
import { useI18n } from "@/lib/i18n";

/** 350000 → «350 000» */
const money = (n) => n.toLocaleString("ru-RU").replace(/ /g, " ");

/* ============================ 07 · тарифы ============================ */

export default function Plans() {
  const { t } = useI18n();
  const s = t.s7;
  const [year, setYear] = useState(false);

  return (
    <section className="band" id="plans">
      <div className="shell">
        <div className="sec-head">
          <span className="badge">
            <TagIcon />
            {s.badge}
          </span>
          <span className="sec-num">{s.num}</span>
        </div>

        <div className="plans-head">
          <h2 className="sec-title">
            {s.ha}
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
              // третий тариф в макете выделен своей палитрой с короной
              const tone = p.featured ? " plan-hot" : i === 2 ? " plan-top" : "";
              return (
              <article className={`card plan${tone}`} key={p.name}>
                <div className="plan-top">
                  <span className="plan-name">{p.name}</span>
                  {p.featured && (
                    <span className="plan-trial">
                      <StarIcon />
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

                <a className="btn plan-cta" href="#lead">
                  <span className="btn-stack">
                    {s.cta}
                    <span className="btn-sub">{p.sub}</span>
                  </span>
                  <span className="btn-arrow">
                    <ArrowUpRight />
                  </span>
                </a>

                <div className="plan-list">
                  <div className="plan-who">{p.who}</div>
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

export function Clients({ logos }) {
  const { t } = useI18n();
  const s = t.s8;
  if (!logos?.length) return null; // нет логотипов — секции нет

  return (
    <section className="band" id="clients">
      <div className="shell">
        <SecHead badge={s.badge} icon={<StarIcon />} num={s.num} ha={s.ha} hb={s.hb} />
        <div className="clients-grid">
          {logos.map((l) => (
            <div className="client" key={l.src}>
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
