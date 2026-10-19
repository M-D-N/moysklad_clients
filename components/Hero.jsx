"use client";

import Logo, { ArrowUpRight, ShopIcon } from "./Logo";
import { useI18n } from "@/lib/i18n";

/* Иллюстрации на трёх карточках героя. В макете это объёмные картинки;
   до получения исходников рисуем их плоско, в той же палитре. */

function OrderArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="30" cy="30" r="24" fill="#E7F7F0" />
      <path d="M14 20h6l5 20h22" stroke="#12906A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="22" width="22" height="13" rx="3" fill="#34C495" />
      <circle cx="28" cy="46" r="3.4" fill="#0A6B4C" />
      <circle cx="42" cy="46" r="3.4" fill="#0A6B4C" />
      <circle cx="47" cy="19" r="9" fill="#12906A" />
      <path d="M47 15.4v7.2M43.4 19h7.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function ShopArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill="#E7F7F0" />
      <path d="M18 26h28l-3 20a5 5 0 0 1-5 4H26a5 5 0 0 1-5-4l-3-20Z" fill="#34C495" />
      <path d="M25 26v-4a7 7 0 0 1 14 0v4" stroke="#0A6B4C" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 31 24 41l5.6 1.6 1.8 5.6 2.8-4.6 5 3.2L42 31Z" fill="#fff" />
    </svg>
  );
}

function StockArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill="#E7F7F0" />
      <rect x="16" y="26" width="18" height="18" rx="3" fill="#34C495" />
      <rect x="32" y="18" width="16" height="16" rx="3" fill="#12906A" />
      <path
        d="M22 50a14 14 0 0 0 22-3"
        stroke="#0A6B4C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M44 42v6h-6" stroke="#0A6B4C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ARTS = [OrderArt, ShopArt, StockArt];

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <header className="hero" id="top">
      <div className="shell hero-in">
        <div className="hero-copy">
          <div className="hero-badge">
            <i>
              <ShopIcon />
            </i>
            <span>
              {h.badge[0]}
              <br />
              {h.badge[1]}
            </span>
          </div>

          <h1>
            {h.h1a}
            <span className="hl">{h.h1hl}</span>
            {h.h1b}
          </h1>

          <p className="hero-lead">{h.lead}</p>

          <div className="hero-cta">
            <a className="btn btn-white" href="#lead">
              {h.cta1}
              <span className="btn-arrow">
                <ArrowUpRight />
              </span>
            </a>
            <a className="btn btn-glass" href="#how">
              {h.cta2}
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-phone">
            <div className="screen">
              <div className="ph-top">
                <Logo className="brand-mark" />
                Teledukon
              </div>

              <div className="ph-hi">{h.phone.hi}</div>

              <div className="ph-card">
                <div className="ph-label">{h.phone.balance}</div>
                <div className="ph-chips">
                  {h.phone.orgs.map((o, i) => (
                    <span key={o} className={i === 0 ? "on" : undefined}>
                      {o}
                    </span>
                  ))}
                </div>
                <div className="ph-ok">{h.phone.ok}</div>
              </div>
            </div>
          </div>

          <div className="hero-cards">
            {h.cards.map((c, i) => {
              const Art = ARTS[i];
              return (
                <div className={`hero-card${i === 1 ? " main" : ""}`} key={c.tag}>
                  <span className="tag">{c.tag}</span>
                  <span className="art">
                    <Art />
                  </span>
                  <b>{c.h}</b>
                  <small>{c.p}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
