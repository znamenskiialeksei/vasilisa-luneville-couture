// ==============================================================================
// НЕПРИКОСНОВЕННЫЙ МАСТЕР-ЭТАЛОН БАЗЫ ДАННЫХ И КОНТЕНТА VASILISA.LUNEVILLE
// Файл: utils/masterSeedContent.js
// Назначение: Эталонный источник истины [SSOT] для всех 15 листов Google Таблиц.
// Защищен от случайного затирания. Обеспечивает 100% самоисцеление при удалении листов.
// Сгенерировано автоматически через scripts/save-master-seed.js
// Дата фиксации: 2026-11-16T23:24:05.867Z
// 100% Zero-Brackets & Zero-Emdash Стандарт.
// ==============================================================================

const { buildHomeDerivedCollections } = require('./homeDerivedCollections');

const MASTER_ABOUT_SECTIONS = [
  {
    "id": "1",
    "title": {
      "ru": "1. Направление 0: Главный манифест и история бренда Vasilisa.luneville с 2015 года",
      "en": "1. Direction 0: The main manifesto and history of the Vasilisa.luneville brand since 2015",
      "tr": "1. Yön 0: Vasilisa.luneville markasının 2015'ten beri süregelen ana manifestosu ve tarihi."
    },
    "text": {
      "ru": "Vasilisa.luneville - вышивка от кутюр - это международная онлайн-школа кутюрной и люневильской вышивки, студия индивидуального наставничества в Мармарисе, организатор кутюрных арт-отпусков в Турции и бутик авторских изделий ручной работы.\n\nОснователь и ведущий мастер: Василиса Боровикова [Боровикова / Vasilisa Borovikova] - художник по вышивке от кутюр с опытом преподавания и создания коллекций с 2015 года.\nСоавтор арт-отпусков: Юлия Озмен [Yulia Ozmen] - кутюрный вышивальщик и основатель бренда эксклюзивных сумочек [преподает с 2018 года].\nПринимающая сторона ретритной виллы: Марина - хозяйка уединенной горной виллы в провинции Мугла и шеф домашней средиземноморской гастрономии.\n\nКонтакты и реквизиты:\n* Локация студии: Мармарис, провинция Мугла, Турция [Marmaris, Muğla, Türkiye].\n* Локация арт-отпусков: Горная вилла в провинции Мугла [30 минут от международного аэропорта Даламан DLM].\n* Телефон и WhatsApp РФ: +7 921 304-78-92.\n* Телефон и WhatsApp Турция: +90 545 598 32 11.\n* Официальный Email: vasilisa.luneville@gmail.com.\n* Telegram-канал арт-отпусков: https://t.me/limonnavillevturkey.",
      "en": "Vasilisa.luneville - Haute Couture Embroidery is an international online school of couture and Lunéville embroidery, a one-on-one mentoring studio in Marmaris, an organizer of couture art vacations in Turkey, and a boutique of original handmade items.\n\nFounder and Lead Artist: Vasilisa Borovikova - a couture embroidery artist with experience teaching and creating collections since 2015.\nArt Vacation Co-Creator: Yulia Ozmen - a couture embroiderer and founder of an exclusive handbag brand (teaching since 2018).\nRetreat Villa Host: Marina - the owner of a secluded mountain villa in the Muğla province and chef of homemade Mediterranean cuisine.\n\nContact information:\n* Studio location: Marmaris, Muğla Province, Turkey [Marmaris, Muğla, Türkiye].\n* Art Vacations location: Mountain villa in Muğla Province [30 minutes from Dalaman International Airport DLM].\n* Phone and WhatsApp (Russia): +7 921 304-78-92.\n* Phone and WhatsApp (Turkey): +90 545 598 32 11.\n* Official email: vasilisa.luneville@gmail.com.\n* Art Vacations Telegram channel: https://t.me/limonnavillevturkey.",
      "tr": "Vasilisa.luneville - Haute Couture Nakış, uluslararası bir online haute couture ve Lunéville nakış okulu, Marmaris'te bire bir mentorluk stüdyosu, Türkiye'de haute couture sanat tatilleri düzenleyen bir kuruluş ve orijinal el yapımı ürünler satan bir butiktir.\n\nKurucu ve Baş Sanatçı: Vasilisa Borovikova - 2015 yılından beri koleksiyonlar tasarlayan ve öğreten deneyimli bir haute couture nakış sanatçısı.\nSanat Tatili Ortak Yaratıcısı: Yulia Özmen - haute couture nakış sanatçısı ve özel bir el çantası markasının kurucusu (2018'den beri ders veriyor).\nDinlenme Villası Ev Sahibi: Marina - Muğla ilinde tenha bir dağ villasının sahibi ve ev yapımı Akdeniz mutfağı şefi.\n\nİletişim bilgileri:\n* Stüdyo konumu: Marmaris, Muğla ili, Türkiye [Marmaris, Muğla, Türkiye].\n\n* Sanat Tatilleri konumu: Muğla ilinde dağ villası [Dalaman Uluslararası Havalimanı'na 30 dakika].\n* Telefon ve WhatsApp (Rusya): +7 921 304-78-92.\n\n* Telefon ve WhatsApp (Türkiye): +90 545 598 32 11.\n* Resmi e-posta: vasilisa.luneville@gmail.com.\n\n* Sanat Tatilleri Telegram kanalı: https://t.me/limonnavillevturkey."
    }
  },
  {
    "id": "2",
    "title": {
      "ru": "2. Направление 1: Обучающие онлайн мастер-классы с бессрочным доступом",
      "en": "2. Direction 1: Online educational master classes with unlimited access",
      "tr": "2. Yön 1: Sınırsız erişimli çevrimiçi eğitim ustalık sınıfları"
    },
    "text": {
      "ru": "Пять практических онлайн мастер-классов в закрытых Telegram-каналах с пошаговой макросъемкой и доступом навсегда:\n1. МК «Ветка лаванды» [10 € / 1000 ₽]: вышивка иглой по прозрачной шелковой органзе, создание нежной объемной аппликации 10x15 см для одежды и брошей. Идеально для старта с нуля на обычных пяльцах.\n2. МК «Мимоза - 4 варианта» [10 € / 1000 ₽]: изучение четырех различных фактурных техник вышивки солнечной веточки мимозы бисером, пайетками и мулине.\n3. МК «Фейерверк» [15 € / 1500 ₽]: динамичная композиция с французскими пайетками, стеклярусом и бисером.\n4. МК «Оформление вышивки в рамку» [10 € / 1000 ₽]: секреты профессионально�� натяжки тонких тканей и багетного оформления готовых кутюрных работ.\n5. МК «Зимняя сказка» [15 € / 1500 ₽]: работа с шелковой синелью, канителью и кристаллами в праздничной технике высокой моды.",
      "en": "Five practical online workshops in private Telegram channels with step-by-step macro photography and lifetime access:\n1. Workshop \"Lavender Branch\" [€10 / ₽1,000]: needlepoint embroidery on sheer silk organza, creating a delicate 10x15 cm 3D appliqué for clothing and brooches. Ideal for starting from scratch on a regular embroidery hoop.\n2. Workshop \"Mimosa - 4 Variations\" [€10 / ₽1,000]: learning four different textured techniques for embroidering a sunny mimosa branch using beads, sequins, and floss.\n3. Workshop \"Fireworks\" [€15 / ₽1,500]: a dynamic composition with French sequins, bugle beads, and seed beads.\n4. Workshop \"Framing Embroidery\" [€10 / ₽1,000]: secrets of professionally stretching fine fabrics and framing finished couture pieces.\n5. Workshop \"Winter's Tale\" [€15 / ₽1,500]: working with silk chenille, gold thread, and crystals using festive haute couture techniques.",
      "tr": "Özel Telegram kanallarında adım adım makro fotoğrafçılık ve ömür boyu erişim içeren beş pratik çevrimiçi atölye çalışması:\n1. \"Lavanta Dalı\" Atölyesi [€10 / ₽1.000]: İnce ipek organza üzerine iğne oyası nakışı, giysiler ve broşlar için narin 10x15 cm 3 boyutlu aplike oluşturma. Normal bir nakış kasnağında sıfırdan başlamak için idealdir.\n\n2. \"Mimoza - 4 Varyasyon\" Atölyesi [€10 / ₽1.000]: Boncuk, payet ve iplik kullanarak güneşli bir mimoza dalını işlemek için dört farklı doku tekniğini öğrenme.\n\n3. \"Havai Fişekler\" Atölyesi [€15 / ₽1.500]: Fransız payetleri, boru boncukları ve tohum boncuklarıyla dinamik bir kompozisyon.\n4. \"Nakış Çerçeveleme\" Atölyesi [10 € / 1.000 ₽]: İnce kumaşları profesyonelce germenin ve bitmiş haute couture parçalarını çerçevelemenin sırları.\n5. \"Kış Masalı\" Atölyesi [15 € / 1.500 ₽]: İpek şönil, altın iplik ve kristallerle, şenlikli haute couture teknikleri kullanılarak çalışma."
    }
  },
  {
    "id": "3",
    "title": {
      "ru": "3. Направление 2: Индивидуальное кутюрное наставничество [Онлайн и Офлайн в Мармарисе]",
      "en": "3. Direction 2: Individual couture mentoring [Online and Offline in Marmaris]",
      "tr": "3. Yön 2: Bireysel haute couture mentorluğu [Marmaris'te Çevrimiçi ve Çevrimdışı]"
    },
    "text": {
      "ru": "Два флагманских формата персональной постановки руки и глубокого освоения люневильской вышивки:\n\n1. Онлайн-наставничество «Основы люневильской вышивки» [200 €]:\n* 16 подробных макро-видеоуроков [от запялки органзы в раму и базового тамбурного стежка крючком №70-90 до вышивки пайетками, бисером и синелью с изнанки].\n* Бессрочный доступ ко всем 16 видеоурокам.\n* 6 месяцев [180 дней] индивидуального сопровождения Василисы в личном чате: ученица отправляет короткие видео своей работы по 20-30 секунд, а мастер детально разбирает каждое движение руки, натяжение нити и поворот крючка.\n\n2. Офлайн-наставничество в студии в Мармарис�� [500 €]:\n* 5 полных учебных дней [понедельник - пятница с 09:00 до 17:00] один на один с Василисой в светлой мастерской в Мармарисе.\n* Все профессиональные кутюрные рамы, люневильские крючки, шелковая органза, французские пайетки и бисер предоставляются в студии.\n* Индивидуальная встреча и трансфер из аэропорта Даламан [DLM] и помощь в подборе комфортного отеля у моря.",
      "en": "Two flagship formats for personalized hand training and in-depth mastery of Lunéville embroidery:\n\n1. Online mentoring \"Basics of Lunéville Embroidery\" [€200]:\n* 16 detailed macro video lessons [from hooping organza in a frame and the basic chain stitch with #70-90 crochet hooks to embroidering sequins, beads, and chenille on the reverse side].\n* Unlimited access to all 16 video lessons.\n* 6 months [180 days] of individual support from Vasilisa in a private chat: the student sends short 20-30 second videos of her work, and the master carefully analyzes every hand movement, thread tension, and hook turn.\n\n2. Offline Mentoring at the Marmaris Studio [€500]:\n* 5 full days of one-on-one instruction [Monday - Friday, 9:00 AM - 5:00 PM] with Vasilisa in a bright studio in Marmaris.\n* All professional couture frames, Lunéville hooks, silk organza, French sequins, and beads are provided in the studio.\n* Individual pick-up and transfer from Dalaman Airport [DLM] and assistance in finding a comfortable seaside hotel.",
      "tr": "Lunéville nakışında kişiselleştirilmiş el eğitimi ve derinlemesine ustalık için iki amiral gemisi format:\n\n1. Çevrimiçi Mentorluk \"Lunéville Nakışının Temelleri\" [€200]:\n* 16 detaylı makro video dersi [organzayı çerçeveye germekten ve #70-90 tığ ile temel zincir dikişinden, pul, boncuk ve şönil işlemeye kadar].\n\n* 16 video dersinin tamamına sınırsız erişim.\n\n* Vasilisa'dan özel bir sohbette 6 ay [180 gün] bireysel destek: öğrenci çalışmasının 20-30 saniyelik kısa videolarını gönderir ve usta her el hareketini, iplik gerginliğini ve tığ dönüşünü dikkatlice analiz eder.\n\n2. Marmaris Stüdyosunda Yüz Yüz Mentorluk [€500]:\n* Marmaris'teki aydınlık bir stüdyoda Vasilisa ile 5 tam gün bire bir eğitim [Pazartesi - Cuma, 09:00 - 17:00].\n* Stüdyoda tüm profesyonel haute couture çerçeveler, Lunéville kancaları, ipek organza, Fransız payetleri ve boncuklar mevcuttur.\n\n* Dalaman Havalimanı'ndan (DLM) bireysel karşılama ve transfer hizmeti ile rahat bir sahil oteli bulma konusunda yardım sağlanmaktadır."
    }
  },
  {
    "id": "4",
    "title": {
      "ru": "4. Направление 3: Кутюрные арт-отпуска на горной вилле в Турции [Сезон 2027]",
      "en": "4. Direction 3: Couture art holidays at a mountain villa in Turkey [Season 2027]",
      "tr": "4. Yön 3: Türkiye'de bir dağ villasında haute couture sanat tatili [2027 Sezonu]"
    },
    "text": {
      "ru": "Кутюрный арт-отпуск в Турции - это 8 дней / 7 ночей творчества, вдохновения и отдыха в камерной группе строго до 6 участниц на приватной вилле в горах провинции Мугла [30 минут от аэропорта Даламан DLM].\n\nКоманда ретрита: наставники по кутюрной вышивке Василиса Боровикова и Юлия Озмен, хозяйка виллы и шеф-повар Марина.\n\nРасписание 4 потоков сезона 2027 года [по 6 мест в потоке]:\n* Поток 1: 1 мая - 8 мая 2027 г.\n* Поток 2: 19 июня - 26 июня 2027 г.\n* Поток 3: 18 сентября - 25 сентября 2027 г.\n* Поток 4: 23 октября - 30 октября 2027 г.\n\nТарифы участия [всё включено, кроме авиабилетов]:\n* 1100 € - размещение на односпальной кровати в просторной двухместной спальне.\n* 1200 € - размещение на большой двуспальной кровати.\n* 1500 € - одноместное размещение в отдельной приватной спальне с санузлом.\n\nВ стоимость включено: проживание 7 ночей на вилле с бассейном и фруктовым садом, 3-разовое домашнее питание от Марины, 5 дней мастер-классов по вышивке в саду, все материалы и инструменты, индивидуальный трансфер из аэропорта DLM и выездной экскурсионный день [аутентичная Акьяка, прогулка по кристальной реке Азмак, Дальян и заповедный песчаный пляж Изтузу].",
      "en": "A couture art retreat in Turkey is 8 days/7 nights of creativity, inspiration, and relaxation in an intimate group of up to 6 participants at a private villa in the mountains of Muğla Province (30 minutes from Dalaman Airport).\n\nRetreat team: couture embroidery mentors Vasilisa Borovikova and Yulia Ozmen, and villa hostess and chef Marina.\n\nSchedule of the 4 streams of the 2027 season [6 spots per stream]:\n* Stream 1: May 1 - May 8, 2027\n* Stream 2: June 19 - June 26, 2027\n* Stream 3: September 18 - September 25, 2027\n* Stream 4: October 23 - October 30, 2027\n\nParticipation rates [all-inclusive, excluding airfare]:\n* €1,100 - accommodation in a single bed in a spacious double bedroom.\n* €1,200 - accommodation in a king-size bed.\n* €1,500 - single occupancy in a separate private bedroom with bathroom.\n\nThe price includes: 7 nights' accommodation in a villa with a pool and orchard, 3 meals a day home-cooked by Marina, 5 days of embroidery workshops in the garden, all materials and tools, private transfer from DLM airport and a day of excursions [authentic Akyaka, a walk along the crystal-clear Azmak River, Dalyan and the protected sandy beach of Iztuzu].",
      "tr": "Türkiye'de bir haute couture sanat inzivası, Muğla ilinin dağlarında (Dalaman Havalimanı'na 30 dakika mesafede) özel bir villada, en fazla 6 katılımcıdan oluşan samimi bir grupla 8 gün/7 gece süren yaratıcılık, ilham ve rahatlama dolu bir etkinliktir.\n\nİnziva ekibi: haute couture nakış eğitmenleri Vasilisa Borovikova ve Yulia Özmen ile villa ev sahibi ve şef Marina.\n\n2027 sezonunun 4 döneminin programı [her dönemde 6 yer]:\n* Dönem 1: 1 Mayıs - 8 Mayıs 2027\n* Dönem 2: 19 Haziran - 26 Haziran 2027\n* Dönem 3: 18 Eylül - 25 Eylül 2027\n* Dönem 4: 23 Ekim - 30 Ekim 2027\n\nKatılım ücretleri [her şey dahil, uçak bileti hariç]:\n* 1.100 € - geniş bir çift kişilik odada tek kişilik yatakta konaklama.\n* 1.200 € - çift kişilik yatakta konaklama.\n\n* 1.500 € - ayrı özel banyolu yatak odasında tek kişilik konaklama.\n\nFiyata dahil olanlar: Havuzlu ve meyve bahçeli bir villada 7 gece konaklama, Marina tarafından hazırlanan günde 3 öğün ev yapımı yemek, bahçede 5 gün nakış atölyesi, tüm malzeme ve aletler, DLM havaalanından özel transfer ve bir günlük gezi [otantik Akyaka, kristal berraklığındaki Azmak Nehri boyunca yürüyüş, Dalyan ve korunaklı İztuzu kumlu plajı]."
    }
  },
  {
    "id": "5",
    "title": {
      "ru": "5. Направление 4: Бутик кутюрных изделий «В наличии» и «Под заказ» [Bespoke Atelier]",
      "en": "5. Direction 4: Couture Boutique “In Stock” and “Made to Order” [Bespoke Atelier]",
      "tr": "5. Yön 4: Haute Couture Butik “Stokta” ve “Sipariş Üzerine” [Özel Dikim Atölyesi]"
    },
    "text": {
      "ru": "Ателье и бутик Vasilisa.luneville создает коллекционные аксессуары, украшения и вышивку на одежде в техниках парижских домов высокой моды:\n* Изделия в наличии: кутюрные броши на шелковой органзе и бархате, расшитые воротнички, вечерние сумочки и фермуары. Отправка по всему миру в течение 2-3 рабочих дней с трек-номером.\n* Изделия под заказ [Bespoke Atelier]: индивидуальная разработка эскиза, подбор палитры французских пайеток, японского бисера, кристаллов и шелковой синели под ваш образ. Срок создания - от 14 до 30 рабочих дней.\n* Юридическая и налоговая прозрачность: оформление заказов по официальной оферте, защита персональных данных KVKK № 6698 и GDPR, выставление электронных фактур e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
      "en": "The Vasilisa.luneville atelier and boutique creates collectible accessories, jewelry, and embroidery on clothing using the techniques of Parisian haute couture houses.\n* In stock: couture brooches on silk organza and velvet, embroidered collars, evening bags, and clasps. Worldwide shipping within 2-3 business days with a tracking number.\n* Made-to-order items [Bespoke Atelier]: custom sketch development, selection of a palette of French sequins, Japanese beads, crystals, and silk chenille to match your look. Production time: 14 to 30 business days.\n* Legal and tax transparency: processing orders through the official offer, personal data protection under KVKK No. 6698 and GDPR, issuing electronic invoices (e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi]).",
      "tr": "Vasilisa.luneville atölyesi ve butiği, Paris haute couture evlerinin tekniklerini kullanarak koleksiyonluk aksesuarlar, takılar ve giysiler üzerine nakışlar üretiyor.\n* Stokta: İpek organza ve kadife üzerine haute couture broşlar, işlemeli yakalar, gece çantaları ve tokalar. Takip numarası ile 2-3 iş günü içinde dünya çapında gönderim.\n\n* Sipariş üzerine üretilen ürünler [Özel Atölye]: Özel çizim geliştirme, görünümünüze uygun Fransız payetleri, Japon boncukları, kristaller ve ipek şönil paletinin seçimi. Üretim süresi: 14 ila 30 iş günü.\n\n* Yasal ve vergi şeffaflığı: Resmi teklif üzerinden siparişlerin işlenmesi, KVKK No. 6698 ve GDPR kapsamında kişisel verilerin korunması, elektronik faturaların düzenlenmesi (e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi])."
    }
  }
];

const MASTER_HOME_MAP = {
  "HERO_ATELIER": {
    "block": "Блок 1. Главный экран ателье",
    "key": "HERO_ATELIER",
    "desc": "Главный баннер / Первый экран сайта",
    "ru": "Vasilisa.luneville - школа и ателье кутюрной вышивки. Создавайте красоту своими руками с 2015 года. От первых стежков до высокой моды.",
    "en": "Vasilisa.luneville is a couture embroidery school and studio. Create beauty with your own hands since 2015. From the first stitches to haute couture.",
    "tr": "Vasilisa.luneville, haute couture nakış okulu ve stüdyosudur. 2015'ten beri kendi ellerinizle güzellik yaratın. İlk dikişlerden haute couture'e.",
    "media": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "DIRECTION_CARDS": {
    "block": "Блок 2. Направления школы",
    "key": "DIRECTION_CARDS",
    "desc": "Карточки 4 направлений школы и бутика",
    "ru": "Онлайн мастер-классы [от 10 €], Индивидуальное онлайн-наставничество [200 €], Офлайн-студия в Мармарисе [500 €], Арт-отпуска в горах Турции [1100-1500 €], Бутик авторских изделий",
    "en": "Online master classes [from €10], Individual online mentoring [€200], Offline studio in Marmaris [€500], Art holidays in the mountains of Turkey [€1100-1500], Boutique of original products",
    "tr": "Çevrimiçi ustalık sınıfları [10 €'dan başlayan fiyatlarla], Bireysel çevrimiçi mentorluk [200 €], Marmaris'te yüz yüze stüdyo [500 €], Türkiye dağlarında sanat tatili [1100-1500 €], Orijinal ürünler butiği",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "MASTERCLASSES_SHOWCASE": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "MASTERCLASSES_SHOWCASE",
    "desc": "Секция каталога 5 онлайн МК",
    "ru": "Доступные онлайн МК: Ветка лаванды [10 €], Мимоза - 4 варианта [10 € / 1000 ₽], Фейерверк [15 €], Оформление в рамку [10 €], Зимняя сказка [15 €]. Доступ навсегда в Telegram.",
    "en": "Available online workshops: Lavender Branch [€10], Mimosa - 4 variations [€10 / 1000 ₽], Fireworks [€15], Framing [€10], Winter's Tale [€15]. Lifetime access on Telegram.",
    "tr": "Çevrimiçi olarak sunulan atölyeler: Lavanta Dalı [€10], Mimoza - 4 varyasyon [€10 / 1000 ₽], Havai Fişek [€15], Çerçeveleme [€10], Kış Masalı [€15]. Telegram üzerinden ömür boyu erişim.",
    "media": "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "ONLINE_MENTORSHIP": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "ONLINE_MENTORSHIP",
    "desc": "Презентация флагманского курса 16 уроков",
    "ru": "Индивидуальное наставничество «Основы люневильской вышивки» - 16 макро-видеоуроков, доступ навсегда и 6 месяцев личной обратной связи по 20-30 сек видео. 200 €.",
    "en": "Individual mentoring \"Basics of Lunéville Embroidery\" - 16 macro video lessons, lifetime access and 6 months of personal feedback (20-30 second videos). €200.",
    "tr": "\"Lunéville Nakışının Temelleri\" konulu bireysel mentorluk eğitimi - 16 makro video dersi, ömür boyu erişim ve 6 ay boyunca kişisel geri bildirim (20-30 saniyelik videolar). 200 €.",
    "media": "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "OFFLINE_STUDIO_MARMARIS": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "OFFLINE_STUDIO_MARMARIS",
    "desc": "Очное обучение в студии Мармариса",
    "ru": "5 дней в студии Мармариса [пн-пт 09:00-17:00]. Постановка руки, профессиональные рамы и материалы включены, помощь с отелем и трансфер из аэропорта Даламан DLM. 500 €.",
    "en": "5 days in a Marmaris studio [Mon-Fri 9:00-17:00]. Includes hand positioning, professional frames and materials, hotel assistance, and transfer from Dalaman DLM Airport. €500.",
    "tr": "Marmaris'te 5 günlük stüdyo çekimi [Pazartesi-Cuma 9:00-17:00]. El pozisyonu ayarlama, profesyonel çerçeve ve malzemeler, otel yardımı ve Dalaman DLM Havalimanı'ndan transfer dahildir. 500 €.",
    "media": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "ART_RETREAT_TURKEY": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "ART_RETREAT_TURKEY",
    "desc": "Презентация ретрита на горной вилле",
    "ru": "8 дней / 7 ночей на приватной горной вилле в провинции Мугла [30 мин от DLM]. Группа до 6 участниц, наставники Василиса Боровикова и Юлия Озмен, шеф Марина. Выезд в Акьяку, реку Азмак, Дальян и пляж Изтузу.",
    "en": "8 days / 7 nights at a private mountain villa in Muğla Province [30 minutes from DLM]. Group of up to 6 participants, guided by Vasilisa Borovikova and Yulia Ozmen, and chef Marina. Departure to Akyaka, the Azmak River, Dalyan, and Iztuzu Beach.",
    "tr": "Muğla ilinde (DLM'ye 30 dakika mesafede) özel bir dağ villasında 8 gün / 7 gece konaklama. Vasilisa Borovikova ve Yulia Özmen rehberliğinde ve şef Marina eşliğinde en fazla 6 kişilik grup. Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı'na hareket.",
    "media": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "RETREAT_CALENDAR_BOOKING": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "RETREAT_CALENDAR_BOOKING",
    "desc": "Сетка 4 потоков 2027 и бронирование",
    "ru": "Потоки 2027 [по 6 мест]: 1-8 мая, 19-26 июня, 18-25 сентября, 23-30 октября. Тарифы: 1100 € [односп. кровать], 1200 € [двусп. кровать], 1500 € [отдельная спальня]. Удержание брони 24ч HOLD.",
    "en": "Streams 2027 [6 beds each]: May 1-8, June 19-26, September 18-25, October 23-30. Rates: €1100 [single bed], €1200 [double bed], €1500 [separate bedroom]. 24-hour HOLD.",
    "tr": "2027 Sezonu [her biri 6 yataklı]: 1-8 Mayıs, 19-26 Haziran, 18-25 Eylül, 23-30 Ekim. Fiyatlar: 1100 € [tek kişilik yatak], 1200 € [çift kişilik yatak], 1500 € [ayrı yatak odası]. 24 saat rezervasyon yapılabilir.",
    "media": "https://t.me/limonnavillevturkey",
    "status": "Вкл",
    "enabled": true
  },
  "BOUTIQUE_READY_AND_BESPOKE": {
    "block": "Блок 8. Бутик кутюрных изделий",
    "key": "BOUTIQUE_READY_AND_BESPOKE",
    "desc": "Каталог готовых изделий и ателье под заказ",
    "ru": "Авторские кутюрные броши, расшитые воротнички, вечерние сумочки в наличии и индивидуальный пошив под заказ [Bespoke Atelier] по вашему брифу с доставкой по всему миру.",
    "en": "Designer couture brooches, embroidered collars, evening bags in stock and custom-made to order [Bespoke Atelier] according to your brief with worldwide delivery.",
    "tr": "Tasarımcı haute couture broşlar, işlemeli yakalar, gece çantaları stokta mevcuttur ve isteğinize göre özel olarak [Özel Atölye] üretilir, dünya çapında teslimat yapılır.",
    "media": "https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "MACRO_GALLERY_PROCESS": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "MACRO_GALLERY_PROCESS",
    "desc": "Макросъемка стежков и материалов",
    "ru": "Макросъемка люневильского тамбурного стежка, работа с шелковой синелью, бархатом, прозрачной органзой, французскими пайетками и японским бисером.",
    "en": "Macro photography of Lunéville chain stitch, working with silk chenille, velvet, sheer organza, French sequins and Japanese beads.",
    "tr": "İpek şönil, kadife, ince organza, Fransız payetleri ve Japon boncuklarıyla yapılan Lunéville zincir dikişinin makro fotoğrafı.",
    "media": "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "HOW_LEARNING_WORKS": {
    "block": "Блок 10. Как проходит обучение",
    "key": "HOW_LEARNING_WORKS",
    "desc": "Пошаговая методика обучения",
    "ru": "Шаг 1: Выбор МК или наставничества и оплата -> Шаг 2: Мгновенный доступ к макро-урокам в Telegram и кабинете -> Шаг 3: Отправка 20-30 сек видео ДЗ -> Шаг 4: Бережный разбор Василисы и сертификат.",
    "en": "Step 1: Select a master class or mentoring and pay -> Step 2: Instant access to macro lessons in Telegram and your account -> Step 3: Send a 20-30 second video of your homework -> Step 4: Careful analysis by Vasilisa and a certificate.",
    "tr": "Adım 1: Bir master sınıfı veya mentorluk programı seçin ve ödeme yapın -> Adım 2: Telegram ve hesabınız üzerinden makro derslere anında erişim -> Adım 3: Ödevinizin 20-30 saniyelik bir videosunu gönderin -> Adım 4: Vasilisa tarafından dikkatli analiz ve sertifika.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "ABOUT_MASTERS": {
    "block": "Блок 11. О наставниках",
    "key": "ABOUT_MASTERS",
    "desc": "Команда мастеров школы и ретритов",
    "ru": "Василиса Боровикова - кутюрная вышивальщица с 2015 г., основатель студии в Мармарисе; Юлия Озмен - соавтор ретритов и дизайнер сумочек; Марина - хозяйка ретритной виллы и шеф-повар.",
    "en": "Vasilisa Borovikova, a couture embroiderer since 2015 and founder of a studio in Marmaris, is a co-author of retreats and handbag designer, and Marina is the owner of the retreat villa and a chef.",
    "tr": "2015'ten beri haute couture nakışçısı olan ve Marmaris'te bir stüdyo kuran Vasilisa Borovikova, inziva programlarının ortak yazarı ve çanta tasarımcısıdır; Marina ise inziva villasının sahibi ve şefidir.",
    "media": "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "STUDENT_REVIEWS_WORKS": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "STUDENT_REVIEWS_WORKS",
    "desc": "Работы выпускниц и отзывы",
    "ru": "Реальные работы учениц с нуля до кутюрных коллекций, отзывы об онлайн-наставничестве, мастер-классах Лаванда и Мимоза и арт-отпусках в Турции.",
    "en": "Real-life work by students from scratch to couture collections, reviews of online mentoring, Lavender and Mimosa master classes, and art vacations in Turkey.",
    "tr": "Öğrencilerin sıfırdan başlayarak haute couture koleksiyonlarına kadar uzanan gerçek hayattan çalışmaları, çevrimiçi mentorluk değerlendirmeleri, Lavender and Mimosa ustalık sınıfları ve Türkiye'deki sanat tatilleri.",
    "media": "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "KNOWLEDGE_PREVIEW": {
    "block": "Блок 13. База знаний и статьи",
    "key": "KNOWLEDGE_PREVIEW",
    "desc": "Энциклопедия вышивальщицы",
    "ru": "Гид по выбору люневильского крючка №70-90, правила барабанной запялки органзы в раму и пяльцы, таблица размеров пайеток и бисера, секреты чистой изнанки.",
    "en": "A guide to choosing a Lunéville crochet hook #70-90, rules for drum-hooping organza in a frame and hoop, a table of sequin and bead sizes, and secrets to a clean backing.",
    "tr": "Lunéville 70-90 numaralı tığ seçimine dair bir rehber, organza kumaşı çerçeve ve kasnakta germe kuralları, pul ve boncuk boyutları tablosu ve temiz bir arka yüzey elde etmenin sırları.",
    "media": "BookOpen",
    "status": "Вкл",
    "enabled": true
  },
  "AI_CURATOR_FAQ": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "AI_CURATOR_FAQ",
    "desc": "Интеллектуальный помощник Gemini 3.6 Flash",
    "ru": "ИИ-Куратор Gemini 3.6 Flash 24/7 поможет подобрать первый мастер-класс, рассчитает карту материалов в EUR/RUB/TRY/USD, примет бриф на индивидуальный заказ и ответит на вопросы по арт-отпуску.",
    "en": "Gemini 3.6 Flash, the AI ​​curator, is available 24/7 to help you find your first masterclass, calculate your material cost in EUR/RUB/TRY/USD, accept your custom order brief, and answer your art vacation questions.",
    "tr": "Yapay zekâ küratörü Gemini 3.6 Flash, ilk ustalık sınıfınızı bulmanıza, malzeme maliyetinizi EUR/RUB/TRY/USD cinsinden hesaplamanıza, özel sipariş özetinizi kabul etmenize ve sanat tatili sorularınızı yanıtlamanıza yardımcı olmak için 7/24 hizmetinizdedir.",
    "media": "MessageCircle",
    "status": "Вкл",
    "enabled": true
  },
  "CONTACTS_AND_STUDIO_MAP": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "CONTACTS_AND_STUDIO_MAP",
    "desc": "Контакты студии и карта Мармариса",
    "ru": "Мармарис, провинция Мугла, Турция [30-90 мин от аэропорта Даламан DLM]. Тел/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "en": "Marmaris, Mugla Province, Türkiye [30-90 min from Dalaman DLM Airport]. Tel/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "tr": "Marmaris, Muğla İli, Türkiye [Dalaman DLM Havaalanından 30-90 dk.]. Tel/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. E-posta: vasilisa.luneville@gmail.com. Telgraf: @limonnavillevturkey.",
    "media": "MapPin",
    "status": "Вкл",
    "enabled": true
  },
  "LEGAL_AND_FOOTER": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "LEGAL_AND_FOOTER",
    "desc": "Оферты, KVKK/GDPR и реквизиты",
    "ru": "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - вышивка от кутюр. Публичная оферта на обучение и арт-отпуска, политика KVKK / GDPR, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "en": "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - haute couture embroidery. Public offer for training and art holidays, KVKK / GDPR policy, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "tr": "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - haute couture nakış. Eğitim ve sanat tatilleri için kamuya açık teklif, KVKK / GDPR politikası, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "hero_title": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_title",
    "desc": "Главный заголовок страницы",
    "ru": "Vasilisa.luneville - школа кутюрной вышивки, наставничество в Мармарисе, арт-отпуска в Турции и бутик",
    "en": "Vasilisa.luneville - a couture embroidery school, mentoring in Marmaris, art vacations in Turkey, and a boutique",
    "tr": "Vasilisa.luneville - bir haute couture nakış okulu, Marmaris'te mentorluk, Türkiye'de sanat tatilleri ve bir butik.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "hero_subtitle": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_subtitle",
    "desc": "Подзаголовок главного экрана",
    "ru": "Онлайн мастер-классы от 10 € • Личное наставничество 16 уроков • Офлайн-интенсивы в Мармарисе • Кутюрные ретриты на вилле в Мугле",
    "en": "Online master classes from €10 • Personal mentoring 16 lessons • Offline intensives in Marmaris • Couture retreats at a villa in Mugla",
    "tr": "10 €'dan başlayan fiyatlarla çevrimiçi ustalık sınıfları • 16 derslik kişisel mentorluk • Marmaris'te yüz yüze yoğun eğitimler • Muğla'da bir villada haute couture inzivası",
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
    "en": "Master of couture embroidery since 2015.",
    "tr": "2015'ten beri haute couture nakış ustası.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "hero_location": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_location",
    "desc": "Локация в шапке",
    "ru": "Мармарис и горная вилла в Мугле, Турция [30 мин от DLM]",
    "en": "Marmaris and Mountain Villa in Mugla, Türkiye [30 min from DLM]",
    "tr": "Muğla'da Marmaris ve Dağ Villası, Türkiye [DLM'den 30 dakika]",
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
    "tr": "Paylaşmak",
    "media": "Share2",
    "status": "Вкл",
    "enabled": true
  },
  "hero_favorite_btn": {
    "block": "Блок 1. Главный экран ателье",
    "key": "hero_favorite_btn",
    "desc": "Кнопка В избранное",
    "ru": "В избранное",
    "en": "Add to favorites",
    "tr": "Favorilere ekle",
    "media": "Heart",
    "status": "Вкл",
    "enabled": true
  },
  "hero_image": {
    "block": "Блок 1. Гл��вный экран ателье",
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
    "en": "House of Couture Embroidery, School, and Retreats under the direction of Vasilisa Borovikova",
    "tr": "Vasilisa Borovikova'nın yönetimindeki Haute Couture Nakış Evi, Okulu ve Atölyeleri",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_specs_name": {
    "block": "Блок 2. Направления школы",
    "key": "host_specs_name",
    "desc": "Имена наставников",
    "ru": "Василиса Боровикова и Юлия Озмен",
    "en": "Vasilisa Borovikova and Yulia Ozmen",
    "tr": "Vasilisa Borovikova ve Yulia Özmen",
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
    "en": "Up to 6 participants per stream",
    "tr": "Her yayın akışına en fazla 6 katılımcı.",
    "media": "Users",
    "status": "Вкл",
    "enabled": true
  },
  "spec_bedrooms": {
    "block": "Блок 2. Направления школы",
    "key": "spec_bedrooms",
    "desc": "Количество онлайн МК и уроков",
    "ru": "5 онлайн МК + 16 уроков курса",
    "en": "5 online master classes + 16 course lessons",
    "tr": "5 çevrimiçi ustalık sınıfı + 16 ders içeriği",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "spec_beds": {
    "block": "Блок 2. Направления школы",
    "key": "spec_beds",
    "desc": "Форматы наставничества",
    "ru": "Онлайн [6 мес] и Студия Мармарис [5 дн]",
    "en": "Online [6 months] and Studio Marmaris [5 days]",
    "tr": "Çevrimiçi [6 ay] ve Studio Marmaris [5 gün]",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "spec_baths": {
    "block": "Блок 2. Направления школы",
    "key": "spec_baths",
    "desc": "Потоки арт-отпуска 2027",
    "ru": "4 потока в 2027 г. [8 дней / 7 ночей]",
    "en": "4 streams in 2027 [8 days / 7 nights]",
    "tr": "2027'de 4 akış [8 gün / 7 gece]",
    "media": "Calendar",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_1_title": {
    "block": "Блок 3. Витрина м��стер-классов",
    "key": "highlight_1_title",
    "desc": "Преимущество 1: Заголовок",
    "ru": "Обучение с нуля до уровня Haute Couture и проверка видео ДЗ по 20-30 секунд",
    "en": "Training from scratch to Haute Couture level and video homework review of 20-30 seconds",
    "tr": "Sıfırdan Haute Couture seviyesine kadar eğitim ve 20-30 saniyelik video ödev incelemesi.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_1_desc": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_1_desc",
    "desc": "Преимущество 1: Описание",
    "ru": "Пошаговая макросъемка каждого стежка и 6 месяцев бережной личной обратной связи от Василисы Боровиковой в Telegram-чате.",
    "en": "Step-by-step macro photography of every stitch and 6 months of careful personal feedback from Vasilisa Borovikova in Telegram chat.",
    "tr": "Her bir dikişin adım adım makro fotoğrafları ve Vasilisa Borovikova'nın Telegram sohbetindeki 6 aylık özenli kişisel geri bildirimleri.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_2_title": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_2_title",
    "desc": "Преимущество 2: Заголовок",
    "ru": "Очная студия в Мармарисе и ��утюрные арт-отпуска на горной вилле в Турции",
    "en": "A full-time studio in Marmaris and couture art vacations at a mountain villa in Turkey",
    "tr": "Marmaris'te tam zamanlı bir stüdyo ve Türkiye'de bir dağ villasında haute couture sanat tatilleri.",
    "media": "Compass",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_2_desc": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_2_desc",
    "desc": "Преимущество 2: Описание",
    "ru": "5-дневные индивидуальные интенсивы в Мармарисе [500 €] и 8-дневные арт-отпуска в горах Муглы [1100-1500 €] с трансфером из аэропорта Даламан DLM.",
    "en": "5-day individual intensive courses in Marmaris [500 €] and 8-day art holidays in the mountains of Mugla [1100-1500 €] with transfer from Dalaman DLM airport.",
    "tr": "Marmaris'te 5 günlük bireysel yoğun kurslar [500 €] ve Muğla dağlarında 8 günlük sanat tatili [1100-1500 €], Dalaman DLM havaalanından transfer dahil.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_3_title": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_3_title",
    "desc": "Преимущество 3: Заголовок",
    "ru": "Бессрочный доступ к урокам, удержание слота 24ч HOLD и бутик изде��ий",
    "en": "Lifetime access to lessons, 24-hour HOLD slot, and a product boutique",
    "tr": "Ömür boyu derslere erişim, 24 saat bekleme süresi ve ürün butiği.",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "highlight_3_desc": {
    "block": "Блок 3. Витрина мастер-классов",
    "key": "highlight_3_desc",
    "desc": "Преимущество 3: Описание",
    "ru": "Мгновенная выдача инвайтов в закрытые Telegram-каналы после оплаты, квота строго 6 мест на ретрит и доставка авторских изделий по всему миру.",
    "en": "Instant invitations to private Telegram channels upon payment, a strict 6-spot quota for the retreat, and worldwide delivery of original products.",
    "tr": "Ödeme yapıldıktan hemen sonra özel Telegram kanallarına davetiye, inziva için kesin 6 kişilik kontenjan ve orijinal ürünlerin dünya çapında teslimatı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_title",
    "desc": "Заголовок секции О школе и направлениях",
    "ru": "О школе кутюрной вышивки Vasilisa.luneville, наставничестве, арт-отпусках и бутике",
    "en": "About the Vasilisa.luneville couture embroidery school, mentoring, art vacations, and boutique",
    "tr": "Vasilisa.luneville haute couture nakış okulu, mentorluk programı, sanat tatilleri ve butiği hakkında",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_text",
    "desc": "Краткий вводный текст О школе",
    "ru": "С 2015 года мы обучаем искусству парижской люневильской вышивки крючком и кутюрной вышивки иглой по шелковой органзе и бархату. Выбирайте удобный формат: доступные онлайн мастер-классы от 10 €, флагманское 6-месячное онлайн-наставничество из 16 уроков [200 €], индивидуальную неделю в студии в Мармарисе [500 €], незабываемый 8-дневный арт-отпуск на горной вилле в Турции [1100-1500 €] или заказ эксклюзивного изделия в нашем бутике.",
    "en": "Since 2015, we've been teaching the art of Parisian Lunéville crochet and couture needlepoint embroidery on silk organza and velvet. Choose your preferred format: affordable online masterclasses starting at €10, our flagship 6-month online mentorship of 16 lessons [€200], a private week in a studio in Marmaris [€500], an unforgettable 8-day art retreat at a mountain villa in Turkey [€1100-1500], or ordering an exclusive piece from our boutique.",
    "tr": "2015 yılından beri, ipek organza ve kadife üzerine Paris Lunéville tığ işi ve haute couture iğne oyası sanatını öğretiyoruz. Tercih ettiğiniz formatı seçin: 10 €'dan başlayan uygun fiyatlı çevrimiçi ustalık sınıfları, 16 dersten oluşan amiral gemisi 6 aylık çevrimiçi mentorluk programımız [200 €], Marmaris'teki bir stüdyoda özel bir hafta [500 €], Türkiye'deki bir dağ villasında unutulmaz 8 günlük sanat inzivası [1100-1500 €] veya butiğimizden özel bir parça sipariş etmek.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_btn_more": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_btn_more",
    "desc": "Кнопка открытия полного описания",
    "ru": "Читать подробнее о всех 5 направлениях",
    "en": "Read more about all 5 directions",
    "tr": "5 yönün tamamı hakkında daha fazla bilgi edinin.",
    "media": "ChevronRight",
    "status": "Вкл",
    "enabled": true
  },
  "about_modal_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_modal_title",
    "desc": "Заголовок модального окна описания",
    "ru": "Пять направлений экосистемы Vasilisa.luneville - выш��вка от кутюр",
    "en": "Five directions of the Vasilisa.luneville ecosystem - haute couture embroidery",
    "tr": "Vasilisa.luneville ekosisteminin beş yönü - haute couture nakış",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_1_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_1_title",
    "desc": "Раздел 1 описания",
    "ru": "1. Направление 0: Главный манифест и история бренда Vasilisa.luneville с 2015 года",
    "en": "1. Direction 0: The main manifesto and history of the Vasilisa.luneville brand since 2015",
    "tr": "1. Yön 0: Vasilisa.luneville markasının 2015'ten beri süregelen ana manifestosu ve tarihi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_1_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_1_text",
    "desc": "Текст раздела 1",
    "ru": "Vasilisa.luneville - вышивка от кутюр - это международная онлайн-школа кутюрной и люневильской вышивки, студия индивидуального наставничества в Мармарисе, организатор кутюрных арт-отпусков в Турции и бутик авторских изделий ручной работы.\n\nОснователь и ведущий мастер: Василиса Боровикова [Боровикова / Vasilisa Borovikova] - художник по вышивке от кутюр с опытом преподавания и создания коллекций с 2015 года.\nСоавтор арт-отпусков: Юлия Озмен [Yulia Ozmen] - кутюрный вышивальщик и основатель бренда эксклюзивных сумочек [преподает с 2018 года].\nПринимающая сторона ретритной виллы: Марина - хозяйка уединенной горной виллы в провинции Мугла и шеф домашней средиземноморской гастрономии.\n\nКонтакты и реквизиты:\n* Локация студии: Мармарис, провинция Мугла, Турция [Marmaris, Muğla, Türkiye].\n* Локация арт-отпусков: Горная вилла в провинции Мугла [30 минут от международного аэропорта Даламан DLM].\n* Телефон и WhatsApp РФ: +7 921 304-78-92.\n* Телефон и WhatsApp Турция: +90 545 598 32 11.\n* Официальный Email: vasilisa.luneville@gmail.com.\n* Telegram-канал арт-отпусков: https://t.me/limonnavillevturkey.",
    "en": "Vasilisa.luneville - Haute Couture Embroidery is an international online school of couture and Lunéville embroidery, a one-on-one mentoring studio in Marmaris, an organizer of couture art vacations in Turkey, and a boutique of original handmade items.\n\nFounder and Lead Artist: Vasilisa Borovikova - a couture embroidery artist with experience teaching and creating collections since 2015.\nArt Vacation Co-Creator: Yulia Ozmen - a couture embroiderer and founder of an exclusive handbag brand (teaching since 2018).\nRetreat Villa Host: Marina - the owner of a secluded mountain villa in the Muğla province and chef of homemade Mediterranean cuisine.\n\nContact information:\n* Studio location: Marmaris, Muğla Province, Turkey [Marmaris, Muğla, Türkiye].\n* Art Vacations location: Mountain villa in Muğla Province [30 minutes from Dalaman International Airport DLM].\n* Phone and WhatsApp (Russia): +7 921 304-78-92.\n* Phone and WhatsApp (Turkey): +90 545 598 32 11.\n* Official email: vasilisa.luneville@gmail.com.\n* Art Vacations Telegram channel: https://t.me/limonnavillevturkey.",
    "tr": "Vasilisa.luneville - Haute Couture Nakış, uluslararası bir online haute couture ve Lunéville nakış okulu, Marmaris'te bire bir mentorluk stüdyosu, Türkiye'de haute couture sanat tatilleri düzenleyen bir kuruluş ve orijinal el yapımı ürünler satan bir butiktir.\n\nKurucu ve Baş Sanatçı: Vasilisa Borovikova - 2015 yılından beri koleksiyonlar tasarlayan ve öğreten deneyimli bir haute couture nakış sanatçısı.\nSanat Tatili Ortak Yaratıcısı: Yulia Özmen - haute couture nakış sanatçısı ve özel bir el çantası markasının kurucusu (2018'den beri ders veriyor).\nDinlenme Villası Ev Sahibi: Marina - Muğla ilinde tenha bir dağ villasının sahibi ve ev yapımı Akdeniz mutfağı şefi.\n\nİletişim bilgileri:\n* Stüdyo konumu: Marmaris, Muğla ili, Türkiye [Marmaris, Muğla, Türkiye].\n\n* Sanat Tatilleri konumu: Muğla ilinde dağ villası [Dalaman Uluslararası Havalimanı'na 30 dakika].\n* Telefon ve WhatsApp (Rusya): +7 921 304-78-92.\n\n* Telefon ve WhatsApp (Türkiye): +90 545 598 32 11.\n* Resmi e-posta: vasilisa.luneville@gmail.com.\n\n* Sanat Tatilleri Telegram kanalı: https://t.me/limonnavillevturkey.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_2_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_2_title",
    "desc": "Раздел 2 описания",
    "ru": "2. Направление 1: Обучающие онлайн мастер-классы с бессрочным доступом",
    "en": "2. Direction 1: Online educational master classes with unlimited access",
    "tr": "2. Yön 1: Sınırsız erişimli çevrimiçi eğitim ustalık sınıfları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_2_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_2_text",
    "desc": "Текст раздела 2",
    "ru": "Пять практических онлайн мастер-классов в закрытых Telegram-каналах с пошаговой макросъемкой и доступом навсегда:\n1. МК «Ветка лаванды» [10 € / 1000 ₽]: вышивка иглой по прозрачной шелковой органзе, создание нежной объемной аппликации 10x15 см для одежды и брошей. Идеально для старта с нуля на обычных пяльцах.\n2. МК «Мимоза - 4 варианта» [10 € / 1000 ₽]: изучение четырех различных фактурных техник вышивки солнечной веточки мимозы бисером, пайетками и мулине.\n3. МК «Фейерверк» [15 € / 1500 ₽]: динамичная композиция с французскими пайетками, стеклярусом и бисером.\n4. МК «Оформление вышивки в рамку» [10 € / 1000 ₽]: секреты профессионально�� натяжки тонких тканей и багетного оформления готовых кутюрных работ.\n5. МК «Зимняя сказка» [15 € / 1500 ₽]: работа с шелковой синелью, канителью и кристаллами в праздничной технике высокой моды.",
    "en": "Five practical online workshops in private Telegram channels with step-by-step macro photography and lifetime access:\n1. Workshop \"Lavender Branch\" [€10 / ₽1,000]: needlepoint embroidery on sheer silk organza, creating a delicate 10x15 cm 3D appliqué for clothing and brooches. Ideal for starting from scratch on a regular embroidery hoop.\n2. Workshop \"Mimosa - 4 Variations\" [€10 / ₽1,000]: learning four different textured techniques for embroidering a sunny mimosa branch using beads, sequins, and floss.\n3. Workshop \"Fireworks\" [€15 / ₽1,500]: a dynamic composition with French sequins, bugle beads, and seed beads.\n4. Workshop \"Framing Embroidery\" [€10 / ₽1,000]: secrets of professionally stretching fine fabrics and framing finished couture pieces.\n5. Workshop \"Winter's Tale\" [€15 / ₽1,500]: working with silk chenille, gold thread, and crystals using festive haute couture techniques.",
    "tr": "Özel Telegram kanallarında adım adım makro fotoğrafçılık ve ömür boyu erişim içeren beş pratik çevrimiçi atölye çalışması:\n1. \"Lavanta Dalı\" Atölyesi [€10 / ₽1.000]: İnce ipek organza üzerine iğne oyası nakışı, giysiler ve broşlar için narin 10x15 cm 3 boyutlu aplike oluşturma. Normal bir nakış kasnağında sıfırdan başlamak için idealdir.\n\n2. \"Mimoza - 4 Varyasyon\" Atölyesi [€10 / ₽1.000]: Boncuk, payet ve iplik kullanarak güneşli bir mimoza dalını işlemek için dört farklı doku tekniğini öğrenme.\n\n3. \"Havai Fişekler\" Atölyesi [€15 / ₽1.500]: Fransız payetleri, boru boncukları ve tohum boncuklarıyla dinamik bir kompozisyon.\n4. \"Nakış Çerçeveleme\" Atölyesi [10 € / 1.000 ₽]: İnce kumaşları profesyonelce germenin ve bitmiş haute couture parçalarını çerçevelemenin sırları.\n5. \"Kış Masalı\" Atölyesi [15 € / 1.500 ₽]: İpek şönil, altın iplik ve kristallerle, şenlikli haute couture teknikleri kullanılarak çalışma.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_3_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_3_title",
    "desc": "Раздел 3 описания",
    "ru": "3. Направление 2: Индивидуальное кутюрное наставничество [Онлайн и Офлайн в Мармарисе]",
    "en": "3. Direction 2: Individual couture mentoring [Online and Offline in Marmaris]",
    "tr": "3. Yön 2: Bireysel haute couture mentorluğu [Marmaris'te Çevrimiçi ve Çevrimdışı]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_3_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_3_text",
    "desc": "Текст раздела 3",
    "ru": "Два флагманских формата персональной постановки руки и глубокого освоения люневильской вышивки:\n\n1. Онлайн-наставничество «Основы люневильской вышивки» [200 €]:\n* 16 подробных макро-видеоуроков [от запялки органзы в раму и базового тамбурного стежка крючком №70-90 до вышивки пайетками, бисером и синелью с изнанки].\n* Бессрочный доступ ко всем 16 видеоурокам.\n* 6 месяцев [180 дней] индивидуального сопровождения Василисы в личном чате: ученица отправляет короткие видео своей работы по 20-30 секунд, а мастер детально разбирает каждое движение руки, натяжение нити и поворот крючка.\n\n2. Офлайн-наставничество в студии в Мармарис�� [500 €]:\n* 5 полных учебных дней [понедельник - пятница с 09:00 до 17:00] один на один с Василисой в светлой мастерской в Мармарисе.\n* Все профессиональные кутюрные рамы, люневильские крючки, шелковая органза, французские пайетки и бисер предоставляются в студии.\n* Индивидуальная встреча и трансфер из аэропорта Даламан [DLM] и помощь в подборе комфортного отеля у моря.",
    "en": "Two flagship formats for personalized hand training and in-depth mastery of Lunéville embroidery:\n\n1. Online mentoring \"Basics of Lunéville Embroidery\" [€200]:\n* 16 detailed macro video lessons [from hooping organza in a frame and the basic chain stitch with #70-90 crochet hooks to embroidering sequins, beads, and chenille on the reverse side].\n* Unlimited access to all 16 video lessons.\n* 6 months [180 days] of individual support from Vasilisa in a private chat: the student sends short 20-30 second videos of her work, and the master carefully analyzes every hand movement, thread tension, and hook turn.\n\n2. Offline Mentoring at the Marmaris Studio [€500]:\n* 5 full days of one-on-one instruction [Monday - Friday, 9:00 AM - 5:00 PM] with Vasilisa in a bright studio in Marmaris.\n* All professional couture frames, Lunéville hooks, silk organza, French sequins, and beads are provided in the studio.\n* Individual pick-up and transfer from Dalaman Airport [DLM] and assistance in finding a comfortable seaside hotel.",
    "tr": "Lunéville nakışında kişiselleştirilmiş el eğitimi ve derinlemesine ustalık için iki amiral gemisi format:\n\n1. Çevrimiçi Mentorluk \"Lunéville Nakışının Temelleri\" [€200]:\n* 16 detaylı makro video dersi [organzayı çerçeveye germekten ve #70-90 tığ ile temel zincir dikişinden, pul, boncuk ve şönil işlemeye kadar].\n\n* 16 video dersinin tamamına sınırsız erişim.\n\n* Vasilisa'dan özel bir sohbette 6 ay [180 gün] bireysel destek: öğrenci çalışmasının 20-30 saniyelik kısa videolarını gönderir ve usta her el hareketini, iplik gerginliğini ve tığ dönüşünü dikkatlice analiz eder.\n\n2. Marmaris Stüdyosunda Yüz Yüz Mentorluk [€500]:\n* Marmaris'teki aydınlık bir stüdyoda Vasilisa ile 5 tam gün bire bir eğitim [Pazartesi - Cuma, 09:00 - 17:00].\n* Stüdyoda tüm profesyonel haute couture çerçeveler, Lunéville kancaları, ipek organza, Fransız payetleri ve boncuklar mevcuttur.\n\n* Dalaman Havalimanı'ndan (DLM) bireysel karşılama ve transfer hizmeti ile rahat bir sahil oteli bulma konusunda yardım sağlanmaktadır.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_4_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_4_title",
    "desc": "Раздел 4 описания",
    "ru": "4. Направление 3: Кутюрные арт-отпуска на горной вилле в Турции [Сезон 2027]",
    "en": "4. Direction 3: Couture art holidays at a mountain villa in Turkey [Season 2027]",
    "tr": "4. Yön 3: Türkiye'de bir dağ villasında haute couture sanat tatili [2027 Sezonu]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_4_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_4_text",
    "desc": "Текст раздела 4",
    "ru": "Кутюрный арт-отпуск в Турции - это 8 дней / 7 ночей творчества, вдохновения и отдыха в камерной группе строго до 6 участниц на приватной вилле в горах провинции Мугла [30 минут от аэропорта Даламан DLM].\n\nКоманда ретрита: наставники по кутюрной вышивке Василиса Боровикова и Юлия Озмен, хозяйка виллы и шеф-повар Марина.\n\nРасписание 4 потоков сезона 2027 года [по 6 мест в потоке]:\n* Поток 1: 1 мая - 8 мая 2027 г.\n* Поток 2: 19 июня - 26 июня 2027 г.\n* Поток 3: 18 сентября - 25 сентября 2027 г.\n* Поток 4: 23 октября - 30 октября 2027 г.\n\nТарифы участия [всё включено, кроме авиабилетов]:\n* 1100 € - размещение на односпальной кровати в просторной двухместной спальне.\n* 1200 € - размещение на большой двуспальной кровати.\n* 1500 € - одноместное размещение в отдельной приватной спальне с санузлом.\n\nВ стоимость включено: проживание 7 ночей на вилле с бассейном и фруктовым садом, 3-разовое домашнее питание от Марины, 5 дней мастер-классов по вышивке в саду, все материалы и инструменты, индивидуальный трансфер из аэропорта DLM и выездной экскурсионный день [аутентичная Акьяка, прогулка по кристальной реке Азмак, Дальян и заповедный песчаный пляж Изтузу].",
    "en": "A couture art retreat in Turkey is 8 days/7 nights of creativity, inspiration, and relaxation in an intimate group of up to 6 participants at a private villa in the mountains of Muğla Province (30 minutes from Dalaman Airport).\n\nRetreat team: couture embroidery mentors Vasilisa Borovikova and Yulia Ozmen, and villa hostess and chef Marina.\n\nSchedule of the 4 streams of the 2027 season [6 spots per stream]:\n* Stream 1: May 1 - May 8, 2027\n* Stream 2: June 19 - June 26, 2027\n* Stream 3: September 18 - September 25, 2027\n* Stream 4: October 23 - October 30, 2027\n\nParticipation rates [all-inclusive, excluding airfare]:\n* €1,100 - accommodation in a single bed in a spacious double bedroom.\n* €1,200 - accommodation in a king-size bed.\n* €1,500 - single occupancy in a separate private bedroom with bathroom.\n\nThe price includes: 7 nights' accommodation in a villa with a pool and orchard, 3 meals a day home-cooked by Marina, 5 days of embroidery workshops in the garden, all materials and tools, private transfer from DLM airport and a day of excursions [authentic Akyaka, a walk along the crystal-clear Azmak River, Dalyan and the protected sandy beach of Iztuzu].",
    "tr": "Türkiye'de bir haute couture sanat inzivası, Muğla ilinin dağlarında (Dalaman Havalimanı'na 30 dakika mesafede) özel bir villada, en fazla 6 katılımcıdan oluşan samimi bir grupla 8 gün/7 gece süren yaratıcılık, ilham ve rahatlama dolu bir etkinliktir.\n\nİnziva ekibi: haute couture nakış eğitmenleri Vasilisa Borovikova ve Yulia Özmen ile villa ev sahibi ve şef Marina.\n\n2027 sezonunun 4 döneminin programı [her dönemde 6 yer]:\n* Dönem 1: 1 Mayıs - 8 Mayıs 2027\n* Dönem 2: 19 Haziran - 26 Haziran 2027\n* Dönem 3: 18 Eylül - 25 Eylül 2027\n* Dönem 4: 23 Ekim - 30 Ekim 2027\n\nKatılım ücretleri [her şey dahil, uçak bileti hariç]:\n* 1.100 € - geniş bir çift kişilik odada tek kişilik yatakta konaklama.\n* 1.200 € - çift kişilik yatakta konaklama.\n\n* 1.500 € - ayrı özel banyolu yatak odasında tek kişilik konaklama.\n\nFiyata dahil olanlar: Havuzlu ve meyve bahçeli bir villada 7 gece konaklama, Marina tarafından hazırlanan günde 3 öğün ev yapımı yemek, bahçede 5 gün nakış atölyesi, tüm malzeme ve aletler, DLM havaalanından özel transfer ve bir günlük gezi [otantik Akyaka, kristal berraklığındaki Azmak Nehri boyunca yürüyüş, Dalyan ve korunaklı İztuzu kumlu plajı].",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_5_title": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_5_title",
    "desc": "Раздел 5 описания",
    "ru": "5. Направление 4: Бутик кутюрных изделий «В наличии» и «Под заказ» [Bespoke Atelier]",
    "en": "5. Direction 4: Couture Boutique “In Stock” and “Made to Order” [Bespoke Atelier]",
    "tr": "5. Yön 4: Haute Couture Butik “Stokta” ve “Sipariş Üzerine” [Özel Dikim Atölyesi]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "about_sec_5_text": {
    "block": "Блок 4. Онлайн-наставничество",
    "key": "about_sec_5_text",
    "desc": "Текст раздела 5",
    "ru": "Ателье и бутик Vasilisa.luneville создает коллекционные аксессуары, украшения и вышивку на одежде в техниках парижских домов высокой моды:\n* Изделия в наличии: кутюрные броши на шелковой органзе и бархате, расшитые воротнички, вечерние сумочки и фермуары. Отправка по всему миру в течение 2-3 рабочих дней с трек-номером.\n* Изделия под заказ [Bespoke Atelier]: индивидуальная разработка эскиза, подбор палитры французских пайеток, японского бисера, кристаллов и шелковой синели под ваш образ. Срок создания - от 14 до 30 рабочих дней.\n* Юридическая и налоговая прозрачность: оформление заказов по официальной оферте, защита персональных данных KVKK № 6698 и GDPR, выставление электронных фактур e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "en": "The Vasilisa.luneville atelier and boutique creates collectible accessories, jewelry, and embroidery on clothing using the techniques of Parisian haute couture houses.\n* In stock: couture brooches on silk organza and velvet, embroidered collars, evening bags, and clasps. Worldwide shipping within 2-3 business days with a tracking number.\n* Made-to-order items [Bespoke Atelier]: custom sketch development, selection of a palette of French sequins, Japanese beads, crystals, and silk chenille to match your look. Production time: 14 to 30 business days.\n* Legal and tax transparency: processing orders through the official offer, personal data protection under KVKK No. 6698 and GDPR, issuing electronic invoices (e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi]).",
    "tr": "Vasilisa.luneville atölyesi ve butiği, Paris haute couture evlerinin tekniklerini kullanarak koleksiyonluk aksesuarlar, takılar ve giysiler üzerine nakışlar üretiyor.\n* Stokta: İpek organza ve kadife üzerine haute couture broşlar, işlemeli yakalar, gece çantaları ve tokalar. Takip numarası ile 2-3 iş günü içinde dünya çapında gönderim.\n\n* Sipariş üzerine üretilen ürünler [Özel Atölye]: Özel çizim geliştirme, görünümünüze uygun Fransız payetleri, Japon boncukları, kristaller ve ipek şönil paletinin seçimi. Üretim süresi: 14 ila 30 iş günü.\n\n* Yasal ve vergi şeffaflığı: Resmi teklif üzerinden siparişlerin işlenmesi, KVKK No. 6698 ve GDPR kapsamında kişisel verilerin korunması, elektronik faturaların düzenlenmesi (e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi]).",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "sleeping_title": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "sleeping_title",
    "desc": "Заголовок секции тарифов ретрита и студии",
    "ru": "Тарифы размещения на кутюрном арт-отпуске [8 дней / 7 ночей] и очная студия в Мармарисе",
    "en": "Accommodation rates for a couture art holiday [8 days / 7 nights] and in-person studio in Marmaris",
    "tr": "Marmaris'te 8 gün / 7 gece sürecek bir haute couture sanat tatili ve yüz yüze atölye çalışması için konaklama ücretleri.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_1": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_1",
    "desc": "Тариф 1 арт-отпуска",
    "ru": "Тариф 1 : Односпальная кровать в двухместной спальне [1100 €]",
    "en": "Rate 1: Single bed in a double bedroom [€1,100]",
    "tr": "Fiyat 1: Çift kişilik odada tek kişilik yatak [€1.100]",
    "media": "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_1_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_1_desc",
    "desc": "Описание тарифа 1",
    "ru": "8 дней / 7 ночей на горной вилле, 3-разовое домашнее питание от Марины, 5 дней обучения с Василисой и Юлией, все материалы, экскурсии и трансфер DLM.",
    "en": "8 days / 7 nights in a mountain villa, three meals a day at home from Marina, 5 days of training with Vasilisa and Yulia, all materials, excursions and DLM transfers.",
    "tr": "8 gün / 7 gece dağ villasında konaklama, Marina'nın evinde günde üç öğün yemek, Vasilisa ve Yulia ile 5 günlük eğitim, tüm materyaller, geziler ve DLM transferleri.",
    "media": "Bed",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_1_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_1_badge",
    "desc": "Бейдж тарифа 1",
    "ru": "1100 € • Квота 6 мест",
    "en": "1100 € • 6 places",
    "tr": "1100 € • 6 kişilik yer",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_2": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_2",
    "desc": "Тариф 2 арт-отпуска",
    "ru": "Тариф 2 : Большая двуспальная кровать King Size [1200 €]",
    "en": "Rate 2: King Size Bed [€1,200]",
    "tr": "Fiyat 2: Çift Kişilik Yatak [€1.200]",
    "media": "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_2_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_2_desc",
    "desc": "Описание тарифа 2",
    "ru": "Просторная светлая спальня с панорамным видом на горы и сад, индивидуальный санузел, полное участие в программе арт-отпуска, материалы и трансфер DLM.",
    "en": "A spacious, bright bedroom with panoramic views of the mountains and garden, private bathroom, full participation in the art vacation program, materials and DLM transfer.",
    "tr": "Dağ ve bahçe manzaralı, geniş ve aydınlık bir yatak odası, özel banyo, sanat tatili programına tam katılım, malzemeler ve DLM transferi.",
    "media": "BedDouble",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_2_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_2_badge",
    "desc": "Бейдж тарифа 2",
    "ru": "1200 € • Панорамный вид",
    "en": "1200 € • Panoramic view",
    "tr": "1200 € • Panoramik manzara",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_3": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_3",
    "desc": "Тариф 3 арт-отпуска",
    "ru": "Тариф 3 : Отдельная приватная спальня целиком [1500 €]",
    "en": "Tariff 3: Entire private bedroom [€1,500]",
    "tr": "Tarife 3: Tamamen özel yatak odası [€1.500]",
    "media": "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_3_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_3_desc",
    "desc": "Описание тарифа 3",
    "ru": "Максимальное уединение в собственной спальне с отдельной ванной комнатой и выходом к террасе. Все материалы, питание, экскурсии и VIP-трансфер DLM включены.",
    "en": "Maximum privacy in your own bedroom with a private bathroom and access to the terrace. All materials, meals, excursions, and VIP DLM transfers are included.",
    "tr": "Özel banyolu ve terasa erişimli kendi yatak odanızda maksimum gizlilik. Tüm malzemeler, yemekler, geziler ve VIP DLM transferleri dahildir.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_3_badge": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_3_badge",
    "desc": "Бейдж тарифа 3",
    "ru": "1500 € • Приватная спальня",
    "en": "1500 € • Private bedroom",
    "tr": "1500 € • Özel yatak odası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_4": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_4",
    "desc": "Офлайн-интенсив в Мармарисе",
    "ru": "Офлайн-студия в Мармарисе : 5 дней 1-на-1 с Василисой [500 €]",
    "en": "Offline Studio in Marmaris: 5 Days 1-on-1 with Vasilisa [€500]",
    "tr": "Marmaris'te Çevrimdışı Stüdyo: Vasilisa ile 5 Günlük Birebir Seans [€500]",
    "media": "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "status": "Вкл",
    "enabled": true
  },
  "bedroom_4_desc": {
    "block": "Блок 5. Офлайн-студия Мармарис",
    "key": "bedroom_4_desc",
    "desc": "Описание студии в Мармарисе",
    "ru": "Индивидуальная учебная неделя пн-пт с 09:00 до 17:00 в мастерской Мармариса. Профессиональные рамы, крючки №70-90, шелковая органза, трансфер DLM и помощь с отелем.",
    "en": "Individual training week, Mon-Fri, 9:00 AM to 5:00 PM, at our Marmaris studio. Professional frames, #70-90 hooks, silk organza, DLM transfers, and hotel assistance are included.",
    "tr": "Marmaris stüdyomuzda, Pazartesi-Cuma, 09:00-17:00 saatleri arasında bireysel eğitim haftası. Profesyonel çerçeveler, 70-90 numara kancalar, ipek organza, DLM transferleri ve otel yardımı dahildir.",
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
    "tr": "500 € • Pazartesi-Cuma 09:00-17:00",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenities_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenities_title",
    "desc": "Заголовок секции материалов и оснащения",
    "ru": "Что входит в обучение, мастер-классы и кутюрные арт-отпуска",
    "en": "What's included in the training, master classes, and couture art vacations?",
    "tr": "Eğitim, ustalık sınıfları ve haute couture sanat tatilleri neleri kapsıyor?",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenities_btn_all": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenities_btn_all",
    "desc": "Кнопка показа всех 25 позиций",
    "ru": "Показать все материалы и условия [25]",
    "en": "Show all materials and conditions [25]",
    "tr": "Tüm malzemeleri ve koşulları göster [25]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_1",
    "desc": "Оснащение 1",
    "ru": "Люневильские крючки №70, №80, №90 и кутюрные рамы",
    "en": "Lunéville hooks #70, #80, #90 and couture frames",
    "tr": "Lunéville kancaları #70, #80, #90 ve couture çerçeveleri",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_2",
    "desc": "Оснащение 2",
    "ru": "Натуральная шелковая органза, бархат и фатин",
    "en": "Natural silk organza, velvet and tulle",
    "tr": "Doğal ipek organza, kadife ve tül",
    "media": "Layers",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_3",
    "desc": "Оснащение 3",
    "ru": "Французские пайетки, японский и чешский бисер, синель",
    "en": "French sequins, Japanese and Czech beads, chenille",
    "tr": "Fransız payetleri, Japon ve Çek boncukları, şönil",
    "media": "Gem",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_4",
    "desc": "Оснащение 4",
    "ru": "Макро-видеоуроки Full HD с бессрочным доступом в Telegram",
    "en": "Full HD macro video tutorials with unlimited access on Telegram",
    "tr": "Telegram üzerinden sınırsız erişimle Full HD makro video eğitimlerine ulaşabilirsiniz.",
    "media": "Video",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_5",
    "desc": "Оснащение 5",
    "ru": "Личный разбор 20-30 сек видео домашних заданий [6 мес]",
    "en": "Personal analysis of 20-30 seconds of homework video [6 months]",
    "tr": "20-30 saniyelik ödev videosunun kişisel analizi [6 ay]",
    "media": "MessageCircle",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_6": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_6",
    "desc": "Оснащение 6",
    "ru": "Индивидуальный трансфер из аэропорта Даламан [DLM]",
    "en": "Private Transfer from Dalaman Airport [DLM]",
    "tr": "Dalaman Havaalanından Özel Transfer [DLM]",
    "media": "Car",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_7": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_7",
    "desc": "Оснащение 7",
    "ru": "Проживание на горной вилле с бассейном и фруктовым садом",
    "en": "Stay in a mountain villa with a pool and orchard",
    "tr": "Havuzlu ve meyve bahçeli bir dağ villasında konaklayın.",
    "media": "Home",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_8": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_8",
    "desc": "Оснащение 8",
    "ru": "3-разовое домашнее питание и ужины от шефа Марины",
    "en": "3 meals a day at home and dinners from Chef Marina",
    "tr": "Günde 3 öğün evde yemek ve akşam yemekleri Şef Marina'dan.",
    "media": "Utensils",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_9": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_9",
    "desc": "Оснащение 9",
    "ru": "Экскурсионный день: Акьяка, река Азмак, Дальян и пляж Изтузу",
    "en": "Excursion day: Akyaka, Azmak River, Dalyan and Iztuzu Beach",
    "tr": "Gezi günü: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "media": "Compass",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_main_10": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_main_10",
    "desc": "Оснащение 10",
    "ru": "Международная доставка изделий бутика и именной сертификат",
    "en": "International delivery of boutique products and a personalized certificate",
    "tr": "Butik ürünlerin uluslararası teslimatı ve kişiselleştirilmiş sertifika.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_title",
    "desc": "Категория 1 материалов",
    "ru": "1. Инструменты и материалы от кутюр",
    "en": "1. Couture tools and materials",
    "tr": "1. Haute Couture araçları ve malzemeleri",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item1",
    "desc": "Элемент 1.1",
    "ru": "Оригинальные люневильские ручки и сменные крючки №70, №80, №90",
    "en": "Original Luneville handles and replacement hooks No. 70, No. 80, No. 90",
    "tr": "Orijinal Luneville sapları ve yedek kancaları No. 70, No. 80, No. 90",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item2",
    "desc": "Элемент 1.2",
    "ru": "Профессиональные кутюрные рамы со стойками и круглые пяльцы",
    "en": "Professional couture frames with stands and round hoops",
    "tr": "Ayaklı ve yuvarlak kasnaklı profesyonel haute couture çerçeveler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item3",
    "desc": "Элемент 1.3",
    "ru": "Тонкая шелковая органза, хлопковый бархат и еврофатин",
    "en": "Fine silk organza, cotton velvet and Eurotulle",
    "tr": "İnce ipek organza, pamuk kadife ve Eurotulle",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item4",
    "desc": "Элемент 1.4",
    "ru": "Французские пайетки на нити, японский бисер Toho/Miyuki и стеклярус",
    "en": "French sequins on thread, Japanese Toho/Miyuki beads and bugle beads",
    "tr": "İplik üzerine dizilmiş Fransız pulları, Japon Toho/Miyuki boncukları ve boru boncukları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat1_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat1_item5",
    "desc": "Элемент 1.5",
    "ru": "Шелковая синель, жесткая и мягкая канитель, металлизированные нити",
    "en": "Silk chenille, hard and soft wire, metallic threads",
    "tr": "İpek şönil, sert ve yumuşak tel, metalik iplikler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_title",
    "desc": "Категория 2 обучения",
    "ru": "2. Формат онлайн-школы и обратной связи",
    "en": "2. Online school and feedback format",
    "tr": "2. Çevrimiçi okul ve geri bildirim formatı",
    "media": "Video",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item1",
    "desc": "Элемент 2.1",
    "ru": "Макросъемка каждого стежка с лица и изнанки в высоком разрешении",
    "en": "High-resolution macro photography of each stitch from the front and back",
    "tr": "Her bir dikişin ön ve arka yüzünden çekilmiş yüksek çözünürlüklü makro fotoğrafları.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item2",
    "desc": "Элемент 2.2",
    "ru": "Бессрочный доступ к закрытым Telegram-каналам мастер-классов и 16 урокам",
    "en": "Lifetime access to closed Telegram masterclass channels and 16 lessons",
    "tr": "Kapalı Telegram masterclass kanallarına ömür boyu erişim ve 16 ders.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item3",
    "desc": "Элемент 2.3",
    "ru": "Проверка 20-30-секундных видео домаш��их заданий лично Василисой [180 дней]",
    "en": "20-30 second homework videos checked personally by Vasilisa [180 days]",
    "tr": "Vasilisa tarafından bizzat kontrol edilen 20-30 saniyelik ödev videoları [180 gün]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item4",
    "desc": "Элемент 2.4",
    "ru": "Готовые PDF-выкройки, эскизы и подробные карты материалов с артикулами",
    "en": "Ready-made PDF patterns, sketches, and detailed material charts with article numbers",
    "tr": "Hazır PDF kalıpları, çizimler ve ürün numaralarıyla birlikte detaylı malzeme çizelgeleri.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat2_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat2_item5",
    "desc": "Элемент 2.5",
    "ru": "Именной сертификат об окончании курса люневильской вышивки с QR-кодом",
    "en": "Personalized certificate of completion of the Lunéville embroidery course with a QR code",
    "tr": "QR kodlu, kişiye özel Lunéville nakış kursu tamamlama sertifikası.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_title",
    "desc": "Категория 3 арт-отпуска",
    "ru": "3. Горная вилла и программа арт-отпуска в Турции",
    "en": "3. Mountain Villa and Art Vacation Program in Turkey",
    "tr": "3. Türkiye'de Dağ Villası ve Sanat Tatili Programı",
    "media": "Sun",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item1",
    "desc": "Элемент 3.1",
    "ru": "Приватная вилла с бассейном, террасой и фруктовым садом в 30 мин от DLM",
    "en": "A private villa with a pool, terrace, and orchard, 30 minutes from DLM.",
    "tr": "DLM'ye 30 dakika mesafede, havuzlu, teraslı ve meyve bahçeli özel bir villa.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item2",
    "desc": "Элемент 3.2",
    "ru": "Камерная группа строго до 6 участниц и обучение с двумя мастерами [Василиса и Юлия]",
    "en": "Chamber group of up to 6 participants and training with two masters [Vasilisa and Yulia]",
    "tr": "En fazla 6 katılımcıdan oluşan oda müziği grubu ve iki usta [Vasilisa ve Yulia] ile eğitim.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item3",
    "desc": "Элемент 3.3",
    "ru": "3-разовое домашнее средиз��мноморское питание от шефа Марины",
    "en": "3-course Mediterranean home-cooked meals from Chef Marina",
    "tr": "Şef Marina'dan 3 çeşit Akdeniz ev yemeği.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item4",
    "desc": "Элемент 3.4",
    "ru": "Выездная экскурсия: Акьяка, река Азмак, Дальян и заповедный пляж Изтузу",
    "en": "Day Trip: Akyaka, Azmak River, Dalyan and Iztuzu Beach",
    "tr": "Günübirlik Gezi: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat3_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat3_item5",
    "desc": "Элемент 3.5",
    "ru": "Индивидуальный трансфер из аэропорта Даламан [DLM] ко времени вашего рейса",
    "en": "Private transfer from Dalaman Airport [DLM] to your flight",
    "tr": "Dalaman Havalimanı'ndan [DLM] uçuşunuza özel transfer.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_title",
    "desc": "Категория 4 студии и бутика",
    "ru": "4. Офлайн-студия в Мармарисе и Бутик изделий",
    "en": "4. Offline studio in Marmaris and a boutique of products",
    "tr": "4. Marmaris'te fiziksel stüdyo ve ürün butiği",
    "media": "Compass",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item1",
    "desc": "Элемент 4.1",
    "ru": "5 дней индивидуальной работы пн-пт с 09:00 до 17:00 в студии Мармариса",
    "en": "5 days of individual work Mon-Fri from 09:00 to 17:00 in the Marmaris studio",
    "tr": "Marmaris stüdyosunda Pazartesi-Cuma günleri 09:00-17:00 saatleri arasında 5 gün bireysel çalışma.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item2",
    "desc": "Элемент 4.2",
    "ru": "Помощь в подборе уютного отеля на побережье Мармариса в пешей доступности",
    "en": "Help in choosing a cozy hotel on the coast of Marmaris within walking distance",
    "tr": "Marmaris sahilinde, yürüme mesafesinde, konforlu bir otel seçmenize yardımcı olmak.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item3",
    "desc": "Элемент 4.3",
    "ru": "Готовые кутюрные броши, воротнички и сумочки с отправкой за 2-3 дня",
    "en": "Ready-made couture brooches, collars and handbags with delivery in 2-3 days",
    "tr": "Hazır tasarımlı broşlar, yakalar ve el çantaları, 2-3 gün içinde teslimat.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item4": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item4",
    "desc": "Элемент 4.4",
    "ru": "Ателье «Под заказ» [Bespoke]: пошив и вышивка по индивидуальному эскизу",
    "en": "Bespoke Atelier: tailoring and embroidery based on individual designs",
    "tr": "Kişiye Özel Atölye: Bireysel tasarımlara dayalı terzilik ve nakış hizmetleri.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat4_item5": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat4_item5",
    "desc": "Элемент 4.5",
    "ru": "Подарочная упаковка ручной работы и международная доставка с трек-номером",
    "en": "Handcrafted gift wrapping and international shipping with tracking number",
    "tr": "El yapımı hediye paketleme ve takip numaralı uluslararası kargo",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_title": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_title",
    "desc": "Категория 5 оплаты и гарантий",
    "ru": "5. Мультивалютная оплата и юридические гарантии",
    "en": "5. Multi-currency payment and legal guarantees",
    "tr": "5. Çoklu para birimi ödemesi ve yasal güvenceler",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_item1": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_item1",
    "desc": "Элемент 5.1",
    "ru": "Прием оплаты в EUR, RUB, TRY и USD [СБП, Т-Банк, ЮKassa, Stripe, Iyzico, PayPal]",
    "en": "Payments accepted in EUR, RUB, TRY, and USD [SBP, T-Bank, UkrKassa, Stripe, Iyzico, PayPal]",
    "tr": "EUR, RUB, TRY ve USD cinsinden ödemeler kabul edilmektedir [SBP, T-Bank, UkrKassa, Stripe, Iyzico, PayPal]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_item2": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_item2",
    "desc": "Элемент 5.2",
    "ru": "Гарантированное удержание слота ретрита или недели студии на 24 часа [HOLD]",
    "en": "Guaranteed 24-hour hold on a retreat or studio week slot [HOLD]",
    "tr": "Bir inziva veya stüdyo haftası için 24 saatlik garantili rezervasyon [HOLD]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "amenity_cat5_item3": {
    "block": "Блок 6. Арт-отпуск в Турции",
    "key": "amenity_cat5_item3",
    "desc": "Элемент 5.3",
    "ru": "Официальная оферта, соответствие KVKK № 6698 / GDPR и фактуры e-Arşiv GİB",
    "en": "Official offer, compliance with KVKK No. 6698 / GDPR and invoices e-Arşiv GİB",
    "tr": "Resmi teklif, KVKK No. 6698 / GDPR'ye uygunluk ve faturalar e-Arşiv GİB'de saklanmaktadır.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "reviews_score_header": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "reviews_score_header",
    "desc": "Заголовок блока отзывов",
    "ru": "5.0 · 128 отзывов выпускниц школы, участниц ретритов и клиенток бутика",
    "en": "5.0 · 128 reviews from school graduates, retreat participants, and boutique clients",
    "tr": "5.0 · Okul mezunlarından, inziva katılımcılarından ve butik müşterilerinden 128 değerlendirme",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_1": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_1",
    "desc": "Критерий 1",
    "ru": "Качество макро-уроков",
    "en": "Quality of macro-lessons",
    "tr": "Makro derslerin kalitesi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_2": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_2",
    "desc": "Критерий 2",
    "ru": "Разбор видео ДЗ [20-30 сек]",
    "en": "Analysis of homework video [20-30 sec]",
    "tr": "Ödev videosunun analizi [20-30 saniye]",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_3": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_3",
    "desc": "Критерий 3",
    "ru": "Постановка руки",
    "en": "Hand positioning",
    "tr": "El pozisyonu",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_4": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_4",
    "desc": "Критерий 4",
    "ru": "Атмосфера арт-отпуска",
    "en": "Art-vacation atmosphere",
    "tr": "Sanat dolu tatil atmosferi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_5": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_5",
    "desc": "Критерий 5",
    "ru": "Материалы и комплектация",
    "en": "Materials and equipment",
    "tr": "Malzemeler ve ekipmanlar",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_cat_6": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_cat_6",
    "desc": "Критерий 6",
    "ru": "Качество изделий бутика",
    "en": "Quality of boutique products",
    "tr": "Butik ürünlerin kalitesi",
    "media": "5.0|100",
    "status": "Вкл",
    "enabled": true
  },
  "review_1_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_1_author",
    "desc": "Автор отзыва 1",
    "ru": "Анна Смирнова · Онлайн-наставничество [16 уроков] и МК Лаванда",
    "en": "Anna Smirnova · Online Mentoring [16 Lessons] and MK Lavender",
    "tr": "Anna Smirnova · Çevrimiçi Mentorluk [16 Ders] ve MK Lavender",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_1_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_1_text",
    "desc": "Текст отзыва 1",
    "ru": "Начала с мастер-класса «Ветка лаванды» на обычных пяльцах, а затем пошла на 6-месячное наставничество по люневильскому крючку. Формат проверки коротких видео по 20-30 секунд - это восторг! Василиса замечает малейший наклон крючка и натяжение органзы. Уже вышила свою первую кутюрную брошь и сумочку!",
    "en": "I started with the \"Lavender Branch\" master class on a regular hoop, and then enrolled in a six-month mentorship program on Lunéville crochet. The format of short 20-30 second videos is amazing! Vasilisa notices the slightest tilt of the hook and the tension in the organza. I've already embroidered my first couture brooch and handbag!",
    "tr": "Önce normal bir kasnakta \"Lavanta Dalı\" ustalık sınıfıyla başladım, ardından Lunéville tığ işi üzerine altı aylık bir mentorluk programına kaydoldum. 20-30 saniyelik kısa videolar formatı inanılmaz! Vasilisa, tığın en ufak eğimini ve organzadaki gerginliği fark ediyor. İlk haute couture broşumu ve çantamı çoktan işledim bile!",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_2_author": {
    "block": "Блок 12. Отзыв�� и работы учениц",
    "key": "review_2_author",
    "desc": "Автор отзыва 2",
    "ru": "Елена Морозова · Кутюрный арт-отпуск в Турции и МК Мимоза",
    "en": "Elena Morozova · Couture Art Vacation in Turkey and MK Mimosa",
    "tr": "Elena Morozova · Türkiye'de Couture Sanat Tatili ve MK Mimosa",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_2_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_2_text",
    "desc": "Текст отзыва 2",
    "ru": "Арт-отпуск на горной вилле в Турции превзошел все мечты! Утром вышиваем в тени фруктового сада с Василисой и Юлией Озмен, днем купаемся в бассейне и наслажд��емся домашними блюдами от Марины, а поездка в Акьяку, по реке Азмак и на пляж Изтузу подарила вдохновение на год вперед. Забронировала место снова!",
    "en": "An art vacation at a mountain villa in Turkey exceeded all our dreams! We spent the morning embroidering in the shade of an orchard with Vasilisa and Yulia Ozmen, spent the afternoon swimming in the pool and enjoying Marina's homemade meals, and a trip to Akyaka, along the Azmak River, and to Iztuzu Beach inspired us for the year ahead. I've booked it again!",
    "tr": "Türkiye'deki bir dağ villasında geçirdiğimiz sanat dolu tatil, tüm hayallerimizi aştı! Sabahı Vasilisa ve Yulia Özmen ile bir meyve bahçesinin gölgesinde nakış yaparak geçirdik, öğleden sonra havuzda yüzdük ve Marina'nın ev yapımı yemeklerinin tadını çıkardık; Azmak Nehri kıyısındaki Akyaka'ya ve İztuzu Plajı'na yaptığımız geziler ise önümüzdeki yıl için bize ilham verdi. Tekrar rezervasyon yaptırdım!",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_3_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_3_author",
    "desc": "Автор отзыва 3",
    "ru": "Maria Dubois [Paris] · Офлайн-студия в Мармарисе [5 дней]",
    "en": "Maria Dubois [Paris] · Offline studio in Marmaris [5 days]",
    "tr": "Maria Dubois [Paris] · Marmaris'te yüz yüze stüdyo [5 gün]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_3_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_3_text",
    "desc": "Текст отзыва 3",
    "ru": "Прилетела в Даламан специально на 5-дневный индивидуальный интенсив к Василисе в Мармарис. Встретили в аэропорту, помогли с чудесным отелем у моря. За 5 дней с 09:00 до 17:00 рука встала идеально: освоила тамбурный стежок вслепую с изнанки, пайетки, бисер и синель.",
    "en": "I flew to Dalaman specifically for a 5-day individual intensive course with Vasilisa in Marmaris. She met me at the airport and helped me find a wonderful hotel by the sea. In five days, from 9:00 AM to 5:00 PM, my hand developed perfectly: I mastered the backside blind chain stitch, sequins, beading, and chenille.",
    "tr": "Marmaris'te Vasilisa ile 5 günlük bireysel yoğun bir kurs için özellikle Dalaman'a uçtum. Beni havaalanında karşıladı ve deniz kenarında harika bir otel bulmama yardımcı oldu. Beş gün boyunca, sabah 9:00'dan akşam 5:00'e kadar, elim mükemmel bir şekilde gelişti: Arka taraftan gizli zincir dikişi, pullar, boncuk işleme ve şönil işleme tekniklerinde ustalaştım.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_4_author": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_4_author",
    "desc": "Автор отзыва 4",
    "ru": "Светлана Кузнецова · Заказ броши и воротничка в Бутике",
    "en": "Svetlana Kuznetsova · Order a brooch and collar at the Boutique",
    "tr": "Svetlana Kuznetsova · Butikten broş ve kolye sipariş edin",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "review_4_text": {
    "block": "Блок 12. Отзывы и работы учениц",
    "key": "review_4_text",
    "desc": "Текст отзыва 4",
    "ru": "Заказывала в бутике Vasilisa.luneville расшитый воротничок и брошь «Лаванда Haute Couture». Изнанка идеальная, шелковая органза невесомая, французские пайетки переливаются деликатным благородным блеском. Посылка дошла быстро в роскошной подарочной коробке!",
    "en": "I ordered an embroidered collar and a \"Lavender Haute Couture\" brooch from the Vasilisa.luneville boutique. The backing is perfect, the silk organza is weightless, and the French sequins shimmer with a delicate, elegant sheen. The package arrived quickly in a luxurious gift box!",
    "tr": "Vasilisa.luneville butiğinden işlemeli bir yaka ve \"Lavanta Haute Couture\" broş sipariş ettim. Arka kısmı mükemmel, ipek organza hafif ve Fransız payetleri zarif ve şık bir parlaklıkla ışıldıyor. Paket lüks bir hediye kutusunda hızla geldi!",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_title": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_title",
    "desc": "Заголовок блока локации",
    "ru": "Творческая студия в Мармарисе и ретритная вилла в горах провинции Мугла",
    "en": "A creative studio in Marmaris and a retreat villa in the mountains of Mugla Province",
    "tr": "Marmaris'te bir yaratıcı stüdyo ve Muğla ilinin dağlarında bir inziva villası.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_desc": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_desc",
    "desc": "Описание локации и трансфера",
    "ru": "Очная мастерская Василисы расположена в курортном Мармарисе на побережье Эгейского моря, а уединенная вилла для кутюрных арт-отпусков находится в живописных горах провинции Мугла всего в 30 минутах езды от м��ждународного аэропорта Даламан [DLM]. Для всех учениц офлайн-студии и участниц ретритов включен индивидуальный трансфер из аэропорта DLM.",
    "en": "Vasilisa's in-person studio is located in the resort town of Marmaris on the Aegean coast, while her secluded villa for couture art retreats is nestled in the picturesque mountains of the Muğla province, just a 30-minute drive from Dalaman International Airport [DLM]. All in-person studio students and retreat participants receive private transfers from DLM Airport.",
    "tr": "Vasilisa'nın yüz yüze ders verdiği stüdyosu Ege kıyısındaki tatil beldesi Marmaris'te bulunurken, haute couture sanat inzivaları için özel olarak tasarlanmış villası ise Dalaman Uluslararası Havalimanı'na (DLM) sadece 30 dakikalık sürüş mesafesinde, Muğla ilinin pitoresk dağlarında yer almaktadır. Yüz yüze ders alan tüm öğrenciler ve inziva katılımcıları DLM Havalimanı'ndan özel transfer hizmeti almaktadır.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "location_badge": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "location_badge",
    "desc": "Бейдж локации",
    "ru": "Мармарис & Мугла • 30 мин от аэропорта DLM",
    "en": "Marmaris & Mugla • 30 min from DLM airport",
    "tr": "Marmaris ve Muğla • DLM havaalanına 30 dakika uzaklıkta",
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
    "en": "Your master and mentor: Vasilisa Borovikova",
    "tr": "Ustanız ve akıl hocanız: Vasilisa Borovikova",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_subtitle": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_subtitle",
    "desc": "Подзаголовок карточки мастера",
    "ru": "Художник по кутюрной вышивке с 2015 года • Основатель школы и бутика Vasilisa.luneville в Мармарисе",
    "en": "Couture embroidery artist since 2015 • Founder of the Vasilisa.luneville school and boutique in Marmaris",
    "tr": "2015'ten beri haute couture nakış sanatçısı • Marmaris'teki Vasilisa.luneville okul ve butiğinin kurucusu",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_verified": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_verified",
    "desc": "Бейдж верификации",
    "ru": "Личность, дипломы и налоговый статус проверены",
    "en": "Identity, diplomas and tax status verified",
    "tr": "Kimlik, diplomalar ve vergi durumu doğrulandı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_response_time": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_response_time",
    "desc": "Время ответа в чате",
    "ru": "Время ответа в чате и по видео ДЗ: обычно в течение 15 минут",
    "en": "Response time via chat and video homework: usually within 15 minutes",
    "tr": "Sohbet ve video yoluyla verilen ödevlere yanıt süresi: genellikle 15 dakika içinde.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_languages": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_languages",
    "desc": "Языки общения",
    "ru": "Языки обучения и поддержки: Русский, English, Türkçe",
    "en": "Training and support languages: Russian, English, Turkish",
    "tr": "Eğitim ve destek dilleri: Rusça, İngilizce, Türkçe",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_help_text": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_help_text",
    "desc": "Текст поддержки учениц",
    "ru": "Я лично проверяю каждое 20-30-секундное видео домашнего задания на онлайн-наставничестве, веду очные 5-дневные интенсивы в студии Мармариса и вместе с Юлией Озмен и Мариной встречаю участниц наших кутюрных арт-отпусков на горной вилле в Турции.",
    "en": "I personally check every 20-30-second video assignment for online mentoring, conduct in-person 5-day intensive courses at a studio in Marmaris, and, together with Yulia Ozmen and Marina, meet participants of our couture art vacations at a mountain villa in Turkey.",
    "tr": "Şahsen, çevrimiçi mentorluk için her 20-30 saniyelik video ödevini kontrol ediyorum, Marmaris'teki bir stüdyoda yüz yüze 5 günlük yoğun kurslar düzenliyorum ve Yulia Özmen ve Marina ile birlikte Türkiye'deki bir dağ villasında haute couture sanat tatillerimizin katılımcılarıyla buluşuyorum.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_btn": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_btn",
    "desc": "Кнопка связи с Василисой",
    "ru": "Написать Василисе или ИИ-Куратору",
    "en": "Write to Vasilisa or AI-Curator",
    "tr": "Vasilisa'ya veya AI-Curator'a yazın.",
    "media": "MessageCircle",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_credo": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_credo",
    "desc": "Творческое кредо",
    "ru": "Творческое кредо: «Вышивка от кутюр доступна каждой - секрет в правильной постановке руки и любви к деталям»",
    "en": "Creative credo: \"Haute couture embroidery is accessible to everyone – the secret is in the correct hand position and a love of detail.\"",
    "tr": "Yaratıcı ilke: \"Haute couture nakışı herkes için erişilebilirdir – sırrı doğru el pozisyonunda ve detaylara olan sevgidedir.\"",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_dream": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_dream",
    "desc": "Миссия школы",
    "ru": "Миссия: объединять увлеченных вышивкой женщин по всему миру в теплом сообществе онлайн и на арт-отпусках в Турции",
    "en": "Mission: To unite women passionate about embroidery around the world in a warm community online and on art holidays in Turkey",
    "tr": "Misyon: Dünyanın dört bir yanından nakışa tutkuyla bağlı kadınları, çevrimiçi sıcak bir toplulukta ve Türkiye'deki sanat tatillerinde bir araya getirmek.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_hobbies": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_hobbies",
    "desc": "Специализация и техники",
    "ru": "Техники: люневильский крючок №70-90, вышивка иглой по органзе, объемная синель, пайетки, бисер, создание брошей и сумочек",
    "en": "Techniques: Lunéville crochet hook #70-90, needle embroidery on organza, voluminous chenille, sequins, beads, making brooches and handbags",
    "tr": "Teknikler: Lunéville 70-90 numara tığ, organza üzerine iğne nakışı, hacimli şönil, payetler, boncuklar, broş ve el çantası yapımı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "host_card_travel": {
    "block": "Блок 11. О наставниках",
    "key": "host_card_travel",
    "desc": "Команда арт-отпусков",
    "ru": "Соавтор арт-отпусков: Юлия Озмен [дизайнер кутюрных сумочек, преподает с 2018 г.] • Шеф и хозяйка виллы: Марина",
    "en": "Art Vacations Co-author: Yulia Ozmen [couture handbag designer, teaching since 2018] • Villa Chef and Hostess: Marina",
    "tr": "Sanat Tatilleri Ortak Yazarı: Yulia Özmen [haute couture el çantası tasarımcısı, 2018'den beri eğitmen] • Villa Şefi ve Ev Sahibi: Marina",
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
    "en": "14 Key Locations: Marmaris Studio, Retreat Villa, and Art Vacation Routes",
    "tr": "14 Önemli Lokasyon: Marmaris Stüdyosu, Dinlenme Villası ve Sanat Tatili Rotaları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_subtitle": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_subtitle",
    "desc": "Подзаголовок 14 локаций",
    "ru": "Интерактивный путеводитель для учениц очной сту��ии и участниц кутюрных арт-отпусков в провинции Мугла",
    "en": "An interactive guide for full-time studio students and participants in couture art vacations in Muğla Province",
    "tr": "Muğla ilinde tam zamanlı stüdyo öğrencileri ve haute couture sanat tatillerine katılanlar için interaktif bir rehber.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarks_address": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmarks_address",
    "desc": "Адрес студии и локации",
    "ru": "Marmaris, Muğla, Türkiye [Студия в Мармарисе и горная ретритная вилла в 30 мин от аэропорта DLM]",
    "en": "Marmaris, Muğla, Türkiye [Marmaris Studio and Mountain Retreat Villa 30 min from DLM Airport]",
    "tr": "Marmaris, Muğla, Türkiye [Marmaris Studio ve Mountain Retreat Villa, DLM Havaalanından 30 dakika uzaklıkta]",
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
    "en": "Vasilisa.luneville, a creative embroidery studio in Marmaris, features professional couture frames, natural light, and a collection of materials.",
    "tr": "Marmaris'te bulunan yaratıcı bir nakış stüdyosu olan Vasilisa.luneville, profesyonel haute couture çerçeveleri, doğal ışık ve çeşitli malzemeler sunmaktadır.",
    "media": "Студия|09:00-17:00|walk|Офлайн-обучение|Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_2": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_2",
    "desc": "Локация 2",
    "ru": "Набережная и яхтенная марина Мармариса: морские прогулки и вдохновляющие виды после занятий в студии.",
    "en": "Marmaris's waterfront and marina: boat trips and inspiring views after studio classes.",
    "tr": "Marmaris'in sahil şeridi ve marinası: stüdyo derslerinden sonra tekne gezileri ve ilham verici manzaralar.",
    "media": "500 м|5 мин пешком|walk|Прогулки у моря|Compass",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_3": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_3",
    "desc": "Локация 3",
    "ru": "Исторический Старый город и крепость Мармариса [Marmaris Kalesi]: узкие бело-голубые улочки с бугенвиллией для фотосессий с готовыми брошами.",
    "en": "Marmaris's historic Old Town and Fortress [Marmaris Kalesi]: narrow, blue and white streets lined with bougainvillea for photo ops with ready-made brooches.",
    "tr": "Marmaris'in tarihi Eski Şehri ve Kalesi: Hazır broşlarla fotoğraf çekimi için ideal, begonvillerle süslü dar, mavi ve beyaz sokaklar.",
    "media": "1.2 км|15 мин пешком|walk|Фотолокация|Camera",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_4": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_4",
    "desc": "Локация 4",
    "ru": "Уединенная горная вилла арт-отпусков в провинции Мугла: 4 спальни, бассейн, фруктовый сад и панора��ная терраса для вышивки.",
    "en": "Secluded mountain villa for art holidays in Mugla province: 4 bedrooms, pool, orchard and panoramic terrace for embroidery.",
    "tr": "Muğla ilinde sanat tatilleri için tenha dağ villası: 4 yatak odası, havuz, meyve bahçesi ve nakış için panoramik teras.",
    "media": "30 км от DLM|30 мин на авто|nature|База ретрита|Home",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_5": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_5",
    "desc": "Локация 5",
    "ru": "Международный аэропорт Даламан [DLM]: точка прилета участниц ретритов и учениц студии [включен индивидуальный трансфер].",
    "en": "Dalaman International Airport [DLM]: Arrival point for retreat participants and studio students [private transfer included].",
    "tr": "Dalaman Uluslararası Havalimanı [DLM]: Kamp katılımcıları ve stüdyo öğrencileri için varış noktası [özel transfer dahil].",
    "media": "30 мин|Трансфер включен|transport|Аэропорт прилета|Plane",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_6": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_6",
    "desc": "Локация 6",
    "ru": "Аутентичный город Акьяка [Akyaka]: уникальная деревянная османская архитектура Ула и бухта Гёкова [программа выездного дня ретрита].",
    "en": "Authentic Akyaka: Unique Ottoman Wooden Architecture of Ula and Gokova Bay [Retreat Day Program].",
    "tr": "Özgün Akyaka: Ula ve Gökova Koyu'nun Eşsiz Osmanlı Ahşap Mimarisi [Dinlenme Günü Programı].",
    "media": "Экскурсия|День 4 ретрита|nature|Выездной маршрут|MapPin",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_7": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_7",
    "desc": "Локация 7",
    "ru": "Кристальная река Азмак [Azmak Nehri]: лодочная прогулка над подводными садами и обед в рыбном ресторане у воды.",
    "en": "Crystal River Azmak [Azmak Nehri]: Boat ride over underwater gardens and lunch at a fish restaurant by the water.",
    "tr": "Azmak Nehri: Su altı bahçeleri üzerinde tekne turu ve su kenarındaki bir balık restoranında öğle yemeği.",
    "media": "Акьяка|Лодочный тур|food|Природа и гастрономия|Waves",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_8": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_8",
    "desc": "Локация 8",
    "ru": "Заповедный песчаный пляж Изтузу [İztuzu Beach]: 5-километровая песчаная коса между морем и дельтой [экскурсионный день арт-отпуска].",
    "en": "İztuzu Beach: A 5km sandy beach between the sea and the delta [art holiday excursion day].",
    "tr": "İztuzu Plajı: Deniz ve delta arasında yer alan 5 km uzunluğunda kumlu bir plaj [sanat tatili gezi günü].",
    "media": "Экскурсия|Купание в море|beach|Пляжный отдых|Sun",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_9": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_9",
    "desc": "Локация 9",
    "ru": "Дельта Дальяна и ликийские пейзажи: живописный маршрут водной прогулки в рамках выездного дня арт-отпуска.",
    "en": "The Dalyan Delta and Lycian landscapes: a picturesque boat trip as part of an art-vacation day out.",
    "tr": "Dalyan Deltası ve Likya manzaraları: Sanat dolu bir tatil günü gezisinin parçası olarak pitoresk bir tekne turu.",
    "media": "Экскурсия|Водный маршрут|nature|Вдохновение|Compass",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_10": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_10",
    "desc": "Локация 10",
    "ru": "Текстильные и ремесленные лавки региона Мугла: натуральный турецкий шелк, хлопок, кружево Оя и фермерские угощения.",
    "en": "Textile and handicraft shops in the Muğla region: natural Turkish silk, cotton, Oya lace and farm-made treats.",
    "tr": "Muğla bölgesindeki tekstil ve el sanatları dükkanları: doğal Türk ipeği, pamuk, Oya danteli ve çiftlik ürünleri.",
    "media": "Шопинг|Ткани и сувениры|walk|Ремесла Турции|ShoppingBag",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_11": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_11",
    "desc": "Локация 11",
    "ru": "Панорамная терраса и фруктовый сад ретритной виллы: утренние мастер-классы по вышивке под пение птиц.",
    "en": "Panoramic terrace and orchard of the retreat villa: morning embroidery workshops accompanied by birdsong.",
    "tr": "Dinlenme villasının panoramik terası ve meyve bahçesi: kuş cıvıltıları eşliğinde sabah nakış atölyeleri.",
    "media": "На вилле|Ежедневно|nature|Зона мастер-классов|Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_12": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_12",
    "desc": "Локация 12",
    "ru": "Гастрономическая терраса шефа Марины: авторские завтраки, обеды и ужины из свежих фермерских продуктов Эгейского побережья.",
    "en": "Chef Marina's Gastronomic Terrace: signature breakfasts, lunches, and dinners using fresh farm produce from the Aegean coast.",
    "tr": "Şef Marina'nın Gastronomi Terası: Ege kıyılarından gelen taze çiftlik ürünleri kullanılarak hazırlanan özel kahvaltılar, öğle ve akşam yemekleri.",
    "media": "На вилле|3 раза в день|food|Домашняя кухня|Utensils",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_13": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_13",
    "desc": "Локация 13",
    "ru": "Пляжи Ичмелера и бухты Мармариса: лазурное море в 10-15 минутах от творческой студии Василисы.",
    "en": "The beaches of Icmeler and the bays of Marmaris: the azure sea is 10-15 minutes from Vasilisa's creative studio.",
    "tr": "İçmeler plajları ve Marmaris koyları: Masmavi deniz, Vasilisa'nın yaratıcı stüdyosuna 10-15 dakika mesafede.",
    "media": "7 км|10 мин|beach|Морской отдых|Sun",
    "status": "Вкл",
    "enabled": true
  },
  "landmark_14": {
    "block": "Блок 15. Контакты и локация студии",
    "key": "landmark_14",
    "desc": "Локация 14",
    "ru": "Международная служба доставки бутика [PTT / DHL / СДЭК]: отправка готовых брошей, сумочек и наборов материалов по всему миру.",
    "en": "International boutique delivery service [PTT / DHL / SDEK]: shipping finished brooches, handbags and sets of materials worldwide.",
    "tr": "Uluslararası butik teslimat hizmeti [PTT / DHL / SDEK]: bitmiş broşların, el çantalarının ve malzeme setlerinin dünya çapında gönderimi.",
    "media": "Весь мир|2-3 дня отправка|transport|Доставка бутика|Package",
    "status": "Вкл",
    "enabled": true
  },
  "spa_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_title",
    "desc": "Заголовок пространства виллы и студии",
    "ru": "Пространство творчества и отдыха: Горная вилла ретритов и Студия в Мармарисе",
    "en": "A Space for Creativity and Relaxation: Mountain Retreat Villa and Studio in Marmaris",
    "tr": "Yaratıcılık ve Rahatlama İçin Bir Mekan: Marmaris'te Dağ Evi Tarzı Villa ve Stüdyo",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_subtitle": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_subtitle",
    "desc": "Подзаголовок пространства",
    "ru": "Идеальное сочетание глубокого обучения вышивке от кутюр, комфортного проживания на вилле с бассейном и средиземноморского отдыха",
    "en": "The perfect combination of in-depth training in haute couture embroidery, comfortable accommodation in a villa with a pool, and a Mediterranean holiday",
    "tr": "Yüksek moda nakışında derinlemesine eğitim, havuzlu bir villada konforlu konaklama ve Akdeniz tatilinin mükemmel birleşimi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_title",
    "desc": "Заголовок виллы и бассейна",
    "ru": "Приватная горная вилла с бассейном и фруктовым садом",
    "en": "Private mountain villa with pool and orchard",
    "tr": "Havuzlu ve meyve bahçeli özel dağ villası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_desc",
    "desc": "Описание виллы",
    "ru": "Уединенная вилла в горах провинции Мугла [30 минут от аэропорта Даламан DLM] с собственным бассейном, 4 комфортными спальнями, просторной светлой верандой для работы за кутюрными рамами и тенистым фру��товым садом.",
    "en": "A secluded villa in the mountains of Mugla province [30 minutes from Dalaman DLM Airport] with a private pool, 4 comfortable bedrooms, a spacious bright veranda for working on couture frames and a shady fruit garden.",
    "tr": "Muğla ilinin dağlarında, Dalaman DLM Havalimanı'na 30 dakika mesafede, özel havuzlu, 4 konforlu yatak odalı, haute couture çerçeveler üzerinde çalışmak için geniş ve aydınlık bir verandaya ve gölgeli bir meyve bahçesine sahip, gözlerden uzak bir villa.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_badge": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_badge",
    "desc": "Бейдж квоты",
    "ru": "Камерная группа: строго до 6 участниц",
    "en": "Chamber group: strictly up to 6 participants",
    "tr": "Oda grubu: kesinlikle en fazla 6 katılımcı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_season": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_season",
    "desc": "Сезон потоков",
    "ru": "Сезон арт-отпусков 2027: май, июнь, сентябрь, октябрь",
    "en": "Art Vacation Season 2027: May, June, September, October",
    "tr": "Sanat Tatili Sezonu 2027: Mayıs, Haziran, Eylül, Ekim",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_lighting": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_lighting",
    "desc": "Режим занятий",
    "ru": "Вышивальные сессии в саду: 5 дней с 09:00 до 17:00",
    "en": "Embroidery sessions in the garden: 5 days from 9:00 to 17:00",
    "tr": "Bahçede nakış atölyeleri: 5 gün, 09:00 - 17:00 arası.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_pool_maintenance": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_pool_maintenance",
    "desc": "Материалы",
    "ru": "Все материалы, пайетки, бисер, органза и инструменты включены",
    "en": "All materials, sequins, beads, organza and tools are included.",
    "tr": "Tüm malzemeler, pullar, boncuklar, organza ve aletler dahildir.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_title",
    "desc": "Заголовок студии в Мармарисе",
    "ru": "Очная мастерская Василисы в Мармарисе и онлайн-академия",
    "en": "Vasilisa's in-person workshop in Marmaris and online academy",
    "tr": "Vasilisa'nın Marmaris'teki yüz yüze atölyesi ve çevrimiçi akademisi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_desc",
    "desc": "Описание студии",
    "ru": "Профессионально оборудованная студия для 5-дневного индивидуального наставничества [500 €] и съемки макро-уроков в 4K с пожизненным доступом и 6-месячной проверкой 20-30 сек видео ДЗ.",
    "en": "Professionally equipped studio for 5 days of individual mentoring [€500] and filming of macro lessons in 4K with lifetime access and 6 months of 20-30 sec video homework verification.",
    "tr": "5 gün boyunca bireysel mentorluk için profesyonelce donatılmış stüdyo [€500] ve 4K çözünürlükte makro derslerin çekimi, ömür boyu erişim ve 6 ay boyunca 20-30 saniyelik video ödev doğrulaması.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_badge": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_badge",
    "desc": "Бейдж наставничества",
    "ru": "Индивидуально 1-на-1 с мастером",
    "en": "Individually 1-on-1 with a specialist",
    "tr": "Bir uzmanla birebir görüşme",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_schedule": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_schedule",
    "desc": "График студии",
    "ru": "График студии в Мармарисе: пн - пт с 09:00 до 17:00",
    "en": "Studio hours in Marmaris: Mon-Fri from 09:00 to 17:00",
    "tr": "Marmaris'teki stüdyo çalışma saatleri: Pazartesi-Cuma, 09:00 - 17:00 arası.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_lighting": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_lighting",
    "desc": "Обратная связь",
    "ru": "Онлайн-сопровождение: 180 дней проверки 20-30 сек видео ДЗ",
    "en": "Online support: 180 days of verification of 20-30 sec video homework",
    "tr": "Çevrimiçi destek: 20-30 saniyelik video ödevlerinin 180 gün boyunca doğrulanması.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_jacuzzi_season": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_jacuzzi_season",
    "desc": "Доступ к урокам",
    "ru": "Доступ к купленным МК и 16 видеоурокам: навсегда",
    "en": "Access to purchased MK and 16 video lessons: forever",
    "tr": "Satın alınan MK ve 16 video dersine ömür boyu erişim.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_street_lighting_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_street_lighting_title",
    "desc": "Экскурсионная программа",
    "ru": "Выездные путешествия и вдохновение",
    "en": "Travel and inspiration",
    "tr": "Seyahat ve ilham",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_street_lighting_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_street_lighting_desc",
    "desc": "Описание экскурсий",
    "ru": "Поездка в Акьяку, прогулка по реке Азмак, Дальян и пляж Изтузу включены в арт-отпуск",
    "en": "A trip to Akyaka, a cruise along the Azmak River, Dalyan and Iztuzu Beach are included in the art vacation",
    "tr": "Sanat tatili paketine Akyaka gezisi, Azmak Nehri'nde tekne turu, Dalyan ve İztuzu Plajı dahildir.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_parking_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_parking_title",
    "desc": "Трансфер из аэропорта",
    "ru": "Встреча и трансфер из аэропорта DLM",
    "en": "Meeting and transfer from DLM Airport",
    "tr": "DLM Havalimanı'ndan karşılama ve transfer",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_parking_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_parking_desc",
    "desc": "Описание трансфера",
    "ru": "Бесплатный индивидуальный трансфер из аэропорта Даламан [DLM] на виллу или в студию Мармариса",
    "en": "Free private transfer from Dalaman Airport [DLM] to your Marmaris villa or studio",
    "tr": "Dalaman Havalimanı'ndan Marmaris'teki villanıza veya stüdyonuza ücretsiz özel transfer.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_bbq_title": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_bbq_title",
    "desc": "Гастрономия от шефа Марины",
    "ru": "Домашняя средиземноморская кухня",
    "en": "Homemade Mediterranean cuisine",
    "tr": "Ev yapımı Akdeniz mutfağı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "spa_bbq_desc": {
    "block": "Блок 9. Макро-галерея процессов",
    "key": "spa_bbq_desc",
    "desc": "Описание кухни",
    "ru": "3-разовое питание из свежих фермерских продуктов, турецкие завтраки и душевные ужины на террасе",
    "en": "Three meals a day with fresh farm produce, Turkish breakfasts and hearty dinners on the terrace",
    "tr": "Günde üç öğün, taze çiftlik ürünleriyle hazırlanan Türk kahvaltıları ve terasta doyurucu akşam yemekleri.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_header": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_header",
    "desc": "Заголовок блока правил и гарантий",
    "ru": "Юридические гарантии, публичные оферты, KVKK / GDPR и правила бронирования",
    "en": "Legal guarantees, public offers, KVKK / GDPR and booking rules",
    "tr": "Yasal güvenceler, halka açık teklifler, KVKK / GDPR ve rezervasyon kuralları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_title",
    "desc": "Оферта на обучение и МК",
    "ru": "Публичная оферта на обучение и бессрочный доступ",
    "en": "Public offer for training and unlimited access",
    "tr": "Eğitim ve sınırsız erişim için herkese açık teklif",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_desc",
    "desc": "Описание оферты",
    "ru": "Официальный договор оферты на онлайн мастер-классы и 6-месячное индивидуальное наставничество.",
    "en": "Official offer agreement for online master classes and 6 months of individual mentoring.",
    "tr": "Çevrimiçi yüksek lisans dersleri ve 6 aylık bireysel mentorluk için resmi teklif sözleşmesi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_badge",
    "desc": "Бейдж оферты",
    "ru": "Доступ навсегда + 180 дней кураторства",
    "en": "Lifetime access + 180 days of curation",
    "tr": "Ömür boyu erişim + 180 gün içerik seçimi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_item1",
    "desc": "Пункт 1.1",
    "ru": "Мгновенная выдача ссылок-приглашений в закрытые Telegram-каналы МК и 16 уроков после подтверждения оплаты.",
    "en": "Instantly receive invitation links to closed MK Telegram channels and 16 lessons after payment confirmation.",
    "tr": "Ödeme onaylandıktan hemen sonra, kapalı MK Telegram kanallarına ve 16 derse ait davet bağlantılarını alacaksınız.",
    "media": "CheckCircle",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_item2",
    "desc": "Пункт 1.2",
    "ru": "Фиксация даты старта онлайн-наставничества и автоматический расчет 6 месяцев обратной связи [EDATE +6 мес].",
    "en": "Fixing the start date of online mentoring and automatic calculation of 6 months of feedback [EDATE +6 months].",
    "tr": "Çevrimiçi mentorluğun başlangıç ​​tarihinin sabitlenmesi ve 6 aylık geri bildirimin otomatik olarak hesaplanması [EDATE +6 ay].",
    "media": "Clock",
    "status": "Вкл",
    "enabled": true
  },
  "safety_law_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_law_item3",
    "desc": "Пункт 1.3",
    "ru": "Выдача именного PDF-сертификата школы Vasilisa.luneville с защитным QR-кодом после сдачи итоговой работы.",
    "en": "A personalized PDF certificate from Vasilisa.luneville School with a security QR code will be issued upon completion of the final assignment.",
    "tr": "Son ödevi tamamladığınızda, Vasilisa.luneville Okulu tarafından size özel hazırlanmış, güvenlik QR kodlu bir PDF sertifikası verilecektir.",
    "media": "Award",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_title",
    "desc": "Договор арт-отпуска и студии",
    "ru": "Бронирование арт-отпусков в Турции и студии в Мармарисе",
    "en": "Booking art holidays in Turkey and studios in Marmaris",
    "tr": "Türkiye'de sanat tatili rezervasyonu ve Marmaris'te stüdyolar.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_desc",
    "desc": "Описание правил ретрита",
    "ru": "Прозрачная система квот [6 мест на поток] и удержание выбранного слота на 24 часа [HOLD].",
    "en": "Transparent quota system [6 places per stream] and holding of the selected slot for 24 hours [HOLD].",
    "tr": "Şeffaf kota sistemi [akış başına 6 yer] ve seçilen zaman diliminin 24 saat boyunca rezerve edilmesi [BEKLETME].",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_badge",
    "desc": "Бейдж ретрита",
    "ru": "Квота 6 мест • 24ч HOLD",
    "en": "Quota: 6 places • 24-hour hold",
    "tr": "Kontenjan: 6 yer • 24 saat rezervasyon",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_item1",
    "desc": "Пункт 2.1",
    "ru": "В стоимость арт-отпуска [1100 / 1200 / 1500 €] включено всё: вилла 7 ночей, питание от Марины, обуче��ие, материалы, экскурсии и трансфер DLM.",
    "en": "The art holiday price [1100 / 1200 / 1500 €] includes everything: 7 nights villa, meals from Marina, training, materials, excursions and DLM transfer.",
    "tr": "Sanat tatili fiyatına [1100 / 1200 / 1500 €] her şey dahildir: 7 gece villa konaklaması, Marina'dan yemekler, eğitim, materyaller, geziler ve DLM transferi.",
    "media": "Home",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_item2",
    "desc": "Пункт 2.2",
    "ru": "Индивидуальная неделя в студии Мармариса [500 €] включает 5 дней обучения пн-пт 09:00-17:00, все материалы и трансфер из аэропорта DLM.",
    "en": "Individual week in Marmaris studio [500 €] includes 5 days of training Mon-Fri 09:00-17:00, all materials and transfer from DLM airport.",
    "tr": "Marmaris stüdyosunda bireysel haftalık eğitim [500 €], Pazartesi-Cuma 09:00-17:00 saatleri arasında 5 günlük eğitimi, tüm malzemeleri ve DLM havaalanından transferi içermektedir.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "safety_home_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_home_item3",
    "desc": "Пункт 2.3",
    "ru": "Оперативная поддержка в Telegram-канале ретрита @limonnavillevturkey и по телефонам +7 921 304-78-92 / +90 545 598 32 11.",
    "en": "Prompt support is available on the retreat's Telegram channel @limonnavillevturkey and by phone at +7 921 304-78-92 / +90 545 598 32 11.",
    "tr": "Kampın Telegram kanalı @limonnavillevturkey üzerinden ve +7 921 304-78-92 / +90 545 598 32 11 numaralı telefonlardan hızlı destek alabilirsiniz.",
    "media": "Phone",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_title",
    "desc": "Правила бутика и доставки",
    "ru": "Бутик кутюрных изделий и Ателье «Под заказ»",
    "en": "Couture Boutique and Atelier \"Made to Order\"",
    "tr": "Couture Butik ve Atölye \"Siparişe Göre Üretim\"",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_desc",
    "desc": "Описание бутика",
    "ru": "Бережная международная доставка готовых украшений и индивидуальный пошив по утвержденному эскизу.",
    "en": "Careful international delivery of finished jewelry and custom tailoring based on an approved design.",
    "tr": "Onaylanmış bir tasarıma göre tamamlanmış mücevherlerin ve özel dikim ürünlerinin uluslararası alanda özenli teslimatı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_badge": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_badge",
    "desc": "Бейдж бутика",
    "ru": "Отправка за 2-3 дня • Трек-номер",
    "en": "Dispatch in 2-3 days • Tracking number",
    "tr": "2-3 gün içinde gönderim • Takip numarası",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_item1": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_item1",
    "desc": "Пункт 3.1",
    "ru": "Готовые броши, воротнички и сумочки отправляются в течение 2-3 рабочих дней в подарочной коробке с трек-номером.",
    "en": "Finished brooches, collars and handbags are shipped within 2-3 business days in a gift box with a tracking number.",
    "tr": "Hazırlanan broşlar, kolyeler ve el çantaları, takip numarası içeren bir hediye kutusunda 2-3 iş günü içinde kargoya verilir.",
    "media": "Package",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_item2",
    "desc": "Пункт 3.2",
    "ru": "Изделия «Под заказ» [Bespoke] создаются за 14-30 рабочих дней с фото- и видеоотчетами процесса вышивки на раме.",
    "en": "Bespoke items are created within 14-30 working days with photo and video reports of the embroidery process on the frame.",
    "tr": "Kişiye özel ürünler, işleme sürecinin fotoğraf ve video raporlarıyla birlikte 14-30 iş günü içinde üretilir.",
    "media": "Camera",
    "status": "Вкл",
    "enabled": true
  },
  "safety_access_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_access_item3",
    "desc": "Пункт 3.3",
    "ru": "ИИ-брифователь на сайте помогает мгновенно составить техническое задание на кастомную вышивку и рассчитать стоимость.",
    "en": "The website's AI briefer helps you instantly create a technical specification for custom embroidery and calculate the cost.",
    "tr": "Web sitesinin yapay zeka destekli özetleyici aracı, özel nakış için anında teknik özellikler oluşturmanıza ve maliyeti hesaplamanıza yardımcı olur.",
    "media": "Sparkles",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_title": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_title",
    "desc": "KVKK, GDPR и налоговый учет",
    "ru": "Защита данных KVKK / GDPR и фактуры e-Arşiv GİB",
    "en": "Data protection KVKK / GDPR and invoices e-Arşiv GİB",
    "tr": "Verilerin korunması KVKK/GDPR ve faturalar e-Arşiv GİB",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_desc": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_desc",
    "desc": "Описание налогов и KVKK",
    "ru": "Полное соответствие закону Турции KVKK № 6698, европейскому регламенту GDPR и стандарту VUK 213.",
    "en": "Full compliance with Turkish KVKK Law No. 6698, European GDPR and VUK 213 standard.",
    "tr": "Türkiye'nin 6698 sayılı KVKK Kanunu, Avrupa Genel Veri Koruma Yönetmeliği (GDPR) ve VUK 213 standardına tam uyumluluk.",
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
    "en": "Issuance of official electronic invoices e-Arşiv Fatura GİB in Turkish lira [TRY] at the TCMB exchange rate and NPD/IP RF checks.",
    "tr": "Türk Lirası [TRY] cinsinden, TCMB döviz kuru üzerinden resmi elektronik faturaların (e-Arşiv Fatura GİB) düzenlenmesi ve NPD/IP RF çeklerinin alınması.",
    "media": "FileText",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_item2": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_item2",
    "desc": "Пункт 4.2",
    "ru": "Безопасная двухфакторная верификация аккаунтов учениц [OTP по Email] с неизменяемым идентификатором VL-USER-XXXX.",
    "en": "Secure two-factor verification of student accounts [OTP via Email] with an immutable identifier VL-USER-XXXX.",
    "tr": "Öğrenci hesaplarının güvenli iki faktörlü doğrulaması [E-posta yoluyla OTP], değiştirilemez bir tanımlayıcı olan VL-USER-XXXX ile sağlanır.",
    "media": "ShieldCheck",
    "status": "Вкл",
    "enabled": true
  },
  "safety_cancel_item3": {
    "block": "Блок 16. Юридическая информация и футер",
    "key": "safety_cancel_item3",
    "desc": "Пункт 4.3",
    "ru": "Гибкий перенос предоплаты на следующий поток арт-отпуска или на программу онлайн-наставничества при предупреждении за 30 дней.",
    "en": "Flexible prepayment transfer to the next art vacation course or online mentoring program with 30 days' notice.",
    "tr": "30 gün önceden bildirimde bulunarak, bir sonraki sanat yaz kursuna veya çevrimiçi mentorluk programına esnek ön ödeme transferi yapabilirsiniz.",
    "media": "Calendar",
    "status": "Вкл",
    "enabled": true
  },
  "brandName": {
    "block": "Блок 13. База знаний и статьи",
    "key": "brandName",
    "desc": "Название бренда в шапке",
    "ru": "Vasilisa.luneville — вышивка от кутюр",
    "en": "Vasilisa.luneville – haute couture embroidery",
    "tr": "Vasilisa.luneville – haute couture nakış",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "login": {
    "block": "Блок 13. База знаний и статьи",
    "key": "login",
    "desc": "Кнопка входа",
    "ru": "Войти",
    "en": "Login",
    "tr": "Giriş yapmak",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "register": {
    "block": "Блок 13. База знаний и статьи",
    "key": "register",
    "desc": "Кнопка регистрации",
    "ru": "Регистрация ученицы",
    "en": "Student registration",
    "tr": "Öğrenci kaydı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "logout": {
    "block": "Блок 13. База знаний и статьи",
    "key": "logout",
    "desc": "Кнопка выхода",
    "ru": "Выйти",
    "en": "Exit",
    "tr": "Çıkış",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "guestCabinet": {
    "block": "Блок 13. База знаний и статьи",
    "key": "guestCabinet",
    "desc": "Кабинет ученицы",
    "ru": "Кабинет ученицы",
    "en": "The student's office",
    "tr": "Öğrencinin ofisi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "hostCabinet": {
    "block": "Блок 13. База знаний и статьи",
    "key": "hostCabinet",
    "desc": "Кабинет мастера Василисы",
    "ru": "Кабинет Василисы [CRM]",
    "en": "Vasilisa's office [CRM]",
    "tr": "Vasilisa'nın ofisi [CRM]",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navAbout": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navAbout",
    "desc": "Меню: О школе",
    "ru": "О школе и направлениях",
    "en": "About the school and its programs",
    "tr": "Okul ve programları hakkında",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navAmenities": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navAmenities",
    "desc": "Меню: Материалы и программа",
    "ru": "Материалы и условия",
    "en": "Materials and conditions",
    "tr": "Malzemeler ve koşullar",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navReviews": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navReviews",
    "desc": "Меню: Отзывы учениц",
    "ru": "Работы и отзывы",
    "en": "Works and reviews",
    "tr": "Eserler ve incelemeler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "navLocation": {
    "block": "Блок 13. База знаний и статьи",
    "key": "navLocation",
    "desc": "Меню: Мармарис и Вилла",
    "ru": "Мармарис и Вилла",
    "en": "Marmaris and Villa",
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
    "en": "Masterclasses, Retreats and Boutique",
    "tr": "Ustalık Sınıfları, Kamplar ve Butik",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bookNow": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "bookNow",
    "desc": "Кнопка записи",
    "ru": "Записаться на ретрит / в студию",
    "en": "Sign up for a retreat/studio",
    "tr": "Bir inziva/stüdyo programına kaydolun.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "checkIn": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "checkIn",
    "desc": "Дата начала потока",
    "ru": "Старт потока / недели",
    "en": "Start of the stream / week",
    "tr": "Haftalık yayının başlangıcı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "checkOut": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "checkOut",
    "desc": "Дата окончания потока",
    "ru": "Завершение",
    "en": "Conclusion",
    "tr": "Çözüm",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "guests": {
    "block": "Блок 7. Да��ы и бронь арт-отпуска",
    "key": "guests",
    "desc": "Количество участниц",
    "ru": "Участниц",
    "en": "Participants",
    "tr": "Katılımcılar",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "perNight": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "perNight",
    "desc": "Базовый тариф",
    "ru": "за день программы / МК",
    "en": "per day program / MK",
    "tr": "günlük program / MK",
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
    "tr": "günler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "totalPrice": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "totalPrice",
    "desc": "Итого к оплате",
    "ru": "Итого за программу",
    "en": "Total for the program",
    "tr": "Programın toplamı",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "cleaningFee": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "cleaningFee",
    "desc": "Комплект материалов от кутюр",
    "ru": "Материалы и трансфер DLM",
    "en": "DLM Materials and Transfer",
    "tr": "DLM Malzemeleri ve Transferi",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "depositText": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "depositText",
    "desc": "Условие удержания слота",
    "ru": "Слот удерживается 24 часа [HOLD] • Квота ретрита 6 мест",
    "en": "The slot is held for 24 hours [HOLD] • Retreat quota is 6 places",
    "tr": "Bu yer 24 saatliğine rezerve edilmiştir [BEKLETİLMİŞTİR] • Geri çekilme kontenjanı 6 kişidir",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "confirmBooking": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "confirmBooking",
    "desc": "Подтвердить запись",
    "ru": "Подтвердить запись и перейти к оплате",
    "en": "Confirm your booking and proceed to payment",
    "tr": "Rezervasyonunuzu onaylayın ve ödeme işlemine geçin.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "selectDates": {
    "block": "Блок 7. Даты и бронь арт-отпуска",
    "key": "selectDates",
    "desc": "Выбрать даты потока",
    "ru": "Выберите даты потока ретрита или недели в студии",
    "en": "Select dates for a retreat stream or studio week",
    "tr": "Bir inziva yayını veya stüdyo haftası için tarihleri ​​seçin.",
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
    "tr": "Kapalı",
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
    "tr": "Kaydetmek",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "showAllPhotos": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "showAllPhotos",
    "desc": "Кнопка всех фото",
    "ru": "Смотреть макро-галерею работ",
    "en": "View macro gallery of works",
    "tr": "Eserlerin makro galerisini görüntüleyin",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "showAllAmenities": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "showAllAmenities",
    "desc": "Кнопка всех материалов",
    "ru": "Показать все материалы и условия",
    "en": "Show all materials and conditions",
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
    "en": "Show all 14 Marmaris locations and retreats",
    "tr": "Marmaris'teki 14 lokasyon ve tatil yerinin tamamını göster",
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
    "tr": "Tüm öğrenci yorumlarını okuyun",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "landmarksCategoryTitle": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "landmarksCategoryTitle",
    "desc": "Заголовок категорий локаций",
    "ru": "Локации студии, виллы и экскурсий",
    "en": "Studio, villa, and excursion locations",
    "tr": "Stüdyo, villa ve gezi mekanları",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "reviewsCategoryTitle": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "reviewsCategoryTitle",
    "desc": "Заголовок оценок школы",
    "ru": "Оценки учениц по 6 критериям обучения",
    "en": "Student scores on 6 learning criteria",
    "tr": "Öğrenci 6 öğrenme kriteri üzerinden puan aldı.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "reviewsRatingTitle": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "reviewsRatingTitle",
    "desc": "Рейтинг школы",
    "ru": "Рейтинг школы 5.0 из 5",
    "en": "School rating: 5.0 out of 5",
    "tr": "Okul değerlendirmesi: 5 üzerinden 5",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "legalRegulationHeader": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "legalRegulationHeader",
    "desc": "Заголовок оферты и правил",
    "ru": "Публичная оферта, KVKK / GDPR и гарантии Vasilisa.luneville",
    "en": "Public Offer, GDPR, and Guarantees by Vasilisa.luneville",
    "tr": "Vasilisa.luneville tarafından sunulan Halka Arz, GDPR ve Garantiler",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "chatWithHost": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "chatWithHost",
    "desc": "Кнопка чата с Василисой",
    "ru": "Чат с Василисой и сдача видео ДЗ",
    "en": "Chat with Vasilisa and turn in video homework",
    "tr": "Vasilisa ile sohbet edin ve video ödevinizi teslim edin.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "onlineStatus": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "onlineStatus",
    "desc": "Статус онлайн",
    "ru": "Василиса и ИИ-Куратор на связи",
    "en": "Vasilisa and the AI ​​Curator are in touch",
    "tr": "Vasilisa ve Yapay Zeka Küratörü iletişim halindeler.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "typing": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "typing",
    "desc": "Печатает ответ",
    "ru": "ИИ-Куратор формирует ответ...",
    "en": "The AI ​​Curator generates a response...",
    "tr": "Yapay Zeka Küratörü bir yanıt oluşturuyor...",
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
    "tr": "Göndermek",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "messagePlaceholder": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "messagePlaceholder",
    "desc": "Плейсхолдер чата",
    "ru": "Задайте вопрос по МК/ретриту или прикрепите ссылку на 20-30 сек видео ДЗ...",
    "en": "Ask a question about the MK/retreat or attach a link to a 20-30 second video of homework...",
    "tr": "MK/inziva hakkında bir soru sorun veya ödevle ilgili 20-30 saniyelik bir videonun bağlantısını ekleyin...",
    "media": "",
    "status": "Вкл",
    "enabled": true
  },
  "bookingSuccess": {
    "block": "Блок 14. ИИ-Куратор и частые вопросы",
    "key": "bookingSuccess",
    "desc": "Уведомление об успешной записи",
    "ru": "Заявка принята! Доступ или подтверждение брони отправлены в ваш кабинет и Telegram.",
    "en": "Your request has been accepted! Access or booking confirmation has been sent to your account and Telegram.",
    "tr": "İsteğiniz kabul edildi! Erişim veya rezervasyon onayı hesabınıza ve Telegram'a gönderildi.",
    "media": "",
    "status": "Вкл",
    "enabled": true
  }
};

const MASTER_HOME_ROWS = [
  [
    "Блок 1. Главный экран ателье",
    "HERO_ATELIER",
    "Главный баннер / Первый экран сайта",
    "Vasilisa.luneville - школа и ателье кутюрной вышивки. Создавайте красоту своими руками с 2015 года. От первых стежков до высокой моды.",
    "Vasilisa.luneville is a couture embroidery school and studio. Create beauty with your own hands since 2015. From the first stitches to haute couture.",
    "Vasilisa.luneville, haute couture nakış okulu ve stüdyosudur. 2015'ten beri kendi ellerinizle güzellik yaratın. İlk dikişlerden haute couture'e.",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "DIRECTION_CARDS",
    "Карточки 4 направлений школы и бутика",
    "Онлайн мастер-классы [от 10 €], Индивидуальное онлайн-наставничество [200 €], Офлайн-студия в Мармарисе [500 €], Арт-отпуска в горах Турции [1100-1500 €], Бутик авторских изделий",
    "Online master classes [from €10], Individual online mentoring [€200], Offline studio in Marmaris [€500], Art holidays in the mountains of Turkey [€1100-1500], Boutique of original products",
    "Çevrimiçi ustalık sınıfları [10 €'dan başlayan fiyatlarla], Bireysel çevrimiçi mentorluk [200 €], Marmaris'te yüz yüze stüdyo [500 €], Türkiye dağlarında sanat tatili [1100-1500 €], Orijinal ürünler butiği",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "MASTERCLASSES_SHOWCASE",
    "Секция каталога 5 онлайн МК",
    "Доступные онлайн МК: Ветка лаванды [10 €], Мимоза - 4 варианта [10 € / 1000 ₽], Фейерверк [15 €], Оформление в рамку [10 €], Зимняя сказка [15 €]. Доступ навсегда в Telegram.",
    "Available online workshops: Lavender Branch [€10], Mimosa - 4 variations [€10 / 1000 ₽], Fireworks [€15], Framing [€10], Winter's Tale [€15]. Lifetime access on Telegram.",
    "Çevrimiçi olarak sunulan atölyeler: Lavanta Dalı [€10], Mimoza - 4 varyasyon [€10 / 1000 ₽], Havai Fişek [€15], Çerçeveleme [€10], Kış Masalı [€15]. Telegram üzerinden ömür boyu erişim.",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "ONLINE_MENTORSHIP",
    "Презентация флагманского курса 16 уроков",
    "Индивидуальное наставничество «Основы люневильской вышивки» - 16 макро-видеоуроков, доступ навсегда и 6 месяцев личной обратной связи по 20-30 сек видео. 200 €.",
    "Individual mentoring \"Basics of Lunéville Embroidery\" - 16 macro video lessons, lifetime access and 6 months of personal feedback (20-30 second videos). €200.",
    "\"Lunéville Nakışının Temelleri\" konulu bireysel mentorluk eğitimi - 16 makro video dersi, ömür boyu erişim ve 6 ay boyunca kişisel geri bildirim (20-30 saniyelik videolar). 200 €.",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "OFFLINE_STUDIO_MARMARIS",
    "Очное обучение в студии Мармариса",
    "5 дней в студии Мармариса [пн-пт 09:00-17:00]. Постановка руки, профессиональные рамы и материалы включены, помощь с отелем и трансфер из аэропорта Даламан DLM. 500 €.",
    "5 days in a Marmaris studio [Mon-Fri 9:00-17:00]. Includes hand positioning, professional frames and materials, hotel assistance, and transfer from Dalaman DLM Airport. €500.",
    "Marmaris'te 5 günlük stüdyo çekimi [Pazartesi-Cuma 9:00-17:00]. El pozisyonu ayarlama, profesyonel çerçeve ve malzemeler, otel yardımı ve Dalaman DLM Havalimanı'ndan transfer dahildir. 500 €.",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "ART_RETREAT_TURKEY",
    "Презентация ретрита на горной вилле",
    "8 дней / 7 ночей на приватной горной вилле в провинции Мугла [30 мин от DLM]. Группа до 6 участниц, наставники Василиса Боровикова и Юлия Озмен, шеф Марина. Выезд в Акьяку, реку Азмак, Дальян и пляж Изтузу.",
    "8 days / 7 nights at a private mountain villa in Muğla Province [30 minutes from DLM]. Group of up to 6 participants, guided by Vasilisa Borovikova and Yulia Ozmen, and chef Marina. Departure to Akyaka, the Azmak River, Dalyan, and Iztuzu Beach.",
    "Muğla ilinde (DLM'ye 30 dakika mesafede) özel bir dağ villasında 8 gün / 7 gece konaklama. Vasilisa Borovikova ve Yulia Özmen rehberliğinde ve şef Marina eşliğinde en fazla 6 kişilik grup. Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı'na hareket.",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "RETREAT_CALENDAR_BOOKING",
    "Сетка 4 потоков 2027 и бронирование",
    "Потоки 2027 [по 6 мест]: 1-8 мая, 19-26 июня, 18-25 сентября, 23-30 октября. Тарифы: 1100 € [односп. кровать], 1200 € [двусп. кровать], 1500 € [отдельная спальня]. Удержание брони 24ч HOLD.",
    "Streams 2027 [6 beds each]: May 1-8, June 19-26, September 18-25, October 23-30. Rates: €1100 [single bed], €1200 [double bed], €1500 [separate bedroom]. 24-hour HOLD.",
    "2027 Sezonu [her biri 6 yataklı]: 1-8 Mayıs, 19-26 Haziran, 18-25 Eylül, 23-30 Ekim. Fiyatlar: 1100 € [tek kişilik yatak], 1200 € [çift kişilik yatak], 1500 € [ayrı yatak odası]. 24 saat rezervasyon yapılabilir.",
    "https://t.me/limonnavillevturkey",
    "Вкл"
  ],
  [
    "Блок 8. Бутик кутюрных изделий",
    "BOUTIQUE_READY_AND_BESPOKE",
    "Каталог готовых изделий и ателье под заказ",
    "Авторские кутюрные броши, расшитые воротнички, вечерние сумочки в наличии и индивидуальный пошив под заказ [Bespoke Atelier] по вашему брифу с доставкой по всему миру.",
    "Designer couture brooches, embroidered collars, evening bags in stock and custom-made to order [Bespoke Atelier] according to your brief with worldwide delivery.",
    "Tasarımcı haute couture broşlar, işlemeli yakalar, gece çantaları stokta mevcuttur ve isteğinize göre özel olarak [Özel Atölye] üretilir, dünya çapında teslimat yapılır.",
    "https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "MACRO_GALLERY_PROCESS",
    "Макросъемка стежков и материалов",
    "Макросъемка люневильского тамбурного стежка, работа с шелковой синелью, бархатом, прозрачной органзой, французскими пайетками и японским бисером.",
    "Macro photography of Lunéville chain stitch, working with silk chenille, velvet, sheer organza, French sequins and Japanese beads.",
    "İpek şönil, kadife, ince organza, Fransız payetleri ve Japon boncuklarıyla yapılan Lunéville zincir dikişinin makro fotoğrafı.",
    "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 10. Как проходит обучение",
    "HOW_LEARNING_WORKS",
    "Пошаговая методика обучения",
    "Шаг 1: Выбор МК или наставничества и оплата -> Шаг 2: Мгновенный доступ к макро-урокам в Telegram и кабинете -> Шаг 3: Отправка 20-30 сек видео ДЗ -> Шаг 4: Бережный разбор Василисы и сертификат.",
    "Step 1: Select a master class or mentoring and pay -> Step 2: Instant access to macro lessons in Telegram and your account -> Step 3: Send a 20-30 second video of your homework -> Step 4: Careful analysis by Vasilisa and a certificate.",
    "Adım 1: Bir master sınıfı veya mentorluk programı seçin ve ödeme yapın -> Adım 2: Telegram ve hesabınız üzerinden makro derslere anında erişim -> Adım 3: Ödevinizin 20-30 saniyelik bir videosunu gönderin -> Adım 4: Vasilisa tarafından dikkatli analiz ve sertifika.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "ABOUT_MASTERS",
    "Команда мастеров школы и ретритов",
    "Василиса Боровикова - кутюрная вышивальщица с 2015 г., основатель студии в Мармарисе; Юлия Озмен - соавтор ретритов и дизайнер сумочек; Марина - хозяйка ретритной виллы и шеф-повар.",
    "Vasilisa Borovikova, a couture embroiderer since 2015 and founder of a studio in Marmaris, is a co-author of retreats and handbag designer, and Marina is the owner of the retreat villa and a chef.",
    "2015'ten beri haute couture nakışçısı olan ve Marmaris'te bir stüdyo kuran Vasilisa Borovikova, inziva programlarının ortak yazarı ve çanta tasarımcısıdır; Marina ise inziva villasının sahibi ve şefidir.",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "STUDENT_REVIEWS_WORKS",
    "Работы выпускниц и отзывы",
    "Реальные работы учениц с нуля до кутюрных коллекций, отзывы об онлайн-наставничестве, мастер-классах Лаванда и Мимоза и арт-отпусках в Турции.",
    "Real-life work by students from scratch to couture collections, reviews of online mentoring, Lavender and Mimosa master classes, and art vacations in Turkey.",
    "Öğrencilerin sıfırdan başlayarak haute couture koleksiyonlarına kadar uzanan gerçek hayattan çalışmaları, çevrimiçi mentorluk değerlendirmeleri, Lavender and Mimosa ustalık sınıfları ve Türkiye'deki sanat tatilleri.",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "KNOWLEDGE_PREVIEW",
    "Энциклопедия вышивальщицы",
    "Гид по выбору люневильского крючка №70-90, правила барабанной запялки органзы в раму и пяльцы, таблица размеров пайеток и бисера, секреты чистой изнанки.",
    "A guide to choosing a Lunéville crochet hook #70-90, rules for drum-hooping organza in a frame and hoop, a table of sequin and bead sizes, and secrets to a clean backing.",
    "Lunéville 70-90 numaralı tığ seçimine dair bir rehber, organza kumaşı çerçeve ve kasnakta germe kuralları, pul ve boncuk boyutları tablosu ve temiz bir arka yüzey elde etmenin sırları.",
    "BookOpen",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "AI_CURATOR_FAQ",
    "Интеллектуальный помощник Gemini 3.6 Flash",
    "ИИ-Куратор Gemini 3.6 Flash 24/7 поможет подобрать первый мастер-класс, рассчитает карту материалов в EUR/RUB/TRY/USD, примет бриф на индивидуальный заказ и ответит на вопросы по арт-отпуску.",
    "Gemini 3.6 Flash, the AI ​​curator, is available 24/7 to help you find your first masterclass, calculate your material cost in EUR/RUB/TRY/USD, accept your custom order brief, and answer your art vacation questions.",
    "Yapay zekâ küratörü Gemini 3.6 Flash, ilk ustalık sınıfınızı bulmanıza, malzeme maliyetinizi EUR/RUB/TRY/USD cinsinden hesaplamanıza, özel sipariş özetinizi kabul etmenize ve sanat tatili sorularınızı yanıtlamanıza yardımcı olmak için 7/24 hizmetinizdedir.",
    "MessageCircle",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "CONTACTS_AND_STUDIO_MAP",
    "Контакты студии и карта Мармариса",
    "Мармарис, провинция Мугла, Турция [30-90 мин от аэропорта Даламан DLM]. Тел/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "Marmaris, Mugla Province, Türkiye [30-90 min from Dalaman DLM Airport]. Tel/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. Email: vasilisa.luneville@gmail.com. Telegram: @limonnavillevturkey.",
    "Marmaris, Muğla İli, Türkiye [Dalaman DLM Havaalanından 30-90 dk.]. Tel/WhatsApp: +7 921 304-78-92, +90 545 598 32 11. E-posta: vasilisa.luneville@gmail.com. Telgraf: @limonnavillevturkey.",
    "MapPin",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "LEGAL_AND_FOOTER",
    "Оферты, KVKK/GDPR и реквизиты",
    "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - вышивка от кутюр. Публичная оферта на обучение и арт-отпуска, политика KVKK / GDPR, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - haute couture embroidery. Public offer for training and art holidays, KVKK / GDPR policy, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "© 2015-2027 Vasilisa Borovikova : Vasilisa.luneville - haute couture nakış. Eğitim ve sanat tatilleri için kamuya açık teklif, KVKK / GDPR politikası, e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_title",
    "Главный заголовок страницы",
    "Vasilisa.luneville - школа кутюрной вышивки, наставничество в Мармарисе, арт-отпуска в Турции и бутик",
    "Vasilisa.luneville - a couture embroidery school, mentoring in Marmaris, art vacations in Turkey, and a boutique",
    "Vasilisa.luneville - bir haute couture nakış okulu, Marmaris'te mentorluk, Türkiye'de sanat tatilleri ve bir butik.",
    "",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_subtitle",
    "Подзаголовок главного экрана",
    "Онлайн мастер-классы от 10 € • Личное наставничество 16 уроков • Офлайн-интенсивы в Мармарисе • Кутюрные ретриты на вилле в Мугле",
    "Online master classes from €10 • Personal mentoring 16 lessons • Offline intensives in Marmaris • Couture retreats at a villa in Mugla",
    "10 €'dan başlayan fiyatlarla çevrimiçi ustalık sınıfları • 16 derslik kişisel mentorluk • Marmaris'te yüz yüze yoğun eğitimler • Muğla'da bir villada haute couture inzivası",
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
    "Master of couture embroidery since 2015.",
    "2015'ten beri haute couture nakış ustası.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_location",
    "Локация в шапке",
    "Мармарис и горная вилла в Мугле, Турция [30 мин от DLM]",
    "Marmaris and Mountain Villa in Mugla, Türkiye [30 min from DLM]",
    "Muğla'da Marmaris ve Dağ Villası, Türkiye [DLM'den 30 dakika]",
    "MapPin",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_share_btn",
    "Кнопка Поделиться",
    "Поделиться",
    "Share",
    "Paylaşmak",
    "Share2",
    "Вкл"
  ],
  [
    "Блок 1. Главный экран ателье",
    "hero_favorite_btn",
    "Кнопка В избранное",
    "В избранное",
    "Add to favorites",
    "Favorilere ekle",
    "Heart",
    "Вкл"
  ],
  [
    "Блок 1. Гл��вный экран ателье",
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
    "House of Couture Embroidery, School, and Retreats under the direction of Vasilisa Borovikova",
    "Vasilisa Borovikova'nın yönetimindeki Haute Couture Nakış Evi, Okulu ve Atölyeleri",
    "",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "host_specs_name",
    "Имена наставников",
    "Василиса Боровикова и Юлия Озмен",
    "Vasilisa Borovikova and Yulia Ozmen",
    "Vasilisa Borovikova ve Yulia Özmen",
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
    "Up to 6 participants per stream",
    "Her yayın akışına en fazla 6 katılımcı.",
    "Users",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_bedrooms",
    "Количество онлайн МК и уроков",
    "5 онлайн МК + 16 уроков курса",
    "5 online master classes + 16 course lessons",
    "5 çevrimiçi ustalık sınıfı + 16 ders içeriği",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_beds",
    "Форматы наставничества",
    "Онлайн [6 мес] и Студия Мармарис [5 дн]",
    "Online [6 months] and Studio Marmaris [5 days]",
    "Çevrimiçi [6 ay] ve Studio Marmaris [5 gün]",
    "Award",
    "Вкл"
  ],
  [
    "Блок 2. Направления школы",
    "spec_baths",
    "Потоки арт-отпуска 2027",
    "4 потока в 2027 г. [8 дней / 7 ночей]",
    "4 streams in 2027 [8 days / 7 nights]",
    "2027'de 4 akış [8 gün / 7 gece]",
    "Calendar",
    "Вкл"
  ],
  [
    "Блок 3. Витрина м��стер-классов",
    "highlight_1_title",
    "Преимущество 1: Заголовок",
    "Обучение с нуля до уровня Haute Couture и проверка видео ДЗ по 20-30 секунд",
    "Training from scratch to Haute Couture level and video homework review of 20-30 seconds",
    "Sıfırdan Haute Couture seviyesine kadar eğitim ve 20-30 saniyelik video ödev incelemesi.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_1_desc",
    "Преимущество 1: Описание",
    "Пошаговая макросъемка каждого стежка и 6 месяцев бережной личной обратной связи от Василисы Боровиковой в Telegram-чате.",
    "Step-by-step macro photography of every stitch and 6 months of careful personal feedback from Vasilisa Borovikova in Telegram chat.",
    "Her bir dikişin adım adım makro fotoğrafları ve Vasilisa Borovikova'nın Telegram sohbetindeki 6 aylık özenli kişisel geri bildirimleri.",
    "",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_2_title",
    "Преимущество 2: Заголовок",
    "Очная студия в Мармарисе и ��утюрные арт-отпуска на горной вилле в Турции",
    "A full-time studio in Marmaris and couture art vacations at a mountain villa in Turkey",
    "Marmaris'te tam zamanlı bir stüdyo ve Türkiye'de bir dağ villasında haute couture sanat tatilleri.",
    "Compass",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_2_desc",
    "Преимущество 2: Описание",
    "5-дневные индивидуальные интенсивы в Мармарисе [500 €] и 8-дневные арт-отпуска в горах Муглы [1100-1500 €] с трансфером из аэропорта Даламан DLM.",
    "5-day individual intensive courses in Marmaris [500 €] and 8-day art holidays in the mountains of Mugla [1100-1500 €] with transfer from Dalaman DLM airport.",
    "Marmaris'te 5 günlük bireysel yoğun kurslar [500 €] ve Muğla dağlarında 8 günlük sanat tatili [1100-1500 €], Dalaman DLM havaalanından transfer dahil.",
    "",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_3_title",
    "Преимущество 3: Заголовок",
    "Бессрочный доступ к урокам, удержание слота 24ч HOLD и бутик изде��ий",
    "Lifetime access to lessons, 24-hour HOLD slot, and a product boutique",
    "Ömür boyu derslere erişim, 24 saat bekleme süresi ve ürün butiği.",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 3. Витрина мастер-классов",
    "highlight_3_desc",
    "Преимущество 3: Описание",
    "Мгновенная выдача инвайтов в закрытые Telegram-каналы после оплаты, квота строго 6 мест на ретрит и доставка авторских изделий по всему миру.",
    "Instant invitations to private Telegram channels upon payment, a strict 6-spot quota for the retreat, and worldwide delivery of original products.",
    "Ödeme yapıldıktan hemen sonra özel Telegram kanallarına davetiye, inziva için kesin 6 kişilik kontenjan ve orijinal ürünlerin dünya çapında teslimatı.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_title",
    "Заголовок секции О школе и направлениях",
    "О школе кутюрной вышивки Vasilisa.luneville, наставничестве, арт-отпусках и бутике",
    "About the Vasilisa.luneville couture embroidery school, mentoring, art vacations, and boutique",
    "Vasilisa.luneville haute couture nakış okulu, mentorluk programı, sanat tatilleri ve butiği hakkında",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_text",
    "Краткий вводный текст О школе",
    "С 2015 года мы обучаем искусству парижской люневильской вышивки крючком и кутюрной вышивки иглой по шелковой органзе и бархату. Выбирайте удобный формат: доступные онлайн мастер-классы от 10 €, флагманское 6-месячное онлайн-наставничество из 16 уроков [200 €], индивидуальную неделю в студии в Мармарисе [500 €], незабываемый 8-дневный арт-отпуск на горной вилле в Турции [1100-1500 €] или заказ эксклюзивного изделия в нашем бутике.",
    "Since 2015, we've been teaching the art of Parisian Lunéville crochet and couture needlepoint embroidery on silk organza and velvet. Choose your preferred format: affordable online masterclasses starting at €10, our flagship 6-month online mentorship of 16 lessons [€200], a private week in a studio in Marmaris [€500], an unforgettable 8-day art retreat at a mountain villa in Turkey [€1100-1500], or ordering an exclusive piece from our boutique.",
    "2015 yılından beri, ipek organza ve kadife üzerine Paris Lunéville tığ işi ve haute couture iğne oyası sanatını öğretiyoruz. Tercih ettiğiniz formatı seçin: 10 €'dan başlayan uygun fiyatlı çevrimiçi ustalık sınıfları, 16 dersten oluşan amiral gemisi 6 aylık çevrimiçi mentorluk programımız [200 €], Marmaris'teki bir stüdyoda özel bir hafta [500 €], Türkiye'deki bir dağ villasında unutulmaz 8 günlük sanat inzivası [1100-1500 €] veya butiğimizden özel bir parça sipariş etmek.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_btn_more",
    "Кнопка открытия полного описания",
    "Читать подробнее о всех 5 направлениях",
    "Read more about all 5 directions",
    "5 yönün tamamı hakkında daha fazla bilgi edinin.",
    "ChevronRight",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_modal_title",
    "Заголовок модального окна описания",
    "Пять направлений экосистемы Vasilisa.luneville - выш��вка от кутюр",
    "Five directions of the Vasilisa.luneville ecosystem - haute couture embroidery",
    "Vasilisa.luneville ekosisteminin beş yönü - haute couture nakış",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_1_title",
    "Раздел 1 описания",
    "1. Направление 0: Главный манифест и история бренда Vasilisa.luneville с 2015 года",
    "1. Direction 0: The main manifesto and history of the Vasilisa.luneville brand since 2015",
    "1. Yön 0: Vasilisa.luneville markasının 2015'ten beri süregelen ana manifestosu ve tarihi.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_1_text",
    "Текст раздела 1",
    "Vasilisa.luneville - вышивка от кутюр - это международная онлайн-школа кутюрной и люневильской вышивки, студия индивидуального наставничества в Мармарисе, организатор кутюрных арт-отпусков в Турции и бутик авторских изделий ручной работы.\n\nОснователь и ведущий мастер: Василиса Боровикова [Боровикова / Vasilisa Borovikova] - художник по вышивке от кутюр с опытом преподавания и создания коллекций с 2015 года.\nСоавтор арт-отпусков: Юлия Озмен [Yulia Ozmen] - кутюрный вышивальщик и основатель бренда эксклюзивных сумочек [преподает с 2018 года].\nПринимающая сторона ретритной виллы: Марина - хозяйка уединенной горной виллы в провинции Мугла и шеф домашней средиземноморской гастрономии.\n\nКонтакты и реквизиты:\n* Локация студии: Мармарис, провинция Мугла, Турция [Marmaris, Muğla, Türkiye].\n* Локация арт-отпусков: Горная вилла в провинции Мугла [30 минут от международного аэропорта Даламан DLM].\n* Телефон и WhatsApp РФ: +7 921 304-78-92.\n* Телефон и WhatsApp Турция: +90 545 598 32 11.\n* Официальный Email: vasilisa.luneville@gmail.com.\n* Telegram-канал арт-отпусков: https://t.me/limonnavillevturkey.",
    "Vasilisa.luneville - Haute Couture Embroidery is an international online school of couture and Lunéville embroidery, a one-on-one mentoring studio in Marmaris, an organizer of couture art vacations in Turkey, and a boutique of original handmade items.\n\nFounder and Lead Artist: Vasilisa Borovikova - a couture embroidery artist with experience teaching and creating collections since 2015.\nArt Vacation Co-Creator: Yulia Ozmen - a couture embroiderer and founder of an exclusive handbag brand (teaching since 2018).\nRetreat Villa Host: Marina - the owner of a secluded mountain villa in the Muğla province and chef of homemade Mediterranean cuisine.\n\nContact information:\n* Studio location: Marmaris, Muğla Province, Turkey [Marmaris, Muğla, Türkiye].\n* Art Vacations location: Mountain villa in Muğla Province [30 minutes from Dalaman International Airport DLM].\n* Phone and WhatsApp (Russia): +7 921 304-78-92.\n* Phone and WhatsApp (Turkey): +90 545 598 32 11.\n* Official email: vasilisa.luneville@gmail.com.\n* Art Vacations Telegram channel: https://t.me/limonnavillevturkey.",
    "Vasilisa.luneville - Haute Couture Nakış, uluslararası bir online haute couture ve Lunéville nakış okulu, Marmaris'te bire bir mentorluk stüdyosu, Türkiye'de haute couture sanat tatilleri düzenleyen bir kuruluş ve orijinal el yapımı ürünler satan bir butiktir.\n\nKurucu ve Baş Sanatçı: Vasilisa Borovikova - 2015 yılından beri koleksiyonlar tasarlayan ve öğreten deneyimli bir haute couture nakış sanatçısı.\nSanat Tatili Ortak Yaratıcısı: Yulia Özmen - haute couture nakış sanatçısı ve özel bir el çantası markasının kurucusu (2018'den beri ders veriyor).\nDinlenme Villası Ev Sahibi: Marina - Muğla ilinde tenha bir dağ villasının sahibi ve ev yapımı Akdeniz mutfağı şefi.\n\nİletişim bilgileri:\n* Stüdyo konumu: Marmaris, Muğla ili, Türkiye [Marmaris, Muğla, Türkiye].\n\n* Sanat Tatilleri konumu: Muğla ilinde dağ villası [Dalaman Uluslararası Havalimanı'na 30 dakika].\n* Telefon ve WhatsApp (Rusya): +7 921 304-78-92.\n\n* Telefon ve WhatsApp (Türkiye): +90 545 598 32 11.\n* Resmi e-posta: vasilisa.luneville@gmail.com.\n\n* Sanat Tatilleri Telegram kanalı: https://t.me/limonnavillevturkey.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_2_title",
    "Раздел 2 описания",
    "2. Направление 1: Обучающие онлайн мастер-классы с бессрочным доступом",
    "2. Direction 1: Online educational master classes with unlimited access",
    "2. Yön 1: Sınırsız erişimli çevrimiçi eğitim ustalık sınıfları",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_2_text",
    "Текст раздела 2",
    "Пять практических онлайн мастер-классов в закрытых Telegram-каналах с пошаговой макросъемкой и доступом навсегда:\n1. МК «Ветка лаванды» [10 € / 1000 ₽]: вышивка иглой по прозрачной шелковой органзе, создание нежной объемной аппликации 10x15 см для одежды и брошей. Идеально для старта с нуля на обычных пяльцах.\n2. МК «Мимоза - 4 варианта» [10 € / 1000 ₽]: изучение четырех различных фактурных техник вышивки солнечной веточки мимозы бисером, пайетками и мулине.\n3. МК «Фейерверк» [15 € / 1500 ₽]: динамичная композиция с французскими пайетками, стеклярусом и бисером.\n4. МК «Оформление вышивки в рамку» [10 € / 1000 ₽]: секреты профессионально�� натяжки тонких тканей и багетного оформления готовых кутюрных работ.\n5. МК «Зимняя сказка» [15 € / 1500 ₽]: работа с шелковой синелью, канителью и кристаллами в праздничной технике высокой моды.",
    "Five practical online workshops in private Telegram channels with step-by-step macro photography and lifetime access:\n1. Workshop \"Lavender Branch\" [€10 / ₽1,000]: needlepoint embroidery on sheer silk organza, creating a delicate 10x15 cm 3D appliqué for clothing and brooches. Ideal for starting from scratch on a regular embroidery hoop.\n2. Workshop \"Mimosa - 4 Variations\" [€10 / ₽1,000]: learning four different textured techniques for embroidering a sunny mimosa branch using beads, sequins, and floss.\n3. Workshop \"Fireworks\" [€15 / ₽1,500]: a dynamic composition with French sequins, bugle beads, and seed beads.\n4. Workshop \"Framing Embroidery\" [€10 / ₽1,000]: secrets of professionally stretching fine fabrics and framing finished couture pieces.\n5. Workshop \"Winter's Tale\" [€15 / ₽1,500]: working with silk chenille, gold thread, and crystals using festive haute couture techniques.",
    "Özel Telegram kanallarında adım adım makro fotoğrafçılık ve ömür boyu erişim içeren beş pratik çevrimiçi atölye çalışması:\n1. \"Lavanta Dalı\" Atölyesi [€10 / ₽1.000]: İnce ipek organza üzerine iğne oyası nakışı, giysiler ve broşlar için narin 10x15 cm 3 boyutlu aplike oluşturma. Normal bir nakış kasnağında sıfırdan başlamak için idealdir.\n\n2. \"Mimoza - 4 Varyasyon\" Atölyesi [€10 / ₽1.000]: Boncuk, payet ve iplik kullanarak güneşli bir mimoza dalını işlemek için dört farklı doku tekniğini öğrenme.\n\n3. \"Havai Fişekler\" Atölyesi [€15 / ₽1.500]: Fransız payetleri, boru boncukları ve tohum boncuklarıyla dinamik bir kompozisyon.\n4. \"Nakış Çerçeveleme\" Atölyesi [10 € / 1.000 ₽]: İnce kumaşları profesyonelce germenin ve bitmiş haute couture parçalarını çerçevelemenin sırları.\n5. \"Kış Masalı\" Atölyesi [15 € / 1.500 ₽]: İpek şönil, altın iplik ve kristallerle, şenlikli haute couture teknikleri kullanılarak çalışma.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_3_title",
    "Раздел 3 описания",
    "3. Направление 2: Индивидуальное кутюрное наставничество [Онлайн и Офлайн в Мармарисе]",
    "3. Direction 2: Individual couture mentoring [Online and Offline in Marmaris]",
    "3. Yön 2: Bireysel haute couture mentorluğu [Marmaris'te Çevrimiçi ve Çevrimdışı]",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_3_text",
    "Текст раздела 3",
    "Два флагманских формата персональной постановки руки и глубокого освоения люневильской вышивки:\n\n1. Онлайн-наставничество «Основы люневильской вышивки» [200 €]:\n* 16 подробных макро-видеоуроков [от запялки органзы в раму и базового тамбурного стежка крючком №70-90 до вышивки пайетками, бисером и синелью с изнанки].\n* Бессрочный доступ ко всем 16 видеоурокам.\n* 6 месяцев [180 дней] индивидуального сопровождения Василисы в личном чате: ученица отправляет короткие видео своей работы по 20-30 секунд, а мастер детально разбирает каждое движение руки, натяжение нити и поворот крючка.\n\n2. Офлайн-наставничество в студии в Мармарис�� [500 €]:\n* 5 полных учебных дней [понедельник - пятница с 09:00 до 17:00] один на один с Василисой в светлой мастерской в Мармарисе.\n* Все профессиональные кутюрные рамы, люневильские крючки, шелковая органза, французские пайетки и бисер предоставляются в студии.\n* Индивидуальная встреча и трансфер из аэропорта Даламан [DLM] и помощь в подборе комфортного отеля у моря.",
    "Two flagship formats for personalized hand training and in-depth mastery of Lunéville embroidery:\n\n1. Online mentoring \"Basics of Lunéville Embroidery\" [€200]:\n* 16 detailed macro video lessons [from hooping organza in a frame and the basic chain stitch with #70-90 crochet hooks to embroidering sequins, beads, and chenille on the reverse side].\n* Unlimited access to all 16 video lessons.\n* 6 months [180 days] of individual support from Vasilisa in a private chat: the student sends short 20-30 second videos of her work, and the master carefully analyzes every hand movement, thread tension, and hook turn.\n\n2. Offline Mentoring at the Marmaris Studio [€500]:\n* 5 full days of one-on-one instruction [Monday - Friday, 9:00 AM - 5:00 PM] with Vasilisa in a bright studio in Marmaris.\n* All professional couture frames, Lunéville hooks, silk organza, French sequins, and beads are provided in the studio.\n* Individual pick-up and transfer from Dalaman Airport [DLM] and assistance in finding a comfortable seaside hotel.",
    "Lunéville nakışında kişiselleştirilmiş el eğitimi ve derinlemesine ustalık için iki amiral gemisi format:\n\n1. Çevrimiçi Mentorluk \"Lunéville Nakışının Temelleri\" [€200]:\n* 16 detaylı makro video dersi [organzayı çerçeveye germekten ve #70-90 tığ ile temel zincir dikişinden, pul, boncuk ve şönil işlemeye kadar].\n\n* 16 video dersinin tamamına sınırsız erişim.\n\n* Vasilisa'dan özel bir sohbette 6 ay [180 gün] bireysel destek: öğrenci çalışmasının 20-30 saniyelik kısa videolarını gönderir ve usta her el hareketini, iplik gerginliğini ve tığ dönüşünü dikkatlice analiz eder.\n\n2. Marmaris Stüdyosunda Yüz Yüz Mentorluk [€500]:\n* Marmaris'teki aydınlık bir stüdyoda Vasilisa ile 5 tam gün bire bir eğitim [Pazartesi - Cuma, 09:00 - 17:00].\n* Stüdyoda tüm profesyonel haute couture çerçeveler, Lunéville kancaları, ipek organza, Fransız payetleri ve boncuklar mevcuttur.\n\n* Dalaman Havalimanı'ndan (DLM) bireysel karşılama ve transfer hizmeti ile rahat bir sahil oteli bulma konusunda yardım sağlanmaktadır.",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_4_title",
    "Раздел 4 описания",
    "4. Направление 3: Кутюрные арт-отпуска на горной вилле в Турции [Сезон 2027]",
    "4. Direction 3: Couture art holidays at a mountain villa in Turkey [Season 2027]",
    "4. Yön 3: Türkiye'de bir dağ villasında haute couture sanat tatili [2027 Sezonu]",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_4_text",
    "Текст раздела 4",
    "Кутюрный арт-отпуск в Турции - это 8 дней / 7 ночей творчества, вдохновения и отдыха в камерной группе строго до 6 участниц на приватной вилле в горах провинции Мугла [30 минут от аэропорта Даламан DLM].\n\nКоманда ретрита: наставники по кутюрной вышивке Василиса Боровикова и Юлия Озмен, хозяйка виллы и шеф-повар Марина.\n\nРасписание 4 потоков сезона 2027 года [по 6 мест в потоке]:\n* Поток 1: 1 мая - 8 мая 2027 г.\n* Поток 2: 19 июня - 26 июня 2027 г.\n* Поток 3: 18 сентября - 25 сентября 2027 г.\n* Поток 4: 23 октября - 30 октября 2027 г.\n\nТарифы участия [всё включено, кроме авиабилетов]:\n* 1100 € - размещение на односпальной кровати в просторной двухместной спальне.\n* 1200 € - размещение на большой двуспальной кровати.\n* 1500 € - одноместное размещение в отдельной приватной спальне с санузлом.\n\nВ стоимость включено: проживание 7 ночей на вилле с бассейном и фруктовым садом, 3-разовое домашнее питание от Марины, 5 дней мастер-классов по вышивке в саду, все материалы и инструменты, индивидуальный трансфер из аэропорта DLM и выездной экскурсионный день [аутентичная Акьяка, прогулка по кристальной реке Азмак, Дальян и заповедный песчаный пляж Изтузу].",
    "A couture art retreat in Turkey is 8 days/7 nights of creativity, inspiration, and relaxation in an intimate group of up to 6 participants at a private villa in the mountains of Muğla Province (30 minutes from Dalaman Airport).\n\nRetreat team: couture embroidery mentors Vasilisa Borovikova and Yulia Ozmen, and villa hostess and chef Marina.\n\nSchedule of the 4 streams of the 2027 season [6 spots per stream]:\n* Stream 1: May 1 - May 8, 2027\n* Stream 2: June 19 - June 26, 2027\n* Stream 3: September 18 - September 25, 2027\n* Stream 4: October 23 - October 30, 2027\n\nParticipation rates [all-inclusive, excluding airfare]:\n* €1,100 - accommodation in a single bed in a spacious double bedroom.\n* €1,200 - accommodation in a king-size bed.\n* €1,500 - single occupancy in a separate private bedroom with bathroom.\n\nThe price includes: 7 nights' accommodation in a villa with a pool and orchard, 3 meals a day home-cooked by Marina, 5 days of embroidery workshops in the garden, all materials and tools, private transfer from DLM airport and a day of excursions [authentic Akyaka, a walk along the crystal-clear Azmak River, Dalyan and the protected sandy beach of Iztuzu].",
    "Türkiye'de bir haute couture sanat inzivası, Muğla ilinin dağlarında (Dalaman Havalimanı'na 30 dakika mesafede) özel bir villada, en fazla 6 katılımcıdan oluşan samimi bir grupla 8 gün/7 gece süren yaratıcılık, ilham ve rahatlama dolu bir etkinliktir.\n\nİnziva ekibi: haute couture nakış eğitmenleri Vasilisa Borovikova ve Yulia Özmen ile villa ev sahibi ve şef Marina.\n\n2027 sezonunun 4 döneminin programı [her dönemde 6 yer]:\n* Dönem 1: 1 Mayıs - 8 Mayıs 2027\n* Dönem 2: 19 Haziran - 26 Haziran 2027\n* Dönem 3: 18 Eylül - 25 Eylül 2027\n* Dönem 4: 23 Ekim - 30 Ekim 2027\n\nKatılım ücretleri [her şey dahil, uçak bileti hariç]:\n* 1.100 € - geniş bir çift kişilik odada tek kişilik yatakta konaklama.\n* 1.200 € - çift kişilik yatakta konaklama.\n\n* 1.500 € - ayrı özel banyolu yatak odasında tek kişilik konaklama.\n\nFiyata dahil olanlar: Havuzlu ve meyve bahçeli bir villada 7 gece konaklama, Marina tarafından hazırlanan günde 3 öğün ev yapımı yemek, bahçede 5 gün nakış atölyesi, tüm malzeme ve aletler, DLM havaalanından özel transfer ve bir günlük gezi [otantik Akyaka, kristal berraklığındaki Azmak Nehri boyunca yürüyüş, Dalyan ve korunaklı İztuzu kumlu plajı].",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_5_title",
    "Раздел 5 описания",
    "5. Направление 4: Бутик кутюрных изделий «В наличии» и «Под заказ» [Bespoke Atelier]",
    "5. Direction 4: Couture Boutique “In Stock” and “Made to Order” [Bespoke Atelier]",
    "5. Yön 4: Haute Couture Butik “Stokta” ve “Sipariş Üzerine” [Özel Dikim Atölyesi]",
    "",
    "Вкл"
  ],
  [
    "Блок 4. Онлайн-наставничество",
    "about_sec_5_text",
    "Текст раздела 5",
    "Ателье и бутик Vasilisa.luneville создает коллекционные аксессуары, украшения и вышивку на одежде в техниках парижских домов высокой моды:\n* Изделия в наличии: кутюрные броши на шелковой органзе и бархате, расшитые воротнички, вечерние сумочки и фермуары. Отправка по всему миру в течение 2-3 рабочих дней с трек-номером.\n* Изделия под заказ [Bespoke Atelier]: индивидуальная разработка эскиза, подбор палитры французских пайеток, японского бисера, кристаллов и шелковой синели под ваш образ. Срок создания - от 14 до 30 рабочих дней.\n* Юридическая и налоговая прозрачность: оформление заказов по официальной оферте, защита персональных данных KVKK № 6698 и GDPR, выставление электронных фактур e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi].",
    "The Vasilisa.luneville atelier and boutique creates collectible accessories, jewelry, and embroidery on clothing using the techniques of Parisian haute couture houses.\n* In stock: couture brooches on silk organza and velvet, embroidered collars, evening bags, and clasps. Worldwide shipping within 2-3 business days with a tracking number.\n* Made-to-order items [Bespoke Atelier]: custom sketch development, selection of a palette of French sequins, Japanese beads, crystals, and silk chenille to match your look. Production time: 14 to 30 business days.\n* Legal and tax transparency: processing orders through the official offer, personal data protection under KVKK No. 6698 and GDPR, issuing electronic invoices (e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi]).",
    "Vasilisa.luneville atölyesi ve butiği, Paris haute couture evlerinin tekniklerini kullanarak koleksiyonluk aksesuarlar, takılar ve giysiler üzerine nakışlar üretiyor.\n* Stokta: İpek organza ve kadife üzerine haute couture broşlar, işlemeli yakalar, gece çantaları ve tokalar. Takip numarası ile 2-3 iş günü içinde dünya çapında gönderim.\n\n* Sipariş üzerine üretilen ürünler [Özel Atölye]: Özel çizim geliştirme, görünümünüze uygun Fransız payetleri, Japon boncukları, kristaller ve ipek şönil paletinin seçimi. Üretim süresi: 14 ila 30 iş günü.\n\n* Yasal ve vergi şeffaflığı: Resmi teklif üzerinden siparişlerin işlenmesi, KVKK No. 6698 ve GDPR kapsamında kişisel verilerin korunması, elektronik faturaların düzenlenmesi (e-Arşiv Fatura GİB VUK 213 [Marmaris Vergi Dairesi]).",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "sleeping_title",
    "Заголовок секции тарифов ретрита и студии",
    "Тарифы размещения на кутюрном арт-отпуске [8 дней / 7 ночей] и очная студия в Мармарисе",
    "Accommodation rates for a couture art holiday [8 days / 7 nights] and in-person studio in Marmaris",
    "Marmaris'te 8 gün / 7 gece sürecek bir haute couture sanat tatili ve yüz yüze atölye çalışması için konaklama ücretleri.",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_1",
    "Тариф 1 арт-отпуска",
    "Тариф 1 : Односпальная кровать в двухместной спальне [1100 €]",
    "Rate 1: Single bed in a double bedroom [€1,100]",
    "Fiyat 1: Çift kişilik odada tek kişilik yatak [€1.100]",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_1_desc",
    "Описание тарифа 1",
    "8 дней / 7 ночей на горной вилле, 3-разовое домашнее питание от Марины, 5 дней обучения с Василисой и Юлией, все материалы, экскурсии и трансфер DLM.",
    "8 days / 7 nights in a mountain villa, three meals a day at home from Marina, 5 days of training with Vasilisa and Yulia, all materials, excursions and DLM transfers.",
    "8 gün / 7 gece dağ villasında konaklama, Marina'nın evinde günde üç öğün yemek, Vasilisa ve Yulia ile 5 günlük eğitim, tüm materyaller, geziler ve DLM transferleri.",
    "Bed",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_1_badge",
    "Бейдж тарифа 1",
    "1100 € • Квота 6 мест",
    "1100 € • 6 places",
    "1100 € • 6 kişilik yer",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_2",
    "Тариф 2 арт-отпуска",
    "Тариф 2 : Большая двуспальная кровать King Size [1200 €]",
    "Rate 2: King Size Bed [€1,200]",
    "Fiyat 2: Çift Kişilik Yatak [€1.200]",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_2_desc",
    "Описание тарифа 2",
    "Просторная светлая спальня с панорамным видом на горы и сад, индивидуальный санузел, полное участие в программе арт-отпуска, материалы и трансфер DLM.",
    "A spacious, bright bedroom with panoramic views of the mountains and garden, private bathroom, full participation in the art vacation program, materials and DLM transfer.",
    "Dağ ve bahçe manzaralı, geniş ve aydınlık bir yatak odası, özel banyo, sanat tatili programına tam katılım, malzemeler ve DLM transferi.",
    "BedDouble",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_2_badge",
    "Бейдж тарифа 2",
    "1200 € • Панорамный вид",
    "1200 € • Panoramic view",
    "1200 € • Panoramik manzara",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_3",
    "Тариф 3 арт-отпуска",
    "Тариф 3 : Отдельная приватная спальня целиком [1500 €]",
    "Tariff 3: Entire private bedroom [€1,500]",
    "Tarife 3: Tamamen özel yatak odası [€1.500]",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_3_desc",
    "Описание тарифа 3",
    "Максимальное уединение в собственной спальне с отдельной ванной комнатой и выходом к террасе. Все материалы, питание, экскурсии и VIP-трансфер DLM включены.",
    "Maximum privacy in your own bedroom with a private bathroom and access to the terrace. All materials, meals, excursions, and VIP DLM transfers are included.",
    "Özel banyolu ve terasa erişimli kendi yatak odanızda maksimum gizlilik. Tüm malzemeler, yemekler, geziler ve VIP DLM transferleri dahildir.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_3_badge",
    "Бейдж тарифа 3",
    "1500 € • Приватная спальня",
    "1500 € • Private bedroom",
    "1500 € • Özel yatak odası",
    "",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_4",
    "Офлайн-интенсив в Мармарисе",
    "Офлайн-студия в Мармарисе : 5 дней 1-на-1 с Василисой [500 €]",
    "Offline Studio in Marmaris: 5 Days 1-on-1 with Vasilisa [€500]",
    "Marmaris'te Çevrimdışı Stüdyo: Vasilisa ile 5 Günlük Birebir Seans [€500]",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_4_desc",
    "Описание студии в Мармарисе",
    "Индивидуальная учебная неделя пн-пт с 09:00 до 17:00 в мастерской Мармариса. Профессиональные рамы, крючки №70-90, шелковая органза, трансфер DLM и помощь с отелем.",
    "Individual training week, Mon-Fri, 9:00 AM to 5:00 PM, at our Marmaris studio. Professional frames, #70-90 hooks, silk organza, DLM transfers, and hotel assistance are included.",
    "Marmaris stüdyomuzda, Pazartesi-Cuma, 09:00-17:00 saatleri arasında bireysel eğitim haftası. Profesyonel çerçeveler, 70-90 numara kancalar, ipek organza, DLM transferleri ve otel yardımı dahildir.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 5. Офлайн-студия Мармарис",
    "bedroom_4_badge",
    "Бейдж студии в Мармарисе",
    "500 € • Пн-Пт 09:00-17:00",
    "500 € • Mon-Fri 09:00-17:00",
    "500 € • Pazartesi-Cuma 09:00-17:00",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenities_title",
    "Заголовок секции материалов и оснащения",
    "Что входит в обучение, мастер-классы и кутюрные арт-отпуска",
    "What's included in the training, master classes, and couture art vacations?",
    "Eğitim, ustalık sınıfları ve haute couture sanat tatilleri neleri kapsıyor?",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenities_btn_all",
    "Кнопка показа всех 25 позиций",
    "Показать все материалы и условия [25]",
    "Show all materials and conditions [25]",
    "Tüm malzemeleri ve koşulları göster [25]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_1",
    "Оснащение 1",
    "Люневильские крючки №70, №80, №90 и кутюрные рамы",
    "Lunéville hooks #70, #80, #90 and couture frames",
    "Lunéville kancaları #70, #80, #90 ve couture çerçeveleri",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_2",
    "Оснащение 2",
    "Натуральная шелковая органза, бархат и фатин",
    "Natural silk organza, velvet and tulle",
    "Doğal ipek organza, kadife ve tül",
    "Layers",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_3",
    "Оснащение 3",
    "Французские пайетки, японский и чешский бисер, синель",
    "French sequins, Japanese and Czech beads, chenille",
    "Fransız payetleri, Japon ve Çek boncukları, şönil",
    "Gem",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_4",
    "Оснащение 4",
    "Макро-видеоуроки Full HD с бессрочным доступом в Telegram",
    "Full HD macro video tutorials with unlimited access on Telegram",
    "Telegram üzerinden sınırsız erişimle Full HD makro video eğitimlerine ulaşabilirsiniz.",
    "Video",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_5",
    "Оснащение 5",
    "Личный разбор 20-30 сек видео домашних заданий [6 мес]",
    "Personal analysis of 20-30 seconds of homework video [6 months]",
    "20-30 saniyelik ödev videosunun kişisel analizi [6 ay]",
    "MessageCircle",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_6",
    "Оснащение 6",
    "Индивидуальный трансфер из аэропорта Даламан [DLM]",
    "Private Transfer from Dalaman Airport [DLM]",
    "Dalaman Havaalanından Özel Transfer [DLM]",
    "Car",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_7",
    "Оснащение 7",
    "Проживание на горной вилле с бассейном и фруктовым садом",
    "Stay in a mountain villa with a pool and orchard",
    "Havuzlu ve meyve bahçeli bir dağ villasında konaklayın.",
    "Home",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_8",
    "Оснащение 8",
    "3-разовое домашнее питание и ужины от шефа Марины",
    "3 meals a day at home and dinners from Chef Marina",
    "Günde 3 öğün evde yemek ve akşam yemekleri Şef Marina'dan.",
    "Utensils",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_9",
    "Оснащение 9",
    "Экскурсионный день: Акьяка, река Азмак, Дальян и пляж Изтузу",
    "Excursion day: Akyaka, Azmak River, Dalyan and Iztuzu Beach",
    "Gezi günü: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "Compass",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_main_10",
    "Оснащение 10",
    "Международная доставка изделий бутика и именной сертификат",
    "International delivery of boutique products and a personalized certificate",
    "Butik ürünlerin uluslararası teslimatı ve kişiselleştirilmiş sertifika.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_title",
    "Категория 1 материалов",
    "1. Инструменты и материалы от кутюр",
    "1. Couture tools and materials",
    "1. Haute Couture araçları ve malzemeleri",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item1",
    "Элемент 1.1",
    "Оригинальные люневильские ручки и сменные крючки №70, №80, №90",
    "Original Luneville handles and replacement hooks No. 70, No. 80, No. 90",
    "Orijinal Luneville sapları ve yedek kancaları No. 70, No. 80, No. 90",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item2",
    "Элемент 1.2",
    "Профессиональные кутюрные рамы со стойками и круглые пяльцы",
    "Professional couture frames with stands and round hoops",
    "Ayaklı ve yuvarlak kasnaklı profesyonel haute couture çerçeveler",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item3",
    "Элемент 1.3",
    "Тонкая шелковая органза, хлопковый бархат и еврофатин",
    "Fine silk organza, cotton velvet and Eurotulle",
    "İnce ipek organza, pamuk kadife ve Eurotulle",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item4",
    "Элемент 1.4",
    "Французские пайетки на нити, японский бисер Toho/Miyuki и стеклярус",
    "French sequins on thread, Japanese Toho/Miyuki beads and bugle beads",
    "İplik üzerine dizilmiş Fransız pulları, Japon Toho/Miyuki boncukları ve boru boncukları",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat1_item5",
    "Элемент 1.5",
    "Шелковая синель, жесткая и мягкая канитель, металлизированные нити",
    "Silk chenille, hard and soft wire, metallic threads",
    "İpek şönil, sert ve yumuşak tel, metalik iplikler",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_title",
    "Категория 2 обучения",
    "2. Формат онлайн-школы и обратной связи",
    "2. Online school and feedback format",
    "2. Çevrimiçi okul ve geri bildirim formatı",
    "Video",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item1",
    "Элемент 2.1",
    "Макросъемка каждого стежка с лица и изнанки в высоком разрешении",
    "High-resolution macro photography of each stitch from the front and back",
    "Her bir dikişin ön ve arka yüzünden çekilmiş yüksek çözünürlüklü makro fotoğrafları.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item2",
    "Элемент 2.2",
    "Бессрочный доступ к закрытым Telegram-каналам мастер-классов и 16 урокам",
    "Lifetime access to closed Telegram masterclass channels and 16 lessons",
    "Kapalı Telegram masterclass kanallarına ömür boyu erişim ve 16 ders.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item3",
    "Элемент 2.3",
    "Проверка 20-30-секундных видео домаш��их заданий лично Василисой [180 дней]",
    "20-30 second homework videos checked personally by Vasilisa [180 days]",
    "Vasilisa tarafından bizzat kontrol edilen 20-30 saniyelik ödev videoları [180 gün]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item4",
    "Элемент 2.4",
    "Готовые PDF-выкройки, эскизы и подробные карты материалов с артикулами",
    "Ready-made PDF patterns, sketches, and detailed material charts with article numbers",
    "Hazır PDF kalıpları, çizimler ve ürün numaralarıyla birlikte detaylı malzeme çizelgeleri.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat2_item5",
    "Элемент 2.5",
    "Именной сертификат об окончании курса люневильской вышивки с QR-кодом",
    "Personalized certificate of completion of the Lunéville embroidery course with a QR code",
    "QR kodlu, kişiye özel Lunéville nakış kursu tamamlama sertifikası.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_title",
    "Категория 3 арт-отпуска",
    "3. Горная вилла и программа арт-отпуска в Турции",
    "3. Mountain Villa and Art Vacation Program in Turkey",
    "3. Türkiye'de Dağ Villası ve Sanat Tatili Programı",
    "Sun",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item1",
    "Элемент 3.1",
    "Приватная вилла с бассейном, террасой и фруктовым садом в 30 мин от DLM",
    "A private villa with a pool, terrace, and orchard, 30 minutes from DLM.",
    "DLM'ye 30 dakika mesafede, havuzlu, teraslı ve meyve bahçeli özel bir villa.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item2",
    "Элемент 3.2",
    "Камерная группа строго до 6 участниц и обучение с двумя мастерами [Василиса и Юлия]",
    "Chamber group of up to 6 participants and training with two masters [Vasilisa and Yulia]",
    "En fazla 6 katılımcıdan oluşan oda müziği grubu ve iki usta [Vasilisa ve Yulia] ile eğitim.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item3",
    "Элемент 3.3",
    "3-разовое домашнее средиз��мноморское питание от шефа Марины",
    "3-course Mediterranean home-cooked meals from Chef Marina",
    "Şef Marina'dan 3 çeşit Akdeniz ev yemeği.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item4",
    "Элемент 3.4",
    "Выездная экскурсия: Акьяка, река Азмак, Дальян и заповедный пляж Изтузу",
    "Day Trip: Akyaka, Azmak River, Dalyan and Iztuzu Beach",
    "Günübirlik Gezi: Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat3_item5",
    "Элемент 3.5",
    "Индивидуальный трансфер из аэропорта Даламан [DLM] ко времени вашего рейса",
    "Private transfer from Dalaman Airport [DLM] to your flight",
    "Dalaman Havalimanı'ndan [DLM] uçuşunuza özel transfer.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_title",
    "Категория 4 студии и бутика",
    "4. Офлайн-студия в Мармарисе и Бутик изделий",
    "4. Offline studio in Marmaris and a boutique of products",
    "4. Marmaris'te fiziksel stüdyo ve ürün butiği",
    "Compass",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item1",
    "Элемент 4.1",
    "5 дней индивидуальной работы пн-пт с 09:00 до 17:00 в студии Мармариса",
    "5 days of individual work Mon-Fri from 09:00 to 17:00 in the Marmaris studio",
    "Marmaris stüdyosunda Pazartesi-Cuma günleri 09:00-17:00 saatleri arasında 5 gün bireysel çalışma.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item2",
    "Элемент 4.2",
    "Помощь в подборе уютного отеля на побережье Мармариса в пешей доступности",
    "Help in choosing a cozy hotel on the coast of Marmaris within walking distance",
    "Marmaris sahilinde, yürüme mesafesinde, konforlu bir otel seçmenize yardımcı olmak.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item3",
    "Элемент 4.3",
    "Готовые кутюрные броши, воротнички и сумочки с отправкой за 2-3 дня",
    "Ready-made couture brooches, collars and handbags with delivery in 2-3 days",
    "Hazır tasarımlı broşlar, yakalar ve el çantaları, 2-3 gün içinde teslimat.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item4",
    "Элемент 4.4",
    "Ателье «Под заказ» [Bespoke]: пошив и вышивка по индивидуальному эскизу",
    "Bespoke Atelier: tailoring and embroidery based on individual designs",
    "Kişiye Özel Atölye: Bireysel tasarımlara dayalı terzilik ve nakış hizmetleri.",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat4_item5",
    "Элемент 4.5",
    "Подарочная упаковка ручной работы и международная доставка с трек-номером",
    "Handcrafted gift wrapping and international shipping with tracking number",
    "El yapımı hediye paketleme ve takip numaralı uluslararası kargo",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_title",
    "Категория 5 оплаты и гарантий",
    "5. Мультивалютная оплата и юридические гарантии",
    "5. Multi-currency payment and legal guarantees",
    "5. Çoklu para birimi ödemesi ve yasal güvenceler",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_item1",
    "Элемент 5.1",
    "Прием оплаты в EUR, RUB, TRY и USD [СБП, Т-Банк, ЮKassa, Stripe, Iyzico, PayPal]",
    "Payments accepted in EUR, RUB, TRY, and USD [SBP, T-Bank, UkrKassa, Stripe, Iyzico, PayPal]",
    "EUR, RUB, TRY ve USD cinsinden ödemeler kabul edilmektedir [SBP, T-Bank, UkrKassa, Stripe, Iyzico, PayPal]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_item2",
    "Элемент 5.2",
    "Гарантированное удержание слота ретрита или недели студии на 24 часа [HOLD]",
    "Guaranteed 24-hour hold on a retreat or studio week slot [HOLD]",
    "Bir inziva veya stüdyo haftası için 24 saatlik garantili rezervasyon [HOLD]",
    "",
    "Вкл"
  ],
  [
    "Блок 6. Арт-отпуск в Турции",
    "amenity_cat5_item3",
    "Элемент 5.3",
    "Официальная оферта, соответствие KVKK № 6698 / GDPR и фактуры e-Arşiv GİB",
    "Official offer, compliance with KVKK No. 6698 / GDPR and invoices e-Arşiv GİB",
    "Resmi teklif, KVKK No. 6698 / GDPR'ye uygunluk ve faturalar e-Arşiv GİB'de saklanmaktadır.",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "reviews_score_header",
    "Заголовок блока отзывов",
    "5.0 · 128 отзывов выпускниц школы, участниц ретритов и клиенток бутика",
    "5.0 · 128 reviews from school graduates, retreat participants, and boutique clients",
    "5.0 · Okul mezunlarından, inziva katılımcılarından ve butik müşterilerinden 128 değerlendirme",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_1",
    "Критерий 1",
    "Качество макро-уроков",
    "Quality of macro-lessons",
    "Makro derslerin kalitesi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_2",
    "Критерий 2",
    "Разбор видео ДЗ [20-30 сек]",
    "Analysis of homework video [20-30 sec]",
    "Ödev videosunun analizi [20-30 saniye]",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_3",
    "Критерий 3",
    "Постановка руки",
    "Hand positioning",
    "El pozisyonu",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_4",
    "Критерий 4",
    "Атмосфера арт-отпуска",
    "Art-vacation atmosphere",
    "Sanat dolu tatil atmosferi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_5",
    "Критерий 5",
    "Материалы и комплектация",
    "Materials and equipment",
    "Malzemeler ve ekipmanlar",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_cat_6",
    "Критерий 6",
    "Качество изделий бутика",
    "Quality of boutique products",
    "Butik ürünlerin kalitesi",
    "5.0|100",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_1_author",
    "Автор отзыва 1",
    "Анна Смирнова · Онлайн-наставничество [16 уроков] и МК Лаванда",
    "Anna Smirnova · Online Mentoring [16 Lessons] and MK Lavender",
    "Anna Smirnova · Çevrimiçi Mentorluk [16 Ders] ve MK Lavender",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_1_text",
    "Текст отзыва 1",
    "Начала с мастер-класса «Ветка лаванды» на обычных пяльцах, а затем пошла на 6-месячное наставничество по люневильскому крючку. Формат проверки коротких видео по 20-30 секунд - это восторг! Василиса замечает малейший наклон крючка и натяжение органзы. Уже вышила свою первую кутюрную брошь и сумочку!",
    "I started with the \"Lavender Branch\" master class on a regular hoop, and then enrolled in a six-month mentorship program on Lunéville crochet. The format of short 20-30 second videos is amazing! Vasilisa notices the slightest tilt of the hook and the tension in the organza. I've already embroidered my first couture brooch and handbag!",
    "Önce normal bir kasnakta \"Lavanta Dalı\" ustalık sınıfıyla başladım, ardından Lunéville tığ işi üzerine altı aylık bir mentorluk programına kaydoldum. 20-30 saniyelik kısa videolar formatı inanılmaz! Vasilisa, tığın en ufak eğimini ve organzadaki gerginliği fark ediyor. İlk haute couture broşumu ve çantamı çoktan işledim bile!",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзыв�� и работы учениц",
    "review_2_author",
    "Автор отзыва 2",
    "Елена Морозова · Кутюрный арт-отпуск в Турции и МК Мимоза",
    "Elena Morozova · Couture Art Vacation in Turkey and MK Mimosa",
    "Elena Morozova · Türkiye'de Couture Sanat Tatili ve MK Mimosa",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_2_text",
    "Текст отзыва 2",
    "Арт-отпуск на горной вилле в Турции превзошел все мечты! Утром вышиваем в тени фруктового сада с Василисой и Юлией Озмен, днем купаемся в бассейне и наслажд��емся домашними блюдами от Марины, а поездка в Акьяку, по реке Азмак и на пляж Изтузу подарила вдохновение на год вперед. Забронировала место снова!",
    "An art vacation at a mountain villa in Turkey exceeded all our dreams! We spent the morning embroidering in the shade of an orchard with Vasilisa and Yulia Ozmen, spent the afternoon swimming in the pool and enjoying Marina's homemade meals, and a trip to Akyaka, along the Azmak River, and to Iztuzu Beach inspired us for the year ahead. I've booked it again!",
    "Türkiye'deki bir dağ villasında geçirdiğimiz sanat dolu tatil, tüm hayallerimizi aştı! Sabahı Vasilisa ve Yulia Özmen ile bir meyve bahçesinin gölgesinde nakış yaparak geçirdik, öğleden sonra havuzda yüzdük ve Marina'nın ev yapımı yemeklerinin tadını çıkardık; Azmak Nehri kıyısındaki Akyaka'ya ve İztuzu Plajı'na yaptığımız geziler ise önümüzdeki yıl için bize ilham verdi. Tekrar rezervasyon yaptırdım!",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_3_author",
    "Автор отзыва 3",
    "Maria Dubois [Paris] · Офлайн-студия в Мармарисе [5 дней]",
    "Maria Dubois [Paris] · Offline studio in Marmaris [5 days]",
    "Maria Dubois [Paris] · Marmaris'te yüz yüze stüdyo [5 gün]",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_3_text",
    "Текст отзыва 3",
    "Прилетела в Даламан специально на 5-дневный индивидуальный интенсив к Василисе в Мармарис. Встретили в аэропорту, помогли с чудесным отелем у моря. За 5 дней с 09:00 до 17:00 рука встала идеально: освоила тамбурный стежок вслепую с изнанки, пайетки, бисер и синель.",
    "I flew to Dalaman specifically for a 5-day individual intensive course with Vasilisa in Marmaris. She met me at the airport and helped me find a wonderful hotel by the sea. In five days, from 9:00 AM to 5:00 PM, my hand developed perfectly: I mastered the backside blind chain stitch, sequins, beading, and chenille.",
    "Marmaris'te Vasilisa ile 5 günlük bireysel yoğun bir kurs için özellikle Dalaman'a uçtum. Beni havaalanında karşıladı ve deniz kenarında harika bir otel bulmama yardımcı oldu. Beş gün boyunca, sabah 9:00'dan akşam 5:00'e kadar, elim mükemmel bir şekilde gelişti: Arka taraftan gizli zincir dikişi, pullar, boncuk işleme ve şönil işleme tekniklerinde ustalaştım.",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_4_author",
    "Автор отзыва 4",
    "Светлана Кузнецова · Заказ броши и воротничка в Бутике",
    "Svetlana Kuznetsova · Order a brooch and collar at the Boutique",
    "Svetlana Kuznetsova · Butikten broş ve kolye sipariş edin",
    "",
    "Вкл"
  ],
  [
    "Блок 12. Отзывы и работы учениц",
    "review_4_text",
    "Текст отзыва 4",
    "Заказывала в бутике Vasilisa.luneville расшитый воротничок и брошь «Лаванда Haute Couture». Изнанка идеальная, шелковая органза невесомая, французские пайетки переливаются деликатным благородным блеском. Посылка дошла быстро в роскошной подарочной коробке!",
    "I ordered an embroidered collar and a \"Lavender Haute Couture\" brooch from the Vasilisa.luneville boutique. The backing is perfect, the silk organza is weightless, and the French sequins shimmer with a delicate, elegant sheen. The package arrived quickly in a luxurious gift box!",
    "Vasilisa.luneville butiğinden işlemeli bir yaka ve \"Lavanta Haute Couture\" broş sipariş ettim. Arka kısmı mükemmel, ipek organza hafif ve Fransız payetleri zarif ve şık bir parlaklıkla ışıldıyor. Paket lüks bir hediye kutusunda hızla geldi!",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_title",
    "Заголовок блока локации",
    "Творческая студия в Мармарисе и ретритная вилла в горах провинции Мугла",
    "A creative studio in Marmaris and a retreat villa in the mountains of Mugla Province",
    "Marmaris'te bir yaratıcı stüdyo ve Muğla ilinin dağlarında bir inziva villası.",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_desc",
    "Описание локации и трансфера",
    "Очная мастерская Василисы расположена в курортном Мармарисе на побережье Эгейского моря, а уединенная вилла для кутюрных арт-отпусков находится в живописных горах провинции Мугла всего в 30 минутах езды от м��ждународного аэропорта Даламан [DLM]. Для всех учениц офлайн-студии и участниц ретритов включен индивидуальный трансфер из аэропорта DLM.",
    "Vasilisa's in-person studio is located in the resort town of Marmaris on the Aegean coast, while her secluded villa for couture art retreats is nestled in the picturesque mountains of the Muğla province, just a 30-minute drive from Dalaman International Airport [DLM]. All in-person studio students and retreat participants receive private transfers from DLM Airport.",
    "Vasilisa'nın yüz yüze ders verdiği stüdyosu Ege kıyısındaki tatil beldesi Marmaris'te bulunurken, haute couture sanat inzivaları için özel olarak tasarlanmış villası ise Dalaman Uluslararası Havalimanı'na (DLM) sadece 30 dakikalık sürüş mesafesinde, Muğla ilinin pitoresk dağlarında yer almaktadır. Yüz yüze ders alan tüm öğrenciler ve inziva katılımcıları DLM Havalimanı'ndan özel transfer hizmeti almaktadır.",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "location_badge",
    "Бейдж локации",
    "Мармарис & Мугла • 30 мин от аэропорта DLM",
    "Marmaris & Mugla • 30 min from DLM airport",
    "Marmaris ve Muğla • DLM havaalanına 30 dakika uzaklıkta",
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
    "Your master and mentor: Vasilisa Borovikova",
    "Ustanız ve akıl hocanız: Vasilisa Borovikova",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_subtitle",
    "Подзаголовок карточки мастера",
    "Художник по кутюрной вышивке с 2015 года • Основатель школы и бутика Vasilisa.luneville в Мармарисе",
    "Couture embroidery artist since 2015 • Founder of the Vasilisa.luneville school and boutique in Marmaris",
    "2015'ten beri haute couture nakış sanatçısı • Marmaris'teki Vasilisa.luneville okul ve butiğinin kurucusu",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_verified",
    "Бейдж верификации",
    "Личность, дипломы и налоговый статус проверены",
    "Identity, diplomas and tax status verified",
    "Kimlik, diplomalar ve vergi durumu doğrulandı.",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_response_time",
    "Время ответа в чате",
    "Время ответа в чате и по видео ДЗ: обычно в течение 15 минут",
    "Response time via chat and video homework: usually within 15 minutes",
    "Sohbet ve video yoluyla verilen ödevlere yanıt süresi: genellikle 15 dakika içinde.",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_languages",
    "Языки общения",
    "Языки обучения и поддержки: Русский, English, Türkçe",
    "Training and support languages: Russian, English, Turkish",
    "Eğitim ve destek dilleri: Rusça, İngilizce, Türkçe",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_help_text",
    "Текст поддержки учениц",
    "Я лично проверяю каждое 20-30-секундное видео домашнего задания на онлайн-наставничестве, веду очные 5-дневные интенсивы в студии Мармариса и вместе с Юлией Озмен и Мариной встречаю участниц наших кутюрных арт-отпусков на горной вилле в Турции.",
    "I personally check every 20-30-second video assignment for online mentoring, conduct in-person 5-day intensive courses at a studio in Marmaris, and, together with Yulia Ozmen and Marina, meet participants of our couture art vacations at a mountain villa in Turkey.",
    "Şahsen, çevrimiçi mentorluk için her 20-30 saniyelik video ödevini kontrol ediyorum, Marmaris'teki bir stüdyoda yüz yüze 5 günlük yoğun kurslar düzenliyorum ve Yulia Özmen ve Marina ile birlikte Türkiye'deki bir dağ villasında haute couture sanat tatillerimizin katılımcılarıyla buluşuyorum.",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_btn",
    "Кнопка связи с Василисой",
    "Написать Василисе или ИИ-Куратору",
    "Write to Vasilisa or AI-Curator",
    "Vasilisa'ya veya AI-Curator'a yazın.",
    "MessageCircle",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_credo",
    "Творческое кредо",
    "Творческое кредо: «Вышивка от кутюр доступна каждой - секрет в правильной постановке руки и любви к деталям»",
    "Creative credo: \"Haute couture embroidery is accessible to everyone – the secret is in the correct hand position and a love of detail.\"",
    "Yaratıcı ilke: \"Haute couture nakışı herkes için erişilebilirdir – sırrı doğru el pozisyonunda ve detaylara olan sevgidedir.\"",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_dream",
    "Миссия школы",
    "Миссия: объединять увлеченных вышивкой женщин по всему миру в теплом сообществе онлайн и на арт-отпусках в Турции",
    "Mission: To unite women passionate about embroidery around the world in a warm community online and on art holidays in Turkey",
    "Misyon: Dünyanın dört bir yanından nakışa tutkuyla bağlı kadınları, çevrimiçi sıcak bir toplulukta ve Türkiye'deki sanat tatillerinde bir araya getirmek.",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_hobbies",
    "Специализация и техники",
    "Техники: люневильский крючок №70-90, вышивка иглой по органзе, объемная синель, пайетки, бисер, создание брошей и сумочек",
    "Techniques: Lunéville crochet hook #70-90, needle embroidery on organza, voluminous chenille, sequins, beads, making brooches and handbags",
    "Teknikler: Lunéville 70-90 numara tığ, organza üzerine iğne nakışı, hacimli şönil, payetler, boncuklar, broş ve el çantası yapımı.",
    "",
    "Вкл"
  ],
  [
    "Блок 11. О наставниках",
    "host_card_travel",
    "Команда арт-отпусков",
    "Соавтор арт-отпусков: Юлия Озмен [дизайнер кутюрных сумочек, преподает с 2018 г.] • Шеф и хозяйка виллы: Марина",
    "Art Vacations Co-author: Yulia Ozmen [couture handbag designer, teaching since 2018] • Villa Chef and Hostess: Marina",
    "Sanat Tatilleri Ortak Yazarı: Yulia Özmen [haute couture el çantası tasarımcısı, 2018'den beri eğitmen] • Villa Şefi ve Ev Sahibi: Marina",
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
    "14 Key Locations: Marmaris Studio, Retreat Villa, and Art Vacation Routes",
    "14 Önemli Lokasyon: Marmaris Stüdyosu, Dinlenme Villası ve Sanat Tatili Rotaları",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_subtitle",
    "Подзаголовок 14 локаций",
    "Интерактивный путеводитель для учениц очной сту��ии и участниц кутюрных арт-отпусков в провинции Мугла",
    "An interactive guide for full-time studio students and participants in couture art vacations in Muğla Province",
    "Muğla ilinde tam zamanlı stüdyo öğrencileri ve haute couture sanat tatillerine katılanlar için interaktif bir rehber.",
    "",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmarks_address",
    "Адрес студии и локации",
    "Marmaris, Muğla, Türkiye [Студия в Мармарисе и горная ретритная вилла в 30 мин от аэропорта DLM]",
    "Marmaris, Muğla, Türkiye [Marmaris Studio and Mountain Retreat Villa 30 min from DLM Airport]",
    "Marmaris, Muğla, Türkiye [Marmaris Studio ve Mountain Retreat Villa, DLM Havaalanından 30 dakika uzaklıkta]",
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
    "Vasilisa.luneville, a creative embroidery studio in Marmaris, features professional couture frames, natural light, and a collection of materials.",
    "Marmaris'te bulunan yaratıcı bir nakış stüdyosu olan Vasilisa.luneville, profesyonel haute couture çerçeveleri, doğal ışık ve çeşitli malzemeler sunmaktadır.",
    "Студия|09:00-17:00|walk|Офлайн-обучение|Sparkles",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_2",
    "Локация 2",
    "Набережная и яхтенная марина Мармариса: морские прогулки и вдохновляющие виды после занятий в студии.",
    "Marmaris's waterfront and marina: boat trips and inspiring views after studio classes.",
    "Marmaris'in sahil şeridi ve marinası: stüdyo derslerinden sonra tekne gezileri ve ilham verici manzaralar.",
    "500 м|5 мин пешком|walk|Прогулки у моря|Compass",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_3",
    "Локация 3",
    "Исторический Старый город и крепость Мармариса [Marmaris Kalesi]: узкие бело-голубые улочки с бугенвиллией для фотосессий с готовыми брошами.",
    "Marmaris's historic Old Town and Fortress [Marmaris Kalesi]: narrow, blue and white streets lined with bougainvillea for photo ops with ready-made brooches.",
    "Marmaris'in tarihi Eski Şehri ve Kalesi: Hazır broşlarla fotoğraf çekimi için ideal, begonvillerle süslü dar, mavi ve beyaz sokaklar.",
    "1.2 км|15 мин пешком|walk|Фотолокация|Camera",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_4",
    "Локация 4",
    "Уединенная горная вилла арт-отпусков в провинции Мугла: 4 спальни, бассейн, фруктовый сад и панора��ная терраса для вышивки.",
    "Secluded mountain villa for art holidays in Mugla province: 4 bedrooms, pool, orchard and panoramic terrace for embroidery.",
    "Muğla ilinde sanat tatilleri için tenha dağ villası: 4 yatak odası, havuz, meyve bahçesi ve nakış için panoramik teras.",
    "30 км от DLM|30 мин на авто|nature|База ретрита|Home",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_5",
    "Локация 5",
    "Международный аэропорт Даламан [DLM]: точка прилета участниц ретритов и учениц студии [включен индивидуальный трансфер].",
    "Dalaman International Airport [DLM]: Arrival point for retreat participants and studio students [private transfer included].",
    "Dalaman Uluslararası Havalimanı [DLM]: Kamp katılımcıları ve stüdyo öğrencileri için varış noktası [özel transfer dahil].",
    "30 мин|Трансфер включен|transport|Аэропорт прилета|Plane",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_6",
    "Локация 6",
    "Аутентичный город Акьяка [Akyaka]: уникальная деревянная османская архитектура Ула и бухта Гёкова [программа выездного дня ретрита].",
    "Authentic Akyaka: Unique Ottoman Wooden Architecture of Ula and Gokova Bay [Retreat Day Program].",
    "Özgün Akyaka: Ula ve Gökova Koyu'nun Eşsiz Osmanlı Ahşap Mimarisi [Dinlenme Günü Programı].",
    "Экскурсия|День 4 ретрита|nature|Выездной маршрут|MapPin",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_7",
    "Локация 7",
    "Кристальная река Азмак [Azmak Nehri]: лодочная прогулка над подводными садами и обед в рыбном ресторане у воды.",
    "Crystal River Azmak [Azmak Nehri]: Boat ride over underwater gardens and lunch at a fish restaurant by the water.",
    "Azmak Nehri: Su altı bahçeleri üzerinde tekne turu ve su kenarındaki bir balık restoranında öğle yemeği.",
    "Акьяка|Лодочный тур|food|Природа и гастрономия|Waves",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_8",
    "Локация 8",
    "Заповедный песчаный пляж Изтузу [İztuzu Beach]: 5-километровая песчаная коса между морем и дельтой [экскурсионный день арт-отпуска].",
    "İztuzu Beach: A 5km sandy beach between the sea and the delta [art holiday excursion day].",
    "İztuzu Plajı: Deniz ve delta arasında yer alan 5 km uzunluğunda kumlu bir plaj [sanat tatili gezi günü].",
    "Экскурсия|Купание в море|beach|Пляжный отдых|Sun",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_9",
    "Локация 9",
    "Дельта Дальяна и ликийские пейзажи: живописный маршрут водной прогулки в рамках выездного дня арт-отпуска.",
    "The Dalyan Delta and Lycian landscapes: a picturesque boat trip as part of an art-vacation day out.",
    "Dalyan Deltası ve Likya manzaraları: Sanat dolu bir tatil günü gezisinin parçası olarak pitoresk bir tekne turu.",
    "Экскурсия|Водный маршрут|nature|Вдохновение|Compass",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_10",
    "Локация 10",
    "Текстильные и ремесленные лавки региона Мугла: натуральный турецкий шелк, хлопок, кружево Оя и фермерские угощения.",
    "Textile and handicraft shops in the Muğla region: natural Turkish silk, cotton, Oya lace and farm-made treats.",
    "Muğla bölgesindeki tekstil ve el sanatları dükkanları: doğal Türk ipeği, pamuk, Oya danteli ve çiftlik ürünleri.",
    "Шопинг|Ткани и сувениры|walk|Ремесла Турции|ShoppingBag",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_11",
    "Локация 11",
    "Панорамная терраса и фруктовый сад ретритной виллы: утренние мастер-классы по вышивке под пение птиц.",
    "Panoramic terrace and orchard of the retreat villa: morning embroidery workshops accompanied by birdsong.",
    "Dinlenme villasının panoramik terası ve meyve bahçesi: kuş cıvıltıları eşliğinde sabah nakış atölyeleri.",
    "На вилле|Ежедневно|nature|Зона мастер-классов|Sparkles",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_12",
    "Локация 12",
    "Гастрономическая терраса шефа Марины: авторские завтраки, обеды и ужины из свежих фермерских продуктов Эгейского побережья.",
    "Chef Marina's Gastronomic Terrace: signature breakfasts, lunches, and dinners using fresh farm produce from the Aegean coast.",
    "Şef Marina'nın Gastronomi Terası: Ege kıyılarından gelen taze çiftlik ürünleri kullanılarak hazırlanan özel kahvaltılar, öğle ve akşam yemekleri.",
    "На вилле|3 раза в день|food|Домашняя кухня|Utensils",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_13",
    "Локация 13",
    "Пляжи Ичмелера и бухты Мармариса: лазурное море в 10-15 минутах от творческой студии Василисы.",
    "The beaches of Icmeler and the bays of Marmaris: the azure sea is 10-15 minutes from Vasilisa's creative studio.",
    "İçmeler plajları ve Marmaris koyları: Masmavi deniz, Vasilisa'nın yaratıcı stüdyosuna 10-15 dakika mesafede.",
    "7 км|10 мин|beach|Морской отдых|Sun",
    "Вкл"
  ],
  [
    "Блок 15. Контакты и локация студии",
    "landmark_14",
    "Локация 14",
    "Международная служба доставки бутика [PTT / DHL / СДЭК]: отправка готовых брошей, сумочек и наборов материалов по всему миру.",
    "International boutique delivery service [PTT / DHL / SDEK]: shipping finished brooches, handbags and sets of materials worldwide.",
    "Uluslararası butik teslimat hizmeti [PTT / DHL / SDEK]: bitmiş broşların, el çantalarının ve malzeme setlerinin dünya çapında gönderimi.",
    "Весь мир|2-3 дня отправка|transport|Доставка бутика|Package",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_title",
    "Заголовок пространства виллы и студии",
    "Пространство творчества и отдыха: Горная вилла ретритов и Студия в Мармарисе",
    "A Space for Creativity and Relaxation: Mountain Retreat Villa and Studio in Marmaris",
    "Yaratıcılık ve Rahatlama İçin Bir Mekan: Marmaris'te Dağ Evi Tarzı Villa ve Stüdyo",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_subtitle",
    "Подзаголовок пространства",
    "Идеальное сочетание глубокого обучения вышивке от кутюр, комфортного проживания на вилле с бассейном и средиземноморского отдыха",
    "The perfect combination of in-depth training in haute couture embroidery, comfortable accommodation in a villa with a pool, and a Mediterranean holiday",
    "Yüksek moda nakışında derinlemesine eğitim, havuzlu bir villada konforlu konaklama ve Akdeniz tatilinin mükemmel birleşimi.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_title",
    "Заголовок виллы и бассейна",
    "Приватная горная вилла с бассейном и фруктовым садом",
    "Private mountain villa with pool and orchard",
    "Havuzlu ve meyve bahçeli özel dağ villası",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_desc",
    "Описание виллы",
    "Уединенная вилла в горах провинции Мугла [30 минут от аэропорта Даламан DLM] с собственным бассейном, 4 комфортными спальнями, просторной светлой верандой для работы за кутюрными рамами и тенистым фру��товым садом.",
    "A secluded villa in the mountains of Mugla province [30 minutes from Dalaman DLM Airport] with a private pool, 4 comfortable bedrooms, a spacious bright veranda for working on couture frames and a shady fruit garden.",
    "Muğla ilinin dağlarında, Dalaman DLM Havalimanı'na 30 dakika mesafede, özel havuzlu, 4 konforlu yatak odalı, haute couture çerçeveler üzerinde çalışmak için geniş ve aydınlık bir verandaya ve gölgeli bir meyve bahçesine sahip, gözlerden uzak bir villa.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_badge",
    "Бейдж квоты",
    "Камерная группа: строго до 6 участниц",
    "Chamber group: strictly up to 6 participants",
    "Oda grubu: kesinlikle en fazla 6 katılımcı",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_season",
    "Сезон потоков",
    "Сезон арт-отпусков 2027: май, июнь, сентябрь, октябрь",
    "Art Vacation Season 2027: May, June, September, October",
    "Sanat Tatili Sezonu 2027: Mayıs, Haziran, Eylül, Ekim",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_lighting",
    "Режим занятий",
    "Вышивальные сессии в саду: 5 дней с 09:00 до 17:00",
    "Embroidery sessions in the garden: 5 days from 9:00 to 17:00",
    "Bahçede nakış atölyeleri: 5 gün, 09:00 - 17:00 arası.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_pool_maintenance",
    "Материалы",
    "Все материалы, пайетки, бисер, органза и инструменты включены",
    "All materials, sequins, beads, organza and tools are included.",
    "Tüm malzemeler, pullar, boncuklar, organza ve aletler dahildir.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_title",
    "Заголовок студии в Мармарисе",
    "Очная мастерская Василисы в Мармарисе и онлайн-академия",
    "Vasilisa's in-person workshop in Marmaris and online academy",
    "Vasilisa'nın Marmaris'teki yüz yüze atölyesi ve çevrimiçi akademisi",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_desc",
    "Описание студии",
    "Профессионально оборудованная студия для 5-дневного индивидуального наставничества [500 €] и съемки макро-уроков в 4K с пожизненным доступом и 6-месячной проверкой 20-30 сек видео ДЗ.",
    "Professionally equipped studio for 5 days of individual mentoring [€500] and filming of macro lessons in 4K with lifetime access and 6 months of 20-30 sec video homework verification.",
    "5 gün boyunca bireysel mentorluk için profesyonelce donatılmış stüdyo [€500] ve 4K çözünürlükte makro derslerin çekimi, ömür boyu erişim ve 6 ay boyunca 20-30 saniyelik video ödev doğrulaması.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_badge",
    "Бейдж наставничества",
    "Индивидуально 1-на-1 с мастером",
    "Individually 1-on-1 with a specialist",
    "Bir uzmanla birebir görüşme",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_schedule",
    "График студии",
    "График студии в Мармарисе: пн - пт с 09:00 до 17:00",
    "Studio hours in Marmaris: Mon-Fri from 09:00 to 17:00",
    "Marmaris'teki stüdyo çalışma saatleri: Pazartesi-Cuma, 09:00 - 17:00 arası.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_lighting",
    "Обратная связь",
    "Онлайн-сопровождение: 180 дней проверки 20-30 сек видео ДЗ",
    "Online support: 180 days of verification of 20-30 sec video homework",
    "Çevrimiçi destek: 20-30 saniyelik video ödevlerinin 180 gün boyunca doğrulanması.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_jacuzzi_season",
    "Доступ к урокам",
    "Доступ к купленным МК и 16 видеоурокам: навсегда",
    "Access to purchased MK and 16 video lessons: forever",
    "Satın alınan MK ve 16 video dersine ömür boyu erişim.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_street_lighting_title",
    "Экскурсионная программа",
    "Выездные путешествия и вдохновение",
    "Travel and inspiration",
    "Seyahat ve ilham",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_street_lighting_desc",
    "Описание экскурсий",
    "Поездка в Акьяку, прогулка по реке Азмак, Дальян и пляж Изтузу включены в арт-отпуск",
    "A trip to Akyaka, a cruise along the Azmak River, Dalyan and Iztuzu Beach are included in the art vacation",
    "Sanat tatili paketine Akyaka gezisi, Azmak Nehri'nde tekne turu, Dalyan ve İztuzu Plajı dahildir.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_parking_title",
    "Трансфер из аэропорта",
    "Встреча и трансфер из аэропорта DLM",
    "Meeting and transfer from DLM Airport",
    "DLM Havalimanı'ndan karşılama ve transfer",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_parking_desc",
    "Описание трансфера",
    "Бесплатный индивидуальный трансфер из аэропорта Даламан [DLM] на виллу или в студию Мармариса",
    "Free private transfer from Dalaman Airport [DLM] to your Marmaris villa or studio",
    "Dalaman Havalimanı'ndan Marmaris'teki villanıza veya stüdyonuza ücretsiz özel transfer.",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_bbq_title",
    "Гастрономия от шефа Марины",
    "Домашняя средиземноморская кухня",
    "Homemade Mediterranean cuisine",
    "Ev yapımı Akdeniz mutfağı",
    "",
    "Вкл"
  ],
  [
    "Блок 9. Макро-галерея процессов",
    "spa_bbq_desc",
    "Описание кухни",
    "3-разовое питание из свежих фермерских продуктов, турецкие завтраки и душевные ужины на террасе",
    "Three meals a day with fresh farm produce, Turkish breakfasts and hearty dinners on the terrace",
    "Günde üç öğün, taze çiftlik ürünleriyle hazırlanan Türk kahvaltıları ve terasta doyurucu akşam yemekleri.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_header",
    "Заголовок блока правил и гарантий",
    "Юридические гарантии, публичные оферты, KVKK / GDPR и правила бронирования",
    "Legal guarantees, public offers, KVKK / GDPR and booking rules",
    "Yasal güvenceler, halka açık teklifler, KVKK / GDPR ve rezervasyon kuralları",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_title",
    "Оферта на обучение и МК",
    "Публичная оферта на обучение и бессрочный доступ",
    "Public offer for training and unlimited access",
    "Eğitim ve sınırsız erişim için herkese açık teklif",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_desc",
    "Описание оферты",
    "Официальный договор оферты на онлайн мастер-классы и 6-месячное индивидуальное наставничество.",
    "Official offer agreement for online master classes and 6 months of individual mentoring.",
    "Çevrimiçi yüksek lisans dersleri ve 6 aylık bireysel mentorluk için resmi teklif sözleşmesi.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_badge",
    "Бейдж оферты",
    "Доступ навсегда + 180 дней кураторства",
    "Lifetime access + 180 days of curation",
    "Ömür boyu erişim + 180 gün içerik seçimi",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_item1",
    "Пункт 1.1",
    "Мгновенная выдача ссылок-приглашений в закрытые Telegram-каналы МК и 16 уроков после подтверждения оплаты.",
    "Instantly receive invitation links to closed MK Telegram channels and 16 lessons after payment confirmation.",
    "Ödeme onaylandıktan hemen sonra, kapalı MK Telegram kanallarına ve 16 derse ait davet bağlantılarını alacaksınız.",
    "CheckCircle",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_item2",
    "Пункт 1.2",
    "Фиксация даты старта онлайн-наставничества и автоматический расчет 6 месяцев обратной связи [EDATE +6 мес].",
    "Fixing the start date of online mentoring and automatic calculation of 6 months of feedback [EDATE +6 months].",
    "Çevrimiçi mentorluğun başlangıç ​​tarihinin sabitlenmesi ve 6 aylık geri bildirimin otomatik olarak hesaplanması [EDATE +6 ay].",
    "Clock",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_law_item3",
    "Пункт 1.3",
    "Выдача именного PDF-сертификата школы Vasilisa.luneville с защитным QR-кодом после сдачи итоговой работы.",
    "A personalized PDF certificate from Vasilisa.luneville School with a security QR code will be issued upon completion of the final assignment.",
    "Son ödevi tamamladığınızda, Vasilisa.luneville Okulu tarafından size özel hazırlanmış, güvenlik QR kodlu bir PDF sertifikası verilecektir.",
    "Award",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_title",
    "Договор арт-отпуска и студии",
    "Бронирование арт-отпусков в Турции и студии в Мармарисе",
    "Booking art holidays in Turkey and studios in Marmaris",
    "Türkiye'de sanat tatili rezervasyonu ve Marmaris'te stüdyolar.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_desc",
    "Описание правил ретрита",
    "Прозрачная система квот [6 мест на поток] и удержание выбранного слота на 24 часа [HOLD].",
    "Transparent quota system [6 places per stream] and holding of the selected slot for 24 hours [HOLD].",
    "Şeffaf kota sistemi [akış başına 6 yer] ve seçilen zaman diliminin 24 saat boyunca rezerve edilmesi [BEKLETME].",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_badge",
    "Бейдж ретрита",
    "Квота 6 мест • 24ч HOLD",
    "Quota: 6 places • 24-hour hold",
    "Kontenjan: 6 yer • 24 saat rezervasyon",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_item1",
    "Пункт 2.1",
    "В стоимость арт-отпуска [1100 / 1200 / 1500 €] включено всё: вилла 7 ночей, питание от Марины, обуче��ие, материалы, экскурсии и трансфер DLM.",
    "The art holiday price [1100 / 1200 / 1500 €] includes everything: 7 nights villa, meals from Marina, training, materials, excursions and DLM transfer.",
    "Sanat tatili fiyatına [1100 / 1200 / 1500 €] her şey dahildir: 7 gece villa konaklaması, Marina'dan yemekler, eğitim, materyaller, geziler ve DLM transferi.",
    "Home",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_item2",
    "Пункт 2.2",
    "Индивидуальная неделя в студии Мармариса [500 €] включает 5 дней обучения пн-пт 09:00-17:00, все материалы и трансфер из аэропорта DLM.",
    "Individual week in Marmaris studio [500 €] includes 5 days of training Mon-Fri 09:00-17:00, all materials and transfer from DLM airport.",
    "Marmaris stüdyosunda bireysel haftalık eğitim [500 €], Pazartesi-Cuma 09:00-17:00 saatleri arasında 5 günlük eğitimi, tüm malzemeleri ve DLM havaalanından transferi içermektedir.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_home_item3",
    "Пункт 2.3",
    "Оперативная поддержка в Telegram-канале ретрита @limonnavillevturkey и по телефонам +7 921 304-78-92 / +90 545 598 32 11.",
    "Prompt support is available on the retreat's Telegram channel @limonnavillevturkey and by phone at +7 921 304-78-92 / +90 545 598 32 11.",
    "Kampın Telegram kanalı @limonnavillevturkey üzerinden ve +7 921 304-78-92 / +90 545 598 32 11 numaralı telefonlardan hızlı destek alabilirsiniz.",
    "Phone",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_title",
    "Правила бутика и доставки",
    "Бутик кутюрных изделий и Ателье «Под заказ»",
    "Couture Boutique and Atelier \"Made to Order\"",
    "Couture Butik ve Atölye \"Siparişe Göre Üretim\"",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_desc",
    "Описание бутика",
    "Бережная международная доставка готовых украшений и индивидуальный пошив по утвержденному эскизу.",
    "Careful international delivery of finished jewelry and custom tailoring based on an approved design.",
    "Onaylanmış bir tasarıma göre tamamlanmış mücevherlerin ve özel dikim ürünlerinin uluslararası alanda özenli teslimatı.",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_badge",
    "Бейдж бутика",
    "Отправка за 2-3 дня • Трек-номер",
    "Dispatch in 2-3 days • Tracking number",
    "2-3 gün içinde gönderim • Takip numarası",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_item1",
    "Пункт 3.1",
    "Готовые броши, воротнички и сумочки отправляются в течение 2-3 рабочих дней в подарочной коробке с трек-номером.",
    "Finished brooches, collars and handbags are shipped within 2-3 business days in a gift box with a tracking number.",
    "Hazırlanan broşlar, kolyeler ve el çantaları, takip numarası içeren bir hediye kutusunda 2-3 iş günü içinde kargoya verilir.",
    "Package",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_item2",
    "Пункт 3.2",
    "Изделия «Под заказ» [Bespoke] создаются за 14-30 рабочих дней с фото- и видеоотчетами процесса вышивки на раме.",
    "Bespoke items are created within 14-30 working days with photo and video reports of the embroidery process on the frame.",
    "Kişiye özel ürünler, işleme sürecinin fotoğraf ve video raporlarıyla birlikte 14-30 iş günü içinde üretilir.",
    "Camera",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_access_item3",
    "Пункт 3.3",
    "ИИ-брифователь на сайте помогает мгновенно составить техническое задание на кастомную вышивку и рассчитать стоимость.",
    "The website's AI briefer helps you instantly create a technical specification for custom embroidery and calculate the cost.",
    "Web sitesinin yapay zeka destekli özetleyici aracı, özel nakış için anında teknik özellikler oluşturmanıza ve maliyeti hesaplamanıza yardımcı olur.",
    "Sparkles",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_title",
    "KVKK, GDPR и налоговый учет",
    "Защита данных KVKK / GDPR и фактуры e-Arşiv GİB",
    "Data protection KVKK / GDPR and invoices e-Arşiv GİB",
    "Verilerin korunması KVKK/GDPR ve faturalar e-Arşiv GİB",
    "",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_desc",
    "Описание налогов и KVKK",
    "Полное соответствие закону Турции KVKK № 6698, европейскому регламенту GDPR и стандарту VUK 213.",
    "Full compliance with Turkish KVKK Law No. 6698, European GDPR and VUK 213 standard.",
    "Türkiye'nin 6698 sayılı KVKK Kanunu, Avrupa Genel Veri Koruma Yönetmeliği (GDPR) ve VUK 213 standardına tam uyumluluk.",
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
    "Issuance of official electronic invoices e-Arşiv Fatura GİB in Turkish lira [TRY] at the TCMB exchange rate and NPD/IP RF checks.",
    "Türk Lirası [TRY] cinsinden, TCMB döviz kuru üzerinden resmi elektronik faturaların (e-Arşiv Fatura GİB) düzenlenmesi ve NPD/IP RF çeklerinin alınması.",
    "FileText",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_item2",
    "Пункт 4.2",
    "Безопасная двухфакторная верификация аккаунтов учениц [OTP по Email] с неизменяемым идентификатором VL-USER-XXXX.",
    "Secure two-factor verification of student accounts [OTP via Email] with an immutable identifier VL-USER-XXXX.",
    "Öğrenci hesaplarının güvenli iki faktörlü doğrulaması [E-posta yoluyla OTP], değiştirilemez bir tanımlayıcı olan VL-USER-XXXX ile sağlanır.",
    "ShieldCheck",
    "Вкл"
  ],
  [
    "Блок 16. Юридическая информация и футер",
    "safety_cancel_item3",
    "Пункт 4.3",
    "Гибкий перенос предоплаты на следующий поток арт-отпуска или на программу онлайн-наставничества при предупреждении за 30 дней.",
    "Flexible prepayment transfer to the next art vacation course or online mentoring program with 30 days' notice.",
    "30 gün önceden bildirimde bulunarak, bir sonraki sanat yaz kursuna veya çevrimiçi mentorluk programına esnek ön ödeme transferi yapabilirsiniz.",
    "Calendar",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "brandName",
    "Название бренда в шапке",
    "Vasilisa.luneville — вышивка от кутюр",
    "Vasilisa.luneville – haute couture embroidery",
    "Vasilisa.luneville – haute couture nakış",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "login",
    "Кнопка входа",
    "Войти",
    "Login",
    "Giriş yapmak",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "register",
    "Кнопка регистрации",
    "Регистрация ученицы",
    "Student registration",
    "Öğrenci kaydı",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "logout",
    "Кнопка выхода",
    "Выйти",
    "Exit",
    "Çıkış",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "guestCabinet",
    "Кабинет ученицы",
    "Кабинет ученицы",
    "The student's office",
    "Öğrencinin ofisi",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "hostCabinet",
    "Кабинет мастера Василисы",
    "Кабинет Василисы [CRM]",
    "Vasilisa's office [CRM]",
    "Vasilisa'nın ofisi [CRM]",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navAbout",
    "Меню: О школе",
    "О школе и направлениях",
    "About the school and its programs",
    "Okul ve programları hakkında",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navAmenities",
    "Меню: Материалы и программа",
    "Материалы и условия",
    "Materials and conditions",
    "Malzemeler ve koşullar",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navReviews",
    "Меню: Отзывы учениц",
    "Работы и отзывы",
    "Works and reviews",
    "Eserler ve incelemeler",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navLocation",
    "Меню: Мармарис и Вилла",
    "Мармарис и Вилла",
    "Marmaris and Villa",
    "Marmaris ve Villa",
    "",
    "Вкл"
  ],
  [
    "Блок 13. База знаний и статьи",
    "navCatalog",
    "Меню: МК, Ретриты и Бутик",
    "Мастер-классы, Ретриты и Бутик",
    "Masterclasses, Retreats and Boutique",
    "Ustalık Sınıfları, Kamplar ve Butik",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "bookNow",
    "Кнопка записи",
    "Записаться на ретрит / в студию",
    "Sign up for a retreat/studio",
    "Bir inziva/stüdyo programına kaydolun.",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "checkIn",
    "Дата начала потока",
    "Старт потока / недели",
    "Start of the stream / week",
    "Haftalık yayının başlangıcı",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "checkOut",
    "Дата окончания потока",
    "Завершение",
    "Conclusion",
    "Çözüm",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Да��ы и бронь арт-отпуска",
    "guests",
    "Количество участниц",
    "Участниц",
    "Participants",
    "Katılımcılar",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "perNight",
    "Базовый тариф",
    "за день программы / МК",
    "per day program / MK",
    "günlük program / MK",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "nights",
    "Дней обучения",
    "дней",
    "days",
    "günler",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "totalPrice",
    "Итого к оплате",
    "Итого за программу",
    "Total for the program",
    "Programın toplamı",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "cleaningFee",
    "Комплект материалов от кутюр",
    "Материалы и трансфер DLM",
    "DLM Materials and Transfer",
    "DLM Malzemeleri ve Transferi",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "depositText",
    "Условие удержания слота",
    "Слот удерживается 24 часа [HOLD] • Квота ретрита 6 мест",
    "The slot is held for 24 hours [HOLD] • Retreat quota is 6 places",
    "Bu yer 24 saatliğine rezerve edilmiştir [BEKLETİLMİŞTİR] • Geri çekilme kontenjanı 6 kişidir",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "confirmBooking",
    "Подтвердить запись",
    "Подтвердить запись и перейти к оплате",
    "Confirm your booking and proceed to payment",
    "Rezervasyonunuzu onaylayın ve ödeme işlemine geçin.",
    "",
    "Вкл"
  ],
  [
    "Блок 7. Даты и бронь арт-отпуска",
    "selectDates",
    "Выбрать даты потока",
    "Выберите даты потока ретрита или недели в студии",
    "Select dates for a retreat stream or studio week",
    "Bir inziva yayını veya stüdyo haftası için tarihleri ​​seçin.",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "close",
    "Кнопка Закрыть",
    "Закрыть",
    "Close",
    "Kapalı",
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
    "Kaydetmek",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllPhotos",
    "Кнопка всех фото",
    "Смотреть макро-галерею работ",
    "View macro gallery of works",
    "Eserlerin makro galerisini görüntüleyin",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllAmenities",
    "Кнопка всех материалов",
    "Показать все материалы и условия",
    "Show all materials and conditions",
    "Tüm malzemeleri ve koşulları göster",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllLandmarksBtn",
    "Кнопка всех 14 локаций",
    "Показать все 14 локаций Мармариса и ретрита",
    "Show all 14 Marmaris locations and retreats",
    "Marmaris'teki 14 lokasyon ve tatil yerinin tamamını göster",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "showAllReviewsBtn",
    "Кнопка всех отзывов",
    "Читать все отзывы учениц",
    "Read all student reviews",
    "Tüm öğrenci yorumlarını okuyun",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "landmarksCategoryTitle",
    "Заголовок категорий локаций",
    "Локации студии, виллы и экскурсий",
    "Studio, villa, and excursion locations",
    "Stüdyo, villa ve gezi mekanları",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "reviewsCategoryTitle",
    "Заголовок оценок школы",
    "Оценки учениц по 6 критериям обучения",
    "Student scores on 6 learning criteria",
    "Öğrenci 6 öğrenme kriteri üzerinden puan aldı.",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "reviewsRatingTitle",
    "Рейтинг школы",
    "Рейтинг школы 5.0 из 5",
    "School rating: 5.0 out of 5",
    "Okul değerlendirmesi: 5 üzerinden 5",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "legalRegulationHeader",
    "Заголовок оферты и правил",
    "Публичная оферта, KVKK / GDPR и гарантии Vasilisa.luneville",
    "Public Offer, GDPR, and Guarantees by Vasilisa.luneville",
    "Vasilisa.luneville tarafından sunulan Halka Arz, GDPR ve Garantiler",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "chatWithHost",
    "Кнопка чата с Василисой",
    "Чат с Василисой и сдача видео ДЗ",
    "Chat with Vasilisa and turn in video homework",
    "Vasilisa ile sohbet edin ve video ödevinizi teslim edin.",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "onlineStatus",
    "Статус онлайн",
    "Василиса и ИИ-Куратор на связи",
    "Vasilisa and the AI ​​Curator are in touch",
    "Vasilisa ve Yapay Zeka Küratörü iletişim halindeler.",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "typing",
    "Печатает ответ",
    "ИИ-Куратор формирует ответ...",
    "The AI ​​Curator generates a response...",
    "Yapay Zeka Küratörü bir yanıt oluşturuyor...",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "send",
    "Кнопка отправить",
    "Отправить",
    "Send",
    "Göndermek",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "messagePlaceholder",
    "Плейсхолдер чата",
    "Задайте вопрос по МК/ретриту или прикрепите ссылку на 20-30 сек видео ДЗ...",
    "Ask a question about the MK/retreat or attach a link to a 20-30 second video of homework...",
    "MK/inziva hakkında bir soru sorun veya ödevle ilgili 20-30 saniyelik bir videonun bağlantısını ekleyin...",
    "",
    "Вкл"
  ],
  [
    "Блок 14. ИИ-Куратор и частые вопросы",
    "bookingSuccess",
    "Уведомление об успешной записи",
    "Заявка принята! Доступ или подтверждение брони отправлены в ваш кабинет и Telegram.",
    "Your request has been accepted! Access or booking confirmation has been sent to your account and Telegram.",
    "İsteğiniz kabul edildi! Erişim veya rezervasyon onayı hesabınıza ve Telegram'a gönderildi.",
    "",
    "Вкл"
  ]
];

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
    "+79213047892",
    "Контактный телефон и WhatsApp / Telegram РФ",
    "ACTIVE"
  ],
  [
    "КОНТАКТЫ",
    "phone_tr",
    "+905455983211",
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
    "9:00",
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
    "01.08",
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
    "КВОТЫ_И_СРО��И",
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
    "Greeting after purchasing an online master class",
    "Çevrimiçi bir yüksek lisans dersi satın aldıktan sonraki selamlaşma",
    "Здравствуйте! Поздравляю вас с началом творческого пути в школе кутюрной вышивки Vasilisa.luneville! Ваш бессрочный доступ к закрытому Telegram-каналу мастер-класса открыт в личном кабинете ученицы. Вышивайте с удовольствием в комфортном темпе!",
    "Hello! Congratulations on starting your creative journey at the Vasilisa.luneville couture embroidery school! Your lifetime access to the master class's private Telegram channel is available in your student account. Embroider with pleasure at your own pace!",
    "Merhaba! Vasilisa.luneville haute couture nakış okulunda yaratıcı yolculuğunuza başladığınız için tebrikler! Usta sınıfının özel Telegram kanalına ömür boyu erişim hakkınız öğrenci hesabınızda mevcuttur. Kendi hızınızda keyifle nakış yapın!"
  ],
  [
    "TMP-002",
    "Старт индивидуального онлайн-наставничества [16 уроков, 200 €]",
    "Start of individual online mentoring [16 lessons, €200]",
    "Bireysel çevrimiçi mentorluk programının başlangıcı [16 ders, 200 €]",
    "Рада приветствовать вас на индивидуальном наставничестве «Основы люневильской вышивки»! Доступ ко всем 16 видеоурокам открыт навсегда, а наш персональный чат сопровождения активен ровно 6 месяцев [180 дней]. Присылайте короткие видео вашей работы на раме по 20-30 секунд - я буду ��нимательно смотреть постановку руки и помогать на каждом этапе!",
    "I'm delighted to welcome you to my one-on-one mentoring session, \"Basics of Lunéville Embroidery\"! Access to all 16 video lessons is lifetime, and our personal support chat is active for exactly 6 months [180 days]. Send me short 20-30-second videos of your work on the frame—I'll carefully watch your hand positioning and guide you through every step!",
    "\"Lunéville Nakışının Temelleri\" adlı bire bir mentorluk seansıma hoş geldiniz! 16 video dersin tamamına ömür boyu erişim hakkınız bulunmaktadır ve kişisel destek sohbetimiz tam 6 ay [180 gün] boyunca aktiftir. Çalışmalarınızın 20-30 saniyelik kısa videolarını bana gönderin; el pozisyonunuzu dikkatlice izleyeceğim ve her adımda size rehberlik edeceğim!"
  ],
  [
    "TMP-003",
    "Подтверждение 5-дневного офлайн-наставничества в студии Мармариса [500 €]",
    "Confirmation of 5-day offline mentoring at the Marmaris studio [€500]",
    "Marmaris stüdyosunda 5 günlük yüz yüze mentorluk programının onaylanması [€500]",
    "Ваша индивидуальная учебная неделя в творческой студии Vasilisa.luneville в Мармарисе по��тверждена! Занятия проходят с понедельника по пятницу с 09:00 до 17:00. Все рамы, крючки №70-90 и материалы готовы. Пришлите, пожалуйста, номер вашего рейса в аэропорт Даламан [DLM] для организации бесплатного трансфера и подбора отеля.",
    "Your private study week at the Vasilisa.luneville creative studio in Marmaris is confirmed! Classes are held Monday through Friday from 9:00 AM to 5:00 PM. All frames, #70-90 hooks, and materials are ready. Please provide your flight number to Dalaman Airport [DLM] to arrange a free transfer and hotel selection.",
    "Marmaris'teki Vasilisa.luneville yaratıcı stüdyosunda özel çalışma haftanız onaylandı! Dersler Pazartesi'den Cuma'ya 09:00 - 17:00 saatleri arasında yapılmaktadır. Tüm çerçeveler, 70-90 numara kancalar ve malzemeler hazır. Ücretsiz transfer ve otel seçimi için lütfen Dalaman Havalimanı'na (DLM) uçuş numaranızı bildirin."
  ],
  [
    "TMP-004",
    "Подтверждение брони места на кутюрный арт-отпуск в Турции 2027",
    "Confirmation of your reservation for a couture art vacation in Turkey in 2027",
    "2027 yılı için Türkiye'de haute couture sanat tatili rezervasyonunuzun onayı.",
    "Поздравляем! За вами закреплено 1 из 6 мест на кутюрный арт-отпуск в Турции [8 дней / 7 ночей на горной вилле в провинции Мугла]. В стоимость включено проживание, 3-разовое домашнее питание от Марины, 5 дней вышивки с Василисой Боровиковой и Юлией Озмен, все материалы, выезд в Акьяку / Азмак / Дальян / Изтузу и трансфер из аэропорта Даламан [DLM]. Канал участниц: https://t.me/limonnavillevturkey",
    "Congratulations! You have been awarded one of six spots on a couture art vacation in Turkey [8 days / 7 nights at a mountain villa in Muğla Province]. The price includes accommodation, three meals a day at Marina's house, five days of embroidery with Vasilisa Borovikova and Yulia Ozmen, all materials, travel to Akyaka / Azmak / Dalyan / Iztuzu, and transfer from Dalaman Airport [DLM]. Participants' channel: https://t.me/limonnavillevturkey",
    "Tebrikler! Türkiye'de düzenlenecek bir haute couture sanat tatilinde (Muğla ilinde bir dağ villasında 8 gün / 7 gece) altı kişilik kontenjandan birini kazandınız. Fiyata konaklama, Marina'nın evinde günde üç öğün yemek, Vasilisa Borovikova ve Yulia Özmen ile beş günlük nakış eğitimi, tüm malzemeler, Akyaka / Azmak / Dalyan / İztuzu'ya ulaşım ve Dalaman Havalimanı'ndan (DLM) transfer dahildir. Katılımcıların kanalı: https://t.me/limonnavillevturkey"
  ],
  [
    "TMP-005",
    "Прием заказа в Бутике и Ателье «Под заказ» [Bespoke Atelier]",
    "Order acceptance at the Bespoke Atelier Boutique and Atelier",
    "Bespoke Atelier Butiği ve Atölyesinde sipariş kabulü",
    "Благодарим за заказ в бутике кутюрных изделий Vasilisa.luneville! Готовые изделия отправляются в течение 2-3 рабочих дней, а индивидуальные заказы «Под заказ» создаются вручную за 14-30 рабочих дней. Мы будем присылать вам макро-фотографии процесса вышивки и сразу направим международный трек-номер после отправки.",
    "Thank you for your order from the Vasilisa.luneville couture boutique! Finished items are shipped within 2-3 business days, while custom \"Made to Order\" orders are handcrafted within 14-30 business days. We will send you macro photos of the embroidery process and provide you with an international tracking number immediately after shipment.",
    "Vasilisa.luneville haute couture butiğinden verdiğiniz sipariş için teşekkür ederiz! Hazır ürünler 2-3 iş günü içinde kargoya verilirken, özel siparişler 14-30 iş günü içinde elde hazırlanır. Kargoya verildikten hemen sonra nakış işleminin makro fotoğraflarını ve uluslararası takip numarasını size göndereceğiz."
  ],
  [
    "TMP-006",
    "Разбор 20-30-секундного видео домашнего задания ученицы",
    "Analysis of a 20-30 second video of a student's homework",
    "Öğrencinin ödevini gösteren 20-30 saniyelik bir videonun analizi",
    "Посмотрела ваше 20-30-секундное видео домашнего задания! Отличное натяжение шелковой органзы в раме и ровный шаг тамбурного стежка. Обратите внимание на полный поворот винта люневильского крючка на 180 градусов при выходе петли наверх, чтобы нить не цеплялась за волокна ткани. Переходите к следующему уроку!",
    "I watched your 20-30 second homework video! The silk organza in the frame is perfectly taut, and the chain stitch is even. Note the full 180-degree turn of the Lunéville hook screw when the stitch comes up to prevent the thread from catching on the fabric fibers. On to the next lesson!",
    "20-30 saniyelik ödev videonuzu izledim! Çerçevedeki ipek organza mükemmel bir şekilde gergin ve zincir dikişi düzgün. İpliğin kumaş liflerine takılmasını önlemek için dikiş yukarı çıktığında Lunéville kanca vidasının 180 derecelik tam dönüşüne dikkat edin. Bir sonraki derse geçelim!"
  ]
];

const MASTER_GALLERY_ROWS = [
  [
    "GAL-001",
    "Витрина",
    "Главный баннер школы кутюрной вышивки Vasilisa.luneville",
    "Showcase",
    "The main banner of the Vasilisa.luneville couture embroidery school",
    "Vitrin",
    "Vasilisa.luneville haute couture nakış okulunun ana afişi.",
    "IMAGE",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Кутюрная вышивка Vasilisa.luneville с 2015 года",
    "Couture embroidery by Vasilisa.luneville since 2015",
    "Vasilisa.luneville tarafından 2015'ten beri yapılan haute couture nakış işleri."
  ],
  [
    "GAL-002",
    "МК Лаванда",
    "Ветка лаванды на органзе - готовая аппликация [10 €]",
    "MK Lavender",
    "Lavender sprig on organza - ready-made applique [10 €]",
    "MK Lavanta",
    "Organza üzerine lavanta dalı - hazır aplike [10 €]",
    "IMAGE",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk",
    "Аппликация «Ветка лаванды» на прозрачной органзе",
    "Lavender Branch applique on sheer organza",
    "İnce organza üzerine lavanta dalı aplikesi"
  ],
  [
    "GAL-003",
    "МК Лаванда",
    "Макросъемка элементов вышивки бисером и пайетками",
    "MK Lavender",
    "Macro photography of bead and sequin embroidery elements",
    "MK Lavanta",
    "Boncuk ve payet işlemeli unsurların makro fotoğrafı",
    "IMAGE",
    "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "Детализация стежков и бисера в МК Лаванда",
    "Detailing the stitches and beads in the Lavender pattern",
    "Lavanta desenindeki dikişlerin ve boncukların detayları."
  ],
  [
    "GAL-004",
    "Бутик и МК",
    "Пример ношения кутюрной аппликации и броши на одежде",
    "Boutique and MK",
    "An example of wearing a couture appliqué and brooch on clothing",
    "Butik ve MK",
    "Bir giysiye haute couture aplike ve broş takılmasına örnek",
    "IMAGE",
    "https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Стильный акцент на рубашке - ветка лаванды",
    "A stylish accent on the shirt is a lavender branch.",
    "Tişörtün şık bir detayı ise lavanta dalı."
  ],
  [
    "GAL-005",
    "МК Мимоза",
    "МК Мимоза - 4 варианта вышивки одной веточки [10 € / 1000 ₽]",
    "MK Mimosa",
    "MK Mimosa - 4 embroidery options for one branch [10 € / 1000 ₽]",
    "MK Mimosa",
    "MK Mimosa - Tek dal için 4 nakış seçeneği [10 € / 1000 ₽]",
    "IMAGE",
    "https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk",
    "Объемная веточка мимозы на шелковой органзе",
    "A voluminous sprig of mimosa on silk organza",
    "İpek organza üzerinde hacimli bir mimoza dalı."
  ],
  [
    "GAL-006",
    "МК Мимоза",
    "Фактуры и сочетания французских пайеток, синели и бисера",
    "MK Mimosa",
    "Textures and combinations of French sequins, chenille and beads",
    "MK Mimosa",
    "Fransız payetleri, şönil ve boncukların dokuları ve kombinasyonları.",
    "IMAGE",
    "https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Игра фактур и солнечный блеск мимозы",
    "The play of textures and the sunny sparkle of mimosa",
    "Dokuların uyumu ve mimoza çiçeğinin güneşli ışıltısı"
  ],
  [
    "GAL-007",
    "Наставничество",
    "Процесс работы люневильским крючком на профессиональной раме [200 € / 500 €]",
    "Mentoring",
    "The process of working with a Luneville hook on a professional frame [200 € / 500 €]",
    "Mentorluk",
    "Profesyonel bir çerçevede Luneville kancasıyla çalışma süreci [200 € / 500 €]",
    "IMAGE",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Отработка тамбурного стежка в 16 уроках наставничества",
    "Mastering the Chain Stitch in 16 Tutoring Lessons",
    "16 Derslik Eğitimle Zincir Dikişini Öğrenmek"
  ],
  [
    "GAL-008",
    "Наставничество",
    "Макросъемка закрепки и чистой изнанки кутюрной вышивки",
    "Mentoring",
    "Macro photography of the fastening and clean back of couture embroidery",
    "Mentorluk",
    "Haute couture nakışın bağlama yerinin ve temiz arka yüzünün makro fotoğrafı.",
    "IMAGE",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Идеальная изнанка от кутюр под микроскопом",
    "The perfect couture under the microscope",
    "Mikroskop altında kusursuz haute couture"
  ],
  [
    "GAL-009",
    "Арт-отпуск",
    "Горная вилла в провинции Мугла и атмосфера кутюрного ретрита [2027]",
    "Art vacation",
    "A mountain villa in the province of Mugla and the atmosphere of a couture retreat [2027]",
    "Sanat tatili",
    "Muğla ilinde bir dağ villası ve bir haute couture inziva yeri atmosferi [2027]",
    "IMAGE",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Горная вилла в Турции: 8 дней вышивки, бассейн и фруктовый сад",
    "Mountain Villa in Turkey: 8 Days of Embroidery, a Pool, and an Orchard",
    "Türkiye'de Dağ Villası: 8 Günlük Nakış İşleme, Havuz ve Meyve Bahçesi"
  ],
  [
    "GAL-010",
    "Арт-отпуск",
    "Участницы кутюрного арт-отпуска с Василисой Боровиковой и Юлией Озмен",
    "Art vacation",
    "Participants of the couture art vacation with Vasilisa Borovikova and Yulia Ozmen",
    "Sanat tatili",
    "Vasilisa Borovikova ve Yulia Özmen ile birlikte haute couture sanat tatiline katılanlar",
    "IMAGE",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Творческое женское сообщество на ретрите в Турции",
    "A creative women's community on retreat in Turkey",
    "Türkiye'de inzivaya çekilmiş yaratıcı bir kadın topluluğu"
  ]
];

const MASTER_SERVICES_ROWS = [
  [
    "VL-MK-LAVENDER",
    "🌿 МК Вышивка иглой: аппликация «Ветка лаванды» на органзе",
    "Создание нежной объемной аппликации 10x15 см иглой по прозрачной шелковой органзе. Доступ навсегда в Telegram.",
    "🌿 Embroidery tutorial: \"Lavender Branch\" applique on organza",
    "Create a delicate, 10x15 cm 3D needlepoint appliqué on sheer silk organza. Lifetime access on Telegram.",
    "🌿 Nakış dersi: Organza üzerine \"Lavanta Dalı\" aplike",
    "İnce ipek organza üzerine 10x15 cm boyutlarında zarif bir 3 boyutlu iğne oyası aplikesi yaratın. Telegram üzerinden ömür boyu erişim.",
    "11",
    "10",
    "1000",
    "385",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk, https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Пошаговый онлайн мастер-класс для начинающих и продолжающих: запялка прозрачной органзы в обычные пяльцы, работа с бисером и пайетками, аккуратная обработка края и превращение вышивки в брошь или нашивку на одежду. Доступ к урокам бессрочный.",
    "A step-by-step online master class for beginners and advanced embroidery enthusiasts: hooping sheer organza in a standard hoop, working with beads and sequins, carefully finishing edges, and turning embroidery into a brooch or apparel patch. Access to the lessons is unlimited.",
    "Hem yeni başlayanlar hem de ileri düzey nakış meraklıları için adım adım çevrimiçi bir ustalık sınıfı: şeffaf organzayı standart bir kasnakta germe, boncuk ve payetlerle çalışma, kenarları dikkatlice bitirme ve nakışı broş veya giyim yamasına dönüştürme. Derslere erişim sınırsızdır."
  ],
  [
    "VL-MK-MIMOSA",
    "🌼 МК «Мимоза» - 4 варианта вышивки одной веточки",
    "Изучение четырех фактурных техник вышивки солнечной мимозы бисером, пайетками и мулине. Доступ навсегда.",
    "🌼 MK \"Mimosa\" - 4 embroidery options for one branch",
    "Learn four textured embroidery techniques for sunny mimosa using beads, sequins, and floss. Lifetime access.",
    "🌼 MK \"Mimosa\" - Tek dal için 4 nakış seçeneği",
    "Güneşli mimoza çiçeği için boncuk, payet ve iplik kullanarak dört farklı dokulu nakış tekniğini öğrenin. Ömür boyu erişim.",
    "11",
    "10",
    "1000",
    "385",
    "https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk, https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "В одном мастер-классе собраны 4 разных подхода к созданию объема и фактуры цветов и листьев мимозы на шелковой органзе. Подходит для вышивки обычной иглой на пяльцах с нуля. Бессрочный доступ в закрытом Telegram-канале.",
    "This master class combines four different approaches to creating volume and texture in mimosa flowers and leaves on silk organza. Suitable for embroidery with a regular needle and a hoop from scratch. Lifetime access is available in a private Telegram channel.",
    "Bu ustalık sınıfı, ipek organza üzerine mimoza çiçekleri ve yapraklarında hacim ve doku oluşturmak için dört farklı yaklaşımı bir araya getiriyor. Normal bir iğne ve kasnakla sıfırdan nakış yapmaya uygundur. Özel bir Telegram kanalında ömür boyu erişim mevcuttur."
  ],
  [
    "VL-MK-FIREWORK",
    "🎇 МК «Фейерверк» - кутюрная работа с пайетками и стеклярусом",
    "Динамичная сияющая композиция в технике высокой моды из французских пайеток, бисера и стекляруса.",
    "🎇 MK \"Fireworks\" - couture work with sequins and glass beads",
    "A dynamic, sparkling composition using high-fashion techniques, made from French sequins, beads and glass beads.",
    "🎇 MK \"Havai Fişekler\" - payetler ve cam boncuklarla işlenmiş haute couture bir tasarım.",
    "Fransız payetleri, boncukları ve cam boncuklardan yapılmış, yüksek moda teknikleri kullanılarak oluşturulmuş dinamik ve ışıltılı bir kompozisyon.",
    "16",
    "15",
    "1500",
    "580",
    "https://drive.google.com/file/d/1wYhLf2qyJXcranU7rVHqNyEzHUENfrc-/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Мастер-класс по созданию сложной светотеневой фактуры и ритма с использованием разноразмерных пайеток, стекляруса и бисера. Включает схему, карту материалов и подробные макро-уроки с бессрочным доступом.",
    "A master class on creating complex light and shadow textures and rhythms using different-sized sequins, bugle beads, and seed beads. Includes a pattern, materials chart, and detailed macro tutorials with lifetime access.",
    "Farklı boyutlardaki pullar, boncuklar ve tohum boncuklar kullanarak karmaşık ışık ve gölge dokuları ve ritimleri oluşturmaya yönelik bir ustalık sınıfı. Ömür boyu erişimle birlikte bir kalıp, malzeme tablosu ve ayrıntılı makro eğitimler içerir."
  ],
  [
    "VL-MK-FRAMING",
    "🖼 МК «Оформление вышивки в рамку» - профессиональная натяжка",
    "Авторская технология безупречной натяжки тонких тканей и оформления готовой кутюрной вышивки в багет.",
    "🖼 Workshop \"Framing Embroidery\" - professional stretching",
    "A proprietary technology for the flawless stretching of fine fabrics and the framing of finished couture embroidery.",
    "🖼 \"Nakış Çerçeveleme\" Atölyesi - profesyonel germe",
    "Hassas kumaşların kusursuz bir şekilde gerilmesi ve haute couture nakışlarının çerçevelenmesi için geliştirilmiş özel bir teknoloji.",
    "11",
    "10",
    "1000",
    "385",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Практическое руководство по превращению вашей вышивки в предмет интерьерного искусства: правильная подготовка подложки, центровка, натяжка без перекоса нитей органзы или бархата и фиксация в раме.",
    "A practical guide to transforming your embroidery into a piece of interior art: proper backing preparation, centering, stretching organza or velvet threads without distortion, and framing.",
    "Nakışınızı iç mekan sanat eserine dönüştürmek için pratik bir rehber: doğru astar hazırlığı, merkezleme, organza veya kadife iplikleri bozulmadan germe ve çerçeveleme."
  ],
  [
    "VL-MK-WINTER",
    "❄️ МК «Зимняя сказка» - объемная синель, канитель и кристаллы",
    "Праздничный кутюрный мастер-класс по сочетанию бархатистой шелковой синели, металлической канители и кристаллов.",
    "❄️ Workshop \"Winter's Tale\" - voluminous chenille, gimp, and crystals",
    "A festive couture masterclass on combining velvety silk chenille, metallic wire, and crystals.",
    "❄️ \"Kış Masalı\" Atölyesi - hacimli şönil, şerit ve kristaller",
    "Kadifemsi ipek şönil, metalik tel ve kristallerin bir araya getirilmesi ��zerine odaklanan, şık ve gösterişli bir haute couture ustalık dersi.",
    "16",
    "15",
    "1500",
    "580",
    "https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Да",
    "Мастер-класс",
    "",
    "Изучите секреты работы с деликатной шелковой синелью и фигурной канителью для создания выразительного рельефа и морозного сияния. Доступ к макро-урокам в Telegram открывается навсегда.",
    "Learn the secrets of working with delicate silk chenille and figured wire to create expressive relief and a frosty glow. Access to the macro lessons on Telegram is permanent.",
    "İnce ipek şönil ve desenli tel kullanarak etkileyici kabartmalar ve buzlu bir ışıltı yaratmanın sırlarını öğrenin. Telegram'daki makro derslere erişim kalıcıdır."
  ],
  [
    "VL-MENTOR-ONLINE",
    "✨ Индивидуальное онлайн-наставничество «Основы люневильской вышивки» [16 уроков]",
    "Флагманский курс: 16 пошаговых макро-уроков [доступ навсегда] + 6 месяцев личной обратной связи Василисы по 20-30 сек видео ДЗ.",
    "✨ Individual online mentoring \"Basics of Lunéville embroidery\" [16 lessons]",
    "Flagship course: 16 step-by-step macro-lessons [lifetime access] + 6 months of personal feedback from Vasilisa, 20-30 sec video homework.",
    "✨ Bireysel çevrimiçi mentorluk \"Lunéville nakışının temelleri\" [16 ders]",
    "Amiral gemisi kursu: 16 adım adım makro ders [ömür boyu erişim] + Vasilisa'dan 6 ay boyunca kişisel geri bildirim, 20-30 saniyelik video ödevi.",
    "216",
    "200",
    "20000",
    "7700",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk, https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Да",
    "Пакет",
    "",
    "Полная система постановки руки на люневильский крючок №70-90 с нуля: запялка органзы в раму, тамбурный стежок в разных направлениях, закрепки, пришивание пайеток, бисера и синели с изнанки вслепую. Вы присылаете короткие 20-30-секундные видео своей работы, а Василиса лично разбирает каждое движение в течение 6 месяцев [180 ��ней].",
    "A complete system for learning to use a #70-90 Lunéville crochet hook from scratch: hooping organza in a frame, chain stitching in different directions, bartacks, and blind-sewing sequins, beads, and chenille from the inside. You send short 20-30-second videos of your work, and Vasilisa personally analyzes every move over the course of six months [180 days].",
    "70-90 numaralı Lunéville tığ kancasını sıfırdan kullanmayı öğrenmek için eksiksiz bir sistem: organzayı çerçeveye germe, farklı yönlerde zincir dikişi, bartack dikişleri ve içten payet, boncuk ve şönil gizli dikişi. Çalışmanızın 20-30 saniyelik kısa videolarını gönderiyorsunuz ve Vasilisa altı ay [180 gün] boyunca her hareketinizi kişisel olarak analiz ediyor."
  ],
  [
    "VL-MENTOR-OFFLINE",
    "✨ Индивидуальное офлайн-наставничество в студии в Мармарисе [5 дней пн-пт]",
    "5 полных дней [09:00-17:00] один на один с Василисой в студии Мармариса. Все материалы, рамы, помощь с отелем и трансфер DLM включены.",
    "✨ Individual offline mentoring in a studio in Marmaris [5 days Mon-Fri]",
    "5 full days [9:00-17:00] one-on-one with Vasilisa in the Marmaris studio. All materials, frames, hotel assistance, and DLM transfers included.",
    "✨ Marmaris'teki bir stüdyoda bireysel yüz yüze mentorluk [5 gün, Pazartesi-Cuma]",
    "Marmaris stüdyosunda Vasilisa ile 5 tam gün [9:00-17:00] birebir çalışma. Tüm malzemeler, çerçeveler, otel yardımı ve DLM transferleri dahildir.",
    "540",
    "500",
    "50000",
    "19250",
    "https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk, https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Да",
    "Пакет",
    "",
    "Интенсивное очное погружение в мир высокой моды в солнечном Мармарисе: 5 дней с понедельника по пятницу с 09:00 до 17:00 под персональным руководством Василисы Боровиковой. Все инструменты, кутюрные рамы, люневильские крючки, шелковая органза, пайетки и бисер предоставляются в студии. Включен индивидуальный трансфер из аэропорта Даламан [DLM].",
    "An intensive, in-person immersion into the world of haute couture in sunny Marmaris: 5 days, Monday through Friday, 9:00 AM to 5:00 PM, under the personal guidance of Vasilisa Borovikova. All tools, couture frames, Lunéville hooks, silk organza, sequins, and beads are provided in the studio. Private transfer from Dalaman Airport [DLM] is included.",
    "Güneşli Marmaris'te haute couture dünyasına yoğun, yüz yüze bir dalış: 5 gün, Pazartesi-Cuma, 09:00-17:00 saatleri arasında, Vasilisa Borovikova'nın kişisel rehberliğinde. Stüdyoda tüm aletler, haute couture çerçeveleri, Lunéville kancaları, ipek organza, payetler ve boncuklar sağlanmaktadır. Dalaman Havalimanı'ndan (DLM) özel transfer dahildir."
  ]
];

const MASTER_GUIDES_ROWS = [
  [
    "VL-RETREAT-2027-01",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 1 [1-8 мая 2027 г., 8 дней / 7 ночей]",
    "Весенний пото�� на горной вилле в Мугле [квота 6 мест, свободно 5 из 6]. Наставники Василиса Боровикова и Юлия Озмен, шеф Марина. Тарифы: 1100 / 1200 / 1500 €.",
    "🍋 Couture Art Vacation in Turkey - Stream 1 [May 1-8, 2027, 8 days / 7 nights]",
    "Spring stream at a mountain villa in Mugla [6 spots available, 5 of 6 available]. Mentors Vasilisa Borovikova and Yulia Ozmen, chef Marina. Rates: €1,100/€1,200/€1,500.",
    "🍋 Türkiye'de Haute Couture Sanat Tatili - 1. Bölüm [1-8 Mayıs 2027, 8 gün / 7 gece]",
    "Muğla'da bir dağ villasında kaynak suyu eşliğinde konaklama [6 kişilik yer mevcut, 5 kişilik yer müsait]. Eğitmenler Vasilisa Borovikova ve Yulia Özmen, şef Marina. Fiyatlar: 1.100 €/1.200 €/1.500 €.",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk, https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 1 мая - 8 мая 2027 г. [8 дней / 7 ночей]. Квота: строго 6 участниц [свободно 5 мест]. Тарифы: 1100 € [односпальная кровать в двухместной комнате], 1200 € [большая двуспальная кровать], 1500 € [отдельная спальня целиком]. Включено: проживание на горной вилле с бассейном в 30 мин от DLM, 3-разовое домашнее питание от Марины, 5 дней обучения кутюрной вышивке, все материалы, трансфер DLM и выездной день [Акьяка, река Азмак, Дальян, пляж Изтузу].",
    "Dates of the stream: May 1st - May 8th, 2027 [8 days / 7 nights]. Quota: strictly 6 participants [5 places available]. Prices: €1100 [single bed in a double room], €1200 [king size double bed], €1500 [entire private bedroom]. Includes: accommodation in a mountain villa with a pool 30 min from DLM, three meals a day at home from Marina, 5 days of couture embroidery training, all materials, DLM transfer and a field trip [Akyaka, Azmak River, Dalyan, Iztuzu Beach].",
    "Programın tarihleri: 1 Mayıs - 8 Mayıs 2027 [8 gün / 7 gece]. Kontenjan: Kesinlikle 6 katılımcı [5 yer mevcut]. Fiyatlar: 1100 € [çift kişilik odada tek kişilik yatak], 1200 € [king size çift kişilik yatak], 1500 € [tamamen özel yatak odası]. Dahil olanlar: DLM'ye 30 dakika mesafede havuzlu bir dağ villasında konaklama, Marina'nın evinde günde üç öğün yemek, 5 günlük haute couture nakış eğitimi, tüm malzemeler, DLM transferi ve bir saha gezisi [Akyaka, Azmak Nehri, Dalyan, İztuzu Plajı].",
    "Да"
  ],
  [
    "VL-RETREAT-2027-02",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 2 [19-26 июня 2027 г., 8 дней / 7 ночей]",
    "Летний поток на горной вилле в Мугле [квота 6 мест, свободно 5 из 6]. Вышивка в фруктовом саду, бассейн, гастрономия и выезд к морю.",
    "🍋 Couture Art Vacation in Turkey - Stream 2 [June 19-26, 2027, 8 days / 7 nights]",
    "Summer retreat at a mountain villa in Mugla [6 beds available, 5 of 6 available]. Embroidery in the orchard, swimming pool, gastronomy, and a trip to the sea.",
    "🍋 Türkiye'de Haute Couture Sanat Tatili - 2. Dönem [19-26 Haziran 2027, 8 gün / 7 gece]",
    "Muğla'da bir dağ villasında yaz tatili [6 yatak mevcut, 5'i müsait]. Meyve bahçesinde nakış, yüzme havuzu, gastronomi ve deniz gezisi.",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk, https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 19 июня - 26 июня 2027 г. [8 дней / 7 ночей]. Квота: 6 участниц [свободно 5 мест]. Тарифы: 1100 € / 1200 € / 1500 €. В стоимость включено проживание на горной вилле, 3-разовое питание от шефа Марины, 5 дней мастер-классов с Василисой Боровиковой и Юлией Озмен, комплект материалов, трансфер из аэропорта DLM и экскурсионный маршрут по Акьяке, реке Азмак, Дальяну и пляжу Изтузу.",
    "Dates of the stream: June 19 - June 26, 2027 [8 days / 7 nights]. Quota: 6 participants [5 places available]. Prices: €1100 / €1200 / €1500. The price includes accommodation in a mountain villa, three meals a day from chef Marina, 5 days of master classes with Vasilisa Borovikova and Yulia Ozmen, a set of materials, transfer from DLM Airport and an excursion route to Akyaka, the Azmak River, Dalyan and Iztuzu Beach.",
    "Programın tarihleri: 19 Haziran - 26 Haziran 2027 [8 gün / 7 gece]. Kontenjan: 6 katılımcı [5 yer mevcut]. Fiyatlar: 1100 € / 1200 € / 1500 €. Fiyata dağ villasında konaklama, şef Marina'dan günde üç öğün yemek, Vasilisa Borovikova ve Yulia Özmen ile 5 günlük masterclass eğitimi, malzeme seti, DLM Havalimanı'ndan transfer ve Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı'na gezi programı dahildir.",
    "Да"
  ],
  [
    "VL-RETREAT-2027-03",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 3 [18-25 сентября 2027 г., 8 дней / 7 ночей]",
    "Бархатный сезон на горной вилле в Турции [квота 6 мест, свободно 6 из 6]. Идеальная теплая погода, вышивка от кутюр и море.",
    "🍋 Couture Art Vacation in Turkey - Stream 3 [September 18-25, 2027, 8 days / 7 nights]",
    "Velvet season at a mountain villa in Turkey [6 beds available, 6 of 6 available]. Perfect warm weather, haute couture embroidery, and the sea.",
    "🍋 Türkiye'de Haute Couture Sanat Tatili - 3. Bölüm [18-25 Eylül 2027, 8 gün / 7 gece]",
    "Türkiye'de bir dağ villasında kadife mevsimi [6 yatak mevcut, 6'sı da müsait]. Mükemmel sıcak hava, haute couture işlemeler ve deniz.",
    "https://drive.google.com/file/d/1XKcehafKTdRAYvWNBECcqcMQZMxSMFSy/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 18 сентября - 25 сентября 2027 г. [8 дней / 7 ночей]. Квота: 6 участниц [свободно 6 мест]. Тарифы: 1100 € [односпальная кровать], 1200 € [двуспальная кровать], 1500 € [отдельная спальня]. Полный пакет с проживанием, 3-разовым питанием от Марины, обучением у Василисы и Юлии, материалами, экскурсией и трансфером из аэропорта Даламан [DLM].",
    "Dates of the course: September 18th - September 25th, 2027 [8 days / 7 nights]. Quota: 6 participants [6 places available]. Rates: €1100 [single bed], €1200 [double bed], €1500 [private bedroom]. Full package including accommodation, three meals a day from Marina, training from Vasilisa and Julia, materials, a tour, and transfer from Dalaman Airport [DLM].",
    "Kurs tarihleri: 18 Eylül - 25 Eylül 2027 [8 gün / 7 gece]. Kontenjan: 6 katılımcı [6 yer mevcut]. Fiyatlar: 1100 € [tek kişilik yatak], 1200 € [çift kişilik yatak], 1500 € [özel yatak odası]. Konaklama, Marina'dan günde üç öğün yemek, Vasilisa ve Julia'dan eğitim, materyaller, tur ve Dalaman Havalimanı'ndan (DLM) transfer dahil tam paket.",
    "Да"
  ],
  [
    "VL-RETREAT-2027-04",
    "🍋 Кутюрный арт-отпуск в Турции - Поток 4 [23-30 октября 2027 г., 8 дней / 7 ночей]",
    "Золотая осень в горах Муглы [квота 6 мест, свободно 6 из 6]. Уютные творческие вечера, создание кутюрного аксессуара и путешествия.",
    "🍋 Couture Art Vacation in Turkey - Stream 4 [October 23-30, 2027, 8 days / 7 nights]",
    "Golden autumn in the Mugla mountains [6 spots available, 6 of 6 available]. Cozy creative evenings, creating a couture accessory, and traveling.",
    "🍋 Türkiye'de Haute Couture Sanat Tatili - 4. Bölüm [23-30 Ekim 2027, 8 gün / 7 gece]",
    "Muğla dağlarında altın sonbahar [6 yer kaldı, 6'da 6]. Rahat ve yaratıcı akşamlar, haute couture aksesuar tasarımı ve seyahat.",
    "https://drive.google.com/file/d/1E1TN9BfNKuxYwarDORSfOEUKt8DhNqPC/view?usp=drivesdk",
    "Арт-отпуск 2027",
    "https://t.me/limonnavillevturkey",
    "1188",
    "1100",
    "110000",
    "42350",
    "",
    "Даты потока: 23 октября - 30 октября 2027 г. [8 дней / 7 ночей]. Квота: 6 участниц [свободно 6 мест]. Тарифы: 1100 € / 1200 € / 1500 €. Включено проживание на вилле, 3-разовое питание от шефа Марины, 5 дней вышивки с Василисой и Юлией, все материалы, выезд в Акьяку / реку Азмак / Дальян / Изтузу и трансфер из аэропорта DLM.",
    "Dates of the stream: October 23 - October 30, 2027 [8 days / 7 nights]. Quota: 6 participants [6 places available]. Prices: €1100 / €1200 / €1500. Includes accommodation in a villa, three meals a day from chef Marina, 5 days of embroidery with Vasilisa and Yulia, all materials, travel to Akyaka / Azmak River / Dalyan / Iztuzu and transfer from DLM airport.",
    "Yayın tarihleri: 23 Ekim - 30 Ekim 2027 [8 gün / 7 gece]. Kontenjan: 6 katılımcı [6 yer mevcut]. Fiyatlar: 1100 € / 1200 € / 1500 €. Villa konaklaması, şef Marina'dan günde üç öğün yemek, Vasilisa ve Yulia ile 5 günlük nakış eğitimi, tüm malzemeler, Akyaka / Azmak Nehri / Dalyan / İztuzu'ya ulaşım ve DLM havaalanından transfer dahildir.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-BROOCH-LAVENDER",
    "💎 Бутик [В наличии]: Кутюрная брошь «Лаванда Haute Couture» на шелковой органзе",
    "Авторская брошь ручной работы [французские пайетки, японский бисер, натуральная органза, японская булавка]. Отправка за 2-3 дня.",
    "💎 Boutique [In stock]: Couture brooch \"Lavender Haute Couture\" on silk organza",
    "Handcrafted designer brooch [French sequins, Japanese beads, natural organza, Japanese pin]. Ships in 2-3 days.",
    "💎 Butik [Stokta]: İpek organza üzerine \"Lavanta Haute Couture\" desenli özel tasarım broş",
    "El yapımı tasarımcı broş [Fransız payetleri, Japon boncukları, doğal organza, Japon iğnesi]. 2-3 gün içinde kargoya verilir.",
    "https://drive.google.com/file/d/1G_we_OC-E9US1hHo7Bta9S7FwEj4tDJB/view?usp=drivesdk, https://drive.google.com/file/d/1S0yJdwclWxkMYdmYvWKhAWcT_0-Sci7B/view?usp=drivesdk",
    "Бутик : В наличии",
    "https://t.me/vasilisa_luneville",
    "92",
    "85",
    "8500",
    "3275",
    "",
    "Готовое авторское украшение из коллекции Василисы Боровиковой. Выполнено в технике многослойной кутюрной вышивки на невесомой шелковой органзе с идеальной кожаной изнанкой. Поставляется в фирменной подарочной шкатулке с международным трек-номером.",
    "A finished, designer piece from Vasilisa Borovikova's collection. Crafted using multilayered couture embroidery on weightless silk organza with a perfect leather backing. Comes in a branded gift box with an international tracking number.",
    "Vasilisa Borovikova'nın koleksiyonundan, tasarımcı imzalı, kusursuz bir parça. Hafif ipek organza üzerine çok katmanlı haute couture nakış ve mükemmel bir deri astar kullanılarak üretilmiştir. Uluslararası takip numarası içeren markalı hediye kutusunda teslim edilir.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-COLLAR-COUTURE",
    "💎 Бутик [В наличии]: Расшитый воротничок «Жемчужная Мимоза»",
    "Съемный кутюрный воротничок ручной работы с объемной мимозой из шелковой синели, жемчуга и пайеток.",
    "💎 Boutique [In Stock]: Embroidered Collar \"Pearl Mimosa\"",
    "A detachable couture collar, handcrafted with a voluminous mimosa made of silk chenille, pearls and sequins.",
    "💎 Butik [Stokta]: İşlemeli Yaka \"İnci Mimoza\"",
    "İpek şönil, inciler ve payetlerden yapılmış hacimli mimoza çiçeğiyle el işçiliğiyle üretilmiş, çıkarılabilir haute couture yaka.",
    "https://drive.google.com/file/d/1bWxLT75PzOIIieYhdIEg_mzNUgi2GXCn/view?usp=drivesdk, https://drive.google.com/file/d/12-FLWCdMoF3UILswstzbhTgVYVjaNHzw/view?usp=drivesdk",
    "Бутик : В наличии",
    "https://t.me/vasilisa_luneville",
    "173",
    "160",
    "16000",
    "6160",
    "",
    "Изысканный аксессуар, мгновенно преображающий базовое платье, жакет или кашемировый свитер. Ручная работа люневильским крючком и иглой. Отправка в течение 2-3 рабочих дней по всему миру.",
    "An exquisite accessory that instantly transforms a basic dress, jacket, or cashmere sweater. Handcrafted with Lunéville crochet and needle. Ships within 2-3 business days worldwide.",
    "Sıradan bir elbiseyi, ceketi veya kaşmir kazağı anında bambaşka bir görünüme kavuşturan enfes bir aksesuar. Lunéville tığ ve iğnesiyle el yapımıdır. Dünya çapında 2-3 iş günü içinde kargoya verilir.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-BAG-LUNEVILLE",
    "💎 Бутик [В наличии]: Вечерняя кутюрная сумочка с фермуаром «Ночной Мармарис»",
    "Коллекционная бархатная сумочка на бронзовом фермуаре с двусторонней люневильской вышивкой кристаллами и синелью.",
    "💎 Boutique [In stock]: Evening couture bag with clasp \"Night Marmaris\"",
    "A collectible velvet handbag with a bronze clasp and double-sided Luneville embroidery with crystals and chenille.",
    "💎 Butik [Stokta]: Tokalı gece çantası \"Night Marmaris\"",
    "Bronz tokalı ve çift taraflı Luneville işlemeli, kristal ve şönil detaylı, koleksiyonluk kadife el çantası.",
    "https://drive.google.com/file/d/11Kz0MaS4ELje5RfL4Dg8ByJIIVuWq-8u/view?usp=drivesdk, https://drive.google.com/file/d/1_NH0tB1tMw2S2SxeTsCDHIoea2plYFca/view?usp=drivesdk",
    "Бутик : В наличии",
    "https://t.me/vasilisa_luneville",
    "346",
    "320",
    "32000",
    "12320",
    "",
    "Эксклюзивная вечерняя сумочка ручной работы на винтажном фермуаре с цепочкой, подкладкой из натурального шелка и авторской вышивкой люневильским крючком. В единственном экземпляре.",
    "An exclusive, handcrafted evening bag with a vintage clasp and chain, lined with natural silk, and featuring signature Lunéville crochet embroidery. A one-of-a-kind piece.",
    "Özel tasarım, el yapımı, vintage tokalı ve zincirli, doğal ipek astarlı ve Lunéville imzalı tığ işi nakış işlemeli bir gece çantası. Eşsiz bir parça.",
    "Да"
  ],
  [
    "VL-BOUTIQUE-BESPOKE",
    "✨ Ателье «Под заказ» [Bespoke Atelier]: Индивидуальная вышивка и создание аксессуара по вашему эскизу",
    "Разработка персонального дизайна вышивки для платья, жакета, фаты, сумочки или украшения [срок 14-30 рабочих дней].",
    "✨ Bespoke Atelier: Custom embroidery and accessory creation based on your design",
    "Development of a personal embroidery design for a dress, jacket, veil, handbag or jewelry [term 14-30 working days].",
    "✨ Kişiye Özel Atölye: Tasarımınıza göre özel nakış ve aksesuar üretimi",
    "Elbise, ceket, duvak, el çantası veya takı için kişiye özel nakış tasarımı geliştirme [14-30 iş günü].",
    "https://drive.google.com/file/d/1TSsu0QFQP4LaCdWaTfqoP9DdhAasRffT/view?usp=drivesdk",
    "Бутик : Под заказ",
    "https://t.me/vasilisa_luneville",
    "270",
    "250",
    "25000",
    "9625",
    "",
    "Опишите вашу идею в чате с ИИ-брифователем или Василисой: мы подготовим эски��, согласуем палитру французских пайеток, бисера, шелковой синели и ткани, выполним вышивку вручную на кутюрной раме с регулярными видеоотчетами и бережно доставим готовое изделие в любую точку мира.",
    "Describe your idea in a chat with the AI ​​briefer or Vasilisa: we'll prepare a sketch, coordinate a palette of French sequins, beads, silk chenille, and fabric, hand-embroider it on a couture frame with regular video updates, and carefully deliver the finished piece anywhere in the world.",
    "Fikrinizi yapay zeka danışmanı veya Vasilisa ile yapacağınız bir sohbette anlatın: Biz bir eskiz hazırlayacağız, Fransız payetleri, boncuklar, ipek şönil ve kumaşlardan oluşan bir palet koordine edeceğiz, düzenli video güncellemeleri eşliğinde haute couture bir çerçeve üzerinde el işlemeciliği yapacağız ve bitmiş parçayı dünyanın herhangi bir yerine özenle teslim edeceğiz.",
    "Да"
  ]
];

const MASTER_LEGAL_ROWS = [
  [
    "LEG-001",
    "Публичная оферта на онлайн мастер-классы и наставничество",
    "Public offer for online master classes and mentoring",
    "Çevrimiçi yüksek lisans dersleri ve mentorluk için halka açık teklif",
    "Договор публичной оферты регулирует приобретение онлайн мастер-классов [Лаванда, Мимоза, Фейерверк, Оформление в рамку, Зимняя сказка] и индивидуального онлайн-наставничества «Основы люневильской вышивки» [16 уроков, 200 €] в школе кутюрной вышивки Vasilisa.luneville. Доступ к видеоматериалам в закрытых Telegram-каналах предоставляется бессрочно. Персональная проверка 20-30-секундных видео домашних заданий действует в течение 6 месяцев [180 дней] с даты старта.",
    "The public offer agreement governs the purchase of online master classes (Lavender, Mimosa, Fireworks, Framing, Winter's Tale) and individual online mentoring \"Basics of Lunéville Embroidery\" (16 lessons, €200) at the Vasilisa.luneville couture embroidery school. Access to videos in closed Telegram channels is provided indefinitely. Personal review of 20-30-second homework videos is valid for 6 months (180 days) from the start date.",
    "Bu halka açık teklif sözleşmesi, Vasilisa.luneville haute couture nakış okulunda çevrimiçi ustalık sınıflarının (Lavanta, Mimoza, Havai Fişek, Çerçeveleme, Kış Masalı) ve bireysel çevrimiçi mentorluk \"Lunéville Nakışının Temelleri\"nin (16 ders, 200 €) satın alınmasını düzenlemektedir. Kapalı Telegram kanallarındaki videolara erişim süresiz olarak sağlanmaktadır. 20-30 saniyelik ödev videolarının kişisel değerlendirmesi, başlangıç ​​tarihinden itibaren 6 ay (180 gün) süreyle geçerlidir."
  ],
  [
    "LEG-002",
    "Договор участия в кутюрном арт-отпуске в Турции и студии в Мармарисе",
    "Agreement for participation in a couture art vacation in Turkey and a studio in Marmaris",
    "Türkiye'de bir haute couture sanat tatiline ve Marmaris'te bir stüdyoya katılım anlaşması",
    "Регулирует бронирование мест на 8-дневные кутюрные арт-отпуска на горной вилле в провинции Мугла [4 потока 2027 г., квота строго 6 мест, тарифы 1100 / 1200 / 1500 €] и 5-дневные индивидуальные интенсивы в студии Мармариса [пн-пт 09:00-17:00, 500 €]. В стоимость ретрита включено: проживание 7 ночей на вилле, 3-разовое питание от шефа Марины, трансфер из аэропорта Даламан [DLM], 5 дней обучения с Василисой Боровиковой и Юлией Озмен, материалы и выездная экскурсия [Акьяка, река Азмак, Дальян, пляж Изтузу]. Неоплаченная бронь удерживается 24 часа [HOLD].",
    "Regulates reservations for 8-day couture art retreats at a mountain villa in Muğla Province [4 streams in 2027, strictly 6 places per retreat, rates 1100 / 1200 / 1500 €] and 5-day individual intensive courses at a Marmaris studio [Mon-Fri 09:00-17:00, 500 €]. The retreat price includes: 7 nights' accommodation at the villa, three meals a day from Chef Marina, transfer from Dalaman Airport [DLM], 5 days of training with Vasilisa Borovikova and Yulia Ozmen, materials, and an off-site excursion [Akyaka, Azmak River, Dalyan, Iztuzu Beach]. Unpaid reservations will be held for 24 hours [HOLD].",
    "Muğla ilindeki bir dağ villasında 8 günlük haute couture sanat inzivası (2027'de 4 dönem, inziva başına kesinlikle 6 yer, fiyatlar 1100 / 1200 / 1500 €) ve Marmaris'teki bir stüdyoda 5 günlük bireysel yoğun kurslar (Pazartesi-Cuma 09:00-17:00, 500 €) için rezervasyonları düzenler. İnziva fiyatına şunlar dahildir: Villada 7 gece konaklama, Şef Marina'dan günde üç öğün yemek, Dalaman Havalimanı'ndan transfer, Vasilisa Borovikova ve Yulia Özmen ile 5 günlük eğitim, malzemeler ve bir saha gezisi (Akyaka, Azmak Nehri, Dalyan, İztuzu Plajı). Ödenmemiş rezervasyonlar 24 saat bekletilecektir."
  ],
  [
    "LEG-003",
    "Правила заказа и доставки изделий Бутика и Ат��лье «Под заказ»",
    "Rules for ordering and delivering products from the Boutique and Atelier \"Made to Order\"",
    "\"Sipariş Üzerine Üretilen\" Butik ve Atölyeden ürün siparişi ve teslimatı için kurallar",
    "Готовые изделия бутика [кутюрные броши, расшитые воротнички, сумочки] отправляются в течение 2-3 рабочих дней после оплаты с предоставлением международного трек-номера. Индивидуальные заказы «Под заказ» [Bespoke Atelier] выполняются по согласованному с заказчицей брифу и эскизу в срок от 14 до 30 рабочих дней с промежуточными фото- и видеоотчетами.",
    "Finished boutique items (couture brooches, embroidered collars, handbags) are shipped within 2-3 business days after payment, with an international tracking number provided. Custom orders (Bespoke Atelier) are completed according to the client's agreed-upon brief and sketch within 14 to 30 business days, with interim photo and video reports.",
    "Hazır butik ürünler (haute couture broşlar, işlemeli yakalar, el çantaları) ödeme yapıldıktan sonra 2-3 iş günü içinde uluslararası takip numarasıyla birlikte gönderilir. Özel siparişler (Özel Tasarım Atölyesi), müşterinin üzerinde anlaştığı brief ve çizime göre 14 ila 30 iş günü içinde tamamlanır ve ara fotoğraf ve video raporları sunulur."
  ],
  [
    "LEG-004",
    "Политика конфиденциальности и защиты персональных данных KVKK / GDPR",
    "KVKK Privacy and Personal Data Protection Policy / GDPR",
    "KVKK Gizlilik ve Kişisel Veri Koruma Politikası / GDPR",
    "Обработка персональных данных учениц и покупательниц [имя, телефон, email, аккаунт Telegram, ссылки на учебные видео ДЗ] осуществляется строго в соответствии с Законом Турецкой Республики № 6698 «О защите персональных данных» [KVKK] и регламентом ЕС GDPR исключительно для предоставления доступа к урокам, обратной связи, организации трансфера DLM и доставки заказов бутика.",
    "The processing of personal data of students and customers [name, phone number, email, Telegram account, links to educational videos of homework] is carried out strictly in accordance with the Law of the Republic of Turkey No. 6698 \"On the Protection of Personal Data\" [KVKK] and the EU GDPR regulation solely for the purpose of providing access to lessons, feedback, organizing DLM transfers and delivering boutique orders.",
    "Öğrencilerin ve müşterilerin kişisel verilerinin [ad, telefon numarası, e-posta, Telegram hesabı, ödevlere ait eğitim videolarına bağlantılar] işlenmesi, yalnızca derslere erişim sağlama, geri bildirim verme, DLM transferlerini organize etme ve butik siparişlerini teslim etme amacıyla, Türkiye Cumhuriyeti 6698 sayılı \"Kişisel Verilerin Korunması Hakkında\" Kanunu [KVKK] ve AB GDPR yönetmeliğine kesinlikle uygun olarak gerçekleştirilir."
  ],
  [
    "LEG-005",
    "Налоговые и банковские реквизиты Vasilisa.luneville [TR / RU]",
    "Tax and bank details for Vasilisa.luneville [TR / RU]",
    "Vasilisa.luneville'in vergi ve banka bilgileri [TR / RU]",
    "Владелец платформы и бренда: Vasilisa Borovikova [Василиса Боровикова / Боровикова]. Локация студии: Marmaris, Muğla, Türkiye. Налоговая инспекция Турции: Marmaris Vergi Dairesi, фискализация электронных счетов-фактур e-Arşiv Fatura GİB VUK 213 в TRY по курсу TCMB Döviz Alış. ��рием платежей в РФ и по миру: СБП / Т-Банк / ЮKassa [+7 921 304-78-92], Stripe / Iyzico / PayPal [+90 545 598 32 11, vasilisa.luneville@gmail.com].",
    "Platform and brand owner: Vasilisa Borovikova [Vasilisa Borovikova / Borovikova]. Studio location: Marmaris, Muğla, Türkiye. Turkish tax office: Marmaris Vergi Dairesi, fiscalization of electronic invoices e-Arşiv Fatura GİB VUK 213 in TRY at the TCMB Döviz Alış exchange rate. Payment acceptance in the Russian Federation and worldwide: SBP / T-Bank / ЮKassa [+7 921 304-78-92], Stripe / Iyzico / PayPal [+90 545 598 32 11, vasilisa.luneville@gmail.com].",
    "Platform ve marka sahibi: Vasilisa Borovikova [Vasilisa Borovikova / Borovikova]. Stüdyonun yeri: Marmaris, Muğla, Türkiye. Türkiye vergi dairesi: Marmaris Vergi Dairesi, elektronik faturaların malileştirilmesi e-Arşiv Fatura GİB VUK 213, TCMB Döviz Alış kuru üzerinden TRY cinsinden. Rusya Federasyonu'nda ve dünya çapında ödeme kabulü: SBP / T-Bank / ЮKassa [+7 921 304-78-92], Stripe / Iyzico / PayPal [+90 545 598 32 11, vasilisa.luneville@gmail.com]."
  ]
];

const MASTER_BOOKINGS_ROWS = [
  [
    "18.05.2026, 14:30",
    "Елена Морозова",
    "+79219876543 | elena.morozova@yahoo.com",
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
    "+33612345678 | maria.dubois@paris.fr",
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
    "+79035554433 | svetlana.kuznetsova@mail.ru",
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
    "16.11.2026, 9:00:00"
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
    "15.01.2026, 9:00:00",
    "Василиса Боровикова [Vasilisa Borovikova]",
    "+905455983211",
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
    "+79161234567",
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
    "+79219876543",
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
    "+33612345678",
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
    "+79035554433",
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
    "Join the private Telegram channel for the Lavender Branch workshop via the invite link. Lifetime access to all macro videos and patterns."
  ],
  [
    "ACC-002",
    "Telegram-канал",
    "🌼 МК «Мимоза» - 4 варианта вышивки одной веточки",
    "https://t.me/+vl_mimosa_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Вступите в закрытый Telegram-канал с 4 подробными видеоуроками различных техник вышивки веточки мимозы.",
    "Join the private Telegram channel featuring 4 video lessons on different mimosa embroidery techniques."
  ],
  [
    "ACC-003",
    "Telegram-канал",
    "🎇 МК «Фейерверк» [пайетки, бисер, стеклярус]",
    "https://t.me/+vl_firework_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Доступ к закрытому каналу мастер-класса «Фейерверк» с макросъемкой динамичной вышивки пайетками и стеклярусом.",
    "Access the private Fireworks workshop channel with macro lessons on sequin and bugle bead work."
  ],
  [
    "ACC-004",
    "Telegram-канал",
    "🖼 МК «Оформление вышивки в рамку»",
    "https://t.me/+vl_framing_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Уроки профессиональной натяжки тонкой органзы и оформления готовой кутюрной вышивки в багет и раму.",
    "Lessons on professional stretching of sheer organza and framing finished couture embroidery."
  ],
  [
    "ACC-005",
    "Telegram-канал",
    "❄️ МК «Зимняя сказка» [синель, канитель, кристаллы]",
    "https://t.me/+vl_winter_couture",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Доступ к урокам праздничной кутюрной вышивки шелковой синелью, канителью и кристаллами.",
    "Access lessons on festive haute couture embroidery with silk chenille, bullion wire, and crystals."
  ],
  [
    "ACC-006",
    "Личный чат ДЗ",
    "✨ Онлайн-наставничество: Личный чат разбора видео ДЗ [6 мес]",
    "https://t.me/vasilisa_luneville",
    "mailto:vasilisa.luneville@gmail.com",
    "180 дней [6 мес] / ACTIVE",
    "Отправляйте короткие видео вашей вышивки на раме по 20-30 секунд в личный чат с Василисой или через форму кабинета ученицы для детального разбора.",
    "Send short 20-30 second videos of your stitching on the frame to Vasilisa in personal chat or via the student cabinet for detailed review."
  ],
  [
    "ACC-007",
    "Telegram-канал",
    "✨ Онлайн-наставничество: База 16 макро-уроков люневильской вышивки",
    "https://t.me/+vl_mentorship_16lessons",
    "https://t.me/vasilisa_luneville",
    "Бессрочно / ACTIVE",
    "Полное собрание из 16 пошаговых видеоуроков курса «Основы люневильской вышивки» с доступом навсегда.",
    "Complete library of 16 step-by-step macro video lessons for 'Luneville Embroidery Fundamentals' with lifetime access."
  ],
  [
    "ACC-008",
    "Telegram-канал",
    "🍋 Кутюрный арт-отпуск в Турции и трансфер DLM",
    "https://t.me/limonnavillevturkey",
    "https://wa.me/905455983211",
    "Бессрочно / ACTIVE",
    "Официальный канал участниц арт-отпусков на горной вилле в Турции. Координация рейсов в аэропорт Даламан [DLM] по тел. +90 545 598 32 11.",
    "Official channel for Turkey mountain villa art retreat participants. Dalaman Airport [DLM] flight coordination via +90 545 598 32 11."
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
    "Бессрочно"
  ],
  [
    "15.05.2026",
    "Анна Смирнова | '+79161234567 | anna.smirnova@gmail.com",
    "VL-MENTOR-ONLINE",
    "✨ Индивидуальное наставничество «Основы люневильской вышивки» [16 уроков]",
    "Онлайн-наставничество",
    "PAID",
    "VL-TOK-MNT-0001",
    "15.11.2026 [6 мес ДЗ | Урок 6/16]"
  ],
  [
    "18.05.2026",
    "Елена Морозова | '+79219876543 | elena.morozova@yahoo.com",
    "VL-MK-MIMOSA",
    "🌼 МК «Мимоза» - 4 варианта вышивки одной веточки",
    "Мастер-класс",
    "PAID",
    "VL-TOK-MIM-0002",
    "Бессрочно"
  ],
  [
    "21.05.2026",
    "Maria Dubois | '+33612345678 | maria.dubois@paris.fr",
    "VL-MENTOR-OFFLINE",
    "✨ Офлайн-наставничество в студии в Мармарисе [5 дней]",
    "Офлайн-наставничество",
    "PAID",
    "VL-TOK-STD-0003",
    "13.06.2026 [Студия Мармарис]"
  ]
];

const MASTER_TASKS_ROWS = [
  [
    "TSK-001",
    "16.11.2026, 9:00",
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
    "Авторы ретрита: Василиса Боровикова и Юлия Озмен; хозяйка виллы и шеф-повар: Марина [3-разовое домашнее питание]. Выездной экскурсионный день: Акьяка, река Азмак, Дальян �� черепаший пляж Изтузу.",
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

const MASTER_RAW_SHEETS = {
  HOME: MASTER_HOME_ROWS,
  SETTINGS: MASTER_SETTINGS_ROWS,
  LEGAL: MASTER_LEGAL_ROWS,
  TEMPLATES: MASTER_TEMPLATES_ROWS,
  SERVICES: MASTER_SERVICES_ROWS,
  GUIDES: MASTER_GUIDES_ROWS,
  GALLERY: MASTER_GALLERY_ROWS,
  CALENDAR: MASTER_CALENDAR_ROWS,
  BOOKINGS: MASTER_BOOKINGS_ROWS,
  ACCOUNTS: MASTER_ACCOUNTS_ROWS,
  ORDERS: MASTER_ORDERS_ROWS,
  ACCESS: MASTER_ACCESS_ROWS,
  TASKS: MASTER_TASKS_ROWS,
  KNOWLEDGE_GRAPH: MASTER_KNOWLEDGE_GRAPH_ROWS,
  GUIDE_ACCESS: MASTER_GUIDE_ACCESS_ROWS
};

module.exports = {
  MASTER_ABOUT_SECTIONS,
  MASTER_HOME_MAP,
  MASTER_HOME_ROWS,
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
  MASTER_RAW_SHEETS,
  buildHomeDerivedCollections
};
