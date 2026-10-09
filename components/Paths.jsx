"use client";

import SectionHead from "./SectionHead";
import { useI18n, RichText } from "@/lib/i18n";
import { CONTACTS_URL } from "@/lib/content";

// Три пути запуска. Посетитель должен за десять секунд понять, какой случай
// его: готовая интеграция, внедрение с нуля или отдельный коннектор. Первый
// путь выделен — он единственный, который запускается стандартно и быстро.
export default function Paths() {
  const { t } = useI18n();

  return (
    <section className="band" id="paths">
      <div className="shell">
        <SectionHead num="01" title={t.s0.h} lead={t.s0.l} />

        <div className="paths">
          {t.paths.map((p, i) => (
            <article className={`path${i === 0 ? " path-ready" : ""}`} key={p.h}>
              <div className="path-top">
                <span className={`path-tag tag-${p.state}`}>{p.tag}</span>
                {i === 0 && <span className="path-now">{t.pathNow}</span>}
              </div>

              <h3>{p.h}</h3>
              <p>{p.p}</p>

              <ul className="path-list">
                {p.u.map((li) => (
                  <li key={li}>
                    <RichText>{li}</RichText>
                  </li>
                ))}
              </ul>

              <a className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"} path-cta`} href="#lead">
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Прямо говорим, где проходит граница: иначе обещание «подключим что
            угодно» читается само собой, а это не так. */}
        <p className="paths-note">
          <RichText>{t.pathsNote}</RichText>{" "}
          <a href={CONTACTS_URL} target="_blank" rel="noopener">
            {t.pathsAsk}
          </a>
        </p>
      </div>
    </section>
  );
}
