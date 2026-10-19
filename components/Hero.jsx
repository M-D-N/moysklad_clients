"use client";

import { ArrowUpRight, ShopIcon } from "./Logo";
import { useI18n } from "@/lib/i18n";

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

        {/* композиция дизайнера: телефон с витриной и три карточки поверх */}
        <figure className="hero-art">
          <img src="/img/hero-art.webp" alt={h.alt} width={1500} height={1166} />
        </figure>
      </div>
    </header>
  );
}
