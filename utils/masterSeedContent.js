// [ПРЕДЫДУЩАЯ РЕДАКЦИЯ: 16.11.2026 09:05 | ПЛАН: 161120260902 ПЛАН Реквизиты владельца и сборка.md | TAG: VILLA-OWNER-CONTACTS-SYNC-161120260902]
// [АКТУАЛЬНАЯ РЕДАКЦИЯ: 16.11.2026 22:15 | ПЛАН: 161120262215 ПЛАН Создание платформы Vasilisa с нуля.md | TAG: VASILISA-CLEAN-SLATE-SSOT-161120262215]
// Уровень А: "создавай новый проект в папке Раб сайт полностью сам"
// Уровень Б: Формирование с чистого листа эталона 15 листов CRM [101..115] и 16 блоков витрины под 5 направлений платформы Vasilisa.luneville - вышивка от кутюр [Zero Legacy].
// ==============================================================================
// НЕПРИКОСНОВЕННЫЙ МАСТЕР-ЭТАЛОН БАЗЫ ДАННЫХ И КОНТЕНТА VASILISA.LUNEVILLE
// Файл: utils/masterSeedContent.js
// Назначение: Эталонный источник истины [SSOT] для всех 15 листов Google Таблиц
// книги ★ CRM Vasilisa.luneville Couture [1ZBQ3iihSkyOECXoXAcIgtDZyrbYQ5rU_NWyF6wxjGZ4].
// 100% Zero-Brackets & Zero-Emdash Стандарт.
// ==============================================================================

const { buildHomeDerivedCollections } = require('./homeDerivedCollections');

const MASTER_ABOUT_SECTIONS = [
  {
    "id": "1",
    "title": {
      "ru": "1. Направление 0: Главный манифест и история бренда Vasilisa.luneville с 2015 года",
      "en": "1. Direction 0: Brand Manifesto & History of Vasilisa.luneville since 2015",
      "tr": "1. Yön 0: 2015'ten Beri Vasilisa.luneville Marka Manifestosu ve Tarihçesi"
    },
    "text": {
      "ru": "Vasilisa.luneville - вышивка от кутюр - это международная онлайн-школа кутюрной и люневильской вышивки, студия индивидуального наставничества в Мармарисе, организатор кутюрных арт-отпусков в Турции и бутик авторских изделий ручной работы.\n\nОснователь и ведущий мастер: Василиса Боровикова [Боровикова / Vasilisa Borovikova] - художник по вышивке от кутюр с опытом преподавания и создания коллекций с 2015 года.\nСоавтор арт-отпусков: Юлия Озмен [Yulia Ozmen] - кутюрный вышивальщик и основатель бренда эксклюзивных сумочек [преподает с 2018 года].\nПринимающая сторона ретритной виллы: Марина - хозяйка уединенной горной виллы в провинции Мугла и шеф домашней средиземноморской гастрономии.\n\nКонтакты и реквизиты:\n* Локация студии: Мармарис, провинция Мугла, Турция [Marmaris, Muğla, Türkiye].\n* Локация арт-отпусков: Горная вилла в провинции Мугла [30 минут от международного аэропорта Даламан DLM].\n* Телефон и WhatsApp РФ: +7 921 304-78-92.\n* Телефон и WhatsApp Турция: +90 545 598 32 11.\n* Официальный Email: vasilisa.luneville@gmail.com.\n* Telegram-канал арт-отпусков: https://t.me/limonnavillevturkey.",
      "en": "Vasilisa.luneville Haute Couture Embroidery is an international online school of couture and Luneville tambour embroidery, a private mentorship studio in Marmaris, organizer of luxury art retreats in Turkey, and a bespoke couture boutique.\n\nFounder & Lead Master: Vasilisa Borovikova - haute couture embroidery artist teaching and creating collections since 2015.\nCo-author of Art Retreats: Yulia Ozmen - couture embroidery master and founder of a luxury handbag brand [teaching since 2018].\nRetreat Villa Host: Marina - host of the private mountain villa in Muğla Province and chef of home-style Mediterranean cuisine.\n\nContacts & Credentials:\n* Studio Location: Marmaris, Muğla Province, Turkey.\n* Art Retreat Location: Mountain villa in Muğla Province [30 minutes from Dalaman International Airport DLM].\n* Phone & WhatsApp RU: +7 921 304-78-92.\n* Phone & WhatsApp TR: +90 545 598 32 11.\n* Official Email: vasilisa.luneville@gmail.com.\n* Art Retreat Telegram Channel: https://t.me/limonnavillevturkey.",
      "tr": "Vasilisa.luneville Haute Couture Nakış; uluslararası online haute couture ve Luneville nakış okulu, Marmaris'te birebir mentorluk atölyesi, Türkiye'de sanat tatilleri organizatörü ve el yapımı tasarım butiğidir.\n\nKurucu ve Baş Eğitmen: Vasilisa Borovikova - 2015'ten beri haute couture nakış sanatçısı ve eğitmen.\nSanat Tatili Ortak Eğitmeni: Yulia Ozmen - haute couture nakış ustası ve tasarım çanta markası kurucusu [2018'den beri eğitmen].\nVilla Ev Sahibi: Marina - Muğla'daki dağ villasının ev sahibi ve Akdeniz ev mutfağı şefi.\n\nİletişim Bilgileri:\n* Stüdyo Konumu: Marmaris, Muğla, Türkiye.\n* Sanat Tatili Konumu: Muğla'da dağ villası [Dalaman Havalimanı DLM'ye 30 dakika].\n* Telefon ve WhatsApp RU: +7 921 304-78-92.\n* Telefon ve WhatsApp TR: +90 545 598 32 11.\n* Resmi E-posta: vasilisa.luneville@gmail.com.\n* Sanat Tatili Telegram Kanalı: https://t.me/limonnavillevturkey."
    }
  },
  {
    "id": "2",
    "title": {
      "ru": "2. Направление 1: Обучающие онлайн мастер-классы с бессрочным доступом",
      "en": "2. Direction 1: Online Masterclasses with Lifetime Access",
      "tr": "2. Yön 1: Ömür Boyu Erişimli Online Nakış Atölyeleri"
    },
    "text": {
      "ru": "Пять практических онлайн мастер-классов в закрытых Telegram-каналах с пошаговой макросъемкой и доступом навсегда:\n1. МК «Ветка лаванды» [10 € / 1000 ₽]: вышивка иглой по прозрачной шелковой органзе, создание нежной объемной аппликации 10x15 см для одежды и брошей. Идеально для старта с нуля на обычных пяльцах.\n2. МК «Мимоза - 4 варианта» [10 € / 1000 ₽]: изучение четырех различных фактурных техник вышивки солнечной веточки мимозы бисером, пайетками и мулине.\n3. МК «Фейерверк» [15 € / 1500 ₽]: динамичная композиция с французскими пайетками, стеклярусом и бисером.\n4. МК «Оформление вышивки в рамку» [10 € / 1000 ₽]: секреты профессиональной натяжки тонких тканей и багетного оформления готовых кутюрных работ.\n5. МК «Зимняя сказка» [15 € / 1500 ₽]: работа с шелковой синелью, канителью и кристаллами в праздничной технике высокой моды.",
      "en": "Five hands-on online masterclasses hosted in private Telegram channels with macro video lessons and lifetime access:\n1. 'Lavender Branch' Workshop [10 € / 1000 ₽]: needle embroidery on sheer silk organza, creating a 10x15 cm applique for garments and brooches. Beginner-friendly using standard hoops.\n2. 'Mimosa - 4 Variations' Workshop [10 € / 1000 ₽]: four distinct textural techniques for embroidering a mimosa branch with beads, sequins, and floss.\n3. 'Fireworks' Workshop [15 € / 1500 ₽]: dynamic composition featuring French sequins, bugle beads, and seed beads.\n4. 'Framing Embroidery' Workshop [10 € / 1000 ₽]: professional stretching of delicate fabrics and framing finished couture pieces.\n5. 'Winter Tale' Workshop [15 € / 1500 ₽]: working with silk chenille, bullion wire, and crystals in haute couture style.",
      "tr": "Özel Telegram kanallarında makro video dersler ve ömür boyu erişim sunan beş uygulamalı online atölye:\n1. 'Lavanta Dalı' Atölyesi [10 € / 1000 ₽]: şeffaf ipek organze üzerine iğne nakışı ile 10x15 cm aplik yapımı.\n2. 'Mimoza - 4 Versiyon' Atölyesi [10 € / 1000 ₽]: boncuk, payet ve muline ile dört farklı mimoza tekniği.\n3. 'Havai Fişek' Atölyesi [15 € / 1500 ₽]: Fransız payetleri ve boru boncuklarla dinamik tasarım.\n4. 'Nakışı Çerçeveleme' Atölyesi [10 € / 1000 ₽]: hassas kumaşların gerdirilmesi ve profesyonel çerçeveleme.\n5. 'Kış Masalı' Atölyesi [15 € / 1500 ₽]: ipek şönil, tırtıl tel ve kristallerle haute couture kış nakışı."
    }
  },
  {
    "id": "3",
    "title": {
      "ru": "3. Направление 2: Индивидуальное кутюрное наставничество [Онлайн и Офлайн в Мармарисе]",
      "en": "3. Direction 2: 1-on-1 Couture Mentorship [Online & Offline in Marmaris]",
      "tr": "3. Yön 2: Birebir Haute Couture Mentorluk [Online ve Marmaris Stüdyosu]"
    },
    "text": {
      "ru": "Два флагманских формата персональной постановки руки и глубокого освоения люневильской вышивки:\n\n1. Онлайн-наставничество «Основы люневильской вышивки» [200 €]:\n* 16 подробных макро-видеоуроков [от запялки органзы в раму и базового тамбурного стежка крючком №70-90 до вышивки пайетками, бисером и синелью с изнанки].\n* Бессрочный доступ ко всем 16 видеоурокам.\n* 6 месяцев [180 дней] индивидуального сопровождения Василисы в личном чате: ученица отправляет короткие видео своей работы по 20-30 секунд, а мастер детально разбирает каждое движение руки, натяжение нити и поворот крючка.\n\n2. Офлайн-наставничество в студии в Мармарисе [500 €]:\n* 5 полных учебных дней [понедельник - пятница с 09:00 до 17:00] один на один с Василисой в светлой мастерской в Мармарисе.\n* Все профессиональные кутюрные рамы, люневильские крючки, шелковая органза, французские пайетки и бисер предоставляются в студии.\n* Индивидуальная встреча и трансфер из аэропорта Даламан [DLM] и помощь в подборе комфортного отеля у моря.",
      "en": "Two flagship formats for mastering Luneville tambour embroidery with personal hand positioning:\n\n1. Online Mentorship 'Luneville Embroidery Fundamentals' [200 €]:\n* 16 step-by-step macro video lessons [from framing silk organza and tambour chain stitch with hooks #70-90 to reverse sequin, bead, and chenille work].\n* Lifetime access to all 16 lessons.\n* 6 months [180 days] of 1-on-1 feedback from Vasilisa: students send 20-30 second videos of their stitching for detailed posture and hook rotation review.\n\n2. Offline Mentorship at Marmaris Studio [500 €]:\n* 5 full studio days [Monday - Friday, 09:00 - 17:00] 1-on-1 with Vasilisa in Marmaris.\n* All professional frames, Luneville hooks, silk organza, French sequins, and beads included.\n* Airport pickup & transfer from Dalaman [DLM] plus hotel selection support.",
      "tr": "Luneville tığı ve haute couture nakışta uzmanlaşmak için iki birebir mentorluk programı:\n\n1. Online Mentorluk 'Luneville Nakış Temelleri' [200 €]:\n* 16 detaylı makro video ders [organze gerdirme, #70-90 tığ ile zincir dikiş, ters yüzden payet ve boncuk işleme].\n* 16 derse ömür boyu erişim.\n* 6 ay [180 gün] birebir geri bildirim: öğrenciler 20-30 saniyelik çalışma videoları gönderir, Vasilisa el duruşunu ve tığ dönüşünü inceler.\n\n2. Marmaris Stüdyosunda Birebir Eğitim [500 €]:\n* Marmaris atölyesinde 5 tam gün [Pazartesi - Cuma 09:00 - 17:00] birebir çalışma.\n* Tüm profesyonel kasnaklar, tığlar, ipek organze ve Fransız payetleri stüdyoda sağlanır.\n* Dalaman Havalimanı [DLM] transferi ve otel конaklama desteği."
    }
  },
  {
    "id": "4",
    "title": {
      "ru": "4. Направление 3: Кутюрные арт-отпуска на горной вилле в Турции [Сезон 2027]",
      "en": "4. Direction 3: Couture Art Retreats at a Mountain Villa in Turkey [2027 Season]",
      "tr": "4. Yön 3: Türkiye Dağ Villasında Haute Couture Sanat Tatilleri [2027 Sezonu]"
    },
    "text": {
      "ru": "Кутюрный арт-отпуск в Турции - это 8 дней / 7 ночей творчества, вдохновения и отдыха в камерной группе строго до 6 участниц на приватной вилле в горах провинции Мугла [30 минут от аэропорта Даламан DLM].\n\nКоманда ретрита: наставники по кутюрной вышивке Василиса Боровикова и Юлия Озмен, хозяйка виллы и шеф-повар Марина.\n\nРасписание 4 потоков сезона 2027 года [по 6 мест в потоке]:\n* Поток 1: 1 мая - 8 мая 2027 г.\n* Поток 2: 19 июня - 26 июня 2027 г.\n* Поток 3: 18 сентября - 25 сентября 2027 г.\n* Поток 4: 23 октября - 30 октября 2027 г.\n\nТарифы участия [всё включено, кроме авиабилетов]:\n* 1100 € - размещение на односпальной кровати в просторной двухместной спальне.\n* 1200 € - размещение на большой двуспальной кровати.\n* 1500 € - одноместное размещение в отдельной приватной спальне с санузлом.\n\nВ стоимость включено: проживание 7 ночей на вилле с бассейном и фруктовым садом, 3-разовое домашнее питание от Марины, 5 дней мастер-классов по вышивке в саду, все материалы и инструменты, индивидуальный трансфер из аэропорта DLM и выездной экскурсионный день [аутентичная Акьяка, прогулка по кристальной реке Азмак, Дальян и заповедный песчаный пляж Изтузу].",
      "en": "The Couture Art Retreat in Turkey is an 8-day / 7-night creative getaway limited to 6 participants at a private mountain villa in Muğla Province [30 minutes from Dalaman Airport DLM].\n\nRetreat Team: embroidery mentors Vasilisa Borovikova [Borovikova] & Yulia Ozmen, villa host & chef Marina.\n\n2027 Season Dates [4 flows, 6 spots each]:\n* Flow 1: May 1 - May 8, 2027\n* Flow 2: June 19 - June 26, 2027\n* Flow 3: September 18 - September 25, 2027\n* Flow 4: October 23 - October 30, 2027\n\nAll-Inclusive Packages [excluding flights]:\n* 1100 € - Single bed in a shared spacious bedroom.\n* 1200 € - Large double bed accommodation.\n* 1500 € - Private single occupancy bedroom with en-suite bath.\n\nIncludes: 7 nights at the mountain villa with pool and fruit garden, full-board meals by Marina, 5 days of garden embroidery sessions, all materials, DLM airport transfers, and a guided excursion day [Akyaka, Azmak River, Dalyan, and Iztuzu Beach].",
      "tr": "Türkiye Haute Couture Sanat Tatili; Muğla dağlarında özel bir villada [Dalaman Havalimanı DLM'ye 30 dk] kontenjanı 6 katılımcı ile sınırlı 8 gün / 7 gecelik yaratıcı bir tatildir.\n\nEkip: nakış eğitmenleri Vasilisa Borovikova [Borovikova] ve Yulia Ozmen, villa ev sahibi ve şef Marina.\n\n2027 Sezonu Tarihleri [4 dönem, 6'şar kişilik kontenjan]:\n* 1. Dönem: 1 - 8 Mayıs 2027\n* 2. Dönem: 19 - 26 Haziran 2027\n* 3. Dönem: 18 - 25 Eylül 2027\n* 4. Dönem: 23 - 30 Ekim 2027\n\nPaket Fiyatları [uçak bileti hariç her şey dahil]:\n* 1100 € - Paylaşımlı odada tek kişilik yatak.\n* 1200 € - Geniş çift kişilik yatak.\n* 1500 € - Özel banyolu tek kişilik müstakil yatak odası.\n\nDahil olanlar: havuzlu ve meyve bahçeli villada 7 gece konaklama, Marina'dan 3 öğün ev yemekleri, 5 gün nakış eğitimi, tüm malzemeler, DLM transferi ve gezi günü [Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı]."
    }
  },
  {
    "id": "5",
    "title": {
      "ru": "5. Направление 4: Бутик кутюрных изделий «В наличии» и «Под заказ» [Bespoke Atelier]",
      "en": "5. Direction 4: Couture Boutique 'Ready-to-Ship' & 'Bespoke Atelier'",
      "tr": "5. Yön 4: Haute Couture Butik 'Hazır Koleksiyon' ve 'Kişiye Özel Tasarım'"
    },
    "text": {
      "ru": "Ателье и бутик Vasilisa.luneville создает коллекционные аксессуары, украшения и вышивку на одежде в техниках парижских домов высокой моды:\n* Изделия в наличии: кутюрные броши на шелковой органзе и бархате, расшитые воротнички, вечерние сумочки и фермуары. Отправка по всему миру в течение 2-3 рабочих дней с трек-номером.\n* Изделия под заказ [Bespoke Atelier]: индивидуальная разработка эскиза, подбор палитры французских пайеток, японского бисера, кристаллов и шелковой синели под ваш образ. Срок создания - от 14 до 30 рабочих дней.\n* Юридическая и налоговая прозрачность: оформление заказов по официальной оферте, защита персональных данных KVKK № 6698 и GDPR, выставление электронных фактур e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
      "en": "The Vasilisa.luneville Atelier & Boutique crafts collectible accessories, jewelry, and garment embroidery using Parisian haute couture techniques:\n* Ready-to-Ship Collection: couture brooches on silk organza and velvet, embroidered collars, evening bags. Worldwide tracked dispatch within 2-3 business days.\n* Bespoke Atelier: custom sketch design, curated palette of French sequins, Japanese beads, crystals, and silk chenille tailored to your look. Crafting time: 14-30 business days.\n* Legal & Tax Compliance: official public offer, KVKK No. 6698 & GDPR privacy protection, and e-Arşiv Fatura GİB VUK 213 invoicing [Marmaris Vergi Dairesi].",
      "tr": "Vasilisa.luneville Atölye ve Butik, Paris yüksek moda teknikleriyle koleksiyonluk aksesuarlar, takılar ve kıyafet işlemeleri üretir:\n* Hazır Koleksiyon: ipek organze ve kadife broşlar, işlemeli yakalar, gece çantaları. 2-3 iş günü içinde takipli uluslararası kargo.\n* Kişiye Özel Tasarım [Bespoke Atelier]: size özel eskiz, Fransız payetleri, Japon boncukları ve ipek şönil renk paleti. Hazırlanma süresi: 14-30 iş günü.\n* Yasal ve Vergisel Güvence: resmi mesafeli satış sözleşmesi, 6698 sayılı KVKK ve GDPR uyumu, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi]."
    }
  }
];

const MASTER_HOME_ROWS = [
  [
    "Блок 1. Главный экран ателье",
    "HERO_ATELIER",
    "Главный баннер / Первый экран сайта",
    "Vasilisa.luneville - школа и ателье кутюрной вышивки. Создавайте красоту своими руками с 2015 года. От первых стежков до высокой моды.",
    "Vasilisa.luneville - Haute Couture Embroidery School & Atelier since 2015. Master Parisian embroidery techniques.",
    "Vasilisa.luneville - 2015'ten beri Haute Couture Nakış Okulu ve Atölyesi. Sıfırdan lüks nakış sanatını öğrenin.",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "DIRECTION_CARDS",
    "Карточки 4 направлений школы и бутика",
    "Онлайн мастер-классы [от 10 €], Индивидуальное онлайн-наставничество [200 €], Офлайн-студия в Мармарисе [500 €], Арт-отпуска в горах Турции [1100-1500 €], Бутик авторских изделий",
    "Online Masterclasses [from 10 €], 1-on-1 Online Mentorship [200 €], Offline Studio in Marmaris [500 €], Art Retreats in Turkey [1100-1500 €], Couture Boutique",
    "Online Atölyeler [10 €'dan], Birebir Online Mentorluk [200 €], Marmaris Stüdyosu [500 €], Türkiye Sanat Tatili [1100-1500 €], Haute Couture Butik",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "MASTERCLASSES_SHOWCASE",
    "Секция каталога 5 онлайн МК",
    "Доступные онлайн МК: Ветка лаванды [10 €], Мимоза - 4 варианта [10 € / 1000 ₽], Фейерверк [15 €], Оформление в рамку [10 €], Зимняя сказка [15 €]. Доступ навсегда в Telegram.",
    "Online masterclasses with lifetime access in Telegram: Lavender Branch [10 €], Mimosa [10 €], Fireworks [15 €], Framing [10 €], Winter Tale [15 €].",
    "Telegram'da ömür boyu erişimli online atölyeler: Lavanta Dalı [10 €], Mimoza [10 €], Havai Fişek [15 €], Çerçeveleme [10 €], Kış Masalı [15 €].",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "ONLINE_MENTORSHIP",
    "Презентация флагманского курса 16 уроков",
    "Индивидуальное наставничество «Основы люневильской вышивки» - 16 макро-видеоуроков, доступ навсегда и 6 месяцев личной обратной связи по 20-30 сек видео. 200 €.",
    "1-on-1 Online Mentorship 'Luneville Embroidery Fundamentals' - 16 macro lessons, lifetime access & 6 months personal video feedback. 200 €.",
    "Birebir Online Mentorluk 'Luneville Nakış Temelleri' - 16 makro ders, ömür boyu erişim ve 6 ay video geri bildirimi. 200 €.",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "OFFLINE_STUDIO_MARMARIS",
    "Очное обучение в студии Мармариса",
    "5 дней в студии Мармариса [пн-пт 09:00-17:00]. Постановка руки, профессиональные рамы и материалы включены, помощь с отелем и трансфер из аэропорта Даламан DLM. 500 €.",
    "5-day intensive at Marmaris studio [Mon-Fri 09:00-17:00]. Hand positioning, frames & materials included, hotel support and DLM airport transfer. 500 €.",
    "Marmaris atölyesinde 5 günlük yoğun eğitim [Pzt-Cum 09:00-17:00]. El yerleşimi, malzemeler, otel desteği ve DLM havalimanı transferi dahil. 500 €.",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "ART_RETREAT_TURKEY",
    "Презентация ретрита на горной вилле",
    "8 дней / 7 ночей на приватной горной вилле в провинции Мугла [30 мин от DLM]. Группа до 6 участниц, наставники Василиса Боровикова и Юлия Озмен, шеф Марина. Выезд в Акьяку, реку Азмак, Дальян и пляж Изтузу.",
    "8 days / 7 nights at a private mountain villa in Muğla [30 min from DLM]. Up to 6 guests, mentors Vasilisa & Yulia, chef Marina. Excursion to Akyaka, Azmak River, Dalyan & Iztuzu Beach.",
    "Muğla'da özel dağ villasında 8 gün / 7 gece sanat tatili [DLM'ye 30 dk]. 6 katılımcı, eğitmenler Vasilisa ve Yulia, şef Marina. Akyaka, Azmak, Dalyan ve İztuzu gezisi.",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "RETREAT_CALENDAR_BOOKING",
    "Сетка 4 потоков 2027 и бронирование",
    "Потоки 2027 [по 6 мест]: 1-8 мая, 19-26 июня, 18-25 сентября, 23-30 октября. Тарифы: 1100 € [односп. кровать], 1200 € [двусп. кровать], 1500 € [отдельная спальня]. Удержание брони 24ч HOLD.",
    "2027 Flows [6 spots each]: May 1-8, June 19-26, Sep 18-25, Oct 23-30. Packages: 1100 € [single bed], 1200 € [double bed], 1500 € [private room]. 24h HOLD reservation.",
    "2027 Dönemleri [6'şar kişilik]: 1-8 Mayıs, 19-26 Haziran, 18-25 Eylül, 23-30 Ekim. Paketler: 1100 €, 1200 €, 1500 €. 24 saat HOLD rezervasyon.",
    "https://t.me/limonnavillevturkey",
    "Вкл"
  ],
  [
    "Блок 8. Бутик кутюрных изделий",
    "BOUTIQUE_READY_AND_BESPOKE",
    "Каталог готовых изделий и ателье под заказ",
    "Авторские кутюрные броши, расшитые воротнички, вечерние сумочки в наличии и индивидуальный пошив под заказ [Bespoke Atelier] по вашему брифу с доставкой по всему миру.",
    "Designer couture brooches, embroidered collars, evening bags ready to ship and Bespoke Atelier custom orders with worldwide insured delivery.",
    "El yapımı haute couture broşlar, işlemeli yakalar, gece çantaları ve kişiye özel tasarım [Bespoke Atelier] siparişleri.",
    "https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "MACRO_GALLERY_PROCESS",
    "Макросъемка стежков и материалов",
    "Макросъемка люневильского тамбурного стежка, работа с шелковой синелью, бархатом, прозрачной органзой, французскими пайетками и японским бисером.",
    "Macro close-ups of Luneville tambour stitches, silk chenille, velvet, sheer organza, French sequins, and Japanese seed beads.",
    "Luneville zincir dikişi, ipek şönil, kadife, şeffaf organze, Fransız payetleri ve Japon boncuklarının makro çekimleri.",
    "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 10. Как проходит обучение",
    "HOW_LEARNING_WORKS",
    "Пошаговая методика обучения",
    "Шаг 1: Выбор МК или наставничества и оплата -> Шаг 2: Мгновенный доступ к макро-урокам в Telegram и кабинете -> Шаг 3: Отправка 20-30 сек видео ДЗ -> Шаг 4: Бережный разбор Василисы и сертификат.",
    "Step 1: Choose course & pay -> Step 2: Instant access to macro lessons in Telegram & cabinet -> Step 3: Send 20-30 sec homework videos -> Step 4: Personal review by Vasilisa & certificate.",
    "Adım 1: Eğitim seçimi ve ödeme -> Adım 2: Telegram ve panelde makro derslere anında erişim -> Adım 3: 20-30 sn ödev videosu gönderimi -> Adım 4: Vasilisa'dan detaylı inceleme ve sertifika.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "ABOUT_MASTERS",
    "Команда мастеров школы и ретритов",
    "Василиса Боровикова - кутюрная вышивальщица с 2015 г., основатель студии в Мармарисе; Юлия Озмен - соавтор ретритов и дизайнер сумочек; Марина - хозяйка ретритной виллы и шеф-повар.",
    "Vasilisa Borovikova - couture artist since 2015, founder of Marmaris studio; Yulia Ozmen - retreat co-author & bag designer; Marina - villa host & chef.",
    "Vasilisa Borovikova - 2015'ten beri sanatçı, Marmaris stüdyosu kurucusu; Yulia Ozmen - tatil ortak eğitmeni; Marina - villa ev sahibi ve şef.",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "STUDENT_REVIEWS_WORKS",
    "Работы выпускниц и отзывы",
    "Реальные работы учениц с нуля до кутюрных коллекций, отзывы об онлайн-наставничестве, мастер-классах Лаванда и Мимоза и арт-отпусках в Турции.",
    "Authentic student works from scratch to couture collections, reviews of online mentorship, Lavender & Mimosa masterclasses, and Turkey art retreats.",
    "Sıfırdan haute couture koleksiyonlara öğrenci çalışmaları, online mentorluk, Lavanta ve Mimoza atölyeleri ve sanat tatili yorumları.",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "KNOWLEDGE_PREVIEW",
    "Энциклопедия вышивальщицы",
    "Гид по выбору люневильского крючка №70-90, правила барабанной запялки органзы в раму и пяльцы, таблица размеров пайеток и бисера, секреты чистой изнанки.",
    "Guide to choosing Luneville hooks #70-90, drum-tight organza framing, sequin & bead sizing chart, and secrets of a flawless couture reverse side.",
    "Luneville tığı #70-90 seçim rehberi, organze gerdirme kuralları, payet ve boncuk ölçü tablosu ve kusursuz ters yüz sırları.",
    "BookOpen",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "AI_CURATOR_FAQ",
    "Интеллектуальный помощник Gemini 3.6 Flash",
    "ИИ-Куратор Gemini 3.6 Flash 24/7 поможет подобрать первый мастер-класс, рассчитает карту материалов в EUR/RUB/TRY/USD, примет бриф на индивидуальный заказ и ответит на вопросы по арт-отпуску.",
    "Gemini 3.6 Flash AI Curator 24/7 helps select your first workshop, calculates material checklists in EUR/RUB/TRY/USD, takes bespoke briefs, and answers retreat questions.",
    "Gemini 3.6 Flash Yapay Zeka Küratörü 7/24 ilk atölyenizi seçmenize, malzeme listesini hesaplamanıza ve özel sipariş brifi oluşturmanıza yardımcı olur.",
    "MessageCircle",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "CONTACTS_AND_STUDIO_MAP",
    "Контакты студии и карта Мармариса",
    "Мармарис, провинция Мугла, Турция [30-90 мин от аэропорта Даламан DLM]. Тел/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "Marmaris, Muğla Province, Turkey [30-90 min from Dalaman Airport DLM]. Phone/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "Marmaris, Muğla, Türkiye [Dalaman Havalimanı DLM'ye 30-90 dk]. Tel/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. E-posta: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "MapPin",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "LEGAL_AND_FOOTER",
    "Оферты, KVKK/GDPR и реквизиты",
    "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - вышивка от кутюр. Публичная оферта на обучение и арт-отпуска, политика KVKK / GDPR, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville Haute Couture Embroidery. Public Offer for courses & retreats, KVKK / GDPR Privacy Policy, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville Haute Couture Nakış. Mesafeli satış sözleşmesi, KVKK / GDPR politikası, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_title",
    "Главный заголовок страницы",
    "Vasilisa.luneville - школа кутюрной вышивки, наставничество в Мармарисе, арт-отпуска в Турции и бутик",
    "Vasilisa.luneville - Haute Couture Embroidery School, Marmaris Studio, Turkey Art Retreats & Boutique",
    "Vasilisa.luneville - Haute Couture Nakış Okulu, Marmaris Stüdyosu, Türkiye Sanat Tatili ve Butik",
    "",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_subtitle",
    "Подзаголовок главного экрана",
    "Онлайн мастер-классы от 10 € • Личное наставничество 16 уроков • Офлайн-интенсивы в Мармарисе • Кутюрные ретриты на вилле в Мугле",
    "Online Masterclasses from 10 € • 16-Lesson Personal Mentorship • Marmaris Studio Intensives • Mountain Villa Art Retreats",
    "10 €'dan Online Atölyeler • 16 Derslik Birebir Mentorluk • Marmaris Stüdyo Eğitimleri • Muğla Dağ Villası Sanat Tatilleri",
    "",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_rating",
    "Средний рейтинг школы",
    "5.0",
    "5.0",
    "5.0",
    "Star",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_reviews_count",
    "Количество отзывов учениц",
    "128 отзывов учениц",
    "128 student reviews",
    "128 öğrenci yorumu",
    "",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_superhost_badge",
    "Статус основателя",
    "Мастер кутюрной вышивки с 2015 г.",
    "Couture Master since 2015",
    "2015'ten Beri Couture Ustası",
    "Award",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_location",
    "Локация в шапке",
    "Мармарис и горная вилла в Мугле, Турция [30 мин от DLM]",
    "Marmaris & Mountain Villa in Muğla, Turkey [30 min from DLM]",
    "Marmaris ve Muğla Dağ Villası, Türkiye [DLM'ye 30 dk]",
    "MapPin",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_share_btn",
    "Кнопка Поделиться",
    "Поделиться",
    "Share",
    "Paylaş",
    "Share2",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_favorite_btn",
    "Кнопка В избранное",
    "В избранное",
    "Save",
    "Kaydet",
    "Heart",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_image",
    "Фотографии первого экрана [сетка 1+4]",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "host_specs_header",
    "Заголовок блока направлений",
    "Дом кутюрной вышивки, школа и ретриты под руководством Василисы Боровиковой",
    "Haute Couture Embroidery House, School & Retreats led by Vasilisa Borovikova",
    "Vasilisa Borovikova Yönetiminde Haute Couture Nakış Okulu ve Sanat Tatilleri",
    "",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "host_specs_name",
    "Имена наставников",
    "Василиса Боровикова и Юлия Озмен",
    "Vasilisa Borovikova & Yulia Ozmen",
    "Vasilisa Borovikova ve Yulia Ozmen",
    "",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "host_specs_avatar",
    "Аватар ведущего мастера",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_guests",
    "Квота участниц ретрита",
    "До 6 участниц в потоке",
    "Up to 6 guests per retreat",
    "Dönem başına 6 katılımcı",
    "Users",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_bedrooms",
    "Количество онлайн МК и уроков",
    "5 онлайн МК + 16 уроков курса",
    "5 Workshops + 16 Mentorship Lessons",
    "5 Online Atölye + 16 Mentorluk Dersi",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_beds",
    "Форматы наставничества",
    "Онлайн [6 мес] и Студия Мармарис [5 дн]",
    "Online [6 mo] & Marmaris Studio [5 days]",
    "Online [6 ay] ve Marmaris Stüdyo [5 gün]",
    "Award",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_baths",
    "Потоки арт-отпуска 2027",
    "4 потока в 2027 г. [8 дней / 7 ночей]",
    "4 Retreat Flows in 2027 [8 days / 7 nights]",
    "2027'de 4 Sanat Tatili [8 gün / 7 gece]",
    "Calendar",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_1_title",
    "Преимущество 1: Заголовок",
    "Обучение с нуля до уровня Haute Couture и проверка видео ДЗ по 20-30 секунд",
    "From Beginner to Haute Couture with 20-30 sec Video Homework Reviews",
    "Sıfırdan Haute Couture Seviyesine ve 20-30 sn Video Ödev Kontrolü",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_1_desc",
    "Преимущество 1: Описание",
    "Пошаговая макросъемка каждого стежка и 6 месяцев бережной личной обратной связи от Василисы Боровиковой в Telegram-чате.",
    "Step-by-step macro video lessons and 6 months of personal stitch-by-stitch video feedback from Vasilisa Borovikova.",
    "Her ilmeğin adım adım makro çekimi ve Vasilisa Borovikova'den 6 ay boyunca birebir video geri bildirimi.",
    "",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_2_title",
    "Преимущество 2: Заголовок",
    "Очная студия в Мармарисе и кутюрные арт-отпуска на горной вилле в Турции",
    "Marmaris Studio Intensives & Mountain Villa Couture Art Retreats",
    "Marmaris Stüdyo Eğitimleri ve Dağ Villasında Sanat Tatilleri",
    "Compass",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_2_desc",
    "Преимущество 2: Описание",
    "5-дневные индивидуальные интенсивы в Мармарисе [500 €] и 8-дневные арт-отпуска в горах Муглы [1100-1500 €] с трансфером из аэропорта Даламан DLM.",
    "5-day 1-on-1 studio weeks in Marmaris [500 €] and 8-day mountain villa retreats [1100-1500 €] with DLM airport transfer included.",
    "Marmaris'te 5 günlük birebir eğitim [500 €] ve DLM transferi dahil 8 günlük dağ villası sanat tatilleri [1100-1500 €].",
    "",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_3_title",
    "Преимущество 3: Заголовок",
    "Бессрочный доступ к урокам, удержание слота 24ч HOLD и бутик изделий",
    "Lifetime Lesson Access, 24h HOLD Slot Reservation & Couture Boutique",
    "Derslere Ömür Boyu Erişim, 24 Saat HOLD Rezervasyon ve Butik",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_3_desc",
    "Преимущество 3: Описание",
    "Мгновенная выдача инвайтов в закрытые Telegram-каналы после оплаты, квота строго 6 мест на ретрит и доставка авторских изделий по всему миру.",
    "Instant Telegram channel invites upon payment, strict 6-spot retreat quota, and worldwide insured delivery of boutique pieces.",
    "Ödeme sonrası özel Telegram kanallarına anında erişim, 6 kişilik tatil kontenjanı ve tüm dünyaya sigortalı kargo.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_title",
    "Заголовок секции О школе и направлениях",
    "О школе кутюрной вышивки Vasilisa.luneville, наставничестве, арт-отпусках и бутике",
    "About Vasilisa.luneville Haute Couture Embroidery School, Mentorship, Retreats & Boutique",
    "Vasilisa.luneville Haute Couture Nakış Okulu, Mentorluk, Sanat Tatilleri ve Butik Hakkında",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_text",
    "Краткий вводный текст О школе",
    "С 2015 года мы обучаем искусству парижской люневильской вышивки крючком и кутюрной вышивки иглой по шелковой органзе и бархату. Выбирайте удобный формат: доступные онлайн мастер-классы от 10 €, флагманское 6-месячное онлайн-наставничество из 16 уроков [200 €], индивидуальную неделю в студии в Мармарисе [500 €], незабываемый 8-дневный арт-отпуск на горной вилле в Турции [1100-1500 €] или заказ эксклюзивного изделия в нашем бутике.",
    "Since 2015 we have taught the art of Parisian Luneville tambour hook embroidery and haute couture needlework on silk organza and velvet. Choose your path: online workshops from 10 €, flagship 16-lesson online mentorship [200 €], a 5-day 1-on-1 intensive in Marmaris [500 €], an 8-day art retreat at a mountain villa in Turkey [1100-1500 €], or bespoke creations from our boutique.",
    "2015 yılından bu yana Paris Luneville tığ nakışı ve ipek organze üzerine haute couture iğne nakışı sanatını öğretiyoruz. Size uygun programı seçin: 10 €'dan başlayan online atölyeler, 16 derslik online mentorluk [200 €], Marmaris stüdyosunda 5 günlük birebir eğitim [500 €], Türkiye'de 8 günlük sanat tatili [1100-1500 €] veya butiğimizden özel tasarım ürünler.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_btn_more",
    "Кнопка открытия полного описания",
    "Читать подробнее о всех 5 направлениях",
    "Read full program & 5 directions",
    "Tüm 5 yön ve program detaylarını oku",
    "ChevronRight",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_modal_title",
    "Заголовок модального окна описания",
    "Пять направлений экосистемы Vasilisa.luneville - вышивка от кутюр",
    "Five Directions of the Vasilisa.luneville Couture Ecosystem",
    "Vasilisa.luneville Haute Couture Ekosisteminin Beş Yönü",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_1_title",
    "Раздел 1 описания",
    "1. Направление 0: Главный манифест и история бренда Vasilisa.luneville с 2015 года",
    "1. Direction 0: Brand Manifesto & History of Vasilisa.luneville since 2015",
    "1. Yön 0: 2015'ten Beri Vasilisa.luneville Marka Manifestosu ve Tarihçesi",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_1_text",
    "Текст раздела 1",
    "Vasilisa.luneville - вышивка от кутюр - это международная онлайн-школа кутюрной и люневильской вышивки, студия индивидуального наставничества в Мармарисе, организатор кутюрных арт-отпусков в Турции и бутик авторских изделий ручной работы.\n\nОснователь и ведущий мастер: Василиса Боровикова [Боровикова / Vasilisa Borovikova] - художник по вышивке от кутюр с опытом преподавания и создания коллекций с 2015 года.\nСоавтор арт-отпусков: Юлия Озмен [Yulia Ozmen] - кутюрный вышивальщик и основатель бренда эксклюзивных сумочек [преподает с 2018 года].\nПринимающая сторона ретритной виллы: Марина - хозяйка уединенной горной виллы в провинции Мугла и шеф домашней средиземноморской гастрономии.\n\nКонтакты и реквизиты:\n* Локация студии: Мармарис, провинция Мугла, Турция [Marmaris, Muğla, Türkiye].\n* Локация арт-отпусков: Горная вилла в провинции Мугла [30 минут от международного аэропорта Даламан DLM].\n* Телефон и WhatsApp РФ: +7 921 304-78-92.\n* Телефон и WhatsApp Турция: +90 545 598 32 11.\n* Официальный Email: vasilisa.luneville@gmail.com.\n* Telegram-канал арт-отпусков: https://t.me/limonnavillevturkey.",
    "Vasilisa.luneville Haute Couture Embroidery is an international online school of couture and Luneville tambour embroidery, a private mentorship studio in Marmaris, organizer of luxury art retreats in Turkey, and a bespoke couture boutique.\n\nFounder & Lead Master: Vasilisa Borovikova - haute couture embroidery artist teaching and creating collections since 2015.\nCo-author of Art Retreats: Yulia Ozmen - couture embroidery master and founder of a luxury handbag brand [teaching since 2018].\nRetreat Villa Host: Marina - host of the private mountain villa in Muğla Province and chef of home-style Mediterranean cuisine.\n\nContacts & Credentials:\n* Studio Location: Marmaris, Muğla Province, Turkey.\n* Art Retreat Location: Mountain villa in Muğla Province [30 minutes from Dalaman International Airport DLM].\n* Phone & WhatsApp RU: +7 921 304-78-92.\n* Phone & WhatsApp TR: +90 545 598 32 11.\n* Official Email: vasilisa.luneville@gmail.com.\n* Art Retreat Telegram Channel: https://t.me/limonnavillevturkey.",
    "Vasilisa.luneville Haute Couture Nakış; uluslararası online haute couture ve Luneville nakış okulu, Marmaris'te birebir mentorluk atölyesi, Türkiye'de sanat tatilleri organizatörü ve el yapımı tasarım butiğidir.\n\nKurucu ve Baş Eğitmen: Vasilisa Borovikova - 2015'ten beri haute couture nakış sanatçısı ve eğitmen.\nSanat Tatili Ortak Eğitmeni: Yulia Ozmen - haute couture nakış ustası ve tasarım çanta markası kurucusu [2018'den beri eğitmen].\nVilla Ev Sahibi: Marina - Muğla'daki dağ villasının ev sahibi ve Akdeniz ev mutfağı şefi.\n\nİletişim Bilgileri:\n* Stüdyo Konumu: Marmaris, Muğla, Türkiye.\n* Sanat Tatili Konumu: Muğla'da dağ villası [Dalaman Havalimanı DLM'ye 30 dakika].\n* Telefon ve WhatsApp RU: +7 921 304-78-92.\n* Telefon ve WhatsApp TR: +90 545 598 32 11.\n* Resmi E-posta: vasilisa.luneville@gmail.com.\n* Sanat Tatili Telegram Kanalı: https://t.me/limonnavillevturkey.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_2_title",
    "Раздел 2 описания",
    "2. Направление 1: Обучающие онлайн мастер-классы с бессрочным доступом",
    "2. Direction 1: Online Masterclasses with Lifetime Access",
    "2. Yön 1: Ömür Boyu Erişimli Online Nakış Atölyeleri",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_2_text",
    "Текст раздела 2",
    "Пять практических онлайн мастер-классов в закрытых Telegram-каналах с пошаговой макросъемкой и доступом навсегда:\n1. МК «Ветка лаванды» [10 € / 1000 ₽]: вышивка иглой по прозрачной шелковой органзе, создание нежной объемной аппликации 10x15 см для одежды и брошей. Идеально для старта с нуля на обычных пяльцах.\n2. МК «Мимоза - 4 варианта» [10 € / 1000 ₽]: изучение четырех различных фактурных техник вышивки солнечной веточки мимозы бисером, пайетками и мулине.\n3. МК «Фейерверк» [15 € / 1500 ₽]: динамичная композиция с французскими пайетками, стеклярусом и бисером.\n4. МК «Оформление вышивки в рамку» [10 € / 1000 ₽]: секреты профессиональной натяжки тонких тканей и багетного оформления готовых кутюрных работ.\n5. МК «Зимняя сказка» [15 € / 1500 ₽]: работа с шелковой синелью, канителью и кристаллами в праздничной технике высокой моды.",
    "Five hands-on online masterclasses hosted in private Telegram channels with macro video lessons and lifetime access:\n1. 'Lavender Branch' Workshop [10 € / 1000 ₽]: needle embroidery on sheer silk organza, creating a 10x15 cm applique for garments and brooches. Beginner-friendly using standard hoops.\n2. 'Mimosa - 4 Variations' Workshop [10 € / 1000 ₽]: four distinct textural techniques for embroidering a mimosa branch with beads, sequins, and floss.\n3. 'Fireworks' Workshop [15 € / 1500 ₽]: dynamic composition featuring French sequins, bugle beads, and seed beads.\n4. 'Framing Embroidery' Workshop [10 € / 1000 ₽]: professional stretching of delicate fabrics and framing finished couture pieces.\n5. 'Winter Tale' Workshop [15 € / 1500 ₽]: working with silk chenille, bullion wire, and crystals in haute couture style.",
    "Özel Telegram kanallarında makro video dersler ve ömür boyu erişim sunan beş uygulamalı online atölye:\n1. 'Lavanta Dalı' Atölyesi [10 € / 1000 ₽]: şeffaf ipek organze üzerine iğne nakışı ile 10x15 cm aplik yapımı.\n2. 'Mimoza - 4 Versiyon' Atölyesi [10 € / 1000 ₽]: boncuk, payet ve muline ile dört farklı mimoza tekniği.\n3. 'Havai Fişek' Atölyesi [15 € / 1500 ₽]: Fransız payetleri ve boru boncuklarla dinamik tasarım.\n4. 'Nakışı Çerçeveleme' Atölyesi [10 € / 1000 ₽]: hassas kumaşların gerdirilmesi ve profesyonel çerçeveleme.\n5. 'Kış Masalı' Atölyesi [15 € / 1500 ₽]: ipek şönil, tırtıl tel ve kristallerle haute couture kış nakışı.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_3_title",
    "Раздел 3 описания",
    "3. Направление 2: Индивидуальное кутюрное наставничество [Онлайн и Офлайн в Мармарисе]",
    "3. Direction 2: 1-on-1 Couture Mentorship [Online & Offline in Marmaris]",
    "3. Yön 2: Birebir Haute Couture Mentorluk [Online ve Marmaris Stüdyosu]",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_3_text",
    "Текст раздела 3",
    "Два флагманских формата персональной постановки руки и глубокого освоения люневильской вышивки:\n\n1. Онлайн-наставничество «Основы люневильской вышивки» [200 €]:\n* 16 подробных макро-видеоуроков [от запялки органзы в раму и базового тамбурного стежка крючком №70-90 до вышивки пайетками, бисером и синелью с изнанки].\n* Бессрочный доступ ко всем 16 видеоурокам.\n* 6 месяцев [180 дней] индивидуального сопровождения Василисы в личном чате: ученица отправляет короткие видео своей работы по 20-30 секунд, а мастер детально разбирает каждое движение руки, натяжение нити и поворот крючка.\n\n2. Офлайн-наставничество в студии в Мармарисе [500 €]:\n* 5 полных учебных дней [понедельник - пятница с 09:00 до 17:00] один на один с Василисой в светлой мастерской в Мармарисе.\n* Все профессиональные кутюрные рамы, люневильские крючки, шелковая органза, французские пайетки и бисер предоставляются в студии.\n* Индивидуальная встреча и трансфер из аэропорта Даламан [DLM] и помощь в подборе комфортного отеля у моря.",
    "Two flagship formats for mastering Luneville tambour embroidery with personal hand positioning:\n\n1. Online Mentorship 'Luneville Embroidery Fundamentals' [200 €]:\n* 16 step-by-step macro video lessons [from framing silk organza and tambour chain stitch with hooks #70-90 to reverse sequin, bead, and chenille work].\n* Lifetime access to all 16 lessons.\n* 6 months [180 days] of 1-on-1 feedback from Vasilisa: students send 20-30 second videos of their stitching for detailed posture and hook rotation review.\n\n2. Offline Mentorship at Marmaris Studio [500 €]:\n* 5 full studio days [Monday - Friday, 09:00 - 17:00] 1-on-1 with Vasilisa in Marmaris.\n* All professional frames, Luneville hooks, silk organza, French sequins, and beads included.\n* Airport pickup & transfer from Dalaman [DLM] plus hotel selection support.",
    "Luneville tığı ve haute couture nakışta uzmanlaşmak için iki birebir mentorluk programı:\n\n1. Online Mentorluk 'Luneville Nakış Temelleri' [200 €]:\n* 16 detaylı makro video ders [organze gerdirme, #70-90 tığ ile zincir dikiş, ters yüzden payet ve boncuk işleme].\n* 16 derse ömür boyu erişim.\n* 6 ay [180 gün] birebir geri bildirim: öğrenciler 20-30 saniyelik çalışma videoları gönderir, Vasilisa el duruşunu ve tığ dönüşünü inceler.\n\n2. Marmaris Stüdyosunda Birebir Eğitim [500 €]:\n* Marmaris atölyesinde 5 tam gün [Pazartesi - Cuma 09:00 - 17:00] birebir çalışma.\n* Tüm profesyonel kasnaklar, tığlar, ipek organze ve Fransız payetleri stüdyoda sağlanır.\n* Dalaman Havalimanı [DLM] transferi ve otel конaklama desteği.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_4_title",
    "Раздел 4 описания",
    "4. Направление 3: Кутюрные арт-отпуска на горной вилле в Турции [Сезон 2027]",
    "4. Direction 3: Couture Art Retreats at a Mountain Villa in Turkey [2027 Season]",
    "4. Yön 3: Türkiye Dağ Villasında Haute Couture Sanat Tatilleri [2027 Sezonu]",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_4_text",
    "Текст раздела 4",
    "Кутюрный арт-отпуск в Турции - это 8 дней / 7 ночей творчества, вдохновения и отдыха в камерной группе строго до 6 участниц на приватной вилле в горах провинции Мугла [30 минут от аэропорта Даламан DLM].\n\nКоманда ретрита: наставники по кутюрной вышивке Василиса Боровикова и Юлия Озмен, хозяйка виллы и шеф-повар Марина.\n\nРасписание 4 потоков сезона 2027 года [по 6 мест в потоке]:\n* Поток 1: 1 мая - 8 мая 2027 г.\n* Поток 2: 19 июня - 26 июня 2027 г.\n* Поток 3: 18 сентября - 25 сентября 2027 г.\n* Поток 4: 23 октября - 30 октября 2027 г.\n\nТарифы участия [всё включено, кроме авиабилетов]:\n* 1100 € - размещение на односпальной кровати в просторной двухместной спальне.\n* 1200 € - размещение на большой двуспальной кровати.\n* 1500 € - одноместное размещение в отдельной приватной спальне с санузлом.\n\nВ стоимость включено: проживание 7 ночей на вилле с бассейном и фруктовым садом, 3-разовое домашнее питание от Марины, 5 дней мастер-классов по вышивке в саду, все материалы и инструменты, индивидуальный трансфер из аэропорта DLM и выездной экскурсионный день [аутентичная Акьяка, прогулка по кристальной реке Азмак, Дальян и заповедный песчаный пляж Изтузу].",
    "The Couture Art Retreat in Turkey is an 8-day / 7-night creative getaway limited to 6 participants at a private mountain villa in Muğla Province [30 minutes from Dalaman Airport DLM].\n\nRetreat Team: embroidery mentors Vasilisa Borovikova [Borovikova] & Yulia Ozmen, villa host & chef Marina.\n\n2027 Season Dates [4 flows, 6 spots each]:\n* Flow 1: May 1 - May 8, 2027\n* Flow 2: June 19 - June 26, 2027\n* Flow 3: September 18 - September 25, 2027\n* Flow 4: October 23 - October 30, 2027\n\nAll-Inclusive Packages [excluding flights]:\n* 1100 € - Single bed in a shared spacious bedroom.\n* 1200 € - Large double bed accommodation.\n* 1500 € - Private single occupancy bedroom with en-suite bath.\n\nIncludes: 7 nights at the mountain villa with pool and fruit garden, full-board meals by Marina, 5 days of garden embroidery sessions, all materials, DLM airport transfers, and a guided excursion day [Akyaka, Azmak River, Dalyan, and Iztuzu Beach].",
    "Türkiye Haute Couture Sanat Tatili; Muğla dağlarında özel bir villada [Dalaman Havalimanı DLM'ye 30 dk] kontenjanı 6 katılımcı ile sınırlı 8 gün / 7 gecelik yaratıcı bir tatildir.\n\nEkip: nakış eğitmenleri Vasilisa Borovikova [Borovikova] ve Yulia Ozmen, villa ev sahibi ve şef Marina.\n\n2027 Sezonu Tarihleri [4 dönem, 6'şar kişilik kontenjan]:\n* 1. Dönem: 1 - 8 Mayıs 2027\n* 2. Dönem: 19 - 26 Haziran 2027\n* 3. Dönem: 18 - 25 Eylül 2027\n* 4. Dönem: 23 - 30 Ekim 2027\n\nPaket Fiyatları [uçak bileti hariç her şey dahil]:\n* 1100 € - Paylaşımlı odada tek kişilik yatak.\n* 1200 € - Geniş çift kişilik yatak.\n* 1500 € - Özel banyolu tek kişilik müstakil yatak odası.\n\nDahil olanlar: havuzlu ve meyve bahçeli villada 7 gece konaklama, Marina'dan 3 öğün ev yemekleri, 5 gün nakış eğitimi, tüm malzemeler, DLM transferi ve gezi günü [Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı].",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_5_title",
    "Раздел 5 описания",
    "5. Направление 4: Бутик кутюрных изделий «В наличии» и «Под заказ» [Bespoke Atelier]",
    "5. Direction 4: Couture Boutique 'Ready-to-Ship' & 'Bespoke Atelier'",
    "5. Yön 4: Haute Couture Butik 'Hazır Koleksiyon' ve 'Kişiye Özel Tasarım'",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_5_text",
    "Текст раздела 5",
    "Ателье и бутик Vasilisa.luneville создает коллекционные аксессуары, украшения и вышивку на одежде в техниках парижских домов высокой моды:\n* Изделия в наличии: кутюрные броши на шелковой органзе и бархате, расшитые воротнички, вечерние сумочки и фермуары. Отправка по всему миру в течение 2-3 рабочих дней с трек-номером.\n* Изделия под заказ [Bespoke Atelier]: индивидуальная разработка эскиза, подбор палитры французских пайеток, японского бисера, кристаллов и шелковой синели под ваш образ. Срок создания - от 14 до 30 рабочих дней.\n* Юридическая и налоговая прозрачность: оформление заказов по официальной оферте, защита персональных данных KVKK № 6698 и GDPR, выставление электронных фактур e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "The Vasilisa.luneville Atelier & Boutique crafts collectible accessories, jewelry, and garment embroidery using Parisian haute couture techniques:\n* Ready-to-Ship Collection: couture brooches on silk organza and velvet, embroidered collars, evening bags. Worldwide tracked dispatch within 2-3 business days.\n* Bespoke Atelier: custom sketch design, curated palette of French sequins, Japanese beads, crystals, and silk chenille tailored to your look. Crafting time: 14-30 business days.\n* Legal & Tax Compliance: official public offer, KVKK No. 6698 & GDPR privacy protection, and e-Arşiv Fatura GİB VUK 213 invoicing [Marmaris Vergi Dairesi].",
    "Vasilisa.luneville Atölye ve Butik, Paris yüksek moda teknikleriyle koleksiyonluk aksesuarlar, takılar ve kıyafet işlemeleri üretir:\n* Hazır Koleksiyon: ipek organze ve kadife broşlar, işlemeli yakalar, gece çantaları. 2-3 iş günü içinde takipli uluslararası kargo.\n* Kişiye Özel Tasarım [Bespoke Atelier]: size özel eskiz, Fransız payetleri, Japon boncukları ve ipek şönil renk paleti. Hazırlanma süresi: 14-30 iş günü.\n* Yasal ve Vergisel Güvence: resmi mesafeli satış sözleşmesi, 6698 sayılı KVKK ve GDPR uyumu, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "sleeping_title",
    "Заголовок секции тарифов ретрита и студии",
    "Тарифы размещения на кутюрном арт-отпуске [8 дней / 7 ночей] и очная студия в Мармарисе",
    "Art Retreat Accommodation Packages [8 Days / 7 Nights] & Marmaris Studio",
    "Sanat Tatili Konaklama Paketleri [8 Gün / 7 Gece] ve Marmaris Stüdyosu",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_1",
    "Тариф 1 арт-отпуска",
    "Тариф 1 : Односпальная кровать в двухместной спальне [1100 €]",
    "Package 1 : Single Bed in Shared Twin Bedroom [1100 €]",
    "Paket 1 : Paylaşımlı Odada Tek Kişilik Yatak [1100 €]",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_1_desc",
    "Описание тарифа 1",
    "8 дней / 7 ночей на горной вилле, 3-разовое домашнее питание от Марины, 5 дней обучения с Василисой и Юлией, все материалы, экскурсии и трансфер DLM.",
    "8 days / 7 nights at mountain villa, full-board meals by Marina, 5 days of tuition with Vasilisa & Yulia, materials, excursions & DLM transfer.",
    "Dağ villasında 8 gün / 7 gece, Marina'dan tam pansiyon yemekler, 5 gün eğitim, tüm malzemeler, geziler ve DLM transferi.",
    "Bed",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_1_badge",
    "Бейдж тарифа 1",
    "1100 € • Квота 6 мест",
    "1100 € • 6 Spots Quota",
    "1100 € • 6 Kişilik Kontenjan",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_2",
    "Тариф 2 арт-отпуска",
    "Тариф 2 : Большая двуспальная кровать King Size [1200 €]",
    "Package 2 : Large King Size Double Bed [1200 €]",
    "Paket 2 : Geniş King Size Çift Kişilik Yatak [1200 €]",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_2_desc",
    "Описание тарифа 2",
    "Просторная светлая спальня с панорамным видом на горы и сад, индивидуальный санузел, полное участие в программе арт-отпуска, материалы и трансфер DLM.",
    "Spacious bright bedroom with panoramic mountain & garden views, en-suite bathroom, full retreat tuition, materials & DLM transfer.",
    "Dağ ve bahçe manzaralı ferah yatak odası, özel banyo, tam eğitim programı, malzemeler ve DLM transferi.",
    "BedDouble",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_2_badge",
    "Бейдж тарифа 2",
    "1200 € • Панорамный вид",
    "1200 € • Panoramic View",
    "1200 € • Panoramik Manzara",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_3",
    "Тариф 3 арт-отпуска",
    "Тариф 3 : Отдельная приватная спальня целиком [1500 €]",
    "Package 3 : Private Single Occupancy Bedroom [1500 €]",
    "Paket 3 : Özel Banyolu Müstakil Yatak Odası [1500 €]",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_3_desc",
    "Описание тарифа 3",
    "Максимальное уединение в собственной спальне с отдельной ванной комнатой и выходом к террасе. Все материалы, питание, экскурсии и VIP-трансфер DLM включены.",
    "Maximum privacy in your own bedroom with private en-suite bathroom and terrace access. All materials, dining, excursions & DLM transfer included.",
    "Özel banyolu ve teras erişimli müstakil odada maksimum konfor. Tüm malzemeler, yemekler, geziler ve DLM transferi dahil.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_3_badge",
    "Бейдж тарифа 3",
    "1500 € • Приватная спальня",
    "1500 € • Private Suite",
    "1500 € • Müstakil Oda",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_4",
    "Офлайн-интенсив в Мармарисе",
    "Офлайн-студия в Мармарисе : 5 дней 1-на-1 с Василисой [500 €]",
    "Marmaris Studio : 5-Day 1-on-1 Intensive with Vasilisa [500 €]",
    "Marmaris Stüdyosu : Vasilisa ile 5 Gün Birebir Eğitim [500 €]",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_4_desc",
    "Описание студии в Мармарисе",
    "Индивидуальная учебная неделя пн-пт с 09:00 до 17:00 в мастерской Мармариса. Профессиональные рамы, крючки №70-90, шелковая органза, трансфер DLM и помощь с отелем.",
    "Individual Mon-Fri 09:00-17:00 week at Marmaris studio. Professional frames, hooks #70-90, silk organza, DLM airport transfer & hotel assistance.",
    "Marmaris atölyesinde Pzt-Cum 09:00-17:00 birebir eğitim haftası. Profesyonel kasnaklar, #70-90 tığlar, organze, DLM transferi ve otel desteği.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_4_badge",
    "Бейдж студии в Мармарисе",
    "500 € • Пн-Пт 09:00-17:00",
    "500 € • Mon-Fri 09:00-17:00",
    "500 € • Pzt-Cum 09:00-17:00",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenities_title",
    "Заголовок секции материалов и оснащения",
    "Что входит в обучение, мастер-классы и кутюрные арт-отпуска",
    "What Is Included in Our Courses, Studio Intensives & Art Retreats",
    "Eğitim, Stüdyo ve Sanat Tatillerine Neler Dahil",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenities_btn_all",
    "Кнопка показа всех 25 позиций",
    "Показать все материалы и условия [25]",
    "Show all materials & amenities [25]",
    "Tüm malzemeleri ve olanakları göster [25]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_1",
    "Оснащение 1",
    "Люневильские крючки №70, №80, №90 и кутюрные рамы",
    "Luneville Hooks #70, #80, #90 & Couture Frames",
    "Luneville Tığları #70, #80, #90 ve Profesyonel Kasnaklar",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_2",
    "Оснащение 2",
    "Натуральная шелковая органза, бархат и фатин",
    "Natural Silk Organza, Velvet & Tulle",
    "Doğal İpek Organze, Kadife ve Tül",
    "Layers",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_3",
    "Оснащение 3",
    "Французские пайетки, японский и чешский бисер, синель",
    "French Sequins, Japanese & Czech Beads, Silk Chenille",
    "Fransız Payetleri, Japon Boncukları ve İpek Şönil",
    "Gem",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_4",
    "Оснащение 4",
    "Макро-видеоуроки Full HD с бессрочным доступом в Telegram",
    "Full HD Macro Video Lessons with Lifetime Telegram Access",
    "Telegram'da Ömür Boyu Erişimli Full HD Makro Dersler",
    "Video",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_5",
    "Оснащение 5",
    "Личный разбор 20-30 сек видео домашних заданий [6 мес]",
    "Personal Review of 20-30 sec Homework Videos [6 months]",
    "20-30 sn Ödev Videolarının Birebir İncelenmesi [6 ay]",
    "MessageCircle",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_6",
    "Оснащение 6",
    "Индивидуальный трансфер из аэропорта Даламан [DLM]",
    "Complimentary Dalaman Airport [DLM] Transfer",
    "Ücretsiz Dalaman Havalimanı [DLM] Transferi",
    "Car",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_7",
    "Оснащение 7",
    "Проживание на горной вилле с бассейном и фруктовым садом",
    "Mountain Villa Stay with Pool & Fruit Garden",
    "Havuzlu ve Meyve Bahçeli Dağ Villasında Konaklama",
    "Home",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_8",
    "Оснащение 8",
    "3-разовое домашнее питание и ужины от шефа Марины",
    "Full-Board Home Dining by Chef Marina",
    "Şef Marina'dan 3 Öğün Ev Yemekleri",
    "Utensils",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_9",
    "Оснащение 9",
    "Экскурсионный день: Акьяка, река Азмак, Дальян и пляж Изтузу",
    "Guided Excursion: Akyaka, Azmak River, Dalyan & Iztuzu Beach",
    "Rehberli Gezi: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "Compass",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_10",
    "Оснащение 10",
    "Международная доставка изделий бутика и именной сертификат",
    "Worldwide Boutique Shipping & Named Certificate",
    "Uluslararası Sigortalı Kargo ve İsimli Sertifika",
    "Award",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_title",
    "Категория 1 материалов",
    "1. Инструменты и материалы от кутюр",
    "1. Haute Couture Tools & Materials",
    "1. Haute Couture Araç ve Malzemeler",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item1",
    "Элемент 1.1",
    "Оригинальные люневильские ручки и сменные крючки №70, №80, №90",
    "Original Luneville handles and interchangeable hooks #70, #80, #90",
    "Orijinal Luneville sapları ve #70, #80, #90 tığ uçları",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item2",
    "Элемент 1.2",
    "Профессиональные кутюрные рамы со стойками и круглые пяльцы",
    "Professional couture embroidery frames with stands and hoops",
    "Ayaklı profesyonel haute couture kasnaklar",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item3",
    "Элемент 1.3",
    "Тонкая шелковая органза, хлопковый бархат и еврофатин",
    "Fine silk organza, cotton velvet, and bridal tulle",
    "İnce ipek organze, pamuklu kadife ve tül",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item4",
    "Элемент 1.4",
    "Французские пайетки на нити, японский бисер Toho/Miyuki и стеклярус",
    "Strung French sequins, Japanese Toho/Miyuki seed beads, and bugles",
    "Dizili Fransız payetleri, Japon Toho/Miyuki boncukları",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item5",
    "Элемент 1.5",
    "Шелковая синель, жесткая и мягкая канитель, металлизированные нити",
    "Silk chenille, purl bullion wire, and metallic threads",
    "İpek şönil, tırtıl tel ve metalik iplikler",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_title",
    "Категория 2 обучения",
    "2. Формат онлайн-школы и обратной связи",
    "2. Online School & Mentorship Format",
    "2. Online Eğitim ve Mentorluk Formatı",
    "Video",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item1",
    "Элемент 2.1",
    "Макросъемка каждого стежка с лица и изнанки в высоком разрешении",
    "High-definition macro filming of every stitch from front and back",
    "Ön ve arka yüzden yüksek çözünürlüklü makro çekimler",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item2",
    "Элемент 2.2",
    "Бессрочный доступ к закрытым Telegram-каналам мастер-классов и 16 урокам",
    "Lifetime access to private Telegram channels and all 16 mentorship lessons",
    "Özel Telegram kanallarına ve 16 derse ömür boyu erişim",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item3",
    "Элемент 2.3",
    "Проверка 20-30-секундных видео домашних заданий лично Василисой [180 дней]",
    "Personal review of 20-30 second homework videos by Vasilisa [180 days]",
    "20-30 saniyelik ödev videolarının Vasilisa tarafından incelenmesi [180 gün]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item4",
    "Элемент 2.4",
    "Готовые PDF-выкройки, эскизы и подробные карты материалов с артикулами",
    "Printable PDF patterns, sketches, and detailed material sourcing lists",
    "PDF şablonlar, eskizler ve detaylı malzeme listeleri",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item5",
    "Элемент 2.5",
    "Именной сертификат об окончании курса люневильской вышивки с QR-кодом",
    "Named certificate of completion with verification QR code",
    "QR kod doğrulamalı isimli bitirme sertifikası",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_title",
    "Категория 3 арт-отпуска",
    "3. Горная вилла и программа арт-отпуска в Турции",
    "3. Mountain Villa & Turkey Art Retreat Program",
    "3. Dağ Villası ve Sanat Tatili Programı",
    "Sun",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item1",
    "Элемент 3.1",
    "Приватная вилла с бассейном, террасой и фруктовым садом в 30 мин от DLM",
    "Private mountain villa with swimming pool, terrace, and fruit garden 30 min from DLM",
    "DLM'ye 30 dk mesafede havuzlu ve meyve bahçeli özel dağ villası",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item2",
    "Элемент 3.2",
    "Камерная группа строго до 6 участниц и обучение с двумя мастерами [Василиса и Юлия]",
    "Intimate group capped at 6 participants with two mentors [Vasilisa & Yulia]",
    "6 kişilik butik grup ve iki usta eğitmen [Vasilisa ve Yulia]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item3",
    "Элемент 3.3",
    "3-разовое домашнее средиземноморское питание от шефа Марины",
    "Full-board Mediterranean home-cooked meals by Chef Marina",
    "Şef Marina'dan 3 öğün ev yapımı Akdeniz mutfağı",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item4",
    "Элемент 3.4",
    "Выездная экскурсия: Акьяка, река Азмак, Дальян и заповедный пляж Изтузу",
    "Full-day excursion: Akyaka, Azmak River, Dalyan, and Iztuzu Turtle Beach",
    "Tam gün gezi: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item5",
    "Элемент 3.5",
    "Индивидуальный трансфер из аэропорта Даламан [DLM] ко времени вашего рейса",
    "Dedicated airport pickup and drop-off at Dalaman Airport [DLM]",
    "Uçuş saatinize göre özel Dalaman Havalimanı [DLM] transferi",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_title",
    "Категория 4 студии и бутика",
    "4. Офлайн-студия в Мармарисе и Бутик изделий",
    "4. Marmaris Studio & Couture Boutique",
    "4. Marmaris Stüdyosu ve Haute Couture Butik",
    "Compass",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item1",
    "Элемент 4.1",
    "5 дней индивидуальной работы пн-пт с 09:00 до 17:00 в студии Мармариса",
    "5 days of 1-on-1 studio training Mon-Fri 09:00-17:00 in Marmaris",
    "Marmaris stüdyosunda Pzt-Cum 09:00-17:00 birebir eğitim",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item2",
    "Элемент 4.2",
    "Помощь в подборе уютного отеля на побережье Мармариса в пешей доступности",
    "Assistance in selecting a comfortable seaside hotel in Marmaris",
    "Marmaris sahilinde konforlu otel seçimi desteği",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item3",
    "Элемент 4.3",
    "Готовые кутюрные броши, воротнички и сумочки с отправкой за 2-3 дня",
    "Ready-to-ship couture brooches, collars, and handbags dispatched in 2-3 days",
    "2-3 iş gününde kargolanan hazır broş, yaka ve çantalar",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item4",
    "Элемент 4.4",
    "Ателье «Под заказ» [Bespoke]: пошив и вышивка по индивидуальному эскизу",
    "Bespoke Atelier: custom embroidery and accessories crafted to your sketch",
    "Kişiye özel eskiz ve renk paletiyle Bespoke tasarım",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item5",
    "Элемент 4.5",
    "Подарочная упаковка ручной работы и международная доставка с трек-номером",
    "Handcrafted luxury gift packaging and worldwide tracked shipping",
    "El yapımı hediye paketi ve takipli uluslararası teslimat",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_title",
    "Категория 5 оплаты и гарантий",
    "5. Мультивалютная оплата и юридические гарантии",
    "5. Multi-Currency Payments & Legal Guarantees",
    "5. Çoklu Para Birimi Ödeme ve Yasal Güvenceler",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_item1",
    "Элемент 5.1",
    "Прием оплаты в EUR, RUB, TRY и USD [СБП, Т-Банк, ЮKassa, Stripe, Iyzico, PayPal]",
    "Payments in EUR, RUB, TRY, and USD [SBP, T-Bank, YooKassa, Stripe, Iyzico, PayPal]",
    "EUR, RUB, TRY ve USD ödeme seçenekleri [Stripe, Iyzico, PayPal, Banka]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_item2",
    "Элемент 5.2",
    "Гарантированное удержание слота ретрита или недели студии на 24 часа [HOLD]",
    "Guaranteed 24-hour slot reservation [HOLD] while confirming flights",
    "Uçuş onayı süresince 24 saat garantili kontenjan blokajı [HOLD]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_item3",
    "Элемент 5.3",
    "Официальная оферта, соответствие KVKK № 6698 / GDPR и фактуры e-Arşiv GİB",
    "Official public offer, KVKK No. 6698 / GDPR compliance, and e-Arşiv GİB invoices",
    "Resmi mesafeli satış sözleşmesi, KVKK / GDPR uyumu ve e-Arşiv Fatura",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "reviews_score_header",
    "Заголовок блока отзывов",
    "5.0 · 128 отзывов выпускниц школы, участниц ретритов и клиенток бутика",
    "5.0 · 128 Reviews from School Graduates, Retreat Guests & Boutique Clients",
    "5.0 · Mezunlar, Sanat Tatili Katılımcıları ve Butik Müşterilerinden 128 Yorum",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_1",
    "Критерий 1",
    "Качество макро-уроков",
    "Macro Video Quality",
    "Makro Video Kalitesi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_2",
    "Критерий 2",
    "Разбор видео ДЗ [20-30 сек]",
    "Homework Video Feedback",
    "Video Ödev Geri Bildirimi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_3",
    "Критерий 3",
    "Постановка руки",
    "Hand Positioning",
    "El Yerleşimi ve Teknik",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_4",
    "Критерий 4",
    "Атмосфера арт-отпуска",
    "Art Retreat Atmosphere",
    "Sanat Tatili Atmosferi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_5",
    "Критерий 5",
    "Материалы и комплектация",
    "Materials & Kit Quality",
    "Malzeme ve Set Kalitesi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_6",
    "Критерий 6",
    "Качество изделий бутика",
    "Boutique Craftsmanship",
    "Butik İşçilik Kalitesi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_1_author",
    "Автор отзыва 1",
    "Анна Смирнова · Онлайн-наставничество [16 уроков] и МК Лаванда",
    "Anna Smirnova · Online Mentorship [16 lessons] & Lavender MK",
    "Anna Smirnova · Online Mentorluk [16 ders] ve Lavanta Atölyesi",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_1_text",
    "Текст отзыва 1",
    "Начала с мастер-класса «Ветка лаванды» на обычных пяльцах, а затем пошла на 6-месячное наставничество по люневильскому крючку. Формат проверки коротких видео по 20-30 секунд - это восторг! Василиса замечает малейший наклон крючка и натяжение органзы. Уже вышила свою первую кутюрную брошь и сумочку!",
    "I started with the Lavender Branch workshop on a simple hoop and then joined the 6-month Luneville mentorship. Sending 20-30 second videos for feedback is brilliant! Vasilisa spots the tiniest hook angle and organza tension details.",
    "Lavanta Dalı atölyesi ile başladım ve ardından 6 aylık Luneville mentorluğuna katıldım. 20-30 saniyelik videolarla geri bildirim almak harika! Vasilisa en ince tığ açısını bile hemen fark ediyor.",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_2_author",
    "Автор отзыва 2",
    "Елена Морозова · Кутюрный арт-отпуск в Турции и МК Мимоза",
    "Elena Morozova · Turkey Couture Art Retreat & Mimosa MK",
    "Elena Morozova · Türkiye Sanat Tatili ve Mimoza Atölyesi",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_2_text",
    "Текст отзыва 2",
    "Арт-отпуск на горной вилле в Турции превзошел все мечты! Утром вышиваем в тени фруктового сада с Василисой и Юлией Озмен, днем купаемся в бассейне и наслаждаемся домашними блюдами от Марины, а поездка в Акьяку, по реке Азмак и на пляж Изтузу подарила вдохновение на год вперед. Забронировала место снова!",
    "The art retreat at the mountain villa in Turkey exceeded every dream! Morning embroidery in the fruit garden with Vasilisa and Yulia Ozmen, delicious meals by Marina, and an unforgettable excursion to Akyaka, Azmak River, and Iztuzu Beach!",
    "Türkiye'deki dağ villasında sanat tatili hayallerimin ötesindeydi! Sabahları Vasilisa ve Yulia Ozmen ile bahçede nakış, Marina'nın muhteşem yemekleri ve Akyaka, Azmak Nehri ve İztuzu gezisi unutulmazdı!",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_3_author",
    "Автор отзыва 3",
    "Maria Dubois [Paris] · Офлайн-студия в Мармарисе [5 дней]",
    "Maria Dubois [Paris] · Marmaris Offline Studio [5 Days]",
    "Maria Dubois [Paris] · Marmaris Stüdyosu [5 Gün]",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_3_text",
    "Текст отзыва 3",
    "Прилетела в Даламан специально на 5-дневный индивидуальный интенсив к Василисе в Мармарис. Встретили в аэропорту, помогли с чудесным отелем у моря. За 5 дней с 09:00 до 17:00 рука встала идеально: освоила тамбурный стежок вслепую с изнанки, пайетки, бисер и синель.",
    "I flew into Dalaman specifically for the 5-day 1-on-1 intensive with Vasilisa in Marmaris. Airport pickup and seaside hotel support were seamless. In 5 days from 09:00 to 17:00 my hand posture became effortless!",
    "Dalaman'a özellikle Marmaris'teki 5 günlük birebir eğitim için geldim. Havalimanı transferi ve otel desteği kusursuzdu. 5 günde Luneville tığı ile ters yüzden payet ve boncuk işlemede el alışkanlığım mükemmel oturdu.",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_4_author",
    "Автор отзыва 4",
    "Светлана Кузнецова · Заказ броши и воротничка в Бутике",
    "Svetlana Kuznetsova · Bespoke Boutique Order",
    "Svetlana Kuznetsova · Butik Özel Sipariş",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_4_text",
    "Текст отзыва 4",
    "Заказывала в бутике Vasilisa.luneville расшитый воротничок и брошь «Лаванда Haute Couture». Изнанка идеальная, шелковая органза невесомая, французские пайетки переливаются деликатным благородным блеском. Посылка дошла быстро в роскошной подарочной коробке!",
    "I ordered an embroidered couture collar and the Lavender Haute Couture brooch from the Vasilisa.luneville boutique. The reverse side is flawless, silk organza is weightless, and it arrived in a luxury gift box!",
    "Vasilisa.luneville butiğinden işlemeli yaka ve Lavanta broş sipariş ettim. İşçilik ve ters yüz kusursuz, özel hediye kutusunda hızlıca ulaştı!",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_title",
    "Заголовок блока локации",
    "Творческая студия в Мармарисе и ретритная вилла в горах провинции Мугла",
    "Creative Studio in Marmaris & Retreat Villa in the Mountains of Muğla",
    "Marmaris Yaratıcı Stüdyosu ve Muğla Dağlarında Sanat Tatili Villası",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_desc",
    "Описание локации и трансфера",
    "Очная мастерская Василисы расположена в курортном Мармарисе на побережье Эгейского моря, а уединенная вилла для кутюрных арт-отпусков находится в живописных горах провинции Мугла всего в 30 минутах езды от международного аэропорта Даламан [DLM]. Для всех учениц офлайн-студии и участниц ретритов включен индивидуальный трансфер из аэропорта DLM.",
    "Vasilisa's studio is located in the Aegean resort town of Marmaris, while our secluded art retreat villa sits in the scenic mountains of Muğla Province just 30 minutes from Dalaman International Airport [DLM]. Complimentary DLM airport transfer is included for all studio and retreat guests.",
    "Vasilisa'nın atölyesi Ege kıyısındaki Marmaris'te, sanat tatili villamız ise Dalaman Havalimanı'na [DLM] sadece 30 dakika mesafede Muğla dağlarında yer almaktadır. Tüm stüdyo ve tatil katılımcıları için DLM transferi dahildir.",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_badge",
    "Бейдж локации",
    "Мармарис & Мугла • 30 мин от аэропорта DLM",
    "Marmaris & Muğla • 30 min from DLM Airport",
    "Marmaris & Muğla • DLM Havalimanına 30 dk",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_image",
    "Изображение карты/локации",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_title",
    "Заголовок карточки мастера",
    "Ваш мастер и наставник : Василиса Боровикова",
    "Your Master & Mentor : Vasilisa Borovikova",
    "Ustanız ve Eğitmeniniz : Vasilisa Borovikova",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_subtitle",
    "Подзаголовок карточки мастера",
    "Художник по кутюрной вышивке с 2015 года • Основатель школы и бутика Vasilisa.luneville в Мармарисе",
    "Haute Couture Embroidery Artist since 2015 • Founder of Vasilisa.luneville School & Boutique in Marmaris",
    "2015'ten Beri Haute Couture Nakış Sanatçısı • Vasilisa.luneville Okulu ve Butiği Kurucusu",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_verified",
    "Бейдж верификации",
    "Личность, дипломы и налоговый статус проверены",
    "Identity, Credentials & Atelier Verified",
    "Kimlik ve Atölye Kaydı Doğrulandı",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_response_time",
    "Время ответа в чате",
    "Время ответа в чате и по видео ДЗ: обычно в течение 15 минут",
    "Response time for chat & homework videos: within 15 minutes",
    "Sohbet ve ödev videoları yanıt süresi: ortalama 15 dakika",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_languages",
    "Языки общения",
    "Языки обучения и поддержки: Русский, English, Türkçe",
    "Languages of instruction: Russian, English, Turkish",
    "Eğitim ve iletişim dilleri: Rusça, İngilizce, Türkçe",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_help_text",
    "Текст поддержки учениц",
    "Я лично проверяю каждое 20-30-секундное видео домашнего задания на онлайн-наставничестве, веду очные 5-дневные интенсивы в студии Мармариса и вместе с Юлией Озмен и Мариной встречаю участниц наших кутюрных арт-отпусков на горной вилле в Турции.",
    "I personally review every 20-30 second homework video in online mentorship, lead 5-day 1-on-1 studio weeks in Marmaris, and together with Yulia Ozmen and Marina welcome guests to our mountain villa art retreats in Turkey.",
    "Online mentorlukta her 20-30 saniyelik ödev videosunu bizzat inceliyor, Marmaris stüdyomda 5 günlük birebir eğitimler veriyor ve Yulia Ozmen ile Marina eşliğinde Türkiye'deki sanat tatillerimizde katılımcılarımızı ağırlıyorum.",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_btn",
    "Кнопка связи с Василисой",
    "Написать Василисе или ИИ-Куратору",
    "Message Vasilisa or AI Curator",
    "Vasilisa veya Yapay Zeka Küratörüne Yazın",
    "MessageCircle",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_credo",
    "Творческое кредо",
    "Творческое кредо: «Вышивка от кутюр доступна каждой - секрет в правильной постановке руки и любви к деталям»",
    "Creative motto: 'Haute couture embroidery is accessible to everyone - the secret lies in proper hand posture and love for detail'",
    "Sanat felsefesi: 'Haute couture nakış herkes için erişilebilirdir - sır doğru el duruşu ve detaylara olan tutkudadır'",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_dream",
    "Миссия школы",
    "Миссия: объединять увлеченных вышивкой женщин по всему миру в теплом сообществе онлайн и на арт-отпусках в Турции",
    "Mission: uniting women passionate about couture embroidery worldwide through online learning and art retreats in Turkey",
    "Misyon: nakış tutkunu kadınları online eğitimlerde ve Türkiye sanat tatillerinde bir araya getirmek",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_hobbies",
    "Специализация и техники",
    "Техники: люневильский крючок №70-90, вышивка иглой по органзе, объемная синель, пайетки, бисер, создание брошей и сумочек",
    "Techniques: Luneville hook #70-90, silk organza applique, volumetric chenille, French sequins, beads, couture brooches & bags",
    "Teknikler: Luneville tığı #70-90, ipek organze aplik, hacimli şönil, Fransız payetleri, boncuk, broş ve çanta yapımı",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_travel",
    "Команда арт-отпусков",
    "Соавтор арт-отпусков: Юлия Озмен [дизайнер кутюрных сумочек, преподает с 2018 г.] • Шеф и хозяйка виллы: Марина",
    "Retreat Co-author: Yulia Ozmen [couture handbag designer, teaching since 2018] • Villa Host & Chef: Marina",
    "Sanat Tatili Ortağı: Yulia Ozmen [tasarım çanta ustası] • Villa Ev Sahibi ve Şef: Marina",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_tax",
    "Реквизиты и контакты",
    "Контакты: +7 921 304-78-92, +90 545 598 32 11 • vasilisa.luneville@gmail.com • Telegram: @limonnavillevturkey • Marmaris Vergi Dairesi",
    "Contacts: +7 921 304-78-92, +90 545 598 32 11 • vasilisa.luneville@gmail.com • Telegram: @limonnavillevturkey • Marmaris Vergi Dairesi",
    "İletişim: +7 921 304-78-92, +90 545 598 32 11 • vasilisa.luneville@gmail.com • Telegram: @limonnavillevturkey • Marmaris Vergi Dairesi",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_title",
    "Заголовок 14 локаций",
    "14 ключевых локаций: Студия в Мармарисе, Ретритная вилла и Маршруты арт-отпуска",
    "14 Key Locations: Marmaris Studio, Mountain Retreat Villa & Excursion Routes",
    "14 Önemli Nokta: Marmaris Stüdyosu, Dağ Villası ve Sanat Tatili Rotaları",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_subtitle",
    "Подзаголовок 14 локаций",
    "Интерактивный путеводитель для учениц очной студии и участниц кутюрных арт-отпусков в провинции Мугла",
    "Interactive guide for studio students in Marmaris and art retreat participants in Muğla Province",
    "Marmaris stüdyosu öğrencileri ve Muğla sanat tatili katılımcıları için interaktif rehber",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_address",
    "Адрес студии и локации",
    "Marmaris, Muğla, Türkiye [Студия в Мармарисе и горная ретритная вилла в 30 мин от аэропорта DLM]",
    "Marmaris, Muğla, Türkiye [Marmaris Studio & Mountain Retreat Villa 30 min from DLM Airport]",
    "Marmaris, Muğla, Türkiye [Marmaris Stüdyosu ve DLM Havalimanına 30 dk Dağ Villası]",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_maps_url",
    "Ссылка на карту",
    "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_gps",
    "Координаты региона",
    "36.8550° N, 28.2742° E [Marmaris / Muğla]",
    "36.8550° N, 28.2742° E [Marmaris / Muğla]",
    "36.8550° K, 28.2742° D [Marmaris / Muğla]",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_1",
    "Локация 1",
    "Творческая студия вышивки Vasilisa.luneville в Мармарисе: профессиональные кутюрные рамы, дневной свет и коллекция материалов.",
    "Vasilisa.luneville Couture Embroidery Studio in Marmaris: professional frames, natural daylight & material library.",
    "Marmaris Vasilisa.luneville Haute Couture Nakış Stüdyosu: profesyonel kasnaklar ve zengin malzeme koleksiyonu.",
    "Студия|09:00-17:00|walk|Офлайн-обучение|Sparkles",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_2",
    "Локация 2",
    "Набережная и яхтенная марина Мармариса: морские прогулки и вдохновляющие виды после занятий в студии.",
    "Marmaris Seafront Promenade & Marina: scenic coastal walks and cafes after studio classes.",
    "Marmaris Sahil Kordonu ve Marina: stüdyo dersleri sonrası deniz kenarında yürüyüş.",
    "500 м|5 мин пешком|walk|Прогулки у моря|Compass",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_3",
    "Локация 3",
    "Исторический Старый город и крепость Мармариса [Marmaris Kalesi]: узкие бело-голубые улочки с бугенвиллией для фотосессий с готовыми брошами.",
    "Historic Old Town & Marmaris Castle: charming bougainvillea streets ideal for photographing your finished embroidery.",
    "Marmaris Kaleiçi ve Kalesi: bitmiş nakışlarınızın fotoğraf çekimi için begonvilli историк sokaklar.",
    "1.2 км|15 мин пешком|walk|Фотолокация|Camera",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_4",
    "Локация 4",
    "Уединенная горная вилла арт-отпусков в провинции Мугла: 4 спальни, бассейн, фруктовый сад и панорамная терраса для вышивки.",
    "Secluded Mountain Retreat Villa in Muğla: 4 bedrooms, pool, fruit garden, and panoramic embroidery terrace.",
    "Muğla Dağlarında Sanat Tatili Villası: 4 yatak odası, havuz, meyve bahçesi ve nakış terası.",
    "30 км от DLM|30 мин на авто|nature|База ретрита|Home",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_5",
    "Локация 5",
    "Международный аэропорт Даламан [DLM]: точка прилета участниц ретритов и учениц студии [включен индивидуальный трансфер].",
    "Dalaman International Airport [DLM]: arrival hub for retreat and studio students [complimentary transfer included].",
    "Dalaman Uluslararası Havalimanı [DLM]: tüm katılımcılar için ücretsiz karşılama ve transfer noktası.",
    "30 мин|Трансфер включен|transport|Аэропорт прилета|Plane",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_6",
    "Локация 6",
    "Аутентичный город Акьяка [Akyaka]: уникальная деревянная османская архитектура Ула и бухта Гёкова [программа выездного дня ретрита].",
    "Authentic Town of Akyaka: unique Ula wooden architecture and Gökova Bay [retreat excursion day].",
    "Otantik Akyaka Beldesi: kendine özgü ahşap mimarisi ve Gökova Körfezi [sanat tatili gezi rotası].",
    "Экскурсия|День 4 ретрита|nature|Выездной маршрут|MapPin",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_7",
    "Локация 7",
    "Кристальная река Азмак [Azmak Nehri]: лодочная прогулка над подводными садами и обед в рыбном ресторане у воды.",
    "Crystal-clear Azmak River: boat tour over underwater gardens and riverside seafood lunch.",
    "Berrak Azmak Nehri: sualtı bahçeleri üzerinde tekne turu ve nehir kenarında öğle yemeği.",
    "Акьяка|Лодочный тур|food|Природа и гастрономия|Waves",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_8",
    "Локация 8",
    "Заповедный песчаный пляж Изтузу [İztuzu Beach]: 5-километровая песчаная коса между морем и дельтой [экскурсионный день арт-отпуска].",
    "Protected Iztuzu Sandy Beach: 5 km golden sandbar between the sea and river delta [retreat excursion].",
    "Koruma Altındaki İztuzu Plajı: deniz ve nehir deltası arasındaki eşsiz kumsal [tatil gezisi].",
    "Экскурсия|Купание в море|beach|Пляжный отдых|Sun",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_9",
    "Локация 9",
    "Дельта Дальяна и ликийские пейзажи: живописный маршрут водной прогулки в рамках выездного дня арт-отпуска.",
    "Dalyan River Delta & Lycian Scenery: scenic boat route during the retreat excursion day.",
    "Dalyan Deltası ve Likya Manzaraları: sanat tatili gezi gününde tekne rotası.",
    "Экскурсия|Водный маршрут|nature|Вдохновение|Compass",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_10",
    "Локация 10",
    "Текстильные и ремесленные лавки региона Мугла: натуральный турецкий шелк, хлопок, кружево Оя и фермерские угощения.",
    "Artisan & Textile Markets of Muğla: natural Turkish silk, cotton, traditional Oya lace, and local delicacies.",
    "Muğla El Sanatları ve Tekstil Pazarları: doğal Türk ipeği, pamuklu kumaşlar ve geleneksel Oya örnekleri.",
    "Шопинг|Ткани и сувениры|walk|Ремесла Турции|ShoppingBag",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_11",
    "Локация 11",
    "Панорамная терраса и фруктовый сад ретритной виллы: утренние мастер-классы по вышивке под пение птиц.",
    "Panoramic Terrace & Fruit Garden of Retreat Villa: morning embroidery sessions surrounded by mountain nature.",
    "Sanat Tatili Villası Meyve Bahçesi ve Terası: kuş sesleri eşliğinde sabah nakış dersleri.",
    "На вилле|Ежедневно|nature|Зона мастер-классов|Sparkles",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_12",
    "Локация 12",
    "Гастрономическая терраса шефа Марины: авторские завтраки, обеды и ужины из свежих фермерских продуктов Эгейского побережья.",
    "Chef Marina's Culinary Terrace: breakfast, lunch, and dinner crafted from fresh Aegean farm produce.",
    "Şef Marina'nın Gastronomi Terası: taze Ege ürünleriyle hazırlanan ev yapımı kahvaltı ve akşam yemekleri.",
    "На вилле|3 раза в день|food|Домашняя кухня|Utensils",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_13",
    "Локация 13",
    "Пляжи Ичмелера и бухты Мармариса: лазурное море в 10-15 минутах от творческой студии Василисы.",
    "İçmeler Beach & Marmaris Bays: turquoise Aegean waters 10-15 minutes from Vasilisa's studio.",
    "İçmeler Plajı ve Marmaris Koyları: Vasilisa'nın stüdyosuna 10-15 dakika mesafede turkuaz deniz.",
    "7 км|10 мин|beach|Морской отдых|Sun",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_14",
    "Локация 14",
    "Международная служба доставки бутика [PTT / DHL / СДЭК]: отправка готовых брошей, сумочек и наборов материалов по всему миру.",
    "International Boutique Shipping Hub [PTT / DHL / CDEK]: worldwide delivery of finished brooches, bags & material kits.",
    "Uluslararası Butik Kargo Merkezi [PTT / DHL]: tüm dünyaya tasarım ürün ve malzeme gönderimi.",
    "Весь мир|2-3 дня отправка|transport|Доставка бутика|Package",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_title",
    "Заголовок пространства виллы и студии",
    "Пространство творчества и отдыха: Горная вилла ретритов и Студия в Мармарисе",
    "Creative & Relaxation Space: Mountain Retreat Villa & Marmaris Studio",
    "Yaratıcılık ve Dinlenme Alanı: Dağ Villası ve Marmaris Stüdyosu",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_subtitle",
    "Подзаголовок пространства",
    "Идеальное сочетание глубокого обучения вышивке от кутюр, комфортного проживания на вилле с бассейном и средиземноморского отдыха",
    "A seamless blend of deep haute couture embroidery training, mountain villa comfort with a pool, and Aegean relaxation",
    "Haute couture nakış eğitimi, havuzlu dağ villası konforu ve Ege tatilinin kusursuz uyumu",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_title",
    "Заголовок виллы и бассейна",
    "Приватная горная вилла с бассейном и фруктовым садом",
    "Private Mountain Villa with Swimming Pool & Fruit Garden",
    "Yüzme Havuzlu ve Meyve Bahçeli Özel Dağ Villası",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_desc",
    "Описание виллы",
    "Уединенная вилла в горах провинции Мугла [30 минут от аэропорта Даламан DLM] с собственным бассейном, 4 комфортными спальнями, просторной светлой верандой для работы за кутюрными рамами и тенистым фруктовым садом.",
    "Secluded villa in the mountains of Muğla Province [30 min from Dalaman Airport DLM] featuring a private swimming pool, 4 bedrooms, a bright veranda for embroidery frames, and a lush fruit garden.",
    "Dalaman Havalimanı'na [DLM] 30 dakika mesafede, özel havuzlu, 4 yatak odalı, aydınlık nakış verandalı ve meyve bahçeli dağ villası.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_badge",
    "Бейдж квоты",
    "Камерная группа: строго до 6 участниц",
    "Intimate Group: Strictly 6 Participants",
    "Butik Grup: Maksimum 6 Katılımcı",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_season",
    "Сезон потоков",
    "Сезон арт-отпусков 2027: май, июнь, сентябрь, октябрь",
    "2027 Retreat Season: May, June, September, October",
    "2027 Sanat Tatili Sezonu: Mayıs, Haziran, Eylül, Ekim",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_lighting",
    "Режим занятий",
    "Вышивальные сессии в саду: 5 дней с 09:00 до 17:00",
    "Garden embroidery sessions: 5 days from 09:00 to 17:00",
    "Bahçede nakış seansları: 5 gün 09:00 - 17:00 arası",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_maintenance",
    "Материалы",
    "Все материалы, пайетки, бисер, органза и инструменты включены",
    "All fabrics, French sequins, beads, and tools included",
    "Tüm kumaşlar, Fransız payetleri, boncuklar ve araçlar dahil",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_title",
    "Заголовок студии в Мармарисе",
    "Очная мастерская Василисы в Мармарисе и онлайн-академия",
    "Vasilisa's Marmaris Studio & Online Academy",
    "Vasilisa'nın Marmaris Stüdyosu ve Online Akademisi",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_desc",
    "Описание студии",
    "Профессионально оборудованная студия для 5-дневного индивидуального наставничества [500 €] и съемки макро-уроков в 4K с пожизненным доступом и 6-месячной проверкой 20-30 сек видео ДЗ.",
    "Professionally equipped studio for 5-day 1-on-1 intensives [500 €] and 4K macro video lessons with lifetime access and 6-month review of 20-30 sec homework videos.",
    "5 günlük birebir eğitimler [500 €] ve 6 ay video ödev kontrolü sunan profesyonel donanımlı Marmaris nakış atölyesi.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_badge",
    "Бейдж наставничества",
    "Индивидуально 1-на-1 с мастером",
    "1-on-1 Personal Tutoring",
    "Usta ile Birebir Eğitim",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_schedule",
    "График студии",
    "График студии в Мармарисе: пн - пт с 09:00 до 17:00",
    "Marmaris Studio schedule: Mon - Fri, 09:00 - 17:00",
    "Marmaris Stüdyo saatleri: Pzt - Cum, 09:00 - 17:00",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_lighting",
    "Обратная связь",
    "Онлайн-сопровождение: 180 дней проверки 20-30 сек видео ДЗ",
    "Online mentorship: 180 days of 20-30 sec video homework review",
    "Online mentorluk: 180 gün boyunca 20-30 sn video ödev kontrolü",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_season",
    "Доступ к урокам",
    "Доступ к купленным МК и 16 видеоурокам: навсегда",
    "Access to purchased workshops and 16 lessons: lifetime",
    "Satın alınan atölye ve 16 derse erişim: ömür boyu",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_street_lighting_title",
    "Экскурсионная программа",
    "Выездные путешествия и вдохновение",
    "Guided Excursions & Inspiration",
    "Gezi Rotaları ve İlham",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_street_lighting_desc",
    "Описание экскурсий",
    "Поездка в Акьяку, прогулка по реке Азмак, Дальян и пляж Изтузу включены в арт-отпуск",
    "Excursion to Akyaka, Azmak River, Dalyan, and Iztuzu Beach included in the retreat",
    "Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı gezisi sanat tatiline dahil",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_parking_title",
    "Трансфер из аэропорта",
    "Встреча и трансфер из аэропорта DLM",
    "Dalaman Airport [DLM] Pickup & Transfer",
    "Dalaman Havalimanı [DLM] Karşılama ve Transfer",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_parking_desc",
    "Описание трансфера",
    "Бесплатный индивидуальный трансфер из аэропорта Даламан [DLM] на виллу или в студию Мармариса",
    "Complimentary private transfer from Dalaman Airport [DLM] to the villa or Marmaris studio",
    "Dalaman Havalimanı'ndan [DLM] villaya veya Marmaris stüdyosuna ücretsiz transfer",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_bbq_title",
    "Гастрономия от шефа Марины",
    "Домашняя средиземноморская кухня",
    "Home-Style Mediterranean Cuisine",
    "Ev Yapımı Akdeniz Mutfağı",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_bbq_desc",
    "Описание кухни",
    "3-разовое питание из свежих фермерских продуктов, турецкие завтраки и душевные ужины на террасе",
    "3 daily meals made from fresh local farm produce, Turkish breakfasts, and terrace dinners",
    "Taze çiftlik ürünleriyle hazırlanan 3 öğün yemek, serpme kahvaltı ve terasta akşam yemekleri",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_header",
    "Заголовок блока правил и гарантий",
    "Юридические гарантии, публичные оферты, KVKK / GDPR и правила бронирования",
    "Legal Guarantees, Public Offers, KVKK / GDPR & Booking Rules",
    "Yasal Güvenceler, Mesafeli Satış Sözleşmesi, KVKK / GDPR ve Rezervasyon Kuralları",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_title",
    "Оферта на обучение и МК",
    "Публичная оферта на обучение и бессрочный доступ",
    "Public Offer for Courses & Lifetime Access",
    "Eğitim Sözleşmesi ve Ömür Boyu Erişim",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_desc",
    "Описание оферты",
    "Официальный договор оферты на онлайн мастер-классы и 6-месячное индивидуальное наставничество.",
    "Official public offer governing online masterclasses and 6-month personal mentorship.",
    "Online atölyeler ve 6 aylık birebir mentorluk için resmi mesafeli satış sözleşmesi.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_badge",
    "Бейдж оферты",
    "Доступ навсегда + 180 дней кураторства",
    "Lifetime Access + 180 Days Mentorship",
    "Ömür Boyu Erişim + 180 Gün Mentorluk",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_item1",
    "Пункт 1.1",
    "Мгновенная выдача ссылок-приглашений в закрытые Telegram-каналы МК и 16 уроков после подтверждения оплаты.",
    "Instant delivery of invite links to private Telegram channels for workshops and 16 lessons upon payment.",
    "Ödeme onayından hemen sonra özel Telegram kanallarına davet bağlantılarının iletilmesi.",
    "CheckCircle",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_item2",
    "Пункт 1.2",
    "Фиксация даты старта онлайн-наставничества и автоматический расчет 6 месяцев обратной связи [EDATE +6 мес].",
    "Automatic tracking of your mentorship start date and 6-month video feedback period [EDATE +6 months].",
    "Mentorluk başlangıç tarihinin kaydı ve 6 aylık geri bildirim süresinin otomatik takibi.",
    "Clock",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_item3",
    "Пункт 1.3",
    "Выдача именного PDF-сертификата школы Vasilisa.luneville с защитным QR-кодом после сдачи итоговой работы.",
    "Issuance of a named Vasilisa.luneville PDF certificate with QR verification upon completing your final piece.",
    "Final çalışmasının tamamlanmasının ardından QR kodlu isimli PDF sertifika verilmesi.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_title",
    "Договор арт-отпуска и студии",
    "Бронирование арт-отпусков в Турции и студии в Мармарисе",
    "Booking Turkey Art Retreats & Marmaris Studio Weeks",
    "Türkiye Sanat Tatili ve Marmaris Stüdyo Rezervasyonu",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_desc",
    "Описание правил ретрита",
    "Прозрачная система квот [6 мест на поток] и удержание выбранного слота на 24 часа [HOLD].",
    "Transparent 6-spot quota system and 24-hour slot reservation [HOLD] while purchasing flights.",
    "Şeffaf 6 kişilik kontenjan sistemi ve uçak bileti alımı için 24 saatlik [HOLD] rezervasyon hakkı.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_badge",
    "Бейдж ретрита",
    "Квота 6 мест • 24ч HOLD",
    "6 Spots Quota • 24h HOLD",
    "6 Kişilik Kontenjan • 24 Saat HOLD",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_item1",
    "Пункт 2.1",
    "В стоимость арт-отпуска [1100 / 1200 / 1500 €] включено всё: вилла 7 ночей, питание от Марины, обучение, материалы, экскурсии и трансфер DLM.",
    "Retreat packages [1100 / 1200 / 1500 €] include 7 nights at the villa, meals by Marina, tuition, materials, excursions & DLM transfer.",
    "Sanat tatili paketlerine [1100 / 1200 / 1500 €] 7 gece konaklama, yemekler, eğitim, malzemeler, geziler ve DLM transferi dahildir.",
    "Home",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_item2",
    "Пункт 2.2",
    "Индивидуальная неделя в студии Мармариса [500 €] включает 5 дней обучения пн-пт 09:00-17:00, все материалы и трансфер из аэропорта DLM.",
    "Marmaris 5-day studio intensive [500 €] includes Mon-Fri 09:00-17:00 1-on-1 training, all materials, and DLM airport transfer.",
    "Marmaris 5 günlük stüdyo eğitimi [500 €] Pzt-Cum 09:00-17:00 birebir dersleri, malzemeleri ve DLM transferini kapsar.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_item3",
    "Пункт 2.3",
    "Оперативная поддержка в Telegram-канале ретрита @limonnavillevturkey и по телефонам +7 921 304-78-92 / +90 545 598 32 11.",
    "Direct support via @limonnavillevturkey Telegram channel and WhatsApp +7 921 304-78-92 / +90 545 598 32 11.",
    "@limonnavillevturkey Telegram kanalı ve +7 921 304-78-92 / +90 545 598 32 11 numaralarından doğrudan destek.",
    "Phone",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_title",
    "Правила бутика и доставки",
    "Бутик кутюрных изделий и Ателье «Под заказ»",
    "Couture Boutique & Bespoke Atelier Policy",
    "Haute Couture Butik ve Özel Sipariş Kuralları",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_desc",
    "Описание бутика",
    "Бережная международная доставка готовых украшений и индивидуальный пошив по утвержденному эскизу.",
    "Insured worldwide shipping of ready-to-wear pieces and custom creation according to your approved sketch.",
    "Hazır tasarım ürünlerin sigortalı uluslararası kargosu ve onaylanan eskize göre özel üretim.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_badge",
    "Бейдж бутика",
    "Отправка за 2-3 дня • Трек-номер",
    "2-3 Day Dispatch • Tracked Shipping",
    "2-3 Günde Kargo • Takip Numarası",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_item1",
    "Пункт 3.1",
    "Готовые броши, воротнички и сумочки отправляются в течение 2-3 рабочих дней в подарочной коробке с трек-номером.",
    "Ready-to-ship brooches, collars, and bags dispatch within 2-3 business days in a luxury gift box with tracking.",
    "Hazır broş, yaka ve çantalar özel hediye kutusunda 2-3 iş günü içinde takip numarasıyla kargolanır.",
    "Package",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_item2",
    "Пункт 3.2",
    "Изделия «Под заказ» [Bespoke] создаются за 14-30 рабочих дней с фото- и видеоотчетами процесса вышивки на раме.",
    "Bespoke Atelier orders are handcrafted in 14-30 business days with photo and video progress updates.",
    "Kişiye özel siparişler 14-30 iş günü içinde aşama fotoğrafları ve videolarıyla hazırlanır.",
    "Camera",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_item3",
    "Пункт 3.3",
    "ИИ-брифователь на сайте помогает мгновенно составить техническое задание на кастомную вышивку и рассчитать стоимость.",
    "Our on-site AI Brief Assistant helps structure your custom embroidery request and estimate pricing.",
    "Sitedeki Yapay Zeka Asistanı özel sipariş brifinizi oluşturmanıza ve fiyat hesaplamasına yardımcı olur.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_title",
    "KVKK, GDPR и налоговый учет",
    "Защита данных KVKK / GDPR и фактуры e-Arşiv GİB",
    "KVKK / GDPR Data Protection & e-Arşiv GİB Invoicing",
    "KVKK / GDPR Veri Koruma ve e-Arşiv Fatura",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_desc",
    "Описание налогов и KVKK",
    "Полное соответствие закону Турции KVKK № 6698, европейскому регламенту GDPR и стандарту VUK 213.",
    "Full compliance with Turkish KVKK Law No. 6698, EU GDPR, and Turkish Tax Procedure Law VUK 213.",
    "6698 sayılı KVKK, AB GDPR ve VUK 213 elektronik fatura standartlarına tam uyum.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_badge",
    "Бейдж налоговой",
    "Marmaris Vergi Dairesi • VUK 213",
    "Marmaris Vergi Dairesi • VUK 213",
    "Marmaris Vergi Dairesi • VUK 213",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_item1",
    "Пункт 4.1",
    "Выставление официальных электронных фактур e-Arşiv Fatura GİB в турецких лирах [TRY] по курсу TCMB и чеков НПД/ИП РФ.",
    "Official e-Arşiv Fatura GİB electronic invoices in TRY at TCMB exchange rates and official RU tax receipts.",
    "TCMB kuru üzerinden TRY cinsinden resmi e-Arşiv Fatura GİB düzenlenmesi.",
    "FileText",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_item2",
    "Пункт 4.2",
    "Безопасная двухфакторная верификация аккаунтов учениц [OTP по Email] с неизменяемым идентификатором VL-USER-XXXX.",
    "Secure OTP email verification for student accounts with immutable UID VL-USER-XXXX.",
    "VL-USER-XXXX kimliği ile öğrenci hesapları için güvenli e-posta OTP doğrulaması.",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_item3",
    "Пункт 4.3",
    "Гибкий перенос предоплаты на следующий поток арт-отпуска или на программу онлайн-наставничества при предупреждении за 30 дней.",
    "Flexible transfer of retreat deposit to a future flow or online mentorship with 30 days advance notice.",
    "30 gün önceden bildirimle tatil ön ödemesini sonraki döneme veya online eğitime aktarma imkanı.",
    "Calendar",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "brandName",
    "Название бренда в шапке",
    "Vasilisa.luneville — вышивка от кутюр",
    "Vasilisa.luneville — Haute Couture Embroidery",
    "Vasilisa.luneville — Haute Couture Nakış",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "login",
    "Кнопка входа",
    "Войти",
    "Log in",
    "Giriş Yap",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "register",
    "Кнопка регистрации",
    "Регистрация ученицы",
    "Student Sign Up",
    "Öğrenci Kaydı",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "logout",
    "Кнопка выхода",
    "Выйти",
    "Log out",
    "Çıkış Yap",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "guestCabinet",
    "Кабинет ученицы",
    "Кабинет ученицы",
    "Student Cabinet",
    "Öğrenci Paneli",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "hostCabinet",
    "Кабинет мастера Василисы",
    "Кабинет Василисы [CRM]",
    "Master Cabinet [CRM]",
    "Usta Paneli [CRM]",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navAbout",
    "Меню: О школе",
    "О школе и направлениях",
    "About & Directions",
    "Okul ve Yönler",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navAmenities",
    "Меню: Материалы и программа",
    "Материалы и условия",
    "Materials & Included",
    "Malzemeler ve Dahil Olanlar",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navReviews",
    "Меню: Отзывы учениц",
    "Работы и отзывы",
    "Student Works & Reviews",
    "Öğrenci Çalışmaları ve Yorumlar",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navLocation",
    "Меню: Мармарис и Вилла",
    "Мармарис и Вилла",
    "Marmaris & Retreat Villa",
    "Marmaris ve Villa",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navCatalog",
    "Меню: МК, Ретриты и Бутик",
    "Мастер-классы, Ретриты и Бутик",
    "Workshops, Retreats & Boutique",
    "Atölyeler, Tatiller ve Butik",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "bookNow",
    "Кнопка записи",
    "Записаться на ретрит / в студию",
    "Book Retreat or Studio Week",
    "Sanat Tatili / Stüdyo Rezervasyonu",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "checkIn",
    "Дата начала потока",
    "Старт потока / недели",
    "Start Date",
    "Başlangıç Tarihi",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "checkOut",
    "Дата окончания потока",
    "Завершение",
    "End Date",
    "Bitiş Tarihi",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "guests",
    "Количество участниц",
    "Участниц",
    "Participants",
    "Katılımcı Sayısı",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "perNight",
    "Базовый тариф",
    "за день программы / МК",
    "per program day / workshop",
    "program günü / atölye",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "nights",
    "Дней обучения",
    "дней",
    "days",
    "gün",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "totalPrice",
    "Итого к оплате",
    "Итого за программу",
    "Total Program Price",
    "Toplam Program Tutarı",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "cleaningFee",
    "Комплект материалов от кутюр",
    "Материалы и трансфер DLM",
    "Materials & DLM Transfer",
    "Malzemeler ve DLM Transferi",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "depositText",
    "Условие удержания слота",
    "Слот удерживается 24 часа [HOLD] • Квота ретрита 6 мест",
    "Slot held for 24h [HOLD] • 6 spots retreat quota",
    "Kontenjan 24 saat [HOLD] tutulur • 6 kişilik kota",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "confirmBooking",
    "Подтвердить запись",
    "Подтвердить запись и перейти к оплате",
    "Confirm Enrollment & Pay",
    "Kaydı Onayla ve Ödemeye Geç",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "selectDates",
    "Выбрать даты потока",
    "Выберите даты потока ретрита или недели в студии",
    "Select retreat flow or studio week dates",
    "Sanat tatili veya stüdyo haftası tarihlerini seçin",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "close",
    "Кнопка Закрыть",
    "Закрыть",
    "Close",
    "Kapat",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "back",
    "Кнопка Назад",
    "Назад",
    "Back",
    "Geri",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "save",
    "Кнопка Сохранить",
    "Сохранить",
    "Save",
    "Kaydet",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllPhotos",
    "Кнопка всех фото",
    "Смотреть макро-галерею работ",
    "View Macro Embroidery Gallery",
    "Makro Nakış Galerisini Gör",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllAmenities",
    "Кнопка всех материалов",
    "Показать все материалы и условия",
    "Show all materials & conditions",
    "Tüm malzemeleri ve koşulları göster",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllLandmarksBtn",
    "Кнопка всех 14 локаций",
    "Показать все 14 локаций Мармариса и ретрита",
    "Show all 14 Marmaris & retreat locations",
    "Marmaris ve tatil rotalarındaki 14 noktayı göster",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllReviewsBtn",
    "Кнопка всех отзывов",
    "Читать все отзывы учениц",
    "Read all student reviews",
    "Tüm öğrenci yorumlarını oku",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "landmarksCategoryTitle",
    "Заголовок категорий локаций",
    "Локации студии, виллы и экскурсий",
    "Studio, Villa & Excursion Locations",
    "Stüdyo, Villa ve Gezi Noktaları",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "reviewsCategoryTitle",
    "Заголовок оценок школы",
    "Оценки учениц по 6 критериям обучения",
    "Student Ratings Across 6 Criteria",
    "6 Eğitim Kriterinde Öğrenci Puanları",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "reviewsRatingTitle",
    "Рейтинг школы",
    "Рейтинг школы 5.0 из 5",
    "School Rating 5.0 out of 5",
    "Okul Puanı 5 üzerinden 5.0",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "legalRegulationHeader",
    "Заголовок оферты и правил",
    "Публичная оферта, KVKK / GDPR и гарантии Vasilisa.luneville",
    "Public Offer, KVKK / GDPR & Vasilisa.luneville Guarantees",
    "Mesafeli Satış Sözleşmesi, KVKK / GDPR ve Güvenceler",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "chatWithHost",
    "Кнопка чата с Василисой",
    "Чат с Василисой и сдача видео ДЗ",
    "Chat with Vasilisa & Submit Homework Video",
    "Vasilisa ile Sohbet ve Ödev Videosu Gönderimi",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "onlineStatus",
    "Статус онлайн",
    "Василиса и ИИ-Куратор на связи",
    "Vasilisa & AI Curator Online",
    "Vasilisa ve Yapay Zeka Küratörü Çevrimiçi",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "typing",
    "Печатает ответ",
    "ИИ-Куратор формирует ответ...",
    "AI Curator is typing...",
    "Yapay Zeka Küratörü yazıyor...",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "send",
    "Кнопка отправить",
    "Отправить",
    "Send",
    "Gönder",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "messagePlaceholder",
    "Плейсхолдер чата",
    "Задайте вопрос по МК/ретриту или прикрепите ссылку на 20-30 сек видео ДЗ...",
    "Ask about workshops/retreats or paste your 20-30 sec homework video link...",
    "Atölye/tatil sorunuzu yazın veya 20-30 sn ödev video linkini ekleyin...",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "bookingSuccess",
    "Уведомление об успешной записи",
    "Заявка принята! Доступ или подтверждение брони отправлены в ваш кабинет и Telegram.",
    "Request received! Course access or booking confirmation has been sent to your cabinet and Telegram.",
    "Talebiniz alındı! Eğitim erişimi veya rezervasyon onayı panelinize ve Telegram'a iletildi.",
    "",
    "Вкл"
  ]
];

const MASTER_HOME_MAP = {
  "HERO_ATELIER": {
    "block": "Блок 1. Главный экран ателье",
    "key": "HERO_ATELIER",
    "desc": "Главный баннер / Первый экран сайта",
    "ru": "Vasilisa.luneville - школа и ателье кутюрной вышивки. Создавайте красоту своими руками с 2015 года. От первых стежков до высокой моды.",
    "en": "Vasilisa.luneville - Haute Couture Embroidery School & Atelier since 2015. Master Parisian embroidery techniques.",
    "tr": "Vasilisa.luneville - 2015'ten beri Haute Couture Nakış Okulu ve Atölyesi. Sıfırdan lüks nakış sanatını öğrenin.",
    "media": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "DIRECTION_CARDS": {
    "block": "Блок 2. Направления школы",
    "key": "DIRECTION_CARDS",
    "desc": "Карточки 4 направлений школы и бутика",
    "ru": "Онлайн мастер-классы [от 10 €], Индивидуальное онлайн-наставничество [200 €], Офлайн-студия в Мармарисе [500 €], Арт-отпуска в горах Турции [1100-1500 €], Бутик авторских изделий",
    "en": "Online Masterclasses [from 10 €], 1-on-1 Online Mentorship [200 €], Offline Studio in Marmaris [500 €], Art Retreats in Turkey [1100-1500 €], Couture Boutique",
    "tr": "Online Atölyeler [10 €'dan], Birebir Online Mentorluk [200 €], Marmaris Stüdyosu [500 €], Türkiye Sanat Tatili [1100-1500 €], Haute Couture Butik",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "MASTERCLASSES_SHOWCASE": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "MASTERCLASSES_SHOWCASE",
    "desc": "Секция каталога 5 онлайн МК",
    "ru": "Доступные онлайн МК: Ветка лаванды [10 €], Мимоза - 4 варианта [10 € / 1000 ₽], Фейерверк [15 €], Оформление в рамку [10 €], Зимняя сказка [15 €]. Доступ навсегда в Telegram.",
    "en": "Online masterclasses with lifetime access in Telegram: Lavender Branch [10 €], Mimosa [10 €], Fireworks [15 €], Framing [10 €], Winter Tale [15 €].",
    "tr": "Telegram'da ömür boyu erişimli online atölyeler: Lavanta Dalı [10 €], Mimoza [10 €], Havai Fişek [15 €], Çerçeveleme [10 €], Kış Masalı [15 €].",
    "media": "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "ONLINE_MENTORSHIP": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "ONLINE_MENTORSHIP",
    "desc": "Презентация флагманского курса 16 уроков",
    "ru": "Индивидуальное наставничество «Основы люневильской вышивки» - 16 макро-видеоуроков, доступ навсегда и 6 месяцев личной обратной связи по 20-30 сек видео. 200 €.",
    "en": "1-on-1 Online Mentorship 'Luneville Embroidery Fundamentals' - 16 macro lessons, lifetime access & 6 months personal video feedback. 200 €.",
    "tr": "Birebir Online Mentorluk 'Luneville Nakış Temelleri' - 16 makro ders, ömür boyu erişim ve 6 ay video geri bildirimi. 200 €.",
    "media": "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "OFFLINE_STUDIO_MARMARIS": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "OFFLINE_STUDIO_MARMARIS",
    "desc": "Очное обучение в студии Мармариса",
    "ru": "5 дней в студии Мармариса [пн-пт 09:00-17:00]. Постановка руки, профессиональные рамы и материалы включены, помощь с отелем и трансфер из аэропорта Даламан DLM. 500 €.",
    "en": "5-day intensive at Marmaris studio [Mon-Fri 09:00-17:00]. Hand positioning, frames & materials included, hotel support and DLM airport transfer. 500 €.",
    "tr": "Marmaris atölyesinde 5 günlük yoğun eğitim [Pzt-Cum 09:00-17:00]. El yerleşimi, malzemeler, otel desteği ve DLM havalimanı transferi dahil. 500 €.",
    "media": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "ART_RETREAT_TURKEY": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "ART_RETREAT_TURKEY",
    "desc": "Презентация ретрита на горной вилле",
    "ru": "8 дней / 7 ночей на приватной горной вилле в провинции Мугла [30 мин от DLM]. Группа до 6 участниц, наставники Василиса Боровикова и Юлия Озмен, шеф Марина. Выезд в Акьяку, реку Азмак, Дальян и пляж Изтузу.",
    "en": "8 days / 7 nights at a private mountain villa in Muğla [30 min from DLM]. Up to 6 guests, mentors Vasilisa & Yulia, chef Marina. Excursion to Akyaka, Azmak River, Dalyan & Iztuzu Beach.",
    "tr": "Muğla'da özel dağ villasında 8 gün / 7 gece sanat tatili [DLM'ye 30 dk]. 6 katılımcı, eğitmenler Vasilisa ve Yulia, şef Marina. Akyaka, Azmak, Dalyan ve İztuzu gezisi.",
    "media": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "RETREAT_CALENDAR_BOOKING": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "RETREAT_CALENDAR_BOOKING",
    "desc": "Сетка 4 потоков 2027 и бронирование",
    "ru": "Потоки 2027 [по 6 мест]: 1-8 мая, 19-26 июня, 18-25 сентября, 23-30 октября. Тарифы: 1100 € [односп. кровать], 1200 € [двусп. кровать], 1500 € [отдельная спальня]. Удержание брони 24ч HOLD.",
    "en": "2027 Flows [6 spots each]: May 1-8, June 19-26, Sep 18-25, Oct 23-30. Packages: 1100 € [single bed], 1200 € [double bed], 1500 € [private room]. 24h HOLD reservation.",
    "tr": "2027 Dönemleri [6'şar kişilik]: 1-8 Mayıs, 19-26 Haziran, 18-25 Eylül, 23-30 Ekim. Paketler: 1100 €, 1200 €, 1500 €. 24 saat HOLD rezervasyon.",
    "media": "https://t.me/limonnavillevturkey",
    "status": "Вкл",
    "enabled": true
  },
  "BOUTIQUE_READY_AND_BESPOKE": {
    "block": "Блок 8. Бутик кутюрных изделий",
    "key": "BOUTIQUE_READY_AND_BESPOKE",
    "desc": "Каталог готовых изделий и ателье под заказ",
    "ru": "Авторские кутюрные броши, расшитые воротнички, вечерние сумочки в наличии и индивидуальный пошив под заказ [Bespoke Atelier] по вашему брифу с доставкой по всему миру.",
    "en": "Designer couture brooches, embroidered collars, evening bags ready to ship and Bespoke Atelier custom orders with worldwide insured delivery.",
    "tr": "El yapımı haute couture broşlar, işlemeli yakalar, gece çantaları ve kişiye özel tasarım [Bespoke Atelier] siparişleri.",
    "media": "https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "MACRO_GALLERY_PROCESS": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "MACRO_GALLERY_PROCESS",
    "desc": "Макросъемка стежков и материалов",
    "ru": "Макросъемка люневильского тамбурного стежка, работа с шелковой синелью, бархатом, прозрачной органзой, французскими пайетками и японским бисером.",
    "en": "Macro close-ups of Luneville tambour stitches, silk chenille, velvet, sheer organza, French sequins, and Japanese seed beads.",
    "tr": "Luneville zincir dikişi, ipek şönil, kadife, şeffaf organze, Fransız payetleri ve Japon boncuklarının makro çekimleri.",
    "media": "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "HOW_LEARNING_WORKS": {
    "block": "Блок 10. Как проходит обучение",
    "key": "HOW_LEARNING_WORKS",
    "desc": "Пошаговая методика обучения",
    "ru": "Шаг 1: Выбор МК или наставничества и оплата -> Шаг 2: Мгновенный доступ к макро-урокам в Telegram и кабинете -> Шаг 3: Отправка 20-30 сек видео ДЗ -> Шаг 4: Бережный разбор Василисы и сертификат.",
    "en": "Step 1: Choose course & pay -> Step 2: Instant access to macro lessons in Telegram & cabinet -> Step 3: Send 20-30 sec homework videos -> Step 4: Personal review by Vasilisa & certificate.",
    "tr": "Adım 1: Eğitim seçimi ve ödeme -> Adım 2: Telegram ve panelde makro derslere anında erişim -> Adım 3: 20-30 sn ödev videosu gönderimi -> Adım 4: Vasilisa'dan detaylı inceleme ve sertifika.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "ABOUT_MASTERS": {
    "block": "Блок 11. О наставниках",
    "key": "ABOUT_MASTERS",
    "desc": "Команда мастеров школы и ретритов",
    "ru": "Василиса Боровикова - кутюрная вышивальщица с 2015 г., основатель студии в Мармарисе; Юлия Озмен - соавтор ретритов и дизайнер сумочек; Марина - хозяйка ретритной виллы и шеф-повар.",
    "en": "Vasilisa Borovikova - couture artist since 2015, founder of Marmaris studio; Yulia Ozmen - retreat co-author & bag designer; Marina - villa host & chef.",
    "tr": "Vasilisa Borovikova - 2015'ten beri sanatçı, Marmaris stüdyosu kurucusu; Yulia Ozmen - tatil ortak eğitmeni; Marina - villa ev sahibi ve şef.",
    "media": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "STUDENT_REVIEWS_WORKS": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "STUDENT_REVIEWS_WORKS",
    "desc": "Работы выпускниц и отзывы",
    "ru": "Реальные работы учениц с нуля до кутюрных коллекций, отзывы об онлайн-наставничестве, мастер-классах Лаванда и Мимоза и арт-отпусках в Турции.",
    "en": "Authentic student works from scratch to couture collections, reviews of online mentorship, Lavender & Mimosa masterclasses, and Turkey art retreats.",
    "tr": "Sıfırdan haute couture koleksiyonlara öğrenci çalışmaları, online mentorluk, Lavanta ve Mimoza atölyeleri ve sanat tatili yorumları.",
    "media": "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "KNOWLEDGE_PREVIEW": {
    "block": "Блок 13. База знаний и статьи",
    "key": "KNOWLEDGE_PREVIEW",
    "desc": "Энциклопедия вышивальщицы",
    "ru": "Гид по выбору люневильского крючка №70-90, правила барабанной запялки органзы в раму и пяльцы, таблица размеров пайеток и бисера, секреты чистой изнанки.",
    "en": "Guide to choosing Luneville hooks #70-90, drum-tight organza framing, sequin & bead sizing chart, and secrets of a flawless couture reverse side.",
    "tr": "Luneville tığı #70-90 seçim rehberi, organze gerdirme kuralları, payet ve boncuk ölçü tablosu ve kusursuz ters yüz sırları.",
    "media": "BookOpen",
    "status": "Вкл",
    "enabled": true
  },
  "AI_CURATOR_FAQ": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "AI_CURATOR_FAQ",
    "desc": "Интеллектуальный помощник Gemini 3.6 Flash",
    "ru": "ИИ-Куратор Gemini 3.6 Flash 24/7 поможет подобрать первый мастер-класс, рассчитает карту материалов в EUR/RUB/TRY/USD, примет бриф на индивидуальный заказ и ответит на вопросы по арт-отпуску.",
    "en": "Gemini 3.6 Flash AI Curator 24/7 helps select your first workshop, calculates material checklists in EUR/RUB/TRY/USD, takes bespoke briefs, and answers retreat questions.",
    "tr": "Gemini 3.6 Flash Yapay Zeka Küratörü 7/24 ilk atölyenizi seçmenize, malzeme listesini hesaplamanıza ve özel sipariş brifi oluşturmanıza yardımcı olur.",
    "media": "MessageCircle",
    "status": "Вкл",
    "enabled": true
  },
  "CONTACTS_AND_STUDIO_MAP": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "CONTACTS_AND_STUDIO_MAP",
    "desc": "Контакты студии и карта Мармариса",
    "ru": "Мармарис, провинция Мугла, Турция [30-90 мин от аэропорта Даламан DLM]. Тел/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "en": "Marmaris, Muğla Province, Turkey [30-90 min from Dalaman Airport DLM]. Phone/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "tr": "Marmaris, Muğla, Türkiye [Dalaman Havalimanı DLM'ye 30-90 dk]. Tel/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. E-posta: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "media": "MapPin",
    "status": "Вкл",
    "enabled": true
  },
  "LEGAL_AND_FOOTER": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "LEGAL_AND_FOOTER",
    "desc": "Оферты, KVKK/GDPR и реквизиты",
    "ru": "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - вышивка от кутюр. Публичная оферта на обучение и арт-отпуска, политика KVKK / GDPR, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "en": "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville Haute Couture Embroidery. Public Offer for courses & retreats, KVKK / GDPR Privacy Policy, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "tr": "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville Haute Couture Nakış. Mesafeli satış sözleşmesi, KVKK / GDPR politikası, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "hero_title": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_title",
    "desc": "Главный заголовок страницы",
    "ru": "Vasilisa.luneville - школа кутюрной вышивки, наставничество в Мармарисе, арт-отпуска в Турции и бутик",
    "en": "Vasilisa.luneville - Haute Couture Embroidery School, Marmaris Studio, Turkey Art Retreats & Boutique",
    "tr": "Vasilisa.luneville - Haute Couture Nakış Okulu, Marmaris Stüdyosu, Türkiye Sanat Tatili ve Butik",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "hero_subtitle": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_subtitle",
    "desc": "Подзаголовок главного экрана",
    "ru": "Онлайн мастер-классы от 10 € • Личное наставничество 16 уроков • Офлайн-интенсивы в Мармарисе • Кутюрные ретриты на вилле в Мугле",
    "en": "Online Masterclasses from 10 € • 16-Lesson Personal Mentorship • Marmaris Studio Intensives • Mountain Villa Art Retreats",
    "tr": "10 €'dan Online Atölyeler • 16 Derslik Birebir Mentorluk • Marmaris Stüdyo Eğitimleri • Muğla Dağ Villası Sanat Tatilleri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "hero_rating": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_rating",
    "desc": "Средний рейтинг школы",
    "ru": "5.0",
    "en": "5.0",
    "tr": "5.0",
    "media": "Star",
    "status": "Вкл",
    "enabled": true
  },
  "hero_reviews_count": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_reviews_count",
    "desc": "Количество отзывов учениц",
    "ru": "128 отзывов учениц",
    "en": "128 student reviews",
    "tr": "128 öğrenci yorumu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "hero_superhost_badge": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_superhost_badge",
    "desc": "Статус основателя",
    "ru": "Мастер кутюрной вышивки с 2015 г.",
    "en": "Couture Master since 2015",
    "tr": "2015'ten Beri Couture Ustası",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "hero_location": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_location",
    "desc": "Локация в шапке",
    "ru": "Мармарис и горная вилла в Мугле, Турция [30 мин от DLM]",
    "en": "Marmaris & Mountain Villa in Muğla, Turkey [30 min from DLM]",
    "tr": "Marmaris ve Muğla Dağ Villası, Türkiye [DLM'ye 30 dk]",
    "media": "MapPin",
    "status": "Вкл",
    "enabled": true
  },
  "hero_share_btn": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_share_btn",
    "desc": "Кнопка Поделиться",
    "ru": "Поделиться",
    "en": "Share",
    "tr": "Paylaş",
    "media": "Share2",
    "status": "Вкл",
    "enabled": true
  },
  "hero_favorite_btn": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_favorite_btn",
    "desc": "Кнопка В избранное",
    "ru": "В избранное",
    "en": "Save",
    "tr": "Kaydet",
    "media": "Heart",
    "status": "Вкл",
    "enabled": true
  },
  "hero_image": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_image",
    "desc": "Фотографии первого экрана [сетка 1+4]",
    "ru": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "en": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "tr": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_specs_header": {
    "block": "Блок 2. Направления школы",
    "key": "host_specs_header",
    "desc": "Заголовок блока направлений",
    "ru": "Дом кутюрной вышивки, школа и ретриты под руководством Василисы Боровиковой",
    "en": "Haute Couture Embroidery House, School & Retreats led by Vasilisa Borovikova",
    "tr": "Vasilisa Borovikova Yönetiminde Haute Couture Nakış Okulu ve Sanat Tatilleri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_specs_name": {
    "block": "Блок 2. Направления школы",
    "key": "host_specs_name",
    "desc": "Имена наставников",
    "ru": "Василиса Боровикова и Юлия Озмен",
    "en": "Vasilisa Borovikova & Yulia Ozmen",
    "tr": "Vasilisa Borovikova ve Yulia Ozmen",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_specs_avatar": {
    "block": "Блок 2. Направления школы",
    "key": "host_specs_avatar",
    "desc": "Аватар ведущего мастера",
    "ru": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "en": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "tr": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spec_guests": {
    "block": "Блок 2. Направления школы",
    "key": "spec_guests",
    "desc": "Квота участниц ретрита",
    "ru": "До 6 участниц в потоке",
    "en": "Up to 6 guests per retreat",
    "tr": "Dönem başına 6 katılımcı",
    "media": "Users",
    "status": "Вкл",
    "enabled": true
  },
  "spec_bedrooms": {
    "block": "Блок 2. Направления школы",
    "key": "spec_bedrooms",
    "desc": "Количество онлайн МК и уроков",
    "ru": "5 онлайн МК + 16 уроков курса",
    "en": "5 Workshops + 16 Mentorship Lessons",
    "tr": "5 Online Atölye + 16 Mentorluk Dersi",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "spec_beds": {
    "block": "Блок 2. Направления школы",
    "key": "spec_beds",
    "desc": "Форматы наставничества",
    "ru": "Онлайн [6 мес] и Студия Мармарис [5 дн]",
    "en": "Online [6 mo] & Marmaris Studio [5 days]",
    "tr": "Online [6 ay] ve Marmaris Stüdyo [5 gün]",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "spec_baths": {
    "block": "Блок 2. Направления школы",
    "key": "spec_baths",
    "desc": "Потоки арт-отпуска 2027",
    "ru": "4 потока в 2027 г. [8 дней / 7 ночей]",
    "en": "4 Retreat Flows in 2027 [8 days / 7 nights]",
    "tr": "2027'de 4 Sanat Tatili [8 gün / 7 gece]",
    "media": "Calendar",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_1_title": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_1_title",
    "desc": "Преимущество 1: Заголовок",
    "ru": "Обучение с нуля до уровня Haute Couture и проверка видео ДЗ по 20-30 секунд",
    "en": "From Beginner to Haute Couture with 20-30 sec Video Homework Reviews",
    "tr": "Sıfırdan Haute Couture Seviyesine ve 20-30 sn Video Ödev Kontrolü",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_1_desc": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_1_desc",
    "desc": "Преимущество 1: Описание",
    "ru": "Пошаговая макросъемка каждого стежка и 6 месяцев бережной личной обратной связи от Василисы Боровиковой в Telegram-чате.",
    "en": "Step-by-step macro video lessons and 6 months of personal stitch-by-stitch video feedback from Vasilisa Borovikova.",
    "tr": "Her ilmeğin adım adım makro çekimi ve Vasilisa Borovikova'den 6 ay boyunca birebir video geri bildirimi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_2_title": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_2_title",
    "desc": "Преимущество 2: Заголовок",
    "ru": "Очная студия в Мармарисе и кутюрные арт-отпуска на горной вилле в Турции",
    "en": "Marmaris Studio Intensives & Mountain Villa Couture Art Retreats",
    "tr": "Marmaris Stüdyo Eğitimleri ve Dağ Villasında Sanat Tatilleri",
    "media": "Compass",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_2_desc": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_2_desc",
    "desc": "Преимущество 2: Описание",
    "ru": "5-дневные индивидуальные интенсивы в Мармарисе [500 €] и 8-дневные арт-отпуска в горах Муглы [1100-1500 €] с трансфером из аэропорта Даламан DLM.",
    "en": "5-day 1-on-1 studio weeks in Marmaris [500 €] and 8-day mountain villa retreats [1100-1500 €] with DLM airport transfer included.",
    "tr": "Marmaris'te 5 günlük birebir eğitim [500 €] ve DLM transferi dahil 8 günlük dağ villası sanat tatilleri [1100-1500 €].",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_3_title": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_3_title",
    "desc": "Преимущество 3: Заголовок",
    "ru": "Бессрочный доступ к урокам, удержание слота 24ч HOLD и бутик изделий",
    "en": "Lifetime Lesson Access, 24h HOLD Slot Reservation & Couture Boutique",
    "tr": "Derslere Ömür Boyu Erişim, 24 Saat HOLD Rezervasyon ve Butik",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_3_desc": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_3_desc",
    "desc": "Преимущество 3: Описание",
    "ru": "Мгновенная выдача инвайтов в закрытые Telegram-каналы после оплаты, квота строго 6 мест на ретрит и доставка авторских изделий по всему миру.",
    "en": "Instant Telegram channel invites upon payment, strict 6-spot retreat quota, and worldwide insured delivery of boutique pieces.",
    "tr": "Ödeme sonrası özel Telegram kanallarına anında erişim, 6 kişilik tatil kontenjanı ve tüm dünyaya sigortalı kargo.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_title",
    "desc": "Заголовок секции О школе и направлениях",
    "ru": "О школе кутюрной вышивки Vasilisa.luneville, наставничестве, арт-отпусках и бутике",
    "en": "About Vasilisa.luneville Haute Couture Embroidery School, Mentorship, Retreats & Boutique",
    "tr": "Vasilisa.luneville Haute Couture Nakış Okulu, Mentorluk, Sanat Tatilleri ve Butik Hakkında",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_text",
    "desc": "Краткий вводный текст О школе",
    "ru": "С 2015 года мы обучаем искусству парижской люневильской вышивки крючком и кутюрной вышивки иглой по шелковой органзе и бархату. Выбирайте удобный формат: доступные онлайн мастер-классы от 10 €, флагманское 6-месячное онлайн-наставничество из 16 уроков [200 €], индивидуальную неделю в студии в Мармарисе [500 €], незабываемый 8-дневный арт-отпуск на горной вилле в Турции [1100-1500 €] или заказ эксклюзивного изделия в нашем бутике.",
    "en": "Since 2015 we have taught the art of Parisian Luneville tambour hook embroidery and haute couture needlework on silk organza and velvet. Choose your path: online workshops from 10 €, flagship 16-lesson online mentorship [200 €], a 5-day 1-on-1 intensive in Marmaris [500 €], an 8-day art retreat at a mountain villa in Turkey [1100-1500 €], or bespoke creations from our boutique.",
    "tr": "2015 yılından bu yana Paris Luneville tığ nakışı ve ipek organze üzerine haute couture iğne nakışı sanatını öğretiyoruz. Size uygun programı seçin: 10 €'dan başlayan online atölyeler, 16 derslik online mentorluk [200 €], Marmaris stüdyosunda 5 günlük birebir eğitim [500 €], Türkiye'de 8 günlük sanat tatili [1100-1500 €] veya butiğimizden özel tasarım ürünler.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_btn_more": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_btn_more",
    "desc": "Кнопка открытия полного описания",
    "ru": "Читать подробнее о всех 5 направлениях",
    "en": "Read full program & 5 directions",
    "tr": "Tüm 5 yön ve program detaylarını oku",
    "media": "ChevronRight",
    "status": "Вкл",
    "enabled": true
  },
  "about_modal_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_modal_title",
    "desc": "Заголовок модального окна описания",
    "ru": "Пять направлений экосистемы Vasilisa.luneville - вышивка от кутюр",
    "en": "Five Directions of the Vasilisa.luneville Couture Ecosystem",
    "tr": "Vasilisa.luneville Haute Couture Ekosisteminin Beş Yönü",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_1_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_1_title",
    "desc": "Раздел 1 описания",
    "ru": "1. Направление 0: Главный манифест и история бренда Vasilisa.luneville с 2015 года",
    "en": "1. Direction 0: Brand Manifesto & History of Vasilisa.luneville since 2015",
    "tr": "1. Yön 0: 2015'ten Beri Vasilisa.luneville Marka Manifestosu ve Tarihçesi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_1_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_1_text",
    "desc": "Текст раздела 1",
    "ru": "Vasilisa.luneville - вышивка от кутюр - это международная онлайн-школа кутюрной и люневильской вышивки, студия индивидуального наставничества в Мармарисе, организатор кутюрных арт-отпусков в Турции и бутик авторских изделий ручной работы.\n\nОснователь и ведущий мастер: Василиса Боровикова [Боровикова / Vasilisa Borovikova] - художник по вышивке от кутюр с опытом преподавания и создания коллекций с 2015 года.\nСоавтор арт-отпусков: Юлия Озмен [Yulia Ozmen] - кутюрный вышивальщик и основатель бренда эксклюзивных сумочек [преподает с 2018 года].\nПринимающая сторона ретритной виллы: Марина - хозяйка уединенной горной виллы в провинции Мугла и шеф домашней средиземноморской гастрономии.\n\nКонтакты и реквизиты:\n* Локация студии: Мармарис, провинция Мугла, Турция [Marmaris, Muğla, Türkiye].\n* Локация арт-отпусков: Горная вилла в провинции Мугла [30 минут от международного аэропорта Даламан DLM].\n* Телефон и WhatsApp РФ: +7 921 304-78-92.\n* Телефон и WhatsApp Турция: +90 545 598 32 11.\n* Официальный Email: vasilisa.luneville@gmail.com.\n* Telegram-канал арт-отпусков: https://t.me/limonnavillevturkey.",
    "en": "Vasilisa.luneville Haute Couture Embroidery is an international online school of couture and Luneville tambour embroidery, a private mentorship studio in Marmaris, organizer of luxury art retreats in Turkey, and a bespoke couture boutique.\n\nFounder & Lead Master: Vasilisa Borovikova - haute couture embroidery artist teaching and creating collections since 2015.\nCo-author of Art Retreats: Yulia Ozmen - couture embroidery master and founder of a luxury handbag brand [teaching since 2018].\nRetreat Villa Host: Marina - host of the private mountain villa in Muğla Province and chef of home-style Mediterranean cuisine.\n\nContacts & Credentials:\n* Studio Location: Marmaris, Muğla Province, Turkey.\n* Art Retreat Location: Mountain villa in Muğla Province [30 minutes from Dalaman International Airport DLM].\n* Phone & WhatsApp RU: +7 921 304-78-92.\n* Phone & WhatsApp TR: +90 545 598 32 11.\n* Official Email: vasilisa.luneville@gmail.com.\n* Art Retreat Telegram Channel: https://t.me/limonnavillevturkey.",
    "tr": "Vasilisa.luneville Haute Couture Nakış; uluslararası online haute couture ve Luneville nakış okulu, Marmaris'te birebir mentorluk atölyesi, Türkiye'de sanat tatilleri organizatörü ve el yapımı tasarım butiğidir.\n\nKurucu ve Baş Eğitmen: Vasilisa Borovikova - 2015'ten beri haute couture nakış sanatçısı ve eğitmen.\nSanat Tatili Ortak Eğitmeni: Yulia Ozmen - haute couture nakış ustası ve tasarım çanta markası kurucusu [2018'den beri eğitmen].\nVilla Ev Sahibi: Marina - Muğla'daki dağ villasının ev sahibi ve Akdeniz ev mutfağı şefi.\n\nİletişim Bilgileri:\n* Stüdyo Konumu: Marmaris, Muğla, Türkiye.\n* Sanat Tatili Konumu: Muğla'da dağ villası [Dalaman Havalimanı DLM'ye 30 dakika].\n* Telefon ve WhatsApp RU: +7 921 304-78-92.\n* Telefon ve WhatsApp TR: +90 545 598 32 11.\n* Resmi E-posta: vasilisa.luneville@gmail.com.\n* Sanat Tatili Telegram Kanalı: https://t.me/limonnavillevturkey.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_2_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_2_title",
    "desc": "Раздел 2 описания",
    "ru": "2. Направление 1: Обучающие онлайн мастер-классы с бессрочным доступом",
    "en": "2. Direction 1: Online Masterclasses with Lifetime Access",
    "tr": "2. Yön 1: Ömür Boyu Erişimli Online Nakış Atölyeleri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_2_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_2_text",
    "desc": "Текст раздела 2",
    "ru": "Пять практических онлайн мастер-классов в закрытых Telegram-каналах с пошаговой макросъемкой и доступом навсегда:\n1. МК «Ветка лаванды» [10 € / 1000 ₽]: вышивка иглой по прозрачной шелковой органзе, создание нежной объемной аппликации 10x15 см для одежды и брошей. Идеально для старта с нуля на обычных пяльцах.\n2. МК «Мимоза - 4 варианта» [10 € / 1000 ₽]: изучение четырех различных фактурных техник вышивки солнечной веточки мимозы бисером, пайетками и мулине.\n3. МК «Фейерверк» [15 € / 1500 ₽]: динамичная композиция с французскими пайетками, стеклярусом и бисером.\n4. МК «Оформление вышивки в рамку» [10 € / 1000 ₽]: секреты профессиональной натяжки тонких тканей и багетного оформления готовых кутюрных работ.\n5. МК «Зимняя сказка» [15 € / 1500 ₽]: работа с шелковой синелью, канителью и кристаллами в праздничной технике высокой моды.",
    "en": "Five hands-on online masterclasses hosted in private Telegram channels with macro video lessons and lifetime access:\n1. 'Lavender Branch' Workshop [10 € / 1000 ₽]: needle embroidery on sheer silk organza, creating a 10x15 cm applique for garments and brooches. Beginner-friendly using standard hoops.\n2. 'Mimosa - 4 Variations' Workshop [10 € / 1000 ₽]: four distinct textural techniques for embroidering a mimosa branch with beads, sequins, and floss.\n3. 'Fireworks' Workshop [15 € / 1500 ₽]: dynamic composition featuring French sequins, bugle beads, and seed beads.\n4. 'Framing Embroidery' Workshop [10 € / 1000 ₽]: professional stretching of delicate fabrics and framing finished couture pieces.\n5. 'Winter Tale' Workshop [15 € / 1500 ₽]: working with silk chenille, bullion wire, and crystals in haute couture style.",
    "tr": "Özel Telegram kanallarında makro video dersler ve ömür boyu erişim sunan beş uygulamalı online atölye:\n1. 'Lavanta Dalı' Atölyesi [10 € / 1000 ₽]: şeffaf ipek organze üzerine iğne nakışı ile 10x15 cm aplik yapımı.\n2. 'Mimoza - 4 Versiyon' Atölyesi [10 € / 1000 ₽]: boncuk, payet ve muline ile dört farklı mimoza tekniği.\n3. 'Havai Fişek' Atölyesi [15 € / 1500 ₽]: Fransız payetleri ve boru boncuklarla dinamik tasarım.\n4. 'Nakışı Çerçeveleme' Atölyesi [10 € / 1000 ₽]: hassas kumaşların gerdirilmesi ve profesyonel çerçeveleme.\n5. 'Kış Masalı' Atölyesi [15 € / 1500 ₽]: ipek şönil, tırtıl tel ve kristallerle haute couture kış nakışı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_3_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_3_title",
    "desc": "Раздел 3 описания",
    "ru": "3. Направление 2: Индивидуальное кутюрное наставничество [Онлайн и Офлайн в Мармарисе]",
    "en": "3. Direction 2: 1-on-1 Couture Mentorship [Online & Offline in Marmaris]",
    "tr": "3. Yön 2: Birebir Haute Couture Mentorluk [Online ve Marmaris Stüdyosu]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_3_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_3_text",
    "desc": "Текст раздела 3",
    "ru": "Два флагманских формата персональной постановки руки и глубокого освоения люневильской вышивки:\n\n1. Онлайн-наставничество «Основы люневильской вышивки» [200 €]:\n* 16 подробных макро-видеоуроков [от запялки органзы в раму и базового тамбурного стежка крючком №70-90 до вышивки пайетками, бисером и синелью с изнанки].\n* Бессрочный доступ ко всем 16 видеоурокам.\n* 6 месяцев [180 дней] индивидуального сопровождения Василисы в личном чате: ученица отправляет короткие видео своей работы по 20-30 секунд, а мастер детально разбирает каждое движение руки, натяжение нити и поворот крючка.\n\n2. Офлайн-наставничество в студии в Мармарисе [500 €]:\n* 5 полных учебных дней [понедельник - пятница с 09:00 до 17:00] один на один с Василисой в светлой мастерской в Мармарисе.\n* Все профессиональные кутюрные рамы, люневильские крючки, шелковая органза, французские пайетки и бисер предоставляются в студии.\n* Индивидуальная встреча и трансфер из аэропорта Даламан [DLM] и помощь в подборе комфортного отеля у моря.",
    "en": "Two flagship formats for mastering Luneville tambour embroidery with personal hand positioning:\n\n1. Online Mentorship 'Luneville Embroidery Fundamentals' [200 €]:\n* 16 step-by-step macro video lessons [from framing silk organza and tambour chain stitch with hooks #70-90 to reverse sequin, bead, and chenille work].\n* Lifetime access to all 16 lessons.\n* 6 months [180 days] of 1-on-1 feedback from Vasilisa: students send 20-30 second videos of their stitching for detailed posture and hook rotation review.\n\n2. Offline Mentorship at Marmaris Studio [500 €]:\n* 5 full studio days [Monday - Friday, 09:00 - 17:00] 1-on-1 with Vasilisa in Marmaris.\n* All professional frames, Luneville hooks, silk organza, French sequins, and beads included.\n* Airport pickup & transfer from Dalaman [DLM] plus hotel selection support.",
    "tr": "Luneville tığı ve haute couture nakışta uzmanlaşmak için iki birebir mentorluk programı:\n\n1. Online Mentorluk 'Luneville Nakış Temelleri' [200 €]:\n* 16 detaylı makro video ders [organze gerdirme, #70-90 tığ ile zincir dikiş, ters yüzden payet ve boncuk işleme].\n* 16 derse ömür boyu erişim.\n* 6 ay [180 gün] birebir geri bildirim: öğrenciler 20-30 saniyelik çalışma videoları gönderir, Vasilisa el duruşunu ve tığ dönüşünü inceler.\n\n2. Marmaris Stüdyosunda Birebir Eğitim [500 €]:\n* Marmaris atölyesinde 5 tam gün [Pazartesi - Cuma 09:00 - 17:00] birebir çalışma.\n* Tüm profesyonel kasnaklar, tığlar, ipek organze ve Fransız payetleri stüdyoda sağlanır.\n* Dalaman Havalimanı [DLM] transferi ve otel конaklama desteği.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_4_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_4_title",
    "desc": "Раздел 4 описания",
    "ru": "4. Направление 3: Кутюрные арт-отпуска на горной вилле в Турции [Сезон 2027]",
    "en": "4. Direction 3: Couture Art Retreats at a Mountain Villa in Turkey [2027 Season]",
    "tr": "4. Yön 3: Türkiye Dağ Villasında Haute Couture Sanat Tatilleri [2027 Sezonu]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_4_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_4_text",
    "desc": "Текст раздела 4",
    "ru": "Кутюрный арт-отпуск в Турции - это 8 дней / 7 ночей творчества, вдохновения и отдыха в камерной группе строго до 6 участниц на приватной вилле в горах провинции Мугла [30 минут от аэропорта Даламан DLM].\n\nКоманда ретрита: наставники по кутюрной вышивке Василиса Боровикова и Юлия Озмен, хозяйка виллы и шеф-повар Марина.\n\nРасписание 4 потоков сезона 2027 года [по 6 мест в потоке]:\n* Поток 1: 1 мая - 8 мая 2027 г.\n* Поток 2: 19 июня - 26 июня 2027 г.\n* Поток 3: 18 сентября - 25 сентября 2027 г.\n* Поток 4: 23 октября - 30 октября 2027 г.\n\nТарифы участия [всё включено, кроме авиабилетов]:\n* 1100 € - размещение на односпальной кровати в просторной двухместной спальне.\n* 1200 € - размещение на большой двуспальной кровати.\n* 1500 € - одноместное размещение в отдельной приватной спальне с санузлом.\n\nВ стоимость включено: проживание 7 ночей на вилле с бассейном и фруктовым садом, 3-разовое домашнее питание от Марины, 5 дней мастер-классов по вышивке в саду, все материалы и инструменты, индивидуальный трансфер из аэропорта DLM и выездной экскурсионный день [аутентичная Акьяка, прогулка по кристальной реке Азмак, Дальян и заповедный песчаный пляж Изтузу].",
    "en": "The Couture Art Retreat in Turkey is an 8-day / 7-night creative getaway limited to 6 participants at a private mountain villa in Muğla Province [30 minutes from Dalaman Airport DLM].\n\nRetreat Team: embroidery mentors Vasilisa Borovikova [Borovikova] & Yulia Ozmen, villa host & chef Marina.\n\n2027 Season Dates [4 flows, 6 spots each]:\n* Flow 1: May 1 - May 8, 2027\n* Flow 2: June 19 - June 26, 2027\n* Flow 3: September 18 - September 25, 2027\n* Flow 4: October 23 - October 30, 2027\n\nAll-Inclusive Packages [excluding flights]:\n* 1100 € - Single bed in a shared spacious bedroom.\n* 1200 € - Large double bed accommodation.\n* 1500 € - Private single occupancy bedroom with en-suite bath.\n\nIncludes: 7 nights at the mountain villa with pool and fruit garden, full-board meals by Marina, 5 days of garden embroidery sessions, all materials, DLM airport transfers, and a guided excursion day [Akyaka, Azmak River, Dalyan, and Iztuzu Beach].",
    "tr": "Türkiye Haute Couture Sanat Tatili; Muğla dağlarında özel bir villada [Dalaman Havalimanı DLM'ye 30 dk] kontenjanı 6 katılımcı ile sınırlı 8 gün / 7 gecelik yaratıcı bir tatildir.\n\nEkip: nakış eğitmenleri Vasilisa Borovikova [Borovikova] ve Yulia Ozmen, villa ev sahibi ve şef Marina.\n\n2027 Sezonu Tarihleri [4 dönem, 6'şar kişilik kontenjan]:\n* 1. Dönem: 1 - 8 Mayıs 2027\n* 2. Dönem: 19 - 26 Haziran 2027\n* 3. Dönem: 18 - 25 Eylül 2027\n* 4. Dönem: 23 - 30 Ekim 2027\n\nPaket Fiyatları [uçak bileti hariç her şey dahil]:\n* 1100 € - Paylaşımlı odada tek kişilik yatak.\n* 1200 € - Geniş çift kişilik yatak.\n* 1500 € - Özel banyolu tek kişilik müstakil yatak odası.\n\nDahil olanlar: havuzlu ve meyve bahçeli villada 7 gece konaklama, Marina'dan 3 öğün ev yemekleri, 5 gün nakış eğitimi, tüm malzemeler, DLM transferi ve gezi günü [Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı].",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_5_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_5_title",
    "desc": "Раздел 5 описания",
    "ru": "5. Направление 4: Бутик кутюрных изделий «В наличии» и «Под заказ» [Bespoke Atelier]",
    "en": "5. Direction 4: Couture Boutique 'Ready-to-Ship' & 'Bespoke Atelier'",
    "tr": "5. Yön 4: Haute Couture Butik 'Hazır Koleksiyon' ve 'Kişiye Özel Tasarım'",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_5_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_5_text",
    "desc": "Текст раздела 5",
    "ru": "Ателье и бутик Vasilisa.luneville создает коллекционные аксессуары, украшения и вышивку на одежде в техниках парижских домов высокой моды:\n* Изделия в наличии: кутюрные броши на шелковой органзе и бархате, расшитые воротнички, вечерние сумочки и фермуары. Отправка по всему миру в течение 2-3 рабочих дней с трек-номером.\n* Изделия под заказ [Bespoke Atelier]: индивидуальная разработка эскиза, подбор палитры французских пайеток, японского бисера, кристаллов и шелковой синели под ваш образ. Срок создания - от 14 до 30 рабочих дней.\n* Юридическая и налоговая прозрачность: оформление заказов по официальной оферте, защита персональных данных KVKK № 6698 и GDPR, выставление электронных фактур e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "en": "The Vasilisa.luneville Atelier & Boutique crafts collectible accessories, jewelry, and garment embroidery using Parisian haute couture techniques:\n* Ready-to-Ship Collection: couture brooches on silk organza and velvet, embroidered collars, evening bags. Worldwide tracked dispatch within 2-3 business days.\n* Bespoke Atelier: custom sketch design, curated palette of French sequins, Japanese beads, crystals, and silk chenille tailored to your look. Crafting time: 14-30 business days.\n* Legal & Tax Compliance: official public offer, KVKK No. 6698 & GDPR privacy protection, and e-Arşiv Fatura GİB VUK 213 invoicing [Marmaris Vergi Dairesi].",
    "tr": "Vasilisa.luneville Atölye ve Butik, Paris yüksek moda teknikleriyle koleksiyonluk aksesuarlar, takılar ve kıyafet işlemeleri üretir:\n* Hazır Koleksiyon: ipek organze ve kadife broşlar, işlemeli yakalar, gece çantaları. 2-3 iş günü içinde takipli uluslararası kargo.\n* Kişiye Özel Tasarım [Bespoke Atelier]: size özel eskiz, Fransız payetleri, Japon boncukları ve ipek şönil renk paleti. Hazırlanma süresi: 14-30 iş günü.\n* Yasal ve Vergisel Güvence: resmi mesafeli satış sözleşmesi, 6698 sayılı KVKK ve GDPR uyumu, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "sleeping_title": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "sleeping_title",
    "desc": "Заголовок секции тарифов ретрита и студии",
    "ru": "Тарифы размещения на кутюрном арт-отпуске [8 дней / 7 ночей] и очная студия в Мармарисе",
    "en": "Art Retreat Accommodation Packages [8 Days / 7 Nights] & Marmaris Studio",
    "tr": "Sanat Tatili Konaklama Paketleri [8 Gün / 7 Gece] ve Marmaris Stüdyosu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_1": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_1",
    "desc": "Тариф 1 арт-отпуска",
    "ru": "Тариф 1 : Односпальная кровать в двухместной спальне [1100 €]",
    "en": "Package 1 : Single Bed in Shared Twin Bedroom [1100 €]",
    "tr": "Paket 1 : Paylaşımlı Odada Tek Kişilik Yatak [1100 €]",
    "media": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_1_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_1_desc",
    "desc": "Описание тарифа 1",
    "ru": "8 дней / 7 ночей на горной вилле, 3-разовое домашнее питание от Марины, 5 дней обучения с Василисой и Юлией, все материалы, экскурсии и трансфер DLM.",
    "en": "8 days / 7 nights at mountain villa, full-board meals by Marina, 5 days of tuition with Vasilisa & Yulia, materials, excursions & DLM transfer.",
    "tr": "Dağ villasında 8 gün / 7 gece, Marina'dan tam pansiyon yemekler, 5 gün eğitim, tüm malzemeler, geziler ve DLM transferi.",
    "media": "Bed",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_1_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_1_badge",
    "desc": "Бейдж тарифа 1",
    "ru": "1100 € • Квота 6 мест",
    "en": "1100 € • 6 Spots Quota",
    "tr": "1100 € • 6 Kişilik Kontenjan",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_2": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_2",
    "desc": "Тариф 2 арт-отпуска",
    "ru": "Тариф 2 : Большая двуспальная кровать King Size [1200 €]",
    "en": "Package 2 : Large King Size Double Bed [1200 €]",
    "tr": "Paket 2 : Geniş King Size Çift Kişilik Yatak [1200 €]",
    "media": "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_2_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_2_desc",
    "desc": "Описание тарифа 2",
    "ru": "Просторная светлая спальня с панорамным видом на горы и сад, индивидуальный санузел, полное участие в программе арт-отпуска, материалы и трансфер DLM.",
    "en": "Spacious bright bedroom with panoramic mountain & garden views, en-suite bathroom, full retreat tuition, materials & DLM transfer.",
    "tr": "Dağ ve bahçe manzaralı ferah yatak odası, özel banyo, tam eğitim programı, malzemeler ve DLM transferi.",
    "media": "BedDouble",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_2_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_2_badge",
    "desc": "Бейдж тарифа 2",
    "ru": "1200 € • Панорамный вид",
    "en": "1200 € • Panoramic View",
    "tr": "1200 € • Panoramik Manzara",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_3": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_3",
    "desc": "Тариф 3 арт-отпуска",
    "ru": "Тариф 3 : Отдельная приватная спальня целиком [1500 €]",
    "en": "Package 3 : Private Single Occupancy Bedroom [1500 €]",
    "tr": "Paket 3 : Özel Banyolu Müstakil Yatak Odası [1500 €]",
    "media": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_3_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_3_desc",
    "desc": "Описание тарифа 3",
    "ru": "Максимальное уединение в собственной спальне с отдельной ванной комнатой и выходом к террасе. Все материалы, питание, экскурсии и VIP-трансфер DLM включены.",
    "en": "Maximum privacy in your own bedroom with private en-suite bathroom and terrace access. All materials, dining, excursions & DLM transfer included.",
    "tr": "Özel banyolu ve teras erişimli müstakil odada maksimum konfor. Tüm malzemeler, yemekler, geziler ve DLM transferi dahil.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_3_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_3_badge",
    "desc": "Бейдж тарифа 3",
    "ru": "1500 € • Приватная спальня",
    "en": "1500 € • Private Suite",
    "tr": "1500 € • Müstakil Oda",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_4": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_4",
    "desc": "Офлайн-интенсив в Мармарисе",
    "ru": "Офлайн-студия в Мармарисе : 5 дней 1-на-1 с Василисой [500 €]",
    "en": "Marmaris Studio : 5-Day 1-on-1 Intensive with Vasilisa [500 €]",
    "tr": "Marmaris Stüdyosu : Vasilisa ile 5 Gün Birebir Eğitim [500 €]",
    "media": "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_4_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_4_desc",
    "desc": "Описание студии в Мармарисе",
    "ru": "Индивидуальная учебная неделя пн-пт с 09:00 до 17:00 в мастерской Мармариса. Профессиональные рамы, крючки №70-90, шелковая органза, трансфер DLM и помощь с отелем.",
    "en": "Individual Mon-Fri 09:00-17:00 week at Marmaris studio. Professional frames, hooks #70-90, silk organza, DLM airport transfer & hotel assistance.",
    "tr": "Marmaris atölyesinde Pzt-Cum 09:00-17:00 birebir eğitim haftası. Profesyonel kasnaklar, #70-90 tığlar, organze, DLM transferi ve otel desteği.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_4_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_4_badge",
    "desc": "Бейдж студии в Мармарисе",
    "ru": "500 € • Пн-Пт 09:00-17:00",
    "en": "500 € • Mon-Fri 09:00-17:00",
    "tr": "500 € • Pzt-Cum 09:00-17:00",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenities_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenities_title",
    "desc": "Заголовок секции материалов и оснащения",
    "ru": "Что входит в обучение, мастер-классы и кутюрные арт-отпуска",
    "en": "What Is Included in Our Courses, Studio Intensives & Art Retreats",
    "tr": "Eğitim, Stüdyo ve Sanat Tatillerine Neler Dahil",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenities_btn_all": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenities_btn_all",
    "desc": "Кнопка показа всех 25 позиций",
    "ru": "Показать все материалы и условия [25]",
    "en": "Show all materials & amenities [25]",
    "tr": "Tüm malzemeleri ve olanakları göster [25]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_1",
    "desc": "Оснащение 1",
    "ru": "Люневильские крючки №70, №80, №90 и кутюрные рамы",
    "en": "Luneville Hooks #70, #80, #90 & Couture Frames",
    "tr": "Luneville Tığları #70, #80, #90 ve Profesyonel Kasnaklar",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_2",
    "desc": "Оснащение 2",
    "ru": "Натуральная шелковая органза, бархат и фатин",
    "en": "Natural Silk Organza, Velvet & Tulle",
    "tr": "Doğal İpek Organze, Kadife ve Tül",
    "media": "Layers",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_3",
    "desc": "Оснащение 3",
    "ru": "Французские пайетки, японский и чешский бисер, синель",
    "en": "French Sequins, Japanese & Czech Beads, Silk Chenille",
    "tr": "Fransız Payetleri, Japon Boncukları ve İpek Şönil",
    "media": "Gem",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_4",
    "desc": "Оснащение 4",
    "ru": "Макро-видеоуроки Full HD с бессрочным доступом в Telegram",
    "en": "Full HD Macro Video Lessons with Lifetime Telegram Access",
    "tr": "Telegram'da Ömür Boyu Erişimli Full HD Makro Dersler",
    "media": "Video",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_5",
    "desc": "Оснащение 5",
    "ru": "Личный разбор 20-30 сек видео домашних заданий [6 мес]",
    "en": "Personal Review of 20-30 sec Homework Videos [6 months]",
    "tr": "20-30 sn Ödev Videolarının Birebir İncelenmesi [6 ay]",
    "media": "MessageCircle",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_6": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_6",
    "desc": "Оснащение 6",
    "ru": "Индивидуальный трансфер из аэропорта Даламан [DLM]",
    "en": "Complimentary Dalaman Airport [DLM] Transfer",
    "tr": "Ücretsiz Dalaman Havalimanı [DLM] Transferi",
    "media": "Car",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_7": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_7",
    "desc": "Оснащение 7",
    "ru": "Проживание на горной вилле с бассейном и фруктовым садом",
    "en": "Mountain Villa Stay with Pool & Fruit Garden",
    "tr": "Havuzlu ve Meyve Bahçeli Dağ Villasında Konaklama",
    "media": "Home",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_8": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_8",
    "desc": "Оснащение 8",
    "ru": "3-разовое домашнее питание и ужины от шефа Марины",
    "en": "Full-Board Home Dining by Chef Marina",
    "tr": "Şef Marina'dan 3 Öğün Ev Yemekleri",
    "media": "Utensils",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_9": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_9",
    "desc": "Оснащение 9",
    "ru": "Экскурсионный день: Акьяка, река Азмак, Дальян и пляж Изтузу",
    "en": "Guided Excursion: Akyaka, Azmak River, Dalyan & Iztuzu Beach",
    "tr": "Rehberli Gezi: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "media": "Compass",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_10": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_10",
    "desc": "Оснащение 10",
    "ru": "Международная доставка изделий бутика и именной сертификат",
    "en": "Worldwide Boutique Shipping & Named Certificate",
    "tr": "Uluslararası Sigortalı Kargo ve İsimli Sertifika",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_title",
    "desc": "Категория 1 материалов",
    "ru": "1. Инструменты и материалы от кутюр",
    "en": "1. Haute Couture Tools & Materials",
    "tr": "1. Haute Couture Araç ve Malzemeler",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item1",
    "desc": "Элемент 1.1",
    "ru": "Оригинальные люневильские ручки и сменные крючки №70, №80, №90",
    "en": "Original Luneville handles and interchangeable hooks #70, #80, #90",
    "tr": "Orijinal Luneville sapları ve #70, #80, #90 tığ uçları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item2",
    "desc": "Элемент 1.2",
    "ru": "Профессиональные кутюрные рамы со стойками и круглые пяльцы",
    "en": "Professional couture embroidery frames with stands and hoops",
    "tr": "Ayaklı profesyonel haute couture kasnaklar",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item3",
    "desc": "Элемент 1.3",
    "ru": "Тонкая шелковая органза, хлопковый бархат и еврофатин",
    "en": "Fine silk organza, cotton velvet, and bridal tulle",
    "tr": "İnce ipek organze, pamuklu kadife ve tül",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item4",
    "desc": "Элемент 1.4",
    "ru": "Французские пайетки на нити, японский бисер Toho/Miyuki и стеклярус",
    "en": "Strung French sequins, Japanese Toho/Miyuki seed beads, and bugles",
    "tr": "Dizili Fransız payetleri, Japon Toho/Miyuki boncukları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item5",
    "desc": "Элемент 1.5",
    "ru": "Шелковая синель, жесткая и мягкая канитель, металлизированные нити",
    "en": "Silk chenille, purl bullion wire, and metallic threads",
    "tr": "İpek şönil, tırtıl tel ve metalik iplikler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_title",
    "desc": "Категория 2 обучения",
    "ru": "2. Формат онлайн-школы и обратной связи",
    "en": "2. Online School & Mentorship Format",
    "tr": "2. Online Eğitim ve Mentorluk Formatı",
    "media": "Video",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item1",
    "desc": "Элемент 2.1",
    "ru": "Макросъемка каждого стежка с лица и изнанки в высоком разрешении",
    "en": "High-definition macro filming of every stitch from front and back",
    "tr": "Ön ve arka yüzden yüksek çözünürlüklü makro çekimler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item2",
    "desc": "Элемент 2.2",
    "ru": "Бессрочный доступ к закрытым Telegram-каналам мастер-классов и 16 урокам",
    "en": "Lifetime access to private Telegram channels and all 16 mentorship lessons",
    "tr": "Özel Telegram kanallarına ve 16 derse ömür boyu erişim",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item3",
    "desc": "Элемент 2.3",
    "ru": "Проверка 20-30-секундных видео домашних заданий лично Василисой [180 дней]",
    "en": "Personal review of 20-30 second homework videos by Vasilisa [180 days]",
    "tr": "20-30 saniyelik ödev videolarının Vasilisa tarafından incelenmesi [180 gün]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item4",
    "desc": "Элемент 2.4",
    "ru": "Готовые PDF-выкройки, эскизы и подробные карты материалов с артикулами",
    "en": "Printable PDF patterns, sketches, and detailed material sourcing lists",
    "tr": "PDF şablonlar, eskizler ve detaylı malzeme listeleri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item5",
    "desc": "Элемент 2.5",
    "ru": "Именной сертификат об окончании курса люневильской вышивки с QR-кодом",
    "en": "Named certificate of completion with verification QR code",
    "tr": "QR kod doğrulamalı isimli bitirme sertifikası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_title",
    "desc": "Категория 3 арт-отпуска",
    "ru": "3. Горная вилла и программа арт-отпуска в Турции",
    "en": "3. Mountain Villa & Turkey Art Retreat Program",
    "tr": "3. Dağ Villası ve Sanat Tatili Programı",
    "media": "Sun",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item1",
    "desc": "Элемент 3.1",
    "ru": "Приватная вилла с бассейном, террасой и фруктовым садом в 30 мин от DLM",
    "en": "Private mountain villa with swimming pool, terrace, and fruit garden 30 min from DLM",
    "tr": "DLM'ye 30 dk mesafede havuzlu ve meyve bahçeli özel dağ villası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item2",
    "desc": "Элемент 3.2",
    "ru": "Камерная группа строго до 6 участниц и обучение с двумя мастерами [Василиса и Юлия]",
    "en": "Intimate group capped at 6 participants with two mentors [Vasilisa & Yulia]",
    "tr": "6 kişilik butik grup ve iki usta eğitmen [Vasilisa ve Yulia]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item3",
    "desc": "Элемент 3.3",
    "ru": "3-разовое домашнее средиземноморское питание от шефа Марины",
    "en": "Full-board Mediterranean home-cooked meals by Chef Marina",
    "tr": "Şef Marina'dan 3 öğün ev yapımı Akdeniz mutfağı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item4",
    "desc": "Элемент 3.4",
    "ru": "Выездная экскурсия: Акьяка, река Азмак, Дальян и заповедный пляж Изтузу",
    "en": "Full-day excursion: Akyaka, Azmak River, Dalyan, and Iztuzu Turtle Beach",
    "tr": "Tam gün gezi: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item5",
    "desc": "Элемент 3.5",
    "ru": "Индивидуальный трансфер из аэропорта Даламан [DLM] ко времени вашего рейса",
    "en": "Dedicated airport pickup and drop-off at Dalaman Airport [DLM]",
    "tr": "Uçuş saatinize göre özel Dalaman Havalimanı [DLM] transferi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_title",
    "desc": "Категория 4 студии и бутика",
    "ru": "4. Офлайн-студия в Мармарисе и Бутик изделий",
    "en": "4. Marmaris Studio & Couture Boutique",
    "tr": "4. Marmaris Stüdyosu ve Haute Couture Butik",
    "media": "Compass",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item1",
    "desc": "Элемент 4.1",
    "ru": "5 дней индивидуальной работы пн-пт с 09:00 до 17:00 в студии Мармариса",
    "en": "5 days of 1-on-1 studio training Mon-Fri 09:00-17:00 in Marmaris",
    "tr": "Marmaris stüdyosunda Pzt-Cum 09:00-17:00 birebir eğitim",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item2",
    "desc": "Элемент 4.2",
    "ru": "Помощь в подборе уютного отеля на побережье Мармариса в пешей доступности",
    "en": "Assistance in selecting a comfortable seaside hotel in Marmaris",
    "tr": "Marmaris sahilinde konforlu otel seçimi desteği",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item3",
    "desc": "Элемент 4.3",
    "ru": "Готовые кутюрные броши, воротнички и сумочки с отправкой за 2-3 дня",
    "en": "Ready-to-ship couture brooches, collars, and handbags dispatched in 2-3 days",
    "tr": "2-3 iş gününde kargolanan hazır broş, yaka ve çantalar",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item4",
    "desc": "Элемент 4.4",
    "ru": "Ателье «Под заказ» [Bespoke]: пошив и вышивка по индивидуальному эскизу",
    "en": "Bespoke Atelier: custom embroidery and accessories crafted to your sketch",
    "tr": "Kişiye özel eskiz ve renk paletiyle Bespoke tasarım",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item5",
    "desc": "Элемент 4.5",
    "ru": "Подарочная упаковка ручной работы и международная доставка с трек-номером",
    "en": "Handcrafted luxury gift packaging and worldwide tracked shipping",
    "tr": "El yapımı hediye paketi ve takipli uluslararası teslimat",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_title",
    "desc": "Категория 5 оплаты и гарантий",
    "ru": "5. Мультивалютная оплата и юридические гарантии",
    "en": "5. Multi-Currency Payments & Legal Guarantees",
    "tr": "5. Çoklu Para Birimi Ödeme ve Yasal Güvenceler",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_item1",
    "desc": "Элемент 5.1",
    "ru": "Прием оплаты в EUR, RUB, TRY и USD [СБП, Т-Банк, ЮKassa, Stripe, Iyzico, PayPal]",
    "en": "Payments in EUR, RUB, TRY, and USD [SBP, T-Bank, YooKassa, Stripe, Iyzico, PayPal]",
    "tr": "EUR, RUB, TRY ve USD ödeme seçenekleri [Stripe, Iyzico, PayPal, Banka]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_item2",
    "desc": "Элемент 5.2",
    "ru": "Гарантированное удержание слота ретрита или недели студии на 24 часа [HOLD]",
    "en": "Guaranteed 24-hour slot reservation [HOLD] while confirming flights",
    "tr": "Uçuş onayı süresince 24 saat garantili kontenjan blokajı [HOLD]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_item3",
    "desc": "Элемент 5.3",
    "ru": "Официальная оферта, соответствие KVKK № 6698 / GDPR и фактуры e-Arşiv GİB",
    "en": "Official public offer, KVKK No. 6698 / GDPR compliance, and e-Arşiv GİB invoices",
    "tr": "Resmi mesafeli satış sözleşmesi, KVKK / GDPR uyumu ve e-Arşiv Fatura",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "reviews_score_header": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "reviews_score_header",
    "desc": "Заголовок блока отзывов",
    "ru": "5.0 · 128 отзывов выпускниц школы, участниц ретритов и клиенток бутика",
    "en": "5.0 · 128 Reviews from School Graduates, Retreat Guests & Boutique Clients",
    "tr": "5.0 · Mezunlar, Sanat Tatili Katılımcıları ve Butik Müşterilerinden 128 Yorum",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_1": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_1",
    "desc": "Критерий 1",
    "ru": "Качество макро-уроков",
    "en": "Macro Video Quality",
    "tr": "Makro Video Kalitesi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_2": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_2",
    "desc": "Критерий 2",
    "ru": "Разбор видео ДЗ [20-30 сек]",
    "en": "Homework Video Feedback",
    "tr": "Video Ödev Geri Bildirimi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_3": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_3",
    "desc": "Критерий 3",
    "ru": "Постановка руки",
    "en": "Hand Positioning",
    "tr": "El Yerleşimi ve Teknik",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_4": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_4",
    "desc": "Критерий 4",
    "ru": "Атмосфера арт-отпуска",
    "en": "Art Retreat Atmosphere",
    "tr": "Sanat Tatili Atmosferi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_5": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_5",
    "desc": "Критерий 5",
    "ru": "Материалы и комплектация",
    "en": "Materials & Kit Quality",
    "tr": "Malzeme ve Set Kalitesi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_6": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_6",
    "desc": "Критерий 6",
    "ru": "Качество изделий бутика",
    "en": "Boutique Craftsmanship",
    "tr": "Butik İşçilik Kalitesi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_1_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_1_author",
    "desc": "Автор отзыва 1",
    "ru": "Анна Смирнова · Онлайн-наставничество [16 уроков] и МК Лаванда",
    "en": "Anna Smirnova · Online Mentorship [16 lessons] & Lavender MK",
    "tr": "Anna Smirnova · Online Mentorluk [16 ders] ve Lavanta Atölyesi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_1_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_1_text",
    "desc": "Текст отзыва 1",
    "ru": "Начала с мастер-класса «Ветка лаванды» на обычных пяльцах, а затем пошла на 6-месячное наставничество по люневильскому крючку. Формат проверки коротких видео по 20-30 секунд - это восторг! Василиса замечает малейший наклон крючка и натяжение органзы. Уже вышила свою первую кутюрную брошь и сумочку!",
    "en": "I started with the Lavender Branch workshop on a simple hoop and then joined the 6-month Luneville mentorship. Sending 20-30 second videos for feedback is brilliant! Vasilisa spots the tiniest hook angle and organza tension details.",
    "tr": "Lavanta Dalı atölyesi ile başladım ve ardından 6 aylık Luneville mentorluğuna katıldım. 20-30 saniyelik videolarla geri bildirim almak harika! Vasilisa en ince tığ açısını bile hemen fark ediyor.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_2_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_2_author",
    "desc": "Автор отзыва 2",
    "ru": "Елена Морозова · Кутюрный арт-отпуск в Турции и МК Мимоза",
    "en": "Elena Morozova · Turkey Couture Art Retreat & Mimosa MK",
    "tr": "Elena Morozova · Türkiye Sanat Tatili ve Mimoza Atölyesi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_2_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_2_text",
    "desc": "Текст отзыва 2",
    "ru": "Арт-отпуск на горной вилле в Турции превзошел все мечты! Утром вышиваем в тени фруктового сада с Василисой и Юлией Озмен, днем купаемся в бассейне и наслаждаемся домашними блюдами от Марины, а поездка в Акьяку, по реке Азмак и на пляж Изтузу подарила вдохновение на год вперед. Забронировала место снова!",
    "en": "The art retreat at the mountain villa in Turkey exceeded every dream! Morning embroidery in the fruit garden with Vasilisa and Yulia Ozmen, delicious meals by Marina, and an unforgettable excursion to Akyaka, Azmak River, and Iztuzu Beach!",
    "tr": "Türkiye'deki dağ villasında sanat tatili hayallerimin ötesindeydi! Sabahları Vasilisa ve Yulia Ozmen ile bahçede nakış, Marina'nın muhteşem yemekleri ve Akyaka, Azmak Nehri ve İztuzu gezisi unutulmazdı!",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_3_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_3_author",
    "desc": "Автор отзыва 3",
    "ru": "Maria Dubois [Paris] · Офлайн-студия в Мармарисе [5 дней]",
    "en": "Maria Dubois [Paris] · Marmaris Offline Studio [5 Days]",
    "tr": "Maria Dubois [Paris] · Marmaris Stüdyosu [5 Gün]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_3_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_3_text",
    "desc": "Текст отзыва 3",
    "ru": "Прилетела в Даламан специально на 5-дневный индивидуальный интенсив к Василисе в Мармарис. Встретили в аэропорту, помогли с чудесным отелем у моря. За 5 дней с 09:00 до 17:00 рука встала идеально: освоила тамбурный стежок вслепую с изнанки, пайетки, бисер и синель.",
    "en": "I flew into Dalaman specifically for the 5-day 1-on-1 intensive with Vasilisa in Marmaris. Airport pickup and seaside hotel support were seamless. In 5 days from 09:00 to 17:00 my hand posture became effortless!",
    "tr": "Dalaman'a özellikle Marmaris'teki 5 günlük birebir eğitim için geldim. Havalimanı transferi ve otel desteği kusursuzdu. 5 günde Luneville tığı ile ters yüzden payet ve boncuk işlemede el alışkanlığım mükemmel oturdu.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_4_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_4_author",
    "desc": "Автор отзыва 4",
    "ru": "Светлана Кузнецова · Заказ броши и воротничка в Бутике",
    "en": "Svetlana Kuznetsova · Bespoke Boutique Order",
    "tr": "Svetlana Kuznetsova · Butik Özel Sipariş",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_4_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_4_text",
    "desc": "Текст отзыва 4",
    "ru": "Заказывала в бутике Vasilisa.luneville расшитый воротничок и брошь «Лаванда Haute Couture». Изнанка идеальная, шелковая органза невесомая, французские пайетки переливаются деликатным благородным блеском. Посылка дошла быстро в роскошной подарочной коробке!",
    "en": "I ordered an embroidered couture collar and the Lavender Haute Couture brooch from the Vasilisa.luneville boutique. The reverse side is flawless, silk organza is weightless, and it arrived in a luxury gift box!",
    "tr": "Vasilisa.luneville butiğinden işlemeli yaka ve Lavanta broş sipariş ettim. İşçilik ve ters yüz kusursuz, özel hediye kutusunda hızlıca ulaştı!",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_title": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_title",
    "desc": "Заголовок блока локации",
    "ru": "Творческая студия в Мармарисе и ретритная вилла в горах провинции Мугла",
    "en": "Creative Studio in Marmaris & Retreat Villa in the Mountains of Muğla",
    "tr": "Marmaris Yaratıcı Stüdyosu ve Muğla Dağlarında Sanat Tatili Villası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_desc": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_desc",
    "desc": "Описание локации и трансфера",
    "ru": "Очная мастерская Василисы расположена в курортном Мармарисе на побережье Эгейского моря, а уединенная вилла для кутюрных арт-отпусков находится в живописных горах провинции Мугла всего в 30 минутах езды от международного аэропорта Даламан [DLM]. Для всех учениц офлайн-студии и участниц ретритов включен индивидуальный трансфер из аэропорта DLM.",
    "en": "Vasilisa's studio is located in the Aegean resort town of Marmaris, while our secluded art retreat villa sits in the scenic mountains of Muğla Province just 30 minutes from Dalaman International Airport [DLM]. Complimentary DLM airport transfer is included for all studio and retreat guests.",
    "tr": "Vasilisa'nın atölyesi Ege kıyısındaki Marmaris'te, sanat tatili villamız ise Dalaman Havalimanı'na [DLM] sadece 30 dakika mesafede Muğla dağlarında yer almaktadır. Tüm stüdyo ve tatil katılımcıları için DLM transferi dahildir.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_badge": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_badge",
    "desc": "Бейдж локации",
    "ru": "Мармарис & Мугла • 30 мин от аэропорта DLM",
    "en": "Marmaris & Muğla • 30 min from DLM Airport",
    "tr": "Marmaris & Muğla • DLM Havalimanına 30 dk",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_image": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_image",
    "desc": "Изображение карты/локации",
    "ru": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "en": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "tr": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_title": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_title",
    "desc": "Заголовок карточки мастера",
    "ru": "Ваш мастер и наставник : Василиса Боровикова",
    "en": "Your Master & Mentor : Vasilisa Borovikova",
    "tr": "Ustanız ve Eğitmeniniz : Vasilisa Borovikova",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_subtitle": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_subtitle",
    "desc": "Подзаголовок карточки мастера",
    "ru": "Художник по кутюрной вышивке с 2015 года • Основатель школы и бутика Vasilisa.luneville в Мармарисе",
    "en": "Haute Couture Embroidery Artist since 2015 • Founder of Vasilisa.luneville School & Boutique in Marmaris",
    "tr": "2015'ten Beri Haute Couture Nakış Sanatçısı • Vasilisa.luneville Okulu ve Butiği Kurucusu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_verified": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_verified",
    "desc": "Бейдж верификации",
    "ru": "Личность, дипломы и налоговый статус проверены",
    "en": "Identity, Credentials & Atelier Verified",
    "tr": "Kimlik ve Atölye Kaydı Doğrulandı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_response_time": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_response_time",
    "desc": "Время ответа в чате",
    "ru": "Время ответа в чате и по видео ДЗ: обычно в течение 15 минут",
    "en": "Response time for chat & homework videos: within 15 minutes",
    "tr": "Sohbet ve ödev videoları yanıt süresi: ortalama 15 dakika",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_languages": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_languages",
    "desc": "Языки общения",
    "ru": "Языки обучения и поддержки: Русский, English, Türkçe",
    "en": "Languages of instruction: Russian, English, Turkish",
    "tr": "Eğitim ve iletişim dilleri: Rusça, İngilizce, Türkçe",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_help_text": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_help_text",
    "desc": "Текст поддержки учениц",
    "ru": "Я лично проверяю каждое 20-30-секундное видео домашнего задания на онлайн-наставничестве, веду очные 5-дневные интенсивы в студии Мармариса и вместе с Юлией Озмен и Мариной встречаю участниц наших кутюрных арт-отпусков на горной вилле в Турции.",
    "en": "I personally review every 20-30 second homework video in online mentorship, lead 5-day 1-on-1 studio weeks in Marmaris, and together with Yulia Ozmen and Marina welcome guests to our mountain villa art retreats in Turkey.",
    "tr": "Online mentorlukta her 20-30 saniyelik ödev videosunu bizzat inceliyor, Marmaris stüdyomda 5 günlük birebir eğitimler veriyor ve Yulia Ozmen ile Marina eşliğinde Türkiye'deki sanat tatillerimizde katılımcılarımızı ağırlıyorum.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_btn": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_btn",
    "desc": "Кнопка связи с Василисой",
    "ru": "Написать Василисе или ИИ-Куратору",
    "en": "Message Vasilisa or AI Curator",
    "tr": "Vasilisa veya Yapay Zeka Küratörüne Yazın",
    "media": "MessageCircle",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_credo": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_credo",
    "desc": "Творческое кредо",
    "ru": "Творческое кредо: «Вышивка от кутюр доступна каждой - секрет в правильной постановке руки и любви к деталям»",
    "en": "Creative motto: 'Haute couture embroidery is accessible to everyone - the secret lies in proper hand posture and love for detail'",
    "tr": "Sanat felsefesi: 'Haute couture nakış herkes için erişilebilirdir - sır doğru el duruşu ve detaylara olan tutkudadır'",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_dream": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_dream",
    "desc": "Миссия школы",
    "ru": "Миссия: объединять увлеченных вышивкой женщин по всему миру в теплом сообществе онлайн и на арт-отпусках в Турции",
    "en": "Mission: uniting women passionate about couture embroidery worldwide through online learning and art retreats in Turkey",
    "tr": "Misyon: nakış tutkunu kadınları online eğitimlerde ve Türkiye sanat tatillerinde bir araya getirmek",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_hobbies": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_hobbies",
    "desc": "Специализация и техники",
    "ru": "Техники: люневильский крючок №70-90, вышивка иглой по органзе, объемная синель, пайетки, бисер, создание брошей и сумочек",
    "en": "Techniques: Luneville hook #70-90, silk organza applique, volumetric chenille, French sequins, beads, couture brooches & bags",
    "tr": "Teknikler: Luneville tığı #70-90, ipek organze aplik, hacimli şönil, Fransız payetleri, boncuk, broş ve çanta yapımı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_travel": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_travel",
    "desc": "Команда арт-отпусков",
    "ru": "Соавтор арт-отпусков: Юлия Озмен [дизайнер кутюрных сумочек, преподает с 2018 г.] • Шеф и хозяйка виллы: Марина",
    "en": "Retreat Co-author: Yulia Ozmen [couture handbag designer, teaching since 2018] • Villa Host & Chef: Marina",
    "tr": "Sanat Tatili Ortağı: Yulia Ozmen [tasarım çanta ustası] • Villa Ev Sahibi ve Şef: Marina",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_tax": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_tax",
    "desc": "Реквизиты и контакты",
    "ru": "Контакты: +7 921 304-78-92, +90 545 598 32 11 • vasilisa.luneville@gmail.com • Telegram: @limonnavillevturkey • Marmaris Vergi Dairesi",
    "en": "Contacts: +7 921 304-78-92, +90 545 598 32 11 • vasilisa.luneville@gmail.com • Telegram: @limonnavillevturkey • Marmaris Vergi Dairesi",
    "tr": "İletişim: +7 921 304-78-92, +90 545 598 32 11 • vasilisa.luneville@gmail.com • Telegram: @limonnavillevturkey • Marmaris Vergi Dairesi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_title": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_title",
    "desc": "Заголовок 14 локаций",
    "ru": "14 ключевых локаций: Студия в Мармарисе, Ретритная вилла и Маршруты арт-отпуска",
    "en": "14 Key Locations: Marmaris Studio, Mountain Retreat Villa & Excursion Routes",
    "tr": "14 Önemli Nokta: Marmaris Stüdyosu, Dağ Villası ve Sanat Tatili Rotaları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_subtitle": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_subtitle",
    "desc": "Подзаголовок 14 локаций",
    "ru": "Интерактивный путеводитель для учениц очной студии и участниц кутюрных арт-отпусков в провинции Мугла",
    "en": "Interactive guide for studio students in Marmaris and art retreat participants in Muğla Province",
    "tr": "Marmaris stüdyosu öğrencileri ve Muğla sanat tatili katılımcıları için interaktif rehber",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_address": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_address",
    "desc": "Адрес студии и локации",
    "ru": "Marmaris, Muğla, Türkiye [Студия в Мармарисе и горная ретритная вилла в 30 мин от аэропорта DLM]",
    "en": "Marmaris, Muğla, Türkiye [Marmaris Studio & Mountain Retreat Villa 30 min from DLM Airport]",
    "tr": "Marmaris, Muğla, Türkiye [Marmaris Stüdyosu ve DLM Havalimanına 30 dk Dağ Villası]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_maps_url": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_maps_url",
    "desc": "Ссылка на карту",
    "ru": "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "en": "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "tr": "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_gps": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_gps",
    "desc": "Координаты региона",
    "ru": "36.8550° N, 28.2742° E [Marmaris / Muğla]",
    "en": "36.8550° N, 28.2742° E [Marmaris / Muğla]",
    "tr": "36.8550° K, 28.2742° D [Marmaris / Muğla]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_1": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_1",
    "desc": "Локация 1",
    "ru": "Творческая студия вышивки Vasilisa.luneville в Мармарисе: профессиональные кутюрные рамы, дневной свет и коллекция материалов.",
    "en": "Vasilisa.luneville Couture Embroidery Studio in Marmaris: professional frames, natural daylight & material library.",
    "tr": "Marmaris Vasilisa.luneville Haute Couture Nakış Stüdyosu: profesyonel kasnaklar ve zengin malzeme koleksiyonu.",
    "media": "Студия|09:00-17:00|walk|Офлайн-обучение|Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_2": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_2",
    "desc": "Локация 2",
    "ru": "Набережная и яхтенная марина Мармариса: морские прогулки и вдохновляющие виды после занятий в студии.",
    "en": "Marmaris Seafront Promenade & Marina: scenic coastal walks and cafes after studio classes.",
    "tr": "Marmaris Sahil Kordonu ve Marina: stüdyo dersleri sonrası deniz kenarında yürüyüş.",
    "media": "500 м|5 мин пешком|walk|Прогулки у моря|Compass",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_3": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_3",
    "desc": "Локация 3",
    "ru": "Исторический Старый город и крепость Мармариса [Marmaris Kalesi]: узкие бело-голубые улочки с бугенвиллией для фотосессий с готовыми брошами.",
    "en": "Historic Old Town & Marmaris Castle: charming bougainvillea streets ideal for photographing your finished embroidery.",
    "tr": "Marmaris Kaleiçi ve Kalesi: bitmiş nakışlarınızın fotoğraf çekimi için begonvilli историк sokaklar.",
    "media": "1.2 км|15 мин пешком|walk|Фотолокация|Camera",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_4": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_4",
    "desc": "Локация 4",
    "ru": "Уединенная горная вилла арт-отпусков в провинции Мугла: 4 спальни, бассейн, фруктовый сад и панорамная терраса для вышивки.",
    "en": "Secluded Mountain Retreat Villa in Muğla: 4 bedrooms, pool, fruit garden, and panoramic embroidery terrace.",
    "tr": "Muğla Dağlarında Sanat Tatili Villası: 4 yatak odası, havuz, meyve bahçesi ve nakış terası.",
    "media": "30 км от DLM|30 мин на авто|nature|База ретрита|Home",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_5": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_5",
    "desc": "Локация 5",
    "ru": "Международный аэропорт Даламан [DLM]: точка прилета участниц ретритов и учениц студии [включен индивидуальный трансфер].",
    "en": "Dalaman International Airport [DLM]: arrival hub for retreat and studio students [complimentary transfer included].",
    "tr": "Dalaman Uluslararası Havalimanı [DLM]: tüm katılımcılar için ücretsiz karşılama ve transfer noktası.",
    "media": "30 мин|Трансфер включен|transport|Аэропорт прилета|Plane",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_6": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_6",
    "desc": "Локация 6",
    "ru": "Аутентичный город Акьяка [Akyaka]: уникальная деревянная османская архитектура Ула и бухта Гёкова [программа выездного дня ретрита].",
    "en": "Authentic Town of Akyaka: unique Ula wooden architecture and Gökova Bay [retreat excursion day].",
    "tr": "Otantik Akyaka Beldesi: kendine özgü ahşap mimarisi ve Gökova Körfezi [sanat tatili gezi rotası].",
    "media": "Экскурсия|День 4 ретрита|nature|Выездной маршрут|MapPin",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_7": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_7",
    "desc": "Локация 7",
    "ru": "Кристальная река Азмак [Azmak Nehri]: лодочная прогулка над подводными садами и обед в рыбном ресторане у воды.",
    "en": "Crystal-clear Azmak River: boat tour over underwater gardens and riverside seafood lunch.",
    "tr": "Berrak Azmak Nehri: sualtı bahçeleri üzerinde tekne turu ve nehir kenarında öğle yemeği.",
    "media": "Акьяка|Лодочный тур|food|Природа и гастрономия|Waves",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_8": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_8",
    "desc": "Локация 8",
    "ru": "Заповедный песчаный пляж Изтузу [İztuzu Beach]: 5-километровая песчаная коса между морем и дельтой [экскурсионный день арт-отпуска].",
    "en": "Protected Iztuzu Sandy Beach: 5 km golden sandbar between the sea and river delta [retreat excursion].",
    "tr": "Koruma Altındaki İztuzu Plajı: deniz ve nehir deltası arasındaki eşsiz kumsal [tatil gezisi].",
    "media": "Экскурсия|Купание в море|beach|Пляжный отдых|Sun",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_9": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_9",
    "desc": "Локация 9",
    "ru": "Дельта Дальяна и ликийские пейзажи: живописный маршрут водной прогулки в рамках выездного дня арт-отпуска.",
    "en": "Dalyan River Delta & Lycian Scenery: scenic boat route during the retreat excursion day.",
    "tr": "Dalyan Deltası ve Likya Manzaraları: sanat tatili gezi gününde tekne rotası.",
    "media": "Экскурсия|Водный маршрут|nature|Вдохновение|Compass",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_10": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_10",
    "desc": "Локация 10",
    "ru": "Текстильные и ремесленные лавки региона Мугла: натуральный турецкий шелк, хлопок, кружево Оя и фермерские угощения.",
    "en": "Artisan & Textile Markets of Muğla: natural Turkish silk, cotton, traditional Oya lace, and local delicacies.",
    "tr": "Muğla El Sanatları ve Tekstil Pazarları: doğal Türk ipeği, pamuklu kumaşlar ve geleneksel Oya örnekleri.",
    "media": "Шопинг|Ткани и сувениры|walk|Ремесла Турции|ShoppingBag",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_11": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_11",
    "desc": "Локация 11",
    "ru": "Панорамная терраса и фруктовый сад ретритной виллы: утренние мастер-классы по вышивке под пение птиц.",
    "en": "Panoramic Terrace & Fruit Garden of Retreat Villa: morning embroidery sessions surrounded by mountain nature.",
    "tr": "Sanat Tatili Villası Meyve Bahçesi ve Terası: kuş sesleri eşliğinde sabah nakış dersleri.",
    "media": "На вилле|Ежедневно|nature|Зона мастер-классов|Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_12": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_12",
    "desc": "Локация 12",
    "ru": "Гастрономическая терраса шефа Марины: авторские завтраки, обеды и ужины из свежих фермерских продуктов Эгейского побережья.",
    "en": "Chef Marina's Culinary Terrace: breakfast, lunch, and dinner crafted from fresh Aegean farm produce.",
    "tr": "Şef Marina'nın Gastronomi Terası: taze Ege ürünleriyle hazırlanan ev yapımı kahvaltı ve akşam yemekleri.",
    "media": "На вилле|3 раза в день|food|Домашняя кухня|Utensils",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_13": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_13",
    "desc": "Локация 13",
    "ru": "Пляжи Ичмелера и бухты Мармариса: лазурное море в 10-15 минутах от творческой студии Василисы.",
    "en": "İçmeler Beach & Marmaris Bays: turquoise Aegean waters 10-15 minutes from Vasilisa's studio.",
    "tr": "İçmeler Plajı ve Marmaris Koyları: Vasilisa'nın stüdyosuna 10-15 dakika mesafede turkuaz deniz.",
    "media": "7 км|10 мин|beach|Морской отдых|Sun",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_14": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_14",
    "desc": "Локация 14",
    "ru": "Международная служба доставки бутика [PTT / DHL / СДЭК]: отправка готовых брошей, сумочек и наборов материалов по всему миру.",
    "en": "International Boutique Shipping Hub [PTT / DHL / CDEK]: worldwide delivery of finished brooches, bags & material kits.",
    "tr": "Uluslararası Butik Kargo Merkezi [PTT / DHL]: tüm dünyaya tasarım ürün ve malzeme gönderimi.",
    "media": "Весь мир|2-3 дня отправка|transport|Доставка бутика|Package",
    "status": "Вкл",
    "enabled": true
  },
  "spa_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_title",
    "desc": "Заголовок пространства виллы и студии",
    "ru": "Пространство творчества и отдыха: Горная вилла ретритов и Студия в Мармарисе",
    "en": "Creative & Relaxation Space: Mountain Retreat Villa & Marmaris Studio",
    "tr": "Yaratıcılık ve Dinlenme Alanı: Dağ Villası ve Marmaris Stüdyosu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_subtitle": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_subtitle",
    "desc": "Подзаголовок пространства",
    "ru": "Идеальное сочетание глубокого обучения вышивке от кутюр, комфортного проживания на вилле с бассейном и средиземноморского отдыха",
    "en": "A seamless blend of deep haute couture embroidery training, mountain villa comfort with a pool, and Aegean relaxation",
    "tr": "Haute couture nakış eğitimi, havuzlu dağ villası konforu ve Ege tatilinin kusursuz uyumu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_title",
    "desc": "Заголовок виллы и бассейна",
    "ru": "Приватная горная вилла с бассейном и фруктовым садом",
    "en": "Private Mountain Villa with Swimming Pool & Fruit Garden",
    "tr": "Yüzme Havuzlu ve Meyve Bahçeli Özel Dağ Villası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_desc",
    "desc": "Описание виллы",
    "ru": "Уединенная вилла в горах провинции Мугла [30 минут от аэропорта Даламан DLM] с собственным бассейном, 4 комфортными спальнями, просторной светлой верандой для работы за кутюрными рамами и тенистым фруктовым садом.",
    "en": "Secluded villa in the mountains of Muğla Province [30 min from Dalaman Airport DLM] featuring a private swimming pool, 4 bedrooms, a bright veranda for embroidery frames, and a lush fruit garden.",
    "tr": "Dalaman Havalimanı'na [DLM] 30 dakika mesafede, özel havuzlu, 4 yatak odalı, aydınlık nakış verandalı ve meyve bahçeli dağ villası.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_badge": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_badge",
    "desc": "Бейдж квоты",
    "ru": "Камерная группа: строго до 6 участниц",
    "en": "Intimate Group: Strictly 6 Participants",
    "tr": "Butik Grup: Maksimum 6 Katılımcı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_season": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_season",
    "desc": "Сезон потоков",
    "ru": "Сезон арт-отпусков 2027: май, июнь, сентябрь, октябрь",
    "en": "2027 Retreat Season: May, June, September, October",
    "tr": "2027 Sanat Tatili Sezonu: Mayıs, Haziran, Eylül, Ekim",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_lighting": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_lighting",
    "desc": "Режим занятий",
    "ru": "Вышивальные сессии в саду: 5 дней с 09:00 до 17:00",
    "en": "Garden embroidery sessions: 5 days from 09:00 to 17:00",
    "tr": "Bahçede nakış seansları: 5 gün 09:00 - 17:00 arası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_maintenance": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_maintenance",
    "desc": "Материалы",
    "ru": "Все материалы, пайетки, бисер, органза и инструменты включены",
    "en": "All fabrics, French sequins, beads, and tools included",
    "tr": "Tüm kumaşlar, Fransız payetleri, boncuklar ve araçlar dahil",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_title",
    "desc": "Заголовок студии в Мармарисе",
    "ru": "Очная мастерская Василисы в Мармарисе и онлайн-академия",
    "en": "Vasilisa's Marmaris Studio & Online Academy",
    "tr": "Vasilisa'nın Marmaris Stüdyosu ve Online Akademisi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_desc",
    "desc": "Описание студии",
    "ru": "Профессионально оборудованная студия для 5-дневного индивидуального наставничества [500 €] и съемки макро-уроков в 4K с пожизненным доступом и 6-месячной проверкой 20-30 сек видео ДЗ.",
    "en": "Professionally equipped studio for 5-day 1-on-1 intensives [500 €] and 4K macro video lessons with lifetime access and 6-month review of 20-30 sec homework videos.",
    "tr": "5 günlük birebir eğitimler [500 €] ve 6 ay video ödev kontrolü sunan profesyonel donanımlı Marmaris nakış atölyesi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_badge": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_badge",
    "desc": "Бейдж наставничества",
    "ru": "Индивидуально 1-на-1 с мастером",
    "en": "1-on-1 Personal Tutoring",
    "tr": "Usta ile Birebir Eğitim",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_schedule": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_schedule",
    "desc": "График студии",
    "ru": "График студии в Мармарисе: пн - пт с 09:00 до 17:00",
    "en": "Marmaris Studio schedule: Mon - Fri, 09:00 - 17:00",
    "tr": "Marmaris Stüdyo saatleri: Pzt - Cum, 09:00 - 17:00",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_lighting": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_lighting",
    "desc": "Обратная связь",
    "ru": "Онлайн-сопровождение: 180 дней проверки 20-30 сек видео ДЗ",
    "en": "Online mentorship: 180 days of 20-30 sec video homework review",
    "tr": "Online mentorluk: 180 gün boyunca 20-30 sn video ödev kontrolü",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_season": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_season",
    "desc": "Доступ к урокам",
    "ru": "Доступ к купленным МК и 16 видеоурокам: навсегда",
    "en": "Access to purchased workshops and 16 lessons: lifetime",
    "tr": "Satın alınan atölye ve 16 derse erişim: ömür boyu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_street_lighting_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_street_lighting_title",
    "desc": "Экскурсионная программа",
    "ru": "Выездные путешествия и вдохновение",
    "en": "Guided Excursions & Inspiration",
    "tr": "Gezi Rotaları ve İlham",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_street_lighting_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_street_lighting_desc",
    "desc": "Описание экскурсий",
    "ru": "Поездка в Акьяку, прогулка по реке Азмак, Дальян и пляж Изтузу включены в арт-отпуск",
    "en": "Excursion to Akyaka, Azmak River, Dalyan, and Iztuzu Beach included in the retreat",
    "tr": "Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı gezisi sanat tatiline dahil",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_parking_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_parking_title",
    "desc": "Трансфер из аэропорта",
    "ru": "Встреча и трансфер из аэропорта DLM",
    "en": "Dalaman Airport [DLM] Pickup & Transfer",
    "tr": "Dalaman Havalimanı [DLM] Karşılama ve Transfer",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_parking_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_parking_desc",
    "desc": "Описание трансфера",
    "ru": "Бесплатный индивидуальный трансфер из аэропорта Даламан [DLM] на виллу или в студию Мармариса",
    "en": "Complimentary private transfer from Dalaman Airport [DLM] to the villa or Marmaris studio",
    "tr": "Dalaman Havalimanı'ndan [DLM] villaya veya Marmaris stüdyosuna ücretsiz transfer",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_bbq_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_bbq_title",
    "desc": "Гастрономия от шефа Марины",
    "ru": "Домашняя средиземноморская кухня",
    "en": "Home-Style Mediterranean Cuisine",
    "tr": "Ev Yapımı Akdeniz Mutfağı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_bbq_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_bbq_desc",
    "desc": "Описание кухни",
    "ru": "3-разовое питание из свежих фермерских продуктов, турецкие завтраки и душевные ужины на террасе",
    "en": "3 daily meals made from fresh local farm produce, Turkish breakfasts, and terrace dinners",
    "tr": "Taze çiftlik ürünleriyle hazırlanan 3 öğün yemek, serpme kahvaltı ve terasta akşam yemekleri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_header": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_header",
    "desc": "Заголовок блока правил и гарантий",
    "ru": "Юридические гарантии, публичные оферты, KVKK / GDPR и правила бронирования",
    "en": "Legal Guarantees, Public Offers, KVKK / GDPR & Booking Rules",
    "tr": "Yasal Güvenceler, Mesafeli Satış Sözleşmesi, KVKK / GDPR ve Rezervasyon Kuralları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_title",
    "desc": "Оферта на обучение и МК",
    "ru": "Публичная оферта на обучение и бессрочный доступ",
    "en": "Public Offer for Courses & Lifetime Access",
    "tr": "Eğitim Sözleşmesi ve Ömür Boyu Erişim",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_desc",
    "desc": "Описание оферты",
    "ru": "Официальный договор оферты на онлайн мастер-классы и 6-месячное индивидуальное наставничество.",
    "en": "Official public offer governing online masterclasses and 6-month personal mentorship.",
    "tr": "Online atölyeler ve 6 aylık birebir mentorluk için resmi mesafeli satış sözleşmesi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_badge",
    "desc": "Бейдж оферты",
    "ru": "Доступ навсегда + 180 дней кураторства",
    "en": "Lifetime Access + 180 Days Mentorship",
    "tr": "Ömür Boyu Erişim + 180 Gün Mentorluk",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_item1",
    "desc": "Пункт 1.1",
    "ru": "Мгновенная выдача ссылок-приглашений в закрытые Telegram-каналы МК и 16 уроков после подтверждения оплаты.",
    "en": "Instant delivery of invite links to private Telegram channels for workshops and 16 lessons upon payment.",
    "tr": "Ödeme onayından hemen sonra özel Telegram kanallarına davet bağlantılarının iletilmesi.",
    "media": "CheckCircle",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_item2",
    "desc": "Пункт 1.2",
    "ru": "Фиксация даты старта онлайн-наставничества и автоматический расчет 6 месяцев обратной связи [EDATE +6 мес].",
    "en": "Automatic tracking of your mentorship start date and 6-month video feedback period [EDATE +6 months].",
    "tr": "Mentorluk başlangıç tarihinin kaydı ve 6 aylık geri bildirim süresinin otomatik takibi.",
    "media": "Clock",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_item3",
    "desc": "Пункт 1.3",
    "ru": "Выдача именного PDF-сертификата школы Vasilisa.luneville с защитным QR-кодом после сдачи итоговой работы.",
    "en": "Issuance of a named Vasilisa.luneville PDF certificate with QR verification upon completing your final piece.",
    "tr": "Final çalışmasının tamamlanmasının ardından QR kodlu isimli PDF sertifika verilmesi.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_title",
    "desc": "Договор арт-отпуска и студии",
    "ru": "Бронирование арт-отпусков в Турции и студии в Мармарисе",
    "en": "Booking Turkey Art Retreats & Marmaris Studio Weeks",
    "tr": "Türkiye Sanat Tatili ve Marmaris Stüdyo Rezervasyonu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_desc",
    "desc": "Описание правил ретрита",
    "ru": "Прозрачная система квот [6 мест на поток] и удержание выбранного слота на 24 часа [HOLD].",
    "en": "Transparent 6-spot quota system and 24-hour slot reservation [HOLD] while purchasing flights.",
    "tr": "Şeffaf 6 kişilik kontenjan sistemi ve uçak bileti alımı için 24 saatlik [HOLD] rezervasyon hakkı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_badge",
    "desc": "Бейдж ретрита",
    "ru": "Квота 6 мест • 24ч HOLD",
    "en": "6 Spots Quota • 24h HOLD",
    "tr": "6 Kişilik Kontenjan • 24 Saat HOLD",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_item1",
    "desc": "Пункт 2.1",
    "ru": "В стоимость арт-отпуска [1100 / 1200 / 1500 €] включено всё: вилла 7 ночей, питание от Марины, обучение, материалы, экскурсии и трансфер DLM.",
    "en": "Retreat packages [1100 / 1200 / 1500 €] include 7 nights at the villa, meals by Marina, tuition, materials, excursions & DLM transfer.",
    "tr": "Sanat tatili paketlerine [1100 / 1200 / 1500 €] 7 gece konaklama, yemekler, eğitim, malzemeler, geziler ve DLM transferi dahildir.",
    "media": "Home",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_item2",
    "desc": "Пункт 2.2",
    "ru": "Индивидуальная неделя в студии Мармариса [500 €] включает 5 дней обучения пн-пт 09:00-17:00, все материалы и трансфер из аэропорта DLM.",
    "en": "Marmaris 5-day studio intensive [500 €] includes Mon-Fri 09:00-17:00 1-on-1 training, all materials, and DLM airport transfer.",
    "tr": "Marmaris 5 günlük stüdyo eğitimi [500 €] Pzt-Cum 09:00-17:00 birebir dersleri, malzemeleri ve DLM transferini kapsar.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_item3",
    "desc": "Пункт 2.3",
    "ru": "Оперативная поддержка в Telegram-канале ретрита @limonnavillevturkey и по телефонам +7 921 304-78-92 / +90 545 598 32 11.",
    "en": "Direct support via @limonnavillevturkey Telegram channel and WhatsApp +7 921 304-78-92 / +90 545 598 32 11.",
    "tr": "@limonnavillevturkey Telegram kanalı ve +7 921 304-78-92 / +90 545 598 32 11 numaralarından doğrudan destek.",
    "media": "Phone",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_title",
    "desc": "Правила бутика и доставки",
    "ru": "Бутик кутюрных изделий и Ателье «Под заказ»",
    "en": "Couture Boutique & Bespoke Atelier Policy",
    "tr": "Haute Couture Butik ve Özel Sipariş Kuralları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_desc",
    "desc": "Описание бутика",
    "ru": "Бережная международная доставка готовых украшений и индивидуальный пошив по утвержденному эскизу.",
    "en": "Insured worldwide shipping of ready-to-wear pieces and custom creation according to your approved sketch.",
    "tr": "Hazır tasarım ürünlerin sigortalı uluslararası kargosu ve onaylanan eskize göre özel üretim.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_badge",
    "desc": "Бейдж бутика",
    "ru": "Отправка за 2-3 дня • Трек-номер",
    "en": "2-3 Day Dispatch • Tracked Shipping",
    "tr": "2-3 Günde Kargo • Takip Numarası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_item1",
    "desc": "Пункт 3.1",
    "ru": "Готовые броши, воротнички и сумочки отправляются в течение 2-3 рабочих дней в подарочной коробке с трек-номером.",
    "en": "Ready-to-ship brooches, collars, and bags dispatch within 2-3 business days in a luxury gift box with tracking.",
    "tr": "Hazır broş, yaka ve çantalar özel hediye kutusunda 2-3 iş günü içinde takip numarasıyla kargolanır.",
    "media": "Package",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_item2",
    "desc": "Пункт 3.2",
    "ru": "Изделия «Под заказ» [Bespoke] создаются за 14-30 рабочих дней с фото- и видеоотчетами процесса вышивки на раме.",
    "en": "Bespoke Atelier orders are handcrafted in 14-30 business days with photo and video progress updates.",
    "tr": "Kişiye özel siparişler 14-30 iş günü içinde aşama fotoğrafları ve videolarıyla hazırlanır.",
    "media": "Camera",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_item3",
    "desc": "Пункт 3.3",
    "ru": "ИИ-брифователь на сайте помогает мгновенно составить техническое задание на кастомную вышивку и рассчитать стоимость.",
    "en": "Our on-site AI Brief Assistant helps structure your custom embroidery request and estimate pricing.",
    "tr": "Sitedeki Yapay Zeka Asistanı özel sipariş brifinizi oluşturmanıza ve fiyat hesaplamasına yardımcı olur.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_title",
    "desc": "KVKK, GDPR и налоговый учет",
    "ru": "Защита данных KVKK / GDPR и фактуры e-Arşiv GİB",
    "en": "KVKK / GDPR Data Protection & e-Arşiv GİB Invoicing",
    "tr": "KVKK / GDPR Veri Koruma ve e-Arşiv Fatura",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_desc",
    "desc": "Описание налогов и KVKK",
    "ru": "Полное соответствие закону Турции KVKK № 6698, европейскому регламенту GDPR и стандарту VUK 213.",
    "en": "Full compliance with Turkish KVKK Law No. 6698, EU GDPR, and Turkish Tax Procedure Law VUK 213.",
    "tr": "6698 sayılı KVKK, AB GDPR ve VUK 213 elektronik fatura standartlarına tam uyum.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_badge",
    "desc": "Бейдж налоговой",
    "ru": "Marmaris Vergi Dairesi • VUK 213",
    "en": "Marmaris Vergi Dairesi • VUK 213",
    "tr": "Marmaris Vergi Dairesi • VUK 213",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_item1",
    "desc": "Пункт 4.1",
    "ru": "Выставление официальных электронных фактур e-Arşiv Fatura GİB в турецких лирах [TRY] по курсу TCMB и чеков НПД/ИП РФ.",
    "en": "Official e-Arşiv Fatura GİB electronic invoices in TRY at TCMB exchange rates and official RU tax receipts.",
    "tr": "TCMB kuru üzerinden TRY cinsinden resmi e-Arşiv Fatura GİB düzenlenmesi.",
    "media": "FileText",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_item2",
    "desc": "Пункт 4.2",
    "ru": "Безопасная двухфакторная верификация аккаунтов учениц [OTP по Email] с неизменяемым идентификатором VL-USER-XXXX.",
    "en": "Secure OTP email verification for student accounts with immutable UID VL-USER-XXXX.",
    "tr": "VL-USER-XXXX kimliği ile öğrenci hesapları için güvenli e-posta OTP doğrulaması.",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_item3",
    "desc": "Пункт 4.3",
    "ru": "Гибкий перенос предоплаты на следующий поток арт-отпуска или на программу онлайн-наставничества при предупреждении за 30 дней.",
    "en": "Flexible transfer of retreat deposit to a future flow or online mentorship with 30 days advance notice.",
    "tr": "30 gün önceden bildirimle tatil ön ödemesini sonraki döneme veya online eğitime aktarma imkanı.",
    "media": "Calendar",
    "status": "Вкл",
    "enabled": true
  },
  "brandName": {
    "block": "Блок 13. База знаний и статьи",
    "key": "brandName",
    "desc": "Название бренда в шапке",
    "ru": "Vasilisa.luneville — вышивка от кутюр",
    "en": "Vasilisa.luneville — Haute Couture Embroidery",
    "tr": "Vasilisa.luneville — Haute Couture Nakış",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "login": {
    "block": "Блок 13. База знаний и статьи",
    "key": "login",
    "desc": "Кнопка входа",
    "ru": "Войти",
    "en": "Log in",
    "tr": "Giriş Yap",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "register": {
    "block": "Блок 13. База знаний и статьи",
    "key": "register",
    "desc": "Кнопка регистрации",
    "ru": "Регистрация ученицы",
    "en": "Student Sign Up",
    "tr": "Öğrenci Kaydı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "logout": {
    "block": "Блок 13. База знаний и статьи",
    "key": "logout",
    "desc": "Кнопка выхода",
    "ru": "Выйти",
    "en": "Log out",
    "tr": "Çıkış Yap",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "guestCabinet": {
    "block": "Блок 13. База знаний и статьи",
    "key": "guestCabinet",
    "desc": "Кабинет ученицы",
    "ru": "Кабинет ученицы",
    "en": "Student Cabinet",
    "tr": "Öğrenci Paneli",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "hostCabinet": {
    "block": "Блок 13. База знаний и статьи",
    "key": "hostCabinet",
    "desc": "Кабинет мастера Василисы",
    "ru": "Кабинет Василисы [CRM]",
    "en": "Master Cabinet [CRM]",
    "tr": "Usta Paneli [CRM]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navAbout": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navAbout",
    "desc": "Меню: О школе",
    "ru": "О школе и направлениях",
    "en": "About & Directions",
    "tr": "Okul ve Yönler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navAmenities": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navAmenities",
    "desc": "Меню: Материалы и программа",
    "ru": "Материалы и условия",
    "en": "Materials & Included",
    "tr": "Malzemeler ve Dahil Olanlar",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navReviews": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navReviews",
    "desc": "Меню: Отзывы учениц",
    "ru": "Работы и отзывы",
    "en": "Student Works & Reviews",
    "tr": "Öğrenci Çalışmaları ve Yorumlar",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navLocation": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navLocation",
    "desc": "Меню: Мармарис и Вилла",
    "ru": "Мармарис и Вилла",
    "en": "Marmaris & Retreat Villa",
    "tr": "Marmaris ve Villa",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navCatalog": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navCatalog",
    "desc": "Меню: МК, Ретриты и Бутик",
    "ru": "Мастер-классы, Ретриты и Бутик",
    "en": "Workshops, Retreats & Boutique",
    "tr": "Atölyeler, Tatiller ve Butik",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bookNow": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "bookNow",
    "desc": "Кнопка записи",
    "ru": "Записаться на ретрит / в студию",
    "en": "Book Retreat or Studio Week",
    "tr": "Sanat Tatili / Stüdyo Rezervasyonu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "checkIn": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "checkIn",
    "desc": "Дата начала потока",
    "ru": "Старт потока / недели",
    "en": "Start Date",
    "tr": "Başlangıç Tarihi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "checkOut": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "checkOut",
    "desc": "Дата окончания потока",
    "ru": "Завершение",
    "en": "End Date",
    "tr": "Bitiş Tarihi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "guests": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "guests",
    "desc": "Количество участниц",
    "ru": "Участниц",
    "en": "Participants",
    "tr": "Katılımcı Sayısı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "perNight": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "perNight",
    "desc": "Базовый тариф",
    "ru": "за день программы / МК",
    "en": "per program day / workshop",
    "tr": "program günü / atölye",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "nights": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "nights",
    "desc": "Дней обучения",
    "ru": "дней",
    "en": "days",
    "tr": "gün",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "totalPrice": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "totalPrice",
    "desc": "Итого к оплате",
    "ru": "Итого за программу",
    "en": "Total Program Price",
    "tr": "Toplam Program Tutarı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "cleaningFee": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "cleaningFee",
    "desc": "Комплект материалов от кутюр",
    "ru": "Материалы и трансфер DLM",
    "en": "Materials & DLM Transfer",
    "tr": "Malzemeler ve DLM Transferi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "depositText": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "depositText",
    "desc": "Условие удержания слота",
    "ru": "Слот удерживается 24 часа [HOLD] • Квота ретрита 6 мест",
    "en": "Slot held for 24h [HOLD] • 6 spots retreat quota",
    "tr": "Kontenjan 24 saat [HOLD] tutulur • 6 kişilik kota",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "confirmBooking": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "confirmBooking",
    "desc": "Подтвердить запись",
    "ru": "Подтвердить запись и перейти к оплате",
    "en": "Confirm Enrollment & Pay",
    "tr": "Kaydı Onayla ve Ödemeye Geç",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "selectDates": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "selectDates",
    "desc": "Выбрать даты потока",
    "ru": "Выберите даты потока ретрита или недели в студии",
    "en": "Select retreat flow or studio week dates",
    "tr": "Sanat tatili veya stüdyo haftası tarihlerini seçin",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "close": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "close",
    "desc": "Кнопка Закрыть",
    "ru": "Закрыть",
    "en": "Close",
    "tr": "Kapat",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "back": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "back",
    "desc": "Кнопка Назад",
    "ru": "Назад",
    "en": "Back",
    "tr": "Geri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "save": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "save",
    "desc": "Кнопка Сохранить",
    "ru": "Сохранить",
    "en": "Save",
    "tr": "Kaydet",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "showAllPhotos": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "showAllPhotos",
    "desc": "Кнопка всех фото",
    "ru": "Смотреть макро-галерею работ",
    "en": "View Macro Embroidery Gallery",
    "tr": "Makro Nakış Galerisini Gör",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "showAllAmenities": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "showAllAmenities",
    "desc": "Кнопка всех материалов",
    "ru": "Показать все материалы и условия",
    "en": "Show all materials & conditions",
    "tr": "Tüm malzemeleri ve koşulları göster",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "showAllLandmarksBtn": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "showAllLandmarksBtn",
    "desc": "Кнопка всех 14 локаций",
    "ru": "Показать все 14 локаций Мармариса и ретрита",
    "en": "Show all 14 Marmaris & retreat locations",
    "tr": "Marmaris ve tatil rotalarındaki 14 noktayı göster",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "showAllReviewsBtn": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "showAllReviewsBtn",
    "desc": "Кнопка всех отзывов",
    "ru": "Читать все отзывы учениц",
    "en": "Read all student reviews",
    "tr": "Tüm öğrenci yorumlarını oku",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarksCategoryTitle": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "landmarksCategoryTitle",
    "desc": "Заголовок категорий локаций",
    "ru": "Локации студии, виллы и экскурсий",
    "en": "Studio, Villa & Excursion Locations",
    "tr": "Stüdyo, Villa ve Gezi Noktaları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "reviewsCategoryTitle": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "reviewsCategoryTitle",
    "desc": "Заголовок оценок школы",
    "ru": "Оценки учениц по 6 критериям обучения",
    "en": "Student Ratings Across 6 Criteria",
    "tr": "6 Eğitim Kriterinde Öğrenci Puanları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "reviewsRatingTitle": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "reviewsRatingTitle",
    "desc": "Рейтинг школы",
    "ru": "Рейтинг школы 5.0 из 5",
    "en": "School Rating 5.0 out of 5",
    "tr": "Okul Puanı 5 üzerinden 5.0",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "legalRegulationHeader": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "legalRegulationHeader",
    "desc": "Заголовок оферты и правил",
    "ru": "Публичная оферта, KVKK / GDPR и гарантии Vasilisa.luneville",
    "en": "Public Offer, KVKK / GDPR & Vasilisa.luneville Guarantees",
    "tr": "Mesafeli Satış Sözleşmesi, KVKK / GDPR ve Güvenceler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "chatWithHost": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "chatWithHost",
    "desc": "Кнопка чата с Василисой",
    "ru": "Чат с Василисой и сдача видео ДЗ",
    "en": "Chat with Vasilisa & Submit Homework Video",
    "tr": "Vasilisa ile Sohbet ve Ödev Videosu Gönderimi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "onlineStatus": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "onlineStatus",
    "desc": "Статус онлайн",
    "ru": "Василиса и ИИ-Куратор на связи",
    "en": "Vasilisa & AI Curator Online",
    "tr": "Vasilisa ve Yapay Zeka Küratörü Çevrimiçi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "typing": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "typing",
    "desc": "Печатает ответ",
    "ru": "ИИ-Куратор формирует ответ...",
    "en": "AI Curator is typing...",
    "tr": "Yapay Zeka Küratörü yazıyor...",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "send": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "send",
    "desc": "Кнопка отправить",
    "ru": "Отправить",
    "en": "Send",
    "tr": "Gönder",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "messagePlaceholder": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "messagePlaceholder",
    "desc": "Плейсхолдер чата",
    "ru": "Задайте вопрос по МК/ретриту или прикрепите ссылку на 20-30 сек видео ДЗ...",
    "en": "Ask about workshops/retreats or paste your 20-30 sec homework video link...",
    "tr": "Atölye/tatil sorunuzu yazın veya 20-30 sn ödev video linkini ekleyin...",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bookingSuccess": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "bookingSuccess",
    "desc": "Уведомление об успешной записи",
    "ru": "Заявка принята! Доступ или подтверждение брони отправлены в ваш кабинет и Telegram.",
    "en": "Request received! Course access or booking confirmation has been sent to your cabinet and Telegram.",
    "tr": "Talebiniz alındı! Eğitim erişimi veya rezervasyon onayı panelinize ve Telegram'a iletildi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  }
};

const MASTER_SETTINGS_ROWS = [
  [
    "О_ХОЗЯИНЕ",
    "host_name",
    "Vasilisa Borovikova",
    "Имя основателя и ведущего мастера [Василиса Боровикова / Боровикова]",
    "ACTIVE"
  ],
  [
    "О_ХОЗЯИНЕ",
    "host_status",
    "Основатель школы и бутика кутюрной вышивки с 2015 года",
    "Статус мастера на витрине и в кабинете",
    "ACTIVE"
  ],
  [
    "О_ХОЗЯИНЕ",
    "host_languages",
    "Русский, English, Türkçe",
    "Языки преподавания и поддержки",
    "ACTIVE"
  ],
  [
    "КОНТАКТЫ",
    "phone_ru",
    "'+79213047892",
    "Контактный телефон и WhatsApp / Telegram РФ",
    "ACTIVE"
  ],
  [
    "КОНТАКТЫ",
    "phone_tr",
    "'+905455983211",
    "Контактный телефон и WhatsApp студии в Мармарисе [Турция]",
    "ACTIVE"
  ],
  [
    "КОНТАКТЫ",
    "email",
    "vasilisa.luneville@gmail.com",
    "Официальный публичный Email школы и бутика для OTP и уведомлений",
    "ACTIVE"
  ],
  [
    "КОНТАКТЫ",
    "telegram_retreat",
    "https://t.me/limonnavillevturkey",
    "Официальный Telegram-канал кутюрных арт-отпусков в Турции",
    "ACTIVE"
  ],
  [
    "ПЕРЕМЕННАЯ",
    "address",
    "Marmaris, Muğla, Türkiye [Студия и ретритная вилла в 30 мин от DLM]",
    "Адрес студии в Мармарисе и локация ретритной виллы",
    "ACTIVE"
  ],
  [
    "ПЕРЕМЕННАЯ",
    "maps_url",
    "https://maps.google.com/?q=Marmaris,Mugla,Turkey",
    "Ссылка на геолокацию студии в Google Maps",
    "ACTIVE"
  ],
  [
    "ПЕРЕМЕННАЯ",
    "checkin_time",
    "09:00",
    "Время начала занятий в студии Мармариса и заезда на ретрит",
    "ACTIVE"
  ],
  [
    "ПЕРЕМЕННАЯ",
    "checkout_time",
    "17:00",
    "Время завершения учебного дня в студии Мармариса",
    "ACTIVE"
  ],
  [
    "ФИНАНСЫ",
    "base_currency",
    "EUR",
    "Базовая валюта расчетов школы, наставничества, ретритов и бутика",
    "ACTIVE"
  ],
  [
    "ФИНАНСЫ",
    "rate_eur_rub",
    "100",
    "Фиксированный расчетный курс EUR к RUB [10 € = 1000 ₽]",
    "ACTIVE"
  ],
  [
    "ФИНАНСЫ",
    "rate_eur_try",
    "38.5",
    "Расчетный курс EUR к TRY [актуализируется по TCMB Döviz Alış]",
    "ACTIVE"
  ],
  [
    "ФИНАНСЫ",
    "rate_eur_usd",
    "1.08",
    "Расчетный курс EUR к USD",
    "ACTIVE"
  ],
  [
    "КВОТЫ_И_СРОКИ",
    "retreat_max_quota",
    "6",
    "Строгая квота участниц на каждый поток арт-отпуска на вилле",
    "ACTIVE"
  ],
  [
    "КВОТЫ_И_СРОКИ",
    "mentorship_feedback_days",
    "180",
    "Срок персональной проверки 20-30 сек видео ДЗ [6 месяцев]",
    "ACTIVE"
  ],
  [
    "КВОТЫ_И_СРОКИ",
    "hold_hours",
    "24",
    "Время удержания неоплаченной брони слота ретрита или студии [24ч HOLD]",
    "ACTIVE"
  ],
  [
    "НАЛОГИ_GIB",
    "tax_office",
    "Marmaris Vergi Dairesi",
    "Налоговая инспекция в Турции для выставления e-Arşiv Fatura GİB VUK 213",
    "ACTIVE"
  ],
  [
    "ИИ_ЯДРО",
    "ai_model",
    "gemini-3.6-flash",
    "Каноническая модель ИИ Google Gemini 3.6 Flash Tier 1",
    "ACTIVE"
  ],
  [
    "ИИ_ЯДРО",
    "ai_mode",
    "Автопилот",
    "Режим работы ИИ-агента [Автопилот / Суфлер / Выкл]",
    "ACTIVE"
  ],
  [
    "ИИ_РОЛЬ_1",
    "role_curator",
    "Куратор школы и МК",
    "Подбор первого МК, программа 16 уроков онлайн-наставничества [200 €], выдача доступов",
    "ACTIVE"
  ],
  [
    "ИИ_РОЛЬ_2",
    "role_expert_guide",
    "Эксперт по техникам и гид по Мармарису/ретритам",
    "Крючки №70-90, органза, пайетки, студия Мармарис [500 €], 4 потока ретритов 2027 [1100-1500 €], трансфер DLM",
    "ACTIVE"
  ],
  [
    "ИИ_РОЛЬ_3",
    "role_accountant",
    "Бухгалтер школы и бутика",
    "Мультивалютный расчет EUR/RUB/TRY/USD, 5 шлюзов оплаты, фактуры e-Arşiv Fatura GİB VUK 213 по курсу TCMB",
    "ACTIVE"
  ],
  [
    "ИИ_РОЛЬ_4",
    "role_lawyer",
    "Юрист и комплаенс",
    "Оферты обучения, арт-отпуска и бутика, политика возвратов, защита данных KVKK № 6698 и GDPR",
    "ACTIVE"
  ],
  [
    "БЛОК_10_МАТРИЦА",
    "ACCESS_MATRIX_PUBLIC",
    "HOME,GALLERY,LEGAL,SERVICES,GUIDES,CALENDAR,KNOWLEDGE_GRAPH",
    "Листы, разрешенные для публичного ИИ-Куратора на витрине [экономия 85% токенов]",
    "ACTIVE"
  ],
  [
    "БЛОК_10_МАТРИЦА",
    "ACCESS_MATRIX_HOST",
    "HOME,GALLERY,LEGAL,ACCESS,TEMPLATES,SETTINGS,TASKS,KNOWLEDGE_GRAPH,ACCOUNTS,SERVICES,GUIDES,BOOKINGS,CALENDAR,ORDERS,GUIDE_ACCESS",
    "Полный доступ для триединого бизнес-ассистента Василисы в кабинете /host",
    "ACTIVE"
  ]
];

const MASTER_TEMPLATES_ROWS = [
  [
    "TMP-001",
    "Приветствие после покупки онлайн мастер-класса",
    "Welcome after Online Masterclass Purchase",
    "Online Atölye Satın Alma Sonrası Karşılama",
    "Здравствуйте! Поздравляю вас с началом творческого пути в школе кутюрной вышивки Vasilisa.luneville! Ваш бессрочный доступ к закрытому Telegram-каналу мастер-класса открыт в личном кабинете ученицы. Вышивайте с удовольствием в комфортном темпе!",
    "Hello! Welcome to Vasilisa.luneville Haute Couture Embroidery School! Your lifetime access to the private workshop Telegram channel is now active in your student cabinet. Enjoy every stitch at your own pace!",
    "Merhaba! Vasilisa.luneville Haute Couture Nakış Okulu'na hoş geldiniz! Özel Telegram atölye kanalına ömür boyu erişiminiz öğrenci panelinizde aktif edildi. Keyifli işlemeler dileriz!"
  ],
  [
    "TMP-002",
    "Старт индивидуального онлайн-наставничества [16 уроков, 200 €]",
    "Starting 1-on-1 Online Mentorship [16 Lessons, 200 €]",
    "Birebir Online Mentorluk Başlangıcı [16 Ders, 200 €]",
    "Рада приветствовать вас на индивидуальном наставничестве «Основы люневильской вышивки»! Доступ ко всем 16 видеоурокам открыт навсегда, а наш персональный чат сопровождения активен ровно 6 месяцев [180 дней]. Присылайте короткие видео вашей работы на раме по 20-30 секунд - я буду внимательно смотреть постановку руки и помогать на каждом этапе!",
    "Welcome to 1-on-1 Mentorship 'Luneville Embroidery Fundamentals'! Lifetime access to all 16 macro lessons is open, and our 6-month [180-day] personal feedback chat is active. Send short 20-30 second videos of your work on the frame so I can guide your hand positioning!",
    "Birebir 'Luneville Nakış Temelleri' mentorluk programına hoş geldiniz! 16 makro derse ömür boyu erişiminiz ve 6 aylık [180 gün] birebir geri bildirim sohbetiniz başladı. El duruşunuzu birlikte mükemmelleştirmek için 20-30 saniyelik çalışma videolarınızı gönderebilirsiniz!"
  ],
  [
    "TMP-003",
    "Подтверждение 5-дневного офлайн-наставничества в студии Мармариса [500 €]",
    "Marmaris 5-Day Offline Studio Confirmation [500 €]",
    "Marmaris Stüdyosu 5 Günlük Birebir Eğitim Onayı [500 €]",
    "Ваша индивидуальная учебная неделя в творческой студии Vasilisa.luneville в Мармарисе подтверждена! Занятия проходят с понедельника по пятницу с 09:00 до 17:00. Все рамы, крючки №70-90 и материалы готовы. Пришлите, пожалуйста, номер вашего рейса в аэропорт Даламан [DLM] для организации бесплатного трансфера и подбора отеля.",
    "Your 1-on-1 studio week at Vasilisa.luneville in Marmaris is confirmed! Classes run Monday to Friday from 09:00 to 17:00 with all frames, hooks #70-90, and materials provided. Please share your flight details into Dalaman Airport [DLM] so we can arrange your complimentary transfer and hotel.",
    "Marmaris Vasilisa.luneville stüdyosundaki 5 günlük birebir eğitim haftanız onaylandı! Derslerimiz Pazartesi-Cuma 09:00-17:00 arasındadır. Ücretsiz Dalaman Havalimanı [DLM] transferiniz ve otel desteği için uçuş bilgilerinizi paylaşabilirsiniz."
  ],
  [
    "TMP-004",
    "Подтверждение брони места на кутюрный арт-отпуск в Турции 2027",
    "Turkey Couture Art Retreat 2027 Reservation Confirmation",
    "2027 Türkiye Sanat Tatili Rezervasyon Onayı",
    "Поздравляем! За вами закреплено 1 из 6 мест на кутюрный арт-отпуск в Турции [8 дней / 7 ночей на горной вилле в провинции Мугла]. В стоимость включено проживание, 3-разовое домашнее питание от Марины, 5 дней вышивки с Василисой Боровиковой и Юлией Озмен, все материалы, выезд в Акьяку / Азмак / Дальян / Изтузу и трансфер из аэропорта Даламан [DLM]. Канал участниц: https://t.me/limonnavillevturkey",
    "Congratulations! One of the 6 spots for the Turkey Couture Art Retreat [8 days / 7 nights at our mountain villa in Muğla] is reserved for you. Includes villa stay, full-board dining by Marina, 5 days of embroidery with Vasilisa & Yulia, materials, Akyaka/Azmak/Iztuzu excursion, and DLM airport transfer. Channel: https://t.me/limonnavillevturkey",
    "Tebrikler! Türkiye Haute Couture Sanat Tatili [Muğla dağ villasında 8 gün / 7 gece] için 6 kişilik kontenjandan yeriniz ayrıldı. Konaklama, Marina'dan 3 öğün yemek, Vasilisa ve Yulia ile eğitim, malzemeler, Akyaka/Azmak/İztuzu gezisi ve DLM transferi dahildir. Kanal: https://t.me/limonnavillevturkey"
  ],
  [
    "TMP-005",
    "Прием заказа в Бутике и Ателье «Под заказ» [Bespoke Atelier]",
    "Boutique & Bespoke Atelier Order Confirmation",
    "Butik ve Kişiye Özel Tasarım Sipariş Onayı",
    "Благодарим за заказ в бутике кутюрных изделий Vasilisa.luneville! Готовые изделия отправляются в течение 2-3 рабочих дней, а индивидуальные заказы «Под заказ» создаются вручную за 14-30 рабочих дней. Мы будем присылать вам макро-фотографии процесса вышивки и сразу направим международный трек-номер после отправки.",
    "Thank you for your order with Vasilisa.luneville Couture Boutique! Ready-to-ship pieces dispatch in 2-3 business days, while Bespoke Atelier orders are handcrafted within 14-30 business days. We will share macro progress photos and your international tracking number upon dispatch.",
    "Vasilisa.luneville Haute Couture Butik siparişiniz için teşekkür ederiz! Hazır ürünler 2-3 iş gününde, kişiye özel tasarımlar ise 14-30 iş gününde hazırlanır. Süreç fotoğrafları ve uluslararası kargo takip numaranız sizinle paylaşılacaktır."
  ],
  [
    "TMP-006",
    "Разбор 20-30-секундного видео домашнего задания ученицы",
    "Review of 20-30 sec Student Homework Video",
    "20-30 Saniyelik Öğrenci Ödev Videosu İncelemesi",
    "Посмотрела ваше 20-30-секундное видео домашнего задания! Отличное натяжение шелковой органзы в раме и ровный шаг тамбурного стежка. Обратите внимание на полный поворот винта люневильского крючка на 180 градусов при выходе петли наверх, чтобы нить не цеплялась за волокна ткани. Переходите к следующему уроку!",
    "I reviewed your 20-30 second homework video! Great drum-tight silk organza tension and even tambour stitch length. Pay attention to rotating the Luneville hook screw a full 180 degrees as the loop comes up so the thread glides smoothly. You are ready for the next lesson!",
    "20-30 saniyelik ödev videonuzu inceledim! İpek organzenin kasnak gerginliği ve zincir dikiş adımları çok başarılı. İpliğin kumaşa takılmaması için Luneville tığını yukarı çıkarken tam 180 derece döndürmeye dikkat edin. Bir sonraki derse geçebilirsiniz!"
  ]
];

const MASTER_GALLERY_ROWS = [
  [
    "GAL-001",
    "Витрина",
    "Главный баннер школы кутюрной вышивки Vasilisa.luneville",
    "Showcase",
    "Main banner of Vasilisa.luneville Haute Couture Embroidery School",
    "Vitrin",
    "Vasilisa.luneville Haute Couture Nakış Okulu ana afişi",
    "IMAGE",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Кутюрная вышивка Vasilisa.luneville с 2015 года",
    "Haute Couture Embroidery by Vasilisa.luneville since 2015",
    "2015'ten beri Vasilisa.luneville Haute Couture Nakış"
  ],
  [
    "GAL-002",
    "МК Лаванда",
    "Ветка лаванды на органзе - готовая аппликация [10 €]",
    "Lavender MK",
    "Lavender branch on organza - finished applique [10 €]",
    "Lavanta Atölyesi",
    "Organze üzerine lavanta dalı - hazır aplik [10 €]",
    "IMAGE",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk",
    "Аппликация «Ветка лаванды» на прозрачной органзе",
    "Lavender Branch applique on sheer organza",
    "Şeffaf organze üzerine Lavanta Dalı aplik"
  ],
  [
    "GAL-003",
    "МК Лаванда",
    "Макросъемка элементов вышивки бисером и пайетками",
    "Lavender MK",
    "Macro close-up of bead and sequin embroidery elements",
    "Lavanta Atölyesi",
    "Boncuk ve payet nakış elemanlarının makro çekimi",
    "IMAGE",
    "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "Детализация стежков и бисера в МК Лаванда",
    "Detailing of stitches and beads in Lavender workshop",
    "Lavanta atölyesinde dikiş ve boncuk detayları"
  ],
  [
    "GAL-004",
    "Бутик и МК",
    "Пример ношения кутюрной аппликации и броши на одежде",
    "Boutique & MK",
    "Wearing couture applique and brooch on garments",
    "Butik ve Atölye",
    "Kıyafet üzerinde haute couture aplik ve broş kullanımı",
    "IMAGE",
    "https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Стильный акцент на рубашке - ветка лаванды",
    "Stylish accent on a shirt - lavender branch",
    "Gömlek üzerinde şık bir detay - lavanta dalı"
  ],
  [
    "GAL-005",
    "МК Мимоза",
    "МК Мимоза - 4 варианта вышивки одной веточки [10 € / 1000 ₽]",
    "Mimosa MK",
    "Mimosa workshop - 4 variations of one branch [10 € / 1000 ₽]",
    "Mimoza Atölyesi",
    "Mimoza atölyesi - bir dalın 4 farklı nakış stili [10 €]",
    "IMAGE",
    "https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "Объемная веточка мимозы на шелковой органзе",
    "Volumetric mimosa branch on silk organza",
    "İpek organze üzerine boyutlu mimoza dalı"
  ],
  [
    "GAL-006",
    "МК Мимоза",
    "Фактуры и сочетания французских пайеток, синели и бисера",
    "Mimosa MK",
    "Textures and combinations of French sequins, chenille, and beads",
    "Mimoza Atölyesi",
    "Fransız payetleri, şönil ve boncuk dokuları",
    "IMAGE",
    "https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Игра фактур и солнечный блеск мимозы",
    "Interplay of textures and sunny shine of mimosa",
    "Doku uyumu ve mimozanın güneş ışıltısı"
  ],
  [
    "GAL-007",
    "Наставничество",
    "Процесс работы люневильским крючком на профессиональной раме [200 € / 500 €]",
    "Mentorship",
    "Working with Luneville hook on a professional frame [200 € / 500 €]",
    "Mentorluk",
    "Profesyonel kasnakta Luneville tığı ile çalışma [200 € / 500 €]",
    "IMAGE",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Отработка тамбурного стежка в 16 уроках наставничества",
    "Mastering tambour stitch across 16 mentorship lessons",
    "16 mentorluk dersinde zincir dikiş pratiği"
  ],
  [
    "GAL-008",
    "Наставничество",
    "Макросъемка закрепки и чистой изнанки кутюрной вышивки",
    "Mentorship",
    "Macro photography of fastening and neat couture reverse side",
    "Mentorluk",
    "Sağlamlaştırma ve temiz ters yüz makro çekimi",
    "IMAGE",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Идеальная изнанка от кутюр под микроскопом",
    "Flawless haute couture reverse side under macro lens",
    "Haute couture standartlarında kusursuz ters yüz"
  ],
  [
    "GAL-009",
    "Арт-отпуск",
    "Горная вилла в провинции Мугла и атмосфера кутюрного ретрита [2027]",
    "Art Retreat",
    "Mountain villa in Muğla Province and creative retreat atmosphere [2027]",
    "Sanat Tatili",
    "Muğla dağlarında villa ve yaratıcı sanat tatili atmosferi [2027]",
    "IMAGE",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Горная вилла в Турции: 8 дней вышивки, бассейн и фруктовый сад",
    "Mountain villa in Turkey: 8 days of embroidery, pool, and fruit garden",
    "Türkiye'de dağ villası: 8 gün nakış, havuz ve meyve bahçesi"
  ],
  [
    "GAL-010",
    "Арт-отпуск",
    "Участницы кутюрного арт-отпуска с Василисой Боровиковой и Юлией Озмен",
    "Art Retreat",
    "Couture art retreat participants with Vasilisa Borovikova and Yulia Ozmen",
    "Sanat Tatili",
    "Vasilisa Borovikova ve Yulia Ozmen ile sanat tatili katılımcıları",
    "IMAGE",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Творческое женское сообщество на ретрите в Турции",
    "Creative female community at the Turkey art retreat",
    "Türkiye sanat tatilinde yaratıcı kadın topluluğu"
  ]
];

const MASTER_SERVICES_ROWS = [
  [
    "VL-MK-LAVENDER",
    "🌿 МК Вышивка иглой: аппликация «Ветка лаванды» на органзе",
    "Создание нежной объемной аппликации 10x15 см иглой по прозрачной шелковой органзе. Доступ навсегда в Telegram.",
    "Needle Embroidery Workshop: 'Lavender Branch' Applique on Organza",
    "Create a delicate 10x15 cm volumetric applique with a needle on sheer silk organza. Lifetime access in Telegram.",
    "İğne Nakışı Atölyesi: Şeffaf Organze Üzerine 'Lavanta Dalı' Aplik",
    "Şeffaf ipek organze üzerine iğne ile 10x15 cm boyutlu aplik yapımı. Telegram'da ömür boyu erişim.",
    "11",
    "10",
    "1000",
    "385",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk, https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Пошаговый онлайн мастер-класс для начинающих и продолжающих: запялка прозрачной органзы в обычные пяльцы, работа с бисером и пайетками, аккуратная обработка края и превращение вышивки в брошь или нашивку на одежду. Доступ к урокам бессрочный.",
    "Step-by-step online workshop for beginners and enthusiasts: framing sheer organza in a standard hoop, bead and sequin work, neat edge finishing, and turning your piece into a brooch or garment applique. Lifetime access.",
    "Başlangıç ve orta seviye için adım adım online atölye: standart kasnakta şeffaf organze gerdirme, boncuk ve payet işleme, temiz kenar bitişi ve broş/kıyafet apliği yapımı. Ömür boyu erişim."
  ],
  [
    "VL-MK-MIMOSA",
    "🌼 МК «Мимоза» - 4 варианта вышивки одной веточки",
    "Изучение четырех фактурных техник вышивки солнечной мимозы бисером, пайетками и мулине. Доступ навсегда.",
    "'Mimosa' Masterclass - 4 Embroidery Variations of One Branch",
    "Learn four textural techniques for embroidering a sunny mimosa branch with beads, sequins, and floss. Lifetime access.",
    "'Mimoza' Atölyesi - Bir Dalın 4 Farklı Nakış Tekniği",
    "Boncuk, payet ve muline ile güneşli mimoza dalını işlemenin 4 farklı dokusal tekniği. Ömür boyu erişim.",
    "11",
    "10",
    "1000",
    "385",
    "https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk, https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "В одном мастер-классе собраны 4 разных подхода к созданию объема и фактуры цветов и листьев мимозы на шелковой органзе. Подходит для вышивки обычной иглой на пяльцах с нуля. Бессрочный доступ в закрытом Telegram-канале.",
    "Four distinct approaches to creating volume and texture for mimosa flowers and leaves on silk organza in a single workshop. Beginner-friendly using a standard needle and hoop. Lifetime Telegram access.",
    "İpek organze üzerinde mimoza çiçeklerine hacim ve doku kazandıran 4 farklı teknik tek bir atölyede. Standart iğne ve kasnakla sıfırdan başlayanlar için uygundur."
  ],
  [
    "VL-MK-FIREWORK",
    "🎇 МК «Фейерверк» - кутюрная работа с пайетками и стеклярусом",
    "Динамичная сияющая композиция в технике высокой моды из французских пайеток, бисера и стекляруса.",
    "'Fireworks' Masterclass - Haute Couture Sequins & Bugle Beads",
    "Dynamic sparkling composition using French sequins, seed beads, and bugle beads in haute couture style.",
    "'Havai Fişek' Atölyesi - Fransız Payetleri ve Boru Boncuk İşleme",
    "Fransız payetleri, kum boncuk ve boru boncuklarla ışıltılı haute couture tasarım.",
    "16",
    "15",
    "1500",
    "580",
    "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Мастер-класс по созданию сложной светотеневой фактуры и ритма с использованием разноразмерных пайеток, стекляруса и бисера. Включает схему, карту материалов и подробные макро-уроки с бессрочным доступом.",
    "Masterclass on building complex light-catching textures and rhythm with multi-sized sequins, bugle beads, and seed beads. Includes pattern, material chart, and lifetime macro video access.",
    "Farklı boyutta payetler ve boru boncuklarla ışıltılı doku oluşturma atölyesi. Şablon, malzeme listesi ve ömür boyu erişimli makro dersler dahildir."
  ],
  [
    "VL-MK-FRAMING",
    "🖼 МК «Оформление вышивки в рамку» - профессиональная натяжка",
    "Авторская технология безупречной натяжки тонких тканей и оформления готовой кутюрной вышивки в багет.",
    "'Framing Embroidery' Workshop - Professional Stretching & Mounting",
    "Signature technique for drum-tight stretching of delicate fabrics and mounting finished couture embroidery in a frame.",
    "'Nakışı Çerçeveleme' Atölyesi - Profesyonel Gerdirme ve Sunum",
    "Hassas kumaşların kırışıksız gerdirilmesi ve bitmiş haute couture nakışların çerçevelenmesi.",
    "11",
    "10",
    "1000",
    "385",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Практическое руководство по превращению вашей вышивки в предмет интерьерного искусства: правильная подготовка подложки, центровка, натяжка без перекоса нитей органзы или бархата и фиксация в раме.",
    "Practical guide to turning your embroidery into interior art: backing preparation, centering, distortion-free stretching of organza or velvet, and secure frame mounting.",
    "Nakışınızı sanatsal bir tabloya dönüştürme rehberi: altlık hazırlığı, ortalama, organze ve kadifeyi kaydırmadan gerdirme ve çerçeveye sabitleme."
  ],
  [
    "VL-MK-WINTER",
    "❄️ МК «Зимняя сказка» - объемная синель, канитель и кристаллы",
    "Праздничный кутюрный мастер-класс по сочетанию бархатистой шелковой синели, металлической канители и кристаллов.",
    "'Winter Tale' Masterclass - Volumetric Chenille, Bullion & Crystals",
    "Festive haute couture workshop combining velvety silk chenille, metallic bullion wire, and crystals.",
    "'Kış Masalı' Atölyesi - İpek Şönil, Tırtıl Tel ve Kristaller",
    "Kadifemsi ipek şönil, metalik tırtıl tel ve kristallerle büyüleyici kış nakışı atölyesi.",
    "16",
    "15",
    "1500",
    "580",
    "https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Изучите секреты работы с деликатной шелковой синелью и фигурной канителью для создания выразительного рельефа и морозного сияния. Доступ к макро-урокам в Telegram открывается навсегда.",
    "Master the secrets of working with delicate silk chenille and bullion wire to craft rich relief and frosty sparkle. Lifetime macro video access in Telegram.",
    "Zengin kabartma ve ışıltı elde etmek için ipek şönil ve tırtıl tel ile çalışma sırlarını öğrenin. Telegram'da ömür boyu makro ders erişimi."
  ],
  [
    "VL-MENTOR-ONLINE",
    "✨ Индивидуальное онлайн-наставничество «Основы люневильской вышивки» [16 уроков]",
    "Флагманский курс: 16 пошаговых макро-уроков [доступ навсегда] + 6 месяцев личной обратной связи Василисы по 20-30 сек видео ДЗ.",
    "1-on-1 Online Mentorship 'Luneville Embroidery Fundamentals' [16 Lessons]",
    "Flagship course: 16 macro lessons [lifetime access] + 6 months of personal feedback from Vasilisa via 20-30 sec homework videos.",
    "Birebir Online Mentorluk 'Luneville Nakış Temelleri' [16 Ders]",
    "Amiral gemisi kurs: 16 makro ders [ömür boyu erişim] + 20-30 sn ödev videolarıyla Vasilisa'dan 6 ay birebir geri bildirim.",
    "216",
    "200",
    "20000",
    "7700",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Да",
    "Пакет",
    "",
    "Полная система постановки руки на люневильский крючок №70-90 с нуля: запялка органзы в раму, тамбурный стежок в разных направлениях, закрепки, пришивание пайеток, бисера и синели с изнанки вслепую. Вы присылаете короткие 20-30-секундные видео своей работы, а Василиса лично разбирает каждое движение в течение 6 месяцев [180 дней].",
    "Complete hand-positioning system for Luneville hooks #70-90 from scratch: drum-tight frame setup, multi-directional tambour chain stitch, invisible fastenings, and reverse sequin & bead application. Send 20-30 sec videos of your stitching for 6 months [180 days] of personal feedback from Vasilisa.",
    "Sıfırdan #70-90 Luneville tığı el yerleşimi sistemi: kasnak gerdirme, her yönde zincir dikiş, düğümleme ve ters yüzden payet/boncuk işleme. 6 ay [180 gün] boyunca 20-30 saniyelik çalışma videolarınıza Vasilisa'dan birebir geri bildirim."
  ],
  [
    "VL-MENTOR-OFFLINE",
    "✨ Индивидуальное офлайн-наставничество в студии в Мармарисе [5 дней пн-пт]",
    "5 полных дней [09:00-17:00] один на один с Василисой в студии Мармариса. Все материалы, рамы, помощь с отелем и трансфер DLM включены.",
    "1-on-1 Offline Mentorship at Marmaris Studio [5 Days Mon-Fri]",
    "5 full days [09:00-17:00] 1-on-1 with Vasilisa at the Marmaris studio. All materials, frames, hotel support & DLM transfer included.",
    "Marmaris Stüdyosunda Birebir Offline Mentorluk [5 Gün Pzt-Cum]",
    "Marmaris atölyesinde Vasilisa ile 5 tam gün [09:00-17:00] birebir eğitim. Tüm malzemeler, kasnaklar ve DLM transferi dahil.",
    "540",
    "500",
    "50000",
    "19250",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Да",
    "Пакет",
    "",
    "Интенсивное очное погружение в мир высокой моды в солнечном Мармарисе: 5 дней с понедельника по пятницу с 09:00 до 17:00 под персональным руководством Василисы Боровиковой. Все инструменты, кутюрные рамы, люневильские крючки, шелковая органза, пайетки и бисер предоставляются в студии. Включен индивидуальный трансфер из аэропорта Даламан [DLM].",
    "Immersive 5-day studio intensive in sunny Marmaris [Monday to Friday, 09:00 to 17:00] under the personal guidance of Vasilisa Borovikova. All couture frames, Luneville hooks, silk organza, French sequins, and beads are provided. Includes complimentary Dalaman Airport [DLM] pickup and drop-off.",
    "Güneşli Marmaris'te Vasilisa Borovikova rehberliğinde 5 tam gün [Pazartesi - Cuma 09:00 - 17:00] birebir haute couture nakış eğitimi. Tüm profesyonel kasnaklar, tığlar, ipek organze ve Fransız payetleri stüdyoda sağlanır. Dalaman Havalimanı [DLM] transferi dahildir."
  ]
];

const MASTER_GUIDES_ROWS = [
  [
    "VL-RETREAT-2027-01",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 1 [1-8 мая 2027 г., 8 дней / 7 ночей]",
    "Весенний поток на горной вилле в Мугле [квота 6 мест, свободно 5 из 6]. Наставники Василиса Боровикова и Юлия Озмен, шеф Марина. Тарифы: 1100 / 1200 / 1500 €.",
    "Turkey Couture Art Retreat - Flow 1 [May 1-8, 2027, 8 Days / 7 Nights]",
    "Spring retreat at our mountain villa in Muğla [6 spots quota, 5 of 6 available]. Mentors Vasilisa & Yulia Ozmen, chef Marina. Packages: 1100 / 1200 / 1500 €.",
    "Türkiye Haute Couture Sanat Tatili - 1. Dönem [1-8 Mayıs 2027, 8 Gün / 7 Gece]",
    "Muğla dağ villasında bahar dönemi [6 kişilik kontenjan, 5 yer müsait]. Eğitmenler Vasilisa ve Yulia Ozmen, şef Marina. Paketler: 1100 / 1200 / 1500 €.",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 1 мая - 8 мая 2027 г. [8 дней / 7 ночей]. Квота: строго 6 участниц [свободно 5 мест]. Тарифы: 1100 € [односпальная кровать в двухместной комнате], 1200 € [большая двуспальная кровать], 1500 € [отдельная спальня целиком]. Включено: проживание на горной вилле с бассейном в 30 мин от DLM, 3-разовое домашнее питание от Марины, 5 дней обучения кутюрной вышивке, все материалы, трансфер DLM и выездной день [Акьяка, река Азмак, Дальян, пляж Изтузу].",
    "Dates: May 1 - May 8, 2027 [8 days / 7 nights]. Strict 6-guest quota [5 spots available]. Packages: 1100 € [single bed in twin room], 1200 € [large double bed], 1500 € [private bedroom]. Includes mountain villa stay with pool 30 min from DLM, full-board meals by Marina, 5 days of embroidery tuition, all materials, DLM airport transfers, and excursion day [Akyaka, Azmak River, Dalyan, Iztuzu Beach].",
    "Tarihler: 1 - 8 Mayıs 2027 [8 gün / 7 gece]. 6 kişilik kontenjan [5 yer müsait]. Paketler: 1100 € [paylaşımlı odada tek yatak], 1200 € [çift kişilik yatak], 1500 € [müstakil oda]. Havuzlu dağ villasında konaklama, Marina'dan 3 öğün yemek, 5 gün nakış eğitimi, tüm malzemeler, DLM transferi ve Akyaka/Azmak/İztuzu gezisi dahildir.",
    "Да"
  ],
  [
    "VL-RETREAT-2027-02",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 2 [19-26 июня 2027 г., 8 дней / 7 ночей]",
    "Летний поток на горной вилле в Мугле [квота 6 мест, свободно 5 из 6]. Вышивка в фруктовом саду, бассейн, гастрономия и выезд к морю.",
    "Turkey Couture Art Retreat - Flow 2 [June 19-26, 2027, 8 Days / 7 Nights]",
    "Summer retreat at our mountain villa in Muğla [6 spots quota, 5 of 6 available]. Garden embroidery, pool, fine home dining & coastal excursion.",
    "Türkiye Haute Couture Sanat Tatili - 2. Dönem [19-26 Haziran 2027, 8 Gün / 7 Gece]",
    "Muğla dağ villasında yaz dönemi [6 kişilik kontenjan, 5 yer müsait]. Meyve bahçesinde nakış, havuz, ev yemekleri ve sahil gezisi.",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 19 июня - 26 июня 2027 г. [8 дней / 7 ночей]. Квота: 6 участниц [свободно 5 мест]. Тарифы: 1100 € / 1200 € / 1500 €. В стоимость включено проживание на горной вилле, 3-разовое питание от шефа Марины, 5 дней мастер-классов с Василисой Боровиковой и Юлией Озмен, комплект материалов, трансфер из аэропорта DLM и экскурсионный маршрут по Акьяке, реке Азмак, Дальяну и пляжу Изтузу.",
    "Dates: June 19 - June 26, 2027 [8 days / 7 nights]. Quota: 6 guests [5 spots open]. Packages: 1100 € / 1200 € / 1500 €. All-inclusive stay at our mountain villa, full-board meals by Marina, 5 days of tuition with Vasilisa & Yulia, materials, DLM transfers, and excursion to Akyaka, Azmak River, Dalyan, and Iztuzu Beach.",
    "Tarihler: 19 - 26 Haziran 2027 [8 gün / 7 gece]. Kontenjan: 6 katılımcı [5 yer müsait]. Paketler: 1100 € / 1200 € / 1500 €. Dağ villasında konaklama, Marina'dan 3 öğün yemek, Vasilisa ve Yulia ile 5 gün eğitim, malzemeler, DLM transferi ve Akyaka/Azmak/İztuzu gezisi dahildir.",
    "Да"
  ],
  [
    "VL-RETREAT-2027-03",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 3 [18-25 сентября 2027 г., 8 дней / 7 ночей]",
    "Бархатный сезон на горной вилле в Турции [квота 6 мест, свободно 6 из 6]. Идеальная теплая погода, вышивка от кутюр и море.",
    "Turkey Couture Art Retreat - Flow 3 [September 18-25, 2027, 8 Days / 7 Nights]",
    "Velvet autumn season at our mountain villa in Turkey [6 spots quota, 6 of 6 available]. Warm weather, haute couture embroidery & sea excursion.",
    "Türkiye Haute Couture Sanat Tatili - 3. Dönem [18-25 Eylül 2027, 8 Gün / 7 Gece]",
    "Muğla dağ villasında сентябрь dönemi [6 kişilik kontenjan, 6 yer müsait]. Ilık sonbahar havası, haute couture nakış ve deniz gezisi.",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 18 сентября - 25 сентября 2027 г. [8 дней / 7 ночей]. Квота: 6 участниц [свободно 6 мест]. Тарифы: 1100 € [односпальная кровать], 1200 € [двуспальная кровать], 1500 € [отдельная спальня]. Полный пакет с проживанием, 3-разовым питанием от Марины, обучением у Василисы и Юлии, материалами, экскурсией и трансфером из аэропорта Даламан [DLM].",
    "Dates: September 18 - September 25, 2027 [8 days / 7 nights]. Quota: 6 guests [6 spots available]. Packages: 1100 € / 1200 € / 1500 €. Full-board mountain villa retreat with Vasilisa, Yulia & Marina, including all materials, excursion day, and DLM airport transfers.",
    "Tarihler: 18 - 25 Eylül 2027 [8 gün / 7 gece]. Kontenjan: 6 katılımcı [6 yer müsait]. Paketler: 1100 € / 1200 € / 1500 €. Konaklama, 3 öğün yemek, Vasilisa ve Yulia ile eğitim, malzemeler, gezi günü ve DLM transferi dahil tam paket.",
    "Да"
  ],
  [
    "VL-RETREAT-2027-04",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 4 [23-30 октября 2027 г., 8 дней / 7 ночей]",
    "Золотая осень в горах Муглы [квота 6 мест, свободно 6 из 6]. Уютные творческие вечера, создание кутюрного аксессуара и путешествия.",
    "Turkey Couture Art Retreat - Flow 4 [October 23-30, 2027, 8 Days / 7 Nights]",
    "Golden autumn in the mountains of Muğla [6 spots quota, 6 of 6 available]. Cozy creative evenings, crafting a couture piece & scenic tours.",
    "Türkiye Haute Couture Sanat Tatili - 4. Dönem [23-30 Ekim 2027, 8 Gün / 7 Gece]",
    "Muğla dağlarında altın sonbahar [6 kişilik kontenjan, 6 yer müsait]. Keyifli nakış akşamları, tasarım aksesuar yapımı ve geziler.",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 23 октября - 30 октября 2027 г. [8 дней / 7 ночей]. Квота: 6 участниц [свободно 6 мест]. Тарифы: 1100 € / 1200 € / 1500 €. Включено проживание на вилле, 3-разовое питание от шефа Марины, 5 дней вышивки с Василисой и Юлией, все материалы, выезд в Акьяку / реку Азмак / Дальян / Изтузу и трансфер из аэропорта DLM.",
    "Dates: October 23 - October 30, 2027 [8 days / 7 nights]. Quota: 6 guests [6 spots available]. Packages: 1100 € / 1200 € / 1500 €. Includes villa stay, full-board dining by Marina, 5 days of tuition with Vasilisa & Yulia, materials, excursion day, and DLM airport transfers.",
    "Tarihler: 23 - 30 Ekim 2027 [8 gün / 7 gece]. Kontenjan: 6 katılımcı [6 yer müsait]. Paketler: 1100 € / 1200 € / 1500 €. Villa konaklama, Marina'dan 3 öğün yemek, 5 gün nakış eğitimi, malzemeler, gezi günü ve DLM transferi dahildir.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-BROOCH-LAVENDER",
    "💎 Бутик [В наличии]: Кутюрная брошь «Лаванда Haute Couture» на шелковой органзе",
    "Авторская брошь ручной работы [французские пайетки, японский бисер, натуральная органза, японская булавка]. Отправка за 2-3 дня.",
    "Boutique [Ready to Ship]: 'Lavender Haute Couture' Brooch on Silk Organza",
    "Handcrafted designer brooch [French sequins, Japanese seed beads, silk organza, Japanese pin]. Dispatches in 2-3 business days.",
    "Butik [Stokta]: İpek Organze Üzerine 'Lavanta Haute Couture' Broş",
    "El yapımı tasarım broş [Fransız payetleri, Japon boncukları, ipek organze]. 2-3 iş gününde kargolanır.",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Бутик : В наличии",
    "https://t.me/vasilisa_luneville",
    "92",
    "85",
    "8500",
    "3275",
    "",
    "Готовое авторское украшение из коллекции Василисы Боровиковой. Выполнено в технике многослойной кутюрной вышивки на невесомой шелковой органзе с идеальной кожаной изнанкой. Поставляется в фирменной подарочной шкатулке с международным трек-номером.",
    "Ready-to-ship designer piece by Vasilisa Borovikova. Crafted using multi-layered haute couture embroidery on weightless silk organza with a fine leather backing. Delivered in a signature gift box with international tracking.",
    "Vasilisa Borovikova koleksiyonundan hazır tasarım broş. Şeffaf ipek organze üzerine çok katmanlı haute couture nakış ve deri arka yüzey. Özel hediye kutusunda takipli uluslararası kargo ile gönderilir.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-COLLAR-COUTURE",
    "💎 Бутик [В наличии]: Расшитый воротничок «Жемчужная Мимоза»",
    "Съемный кутюрный воротничок ручной работы с объемной мимозой из шелковой синели, жемчуга и пайеток.",
    "Boutique [Ready to Ship]: 'Pearl Mimosa' Embroidered Couture Collar",
    "Detachable handcrafted couture collar featuring volumetric mimosa in silk chenille, pearls, and French sequins.",
    "Butik [Stokta]: 'İnci Mimoza' İşlemeli Haute Couture Yaka",
    "İpek şönil, inci ve Fransız payetleriyle işlenmiş çıkarılabilir tasarım yaka.",
    "https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk, https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Бутик : В наличии",
    "https://t.me/vasilisa_luneville",
    "173",
    "160",
    "16000",
    "6160",
    "",
    "Изысканный аксессуар, мгновенно преображающий базовое платье, жакет или кашемировый свитер. Ручная работа люневильским крючком и иглой. Отправка в течение 2-3 рабочих дней по всему миру.",
    "Exquisite accessory that instantly elevates any dress, blazer, or cashmere sweater. Handcrafted with a Luneville hook and needle. Worldwide dispatch within 2-3 business days.",
    "Elbise, ceket veya kaşmir kazaklara anında zarafet katan el yapımı tasarım yaka. Luneville tığı ve iğne ile işlenmiştir. 2-3 iş gününde tüm dünyaya kargolanır.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-BAG-LUNEVILLE",
    "💎 Бутик [В наличии]: Вечерняя кутюрная сумочка с фермуаром «Ночной Мармарис»",
    "Коллекционная бархатная сумочка на бронзовом фермуаре с двусторонней люневильской вышивкой кристаллами и синелью.",
    "Boutique [Ready to Ship]: 'Marmaris Night' Couture Evening Bag with Clasp",
    "Collectible velvet evening bag with bronze kiss-lock clasp and double-sided Luneville embroidery in crystals and chenille.",
    "Butik [Stokta]: 'Marmaris Gecesi' Fermuarlı Haute Couture Gece Çantası",
    "Bronz klipsli, kristal ve ipek şönil ile çift taraflı Luneville nakışlı kadife gece çantası.",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Бутик : В наличии",
    "https://t.me/vasilisa_luneville",
    "346",
    "320",
    "32000",
    "12320",
    "",
    "Эксклюзивная вечерняя сумочка ручной работы на винтажном фермуаре с цепочкой, подкладкой из натурального шелка и авторской вышивкой люневильским крючком. В единственном экземпляре.",
    "One-of-a-kind handcrafted evening bag featuring a vintage bronze frame, chain strap, natural silk lining, and signature Luneville tambour embroidery.",
    "Vintage bronz çerçeveli, doğal ipek astarlı ve Luneville tığ nakışlı tek adet üretilmiş koleksiyonluk gece çantası.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-BESPOKE",
    "✨ Ателье «Под заказ» [Bespoke Atelier]: Индивидуальная вышивка и создание аксессуара по вашему эскизу",
    "Разработка персонального дизайна вышивки для платья, жакета, фаты, сумочки или украшения [срок 14-30 рабочих дней].",
    "Bespoke Atelier: Custom Haute Couture Embroidery & Accessory Creation",
    "Bespoke embroidery design and crafting for your dress, jacket, veil, handbag, or jewelry [14-30 business days].",
    "Bespoke Atelier: Elbise, Ceket, Çanta veya Takı İçin Kişiye Özel Haute Couture Nakış",
    "Kıyafet, duvak, çanta veya aksesuarınız için kişiye özel eskiz ve haute couture nakış [14-30 iş günü].",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Бутик : Под заказ",
    "https://t.me/vasilisa_luneville",
    "270",
    "250",
    "25000",
    "9625",
    "",
    "Опишите вашу идею в чате с ИИ-брифователем или Василисой: мы подготовим эскиз, согласуем палитру французских пайеток, бисера, шелковой синели и ткани, выполним вышивку вручную на кутюрной раме с регулярными видеоотчетами и бережно доставим готовое изделие в любую точку мира.",
    "Share your vision with our AI Brief Assistant or Vasilisa: we will create a custom sketch, curate French sequins, beads, silk chenille, and fabric, handcraft the embroidery on a couture frame with video updates, and ship worldwide.",
    "Hayalinizdeki tasarımı Yapay Zeka Asistanımız veya Vasilisa ile paylaşın: size özel eskiz ve malzeme paleti hazırlayalım, aşama videolarıyla elde işleyip tüm dünyaya güvenle teslim edelim.",
    "Да"
  ]
];

const MASTER_LEGAL_ROWS = [
  [
    "LEG-001",
    "Публичная оферта на онлайн мастер-классы и наставничество",
    "Public Offer for Online Masterclasses & Mentorship",
    "Online Atölye ve Mentorluk Mesafeli Satış Sözleşmesi",
    "Договор публичной оферты регулирует приобретение онлайн мастер-классов [Лаванда, Мимоза, Фейерверк, Оформление в рамку, Зимняя сказка] и индивидуального онлайн-наставничества «Основы люневильской вышивки» [16 уроков, 200 €] в школе кутюрной вышивки Vasilisa.luneville. Доступ к видеоматериалам в закрытых Telegram-каналах предоставляется бессрочно. Персональная проверка 20-30-секундных видео домашних заданий действует в течение 6 месяцев [180 дней] с даты старта.",
    "This Public Offer Agreement governs the purchase of online masterclasses and the 16-lesson 1-on-1 online mentorship [200 €] at Vasilisa.luneville Haute Couture Embroidery School. Video access in private Telegram channels is granted for life. Personal review of 20-30 second homework videos is valid for 6 months [180 days] from start date.",
    "Bu mesafeli satış sözleşmesi, Vasilisa.luneville Haute Couture Nakış Okulu online atölyeleri ve 16 derslik birebir online mentorluk [200 €] programının satın alımını düzenler. Özel Telegram kanallarındaki video derslere ömür boyu erişim sağlanır. 20-30 saniyelik ödev videolarının incelenmesi başlangıç tarihinden itibaren 6 ay [180 gün] geçerlidir."
  ],
  [
    "LEG-002",
    "Договор участия в кутюрном арт-отпуске в Турции и студии в Мармарисе",
    "Agreement for Turkey Couture Art Retreat & Marmaris Studio",
    "Türkiye Sanat Tatili ve Marmaris Stüdyo Katılım Sözleşmesi",
    "Регулирует бронирование мест на 8-дневные кутюрные арт-отпуска на горной вилле в провинции Мугла [4 потока 2027 г., квота строго 6 мест, тарифы 1100 / 1200 / 1500 €] и 5-дневные индивидуальные интенсивы в студии Мармариса [пн-пт 09:00-17:00, 500 €]. В стоимость ретрита включено: проживание 7 ночей на вилле, 3-разовое питание от шефа Марины, трансфер из аэропорта Даламан [DLM], 5 дней обучения с Василисой Боровиковой и Юлией Озмен, материалы и выездная экскурсия [Акьяка, река Азмак, Дальян, пляж Изтузу]. Неоплаченная бронь удерживается 24 часа [HOLD].",
    "Governs reservations for 8-day couture art retreats at the mountain villa in Muğla [4 flows in 2027, 6 spots quota, packages 1100 / 1200 / 1500 €] and 5-day 1-on-1 studio weeks in Marmaris [Mon-Fri 09:00-17:00, 500 €]. Retreat packages include 7 nights villa stay, full-board meals by Marina, DLM airport transfers, 5 days of tuition with Vasilisa & Yulia, materials, and excursions. Unpaid slots are held for 24 hours [HOLD].",
    "Muğla dağ villasındaki 8 günlük sanat tatilleri [2027'de 4 dönem, 6 kişilik kontenjan, 1100 / 1200 / 1500 € paketler] ve Marmaris stüdyosundaki 5 günlük birebir eğitimlerin [500 €] rezervasyonunu düzenler. Villa konaklama, Marina'dan 3 öğün yemek, DLM transferi, eğitim, malzemeler ve Akyaka/Azmak/İztuzu gezisi dahildir. Ödenmemiş rezervasyonlar 24 saat [HOLD] tutulur."
  ],
  [
    "LEG-003",
    "Правила заказа и доставки изделий Бутика и Ателье «Под заказ»",
    "Boutique Ready-to-Ship & Bespoke Atelier Terms",
    "Butik Hazır Ürün ve Kişiye Özel Sipariş Kuralları",
    "Готовые изделия бутика [кутюрные броши, расшитые воротнички, сумочки] отправляются в течение 2-3 рабочих дней после оплаты с предоставлением международного трек-номера. Индивидуальные заказы «Под заказ» [Bespoke Atelier] выполняются по согласованному с заказчицей брифу и эскизу в срок от 14 до 30 рабочих дней с промежуточными фото- и видеоотчетами.",
    "Ready-to-ship boutique pieces [couture brooches, embroidered collars, handbags] dispatch within 2-3 business days with international tracking. Bespoke Atelier custom orders are handcrafted according to the approved sketch within 14-30 business days with photo and video progress updates.",
    "Hazır butik ürünleri [broş, işlemeli yaka, çanta] ödeme sonrası 2-3 iş günü içinde uluslararası takip numarası ile kargolanır. Kişiye özel [Bespoke Atelier] siparişler onaylanan eskize göre 14-30 iş gününde hazırlanır."
  ],
  [
    "LEG-004",
    "Политика конфиденциальности и защиты персональных данных KVKK / GDPR",
    "Privacy & Personal Data Protection Policy [KVKK / GDPR]",
    "Gizlilik ve Kişisel Verilerin Korunması Politikası [KVKK / GDPR]",
    "Обработка персональных данных учениц и покупательниц [имя, телефон, email, аккаунт Telegram, ссылки на учебные видео ДЗ] осуществляется строго в соответствии с Законом Турецкой Республики № 6698 «О защите персональных данных» [KVKK] и регламентом ЕС GDPR исключительно для предоставления доступа к урокам, обратной связи, организации трансфера DLM и доставки заказов бутика.",
    "Personal data of students and clients [name, phone, email, Telegram handle, homework video links] is processed strictly in compliance with Turkish Personal Data Protection Law No. 6698 [KVKK] and EU GDPR solely for course access, mentorship feedback, DLM airport transfers, and boutique shipping.",
    "Öğrenci ve müşterilerin kişisel verileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu [KVKK] ve AB GDPR standartlarına tam uyumlu olarak yalnızca eğitim erişimi, ödev geri bildirimi, DLM transferi ve kargo teslimatı amacıyla işlenir."
  ],
  [
    "LEG-005",
    "Налоговые и банковские реквизиты Vasilisa.luneville [TR / RU]",
    "Tax & Banking Credentials of Vasilisa.luneville [TR / RU]",
    "Vasilisa.luneville Vergi ve Banka Bilgileri [TR / RU]",
    "Владелец платформы и бренда: Vasilisa Borovikova [Василиса Боровикова / Боровикова]. Локация студии: Marmaris, Muğla, Türkiye. Налоговая инспекция Турции: Marmaris Vergi Dairesi, фискализация электронных счетов-фактур e-Arşiv Fatura GİB VUK 213 в TRY по курсу TCMB Döviz Alış. Прием платежей в РФ и по миру: СБП / Т-Банк / ЮKassa [+7 921 304-78-92], Stripe / Iyzico / PayPal [+90 545 598 32 11, vasilisa.luneville@gmail.com].",
    "Platform & Brand Owner: Vasilisa Borovikova. Studio Location: Marmaris, Muğla, Turkey. Turkish Tax Office: Marmaris Vergi Dairesi, e-Arşiv Fatura GİB VUK 213 electronic invoicing in TRY at TCMB rates. Global & RU payment gateways: SBP / T-Bank / YooKassa [+7 921 304-78-92], Stripe / Iyzico / PayPal [+90 545 598 32 11, vasilisa.luneville@gmail.com].",
    "Platform ve Marka Sahibi: Vasilisa Borovikova. Stüdyo: Marmaris, Muğla, Türkiye. Vergi Dairesi: Marmaris Vergi Dairesi, TCMB kuru üzerinden TRY cinsinden e-Arşiv Fatura GİB VUK 213. Ödeme kanalları: Stripe / Iyzico / PayPal / SBP / T-Bank [+90 545 598 32 11, +7 921 304-78-92, vasilisa.luneville@gmail.com]."
  ]
];

const MASTER_BOOKINGS_ROWS = [
  [
    "18.05.2026, 14:30",
    "Елена Морозова",
    "'+79219876543 | elena.morozova@yahoo.com",
    "01.05.2027",
    "08.05.2027",
    "7",
    "1",
    "0",
    "1",
    "1100 EUR",
    "CONFIRMED | Поток 1 ретрита [Тариф 1100 €] | Рейс DLM согласован"
  ],
  [
    "21.05.2026, 16:40",
    "Maria Dubois",
    "'+33612345678 | maria.dubois@paris.fr",
    "09.06.2026",
    "13.06.2026",
    "5",
    "1",
    "0",
    "1",
    "500 EUR",
    "PAID | Офлайн-студия в Мармарисе [5 дней пн-пт] | Трансфер DLM включен"
  ],
  [
    "22.05.2026, 18:10",
    "Светлана Кузнецова",
    "'+79035554433 | svetlana.kuznetsova@mail.ru",
    "19.06.2027",
    "26.06.2027",
    "7",
    "1",
    "0",
    "1",
    "1500 EUR",
    "HOLD | Поток 2 ретрита [Приватная спальня 1500 €] | Удержание 24ч HOLD"
  ]
];

const MASTER_CALENDAR_ROWS = [
  [
    "01.01.2026",
    "31.12.2027",
    "Настройки",
    "1100|EUR|5|14|6|24|1|instant|progressive|09:00|17:00",
    "Базовый тариф ретрита 1100 EUR, квота 6 участниц, студия 09:00-17:00",
    "Vasilisa Borovikova",
    "16.11.2026, 09:00:00"
  ],
  [
    "01.05.2027",
    "08.05.2027",
    "Цена",
    "1100",
    "Поток 1: Весенний кутюрный арт-отпуск в Турции [квота 6 мест, свободно 5 из 6]",
    "Vasilisa Borovikova",
    "16.11.2026, 10:05:00"
  ],
  [
    "19.06.2027",
    "26.06.2027",
    "Цена",
    "1100",
    "Поток 2: Летний кутюрный арт-отпуск в Турции [квота 6 мест, свободно 5 из 6]",
    "Vasilisa Borovikova",
    "16.11.2026, 10:09:00"
  ],
  [
    "18.09.2027",
    "25.09.2027",
    "Цена",
    "1100",
    "Поток 3: Бархатный сезон арт-отпуска в Турции [квота 6 мест, свободно 6 из 6]",
    "Vasilisa Borovikova",
    "16.11.2026, 10:15:00"
  ],
  [
    "23.10.2027",
    "30.10.2027",
    "Цена",
    "1100",
    "Поток 4: Осенний кутюрный арт-отпуск в Турции [квота 6 мест, свободно 6 из 6]",
    "Vasilisa Borovikova",
    "16.11.2026, 10:20:00"
  ],
  [
    "09.06.2026",
    "13.06.2026",
    "Блокировка",
    "BOOKED",
    "Офлайн-студия в Мармарисе: занято [Maria Dubois, 5 дней пн-пт]",
    "Vasilisa Borovikova",
    "16.11.2026, 10:25:00"
  ]
];

const MASTER_ACCOUNTS_ROWS = [
  [
    "15.01.2026, 09:00:00",
    "Василиса Боровикова [Vasilisa Borovikova]",
    "'+905455983211",
    "vasilisa.luneville@gmail.com",
    "MASTER_COUTURE_2026",
    "Нет",
    "Нет",
    "Нет",
    "Верифицирован",
    "15.01.2026, 10:05:00",
    "Нет",
    "Активен",
    "VL-USER-1000"
  ],
  [
    "10.05.2026, 12:15:00",
    "Анна Смирнова",
    "'+79161234567",
    "anna.smirnova@gmail.com",
    "student_anna_2026",
    "Нет",
    "Нет",
    "Нет",
    "Верифицирован",
    "10.05.2026, 12:20:00",
    "Нет",
    "Активен",
    "VL-USER-0001"
  ],
  [
    "18.05.2026, 14:30:00",
    "Елена Морозова",
    "'+79219876543",
    "elena.morozova@yahoo.com",
    "student_elena_2026",
    "Нет",
    "Нет",
    "Нет",
    "Верифицирован",
    "18.05.2026, 14:35:00",
    "Нет",
    "Активен",
    "VL-USER-0002"
  ],
  [
    "21.05.2026, 16:40:00",
    "Maria Dubois",
    "'+33612345678",
    "maria.dubois@paris.fr",
    "student_maria_2026",
    "Нет",
    "Нет",
    "Нет",
    "Верифицирован",
    "21.05.2026, 16:45:00",
    "Нет",
    "Активен",
    "VL-USER-0003"
  ],
  [
    "22.05.2026, 18:09:00",
    "Светлана Кузнецова",
    "'+79035554433",
    "svetlana.kuznetsova@mail.ru",
    "client_svetlana_2026",
    "Нет",
    "Нет",
    "Нет",
    "Верифицирован",
    "22.05.2026, 18:15:00",
    "Нет",
    "Активен",
    "VL-USER-0004"
  ]
];

const MASTER_ORDERS_ROWS = [
  [
    "15.05.2026, 12:20",
    "Анна Смирнова | '+79161234567 | anna.smirnova@gmail.com",
    "Мастер-класс",
    "10 EUR [1000 RUB]",
    "PAID",
    "VL-MK-LAVENDER | МК Ветка лаванды на органзе | Доступ выдан: https://t.me/+vl_lavender_couture"
  ],
  [
    "15.05.2026, 12:35",
    "Анна Смирнова | '+79161234567 | anna.smirnova@gmail.com",
    "Онлайн-наставничество",
    "200 EUR [20000 RUB]",
    "PAID",
    "VL-MENTOR-ONLINE | Основы люневильской вышивки [16 уроков + 6 мес ДЗ] | Активно до 15.11.2026"
  ],
  [
    "18.05.2026, 14:40",
    "Елена Морозова | '+79219876543 | elena.morozova@yahoo.com",
    "Мастер-класс",
    "10 EUR [1000 RUB]",
    "PAID",
    "VL-MK-MIMOSA | МК Мимоза - 4 варианта | Доступ выдан: https://t.me/+vl_mimosa_couture"
  ],
  [
    "21.05.2026, 16:50",
    "Maria Dubois | '+33612345678 | maria.dubois@paris.fr",
    "Офлайн-наставничество",
    "500 EUR",
    "PAID",
    "VL-MENTOR-OFFLINE | 5 дней в студии Мармариса [09-13.06.2026] | Трансфер DLM подтвержден"
  ],
  [
    "22.05.2026, 18:25",
    "Светлана Кузнецова | '+79035554433 | svetlana.kuznetsova@mail.ru",
    "Бутик : В наличии",
    "85 EUR",
    "PAID",
    "VL-BOUTIQUE-BROOCH-LAVENDER | Кутюрная брошь Лаванда Haute Couture | Трек: TR9845210984PTT"
  ],
  [
    "23.05.2026, 11:10",
    "Светлана Кузнецова | '+79035554433 | svetlana.kuznetsova@mail.ru",
    "BESPOKE_INQUIRY",
    "250 EUR",
    "HOLD",
    "VL-BOUTIQUE-BESPOKE | Индивидуальный заказ: вечерний клатч с вышивкой синелью и пайетками"
  ]
];

const MASTER_ACCESS_ROWS = [
  [
    "ACC-001",
    "Telegram-канал",
    "🌿 МК Вышивка иглой: аппликация «Ветка лаванды» на органзе",
    "https://t.me/+vl_lavender_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Перейдите по персональной ссылке-приглашению в закрытый Telegram-канал мастер-класса «Ветка лаванды». Все макро-уроки и схема доступны навсегда.",
    "Join the private Telegram channel for the Lavender Branch workshop via the invite link. Lifetime access to all macro videos and patterns.",
    "Davet bağlantısı ile Lavanta Dalı özel Telegram kanalına katılın. Tüm makro derslere ömür boyu erişim.",
    "МК Лаванда 10 €"
  ],
  [
    "ACC-002",
    "Telegram-канал",
    "🌼 МК «Мимоза» - 4 варианта вышивки одной веточки",
    "https://t.me/+vl_mimosa_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Вступите в закрытый Telegram-канал с 4 подробными видеоуроками различных техник вышивки веточки мимозы.",
    "Join the private Telegram channel featuring 4 video lessons on different mimosa embroidery techniques.",
    "4 farklı mimoza nakış tekniği dersini içeren özel Telegram kanalına katılın.",
    "МК Мимоза 10 € / 1000 ₽"
  ],
  [
    "ACC-003",
    "Telegram-канал",
    "🎇 МК «Фейерверк» [пайетки, бисер, стеклярус]",
    "https://t.me/+vl_firework_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Доступ к закрытому каналу мастер-класса «Фейерверк» с макросъемкой динамичной вышивки пайетками и стеклярусом.",
    "Access the private Fireworks workshop channel with macro lessons on sequin and bugle bead work.",
    "Payet ve boru boncuklarla Havai Fişek atölyesi özel kanalına erişim.",
    "МК Фейерверк 15 €"
  ],
  [
    "ACC-004",
    "Telegram-канал",
    "🖼 МК «Оформление вышивки в рамку»",
    "https://t.me/+vl_framing_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Уроки профессиональной натяжки тонкой органзы и оформления готовой кутюрной вышивки в багет и раму.",
    "Lessons on professional stretching of sheer organza and framing finished couture embroidery.",
    "Şeffaf organze gerdirme ve bitmiş nakışları profesyonel çerçeveleme dersleri.",
    "МК Оформление в рамку 10 €"
  ],
  [
    "ACC-005",
    "Telegram-канал",
    "❄️ МК «Зимняя сказка» [синель, канитель, кристаллы]",
    "https://t.me/+vl_winter_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Доступ к урокам праздничной кутюрной вышивки шелковой синелью, канителью и кристаллами.",
    "Access lessons on festive haute couture embroidery with silk chenille, bullion wire, and crystals.",
    "İpek şönil, tırtıl tel ve kristallerle Kış Masalı nakış derslerine erişim.",
    "МК Зимняя сказка 15 €"
  ],
  [
    "ACC-006",
    "Личный чат ДЗ",
    "✨ Онлайн-наставничество: Личный чат разбора видео ДЗ [6 мес]",
    "https://t.me/vasilisa_luneville",
    "mailto:vasilisa.luneville@gmail.com",
    "180 дней [6 мес] / ACTIVE",
    "Отправляйте короткие видео вашей вышивки на раме по 20-30 секунд в личный чат с Василисой или через форму кабинета ученицы для детального разбора.",
    "Send short 20-30 second videos of your stitching on the frame to Vasilisa in personal chat or via the student cabinet for detailed review.",
    "Kasnaktaki çalışmanızın 20-30 saniyelik videolarını detaylı inceleme için Vasilisa'ya gönderin.",
    "Обратная связь 6 мес"
  ],
  [
    "ACC-007",
    "Telegram-канал",
    "✨ Онлайн-наставничество: База 16 макро-уроков люневильской вышивки",
    "https://t.me/+vl_mentorship_16lessons",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Полное собрание из 16 пошаговых видеоуроков курса «Основы люневильской вышивки» с доступом навсегда.",
    "Complete library of 16 step-by-step macro video lessons for 'Luneville Embroidery Fundamentals' with lifetime access.",
    "'Luneville Nakış Temelleri' 16 adımlı makro video ders arşivine ömür boyu erişim.",
    "Курс 16 уроков 200 €"
  ],
  [
    "ACC-008",
    "Telegram-канал",
    "🍋 Кутюрный арт-отпуск в Турции и трансфер DLM",
    "https://t.me/limonnavillevturkey",
    "https://wa.me/905455983211",
    "Бессрочно / ACTIVE",
    "Официальный канал участниц арт-отпусков на горной вилле в Турции. Координация рейсов в аэропорт Даламан [DLM] по тел. +90 545 598 32 11.",
    "Official channel for Turkey mountain villa art retreat participants. Dalaman Airport [DLM] flight coordination via +90 545 598 32 11.",
    "Türkiye dağ villası sanat tatili katılımcı kanalı. DLM havalimanı transfer koordinasyonu: +90 545 598 32 11.",
    "Ретриты 2027 [6 мест]"
  ]
];

const MASTER_GUIDE_ACCESS_ROWS = [
  [
    "15.05.2026",
    "Анна Смирнова | '+79161234567 | anna.smirnova@gmail.com",
    "VL-MK-LAVENDER",
    "🌿 МК Вышивка иглой: аппликация «Ветка лаванды»",
    "Мастер-класс",
    "PAID",
    "VL-TOK-LAV-0001",
    "Бессрочно",
    "Активен"
  ],
  [
    "15.05.2026",
    "Анна Смирнова | '+79161234567 | anna.smirnova@gmail.com",
    "VL-MENTOR-ONLINE",
    "✨ Индивидуальное наставничество «Основы люневильской вышивки» [16 уроков]",
    "Онлайн-наставничество",
    "PAID",
    "VL-TOK-MNT-0001",
    "15.11.2026 [6 мес ДЗ | Урок 6/16]",
    "Активен"
  ],
  [
    "18.05.2026",
    "Елена Морозова | '+79219876543 | elena.morozova@yahoo.com",
    "VL-MK-MIMOSA",
    "🌼 МК «Мимоза» - 4 варианта вышивки одной веточки",
    "Мастер-класс",
    "PAID",
    "VL-TOK-MIM-0002",
    "Бессрочно",
    "Активен"
  ],
  [
    "21.05.2026",
    "Maria Dubois | '+33612345678 | maria.dubois@paris.fr",
    "VL-MENTOR-OFFLINE",
    "✨ Офлайн-наставничество в студии в Мармарисе [5 дней]",
    "Офлайн-наставничество",
    "PAID",
    "VL-TOK-STD-0003",
    "13.06.2026 [Студия Мармарис]",
    "Активен"
  ]
];

const MASTER_TASKS_ROWS = [
  [
    "TSK-001",
    "16.11.2026, 09:00",
    "Секретарь",
    "Проверка 20-30-секундных видео домашних заданий учениц курса «Основы люневильской вышивки» [16 уроков] в чате",
    "В работе",
    "https://t.me/vasilisa_luneville",
    "Василиса Боровикова"
  ],
  [
    "TSK-002",
    "16.11.2026, 11:30",
    "Секретарь",
    "Комплектация наборов натуральной шелковой органзы, французских пайеток и японского бисера к Потоку 1 арт-отпуска [1-8 мая 2027]",
    "В работе",
    "https://t.me/limonnavillevturkey",
    "Василиса Боровикова и Юлия Озмен"
  ],
  [
    "TSK-003",
    "16.11.2026, 13:00",
    "Бухгалтер",
    "Сверка оплат по мастер-классам «Ветка лаванды» и «Мимоза» [EUR / RUB] и формирование ведомости e-Arşiv Fatura GİB",
    "Выполнена",
    "PlatformVasilisaLuneville_DB/INVOICES_GIB",
    "ИИ-Бухгалтер"
  ],
  [
    "TSK-004",
    "16.11.2026, 14:45",
    "Секретарь",
    "Согласование времени прилета в аэропорт Даламан [DLM] и индивидуального трансфера для участниц арт-отпуска и студии в Мармарисе",
    "В работе",
    "https://t.me/limonnavillevturkey",
    "Марина и Василиса"
  ],
  [
    "TSK-005",
    "16.11.2026, 16:20",
    "Юрист",
    "Проверка актуальности публичной оферты на индивидуальный пошив в бутике [Bespoke Atelier] и политики KVKK / GDPR",
    "Выполнена",
    "PlatformVasilisaLuneville_DB/CONTRACTS_OFFERS",
    "ИИ-Юрист"
  ],
  [
    "TSK-006",
    "16.11.2026, 18:00",
    "Секретарь",
    "Отправка готовой кутюрной броши «Лаванда Haute Couture» международной почтой и передача трек-номера клиентке",
    "Выполнена",
    "TR9845210984PTT",
    "Василиса Боровикова"
  ]
];

const MASTER_KNOWLEDGE_GRAPH_ROWS = [
  [
    "KG-001",
    "Техника вышивки",
    "PUBLIC",
    "ALL",
    "SERVICES",
    "Люневильский крючок №70, №80, №90 и тамбурный стежок: базовая техника домов высокой моды Парижа. Изучается в 16 уроках онлайн-наставничества [200 €] и на 5-дневном интенсиве в Мармарисе [500 €].",
    "ACTIVE"
  ],
  [
    "KG-002",
    "Техника вышивки",
    "PUBLIC",
    "ALL",
    "SERVICES",
    "Вышивка иглой по прозрачной шелковой органзе: позволяет создавать невесомые объемные аппликации и броши на обычных пяльцах без рамы. Базовые МК: «Ветка лаванды» [10 €] и «Мимоза - 4 варианта» [10 € / 1000 ₽].",
    "ACTIVE"
  ],
  [
    "KG-003",
    "Материалы от кутюр",
    "PUBLIC",
    "ALL",
    "SERVICES",
    "Материалы школы: натуральная шелковая органза, бархат, французские пайетки на нити, японский и чешский бисер, стеклярус, шелковая синель и канитель.",
    "ACTIVE"
  ],
  [
    "KG-004",
    "Методика ДЗ",
    "PUBLIC",
    "ALL",
    "GUIDE_ACCESS",
    "Формат обратной связи на онлайн-наставничестве [200 €]: 6 месяцев [180 дней] проверки коротких видео работы ученицы по 20-30 секунд лично Василисой с разбором угла наклона крючка и натяжения ткани.",
    "ACTIVE"
  ],
  [
    "KG-005",
    "Офлайн-студия Мармарис",
    "PUBLIC",
    "ALL",
    "CALENDAR",
    "Индивидуальное 5-дневное обучение в студии Василисы в Мармарисе [пн-пт с 09:00 до 17:00, 500 €]. Включает все профессиональные рамы, материалы, помощь с отелем и бесплатный трансфер из аэропорта Даламан [DLM].",
    "ACTIVE"
  ],
  [
    "KG-006",
    "Арт-отпуск в Турции 2027",
    "PUBLIC",
    "ALL",
    "GUIDES",
    "Кутюрный арт-отпуск [8 дней / 7 ночей] на горной вилле в провинции Мугла в 30 мин от DLM. Группа строго 6 участниц. 4 потока 2027: 1-8 мая, 19-26 июня, 18-25 сентября, 23-30 октября. Тарифы: 1100 € / 1200 € / 1500 €.",
    "ACTIVE"
  ],
  [
    "KG-007",
    "Команда и маршрут ретрита",
    "PUBLIC",
    "ALL",
    "HOME",
    "Авторы ретрита: Василиса Боровикова и Юлия Озмен; хозяйка виллы и шеф-повар: Марина [3-разовое домашнее питание]. Выездной экскурсионный день: Акьяка, река Азмак, Дальян и черепаший пляж Изтузу.",
    "ACTIVE"
  ],
  [
    "KG-008",
    "Бутик и Bespoke Atelier",
    "PUBLIC",
    "ALL",
    "ORDERS",
    "Бутик Vasilisa.luneville: готовые кутюрные броши, расшитые воротнички и вечерние сумочки [отправка за 2-3 дня по миру] и индивидуальный заказ по эскизу [Bespoke Atelier, срок 14-30 рабочих дней].",
    "ACTIVE"
  ],
  [
    "KG-009",
    "Закрытые инвайты уроков",
    "CONFIDENTIAL",
    "PAID_STUDENT",
    "ACCESS",
    "Прямые ссылки-приглашения в закрытые Telegram-каналы мастер-классов и 16 видеоуроков выдаются автоматически только после подтверждения оплаты заказа [статус PAID / CONFIRMED].",
    "ACTIVE"
  ]
];

module.exports = {
  MASTER_ABOUT_SECTIONS,
  MASTER_HOME_ROWS,
  MASTER_HOME_MAP,
  MASTER_SETTINGS_ROWS,
  MASTER_TEMPLATES_ROWS,
  MASTER_GALLERY_ROWS,
  MASTER_SERVICES_ROWS,
  MASTER_GUIDES_ROWS,
  MASTER_LEGAL_ROWS,
  MASTER_BOOKINGS_ROWS,
  MASTER_CALENDAR_ROWS,
  MASTER_ACCOUNTS_ROWS,
  MASTER_ORDERS_ROWS,
  MASTER_ACCESS_ROWS,
  MASTER_GUIDE_ACCESS_ROWS,
  MASTER_TASKS_ROWS,
  MASTER_KNOWLEDGE_GRAPH_ROWS,
  buildHomeDerivedCollections
};
