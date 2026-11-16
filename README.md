# VASILISA.LUNEVILLE — ВЫШИВКА ОТ КУТЮР [COUTURE PLATFORM v2.0]

> **Официальная образовательная и коммерческая платформа Дома и Школы кутюрной вышивки Василисы Боровиковой [Vasilisa.luneville]: 5 онлайн мастер-классов, индивидуальное наставничество [16 макро-уроков + 6 месяцев обратной связи по видео ДЗ], 5-дневный интенсив в студии в Мармарисе, кутюрные арт-отпуска в Турции [4 потока 2027 по 6 участниц] и бутик авторских изделий «В наличии» и «Под заказ».**

---

## 🏛 Архитектура проекта

```text
vasilisa-luneville-couture-platform/
├── components/                     # Модульные компоненты витрины 16 блоков и кабинетов
│   ├── Amenities.js                # Оснащение мастерской, материалы и форматы обучения
│   ├── BookingWidget.js            # Виджет записи на ретриты [квота 6 мест], студию и МК
│   ├── CatalogSection.js           # Витрина 5 онлайн МК, наставничества и бутика
│   ├── Footer.js                   # Подвал с контактами Василисы Боровиковой и офертами
│   ├── Hero.js                     # Манифест бренда Vasilisa.luneville с 2015 года
│   ├── HostProfileCard.js          # Профиль основателя Василисы Боровиковой и команды
│   ├── Navbar.js                   # Навигация по 5 направлениям, переключатель RU/EN/TR и EUR/RUB/TRY/USD
│   ├── PhotoGrid.js                # Макро-галерея люневильской вышивки, брошей и ретритов
│   ├── ReviewsSection.js           # Отзывы и работы выпускниц школы
│   ├── SleepingArrangements.js     # Размещение на горной ретритной вилле в Мугле [6 участниц]
│   ├── GuestCabinet/               # Личный кабинет Ученицы и Заказчицы (/guest)
│   └── HostCabinet/                # Кабинет Мастера Василисы Боровиковой (/host)
├── google-apps-script/
│   ├── Code.js                     # Автономный монолит Google Apps Script [15 листов, 5 меню]
│   └── СВОЙСТВА_СКРИПТА_И_ИНСТРУКЦИЯ.md
├── pages/                          # Маршруты Next.js и серверные API
├── scripts/                        # Скрипты синхронизации и самовосстановления 15 листов CRM
├── utils/                          # Эталоны content.json, masterSeedContent.js, translations.js, ИИ-ядро
├── deploy_and_run.ps1              # Нативный стартер для Windows PowerShell 7 [pwsh.exe]
├── deploy-vasilisa-luneville-couture.sh
└── package.json
```

---

## 🚀 Запуск в среде VS Code [Triple-Tier Launch Standard]

1. **Через палитру задач VS Code:** `Ctrl+Shift+P` ➔ `Tasks: Run Task` ➔ `🚀 1. Запуск Dev Сервера : npm run dev -> Сервер Next.js на порту 3000 -> Режим живой разработки витрины и бэк-офиса`
2. **Через стартер PowerShell 7:**
   ```powershell
   pwsh -ExecutionPolicy Bypass -File .\deploy_and_run.ps1
   ```

---

## 📦 Развертывание на Vercel

Пользовательский репозиторий: `https://github.com/znamenskiialeksei/Sitesi`  
Деплой на Vercel: `https://vercel.com/znamenskiialekseis-projects/sitesi`  
Боевой URL ветки `v1-airbnb`: `https://sitesi-git-v1-airbnb-znamenskiialekseis-projects.vercel.app`

Для обновления продакшн-сайта запустите задачу VS Code **«📤 20. Выгрузка в GitHub Ветка v1-airbnb»** (`push_project_to_github.ps1 -Target v1`), которая автоматически формирует чистое дерево `vasilisa-luneville-couture-platform` в корень ветки `v1-airbnb`, либо переключите корневую директорию (Root Directory) в настройках Vercel на `vasilisa-luneville-couture-platform`.
