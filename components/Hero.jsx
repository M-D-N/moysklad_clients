"use client";

import Logo from "./Logo";
import { useI18n } from "@/lib/i18n";

/** Нижнее меню мини-аппа. active — индекс подсвеченного пункта. */
export function ScNav({ labels, active = 0 }) {
  const icons = ["⌂", "▤", "◫", "◎"];
  return (
    <div className="sc-nav">
      {labels.map((l, i) => (
        <div key={l} className={i === active ? "on" : undefined}>
          <i>{icons[i]}</i>
          {l}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const m = t.mock;

  return (
    <header className="hero shell" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow rise">{t.hero.eyebrow}</div>
          <h1 className="rise d1">
            {t.hero.h1a}
            <span className="hl">{t.hero.h1hl}</span>
            {t.hero.h1b}
          </h1>
          <p className="lead rise d2">{t.hero.lead}</p>

          <div className="hero-cta rise d2">
            <a className="btn btn-primary" href="#lead">
              {t.hero.cta1}
            </a>
            <a className="btn btn-ghost" href="#screens">
              {t.hero.cta2}
            </a>
          </div>

          <div className="tag-row rise d3">
            {t.hero.tags.map((tag, i) => (
              <span className="tag" key={i}>
                {tag.a}
                {tag.b ? <b>{tag.b}</b> : null}
              </span>
            ))}
          </div>
        </div>

        <div className="phone-stage rise d2">
          <div className="phone">
            <div className="screen">
              <div className="sc-top">
                <Logo />
                <span className="nm">Bordo Shop</span>
                <span className="lang">{m.lang}</span>
              </div>

              <div className="sc-body">
                <div className="debt">
                  <span className="k">{m.debtLabel}</span>
                  <span className="v">1 240 000 {m.currency}</span>
                  <span className="sub">{m.priceType}</span>
                </div>

                <div className="chips">
                  {m.chips.map((c, i) => (
                    <span className={`chip${i === 0 ? " on" : ""}`} key={c}>
                      {c}
                    </span>
                  ))}
                </div>

                <div className="prod">
                  <div className="ph" data-badge={m.badgePromo} />
                  <div>
                    <div className="nm">{m.products[0].n}</div>
                    <div className="art">Арт: KR-25-W</div>
                    <div className="pr">
                      <span className="old">{m.products[0].old}</span>
                      <span className="new-p">{m.products[0].p}</span>
                    </div>
                    <div className="st">{m.stock}</div>
                  </div>
                </div>

                <div className="prod">
                  <div
                    className="ph"
                    style={{ background: "linear-gradient(145deg,#2E3A46,#222834)" }}
                  />
                  <div>
                    <div className="nm">{m.products[2].n}</div>
                    <div className="art">Арт: GR-10</div>
                    <div className="pr">
                      <span className="new-p">{m.products[2].p}</span>
                    </div>
                    <div className="st">{m.stock}</div>
                  </div>
                </div>
              </div>

              <ScNav labels={m.nav} active={0} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
