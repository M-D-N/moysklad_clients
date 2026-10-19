// Логотип и мелкая иконография.
// Логотип — исходный SVG дизайнера: светлая версия для тёмных фонов,
// обычная — для белой шапки.

export default function Logo({ light = false, className = "brand-logo" }) {
  return (
    <img
      className={className}
      src={light ? "/img/logo-footer.svg" : "/img/logo-header.svg"}
      alt="Teledukon"
      width={162}
      height={48}
    />
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

export function ArrowLeft() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

/* ------------------------- иконки бейджей секций ------------------------- */

export function GearIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 1.8v1.6M8 12.6v1.6M14.2 8h-1.6M3.4 8H1.8M12.4 3.6l-1.1 1.1M4.7 11.3l-1.1 1.1M12.4 12.4l-1.1-1.1M4.7 4.7 3.6 3.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

export function BoltIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M9 1.5 3.5 9h3.8l-.6 5.5L13 7H9.2l-.2-5.5Z" fill="currentColor" />
    </svg>
  );
}

export function UsersIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6.2" cy="5.4" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.9 13.2c.3-2.2 2.1-3.6 4.3-3.6s4 1.4 4.3 3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 3.3a2.4 2.4 0 0 1 0 4.5M12.3 9.9c1.1.6 1.8 1.7 2 3.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function TagIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8.2 1.9H14v5.8l-6.4 6.4a1.3 1.3 0 0 1-1.8 0L1.9 9.9a1.3 1.3 0 0 1 0-1.8l6.3-6.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="11.1" cy="4.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.8 9.9 5.9l4.3.5-3.2 3 .9 4.3L8 11.6l-3.9 2.1.9-4.3-3.2-3 4.3-.5L8 1.8Z" fill="currentColor" />
    </svg>
  );
}

export function DocIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 1.8h5l3 3v9.4H4V1.8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 1.8v3.2h3M6 8.6h4M6 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------ иконки блока 04 --------------------------- */

export function CatalogArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="18" fill="#E7F7F0" />
      <rect x="16" y="18" width="18" height="12" rx="3" fill="#34C495" />
      <rect x="16" y="34" width="18" height="12" rx="3" fill="#9FE4CA" />
      <rect x="38" y="18" width="10" height="28" rx="3" fill="#12906A" />
    </svg>
  );
}

export function PriceArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="18" fill="#E7F7F0" />
      <circle cx="32" cy="32" r="14" fill="#34C495" />
      <path d="M26 38 38 26" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="27" cy="27" r="2.6" fill="#fff" />
      <circle cx="37" cy="37" r="2.6" fill="#fff" />
    </svg>
  );
}

export function FinanceArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="18" fill="#E7F7F0" />
      <rect x="17" y="32" width="8" height="15" rx="2.5" fill="#9FE4CA" />
      <rect x="28" y="24" width="8" height="23" rx="2.5" fill="#34C495" />
      <rect x="39" y="17" width="8" height="30" rx="2.5" fill="#12906A" />
    </svg>
  );
}

export function BellArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="18" fill="#E7F7F0" />
      <path d="M32 16a10 10 0 0 1 10 10v7l3 5H19l3-5v-7a10 10 0 0 1 10-10Z" fill="#34C495" />
      <path d="M28 41a4 4 0 0 0 8 0" stroke="#12906A" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------ картинки блока 05 ------------------------- */

export function LaunchReadyArt() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="62" height="52" rx="8" fill="#fff" stroke="#DCE9E4" strokeWidth="1.5" />
      <rect x="4" y="10" width="62" height="10" rx="8" fill="#E7F7F0" />
      <rect x="12" y="26" width="20" height="5" rx="2.5" fill="#9FE4CA" />
      <rect x="12" y="35" width="34" height="5" rx="2.5" fill="#E7F7F0" />
      <rect x="12" y="44" width="28" height="5" rx="2.5" fill="#E7F7F0" />
      <circle cx="86" cy="24" r="10" fill="#34C495" />
      <circle cx="86" cy="44" r="10" fill="#12906A" />
      <circle cx="86" cy="64" r="10" fill="#9FE4CA" />
      <path d="M70 28h6M70 44h6M70 60h6" stroke="#9FE4CA" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M100 44h12l-6 6M106 38l6 6" stroke="#1FA97B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LaunchNewArt() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <circle cx="60" cy="42" r="26" fill="#E7F7F0" />
      <rect x="40" y="34" width="40" height="22" rx="6" fill="#fff" stroke="#DCE9E4" strokeWidth="1.5" />
      <path d="M48 44h24" stroke="#34C495" strokeWidth="3" strokeLinecap="round" />
      <circle cx="96" cy="26" r="11" fill="#34C495" />
      <path d="M96 21v10M91 26h10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M28 20l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#9FE4CA" />
    </svg>
  );
}

export function LaunchOtherArt() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="6" y="14" width="34" height="14" rx="5" fill="#fff" stroke="#DCE9E4" strokeWidth="1.5" />
      <rect x="6" y="33" width="34" height="14" rx="5" fill="#fff" stroke="#DCE9E4" strokeWidth="1.5" />
      <rect x="6" y="52" width="34" height="14" rx="5" fill="#fff" stroke="#DCE9E4" strokeWidth="1.5" />
      <circle cx="68" cy="40" r="12" fill="#34C495" />
      <path d="M64 40a4 4 0 0 1 4-4h2M72 40a4 4 0 0 1-4 4h-2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M42 21h12M42 40h12M42 59h12" stroke="#9FE4CA" strokeWidth="2" strokeDasharray="3 3" />
      <rect x="88" y="26" width="26" height="26" rx="8" fill="#12906A" />
      <path d="M108 33 94 41l4.4 1.3 1.4 4.3 2.2-3.5 3.9 2.4L108 33Z" fill="#fff" />
    </svg>
  );
}

/* --------------------------------- соцсети -------------------------------- */

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

export function CrownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 12.4h12l1-7-3.6 2.4L8 3l-3.4 4.8L1 5.4l1 7Z" fill="currentColor" />
    </svg>
  );
}
