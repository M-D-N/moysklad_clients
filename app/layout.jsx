import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const TITLE = "Teledukon — интернет-магазин в Telegram поверх вашей учётной системы";
const DESC =
  "Витрина интернет-магазина в Telegram поверх вашей учётной системы: покупатель заказывает " +
  "в Telegram, товары, цены и остатки остаются в вашей программе. Готовая интеграция — МойСклад, " +
  "другие системы рассматриваем индивидуально.";

export const metadata = {
  metadataBase: new URL("https://teledukon.uz"),
  title: TITLE,
  description: DESC,
  keywords: [
    "интернет-магазин",
    "магазин в Telegram",
    "Teledukon",
    "Telegram Mini App",
    "МойСклад",
    "магазин для бизнеса",
    "онлайн-заказы",
    "Узбекистан",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/icorp-mark-dark.svg",
    apple: "/brand/icorp-appicon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Teledukon",
    title: TITLE,
    description: DESC,
    locale: "ru_RU",
    alternateLocale: "uz_UZ",
  },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

export const viewport = {
  themeColor: "#0A1012",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700&family=Golos+Text:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
