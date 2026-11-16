// ==============================================================================
// ДОГОВОР обучения и заказа изделий ЖИЛЬЯ (RENTAL CONTRACT)
// Файл: pages/legal/contract.js
// Назначение: Публичная оферта и договор аренды Vasilisa.luneville - вышивка от кутюр
// ==============================================================================

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../utils/language';
import dynamicContent from '../../utils/content.json';

export default function ContractPage() {
  const { lang } = useLanguage();
  const content = dynamicContent?.legal?.contract || {};
  const pageTitle = content?.title?.[lang] || content?.title?.ru || 'Договор публичной оферты на обучение, арт-отпуск и заказ изделий';
  const pageContent = content?.text?.[lang] || content?.text?.ru || `Настоящий документ является официальным предложением (публичной офертой) владельца виллы Vasilisa.luneville - вышивка от кутюр Василисы Боровиковой (VKN TR-VASILISA-VKN) физическим лицам о заключении договора краткосрочной аренды виллы в городе Дальян, провинция Мугла, Турция.

1. Предмет договора:
Исполнитель [Василиса Боровикова, бренд Vasilisa.luneville] предоставляет Ученице / Заказчице доступ к оплаченным онлайн мастер-классам, курсу наставничества, очному обучению в студии в Мармарисе, участию в арт-отпуске в Турции или изделиям кутюрного бутика.

2. Порядок бронирования и оплаты:
- Бронирование считается подтвержденным после внесения 100% оплаты согласованной стоимости.
- При одобрении заявки на бронирование Мастером даты удерживаются в течение 24 часов (HOLD) для завершения онлайн-платежа.
- Оплата осуществляется через защищенные платежные шлюзы (Stripe, Т-Банк, ЮKassa, Iyzico, PayPal).

3. Правила проживания:
- Начало очных занятий в студии: с 09:00.
- Завершение учебного дня в студии: до 17:00.
- Курение внутри помещений категорически запрещено (разрешено только в саду и на террасе).
- Проведение шумных вечеринок в ночное время (после 23:00) запрещено муниципальными нормами Дальяна.

4. Ответственность сторон:
Все видеоматериалы уроков, PDF-выкройки и карты материалов являются объектом авторского права Василисы Боровиковой.

Владелец: Vasilisa Borovikova (VKN TR-VASILISA-VKN)
Email: vasilisa.luneville@gmail.com`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Head>
        <title>{pageTitle} | Vasilisa.luneville - вышивка от кутюр</title>
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> На главную страницу
        </Link>

        <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <FileText className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{pageTitle}</h1>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
            {pageContent}
          </div>
        </div>
      </main>

      <Footer legalData={dynamicContent?.legal} />
    </div>
  );
}

