/**
 * ============================================================================
 * МОДУЛЬ: utils/templatesData.js - МУЛЬТИЯЗЫЧНЫЕ ШАБЛОНЫ СООБЩЕНИЙ VASILISA.LUNEVILLE
 * ПРОЕКТ: Vasilisa.luneville - вышивка от кутюр [vasilisa-luneville-couture-platform]
 * ----------------------------------------------------------------------------
 * [ПРЕДЫДУЩАЯ РЕДАКЦИЯ]: 16.11.2026 21:00 | ПЛАН: 161120262215 ПЛАН Создание платформы Vasilisa с нуля.md
 *   - Первичная инициализация шаблонов сообщений.
 * [АКТУАЛЬНАЯ РЕДАКЦИЯ]: 16.11.2026 23:20 | ПЛАН: 161120262215 ПЛАН Создание платформы Vasilisa с нуля.md
 *   - Уровень А: "так же очень много информации в накопителе и тех заданиях и дополн техзаданий про старый бизнес и виллу а так же данных прежнего проекта"
 *   - Уровень Б: 100% замена шаблонов сообщений на сценарии школы кутюрной вышивки, разбора 20-30 сек видео ДЗ, очной студии в Мармарисе, 4 потоков арт-отпусков 2027 и бутика Василисы Боровиковой.
 *   - Тег: [TAG: VASILISA-TEMPLATES-ZERO-LEGACY-161120262320]
 * ============================================================================
 */

export const TEMPLATE_STAGES = [
  {
    id: 'stage1',
    title: {
      ru: 'Этап 1: Онлайн мастер-классы и мгновенный доступ в Telegram',
      en: 'Stage 1: Online Masterclasses & Instant Telegram Access',
      tr: 'Aşama 1: Online Ustalık Sınıfları ve Telegram Erişimi'
    }
  },
  {
    id: 'stage2',
    title: {
      ru: 'Этап 2: Онлайн-наставничество [16 уроков] и разбор 20-30 сек видео ДЗ',
      en: 'Stage 2: Online Mentorship [16 Lessons] & 20-30s Video Homework Review',
      tr: 'Aşama 2: Online Mentorluk [16 Ders] ve 20-30 Sn Video Ödev İncelemesi'
    }
  },
  {
    id: 'stage3',
    title: {
      ru: 'Этап 3: Очная студия в Мармарисе [5 дней] и Кутюрные арт-отпуска в Турции',
      en: 'Stage 3: Marmaris Studio [5 Days] & Couture Art Retreats in Turkey',
      tr: 'Aşama 3: Marmaris Stüdyosu [5 Gün] ve Türkiye Sanat Tatilleri'
    }
  },
  {
    id: 'stage4',
    title: {
      ru: 'Этап 4: Бутик готовых изделий и Ателье «Под заказ» [Bespoke Atelier]',
      en: 'Stage 4: Ready-to-Ship Boutique & Bespoke Atelier Orders',
      tr: 'Aşama 4: Hazır Tasarım Butiği ve Özel Sipariş Atölyesi'
    }
  }
];

export const MESSAGE_TEMPLATES = [
  {
    id: 'TMP-001',
    stageId: 'stage1',
    title: {
      ru: '1.1. Приветствие и выдача бессрочного доступа к онлайн мастер-классу',
      en: '1.1. Welcome & Lifetime Access to Online Masterclass',
      tr: '1.1. Hoş Geldiniz ve Online Ustalık Sınıfına Süresiz Erişim'
    },
    content: {
      ru: `Здравствуйте, [GUEST_NAME]! 🌸
Благодарю вас за выбор мастер-класса в школе кутюрной вышивки «Vasilisa.luneville - вышивка от кутюр».
Ваша персональная ссылка-приглашение в закрытый Telegram-канал с макро-уроками, PDF-выкройкой и картой материалов уже активна в вашем Личном кабинете ученицы. Доступ к материалам остается у вас навсегда!
С теплом и вдохновением, Василиса Боровикова. Vasilisa.luneville - вышивка от кутюр.`,
      en: `Hello [GUEST_NAME]! 🌸
Thank you for choosing a masterclass at "Vasilisa.luneville Haute Couture Embroidery".
Your personal invite link to the private Telegram channel with macro video lessons, PDF pattern, and materials guide is now active in your Student Cabinet. Your access is lifetime!
Warm regards, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Embroidery.`,
      tr: `Merhaba [GUEST_NAME]! 🌸
"Vasilisa.luneville Haute Couture Nakış" okulundaki ustalık sınıfımızı seçtiğiniz için teşekkür ederim.
Makro video dersler, PDF şablonu ve malzeme listesinin yer aldığı özel Telegram kanalına davet bağlantınız Öğrenci Panelinizde активdir. Erişiminiz süresizdir!
Sevgilerimle, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Nakış.`
    }
  },
  {
    id: 'TMP-002',
    stageId: 'stage2',
    title: {
      ru: '2.1. Зачет 20-30 сек видео домашнего задания и открытие следующего урока',
      en: '2.1. Approval of 20-30s Video Homework & Next Lesson Unlock',
      tr: '2.1. 20-30 Sn Video Ödev Onayı ve Sonraki Dersin Açılması'
    },
    content: {
      ru: `Прекрасная работа, [GUEST_NAME]! ✨
Я внимательно посмотрела ваше 20-30-секундное видео домашнего задания по курсу «Основы люневильской вышивки». Натяжение шелковой органзы на раме ровное, шаг тамбурного стежка крючком ритмичный и аккуратный, закрепки выполнены чисто.
Этот этап полностью зачтен! Я уже открыла для вас следующий макро-урок в Личном кабинете. Напоминаю, что ваша 6-месячная личная обратная связь со мной активна.
С уважением, Василиса Боровикова. Vasilisa.luneville - вышивка от кутюр.`,
      en: `Wonderful work, [GUEST_NAME]! ✨
I carefully reviewed your 20-30 second homework video for the "Luneville Embroidery Fundamentals" mentorship. The silk organza tension on the frame is drum-tight, your tambour stitch rhythm is even, and the lock stitches are neat.
This stage is approved, and I have unlocked your next macro lesson in your Student Cabinet!
Warm regards, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Embroidery.`,
      tr: `Harika bir çalışma, [GUEST_NAME]! ✨
"Luneville Nakışı Temelleri" kursumuz için gönderdiğiniz 20-30 saniyelik ödev videonuzu dikkatle inceledim. İpek organzenin kasnak gerginliği çok düzgün ve zincir dikiş adımlarınız dengeli.
Bu aşama onaylandı ve bir sonraki makro dersiniz Öğrenci Panelinizde açıldı!
Sevgilerimle, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Nakış.`
    }
  },
  {
    id: 'TMP-003',
    stageId: 'stage3',
    title: {
      ru: '3.1. Подтверждение места на Кутюрном арт-отпуске в Турции [квота 6 участниц]',
      en: '3.1. Confirmation for Couture Art Retreat in Turkey [Quota of 6]',
      tr: '3.1. Türkiye Haute Couture Sanat Tatili Kayıt Onayı [6 Kişilik Kontenjan]'
    },
    content: {
      ru: `Поздравляю, [GUEST_NAME]! 🍋
За вами официально закреплено 1 место из 6 в камерной группе нашего Кутюрного арт-отпуска в Турции [8 дней / 7 ночей на горной вилле в провинции Мугла].
В ваш пакет включено всё: мастер-классы и материалы со мной и Юлией Озмен, проживание на уединенной вилле, трехразовое домашнее питание от хозяйки виллы Марины, выезды в Акьяку, прогулка по реке Азмак, поездка в Дальян и на пляж Изтузу, а также групповой трансфер из аэропорта Даламан [DLM].
До встречи в Турции! Василиса Боровикова. Vasilisa.luneville - вышивка от кутюр.`,
      en: `Congratulations, [GUEST_NAME]! 🍋
Your spot [1 of 6 in our intimate group] is officially reserved for the Couture Art Retreat in Turkey [8 days / 7 nights at our private mountain villa in Muğla Province].
Your all-inclusive package covers embroidery sessions and materials with me and Yulia Ozmen, villa stay, three home-cooked meals daily by Marina, excursions to Akyaka, Azmak River, Dalyan & İztuzu Beach, and Dalaman Airport [DLM] group transfer.
Warm regards, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Embroidery.`,
      tr: `Tebrikler, [GUEST_NAME]! 🍋
Türkiye Haute Couture Sanat Tatilimizde [Muğla dağ villasında 8 gün / 7 gece] 6 kişilik özel grubumuzdaki yeriniz ayrıldı.
Paketinizde benimle ve Yulia Ozmen ile nakış dersleri, tüm malzemeler, konaklama, Marina'nın ev yemekleri, Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı gezileri ile Dalaman Havalimanı [DLM] transferi dahildir.
Sevgilerimle, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Nakış.`
    }
  },
  {
    id: 'TMP-004',
    stageId: 'stage3',
    title: {
      ru: '3.2. Памятка перед приездом на 5-дневный интенсив в студию в Мармарисе',
      en: '3.2. Welcome Guide for 5-Day Offline Intensive in Marmaris Studio',
      tr: '3.2. Marmaris Stüdyosunda 5 Günlük Yoğun Eğitim Rehberi'
    },
    content: {
      ru: `Здравствуйте, [GUEST_NAME]! ☀️
Жду вас на индивидуальном 5-дневном обучении в моей студии в Мармарисе [с понедельника по пятницу, с 09:00 до 17:00].
Все профессиональные пяльцы-рамы, шелковая органза, люневильский крючок, французские пайетки и японский бисер уже подготовлены для вас. Сообщите, пожалуйста, номер вашего рейса в аэропорт Даламан [DLM], чтобы мы организовали для вас комфортный трансфер до вашего отеля в Мармарисе.
До скорой встречи! Василиса Боровикова. Vasilisa.luneville - вышивка от кутюр.`,
      en: `Hello [GUEST_NAME]! ☀️
I look forward to welcoming you to my Marmaris studio for your 5-day one-on-one intensive [Monday to Friday, 09:00 to 17:00].
All professional frames, silk organza, Luneville hook, French sequins, and Japanese beads are ready for you. Please share your flight details to Dalaman Airport [DLM] so we can arrange your transfer to Marmaris.
Warm regards, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Embroidery.`,
      tr: `Merhaba [GUEST_NAME]! ☀️
Marmaris'teki stüdyomda 5 günlük birebir eğitimimiz [Pazartesi - Cuma, 09:00 - 17:00] için sizi sabırsızlıkla bekliyorum.
Tüm profesyonel kasnaklar, ipek organze, Luneville tığı, Fransız payetleri ve Japon boncukları sizin için hazırlandı. Dalaman Havalimanı [DLM] uçuş bilgilerinizi paylaşırsanız transferinizi organize edebiliriz.
Sevgilerimle, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Nakış.`
    }
  },
  {
    id: 'TMP-005',
    stageId: 'stage4',
    title: {
      ru: '4.1. Подтверждение заказа изделия в Бутике / Ателье «Под заказ»',
      en: '4.1. Boutique Ready-to-Ship / Bespoke Atelier Order Confirmation',
      tr: '4.1. Butik Hazır Tasarım / Özel Sipariş Onayı'
    },
    content: {
      ru: `Здравствуйте, [GUEST_NAME]! 💎
Благодарю вас за заказ авторского кутюрного изделия в бутике «Vasilisa.luneville».
Готовые изделия бережно упаковываются в фирменный футляр и отправляются в течение 2-3 дней с международным трек-номером. Для индивидуальных заказов в формате «Под заказ» [Bespoke Atelier] я подготовлю эскиз и палитру материалов [срок ручной работы составляет 14-30 рабочих дней].
С уважением, Василиса Боровикова. Vasilisa.luneville - вышивка от кутюр.`,
      en: `Hello [GUEST_NAME]! 💎
Thank you for your couture piece order at the "Vasilisa.luneville" Boutique.
Ready-to-ship items are dispatched within 2-3 days in a signature gift box with international tracking. For Bespoke Atelier commissions, I will share your custom sketch and material palette [handcrafting takes 14-30 business days].
Warm regards, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Embroidery.`,
      tr: `Merhaba [GUEST_NAME]! 💎
"Vasilisa.luneville" Butiğinden yaptığınız tasarım siparişi için teşekkür ederim.
Hazır eserler özel kutusunda 2-3 gün içinde uluslararası takip numarasıyla kargoya verilir. Özel sipariş [Bespoke Atelier] eserler için eskiz ve malzeme paletini sizinle paylaşacağım [hazırlık süresi 14-30 iş günüdür].
Sevgilerimle, Vasilisa Borovikova. Vasilisa.luneville - Haute Couture Nakış.`
    }
  }
];
