// ==============================================================================
// РЕЕСТР 15 КАНОНИЧЕСКИХ ЛИСТОВ И ДИНАМИЧЕСКИЙ РЕЗОЛВЕР ПО SHEET ID [VASILISA.LUNEVILLE]
// Файл: utils/sheetsRegistry.js
// Назначение: Обеспечивает 100% стабильную привязку кода к 15 листам Google Таблицы CRM
// книги ★ CRM Vasilisa.luneville Couture [1ZBQ3iihSkyOECXoXAcIgtDZyrbYQ5rU_NWyF6wxjGZ4]
// по их постоянным числовым sheetId [101..115] и каноническим русским именам.
// 100% Zero-Brackets & Zero-Emdash Стандарт.
// 
// [ПРЕДЫДУЩАЯ РЕДАКЦИЯ: 28.09.2026 19:40 | ПЛАН: 280920261940 ПЛАН 13 колонок ACCOUNTS и восстановление.md | TAG: VILLA-13COLS-ACCOUNTS-UID-280920261940]
// [АКТУАЛЬНАЯ РЕДАКЦИЯ: 16.11.2026 22:15 | ПЛАН: 161120262215 ПЛАН Создание платформы Vasilisa с нуля.md | TAG: VASILISA-SHEETS-REGISTRY-101-115-161120262215]
// Уровень А: "создавай новый проект в папке Раб сайт полностью сам"
// Уровень Б: Адаптация реестра 15 канонических листов CRM [101..115] под школу вышивки, наставничество, арт-отпуска и бутик Vasilisa.luneville.
// ==============================================================================

const SHEETS_REGISTRY = {
  // --- 1. HOME: Главная витрина [Лист 1, sheetId: 101] ---
  HOME: {
    key: 'HOME',
    defaultName: '🏠 Главная витрина',
    cluster: 'showcase',
    aliases: ['🏠 Главная витрина', 'Главная витрина', 'Главная', 'Витрина', 'О школе', 'About'],
    headers: ['Блок / Раздел', 'Ключ [ID]', 'Место размещения / Описание [RU]', 'RU', 'EN', 'TR', 'Медиа / Иконка / Ссылка', 'Статус [Вкл/Выкл]'],
    suggestedSheetId: 101
  },

  // --- 2. GALLERY: Фото и Видео Галерея [Лист 2, sheetId: 102] ---
  GALLERY: {
    key: 'GALLERY',
    defaultName: '📸 Фото и Видео Галерея',
    cluster: 'showcase',
    aliases: ['📸 Фото и Видео Галерея', 'Фото и Видео Галерея', '📸 Фотогалерея', 'Фотогалерея', 'Галерея', 'Медиа'],
    headers: ['ID', 'Группа [RU]', 'Описание [RU]', 'Группа [EN]', 'Описание [EN]', 'Группа [TR]', 'Описание [TR]', 'Тип', 'Медиа ссылки', 'Подпись [RU]', 'Подпись [EN]', 'Подпись [TR]'],
    suggestedSheetId: 102
  },

  // --- 3. LEGAL: Юридические документы [Лист 3, sheetId: 103] ---
  LEGAL: {
    key: 'LEGAL',
    defaultName: '⚖️ Юридические документы',
    cluster: 'showcase',
    aliases: ['⚖️ Юридические документы', 'Юридические документы', '⚖️ Юридическая информация', 'Юридическая информация', 'Оферты и Правила', 'Реквизиты'],
    headers: ['ID Раздела', 'Название [RU]', 'Название [EN]', 'Название [TR]', 'Текст [RU]', 'Текст [EN]', 'Текст [TR]'],
    suggestedSheetId: 103
  },

  // --- 4. ACCESS: Управление доступом [Лист 4, sheetId: 104: Инвайты Telegram и уроки] ---
  ACCESS: {
    key: 'ACCESS',
    defaultName: '🔑 Управление доступом',
    cluster: 'host',
    aliases: ['🔑 Управление доступом', 'Управление доступом', 'Инвайты Telegram и уроки', 'Коды доступа', 'MasterAccess'],
    headers: ['ID', 'Тип доступа [Telegram-канал/Урок/Чат]', 'Локация / Название продукта', 'Ссылка / Инвайт-код', 'Резервная ссылка', 'Срок действия / Статус', 'Инструкция для ученицы [RU]', 'Инструкция [EN]', 'Инструкция [TR]', 'Заметка'],
    suggestedSheetId: 104
  },

  // --- 5. TEMPLATES: Шаблоны сообщений [Лист 5, sheetId: 105] ---
  TEMPLATES: {
    key: 'TEMPLATES',
    defaultName: '💬 Шаблоны сообщений',
    cluster: 'host',
    aliases: ['💬 Шаблоны сообщений', 'Шаблоны сообщений', 'Шаблоны', 'Шаблоны ответов', 'Быстрые ответы'],
    headers: ['ID Раздела', 'Название [RU]', 'Название [EN]', 'Название [TR]', 'Текст [RU]', 'Текст [EN]', 'Текст [TR]'],
    suggestedSheetId: 105
  },

  // --- 6. SETTINGS: Системные настройки ИИ Агентов [Лист 6, sheetId: 106] ---
  SETTINGS: {
    key: 'SETTINGS',
    defaultName: '⚙️ Системные настройки ИИ Агентов',
    cluster: 'system',
    aliases: ['⚙️ Системные настройки ИИ Агентов', 'Системные настройки ИИ Агентов', '⚙️ Системные настройки', 'Системные настройки', 'Настройки ИИ', 'MasterAccount', 'Словарь переменных', 'Variables'],
    headers: ['Категория', 'Параметр / Роль / Лист', 'Значение / Статус доступа', 'Промпт / Описание / Инструкция', 'Заметка'],
    suggestedSheetId: 106
  },

  // --- 7. TASKS: Задачи и Поручения Секретаря [Лист 7, sheetId: 107] ---
  TASKS: {
    key: 'TASKS',
    defaultName: '📋 Задачи и Поручения Секретаря',
    cluster: 'host',
    aliases: ['📋 Задачи и Поручения Секретаря', '📋 Задачи мастерской', 'Задачи мастерской', 'Задачи и Поручения Секретаря', 'Задачи Секретаря', 'Поручения Секретаря'],
    headers: ['ID', 'Дата и Время', 'Направление [Бухгалтер/Юрист/Секретарь]', 'Суть задачи / Диалог', 'Статус [Новая/В работе/Выполнена]', 'Результат / Ссылка Drive', 'Исполнитель'],
    suggestedSheetId: 107
  },

  // --- 8. KNOWLEDGE_GRAPH: Граф Знаний и Безопасность [Лист 8, sheetId: 108] ---
  KNOWLEDGE_GRAPH: {
    key: 'KNOWLEDGE_GRAPH',
    defaultName: '🧠 Граф Знаний и Безопасность',
    cluster: 'system',
    aliases: ['🧠 Граф Знаний и Безопасность', '🧠 База Знаний и Память ИИ', 'База Знаний и Память ИИ', 'Граф Знаний и Безопасность', 'Граф Знаний', 'KnowledgeGraph'],
    headers: ['ID Узла', 'Тип Сущности', 'Уровень Секретности', 'Разрешенные Стадии Ученицы', 'Связанный Лист CRM', 'Описание Сущности / Правило Доступа', 'Статус Узла'],
    suggestedSheetId: 108
  },

  // --- 9. ACCOUNTS: Аккаунты учениц и Роли [Лист 9, sheetId: 109: 13 колонок A..M] ---
  ACCOUNTS: {
    key: 'ACCOUNTS',
    defaultName: '👥 Аккаунты учениц и Роли',
    cluster: 'host',
    aliases: ['👥 Аккаунты учениц и Роли', 'Аккаунты учениц и Роли', '👥 Аккаунты гостей и Роли', '👤 Гостевые аккаунты', 'Гостевые аккаунты', 'Аккаунты', 'Ученицы', 'GuestAccounts'],
    headers: ['Дата регистрации', 'Имя', 'Телефон', 'Email', 'Пароль', 'Блок: Сайт', 'Блок: Аккаунт', 'Блок: Чат', 'Статус верификации', 'Дата верификации', 'Требуется повторная верификация', 'Статус аккаунта', 'ID Ученицы [UID]'],
    suggestedSheetId: 109
  },

  // --- 10. SERVICES: Мастер-классы и Наставничество [Лист 10, sheetId: 110: 18 колонок A..R] ---
  SERVICES: {
    key: 'SERVICES',
    defaultName: '🧵 Мастер-классы и Наставничество',
    cluster: 'showcase',
    aliases: ['🧵 Мастер-классы и Наставничество', '🛍️ Мастер-классы и Наставничество', 'Мастер-классы и Наставничество', 'Мастер-классы', '🛎️ Каталог услуг и Сервисов', 'Каталог услуг и Цен', 'ExtraServices'],
    headers: ['ID', 'Название услуги [RU]', 'Описание [RU]', 'Название услуги [EN]', 'Описание [EN]', 'Название услуги [TR]', 'Описание [TR]', 'Цена [USD]', 'Цена [EUR]', 'Цена [RUB]', 'Цена [TRY]', 'Изображения', 'Наличие', 'Тип', 'Видео презентации', 'Подробное описание [RU]', 'Подробное описание [EN]', 'Подробное описание [TR]'],
    suggestedSheetId: 110
  },

  // --- 11. GUIDES: Арт-отпуска и Бутик [Лист 11, sheetId: 111: 19 колонок A..S] ---
  GUIDES: {
    key: 'GUIDES',
    defaultName: '🍋 Арт-отпуска и Бутик',
    cluster: 'showcase',
    aliases: ['🍋 Арт-отпуска и Бутик', '🎬 Арт-отпуска и Бутик изделий', 'Арт-отпуска и Бутик изделий', 'Арт-отпуска и Бутик', 'Ретриты и Бутик', '🎬 Видео-путеводители', 'VideoGuides'],
    headers: ['ID', 'Название программы / изделия [RU]', 'Описание [RU]', 'Название [EN]', 'Описание [EN]', 'Название [TR]', 'Описание [TR]', 'Изображения', 'Категория', 'Ссылка на программу / эскиз', 'Цена [USD]', 'Цена [EUR]', 'Цена [RUB]', 'Цена [TRY]', 'Видео презентации', 'Подробное описание [RU]', 'Подробное описание [EN]', 'Подробное описание [TR]', 'Наличие'],
    suggestedSheetId: 111
  },

  // --- 12. BOOKINGS: Заявки и Бронирования [Лист 12, sheetId: 112: 11 колонок A..K] ---
  BOOKINGS: {
    key: 'BOOKINGS',
    defaultName: '📋 Заявки и Бронирования',
    cluster: 'host',
    aliases: ['📋 Заявки и Бронирования', '📅 Заявки на ретриты и студию', 'Заявки на ретриты и студию', 'Заявки и Бронирования', 'Реестр Бронирований', 'BookingRequests'],
    headers: ['Дата заявки', 'Имя участницы / клиентки', 'Контакт [Tel/Email/TG]', 'Старт потока / недели', 'Завершение', 'Дней / Ночей', 'Участниц', 'Доп. мест', 'Всего мест', 'Итоговая стоимость', 'Статус оплаты и детали'],
    suggestedSheetId: 112
  },

  // --- 13. CALENDAR: Календарь и Расписание [Лист 13, sheetId: 113: 7 колонок A..G] ---
  CALENDAR: {
    key: 'CALENDAR',
    defaultName: '📅 Календарь и Расписание',
    cluster: 'host',
    aliases: ['📅 Календарь и Расписание', '📆 Расписание потоков и студии', 'Расписание потоков и студии', 'Календарь и Расписание', 'Календарь и Тарифы', 'CalendarSettings'],
    headers: ['Дата старта', 'Дата завершения', 'Тип [Блокировка/Цена/Мин. дней/Заметка/Настройки]', 'Значение', 'Заметка / Квота потока', 'Автор изменения', 'Время фиксации'],
    suggestedSheetId: 113
  },

  // --- 14. ORDERS: Заказы МК и Изделий [Лист 14, sheetId: 114: 6 колонок A..F] ---
  ORDERS: {
    key: 'ORDERS',
    defaultName: '💳 Заказы МК и Изделий',
    cluster: 'host',
    aliases: ['💳 Заказы МК и Изделий', '🛒 Покупки МК и изделий', 'Покупки МК и изделий', '🛍️ Заказы услуг и гидов', 'Заказы МК и Изделий', 'ServiceOrders'],
    headers: ['Дата заказа', 'Контакт ученицы / покупательницы', 'Тип [Мастер-класс/Наставничество/Бутик/BESPOKE_INQUIRY]', 'Сумма', 'Статус оплаты', 'Детали заказа и трек-номер'],
    suggestedSheetId: 114
  },

  // --- 15. GUIDE_ACCESS: Доступы к урокам и Сопровождение [Лист 15, sheetId: 115: 9 колонок A..I] ---
  GUIDE_ACCESS: {
    key: 'GUIDE_ACCESS',
    defaultName: '🎟️ Доступы к урокам и Сопровождение',
    cluster: 'host',
    aliases: ['🎟️ Доступы к урокам и Сопровождение', '🎟️ Доступы к урокам и сопровождение', 'Доступы к урокам и сопровождение', '🎟️ Доступы к путеводителям', 'GuideAccess'],
    headers: ['Дата выдачи', 'Ученица [Имя и Контакт]', 'ID Программы / МК', 'Название программы / МК', 'Категория', 'Статус оплаты', 'Токен доступа', 'Срок 6 мес обратной связи [EDATE]', 'Статус доступа [Активен/Отозван]'],
    suggestedSheetId: 115
  }
};

/**
 * Поиск реального названия листа в живой таблице Google Sheets:
 * Этап 1: По постоянному числовому sheetId [101..115].
 * Этап 2: По точному совпадению с defaultName или массивом aliases.
 * Этап 3: По вхождению ключевых слов.
 */
function resolveSheetTitle(sheetList, registryKey) {
  const cfg = SHEETS_REGISTRY[registryKey];
  if (!cfg) return registryKey;
  if (!Array.isArray(sheetList) || sheetList.length === 0) return cfg.defaultName;

  // Этап 1: Поиск по постоянному числовому sheetId
  if (cfg.suggestedSheetId !== undefined) {
    const byId = sheetList.find((s) => {
      const sid = s.properties ? s.properties.sheetId : s.sheetId;
      return sid === cfg.suggestedSheetId;
    });
    if (byId) {
      return byId.properties ? byId.properties.title : byId.title;
    }
  }

  // Этап 2: Поиск по каноническому имени или алиасам
  const targetAliases = [cfg.defaultName, ...(cfg.aliases || [])].map((a) => a.trim().toLowerCase());
  for (const s of sheetList) {
    const title = (s.properties ? s.properties.title : s.title || '').trim();
    if (targetAliases.includes(title.toLowerCase())) {
      return title;
    }
  }

  // Этап 3: Поиск по частичному совпадению
  for (const s of sheetList) {
    const title = (s.properties ? s.properties.title : s.title || '').trim();
    const lower = title.toLowerCase();
    if (targetAliases.some((al) => lower.includes(al) || al.includes(lower))) {
      return title;
    }
  }

  return cfg.defaultName;
}

/**
 * Построение карты активных имен листов из живой таблицы Google Sheets
 */
async function getLiveSheetMap(sheetsClient, spreadsheetId) {
  const map = {};
  Object.keys(SHEETS_REGISTRY).forEach((k) => {
    map[k] = SHEETS_REGISTRY[k].defaultName;
  });

  if (!sheetsClient || !spreadsheetId) return map;

  try {
    const meta = await sheetsClient.spreadsheets.get({
      spreadsheetId,
      includeGridData: false
    });
    const sheetList = meta.data.sheets || [];
    Object.keys(SHEETS_REGISTRY).forEach((k) => {
      map[k] = resolveSheetTitle(sheetList, k);
    });
  } catch (err) {
    console.warn('[sheetsRegistry] Используются канонические имена листов по умолчанию:', err.message);
  }

  return map;
}

/**
 * Формирование A1-диапазона для чтения/записи с экранированием кавычек
 */
function resolveRange(sheetMap, registryKey, rangeSuffix = 'A:Z') {
  const cfg = SHEETS_REGISTRY[registryKey];
  const sheetTitle = (sheetMap && sheetMap[registryKey]) || (cfg ? cfg.defaultName : registryKey);
  const escapedTitle = String(sheetTitle).replace(/'/g, "''");
  return `'${escapedTitle}'!${rangeSuffix}`;
}

module.exports = {
  SHEETS_REGISTRY,
  resolveSheetTitle,
  getLiveSheetMap,
  resolveRange
};
