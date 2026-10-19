"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  GearIcon,
  SparkIcon,
  ShopIcon,
  BoltIcon,
  UsersIcon,
  StarIcon,
  CatalogArt,
  PriceArt,
  FinanceArt,
  BellArt,
  LaunchReadyArt,
  LaunchNewArt,
  LaunchOtherArt,
} from "./Logo";
import { useI18n } from "@/lib/i18n";

/** Шапка секции: бейдж слева, номер справа, заголовок под ними. */
export function SecHead({ badge, icon, num, ha, hb, hc, dark = false, children }) {
  return (
    <>
      <div className="sec-head">
        <span className={`badge${dark ? " badge-dark" : ""}`}>
          {icon}
          {badge}
        </span>
        <span className={`sec-num${dark ? " sec-num-dark" : ""}`}>{num}</span>
      </div>
      <h2 className={`sec-title${dark ? " sec-title-dark" : ""}`}>
        {ha}
        <span className="hl">{hb}</span>
        {hc}
      </h2>
      {children}
    </>
  );
}

/* ====================== 01 · как это работает ====================== */

export function HowItWorks() {
  const { t } = useI18n();
  const s = t.s1;

  return (
    <section className="band" id="how">
      <div className="shell">
        <SecHead badge={s.badge} icon={<GearIcon />} num={s.num} ha={s.ha} hb="" hc={s.hb} />

        <div className="how-top">
          <div className="how-stat">
            <b>{s.statNum}</b>
            <span>{s.statNote}</span>
          </div>
        </div>

        {/* схема «витрина → Teledukon → МойСклад»: две версии картинки */}
        <figure className="how-art">
          <img className="only-wide" src="/img/how-desktop.webp" alt={s.alt} loading="lazy" />
          <img className="only-narrow" src="/img/how-mobile.webp" alt={s.alt} loading="lazy" />
        </figure>

        <h3 className="how-steps-h">
          {s.stepsH}
          <span className="hl">{s.stepsHl}</span>
        </h3>

        <div className="how-steps">
          {s.steps.map((st) => (
            <article className="card step-card" key={st.n}>
              <span className="step-n">{st.n}</span>
              <h4>{st.h}</h4>
              <p>{st.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== 02 · больше, чем просто бот =================== */

export function Showcase() {
  const { t } = useI18n();
  const s = t.s2;

  return (
    <section className="band dark-band" id="start">
      <div className="shell">
        <SecHead
          badge={s.badge}
          icon={<SparkIcon />}
          num={s.num}
          ha={s.ha}
          hb={s.hb}
          hc={s.hc}
          dark
        />

        <a className="btn btn-white show-cta" href="#lead">
          {s.cta}
          <span className="btn-arrow">
            <ArrowUpRight />
          </span>
        </a>
      </div>

      <figure className="show-art">
        <img src="/img/cta1-art.webp" alt={s.alt} loading="lazy" />
      </figure>
    </section>
  );
}

/* ==================== 03 · управление бизнесом ===================== */

export function Manage() {
  const { t } = useI18n();
  const s = t.s3;
  const [i, setI] = useState(0);
  const slide = s.slides[i];
  const move = (d) => setI((v) => (v + d + s.slides.length) % s.slides.length);

  return (
    <section className="band" id="manage">
      <div className="shell">
        <SecHead badge={s.badge} icon={<GearIcon />} num={s.num} ha={s.ha} hb={s.hb} />

        <div className="manage-grid">
          <div className="card manage-copy">
            <div className="dots" role="tablist" aria-label={s.badge}>
              {s.slides.map((sl, n) => (
                <button
                  key={sl.h}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  aria-label={sl.h}
                  className={n === i ? "on" : undefined}
                  onClick={() => setI(n)}
                />
              ))}
            </div>

            <h3>{slide.h}</h3>
            <p>{slide.p1}</p>
            <p>{slide.p2}</p>

            <div className="manage-foot">
              <a className="btn btn-white manage-cta" href="#lead">
                <span className="btn-stack">
                  {s.cta}
                  <span className="btn-sub">{s.ctaSub}</span>
                </span>
                <span className="btn-arrow">
                  <ArrowUpRight />
                </span>
              </a>

              <div className="manage-nav">
                <button type="button" aria-label={s.prev} onClick={() => move(-1)}>
                  <ArrowLeft />
                </button>
                <button type="button" aria-label={s.next} onClick={() => move(1)}>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <figure className="card manage-art">
            <img src={slide.img} alt={slide.alt} loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ========================= 04 · возможности ======================== */

const FEATURE_ARTS = [CatalogArt, PriceArt, FinanceArt, BellArt];

export function Features() {
  const { t } = useI18n();
  const s = t.s4;

  return (
    <section className="band" id="features">
      <div className="shell">
        <div className="card feat-box">
          <SecHead badge={s.badge} icon={<StarIcon />} num={s.num} ha={s.ha} hb={s.hb} />

          <div className="feat-rows">
            {s.rows.map((r, n) => {
              const Art = FEATURE_ARTS[n];
              return (
                <article className="feat-row" key={r.h}>
                  <span className="feat-art">
                    <Art />
                  </span>
                  <div className="feat-copy">
                    <h3>{r.h}</h3>
                    <p>{r.p}</p>
                  </div>
                  <div className="feat-chips">
                    {r.chips.map((c) => (
                      <span className="chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================== 05 · быстрый запуск ====================== */

const LAUNCH_ARTS = [LaunchReadyArt, LaunchNewArt, LaunchOtherArt];

export function Launch() {
  const { t } = useI18n();
  const s = t.s5;

  return (
    <section className="band" id="launch">
      <div className="shell">
        <SecHead badge={s.badge} icon={<BoltIcon />} num={s.num} ha={s.ha} hb={s.hb} />

        <div className="launch-grid">
          {s.cards.map((c, n) => {
            const Art = LAUNCH_ARTS[n];
            return (
              <article className="card launch-card" key={c.h}>
                <span className="launch-art">
                  <Art />
                </span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <a className={`btn ${c.primary ? "btn-dark" : "btn-outline"} launch-cta`} href="#lead">
                  <span className="btn-stack">
                    {c.cta}
                    <span className="btn-sub">{c.sub}</span>
                  </span>
                  <span className="btn-arrow">
                    <ArrowUpRight />
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======================== 06 · кому подойдёт ======================= */

export function Who() {
  const { t } = useI18n();
  const s = t.s6;
  const left = s.cards.filter((_, n) => n % 2 === 0);
  const right = s.cards.filter((_, n) => n % 2 === 1);

  const card = (c) => (
    <article className="card who-card" key={c.h}>
      <span className="who-icon">
        <ShopIcon />
      </span>
      <h3>{c.h}</h3>
      <p>{c.p}</p>
    </article>
  );

  return (
    <section className="band dark-band who" id="who">
      <div className="shell">
        <SecHead badge={s.badge} icon={<UsersIcon />} num={s.num} ha={s.ha} hb={s.hb} dark />

        <div className="who-grid">
          <div className="who-col">{left.map(card)}</div>
          <figure className="who-art">
            <img src="/img/who-phone.webp" alt={s.alt} loading="lazy" />
          </figure>
          <div className="who-col">{right.map(card)}</div>
        </div>
      </div>
    </section>
  );
}
