"use client";

import { useI18n } from "@/lib/i18n";
import { ScNav } from "./Hero";
import SectionHead from "./SectionHead";

const TINTS = [
  "linear-gradient(145deg,#34344A,#262636)",
  "linear-gradient(145deg,#2F3B47,#232935)",
  "linear-gradient(145deg,#3A3350,#272134)",
  "linear-gradient(145deg,#334A45,#22322F)",
];

export default function Screens() {
  const { t } = useI18n();
  const m = t.mock;
  const caps = t.screenCaps;

  return (
    <section className="band" id="screens">
      <div className="shell">
        <SectionHead num="02" title={t.s2.h} lead={t.s2.l} />

        <div className="gallery">
          {/* -------- каталог -------- */}
          <figure className="gitem">
            <div className="phone">
              <div className="screen">
                <div className="sc-top">
                  <span className="back">‹</span>
                  <span className="nm">{m.catalogTitle}</span>
                  <span className="lang">{m.lang}</span>
                </div>
                <div className="sc-body tight">
                  <div className="sc-search">🔍 {m.search}</div>
                  <div className="chips">
                    <span className="chip on">{m.chips[0]}</span>
                    <span className="chip">{m.chips[1]}</span>
                    <span className="chip">{m.sortPrice}</span>
                  </div>
                  <div className="pgrid">
                    {m.products.map((p, i) => (
                      <div className="pcard" key={p.n}>
                        <div
                          className={`ph${i === 1 ? " new" : ""}`}
                          style={{ background: TINTS[i] }}
                          data-badge={
                            i === 0 || i === 3 ? m.badgePromo : i === 1 ? m.badgeNew : undefined
                          }
                        />
                        <div className="in">
                          <span className="nm">{p.n}</span>
                          {p.old ? <span className="old">{p.old}</span> : null}
                          <span className="pr">{p.p}</span>
                          <span className="st">50+</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <ScNav labels={m.nav} active={1} />
              </div>
            </div>
            <figcaption className="gcap">
              <b>{caps[0].b}</b>
              <span>{caps[0].s}</span>
            </figcaption>
          </figure>

          {/* -------- карточка товара -------- */}
          <figure className="gitem">
            <div className="phone">
              <div className="screen">
                <div className="sc-top">
                  <span className="back">‹</span>
                  <span className="nm">{m.productTitle}</span>
                  <span className="lang">{m.lang}</span>
                </div>
                <div className="sc-body tight">
                  <div className="hero-img" data-badge={m.badgePromo} />
                  <div className="thumbs">
                    <i className="on" />
                    <i />
                    <i />
                  </div>
                  <div style={{ fontSize: ".78rem", fontWeight: 600, lineHeight: 1.3 }}>
                    {m.productName}
                  </div>
                  <div style={{ display: "flex", gap: "7px", alignItems: "baseline" }}>
                    <span className="old" style={{ fontSize: ".64rem" }}>
                      400 000
                    </span>
                    <span className="new-p" style={{ fontSize: ".95rem" }}>
                      320 000
                    </span>
                  </div>
                  <div className="cap-label">{m.variantsLabel}</div>
                  {m.variants.map((v, i) => (
                    <div className="vrow" key={v}>
                      <span className="vn">{v}</span>
                      <span className="vs">50+</span>
                      <span className="vp">{i === 0 ? "320 000" : "330 000"}</span>
                      <span className="qty">
                        <span>−</span>
                        <b>{i === 0 ? 2 : 0}</b>
                        <span>+</span>
                      </span>
                    </div>
                  ))}
                  <div className="sc-btn">{m.addToCart}</div>
                </div>
                <ScNav labels={m.nav} active={1} />
              </div>
            </div>
            <figcaption className="gcap">
              <b>{caps[1].b}</b>
              <span>{caps[1].s}</span>
            </figcaption>
          </figure>

          {/* -------- корзина и доставка -------- */}
          <figure className="gitem">
            <div className="phone">
              <div className="screen">
                <div className="sc-top">
                  <span className="back">‹</span>
                  <span className="nm">{m.checkoutTitle}</span>
                  <span className="lang">{m.lang}</span>
                </div>
                <div className="sc-body tight">
                  {m.cartItems.map((item, i) => (
                    <div className="crow" key={item}>
                      <div className="cph" style={{ background: TINTS[i] }} />
                      <div>
                        <div className="nm">{item}</div>
                        <div className="qty" style={{ marginTop: 3 }}>
                          <span>−</span>
                          <b>{i === 0 ? 2 : 4}</b>
                          <span>+</span>
                        </div>
                      </div>
                      <div className="pr">{i === 0 ? "640 000" : "384 000"}</div>
                    </div>
                  ))}
                  <div className="total">
                    <span>{m.total}</span>
                    <b>1 024 000</b>
                  </div>
                  <div className="cap-label">{m.getLabel}</div>
                  <div className="seg">
                    <div>{m.pickup}</div>
                    <div className="on">{m.delivery}</div>
                  </div>
                  <div className="map">
                    <span className="pin" />
                  </div>
                  <div className="addr">
                    {m.address}
                    <em>{m.addressNote}</em>
                  </div>
                  <div className="sc-btn">{m.placeOrder}</div>
                </div>
                <ScNav labels={m.nav} active={2} />
              </div>
            </div>
            <figcaption className="gcap">
              <b>{caps[2].b}</b>
              <span>{caps[2].s}</span>
            </figcaption>
          </figure>

          {/* -------- документы -------- */}
          <figure className="gitem">
            <div className="phone">
              <div className="screen">
                <div className="sc-top">
                  <span className="back">‹</span>
                  <span className="nm">{m.reconTitle}</span>
                  <span className="lang">{m.lang}</span>
                </div>
                <div className="sc-body tight">
                  <div className="chips">
                    {m.reconChips.map((c, i) => (
                      <span className={`chip${i === 0 ? " on" : ""}`} key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="period">01.08.2026 — 31.08.2026</div>
                  {m.reconDocs.map((d) => (
                    <div className="drow" key={d.n}>
                      <div>
                        <div>{d.n}</div>
                        <div className="dt">{d.d}</div>
                      </div>
                      <div className={`ds${d.neg ? " minus" : ""}`}>{d.s}</div>
                    </div>
                  ))}
                  <div className="total">
                    <span>{m.saldo}</span>
                    <b>−1 240 000</b>
                  </div>
                  <div className="sc-btn ghost">{m.reconBtn1}</div>
                  <div className="sc-btn">{m.reconBtn2}</div>
                </div>
                <ScNav labels={m.nav} active={3} />
              </div>
            </div>
            <figcaption className="gcap">
              <b>{caps[3].b}</b>
              <span>{caps[3].s}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
