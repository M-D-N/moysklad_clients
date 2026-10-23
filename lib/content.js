// Весь текст сайта. Русский и узбекский лежат рядом, структура одинаковая —
// компоненты просто читают нужную ветку через useI18n().
//
// Порядок ключей повторяет порядок секций на странице (макет Figma
// «TELEDUKON»): шапка → герой → s1…s10 → подвал.

export const PHONE_RAW = "+998781134999";
export const PHONE_HUMAN = "+998 (78) 113-49-99";
export const CONTACTS_URL = "https://icorp.uz/contacts#";
export const SITE_URL = "https://teledukon.uz";
export const SITE_HUMAN = "www.teledukon.uz";
export const EMAIL = "info@teledukon.uz";
export const TELEGRAM_URL = "https://t.me/icorp_ms_bot";
export const INSTAGRAM_URL = "https://instagram.com/icorp.uz";
export const FACEBOOK_URL = "https://facebook.com/icorp.uz";

// Логотипы клиентов для секции «Наши клиенты»: { src, alt }.
// Пока список пуст — секция не выводится, чтобы на сайте не было заглушек.
export const CLIENT_LOGOS = [];

/* Списки возможностей тарифов. В макете каждый следующий тариф показывает
   свои пункты и всё из предыдущих, поэтому собираем их из этих массивов. */
const FEAT_RU_BASE = [
  "Каталог из МойСклада: товары, модификации, фото, категории, остатки по складам",
  "Упаковки товара: клиент берёт блоками, мешками или коробками",
  "Корзина и заказы сразу в МойСклад, с резервом",
  "Доставка и самовывоз, точка на карте с маршрутом в заказе",
  "Вход по номеру Telegram, баланс и история заказов клиента",
  "Персональные цены по типу цены из карточки клиента",
  "Акции и новинки подтягиваются из МойСклада",
  "Панель владельца: склады, категории, брендирование",
  "Русский и узбекский, напоминание о брошенной корзине",
  "Свой Telegram-бот магазина — без доплаты",
];
const FEAT_RU_PRO = [
  "Аналитика продаж и выгрузка отчётов",
  "Рассылка новостей и акций по клиентам",
  "Обязательный способ оплаты при оформлении",
  "Акт сверки с выгрузкой в Excel",
  "Приватная витрина: вход только своим клиентам",
];
const FEAT_RU_CORP = [
  "Отдельная витрина на каждое юр. лицо, со своей ссылкой",
  "Баланс, цены и история по каждой компании",
  "Панель сотрудника: заказы, остатки, контрагенты, акт сверки",
  "Права на каждого сотрудника отдельно",
  "До 3 юр. лиц, до 5 сотрудников, до 3 номеров владельца",
];

const FEAT_UZ_BASE = [
  "MoySkladdan katalog: mahsulot, modifikatsiya, surat, kategoriya, qoldiqlar",
  "Mahsulot qadoqlari: mijoz blok, qop yoki quti bilan oladi",
  "Savat va buyurtmalar to‘g‘ridan-to‘g‘ri MoySkladga, zaxira bilan",
  "Yetkazib berish va o‘zi olib ketish, xaritada nuqta va marshrut",
  "Telegram raqami bilan kirish, mijoz balansi va buyurtmalar tarixi",
  "Mijoz kartochkasidagi narx turi bo‘yicha shaxsiy narxlar",
  "Aksiya va yangiliklar MoySkladdan tortiladi",
  "Egasi paneli: omborlar, kategoriyalar, brendlash",
  "Rus va o‘zbek tili, tashlab ketilgan savat eslatmasi",
  "Do‘konning o‘z Telegram-boti — qo‘shimcha to‘lovsiz",
];
const FEAT_UZ_PRO = [
  "Savdo tahlili va hisobotlarni yuklash",
  "Mijozlarga yangilik va aksiyalar tarqatmasi",
  "Rasmiylashtirishda to‘lov usulini majburiy tanlash",
  "Solishtirish dalolatnomasi va Excelga yuklash",
  "Yopiq vitrina: faqat o‘z mijozlaringiz kiradi",
];
const FEAT_UZ_CORP = [
  "Har bir yuridik shaxsga o‘z havolasi bilan alohida vitrina",
  "Har bir kompaniya bo‘yicha balans, narx va tarix",
  "Xodim paneli: buyurtma, qoldiq, kontragent, dalolatnoma",
  "Har bir xodimga alohida huquqlar",
  "3 tagacha yuridik shaxs, 5 tagacha xodim, 3 tagacha egasi raqami",
];

export const content = {
  /* ============================ РУССКИЙ ============================ */
  ru: {
    langLabel: "RU",
    brandBy: "от iCORP",

    nav: {
      start: "С чего начать",
      how: "Как это работает",
      features: "Возможности",
      who: "Кому подойдёт",
      plans: "Тарифы",
      clients: "Наши клиенты",
      faq: "FAQs",
      cta: "Получить бесплатное демо",
      langName: "Русский",
      menu: "Меню",
      close: "Закрыть",
      callUs: "Позвонить",
    },

    hero: {
      badge: ["Новый формат", "онлайн-продаж"],
      h1a: "Teledukon — ваш ",
      h1hl: "онлайн-магазин",
      h1b: " прямо в Telegram",
      lead: "Магазин в Telegram за 1 день с автоматической синхронизацией в систему МойСклад.",
      cta1: "Получить бесплатное демо",
      cta2: "Как это работает",
      alt: "Магазин Teledukon в Telegram: заказы, витрина и остатки",
    },

    /* ---------------------- 01 · как это работает ---------------------- */
    s1: {
      badge: "Как это работает",
      num: "01",
      ha: "Ваш магазин и учётная система",
      hb: " — единое целое",
      statNum: "24/7",
      statNote: "Приём заказов без выходных",
      alt: "Покупатель выбирает товары в Telegram, заказ уходит в МойСклад",
      stepsH: "Как Teledukon автоматизирует ",
      stepsHl: "каждый этап обработки заказа",
      steps: [
        {
          n: "I",
          h: "Выбор и оформление",
          p: "Клиент открывает магазин в Telegram, выбирает товары из каталога и оформляет заказ за несколько нажатий.",
        },
        {
          n: "II",
          h: "Автоматическая обработка",
          p: "Teledukon связывает магазин с учётной системой и исключает ручной перенос заказов.",
        },
        {
          n: "III",
          h: "Получение и отгрузка",
          p: "Все заказы поступают в МойСклад с составом, суммой и данными для дальнейшей обработки.",
        },
      ],
    },

    /* ------------------- 02 · больше, чем просто бот ------------------- */
    s2: {
      badge: "Больше, чем просто бот",
      num: "02",
      ha: "Всё необходимое ",
      hb: "для онлайн-продаж",
      hc: " в одном месте",
      cta: "Попробовать бесплатно",
      alt: "Экраны магазина Teledukon: каталог, витрины организаций, корзина",
    },

    /* -------------------- 03 · управление бизнесом --------------------- */
    s3: {
      badge: "Управление бизнесом",
      num: "03",
      ha: "Больше возможностей для ",
      hb: "вашего бизнеса с Teledukon",
      cta: "Узнать больше о Teledukon",
      ctaSub: "Бесплатная консультация",
      prev: "Предыдущий слайд",
      next: "Следующий слайд",
      slides: [
        {
          h: "Управляйте магазином прямо из Telegram",
          p1: "Настраивайте витрину, выбирайте доступные товары, категории и склады, управляйте фирменным оформлением магазина — всё через удобную панель в Telegram.",
          p2: "Следите за продажами и возвратами, получайте отчёты, запускайте рассылки и давайте доступ сотрудникам. Основные инструменты управления всегда под рукой.",
          img: "/img/slide-1.webp",
          alt: "Панель владельца магазина в Telegram",
        },
        {
          h: "Заказ сразу становится документом в учёте",
          p1: "Менеджер не переписывает список товаров из переписки: заказ приходит в МойСклад с позициями, количеством, ценами и складом списания.",
          p2: "В документе видно, что покупка пришла из магазина в Telegram, — источник заказа подставляется автоматически.",
          img: "/img/slide-2.webp",
          alt: "Заказ покупателя в МойСкладе, созданный из Telegram",
        },
        {
          h: "Клиент получает уведомления и документы",
          p1: "Бот напоминает о сроке оплаты, сообщает о статусе заказа и присылает акт сверки файлом — без звонков менеджеру и бухгалтеру.",
          p2: "Те же уведомления работают и на новинки с акциями: рассылка уходит вашим покупателям прямо в Telegram.",
          img: "/img/slide-3.webp",
          alt: "Уведомления Teledukon в Telegram: оплата, статус заказа, акт сверки",
        },
        {
          h: "Вы решаете, что видит покупатель",
          p1: "Цены и остатки можно показывать, скрывать или округлять: витрина покажет «50+» вместо точной цифры, и реальный остаток не уйдёт в браузер.",
          p2: "Включается работа под заказ, приватная витрина только для своих клиентов, самовывоз и доставка — всё настройками, без разработки.",
          img: "/img/slide-4.webp",
          alt: "Настройки витрины: показ цен, остатков и способов получения",
        },
      ],
    },

    /* -------------------------- 04 · возможности ----------------------- */
    s4: {
      badge: "Возможности",
      num: "04",
      ha: "Продуманный функционал ",
      hb: "для эффективных продаж",
      rows: [
        {
          h: "Каталог и витрина",
          p: "Удобный каталог с актуальными товарами, ценами и остатками прямо в Telegram.",
          chips: [
            "Категории, подкатегории и поиск товаров",
            "Размеры, цвета и другие характеристики",
            "Акции, новинки и фотографии товаров",
            "Управление отображением цен и остатков",
          ],
        },
        {
          h: "Цены и заказы",
          p: "Гибкие условия продаж и автоматическое оформление заказов для розничных и оптовых клиентов.",
          chips: [
            "Розничные и персональные цены для оптовиков",
            "Скидки и специальные предложения",
            "Самовывоз, доставка и способы оплаты",
            "Автоматическая передача заказов в МойСклад",
          ],
        },
        {
          h: "Финансы и управление",
          p: "Контролируйте продажи, управляйте магазином и отслеживайте взаиморасчёты с покупателями.",
          chips: [
            "Баланс, задолженность и история заказов",
            "Аналитика продаж, оплат и возвратов",
            "Акты сверки и выгрузка документов",
            "Управление складами, витриной и сотрудниками",
          ],
        },
        {
          h: "Уведомления и автоматизация",
          p: "Поддерживайте связь с покупателями и автоматизируйте повторные продажи через Telegram.",
          chips: [
            "Уведомления о заказах и их статусах",
            "Напоминания об оплате и забытых корзинах",
            "Рассылки новинок и специальных предложений",
            "Фирменный Telegram-магазин на двух языках",
          ],
        },
      ],
    },

    /* ------------------------- 05 · быстрый запуск ---------------------- */
    s5: {
      badge: "Быстрый запуск",
      num: "05",
      ha: "Выберите удобный способ ",
      hb: "запуска вашего магазина",
      cards: [
        {
          h: "Уже используете МойСклад?",
          p: "Магазин в Telegram за 1 день с автоматической синхронизацией в систему МойСклад.",
          cta: "Получить бесплатное демо",
          sub: "Открыть Teledukon",
          primary: true,
        },
        {
          h: "Пока нет учётной системы?",
          p: "Поможем внедрить МойСклад, загрузить товары и подготовить всё для онлайн-продаж в Telegram.",
          cta: "Обсудить подключение",
          sub: "Внедрение под ключ",
        },
        {
          h: "Работаете в другой системе?",
          p: "Изучим возможность интеграции и предложим оптимальное решение под ваши бизнес-процессы.",
          cta: "Обсудить интеграцию",
          sub: "Подключимся к вашей системе",
        },
      ],
    },

    /* -------------------------- 06 · кому подойдёт ---------------------- */
    s6: {
      badge: "Кому подойдёт",
      num: "06",
      ha: "Один Teledukon — ",
      hb: "множество возможностей для бизнеса",
      alt: "Товары разных категорий в магазине Teledukon",
      cards: [
        {
          h: "Розничные магазины",
          p: "Покупатели выбирают товары, добавляют их в корзину и оформляют заказ с доставкой или самовывозом. Всё прямо в Telegram.",
        },
        {
          h: "Строительные материалы",
          p: "Управляйте большим ассортиментом, несколькими складами и остатками. Покупатели видят доступные товары и оформляют заказы.",
        },
        {
          h: "Одежда и обувь",
          p: "Удобный каталог с размерами, цветами и актуальными остатками. Покупатели самостоятельно выбирают подходящие варианты товаров.",
        },
        {
          h: "Опт и дистрибуция",
          p: "Персональные цены, баланс и задолженность для каждого клиента. Заказы автоматически передаются в учётную систему.",
        },
        {
          h: "Продукты и бытовая химия",
          p: "Удобное оформление повседневных покупок и повторных заказов. Клиенты быстро находят нужные товары и экономят время.",
        },
        {
          h: "Сети и группы компаний",
          p: "Отдельные витрины для разных организаций со своими товарами, складами и категориями. Удобная работа с несколькими направлениями бизнеса.",
        },
      ],
    },

    /* ------------------------------ 07 · тарифы -------------------------- */
    s7: {
      badge: "Тарифные планы",
      num: "07",
      ha: "Гибкие тарифы ",
      hb: "для бизнеса любого масштаба",
      month: "На месяц",
      year: "На год",
      unitMonth: "сум / в мес.",
      unitYear: "сум / в год",
      yearSave: "−20% при оплате за год",
      trial: "14 дней бесплатно",
      cta: "Выбрать тариф",
      plans: [
        {
          name: "Базовый",
          price: 350000,
          sub: "Базовый функционал",
          who: "Первый магазин и розница",
          u: FEAT_RU_BASE,
        },
        {
          name: "Профессиональный",
          price: 450000,
          sub: "Расширенный функционал",
          who: "Когда заказы уже идут",
          featured: true,
          u: [...FEAT_RU_PRO, ...FEAT_RU_BASE],
        },
        {
          name: "Корпоративный",
          price: 550000,
          sub: "Полный функционал",
          who: "Несколько юр. лиц и сотрудники",
          u: [...FEAT_RU_CORP, ...FEAT_RU_PRO, ...FEAT_RU_BASE],
        },
      ],
    },

    /* ---------------------------- 08 · клиенты --------------------------- */
    s8: {
      badge: "Наши клиенты",
      num: "08",
      ha: "Бизнес, который уже работает ",
      hb: "с Teledukon",
    },

    /* ----------------------------- 09 · заявка --------------------------- */
    s9: {
      badge: "Попробуйте бесплатно",
      num: "09",
      ha: "Запустите продажи в Telegram ",
      hb: "вместе с Teledukon",
      alt: "Магазин Teledukon на экранах телефона",
    },
    form: {
      name: "Ваше имя",
      namePh: "Азиз",
      phone: "Телефон",
      phonePh: "+998 90 123 45 67",
      company: "Компания (необязательно)",
      companyPh: "Например, ООО iCORP CRM",
      comment: "Комментарий (необязательно)",
      commentPh: "Вопрос или предложение",
      submit: "Оставить заявку",
      sending: "Отправляем…",
      okH: "Заявка принята",
      okP: "Свяжемся с вами в рабочее время и покажем витрину вживую.",
      errPhone: "Укажите номер телефона",
      errName: "Как к вам обращаться?",
      errSend: "Не получилось отправить. Позвоните нам: ",
    },

    /* ------------------------------- 10 · FAQ ---------------------------- */
    s10: {
      badge: "FAQs",
      num: "10",
      ha: "Всё, что нужно знать ",
      hb: "о подключении телеграм-бота",
    },
    faq: [
      {
        q: "Нужен ли отдельный сайт для работы с Teledukon?",
        a: "Нет. Магазин открывается внутри Telegram по ссылке — её ставят в Instagram, на визитку, в рекламу и на чек. Сайт можно завести позже, на работу магазина это не влияет.",
      },
      {
        q: "Можно ли устанавливать разные цены для покупателей?",
        a: "Да, это одна из главных функций для опта. Тип цены задан в карточке контрагента в МойСкладе, и каждый клиент видит в витрине свою цену — розничную, оптовую или специальную.",
      },
      {
        q: "Как быстро можно запустить магазин?",
        a: "Если вы уже работаете в МойСкладе — за один день: подключаем витрину к вашему аккаунту, настраиваем склады, категории и оформление. Если учётной системы нет, сначала внедряем её, сроки считаем после разбора ассортимента.",
      },
      {
        q: "Какие способы доставки и оплаты доступны?",
        a: "Самовывоз и доставка с выбором точки на карте — адрес уходит в заказ вместе с маршрутом. Способы оплаты берутся из вашего МойСклада, клиент выбирает нужный при оформлении.",
      },
      {
        q: "Можно ли подключить Teledukon без МойСклада?",
        a: "Витрина работает поверх учётной системы, поэтому она нужна. Если её нет — поможем внедрить МойСклад: заведём товары, категории, цены и склады, а потом подключим магазин.",
      },
      {
        q: "Сколько стоит подключение Teledukon?",
        a: "Подключение, настройка витрины и обучение входят в абонентскую плату, если вы уже работаете в МойСкладе. Дальше — тариф от 350 000 сум в месяц, при оплате за год скидка 20%.",
      },
      {
        q: "Как товары и остатки попадают в магазин?",
        a: "Автоматически из МойСклада: товары, фотографии, категории, цены и остатки. Второй каталог вести не нужно — завели новый товар в учёте, он сам появился в витрине.",
      },
      {
        q: "Безопасно ли подключать магазин к МойСкладу?",
        a: "Доступ к учёту живёт только на сервере и ограничен токеном, который вы в любой момент отзываете в МойСкладе. Номер покупателя подтверждает сам Telegram, подставить чужой нельзя.",
      },
      {
        q: "Можно ли использовать собственный Telegram-бот?",
        a: "Да, на любом тарифе и без доплаты: вы создаёте бота в BotFather, мы подключаем его к вашей витрине. Без своего бота магазин работает в общем боте сервиса.",
      },
      {
        q: "Можно ли попробовать Teledukon бесплатно?",
        a: "Да. Покажем витрину вживую на демо-магазине, а тариф «Профессиональный» даём на 14 дней бесплатно, чтобы вы проверили всё на своих товарах.",
      },
    ],

    /* ------------------------------- подвал ------------------------------ */
    footer: {
      tagA: "Teledukon",
      tagB: " — ваш онлайн-магазин прямо в Telegram",
      cta: "Получить бесплатное демо",
      navTitle: "Навигация",
      contactsTitle: "Контакты",
      phoneK: "Номер телефона",
      emailK: "E-mail",
      addressK: "Адрес",
      address: "Узбекистан, г. Ташкент, ул. Чуст, 1",
      socialK: "Соц сети",
      rights: "2026 Teledukon. Все права защищены.",
      by: "Разработано iCORP",
    },
  },

  /* ============================ O‘ZBEKCHA ============================ */
  uz: {
    langLabel: "UZ",
    brandBy: "iCORP’dan",

    nav: {
      start: "Nimadan boshlash",
      how: "Qanday ishlaydi",
      features: "Imkoniyatlar",
      who: "Kimga mos keladi",
      plans: "Tariflar",
      clients: "Mijozlarimiz",
      faq: "FAQs",
      cta: "Bepul demo olish",
      langName: "O‘zbekcha",
      menu: "Menyu",
      close: "Yopish",
      callUs: "Qo‘ng‘iroq",
    },

    hero: {
      badge: ["Onlayn-savdoning", "yangi formati"],
      h1a: "Teledukon — Telegramdagi ",
      h1hl: "onlayn-do‘koningiz",
      h1b: "",
      lead: "Telegramdagi do‘kon 1 kunda, MoySklad tizimi bilan avtomatik sinxronizatsiya bilan.",
      cta1: "Bepul demo olish",
      cta2: "Qanday ishlaydi",
      alt: "Telegramdagi Teledukon do‘koni: buyurtmalar, vitrina va qoldiqlar",
    },

    s1: {
      badge: "Qanday ishlaydi",
      num: "01",
      ha: "Do‘koningiz va hisob tizimingiz",
      hb: " — yagona butun",
      statNum: "24/7",
      statNote: "Buyurtmalar dam olishsiz qabul qilinadi",
      alt: "Xaridor Telegramda mahsulot tanlaydi, buyurtma MoySkladga tushadi",
      stepsH: "Teledukon buyurtmaning ",
      stepsHl: "har bir bosqichini avtomatlashtiradi",
      steps: [
        {
          n: "I",
          h: "Tanlash va rasmiylashtirish",
          p: "Mijoz Telegramda do‘konni ochadi, katalogdan mahsulot tanlaydi va bir necha bosishda buyurtma beradi.",
        },
        {
          n: "II",
          h: "Avtomatik qayta ishlash",
          p: "Teledukon do‘konni hisob tizimi bilan bog‘laydi va buyurtmalarni qo‘lda ko‘chirish zaruratini yo‘q qiladi.",
        },
        {
          n: "III",
          h: "Qabul qilish va jo‘natish",
          p: "Barcha buyurtmalar tarkibi, summasi va kerakli ma’lumotlari bilan MoySkladga tushadi.",
        },
      ],
    },

    s2: {
      badge: "Oddiy botdan ko‘proq",
      num: "02",
      ha: "Onlayn-savdo uchun ",
      hb: "kerakli hamma narsa",
      hc: " bir joyda",
      cta: "Bepul sinab ko‘rish",
      alt: "Teledukon do‘koni ekranlari: katalog, tashkilotlar vitrinasi, savat",
    },

    s3: {
      badge: "Biznesni boshqarish",
      num: "03",
      ha: "Biznesingiz uchun ko‘proq ",
      hb: "imkoniyatlar — Teledukon bilan",
      cta: "Teledukon haqida ko‘proq",
      ctaSub: "Bepul maslahat",
      prev: "Oldingi slayd",
      next: "Keyingi slayd",
      slides: [
        {
          h: "Do‘konni to‘g‘ridan-to‘g‘ri Telegramdan boshqaring",
          p1: "Vitrinani sozlang, mavjud mahsulot, kategoriya va omborlarni tanlang, do‘konning brend ko‘rinishini boshqaring — barchasi Telegramdagi qulay panel orqali.",
          p2: "Savdo va qaytarishlarni kuzating, hisobot oling, tarqatma yuboring va xodimlarga ruxsat bering. Asosiy vositalar doimo qo‘l ostida.",
          img: "/img/slide-1.webp",
          alt: "Telegramdagi do‘kon egasi paneli",
        },
        {
          h: "Buyurtma darhol hisobdagi hujjatga aylanadi",
          p1: "Menejer yozishmadan mahsulotlar ro‘yxatini ko‘chirmaydi: buyurtma MoySkladga tarkibi, soni, narxi va ombori bilan tushadi.",
          p2: "Hujjatda xaridning Telegramdagi do‘kondan kelgani ko‘rinadi — manba avtomatik qo‘yiladi.",
          img: "/img/slide-2.webp",
          alt: "Telegramdan yaratilgan MoySkladdagi xaridor buyurtmasi",
        },
        {
          h: "Mijoz bildirishnoma va hujjatlarni oladi",
          p1: "Bot to‘lov muddatini eslatadi, buyurtma holatini xabar qiladi va solishtirish dalolatnomasini fayl bilan yuboradi — qo‘ng‘iroqsiz.",
          p2: "Xuddi shu bildirishnomalar yangilik va aksiyalar uchun ham ishlaydi: tarqatma Telegramga tushadi.",
          img: "/img/slide-3.webp",
          alt: "Telegramdagi Teledukon bildirishnomalari",
        },
        {
          h: "Xaridor nimani ko‘rishini siz hal qilasiz",
          p1: "Narx va qoldiqni ko‘rsatish, yashirish yoki yaxlitlash mumkin: vitrina aniq son o‘rniga «50+» ko‘rsatadi.",
          p2: "Buyurtma asosida ishlash, faqat o‘z mijozlari uchun yopiq vitrina, o‘zi olib ketish va yetkazib berish — hammasi sozlama bilan.",
          img: "/img/slide-4.webp",
          alt: "Vitrina sozlamalari: narx, qoldiq va olish usullari",
        },
      ],
    },

    s4: {
      badge: "Imkoniyatlar",
      num: "04",
      ha: "Samarali savdo uchun ",
      hb: "o‘ylangan funksional",
      rows: [
        {
          h: "Katalog va vitrina",
          p: "Dolzarb mahsulot, narx va qoldiqlar bilan qulay katalog — to‘g‘ridan-to‘g‘ri Telegramda.",
          chips: [
            "Kategoriyalar, ichki kategoriyalar va qidiruv",
            "O‘lcham, rang va boshqa xususiyatlar",
            "Aksiyalar, yangiliklar va mahsulot suratlari",
            "Narx va qoldiqlarni ko‘rsatishni boshqarish",
          ],
        },
        {
          h: "Narxlar va buyurtmalar",
          p: "Chakana va ulgurji mijozlar uchun moslashuvchan shartlar va avtomatik rasmiylashtirish.",
          chips: [
            "Chakana va ulgurji uchun shaxsiy narxlar",
            "Chegirmalar va maxsus takliflar",
            "O‘zi olib ketish, yetkazib berish va to‘lov usullari",
            "Buyurtmalarni MoySkladga avtomatik uzatish",
          ],
        },
        {
          h: "Moliya va boshqaruv",
          p: "Savdoni nazorat qiling, do‘konni boshqaring va xaridorlar bilan hisob-kitoblarni kuzating.",
          chips: [
            "Balans, qarzdorlik va buyurtmalar tarixi",
            "Savdo, to‘lov va qaytarishlar tahlili",
            "Solishtirish dalolatnomalari va hujjatlar",
            "Ombor, vitrina va xodimlarni boshqarish",
          ],
        },
        {
          h: "Bildirishnoma va avtomatlashtirish",
          p: "Xaridorlar bilan aloqani saqlang va takroriy savdoni Telegram orqali avtomatlashtiring.",
          chips: [
            "Buyurtma va ularning holati haqida xabar",
            "To‘lov va tashlab ketilgan savat eslatmalari",
            "Yangilik va maxsus takliflar tarqatmasi",
            "Ikki tilli brendli Telegram-do‘kon",
          ],
        },
      ],
    },

    s5: {
      badge: "Tez ishga tushirish",
      num: "05",
      ha: "Do‘koningizni ishga tushirishning ",
      hb: "qulay yo‘lini tanlang",
      cards: [
        {
          h: "MoySkladdan foydalanyapsizmi?",
          p: "Telegramdagi do‘kon 1 kunda, MoySklad tizimi bilan avtomatik sinxronizatsiya bilan.",
          cta: "Bepul demo olish",
          sub: "Teledukonni ochish",
          primary: true,
        },
        {
          h: "Hisob tizimi hali yo‘qmi?",
          p: "MoySkladni joriy etishga, mahsulotlarni yuklashga va Telegramdagi savdoga tayyorlashga yordam beramiz.",
          cta: "Ulanishni muhokama qilish",
          sub: "Kalit topshirish asosida",
        },
        {
          h: "Boshqa tizimda ishlaysizmi?",
          p: "Integratsiya imkonini o‘rganamiz va biznes jarayonlaringizga mos yechim taklif qilamiz.",
          cta: "Integratsiyani muhokama qilish",
          sub: "Tizimingizga ulanamiz",
        },
      ],
    },

    s6: {
      badge: "Kimga mos keladi",
      num: "06",
      ha: "Bitta Teledukon — ",
      hb: "biznes uchun ko‘plab imkoniyatlar",
      alt: "Teledukon do‘konidagi turli toifadagi mahsulotlar",
      cards: [
        {
          h: "Chakana do‘konlar",
          p: "Xaridorlar mahsulot tanlaydi, savatga qo‘shadi va yetkazib berish yoki o‘zi olib ketish bilan buyurtma beradi. Hammasi Telegramda.",
        },
        {
          h: "Qurilish mollari",
          p: "Katta assortiment, bir nechta ombor va qoldiqlarni boshqaring. Xaridorlar mavjud mahsulotni ko‘radi va buyurtma beradi.",
        },
        {
          h: "Kiyim va poyabzal",
          p: "O‘lcham, rang va dolzarb qoldiqlar bilan qulay katalog. Xaridorlar mos variantni o‘zlari tanlaydi.",
        },
        {
          h: "Ulgurji va distribyutsiya",
          p: "Har bir mijoz uchun shaxsiy narx, balans va qarzdorlik. Buyurtmalar hisob tizimiga avtomatik uzatiladi.",
        },
        {
          h: "Oziq-ovqat va maishiy kimyo",
          p: "Kundalik va takroriy xaridlarni rasmiylashtirish qulay. Mijozlar kerakli mahsulotni tez topadi.",
        },
        {
          h: "Tarmoqlar va kompaniyalar guruhi",
          p: "Turli tashkilotlar uchun o‘z mahsuloti, ombori va kategoriyasi bilan alohida vitrinalar.",
        },
      ],
    },

    s7: {
      badge: "Tarif rejalari",
      num: "07",
      ha: "Istalgan ko‘lamdagi biznes uchun ",
      hb: "moslashuvchan tariflar",
      month: "Oyiga",
      year: "Yiliga",
      unitMonth: "so‘m / oyiga",
      unitYear: "so‘m / yiliga",
      yearSave: "Yillik to‘lovda −20%",
      trial: "14 kun bepul",
      cta: "Tarifni tanlash",
      plans: [
        {
          name: "Bazaviy",
          price: 350000,
          sub: "Bazaviy funksional",
          who: "Birinchi do‘kon va chakana savdo",
          u: FEAT_UZ_BASE,
        },
        {
          name: "Professional",
          price: 450000,
          sub: "Kengaytirilgan funksional",
          who: "Buyurtmalar allaqachon kelayotganda",
          featured: true,
          u: [...FEAT_UZ_PRO, ...FEAT_UZ_BASE],
        },
        {
          name: "Korporativ",
          price: 550000,
          sub: "To‘liq funksional",
          who: "Bir nechta yuridik shaxs va xodimlar",
          u: [...FEAT_UZ_CORP, ...FEAT_UZ_PRO, ...FEAT_UZ_BASE],
        },
      ],
    },

    s8: {
      badge: "Mijozlarimiz",
      num: "08",
      ha: "Teledukon bilan allaqachon ",
      hb: "ishlayotgan biznes",
    },

    s9: {
      badge: "Bepul sinab ko‘ring",
      num: "09",
      ha: "Telegramdagi savdoni ",
      hb: "Teledukon bilan boshlang",
      alt: "Telefon ekranlarida Teledukon do‘koni",
    },
    form: {
      name: "Ismingiz",
      namePh: "Aziz",
      phone: "Telefon",
      phonePh: "+998 90 123 45 67",
      company: "Kompaniya (ixtiyoriy)",
      companyPh: "Masalan, ООО iCORP CRM",
      comment: "Izoh (ixtiyoriy)",
      commentPh: "Savol yoki taklif",
      submit: "Ariza qoldirish",
      sending: "Yuborilmoqda…",
      okH: "Ariza qabul qilindi",
      okP: "Ish vaqtida bog‘lanamiz va vitrinani jonli ko‘rsatamiz.",
      errPhone: "Telefon raqamini kiriting",
      errName: "Sizga qanday murojaat qilaylik?",
      errSend: "Yuborib bo‘lmadi. Bizga qo‘ng‘iroq qiling: ",
    },

    s10: {
      badge: "FAQs",
      num: "10",
      ha: "Telegram-botni ulash haqida ",
      hb: "bilish kerak bo‘lgan hamma narsa",
    },
    faq: [
      {
        q: "Teledukon bilan ishlash uchun alohida sayt kerakmi?",
        a: "Yo‘q. Do‘kon Telegram ichida havola orqali ochiladi — uni Instagramga, vizitkaga, reklamaga va chekka qo‘yasiz. Saytni keyinroq ochish mumkin.",
      },
      {
        q: "Xaridorlar uchun turli narxlar belgilash mumkinmi?",
        a: "Ha, bu ulgurji uchun asosiy funksiyalardan biri. Narx turi MoySkladdagi kontragent kartochkasida ko‘rsatiladi va har bir mijoz o‘z narxini ko‘radi.",
      },
      {
        q: "Do‘konni qanchalik tez ishga tushirish mumkin?",
        a: "MoySkladda ishlayotgan bo‘lsangiz — bir kunda: vitrinani akkauntingizga ulaymiz, omborlar, kategoriyalar va ko‘rinishni sozlaymiz. Hisob tizimi bo‘lmasa, avval uni joriy etamiz.",
      },
      {
        q: "Qanday yetkazib berish va to‘lov usullari bor?",
        a: "O‘zi olib ketish va xaritada nuqta tanlash bilan yetkazib berish — manzil marshrut bilan buyurtmaga tushadi. To‘lov usullari MoySkladingizdan olinadi.",
      },
      {
        q: "Teledukonni MoySkladsiz ulash mumkinmi?",
        a: "Vitrina hisob tizimi ustida ishlaydi, shuning uchun u kerak. Bo‘lmasa — MoySkladni joriy etishga yordam beramiz.",
      },
      {
        q: "Teledukonni ulash qancha turadi?",
        a: "MoySkladda ishlayotgan bo‘lsangiz, ulash, sozlash va o‘qitish abonent to‘loviga kiradi. Keyin — oyiga 350 000 so‘mdan tarif, yillik to‘lovda 20% chegirma.",
      },
      {
        q: "Mahsulot va qoldiqlar do‘konga qanday tushadi?",
        a: "MoySkladdan avtomatik: mahsulotlar, suratlar, kategoriyalar, narxlar va qoldiqlar. Ikkinchi katalog yuritish shart emas.",
      },
      {
        q: "Do‘konni MoySkladga ulash xavfsizmi?",
        a: "Hisobga kirish faqat serverda saqlanadi va token bilan cheklanadi — uni istalgan vaqtda bekor qilasiz. Xaridor raqamini Telegramning o‘zi tasdiqlaydi.",
      },
      {
        q: "O‘z Telegram-botidan foydalansa bo‘ladimi?",
        a: "Ha, istalgan tarifda va qo‘shimcha to‘lovsiz: botni BotFatherda yaratasiz, biz uni vitrinangizga ulaymiz.",
      },
      {
        q: "Teledukonni bepul sinab ko‘rsa bo‘ladimi?",
        a: "Ha. Demo-do‘konda vitrinani jonli ko‘rsatamiz, «Professional» tarifini esa 14 kunga bepul beramiz.",
      },
    ],

    footer: {
      tagA: "Teledukon",
      tagB: " — Telegramdagi onlayn-do‘koningiz",
      cta: "Bepul demo olish",
      navTitle: "Navigatsiya",
      contactsTitle: "Kontaktlar",
      phoneK: "Telefon raqami",
      emailK: "E-mail",
      addressK: "Manzil",
      address: "O‘zbekiston, Toshkent sh., Chust ko‘chasi, 1",
      socialK: "Ijtimoiy tarmoqlar",
      rights: "2026 Teledukon. Barcha huquqlar himoyalangan.",
      by: "iCORP tomonidan ishlab chiqilgan",
    },
  },
};
