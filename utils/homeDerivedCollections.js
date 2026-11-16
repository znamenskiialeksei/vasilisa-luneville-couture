// [ПРЕДЫДУЩАЯ РЕДАКЦИЯ: 27.09.2026 18:50 | ПЛАН: 270920261820 Комплексный план 7 задач.md | TAG: VILLA-DYNAMIC-SAFETY-SECTIONS-270920261850]
// [АКТУАЛЬНАЯ РЕДАКЦИЯ: 16.11.2026 22:15 | ПЛАН: 161120262215 ПЛАН Создание платформы Vasilisa с нуля.md | TAG: VASILISA-HOME-DERIVED-COLLECTIONS-161120262215]
// Уровень А: "создавай новый проект в папке Раб сайт полностью сам"
// Уровень Б: Полная адаптация модуля производных коллекций витрины под 5 направлений платформы Vasilisa.luneville - вышивка от кутюр [Zero Legacy].
// ==============================================================================
// МОДУЛЬ ПОСТРОЕНИЯ ПРОИЗВОДНЫХ КОЛЛЕКЦИЙ ВИТРИНЫ VASILISA.LUNEVILLE
// Файл: utils/homeDerivedCollections.js
// Назначение: Автоматическая генерация структурированных коллекций для рендеринга
// витрины: тарифы размещения ретрита и студии, материалы и условия, отзывы учениц,
// 14 локаций Мармариса и ретрита, пространство виллы/студии и юридические гарантии.
// 100% Zero-Brackets & Zero-Emdash Стандарт.
// ==============================================================================

function buildHomeDerivedCollections(home, forceRebuild = false) {
  if (!home) return;

  // 1. Варианты размещения на арт-отпуске и студия в Мармарисе
  if (forceRebuild || !home.bedrooms || home.bedrooms.length === 0) {
    const bedroomsList = [];
    [1, 2, 3, 4].forEach((i) => {
      const item = home[`bedroom_${i}`];
      if (item && item.enabled !== false) {
        const descItem = home[`bedroom_${i}_desc`];
        const badgeItem = home[`bedroom_${i}_badge`];
        bedroomsList.push({
          id: i,
          title: { ru: item.ru, en: item.en, tr: item.tr },
          desc: {
            ru: descItem?.ru || item.ru,
            en: descItem?.en || item.en,
            tr: descItem?.tr || item.tr
          },
          badge: {
            ru: badgeItem?.ru || `Тариф ${i}`,
            en: badgeItem?.en || `Package ${i}`,
            tr: badgeItem?.tr || `Paket ${i}`
          },
          image: item.media || '',
          iconName: descItem?.media || 'Sparkles'
        });
      }
    });
    home.bedrooms = bedroomsList;
  }

  // 2. Основные материалы и включенные условия [Main Amenities]
  if (forceRebuild || !home.mainAmenities || home.mainAmenities.length === 0) {
    const mainAmenitiesList = [];
    for (let i = 1; i <= 20; i++) {
      const item = home[`amenity_main_${i}`];
      if (item && item.enabled !== false) {
        mainAmenitiesList.push({
          key: `amenity_main_${i}`,
          label: { ru: item.ru, en: item.en, tr: item.tr },
          icon: item.media || 'Check'
        });
      }
    }
    home.mainAmenities = mainAmenitiesList;
  }

  // 3. Категории материалов и условий для модального окна [Grouped Amenities]
  if (forceRebuild || !home.amenitiesGrouped || home.amenitiesGrouped.length === 0) {
    const groupedAmenitiesList = [];
    for (let c = 1; c <= 10; c++) {
      const catTitleItem = home[`amenity_cat${c}_title`];
      if (catTitleItem && catTitleItem.enabled !== false) {
        const items = [];
        for (let it = 1; it <= 20; it++) {
          const item = home[`amenity_cat${c}_item${it}`];
          if (item && item.enabled !== false) {
            items.push({
              ru: item.ru,
              en: item.en,
              tr: item.tr
            });
          }
        }
        groupedAmenitiesList.push({
          category: {
            ru: catTitleItem.ru,
            en: catTitleItem.en,
            tr: catTitleItem.tr
          },
          icon: catTitleItem.media || 'Check',
          items
        });
      }
    }
    home.amenitiesGrouped = groupedAmenitiesList;
  }

  // 4. Отзывы учениц и критерии оценок школы [Reviews]
  if (forceRebuild || !home.reviewsData || !home.reviewsData.reviews || home.reviewsData.reviews.length === 0) {
    const reviewCatsList = [];
    for (let c = 1; c <= 10; c++) {
      const item = home[`review_cat_${c}`];
      if (item && item.enabled !== false) {
        const parts = (item.media || '5.0|100').split('|');
        const score = parts[0] || '5.0';
        const percent = parseInt(parts[1], 10) || 100;
        reviewCatsList.push({
          label: { ru: item.ru, en: item.en, tr: item.tr },
          score,
          percent
        });
      }
    }
    const reviewCardsList = [];
    for (let r = 1; r <= 10; r++) {
      const authItem = home[`review_${r}_author`];
      const textItem = home[`review_${r}_text`];
      if (authItem && authItem.enabled !== false) {
        reviewCardsList.push({
          author: { ru: authItem.ru, en: authItem.en, tr: authItem.tr },
          avatar: authItem.media || '',
          comment: { ru: textItem?.ru || '', en: textItem?.en || '', tr: textItem?.tr || '' }
        });
      }
    }
    home.reviewsData = {
      header: home.reviews_score_header || null,
      categories: reviewCatsList,
      reviews: reviewCardsList
    };
  }

  // 5. Разделы описания 5 направлений школы и бутика [About Sections]
  if (forceRebuild || !home.aboutSections || home.aboutSections.length === 0) {
    const aboutSectionIndices = new Set();
    Object.keys(home).forEach((k) => {
      const match = k.match(/^about_sec_(\d+)_(title|text)$/);
      if (match) {
        aboutSectionIndices.add(parseInt(match[1], 10));
      }
    });
    const sortedSecs = Array.from(aboutSectionIndices).sort((a, b) => a - b);
    const aboutSectionsList = [];
    sortedSecs.forEach((s) => {
      const titleItem = home[`about_sec_${s}_title`];
      const textItem = home[`about_sec_${s}_text`];
      if (titleItem && titleItem.enabled !== false) {
        aboutSectionsList.push({
          id: String(s),
          title: { ru: titleItem.ru, en: titleItem.en, tr: titleItem.tr },
          text: { ru: textItem?.ru || '', en: textItem?.en || '', tr: textItem?.tr || '' }
        });
      }
    });
    home.aboutSections = aboutSectionsList;
  }

  // 6. 14 локаций студии Мармариса и маршрутов арт-отпуска [Landmarks]
  if (forceRebuild || !home.landmarksList || home.landmarksList.length === 0) {
    const landmarksList = [];
    const landmarkCategoryMap = {
      1: 'walk', 2: 'walk', 3: 'walk', 4: 'nature', 5: 'transport',
      6: 'nature', 7: 'food', 8: 'beach', 9: 'nature',
      10: 'walk', 11: 'nature', 12: 'food', 13: 'beach', 14: 'transport'
    };
    const landmarkDefaultTitles = {
      1: { ru: 'Творческая студия Vasilisa.luneville в Мармарисе', en: 'Vasilisa.luneville Couture Studio in Marmaris', tr: 'Marmaris Vasilisa.luneville Nakış Stüdyosu' },
      2: { ru: 'Набережная и яхтенная марина Мармариса', en: 'Marmaris Seafront Promenade & Marina', tr: 'Marmaris Sahil Kordonu ve Marina' },
      3: { ru: 'Старый город и крепость Мармариса', en: 'Historic Old Town & Marmaris Castle', tr: 'Marmaris Kaleiçi ve Kalesi' },
      4: { ru: 'Горная вилла арт-отпусков в провинции Мугла', en: 'Mountain Art Retreat Villa in Muğla', tr: 'Muğla Dağlarında Sanat Tatili Villası' },
      5: { ru: 'Международный аэропорт Даламан [DLM]', en: 'Dalaman International Airport [DLM]', tr: 'Dalaman Uluslararası Havalimanı [DLM]' },
      6: { ru: 'Аутентичный город Акьяка и бухта Гёкова', en: 'Authentic Town of Akyaka & Gökova Bay', tr: 'Otantik Akyaka Beldesi ve Gökova Körfezi' },
      7: { ru: 'Кристальная река Азмак [лодочный тур]', en: 'Crystal-Clear Azmak River [Boat Tour]', tr: 'Berrak Azmak Nehri [Tekne Turu]' },
      8: { ru: 'Заповедный песчаный пляж Изтузу', en: 'Protected Iztuzu Sandy Beach', tr: 'Koruma Altındaki İztuzu Kumsalı' },
      9: { ru: 'Водный маршрут дельты Дальяна', en: 'Dalyan Delta Scenic Boat Route', tr: 'Dalyan Deltası Tekne Rotası' },
      10: { ru: 'Текстильные и ремесленные лавки Муглы', en: 'Artisan & Textile Markets of Muğla', tr: 'Muğla El Sanatları ve Tekstil Pazarları' },
      11: { ru: 'Фруктовый сад и веранда для вышивки на вилле', en: 'Fruit Garden & Embroidery Veranda at Villa', tr: 'Villa Meyve Bahçesi ve Nakış Terası' },
      12: { ru: 'Гастрономическая терраса шефа Марины', en: 'Chef Marina Culinary Terrace', tr: 'Şef Marina Gastronomi Terası' },
      13: { ru: 'Пляжи Ичмелера и бухты Мармариса', en: 'İçmeler Beach & Marmaris Bays', tr: 'İçmeler Plajı ve Marmaris Koyları' },
      14: { ru: 'Международная доставка бутика [PTT / DHL / СДЭК]', en: 'Worldwide Boutique Shipping Hub [PTT / DHL / CDEK]', tr: 'Uluslararası Butik Kargo Merkezi [PTT / DHL]' }
    };

    for (let i = 1; i <= 14; i++) {
      const item = home[`landmark_${i}`];
      if (item && item.enabled !== false) {
        const mediaParts = (item.media || '').split('|');
        const distance = mediaParts[0] || '';
        const time = mediaParts[1] || '';
        const category = mediaParts[2] || landmarkCategoryMap[i] || 'nature';
        const badge = mediaParts[3] || '';
        const icon = mediaParts[4] || 'MapPin';
        const titleObj = landmarkDefaultTitles[i] || { ru: `Локация ${i}`, en: `Location ${i}`, tr: `Nokta ${i}` };

        landmarksList.push({
          id: `landmark_${i}`,
          index: i,
          category,
          icon,
          distance,
          time,
          badge,
          title: titleObj,
          desc: { ru: item.ru, en: item.en, tr: item.tr }
        });
      }
    }
    home.landmarksList = landmarksList;
  }

  // 7. Пространство творчества: Горная вилла ретритов и Студия в Мармарисе [Spa & Villa Data]
  if (forceRebuild || !home.spaData) {
    home.spaData = {
      title: home.spa_title || { ru: 'Пространство творчества и отдыха: Горная вилла ретритов и Студия в Мармарисе', en: 'Creative & Relaxation Space: Mountain Retreat Villa & Marmaris Studio', tr: 'Yaratıcılık ve Dinlenme Alanı: Dağ Villası ve Marmaris Stüdyosu' },
      subtitle: home.spa_subtitle || { ru: 'Глубокое обучение кутюрной вышивке, проживание на горной вилле с бассейном и средиземноморский отдых', en: 'Deep haute couture embroidery training, mountain villa stay with pool, and Aegean relaxation', tr: 'Haute couture nakış eğitimi, havuzlu dağ villası konforu ve Ege tatili' },
      poolTitle: home.spa_pool_title || { ru: 'Приватная горная вилла с бассейном и фруктовым садом', en: 'Private Mountain Villa with Swimming Pool & Fruit Garden', tr: 'Yüzme Havuzlu ve Meyve Bahçeli Özel Dağ Villası' },
      poolDesc: home.spa_pool_desc || { ru: 'Уединенная вилла в горах провинции Мугла [30 минут от аэропорта Даламан DLM] с собственным бассейном, 4 спальнями, светлой верандой для работы за кутюрными рамами и фруктовым садом.', en: 'Secluded villa in the mountains of Muğla Province [30 min from DLM Airport] with private pool, 4 bedrooms, embroidery veranda, and fruit garden.', tr: 'Dalaman Havalimanına [DLM] 30 dk mesafede özel havuzlu, 4 yatak odalı ve nakış verandalı dağ villası.' },
      poolBadge: home.spa_pool_badge || { ru: 'Камерная группа: строго до 6 участниц', en: 'Intimate Group: Strictly 6 Participants', tr: 'Butik Grup: Maksimum 6 Katılımcı' },
      poolSeason: home.spa_pool_season || { ru: 'Сезон арт-отпусков 2027: май, июнь, сентябрь, октябрь', en: '2027 Retreat Season: May, June, September, October', tr: '2027 Sanat Tatili Sezonu: Mayıs, Haziran, Eylül, Ekim' },
      poolLighting: home.spa_pool_lighting || { ru: 'Вышивальные сессии в саду: 5 дней с 09:00 до 17:00', en: 'Garden embroidery sessions: 5 days from 09:00 to 17:00', tr: 'Bahçede nakış seansları: 5 gün 09:00 - 17:00' },
      poolMaintenance: home.spa_pool_maintenance || { ru: 'Все материалы, пайетки, бисер, органза и инструменты включены', en: 'All fabrics, French sequins, beads, and tools included', tr: 'Tüm kumaşlar, Fransız payetleri, boncuklar ve araçlar dahil' },
      jacuzziTitle: home.spa_jacuzzi_title || { ru: 'Очная мастерская Василисы в Мармарисе и онлайн-академия', en: 'Vasilisa Marmaris Studio & Online Academy', tr: 'Vasilisa Marmaris Stüdyosu ve Online Akademisi' },
      jacuzziDesc: home.spa_jacuzzi_desc || { ru: 'Профессионально оборудованная студия для 5-дневного индивидуального наставничества [500 €] и съемки макро-уроков с бессрочным доступом и 6-месячной проверкой 20-30 сек видео ДЗ.', en: 'Professionally equipped studio for 5-day 1-on-1 intensives [500 €] and macro video lessons with lifetime access and 6-month homework review.', tr: '5 günlük birebir eğitimler [500 €] ve 6 ay video ödev kontrolü sunan profesyonel Marmaris nakış atölyesi.' },
      jacuzziBadge: home.spa_jacuzzi_badge || { ru: 'Индивидуально 1-на-1 с мастером', en: '1-on-1 Personal Tutoring', tr: 'Usta ile Birebir Eğitim' },
      jacuzziSchedule: home.spa_jacuzzi_schedule || { ru: 'График студии в Мармарисе: пн - пт с 09:00 до 17:00', en: 'Marmaris Studio schedule: Mon - Fri, 09:00 - 17:00', tr: 'Marmaris Stüdyo saatleri: Pzt - Cum, 09:00 - 17:00' },
      jacuzziLighting: home.spa_jacuzzi_lighting || { ru: 'Онлайн-сопровождение: 180 дней проверки 20-30 сек видео ДЗ', en: 'Online mentorship: 180 days of 20-30 sec video homework review', tr: 'Online mentorluk: 180 gün boyunca 20-30 sn video ödev kontrolü' },
      jacuzziSeason: home.spa_jacuzzi_season || { ru: 'Доступ к купленным МК и 16 видеоурокам: навсегда', en: 'Access to purchased workshops and 16 lessons: lifetime', tr: 'Satın alınan atölye ve 16 derse erişim: ömür boyu' },
      streetLightingTitle: home.spa_street_lighting_title || { ru: 'Выездные путешествия и вдохновение', en: 'Guided Excursions & Inspiration', tr: 'Gezi Rotaları ve İlham' },
      streetLightingDesc: home.spa_street_lighting_desc || { ru: 'Поездка в Акьяку, прогулка по реке Азмак, Дальян и пляж Изтузу включены в арт-отпуск', en: 'Excursion to Akyaka, Azmak River, Dalyan, and Iztuzu Beach included in the retreat', tr: 'Akyaka, Azmak Nehri, Dalyan ve İztuzu Plajı gezisi sanat tatiline dahil' },
      parkingTitle: home.spa_parking_title || { ru: 'Встреча и трансфер из аэропорта DLM', en: 'Dalaman Airport [DLM] Pickup & Transfer', tr: 'Dalaman Havalimanı [DLM] Karşılama ve Transfer' },
      parkingDesc: home.spa_parking_desc || { ru: 'Бесплатный индивидуальный трансфер из аэропорта Даламан [DLM] на виллу или в студию Мармариса', en: 'Complimentary private transfer from Dalaman Airport [DLM] to the villa or Marmaris studio', tr: 'Dalaman Havalimanından [DLM] villaya veya Marmaris stüdyosuna ücretsiz transfer' },
      bbqTitle: home.spa_bbq_title || { ru: 'Домашняя средиземноморская кухня от Марины', en: 'Home-Style Mediterranean Cuisine by Marina', tr: 'Şef Marina Ev Yapımı Akdeniz Mutfağı' },
      bbqDesc: home.spa_bbq_desc || { ru: '3-разовое питание из свежих фермерских продуктов, турецкие завтраки и ужины на террасе', en: '3 daily meals made from fresh local farm produce, Turkish breakfasts, and terrace dinners', tr: 'Taze çiftlik ürünleriyle hazırlanan 3 öğün yemek, serpme kahvaltı ve terasta akşam yemekleri' }
    };
  }

  // 8. Юридические гарантии, оферты, KVKK / GDPR и правила бронирования [Safety & Legal Data]
  if (forceRebuild || !home.safetyData) {
    const extractItems = (prefix) => {
      const list = [];
      const keys = Object.keys(home)
        .filter((k) => k.startsWith(prefix))
        .sort((a, b) => {
          const numA = parseInt(a.replace(prefix, ''), 10) || 0;
          const numB = parseInt(b.replace(prefix, ''), 10) || 0;
          return numA - numB;
        });
      keys.forEach((k) => {
        const item = home[k];
        if (item && item.enabled !== false) {
          list.push({
            key: k,
            ru: item.ru || '',
            en: item.en || '',
            tr: item.tr || '',
            desc: item.desc || '',
            icon: item.media || ''
          });
        }
      });
      return list;
    };

    home.safetyData = {
      header: home.safety_header || { ru: 'Юридические гарантии, публичные оферты, KVKK / GDPR и правила бронирования', en: 'Legal Guarantees, Public Offers, KVKK / GDPR & Booking Rules', tr: 'Yasal Güvenceler, Mesafeli Satış Sözleşmesi, KVKK / GDPR ve Rezervasyon Kuralları' },
      law: {
        title: home.safety_law_title || { ru: 'Публичная оферта на обучение и бессрочный доступ', en: 'Public Offer for Courses & Lifetime Access', tr: 'Eğitim Sözleşmesi ve Ömür Boyu Erişim' },
        desc: home.safety_law_desc || { ru: 'Официальный договор оферты на онлайн мастер-классы и 6-месячное индивидуальное наставничество.', en: 'Official public offer governing online masterclasses and 6-month personal mentorship.', tr: 'Online atölyeler ve 6 aylık birebir mentorluk için resmi mesafeli satış sözleşmesi.' },
        badge: home.safety_law_badge || { ru: 'Доступ навсегда + 180 дней кураторства', en: 'Lifetime Access + 180 Days Mentorship', tr: 'Ömür Boyu Erişim + 180 Gün Mentorluk' },
        items: extractItems('safety_law_item')
      },
      homeSafety: {
        title: home.safety_home_title || { ru: 'Бронирование арт-отпусков в Турции и студии в Мармарисе', en: 'Booking Turkey Art Retreats & Marmaris Studio Weeks', tr: 'Türkiye Sanat Tatili ve Marmaris Stüdyo Rezervasyonu' },
        desc: home.safety_home_desc || { ru: 'Прозрачная система квот [6 мест на поток] и удержание выбранного слота на 24 часа [HOLD].', en: 'Transparent 6-spot quota system and 24-hour slot reservation [HOLD] while purchasing flights.', tr: 'Şeffaf 6 kişilik kontenjan sistemi ve uçak bileti alımı için 24 saatlik [HOLD] rezervasyon hakkı.' },
        badge: home.safety_home_badge || { ru: 'Квота 6 мест • 24ч HOLD', en: '6 Spots Quota • 24h HOLD', tr: '6 Kişilik Kontenjan • 24 Saat HOLD' },
        items: extractItems('safety_home_item')
      },
      accessibility: {
        title: home.safety_access_title || { ru: 'Бутик кутюрных изделий и Ателье «Под заказ»', en: 'Couture Boutique & Bespoke Atelier Policy', tr: 'Haute Couture Butik ve Özel Sipariş Kuralları' },
        desc: home.safety_access_desc || { ru: 'Бережная международная доставка готовых украшений и индивидуальный пошив по утвержденному эскизу.', en: 'Insured worldwide shipping of ready-to-wear pieces and custom creation according to your approved sketch.', tr: 'Hazır tasarım ürünlerin sigortalı uluslararası kargosu ve onaylanan eskize göre özel üretim.' },
        badge: home.safety_access_badge || { ru: 'Отправка за 2-3 дня • Трек-номер', en: '2-3 Day Dispatch • Tracked Shipping', tr: '2-3 Günde Kargo • Takip Numarası' },
        items: extractItems('safety_access_item')
      },
      cancellation: {
        title: home.safety_cancel_title || { ru: 'Защита данных KVKK / GDPR и фактуры e-Arşiv GİB', en: 'KVKK / GDPR Data Protection & e-Arşiv GİB Invoicing', tr: 'KVKK / GDPR Veri Koruma ve e-Arşiv Fatura' },
        desc: home.safety_cancel_desc || { ru: 'Полное соответствие закону Турции KVKK № 6698, европейскому регламенту GDPR и стандарту VUK 213.', en: 'Full compliance with Turkish KVKK Law No. 6698, EU GDPR, and Turkish Tax Procedure Law VUK 213.', tr: '6698 sayılı KVKK, AB GDPR ve VUK 213 elektronik fatura standartlarına tam uyum.' },
        badge: home.safety_cancel_badge || { ru: 'Marmaris Vergi Dairesi • VUK 213', en: 'Marmaris Vergi Dairesi • VUK 213', tr: 'Marmaris Vergi Dairesi • VUK 213' },
        items: extractItems('safety_cancel_item')
      }
    };
  }
}

module.exports = { buildHomeDerivedCollections };
