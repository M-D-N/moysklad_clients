"use client";

import SectionHead from "./SectionHead";
import { Check } from "./Logo";
import { useI18n, RichText } from "@/lib/i18n";

export function Facts() {
  const { t } = useI18n();
  return (
    <div className="shell" style={{ paddingBottom: "clamp(46px,6vw,84px)" }}>
      <div className="facts">
        {t.facts.map((f) => (
          <div className="fact" key={f.k}>
            <div className="k">{f.k}</div>
            <div className="v">{f.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="band" id="how">
      <div className="shell">
        <SectionHead num="01" title={t.s1.h} lead={t.s1.l} />

        <div className="flow">
          {t.flow.map((n, i) => (
            <Fragmentish key={n.n} last={i === t.flow.length - 1}>
              <div className="fnode">
                <div className="fk">{n.k}</div>
                <div className="fn">{n.n}</div>
                <div className="fd">{n.d}</div>
              </div>
            </Fragmentish>
          ))}
        </div>

        <div className="steps">
          {t.steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
              <div className="note">{s.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Узел потока и стрелка после него (кроме последнего). */
function Fragmentish({ children, last }) {
  return (
    <>
      {children}
      {last ? null : <div className="farrow">→</div>}
    </>
  );
}

export function Features() {
  const { t } = useI18n();
  return (
    <section className="band" id="features">
      <div className="shell">
        <SectionHead num="04" title={t.s4.h} lead={t.s4.l} />
        <div className="feat-grid">
          {t.features.map((c) => (
            <div className="fcard" key={c.h}>
              <div className="hd">
                <span className="dot" />
                <h3>{c.h}</h3>
              </div>
              <ul>
                {c.u.map((li) => (
                  <li key={li}>
                    <RichText>{li}</RichText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ledger() {
  const { t } = useI18n();
  return (
    <section className="band" id="inside">
      <div className="shell">
        <SectionHead num="05" title={t.s5.h} lead={t.s5.l} />
        <div className="ledger">
          {t.ledger.map((r) => (
            <div className={`lrow ${r.tone}`} key={r.k}>
              <div className="lk">{r.k}</div>
              <div className="lv">{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cases() {
  const { t } = useI18n();
  return (
    <section className="band" id="cases">
      <div className="shell">
        <SectionHead num="06" title={t.s6.h} lead={t.s6.l} />
        <div className="cases">
          {t.cases.map((c) => (
            <div className="case" key={c.h}>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <div className="win">{c.w}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reliability() {
  const { t } = useI18n();
  return (
    <section className="band">
      <div className="shell">
        <SectionHead num="07" title={t.s7.h} lead={t.s7.l} />
        <div className="rel">
          {t.rel.map((r) => (
            <div className="rcard" key={r.h}>
              <div className="t">
                <span className="num">{r.n}</span>
                <h3>{r.h}</h3>
              </div>
              <p>{r.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  const { t } = useI18n();
  return (
    <section className="band" id="plans">
      <div className="shell">
        <SectionHead num="08" title={t.s8.h} lead={t.s8.l} />
        <div className="plans">
          {t.plans.map((p) => (
            <div className={`plan${p.badge ? " best" : ""}`} key={p.h}>
              <div className="pt">
                <h3>{p.h}</h3>
                {p.badge ? <span className="badge">{p.badge}</span> : null}
              </div>
              <p className="who">{p.w}</p>
              <ul>
                {p.u.map((li) => (
                  <li key={li}>
                    <Check />
                    {li}
                  </li>
                ))}
              </ul>
              <div className="price">
                <span className="p">{t.planPrice}</span>
                <span className="u">{t.planUnit}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="small" style={{ marginTop: 18 }}>
          {t.planNote}
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useI18n();
  return (
    <section className="band">
      <div className="shell">
        <SectionHead num="09" title={t.s9.h} />
        <div className="faq">
          {t.faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
