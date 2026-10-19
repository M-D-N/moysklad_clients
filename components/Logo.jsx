// Знак iCORP. Цвет задаётся пропсом, потому что он нужен и на тёмном фоне,
// и вывернутым на бирюзовом кружке аватарки бота.
export default function Logo({ color = "#0EB18A", className }) {
  return (
    <svg viewBox="0 0 380 380" aria-hidden="true" className={className}>
      <g fill={color}>
        <path d="M86.53 156.77h14.43v139.2H86.53z" />
        <path d="M245.5 84.03c24.95 0 48.02 7.48 66.78 20.15v18.84c-17.43-14.79-40.75-23.94-66.78-23.94-55.58 0-98.77 41.7-98.77 90.92s43.19 90.92 98.77 90.92c26.03 0 49.35-9.15 66.78-23.94v18.84c-18.76 12.68-41.83 20.15-66.78 20.15-62.86 0-113.81-47.45-113.81-105.97S182.64 84.03 245.5 84.03Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h380v380H0V0Zm15.05 15.05h349.9v349.9H15.05V15.05Z"
        />
      </g>
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.2 2.5 6.6 5.3 5.3 6.7c.6 1.3 1.7 2.4 3 3l1.4-1.3 2.8 1.4-.4 2.2c-.1.5-.6.9-1.1.8C6.4 12.2 3.8 9.6 3 4c-.1-.5.3-1 .8-1.1l1.4-.4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2 6.2 4.6 8.8 10 3.4"
        stroke="#0EB18A"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
