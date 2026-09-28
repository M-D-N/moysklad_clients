// Весь текст сайта. Русский и узбекский лежат рядом, структура одинаковая —
// компоненты просто читают нужную ветку через useI18n().
//
// В строках допустима разметка **жирным** — её разбирает <RichText/>.

export const PHONE_RAW = "+998781134999";
export const PHONE_HUMAN = "+998 (78) 113-49-99";
export const CONTACTS_URL = "https://icorp.uz/contacts#";
export const SITE_URL = "https://icorp.uz";

export const content = {
  /* ============================ РУССКИЙ ============================ */
  ru: {
    langLabel: "RU",
    nav: {
      how: "Как работает",
      screens: "Экраны",
      features: "Возможности",
      cases: "Кому подходит",
      plans: "Тарифы",
      cta: "Оставить заявку",
      menu: "Меню",
      close: "Закрыть",
      callUs: "Позвонить",
    },

    hero: {
      eyebrow: "Интернет-магазин в Telegram",
      h1a: "Готовый ",
      h1hl: "интернет-магазин",
      h1b: " для вашего бизнеса",
      lead:
        "Каталог, корзина, доставка и оплата — внутри Telegram, где уже сидят ваши клиенты. " +
        "Товары, остатки и заказы ведутся в МойСкладе, поэтому склад, деньги и документы " +
        "в порядке с первого дня. Разрабатывать сайт и мобильное приложение не нужно.",
      cta1: "Оставить заявку",
      cta2: "Посмотреть экраны",
      tags: [
        { a: "Запуск ", b: "за 1 день" },
        { a: "Розница и ", b: "опт" },
        { a: "Русский и ", b: "o‘zbekcha" },
        { a: "Без ", b: "разработки" },
      ],
    },

    // подписи внутри макетов телефона
    mock: {
      lang: "RU",
      debtLabel: "Задолженность",
      currency: "сум",
      priceType: "Тип цены: Оптом · ООО «Бордо»",
      chips: ["Акции", "Новинки", "Наличие"],
      stock: "На складе: 50+",
      nav: ["Дом", "Каталог", "Корзина", "Профиль"],
      badgePromo: "Акция",
      badgeNew: "Новинка",
      search: "Поиск по названию",
      catalogTitle: "Каталог",
      sortPrice: "Цена ↑",
      products: [
        { n: "Краска фасадная, 25 кг", old: "400 000", p: "320 000" },
        { n: "Шпатлёвка финишная", p: "72 000" },
        { n: "Грунтовка, 10 л", p: "96 000" },
        { n: "Клей плиточный", old: "58 000", p: "45 000" },
      ],
      productTitle: "Товар",
      productName: "Краска фасадная «Фасад-Про», 25 кг",
      variantsLabel: "Модификации",
      variants: ["Белая", "Бежевая"],
      addToCart: "В корзину · 640 000 сум",
      checkoutTitle: "Оформление",
      cartItems: ["Краска «Фасад-Про», белая", "Грунтовка, 10 л"],
      total: "Итого",
      getLabel: "Получение",
      pickup: "Самовывоз",
      delivery: "Доставка",
      address: "Ташкент, Чиланзар, ул. Бунёдкор, 12",
      addressNote: "Точка на карте · маршрут уйдёт в заказ",
      placeOrder: "Оформить заказ",
      reconTitle: "Акты сверки",
      reconChips: ["Все", "Отгрузки", "Платежи"],
      reconDocs: [
        { n: "Отгрузка 00063", d: "12.08.2026", s: "−4 380 000", neg: true },
        { n: "Приходный ордер 0042", d: "15.08.2026", s: "+3 000 000" },
        { n: "Возврат покупателя 007", d: "21.08.2026", s: "+140 000" },
      ],
      saldo: "Сальдо на конец",
      reconBtn1: "Сводный акт за период",
      reconBtn2: "Отправить в чат",
      panelTitle: "Панель управления",
      kpi: [
        { k: "Продажи за месяц", v: "86 400 000" },
        { k: "Оплаты", v: "71 200 000" },
        { k: "Возвраты", v: "1 900 000" },
        { k: "Заказов", v: "142" },
      ],
      panelRows: [
        "Витрина и остатки",
        "Склады и категории",
        "Логотип и цвет",
        "Аналитика",
        "Рассылка новостей",
      ],
      panelBtn: "Выгрузить отчёт в чат",
      showcaseTitle: "Витрина",
      showcaseHead: "Что видит покупатель",
      showcaseRows: [
        { n: "Показывать цены", v: "вкл", on: true },
        { n: "Показывать наличие", v: "выкл", on: false },
        { n: "Округление остатка", v: "50 %", on: true },
        { n: "Работа под заказ", v: "вкл", on: true },
        { n: "Приватная витрина", v: "вкл", on: true },
      ],
      showcaseNote: "Витрина покажет «50+» вместо точного остатка",
      showcaseNoteSub: "Точная цифра не уходит в браузер покупателя",
      save: "Сохранить",
      botSub: "бот магазина",
      messages: [
        {
          t: "Напоминаем об оплате: **Заказ № 1042** на сумму **1 024 000 сум**. Срок оплаты — 12 сентября.",
          time: "09:00",
        },
        { t: "Ваш заказ собран и готов к отгрузке со склада «Основной».", time: "14:22" },
      ],
      docMsg: "Акт сверки за август готов.",
      docName: "Акт сверки · август 2026",
      docSize: "XLSX · 24 КБ",
      docTime: "18:05",
    },

    facts: [
      {
        k: "Что вы получаете",
        v: "Полноценный магазин: каталог, корзина, заказы, доставка и оплата",
      },
      {
        k: "Где он работает",
        v: "Внутри Telegram — устанавливать приложение не нужно ни вам, ни покупателю",
      },
      {
        k: "Кто ведёт учёт",
        v: "МойСклад: товары, остатки, цены и документы. Есть — подключим, нет — настроим",
      },
      {
        k: "Сколько занимает",
        v: "Один день: вы передаёте товары, мы собираем витрину под ваш бренд",
      },
    ],

    s1: {
      h: "От заявки до первого заказа — один день",
      l: "Техническая часть на нас. От вас нужны товары и решение, как их показывать покупателю.",
    },
    flow: [
      {
        k: "Покупатель",
        n: "Telegram",
        d: "Открывает магазин по ссылке, выбирает товары и оформляет заказ",
      },
      {
        k: "Витрина",
        n: "iCORP MoySkladShop",
        d: "Ваш каталог с ценами, остатками, доставкой и оплатой",
      },
      {
        k: "Учёт",
        n: "МойСклад",
        d: "Заказ, списание со склада, деньги и документы",
      },
    ],
    steps: [
      {
        n: "ШАГ 01",
        h: "Собираем каталог",
        p:
          "Уже работаете в МойСкладе — подключаем за день. Нет — заводим с нуля: товары, категории, " +
          "цены и склады. Прайс в Excel и фотографии загрузим за вас.",
        c: "МойСклад — ваш или новый",
      },
      {
        n: "ШАГ 02",
        h: "Оформляем под ваш бренд",
        p:
          "Логотип, фирменный цвет, название и два языка. Магазин получает ссылку в Telegram — " +
          "её ставят в Instagram, на визитки, в рекламу и на чек.",
        c: "t.me/ваш_магазин",
      },
      {
        n: "ШАГ 03",
        h: "Принимаете заказы",
        p:
          "Заказ приходит в учёт готовым: позиции, количество, склад, адрес доставки и способ оплаты. " +
          "Менеджеру остаётся собрать и отгрузить.",
        c: "Без ручного ввода",
      },
    ],

    s2: {
      h: "Как выглядит магазин у покупателя",
      l: "Привычный по Telegram тёмный интерфейс, ваш логотип и фирменный цвет на каждом экране.",
    },
    screenCaps: [
      { b: "Каталог", s: "Поиск, категории и фильтры. Акции и новинки — отдельными чипсами." },
      { b: "Карточка товара", s: "Несколько фото, размеры и цвета со своими ценами, счётчик на каждый." },
      { b: "Корзина и доставка", s: "Способ получения, адрес точкой на карте и оплата — до отправки заказа." },
      { b: "Документы", s: "Для оптовых клиентов: акт сверки за период и выгрузка файлом в чат." },
    ],

    s3: {
      h: "Четыре сценария, ради которых это покупают",
      l: "Каждый закрывает работу, которую сегодня делают руками или не делают вовсе.",
    },
    ms: {
      bar: "Учёт — Заказы покупателей",
      title: "Заказ покупателя № 1042",
      pill: "Новый",
      meta: [
        { k: "Покупатель", v: "ООО «Бордо»" },
        { k: "Организация", v: "Ваша компания" },
        { k: "Склад", v: "Основной склад" },
        { k: "Источник", v: "Магазин в Telegram" },
      ],
      cols: ["Товар", "Кол-во", "Цена", "Сумма"],
      rows: [
        { n: "Краска «Фасад-Про», белая", q: "2", p: "320 000", s: "640 000" },
        { n: "Грунтовка, 10 л", q: "4", p: "96 000", s: "384 000" },
      ],
      total: "Итого",
    },
    spots: [
      {
        e: "Заказы не теряются",
        h: "Корзина покупателя сразу становится документом",
        p:
          "Никто не переписывает заявку из переписки в таблицу. Заказ приходит готовым — с позициями, " +
          "ценами, складом списания и адресом доставки. Источник проставляется отдельно, поэтому вы " +
          "всегда видите, сколько продаж принёс магазин.",
        u: [
          "Ответственный менеджер подставляется автоматически",
          "Повторное нажатие не создаёт второй заказ",
          "Позиции можно сразу резервировать под покупателя",
          "Остаток списывается при отгрузке, а не при заказе",
        ],
      },
      {
        e: "Магазином управляете вы",
        h: "Панель управления — в том же Telegram",
        p:
          "Владелец заходит в магазин своим номером и попадает в панель. Никакой отдельной админки, " +
          "логинов и паролей: что показывать на витрине, какие склады и категории отдавать покупателям, " +
          "каким цветом и логотипом всё оформить — настраивается с телефона.",
        u: [
          "Продажи, возвраты, приход и расход за любой период",
          "Отчёт приходит файлом прямо в чат",
          "Рассылка акций и новинок подписчикам магазина",
          "Доступ можно дать трём сотрудникам",
        ],
      },
      {
        e: "Бот работает за менеджера",
        h: "Покупатель возвращается сам",
        p:
          "Магазин не молчит между заказами. Бот напоминает о забытой корзине, присылает новинки и " +
          "акции, а оптовым клиентам — напоминание об оплате за три дня до срока.",
        u: [
          "Забытая корзина — напоминание через сутки",
          "Рассылка новинок и скидок по базе подписчиков",
          "Статус заказа приходит покупателю в чат",
          "Всё идёт от имени вашего бренда",
        ],
      },
      {
        e: "Розница и опт вместе",
        h: "Один магазин — разные покупатели",
        p:
          "Случайный покупатель видит обычный магазин с розничными ценами. Постоянный оптовик, " +
          "которого вы знаете, заходит по тому же адресу и видит свои цены, свой долг и свои документы.",
        u: [
          "Персональные цены для оптовых клиентов",
          "Розничным покупателям — заказ без регистрации",
          "Цены и остатки можно скрыть и работать «по запросу»",
          "Закрытая витрина: вход только для своих клиентов",
        ],
      },
    ],

    s4: {
      h: "Что умеет магазин",
      l: "Всё перечисленное уже работает у наших клиентов и настраивается без программиста.",
    },
    features: [
      {
        h: "Каталог и витрина",
        u: [
          "Товары, **размеры и цвета**, остатки по складам",
          "Категории и подкатегории деревом, поиск по названию",
          "**Акции** с перечёркнутой старой ценой",
          "Отметка **«Новинка»** на карточке товара",
          "Несколько фото, зум, отдельные фото для каждого цвета",
          "Артикул, код и штрихкод — показать или скрыть",
        ],
      },
      {
        h: "Цены и скидки",
        u: [
          "Розничные цены для всех и **персональные для оптовиков**",
          "Цены в валюте вашего учёта, пересчёт по курсу",
          "Скидки и спеццены — из вашего учёта, без ручной правки",
          "Режим **«по запросу»**: цены скрыты, заказ уходит с реальными",
        ],
      },
      {
        h: "Заказ, доставка и оплата",
        u: [
          "**Самовывоз или доставка** — что показывать, решаете вы",
          "**Адрес на карте**: точка, автоподстановка адреса и маршрут",
          "Способ оплаты: наличные, карта, перечисление",
          "Сохранённые адреса — повторный заказ в одно касание",
          "Защита от дублей при повторном нажатии",
        ],
      },
      {
        h: "Деньги и документы",
        u: [
          "Баланс и **задолженность** покупателя в реальном времени",
          "История заказов со статусами и составом",
          "**Акт сверки** за период: отгрузки, возвраты, платежи",
          "Сводный акт с оборотами и сальдо — файлом в чат",
          "Печатные формы и выгрузка в Excel",
        ],
      },
      {
        h: "Панель владельца",
        u: [
          "Склады и категории, которые видит витрина",
          "Логотип, фирменный цвет и название магазина",
          "**Аналитика** продаж, возвратов, прихода и расхода",
          "**Рассылка** новостей и акций подписчикам",
          "До трёх сотрудников с доступом в панель",
          "Свой Telegram-бот вместо общего",
        ],
      },
      {
        h: "Повторные продажи",
        u: [
          "Напоминание о **забытой корзине** через сутки",
          "Рассылка новинок и скидок по базе подписчиков",
          "Оптовикам — напоминание об оплате до срока",
          "Кнопка «Открыть магазин» закреплена в чате бота",
        ],
      },
      {
        h: "Остатки и наличие",
        u: [
          "Остаток с учётом резерва или физический — на выбор",
          "**Округление:** витрина покажет «50+» вместо точной цифры",
          "Скрыть остатки от покупателей полностью",
          "**Работа под заказ**: приём заявок на товары без наличия",
          "Прятать позиции, которых нет в наличии",
        ],
      },
      {
        h: "Контроль доступа",
        u: [
          "**Закрытая витрина**: вход только для ваших клиентов",
          "**Блокировка** покупателя в один клик",
          "Отдельная витрина на каждое юр. лицо",
          "Вход по коду, если магазин открыли в браузере",
        ],
      },
      {
        h: "Языки и бренд",
        u: [
          "Русский и узбекский — переключение внутри магазина",
          "Ваш логотип и фирменный цвет на всех экранах",
          "Телефон **вашего менеджера** на каждой странице",
          "Своя ссылка вида t.me/ваш_магазин",
        ],
      },
    ],

    s5: {
      h: "Учёт и склад — на МойСкладе",
      l:
        "Мы не изобретаем свою базу товаров и клиентов. За складом, деньгами и документами стоит " +
        "МойСклад — платформа, на которой работают десятки тысяч компаний. Нет аккаунта — настроим с нуля.",
    },
    ledger: [
      {
        k: "Товары",
        v: "Ведутся в одном месте — магазин подхватывает изменения цен, фото и описаний автоматически",
        tone: "read",
      },
      {
        k: "Склад",
        v: "Остатки списываются при отгрузке. Складов может быть несколько, а покупателю показываете только нужный",
        tone: "read",
      },
      {
        k: "Заказы",
        v: "Каждый заказ — полноценный документ с позициями, складом, юр. лицом и ответственным менеджером",
        tone: "write",
      },
      {
        k: "Деньги",
        v: "Оплаты, долги и взаиморасчёты по каждому покупателю, а для оптовых клиентов — акт сверки за период",
        tone: "write",
      },
      {
        k: "Доступ",
        v: "Мы работаем по ключу, который вы выдаёте и можете отозвать в любой момент. Пароль от аккаунта не запрашиваем",
        tone: "never",
      },
    ],

    s6: {
      h: "Кому подходит",
      l: "Всё, что продаётся штуками и коробками: от розничной точки до оптовой базы.",
    },
    cases: [
      {
        h: "Розничные магазины",
        p: "Покупатели заказывают как на обычном сайте: каталог, корзина, доставка, оплата. Только сайт разрабатывать не нужно.",
        w: "→ Продажи без витрины в аренду",
      },
      {
        h: "Одежда и обувь",
        p: "Размеры и цвета — отдельными позициями со своей ценой и остатком. Покупатель видит, каких размеров нет.",
        w: "→ Меньше вопросов в директ",
      },
      {
        h: "Продукты и бытовая химия",
        p: "Повторяющиеся заказы в одно касание: сохранённые адреса, история и напоминания о новинках.",
        w: "→ Клиент возвращается сам",
      },
      {
        h: "Стройматериалы",
        p: "Большие каталоги и остатки по нескольким складам. Покупатель видит только свой склад и доступное количество.",
        w: "→ Меньше пересортицы",
      },
      {
        h: "Опт и дистрибуция",
        p: "Десятки дилеров, у каждого своя цена и свой долг. Менеджер перестаёт собирать заявки из переписки.",
        w: "→ Заказ сразу корректный",
      },
      {
        h: "Сети и группы компаний",
        p: "Отдельная витрина на каждую организацию: свои склады, свои категории, свой баланс.",
        w: "→ Чистый учёт по компаниям",
      },
    ],

    s7: {
      h: "Работает под нагрузкой",
      l: "Каталог на десятки тысяч позиций и одновременные заходы покупателей — обычный режим, а не стресс-тест.",
    },
    rel: [
      {
        n: "1–2 мс",
        h: "Каталог открывается мгновенно",
        p: "Товары держатся в памяти и обновляются в фоне. Покупатель не ждёт загрузки — свежие цены и остатки подъезжают сами.",
      },
      {
        n: "×5",
        h: "Быстрее открывается история",
        p: "Состав заказа подгружается по клику, а справочники кэшируются отдельно.",
      },
      {
        n: "24/7",
        h: "Магазин принимает заказы",
        p: "Покупатель оформляет заказ ночью и в выходные, а менеджер разбирает его утром — ничего не теряется.",
      },
      {
        n: "0",
        h: "Ключей в браузере покупателя",
        p: "Доступ к вашему учёту живёт только на сервере. Номер телефона подтверждается самим Telegram, подставить чужой нельзя.",
      },
    ],

    s8: {
      h: "Тарифы",
      l: "Абонентская плата в месяц. Подключение, настройка витрины и обучение входят в стоимость.",
    },
    plans: [
      {
        h: "Базовый",
        w: "Первый магазин и быстрый старт",
        u: [
          "Каталог, корзина и приём заказов",
          "Доставка, самовывоз и способы оплаты",
          "Панель владельца и брендирование",
          "Два языка и напоминания о корзине",
        ],
      },
      {
        h: "Профессиональный",
        badge: "Популярный",
        w: "Когда магазин уже приносит заказы",
        u: [
          "Всё из «Базового»",
          "Аналитика продаж и выгрузка отчётов",
          "Рассылка новостей и акций",
          "Документы и акт сверки для оптовых клиентов",
          "Обязательный способ оплаты",
        ],
      },
      {
        h: "Корпоративный",
        w: "Несколько юр. лиц и филиалов",
        u: [
          "Всё из «Профессионального»",
          "Отдельная витрина на каждое юр. лицо",
          "Персональные цены по каждому клиенту",
          "Баланс и история по каждой компании",
          "До трёх сотрудников с доступом",
        ],
      },
    ],
    planPrice: "По запросу",
    planUnit: "абонплата в месяц",
    planNote: "Свой Telegram-бот магазина вместо общего подключается на любом тарифе.",

    s9: { h: "Частые вопросы" },
    faq: [
      {
        q: "У нас нет МойСклада. Это проблема?",
        a: "Нет. Настроим аккаунт с нуля и перенесём товары: примем прайс в Excel, заведём категории, цены, склады и загрузим фотографии. Вы получите и учёт, и магазин сразу.",
      },
      {
        q: "Нужен ли нам сайт?",
        a: "Нет. Магазин открывается внутри Telegram по ссылке — её ставят в Instagram, на визитку, в рекламу и на чек. Сайт можно завести позже, на работу магазина это не влияет.",
      },
      {
        q: "Что нужно устанавливать покупателю?",
        a: "Ничего. Telegram уже стоит почти у всех. Покупатель переходит по ссылке, подтверждает номер одной кнопкой и сразу попадает в каталог.",
      },
      {
        q: "Как покупатель оплачивает заказ?",
        a: "Способ оплаты выбирается при оформлении: наличные при получении, карта или перечисление для юр. лиц. Заказ приходит в учёт с указанным способом, и менеджер видит, как ждать деньги.",
      },
      {
        q: "Можно ли скрыть остатки и цены?",
        a: "Да, и по отдельности. Цены скрываются целиком — магазин работает «по запросу», а в заказ всё равно уходят реальные суммы. Остатки можно спрятать или показывать округлённо: вместо точных 100 штук покупатель увидит «50+».",
      },
      {
        q: "У нас и розница, и опт. Это совместимо?",
        a: "Да, это один магазин. Случайный покупатель видит розничные цены и оформляет заказ без регистрации. Оптовому клиенту, которого вы завели в базе, тот же магазин показывает его персональные цены, долг и документы.",
      },
      {
        q: "Можно работать под собственным ботом?",
        a: "Да. Вы создаёте бота в Telegram и передаёте нам его токен — магазин, уведомления и рассылки идут от имени вашего бренда. Без этого используется общий бот iCORP.",
      },
      {
        q: "Насколько это безопасно для нашего учёта?",
        a: "Мы работаем по ключу доступа, который вы выдаёте и можете отозвать в любой момент; пароль от аккаунта мы не запрашиваем. Ключ хранится на сервере и в браузер покупателя не попадает.",
      },
    ],

    form: {
      eyebrow: "Запуск за один день",
      h: "Покажем магазин на ваших товарах",
      p: "Оставьте заявку — свяжемся, соберём демо-витрину с вашим каталогом и дадим ссылку для проверки.",
      name: "Как вас зовут",
      namePh: "Имя",
      phone: "Телефон",
      company: "Компания",
      companyPh: "Название компании (необязательно)",
      comment: "Комментарий",
      commentPh: "Что продаёте и сколько примерно товаров (необязательно)",
      submit: "Отправить заявку",
      sending: "Отправляем…",
      okTitle: "Заявка принята",
      okText: "Мы получили вашу заявку и свяжемся в рабочее время. Если нужно срочно — позвоните нам.",
      again: "Отправить ещё одну",
      errRequired: "Заполните имя и телефон",
      errPhone: "Проверьте номер телефона",
      errSend: "Не получилось отправить заявку. Позвоните нам или попробуйте ещё раз.",
      consent: "Нажимая кнопку, вы соглашаетесь на обработку контактных данных для связи по заявке.",
    },

    contacts: [
      { k: "Телефон", v: PHONE_HUMAN, href: `tel:${PHONE_RAW}` },
      { k: "Сайт", v: "icorp.uz", href: SITE_URL },
      { k: "Компания", v: "iCORP — автоматизация бизнеса" },
    ],

    footer: "МойСклад — торговая марка её правообладателя. iCORP является партнёром платформы.",
  },

  /* ============================ O‘ZBEKCHA ============================ */
  uz: {
    langLabel: "UZ",
    nav: {
      how: "Qanday ishlaydi",
      screens: "Ekranlar",
      features: "Imkoniyatlar",
      cases: "Kimga mos",
      plans: "Tariflar",
      cta: "Ariza qoldirish",
      menu: "Menyu",
      close: "Yopish",
      callUs: "Qo‘ng‘iroq",
    },

    hero: {
      eyebrow: "Telegramdagi internet-do‘kon",
      h1a: "Biznesingiz uchun tayyor ",
      h1hl: "internet-do‘kon",
      h1b: "",
      lead:
        "Katalog, savat, yetkazib berish va to‘lov — mijozlaringiz allaqachon o‘tiradigan Telegram ichida. " +
        "Mahsulotlar, qoldiqlar va buyurtmalar MoySkladda yuritiladi, shuning uchun ombor, pul va hujjatlar " +
        "birinchi kundanoq tartibda. Sayt va mobil ilova ishlab chiqish shart emas.",
      cta1: "Ariza qoldirish",
      cta2: "Ekranlarni ko‘rish",
      tags: [
        { a: "Ishga tushirish ", b: "1 kunda" },
        { a: "Chakana va ", b: "ulgurji" },
        { a: "Ruscha va ", b: "o‘zbekcha" },
        { a: "Dasturlashsiz", b: "" },
      ],
    },

    mock: {
      lang: "UZ",
      debtLabel: "Qarzdorlik",
      currency: "so‘m",
      priceType: "Narx turi: Ulgurji · «Bordo» MChJ",
      chips: ["Aksiyalar", "Yangiliklar", "Mavjudligi"],
      stock: "Omborda: 50+",
      nav: ["Bosh", "Katalog", "Savat", "Profil"],
      badgePromo: "Aksiya",
      badgeNew: "Yangi",
      search: "Nomi bo‘yicha qidirish",
      catalogTitle: "Katalog",
      sortPrice: "Narx ↑",
      products: [
        { n: "Fasad bo‘yog‘i, 25 kg", old: "400 000", p: "320 000" },
        { n: "Finish shpatlyovka", p: "72 000" },
        { n: "Gruntovka, 10 l", p: "96 000" },
        { n: "Plitka yelimi", old: "58 000", p: "45 000" },
      ],
      productTitle: "Mahsulot",
      productName: "«Fasad-Pro» fasad bo‘yog‘i, 25 kg",
      variantsLabel: "Modifikatsiyalar",
      variants: ["Oq", "Bej"],
      addToCart: "Savatga · 640 000 so‘m",
      checkoutTitle: "Rasmiylashtirish",
      cartItems: ["«Fasad-Pro» bo‘yoq, oq", "Gruntovka, 10 l"],
      total: "Jami",
      getLabel: "Olish usuli",
      pickup: "O‘zi olib ketish",
      delivery: "Yetkazib berish",
      address: "Toshkent, Chilonzor, Bunyodkor ko‘chasi, 12",
      addressNote: "Xaritadagi nuqta · marshrut buyurtmaga ketadi",
      placeOrder: "Buyurtma berish",
      reconTitle: "Solishtirma dalolatnomalar",
      reconChips: ["Barchasi", "Jo‘natmalar", "To‘lovlar"],
      reconDocs: [
        { n: "Jo‘natma 00063", d: "12.08.2026", s: "−4 380 000", neg: true },
        { n: "Kirim orderi 0042", d: "15.08.2026", s: "+3 000 000" },
        { n: "Xaridor qaytarishi 007", d: "21.08.2026", s: "+140 000" },
      ],
      saldo: "Yakuniy saldo",
      reconBtn1: "Davr uchun yig‘ma dalolatnoma",
      reconBtn2: "Chatga yuborish",
      panelTitle: "Boshqaruv paneli",
      kpi: [
        { k: "Oylik savdo", v: "86 400 000" },
        { k: "To‘lovlar", v: "71 200 000" },
        { k: "Qaytarishlar", v: "1 900 000" },
        { k: "Buyurtmalar", v: "142" },
      ],
      panelRows: [
        "Vitrina va qoldiqlar",
        "Omborlar va kategoriyalar",
        "Logotip va rang",
        "Tahlil",
        "Yangiliklar yuborish",
      ],
      panelBtn: "Hisobotni chatga yuklash",
      showcaseTitle: "Vitrina",
      showcaseHead: "Xaridor nimani ko‘radi",
      showcaseRows: [
        { n: "Narxlarni ko‘rsatish", v: "yoniq", on: true },
        { n: "Mavjudligini ko‘rsatish", v: "o‘chiq", on: false },
        { n: "Qoldiqni yaxlitlash", v: "50 %", on: true },
        { n: "Buyurtma asosida ishlash", v: "yoniq", on: true },
        { n: "Yopiq vitrina", v: "yoniq", on: true },
      ],
      showcaseNote: "Vitrina aniq qoldiq o‘rniga «50+» ko‘rsatadi",
      showcaseNoteSub: "Aniq raqam xaridor brauzeriga ketmaydi",
      save: "Saqlash",
      botSub: "do‘kon boti",
      messages: [
        {
          t: "To‘lov haqida eslatma: **№ 1042 buyurtma**, summasi **1 024 000 so‘m**. To‘lov muddati — 12-sentabr.",
          time: "09:00",
        },
        { t: "Buyurtmangiz yig‘ildi va «Asosiy» ombordan jo‘natishga tayyor.", time: "14:22" },
      ],
      docMsg: "Avgust uchun solishtirma dalolatnoma tayyor.",
      docName: "Solishtirma dalolatnoma · avgust 2026",
      docSize: "XLSX · 24 KB",
      docTime: "18:05",
    },

    facts: [
      {
        k: "Siz nima olasiz",
        v: "To‘laqonli do‘kon: katalog, savat, buyurtmalar, yetkazib berish va to‘lov",
      },
      {
        k: "Qayerda ishlaydi",
        v: "Telegram ichida — na sizga, na xaridorga ilova o‘rnatish kerak emas",
      },
      {
        k: "Hisobni kim yuritadi",
        v: "MoySklad: mahsulot, qoldiq, narx va hujjatlar. Bor — ulaymiz, yo‘q — sozlaymiz",
      },
      {
        k: "Qancha vaqt oladi",
        v: "Bir kun: siz mahsulotlarni berasiz, biz brendingiz ostida vitrina yig‘amiz",
      },
    ],

    s1: {
      h: "Arizadan birinchi buyurtmagacha — bir kun",
      l: "Texnik qism bizda. Sizdan mahsulotlar va ularni xaridorga qanday ko‘rsatish qarori kerak.",
    },
    flow: [
      {
        k: "Xaridor",
        n: "Telegram",
        d: "Havola orqali do‘konni ochadi, mahsulot tanlaydi va buyurtma beradi",
      },
      {
        k: "Vitrina",
        n: "iCORP MoySkladShop",
        d: "Narx, qoldiq, yetkazib berish va to‘lovi bilan sizning katalogingiz",
      },
      {
        k: "Hisob",
        n: "MoySklad",
        d: "Buyurtma, ombordan hisobdan chiqarish, pul va hujjatlar",
      },
    ],
    steps: [
      {
        n: "QADAM 01",
        h: "Katalogni yig‘amiz",
        p:
          "MoySkladda allaqachon ishlayapsizmi — bir kunda ulaymiz. Yo‘qmi — noldan yaratamiz: mahsulotlar, " +
          "kategoriyalar, narxlar va omborlar. Exceldagi prays va suratlarni biz yuklaymiz.",
        c: "MoySklad — sizniki yoki yangi",
      },
      {
        n: "QADAM 02",
        h: "Brendingiz ostida bezaymiz",
        p:
          "Logotip, brend rangi, nom va ikki til. Do‘kon Telegramda o‘z havolasini oladi — uni Instagramga, " +
          "tashrifnomaga, reklamaga va chekka qo‘yish mumkin.",
        c: "t.me/do‘koningiz",
      },
      {
        n: "QADAM 03",
        h: "Buyurtmalarni qabul qilasiz",
        p:
          "Buyurtma hisobga tayyor holda keladi: pozitsiyalar, miqdor, ombor, yetkazish manzili va to‘lov usuli. " +
          "Menejerga yig‘ib jo‘natish qoladi.",
        c: "Qo‘lda kiritishsiz",
      },
    ],

    s2: {
      h: "Do‘kon xaridorda qanday ko‘rinadi",
      l: "Telegramdan tanish qorong‘i interfeys, har bir ekranda logotipingiz va brend rangingiz.",
    },
    screenCaps: [
      { b: "Katalog", s: "Qidiruv, kategoriyalar va filtrlar. Aksiya va yangiliklar — alohida tugmachalarda." },
      { b: "Mahsulot kartochkasi", s: "Bir nechta surat, o‘z narxi va qoldig‘i bilan o‘lcham va ranglar." },
      { b: "Savat va yetkazish", s: "Olish usuli, xaritadagi manzil va to‘lov — buyurtma yuborilgunga qadar." },
      { b: "Hujjatlar", s: "Ulgurji mijozlar uchun: davr dalolatnomasi va chatga fayl bilan yuklash." },
    ],

    s3: {
      h: "Shu to‘rt stsenariy uchun buni sotib olishadi",
      l: "Har biri bugun qo‘lda bajariladigan yoki umuman bajarilmaydigan ishni yopadi.",
    },
    ms: {
      bar: "Hisob — Xaridor buyurtmalari",
      title: "Xaridor buyurtmasi № 1042",
      pill: "Yangi",
      meta: [
        { k: "Xaridor", v: "«Bordo» MChJ" },
        { k: "Tashkilot", v: "Sizning kompaniyangiz" },
        { k: "Ombor", v: "Asosiy ombor" },
        { k: "Manba", v: "Telegramdagi do‘kon" },
      ],
      cols: ["Mahsulot", "Soni", "Narx", "Summa"],
      rows: [
        { n: "«Fasad-Pro» bo‘yoq, oq", q: "2", p: "320 000", s: "640 000" },
        { n: "Gruntovka, 10 l", q: "4", p: "96 000", s: "384 000" },
      ],
      total: "Jami",
    },
    spots: [
      {
        e: "Buyurtmalar yo‘qolmaydi",
        h: "Xaridor savati darhol hujjatga aylanadi",
        p:
          "Hech kim yozishmalardagi arizani jadvalga ko‘chirmaydi. Buyurtma tayyor keladi — pozitsiyalar, " +
          "narxlar, hisobdan chiqarish ombori va yetkazish manzili bilan. Manba alohida qo‘yiladi, shuning uchun " +
          "do‘kon qancha savdo keltirgani doim ko‘rinadi.",
        u: [
          "Mas’ul menejer avtomatik qo‘yiladi",
          "Qayta bosish ikkinchi buyurtma yaratmaydi",
          "Pozitsiyalarni darhol xaridor uchun rezervlash mumkin",
          "Qoldiq buyurtmada emas, jo‘natishda hisobdan chiqadi",
        ],
      },
      {
        e: "Do‘konni siz boshqarasiz",
        h: "Boshqaruv paneli — o‘sha Telegramda",
        p:
          "Egasi do‘konga o‘z raqami bilan kiradi va panelga tushadi. Alohida admin panel, login va parollar yo‘q: " +
          "vitrinada nimani ko‘rsatish, qaysi ombor va kategoriyalarni xaridorlarga berish, qanday rang va logotip " +
          "bilan bezash — hammasi telefondan sozlanadi.",
        u: [
          "Istalgan davr uchun savdo, qaytarish, kirim va chiqim",
          "Hisobot to‘g‘ridan-to‘g‘ri chatga fayl bo‘lib keladi",
          "Obunachilarga aksiya va yangiliklar yuborish",
          "Uchta xodimga kirish huquqini berish mumkin",
        ],
      },
      {
        e: "Bot menejer o‘rniga ishlaydi",
        h: "Xaridor o‘zi qaytib keladi",
        p:
          "Do‘kon buyurtmalar orasida jim turmaydi. Bot unutilgan savat haqida eslatadi, yangilik va aksiyalarni " +
          "yuboradi, ulgurji mijozlarga esa muddatdan uch kun oldin to‘lovni eslatadi.",
        u: [
          "Unutilgan savat — bir kundan keyin eslatma",
          "Obunachilar bazasiga yangilik va chegirmalar",
          "Buyurtma holati xaridorga chatga keladi",
          "Hammasi sizning brendingiz nomidan",
        ],
      },
      {
        e: "Chakana va ulgurji birga",
        h: "Bitta do‘kon — turli xaridorlar",
        p:
          "Tasodifiy xaridor chakana narxli oddiy do‘konni ko‘radi. Siz biladigan doimiy ulgurjichi esa o‘sha " +
          "manzilga kirib, o‘z narxlarini, o‘z qarzini va o‘z hujjatlarini ko‘radi.",
        u: [
          "Ulgurji mijozlar uchun shaxsiy narxlar",
          "Chakana xaridorlarga — ro‘yxatdan o‘tmasdan buyurtma",
          "Narx va qoldiqni yashirib, «so‘rov bo‘yicha» ishlash mumkin",
          "Yopiq vitrina: faqat o‘z mijozlaringiz uchun kirish",
        ],
      },
    ],

    s4: {
      h: "Do‘kon nima qila oladi",
      l: "Sanab o‘tilganlarning hammasi mijozlarimizda ishlaydi va dasturchisiz sozlanadi.",
    },
    features: [
      {
        h: "Katalog va vitrina",
        u: [
          "Mahsulotlar, **o‘lcham va ranglar**, omborlar bo‘yicha qoldiqlar",
          "Kategoriya va ichki kategoriyalar daraxti, nom bo‘yicha qidiruv",
          "Chizilgan eski narx bilan **aksiyalar**",
          "Mahsulot kartochkasida **«Yangi»** belgisi",
          "Bir nechta surat, kattalashtirish, har bir rang uchun alohida surat",
          "Artikul, kod va shtrix-kod — ko‘rsatish yoki yashirish",
        ],
      },
      {
        h: "Narx va chegirmalar",
        u: [
          "Hamma uchun chakana va **ulgurjichilar uchun shaxsiy** narxlar",
          "Hisob valyutangizdagi narxlar, kurs bo‘yicha qayta hisob",
          "Chegirma va maxsus narxlar — hisobingizdan, qo‘lda tahrirsiz",
          "**«So‘rov bo‘yicha»** rejimi: narx yashirin, buyurtma haqiqiy narx bilan",
        ],
      },
      {
        h: "Buyurtma, yetkazish va to‘lov",
        u: [
          "**O‘zi olib ketish yoki yetkazib berish** — nimani ko‘rsatishni siz hal qilasiz",
          "**Xaritada manzil**: nuqta, manzilni avtoaniqlash va marshrut",
          "To‘lov usuli: naqd, karta, o‘tkazma",
          "Saqlangan manzillar — takroriy buyurtma bir teginishda",
          "Qayta bosishda dublikatdan himoya",
        ],
      },
      {
        h: "Pul va hujjatlar",
        u: [
          "Xaridor balansi va **qarzdorligi** real vaqtda",
          "Holati va tarkibi bilan buyurtmalar tarixi",
          "Davr uchun **solishtirma dalolatnoma**: jo‘natma, qaytarish, to‘lov",
          "Aylanma va saldo bilan yig‘ma dalolatnoma — chatga fayl bo‘lib",
          "Bosma shakllar va Excelga yuklash",
        ],
      },
      {
        h: "Egasi paneli",
        u: [
          "Vitrina ko‘radigan omborlar va kategoriyalar",
          "Logotip, brend rangi va do‘kon nomi",
          "Savdo, qaytarish, kirim va chiqim **tahlili**",
          "Obunachilarga yangilik va aksiyalar **yuborish**",
          "Panelga kirish huquqi bilan uchtagacha xodim",
          "Umumiy bot o‘rniga o‘z Telegram boti",
        ],
      },
      {
        h: "Takroriy savdolar",
        u: [
          "**Unutilgan savat** haqida bir kundan keyin eslatma",
          "Obunachilar bazasiga yangilik va chegirmalar",
          "Ulgurjichilarga — muddatdan oldin to‘lov eslatmasi",
          "«Do‘konni ochish» tugmasi bot chatida mahkamlangan",
        ],
      },
      {
        h: "Qoldiq va mavjudlik",
        u: [
          "Rezervni hisobga olgan yoki jismoniy qoldiq — tanlov bo‘yicha",
          "**Yaxlitlash:** vitrina aniq raqam o‘rniga «50+» ko‘rsatadi",
          "Qoldiqlarni xaridorlardan butunlay yashirish",
          "**Buyurtma asosida ishlash**: mavjud bo‘lmagan mahsulotga ariza",
          "Mavjud bo‘lmagan pozitsiyalarni yashirish",
        ],
      },
      {
        h: "Kirish nazorati",
        u: [
          "**Yopiq vitrina**: faqat sizning mijozlaringiz uchun",
          "Xaridorni bir bosishda **bloklash**",
          "Har bir yuridik shaxsga alohida vitrina",
          "Do‘kon brauzerda ochilsa — kod orqali kirish",
        ],
      },
      {
        h: "Tillar va brend",
        u: [
          "Ruscha va o‘zbekcha — do‘kon ichida almashtirish",
          "Barcha ekranlarda logotipingiz va brend rangingiz",
          "Har bir sahifada **menejeringiz** telefoni",
          "t.me/do‘koningiz ko‘rinishidagi o‘z havolangiz",
        ],
      },
    ],

    s5: {
      h: "Hisob va ombor — MoySkladda",
      l:
        "Biz o‘zimizning mahsulot va mijoz bazasini o‘ylab topmaymiz. Ombor, pul va hujjatlar ortida " +
        "o‘n minglab kompaniya ishlaydigan MoySklad platformasi turadi. Akkaunt yo‘qmi — noldan sozlaymiz.",
    },
    ledger: [
      {
        k: "Mahsulotlar",
        v: "Bitta joyda yuritiladi — do‘kon narx, surat va tavsif o‘zgarishini avtomatik oladi",
        tone: "read",
      },
      {
        k: "Ombor",
        v: "Qoldiq jo‘natishda hisobdan chiqadi. Ombor bir nechta bo‘lishi mumkin, xaridorga faqat keragini ko‘rsatasiz",
        tone: "read",
      },
      {
        k: "Buyurtmalar",
        v: "Har bir buyurtma — pozitsiya, ombor, yuridik shaxs va mas’ul menejer bilan to‘laqonli hujjat",
        tone: "write",
      },
      {
        k: "Pul",
        v: "Har bir xaridor bo‘yicha to‘lov, qarz va o‘zaro hisob-kitob, ulgurjilar uchun esa davr dalolatnomasi",
        tone: "write",
      },
      {
        k: "Kirish",
        v: "Biz siz beradigan va istalgan payt bekor qila oladigan kalit bilan ishlaymiz. Akkaunt parolini so‘ramaymiz",
        tone: "never",
      },
    ],

    s6: {
      h: "Kimga mos keladi",
      l: "Dona va quti bilan sotiladigan hamma narsa: chakana nuqtadan ulgurji bazagacha.",
    },
    cases: [
      {
        h: "Chakana do‘konlar",
        p: "Xaridorlar oddiy saytdagidek buyurtma beradi: katalog, savat, yetkazish, to‘lov. Faqat sayt ishlab chiqish shart emas.",
        w: "→ Ijaradagi vitrinasiz savdo",
      },
      {
        h: "Kiyim va poyabzal",
        p: "O‘lcham va ranglar — o‘z narxi va qoldig‘i bilan alohida pozitsiya. Xaridor qaysi o‘lcham yo‘qligini ko‘radi.",
        w: "→ Directda kamroq savol",
      },
      {
        h: "Oziq-ovqat va maishiy kimyo",
        p: "Takrorlanuvchi buyurtmalar bir teginishda: saqlangan manzillar, tarix va yangiliklar haqida eslatma.",
        w: "→ Mijoz o‘zi qaytadi",
      },
      {
        h: "Qurilish mollari",
        p: "Katta kataloglar va bir nechta ombordagi qoldiqlar. Xaridor faqat o‘z omborini va mavjud miqdorni ko‘radi.",
        w: "→ Kamroq chalkashlik",
      },
      {
        h: "Ulgurji va distribyutsiya",
        p: "O‘nlab dilerlar, har birida o‘z narxi va o‘z qarzi. Menejer yozishmalardan ariza yig‘ishni bas qiladi.",
        w: "→ Buyurtma darhol to‘g‘ri",
      },
      {
        h: "Tarmoq va kompaniyalar guruhi",
        p: "Har bir tashkilotga alohida vitrina: o‘z omborlari, o‘z kategoriyalari, o‘z balansi.",
        w: "→ Kompaniyalar bo‘yicha toza hisob",
      },
    ],

    s7: {
      h: "Yuklama ostida ishlaydi",
      l: "O‘n minglab pozitsiyali katalog va xaridorlarning bir vaqtda kirishi — oddiy rejim, stress-test emas.",
    },
    rel: [
      {
        n: "1–2 ms",
        h: "Katalog bir zumda ochiladi",
        p: "Mahsulotlar xotirada turadi va fonda yangilanadi. Xaridor yuklanishni kutmaydi — yangi narx va qoldiqlar o‘zi yetib keladi.",
      },
      {
        n: "×5",
        h: "Tarix tezroq ochiladi",
        p: "Buyurtma tarkibi bosilganda yuklanadi, ma’lumotnomalar esa alohida keshlanadi.",
      },
      {
        n: "24/7",
        h: "Do‘kon buyurtma qabul qiladi",
        p: "Xaridor kechasi va dam olish kunlari buyurtma beradi, menejer ertalab ko‘rib chiqadi — hech narsa yo‘qolmaydi.",
      },
      {
        n: "0",
        h: "Xaridor brauzeridagi kalit",
        p: "Hisobingizga kirish kaliti faqat serverda yashaydi. Telefon raqami Telegramning o‘zi bilan tasdiqlanadi.",
      },
    ],

    s8: {
      h: "Tariflar",
      l: "Oylik abonent to‘lovi. Ulash, vitrinani sozlash va o‘qitish narxga kiradi.",
    },
    plans: [
      {
        h: "Bazaviy",
        w: "Birinchi do‘kon va tezkor start",
        u: [
          "Katalog, savat va buyurtma qabul qilish",
          "Yetkazib berish, o‘zi olib ketish va to‘lov usullari",
          "Egasi paneli va brendlash",
          "Ikki til va savat haqida eslatmalar",
        ],
      },
      {
        h: "Professional",
        badge: "Ommabop",
        w: "Do‘kon allaqachon buyurtma keltirganda",
        u: [
          "«Bazaviy»dagi hammasi",
          "Savdo tahlili va hisobotlarni yuklash",
          "Yangilik va aksiyalar yuborish",
          "Ulgurji mijozlar uchun hujjat va dalolatnoma",
          "Majburiy to‘lov usuli",
        ],
      },
      {
        h: "Korporativ",
        w: "Bir nechta yuridik shaxs va filiallar",
        u: [
          "«Professional»dagi hammasi",
          "Har bir yuridik shaxsga alohida vitrina",
          "Har bir mijoz bo‘yicha shaxsiy narxlar",
          "Har bir kompaniya bo‘yicha balans va tarix",
          "Kirish huquqi bilan uchtagacha xodim",
        ],
      },
    ],
    planPrice: "So‘rov bo‘yicha",
    planUnit: "oylik abonent to‘lovi",
    planNote: "Umumiy bot o‘rniga do‘konning o‘z Telegram boti istalgan tarifda ulanadi.",

    s9: { h: "Ko‘p beriladigan savollar" },
    faq: [
      {
        q: "Bizda MoySklad yo‘q. Bu muammomi?",
        a: "Yo‘q. Akkauntni noldan sozlaymiz va mahsulotlarni ko‘chiramiz: Exceldagi praysni qabul qilamiz, kategoriya, narx, omborlarni yaratamiz va suratlarni yuklaymiz. Siz ham hisobni, ham do‘konni birdan olasiz.",
      },
      {
        q: "Bizga sayt kerakmi?",
        a: "Yo‘q. Do‘kon Telegram ichida havola orqali ochiladi — uni Instagramga, tashrifnomaga, reklamaga va chekka qo‘yishadi. Saytni keyinroq ochish mumkin, do‘kon ishiga bu ta’sir qilmaydi.",
      },
      {
        q: "Xaridorga nima o‘rnatish kerak?",
        a: "Hech narsa. Telegram deyarli hammada bor. Xaridor havolaga o‘tadi, raqamini bitta tugma bilan tasdiqlaydi va darhol katalogga tushadi.",
      },
      {
        q: "Xaridor buyurtmani qanday to‘laydi?",
        a: "To‘lov usuli rasmiylashtirishda tanlanadi: olganda naqd, karta yoki yuridik shaxslar uchun o‘tkazma. Buyurtma hisobga ko‘rsatilgan usul bilan keladi va menejer pulni qanday kutishni ko‘radi.",
      },
      {
        q: "Qoldiq va narxlarni yashirish mumkinmi?",
        a: "Ha, va alohida-alohida. Narxlar butunlay yashiriladi — do‘kon «so‘rov bo‘yicha» ishlaydi, buyurtmaga esa baribir haqiqiy summalar ketadi. Qoldiqni yashirish yoki yaxlitlab ko‘rsatish mumkin: aniq 100 dona o‘rniga xaridor «50+» ko‘radi.",
      },
      {
        q: "Bizda ham chakana, ham ulgurji bor. Bu mos keladimi?",
        a: "Ha, bu bitta do‘kon. Tasodifiy xaridor chakana narxlarni ko‘radi va ro‘yxatdan o‘tmasdan buyurtma beradi. Bazaga kiritgan ulgurji mijozingizga esa o‘sha do‘kon uning shaxsiy narxlari, qarzi va hujjatlarini ko‘rsatadi.",
      },
      {
        q: "O‘z botimiz ostida ishlash mumkinmi?",
        a: "Ha. Siz Telegramda bot yaratib, tokenini bizga berasiz — do‘kon, bildirishnoma va xabarnomalar brendingiz nomidan ketadi. Busiz umumiy iCORP boti ishlatiladi.",
      },
      {
        q: "Hisobimiz uchun bu qanchalik xavfsiz?",
        a: "Biz siz beradigan va istalgan payt bekor qila oladigan kirish kaliti bilan ishlaymiz; akkaunt parolini so‘ramaymiz. Kalit serverda saqlanadi va xaridor brauzeriga tushmaydi.",
      },
    ],

    form: {
      eyebrow: "Bir kunda ishga tushirish",
      h: "Do‘konni sizning mahsulotlaringizda ko‘rsatamiz",
      p: "Ariza qoldiring — bog‘lanamiz, katalogingiz bilan demo vitrina yig‘amiz va tekshirish uchun havola beramiz.",
      name: "Ismingiz",
      namePh: "Ism",
      phone: "Telefon",
      company: "Kompaniya",
      companyPh: "Kompaniya nomi (ixtiyoriy)",
      comment: "Izoh",
      commentPh: "Nima sotasiz va taxminan nechta mahsulot bor (ixtiyoriy)",
      submit: "Arizani yuborish",
      sending: "Yuborilmoqda…",
      okTitle: "Ariza qabul qilindi",
      okText: "Arizangizni oldik va ish vaqtida bog‘lanamiz. Shoshilinch bo‘lsa — qo‘ng‘iroq qiling.",
      again: "Yana bitta yuborish",
      errRequired: "Ism va telefonni to‘ldiring",
      errPhone: "Telefon raqamini tekshiring",
      errSend: "Arizani yuborib bo‘lmadi. Qo‘ng‘iroq qiling yoki qayta urinib ko‘ring.",
      consent: "Tugmani bosish orqali siz ariza bo‘yicha bog‘lanish uchun kontakt ma’lumotlarini qayta ishlashga rozilik bildirasiz.",
    },

    contacts: [
      { k: "Telefon", v: PHONE_HUMAN, href: `tel:${PHONE_RAW}` },
      { k: "Sayt", v: "icorp.uz", href: SITE_URL },
      { k: "Kompaniya", v: "iCORP — biznesni avtomatlashtirish" },
    ],

    footer: "MoySklad — huquq egasining savdo belgisi. iCORP platformaning hamkori hisoblanadi.",
  },
};
