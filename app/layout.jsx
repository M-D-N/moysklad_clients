import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const TITLE = "Интернет-магазин в Telegram для вашего бизнеса — iCORP";
const DESC =
  "Готовый интернет-магазин: каталог, корзина, доставка и оплата внутри Telegram. " +
  "Товары, остатки и заказы ведутся в МойСкладе. Запуск за один день, без разработки сайта.";

export const metadata = {
  metadataBase: new URL("https://icorp.uz"),
  title: TITLE,
  description: DESC,
  keywords: [
    "интернет-магазин",
    "магазин в Telegram",
    "Telegram Mini App",
    "МойСклад",
    "магазин для бизнеса",
    "онлайн-заказы",
    "Узбекистан",
  ],
  icons: {
    icon: "/brand/icorp-mark-dark.svg",
    apple: "/brand/icorp-appicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "iCORP",
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
