"use client";

// Переключение языка. Русский — язык по умолчанию, выбор запоминается в браузере.
import { createContext, useContext, useEffect, useState, Fragment } from "react";
import { content } from "./content";

const STORAGE_KEY = "icorp_landing_lang";
const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("ru");

  // localStorage читаем только после монтирования: на сервере его нет,
  // а расхождение разметки ломало бы гидрацию.
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* приватный режим или заблокированные куки — просто остаёмся на русском */
    }
    if (saved === "uz" || saved === "ru") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const change = (next) => {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* не смогли запомнить — не страшно */
    }
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: change, t: content[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n вызван вне I18nProvider");
  return ctx;
}

/**
 * Текст с **жирными** кусками. Разметку держим в тексте, чтобы переводчику
 * не приходилось возиться с тегами.
 */
export function RichText({ children }) {
  const parts = String(children ?? "").split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}
