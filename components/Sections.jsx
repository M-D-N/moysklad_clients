"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  GearIcon,
  SparkIcon,
  BoltIcon,
  UsersIcon,
  StarIcon,
} from "./Logo";
import { useI18n } from "@/lib/i18n";

/** Шапка секции: бейдж слева, номер справа. */
export function SecHead({ badge, icon, num, dark = false }) {
  return (
    <div className="sec-head">
      <span className={`badge${dark ? " badge-dark" : ""}`}>
        {icon}
        {badge}
      </span>
      <span className={`sec-num${dark ? " sec-num-dark" : ""}`}>{num}</span>
    </div>
  );
}

/* ====================== 01 · как это работает ====================== */

export function HowItWorks() {
  const { t } = useI18n();
  const s = t.s1;

  return (
    <section className="band how" id="how">
      <div className="shell">
        <SecHead badge={s.badge} icon={<GearIcon />} num={s.num} />

        <div className="how-head">
          <h2 className="sec-title">
            {s.ha}
            <span className="hl">{s.hb}</span>
          </h2>
          <div className="how-stat">
            <b>{s.statNum}</b>
            <span>{s.statNote}</span>
          </div>
        </div>

        {/* схема «витрина → Teledukon → МойСклад»: широкая и узкая версии */}
        <figure className="how-art">
          <img className="only-wide" src="/img/how-desktop.webp" alt={s.alt} loading="lazy" />
          <img className="only-narrow" src="/img/how-mobile.webp" alt={s.alt} loading="lazy" />
        </figure>

        <h3 className="how-steps-h">
          {s.stepsH}
          <span className="hl">{s.stepsHl}</span>
        </h3>

        <div className="how-steps">
          {s.steps.map((st, i) => (
            <article className="card step-card" key={st.n}>
              <span className="step-img">
                <img src={`/img/step-${i + 1}.webp`} alt="" loading="lazy" />
              </span>
              <div className="step-copy">
                <span className="step-n">{st.n}</span>
                <h4>{st.h}</h4>
                <p>{st.p}</p>
              </div>
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
    <section className="band dark-band show" id="start">
      <div className="shell">
        {/* шапка секции идёт по всей ширине контейнера: номер — у правого края */}
        <SecHead badge={s.badge} icon={<SparkIcon />} num={s.num} dark />
      </div>

      <div className="shell show-top">
        <div className="show-copy">
          {/* в макете заголовок разбит ровно на три строки */}
          <h2 className="sec-title sec-title-dark show-h2">
            <span>{s.ha}</span>
            <span className="hl">{s.hb}</span>
            <span>{s.hc}</span>
          </h2>

          <a className="btn btn-white show-cta" href="#lead">
            {s.cta}
            <span className="btn-arrow">
              <ArrowUpRight />
            </span>
          </a>
        </div>

        <img className="show-icon" src="/img/app-icon.webp" alt="" loading="lazy" />
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
    <section className="band manage" id="manage">
      <div className="shell">
        <SecHead badge={s.badge} icon={<GearIcon />} num={s.num} />

        <h2 className="sec-title">
          {s.ha}
          <span className="hl">{s.hb}</span>
        </h2>

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
              <a className="manage-cta" href="#lead">
                <span>
                  {s.cta}
                  <i>{s.ctaSub}</i>
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

export function Features() {
  const { t } = useI18n();
  const s = t.s4;

  return (
    <section className="band features" id="features">
      <div className="shell">
        <div className="card feat-box">
          <SecHead badge={s.badge} icon={<StarIcon />} num={s.num} />

          <h2 className="sec-title">
            {s.ha}
            <span className="hl">{s.hb}</span>
          </h2>

          <div className="feat-rows">
            {s.rows.map((r, n) => (
              <article className="feat-row" key={r.h}>
                <img className="feat-art" src={`/img/feat-${n + 1}.webp`} alt="" loading="lazy" />

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

                {/* кружок с точками: по макету их число растёт от строки к строке */}
                <span className="feat-dots" aria-hidden="true">
                  {[0, 1, 2, 3].map((k) => (
                    <i key={k} className={k <= n ? "on" : undefined} />
                  ))}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================== 05 · быстрый запуск ====================== */

export function Launch() {
  const { t } = useI18n();
  const s = t.s5;

  return (
    <section className="band launch" id="launch">
      <div className="shell">
        <SecHead badge={s.badge} icon={<BoltIcon />} num={s.num} />

        <h2 className="sec-title">
          {s.ha}
          <span className="hl">{s.hb}</span>
        </h2>

        <div className="launch-grid">
          {s.cards.map((c, n) => (
            <article className={`launch-card${n === 2 ? " launch-card-out" : ""}`} key={c.h}>
              <span className="launch-art">
                <img src={`/img/launch-${n + 1}.webp`} alt="" loading="lazy" />
              </span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <a className={`launch-cta${c.primary ? " primary" : ""}`} href="#lead">
                <span>
                  {c.cta}
                  <i>{c.sub}</i>
                </span>
                <span className="btn-arrow">
                  <ArrowUpRight />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== 06 · кому подойдёт ======================= */

export function Who() {
  const { t } = useI18n();
  const s = t.s6;

  const card = (c, n) => (
    <article className="card who-card" key={c.h}>
      <img className="who-icon" src={`/img/who-${n + 1}.webp`} alt="" loading="lazy" />
      <h3>{c.h}</h3>
      <p>{c.p}</p>
    </article>
  );

  return (
    <section className="band who" id="who">
      {/* ступенчатая тёмная фигура позади карточек — низ секции */}
      <span className="who-bg" aria-hidden="true" />

      <div className="shell">
        <SecHead badge={s.badge} icon={<UsersIcon />} num={s.num} />

        <h2 className="sec-title who-h2">
          <span>{s.ha}</span>
          <span className="hl">{s.hb}</span>
        </h2>

        <div className="who-grid">
          <div className="who-col">
            {s.cards.filter((_, n) => n % 2 === 0).map((c, n) => card(c, n * 2))}
          </div>
          <figure className="who-art">
            <img src="/img/who-phone.webp" alt={s.alt} loading="lazy" />
          </figure>
          <div className="who-col who-col-r">
            {s.cards.filter((_, n) => n % 2 === 1).map((c, n) => card(c, n * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
}
