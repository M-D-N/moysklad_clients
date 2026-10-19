// Знак Teledukon: сумка-покупка с бумажным самолётиком внутри.
// Это перерисовка по макету — когда дизайнер отдаст исходный SVG, достаточно
// заменить содержимое <svg> ниже: классы и размеры снаружи не изменятся.

export default function Logo({ className = "brand-mark", light = false }) {
  const id = light ? "tdg-light" : "tdg";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="8" y1="58" x2="56" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={light ? "#1FA97B" : "#17A074"} />
          <stop offset="1" stopColor={light ? "#7FE9C6" : "#53D7A6"} />
        </linearGradient>
      </defs>

      {/* ручка сумки */}
      <path
        d="M22 22v-3a10 10 0 0 1 20 0v3"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* корпус сумки */}
      <path
        d="M12 26a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v20a12 12 0 0 1-12 12H24a12 12 0 0 1-12-12V26Z"
        fill={`url(#${id})`}
      />
      {/* самолётик */}
      <path
        d="M45 27 19 41.5l8.2 2.4 2.6 8.1 4.1-6.6 7.3 4.6L45 27Zm-4.9 5.3-11.4 9.9 1.3 4.1 10.1-14Z"
        fill="#fff"
      />
    </svg>
  );
}

/* ----------------------------- мелкие иконки ----------------------------- */

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.2 2.5 6.6 5.3 5.3 6.7c.6 1.3 1.7 2.4 3 3l1.4-1.3 2.8 1.4-.4 2.2c-.1.5-.6.9-1.1.8C6.4 12.2 3.8 9.6 3 4c-.1-.5.3-1 .8-1.1l1.4-.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Стрелка «наружу» — в кружке у кнопок. */
export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M4 10 10 4M5 4h5v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Caret() {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden="true" className="caret">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Флажок в переключателе языка. */
export function Flag({ lang }) {
  if (lang === "uz") {
    return (
      <svg viewBox="0 0 20 14" className="flag" aria-hidden="true">
        <rect width="20" height="4.667" fill="#0099B5" />
        <rect y="4.667" width="20" height="4.666" fill="#fff" />
        <rect y="9.333" width="20" height="4.667" fill="#1EB53A" />
        <circle cx="4.4" cy="2.4" r="1.5" fill="#fff" />
        <circle cx="5.2" cy="2.4" r="1.5" fill="#0099B5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 14" className="flag" aria-hidden="true">
      <rect width="20" height="4.667" fill="#fff" />
      <rect y="4.667" width="20" height="4.666" fill="#0039A6" />
      <rect y="9.333" width="20" height="4.667" fill="#D52B1E" />
    </svg>
  );
}

/* ---------------------- иконки бейджей и подвала ---------------------- */

export function SparkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5 9.6 6l4.4 1.6L9.6 9.2 8 13.6 6.4 9.2 2 7.6 6.4 6 8 1.5Z" fill="currentColor" />
    </svg>
  );
}

export function ShopIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 5.5h11l-.8 7a1.6 1.6 0 0 1-1.6 1.4H4.9a1.6 1.6 0 0 1-1.6-1.4l-.8-7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M5.8 5.5V4.3a2.2 2.2 0 0 1 4.4 0v1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M14 2.5 1.8 7.2l3.5 1.1L13 3.8 6.6 9.3l-.2 3.4 2-2.3 3.3 2.3L14 2.5Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="2.7" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="11.4" cy="4.6" r=".85" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M9.6 14V8.6h1.8l.3-2.1H9.6V5.1c0-.6.2-1 1-1h1.1V2.2c-.2 0-.9-.1-1.6-.1-1.6 0-2.7 1-2.7 2.8v1.6H5.5v2.1h1.9V14h2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
