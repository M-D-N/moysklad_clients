"use client";

import Logo from "./Logo";
import SectionHead from "./SectionHead";
import { useI18n, RichText } from "@/lib/i18n";

/** Текст и список справа от макета. */
function SpotCopy({ spot }) {
  return (
    <div className="spot-copy">
      <div className="eyebrow">{spot.e}</div>
      <h3>{spot.h}</h3>
      <p>{spot.p}</p>
      <ul className="spot-list">
        {spot.u.map((li) => (
          <li key={li}>
            <RichText>{li}</RichText>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Spots() {
  const { t } = useI18n();
  const m = t.mock;
  const ms = t.ms;
  const [s1, s2, s3, s4] = t.spots;

  return (
    <section className="band">
      <div className="shell">
        <SectionHead num="03" title={t.s3.h} lead={t.s3.l} />

        {/* ---- 1. заказ в учёте ---- */}
        <div className="spot">
          <div className="spot-media">
            <div className="ms-win">
              <div className="ms-bar">
                <i />
                <i />
                <i />
                <span>{ms.bar}</span>
              </div>
              <div className="ms-in">
                <div className="ms-hd">
                  <h4>{ms.title}</h4>
                  <span className="ms-pill">{ms.pill}</span>
                </div>
                <div className="ms-meta">
                  {ms.meta.map((x) => (
                    <div key={x.k}>
                      <span className="mk">{x.k}</span>
                      <span className="mv">{x.v}</span>
                    </div>
                  ))}
                </div>
                <div className="ms-scroll">
                  <table className="ms-tbl">
                    <thead>
                      <tr>
                        <th>{ms.cols[0]}</th>
                        <th className="num">{ms.cols[1]}</th>
                        <th className="num">{ms.cols[2]}</th>
                        <th className="num">{ms.cols[3]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ms.rows.map((r) => (
                        <tr key={r.n}>
                          <td>{r.n}</td>
                          <td className="num">{r.q}</td>
                          <td className="num">{r.p}</td>
                          <td className="num">{r.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="ms-foot">
                  <span className="fk">{ms.total}</span>
                  <span className="fv">1 024 000</span>
                </div>
              </div>
            </div>
          </div>
          <SpotCopy spot={s1} />
        </div>

        {/* ---- 2. панель владельца ---- */}
        <div className="spot flip">
          <div className="spot-media">
            <div className="phone" style={{ maxWidth: 288 }}>
              <div className="screen">
                <div className="sc-top">
                  <Logo />
                  <span className="nm">{m.panelTitle}</span>
                </div>
                <div className="sc-body tight">
                  <div className="kpi">
                    {m.kpi.map((k, i) => (
                      <div key={k.k}>
                        <div className="kk">{k.k}</div>
                        <div className={`kv${i === 0 ? " g" : ""}`}>{k.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bars">
                    {[38, 56, 44, 72, 61, 88, 67].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  {m.panelRows.map((r, i) => (
                    <div className="prow" key={r}>
                      <i>{["▦", "◧", "✦", "◑", "✈"][i]}</i>
                      {r}
                      <span className="val">›</span>
                    </div>
                  ))}
                  <div className="sc-btn ghost">{m.panelBtn}</div>
                </div>
              </div>
            </div>
          </div>
          <SpotCopy spot={s2} />
        </div>

        {/* ---- 3. уведомления в чате ---- */}
        <div className="spot">
          <div className="spot-media">
            <div className="chat">
              <div className="chat-top">
                <div className="chat-av">
                  <Logo color="#041410" />
                </div>
                <div>
                  <div className="cn">Bordo Shop</div>
                  <div className="cs">{m.botSub}</div>
                </div>
              </div>
              <div className="chat-body">
                {m.messages.map((msg) => (
                  <div className="msg" key={msg.time}>
                    <RichText>{msg.t}</RichText>
                    <span className="tm">{msg.time}</span>
                  </div>
                ))}
                <div className="msg">
                  {m.docMsg}
                  <div className="doc">
                    <i>📄</i>
                    <div>
                      <span className="dn">{m.docName}</span>
                      <span className="dz">{m.docSize}</span>
                    </div>
                  </div>
                  <span className="tm">{m.docTime}</span>
                </div>
              </div>
            </div>
          </div>
          <SpotCopy spot={s3} />
        </div>

        {/* ---- 4. настройки витрины ---- */}
        <div className="spot flip">
          <div className="spot-media">
            <div className="phone" style={{ maxWidth: 288 }}>
              <div className="screen">
                <div className="sc-top">
                  <span className="back">‹</span>
                  <span className="nm">{m.showcaseTitle}</span>
                </div>
                <div className="sc-body tight">
                  <div className="cap-label">{m.showcaseHead}</div>
                  {m.showcaseRows.map((r, i) => (
                    <div className="prow" key={r.n}>
                      <i>{["◉", "◎", "％", "◭", "⊘"][i]}</i>
                      {r.n}
                      <span className={`val ${r.on ? "on" : "off"}`}>{r.v}</span>
                    </div>
                  ))}
                  <div className="cap-label">{m.getLabel}</div>
                  <div className="seg">
                    <div className="on">{m.pickup}</div>
                    <div className="on">{m.delivery}</div>
                  </div>
                  <div className="addr">
                    {m.showcaseNote}
                    <em>{m.showcaseNoteSub}</em>
                  </div>
                  <div className="sc-btn">{m.save}</div>
                </div>
              </div>
            </div>
          </div>
          <SpotCopy spot={s4} />
        </div>
      </div>
    </section>
  );
}
