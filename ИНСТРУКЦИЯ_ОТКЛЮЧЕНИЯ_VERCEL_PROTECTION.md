# РУКОВОДСТВО: ОТКЛЮЧЕНИЕ VERCEL AUTHENTICATION ДЛЯ ПУБЛИКАЦИИ КОНТЕНТА VASILISA.LUNEVILLE

> **Назначение:** Пошаговая инструкция для мастера и администратора платформы **«Vasilisa.luneville - вышивка от кутюр»** по отключению экрана защиты Vercel Authentication [Deployment Protection] для беспрепятственной работы вебхуков Duplex Push из Google Таблицы.  
> **Стандарт:** 100% Zero-Brackets & Zero-Emdash.

---

## 1. Первопричина блокировки вебхука публикации

Если в настройках проекта на Vercel включена опция **Vercel Authentication**, внешние POST-запросы от Google Таблицы `★ CRM Vasilisa.luneville Couture` на адрес `/api/revalidate` и `/api/content` перехватываются экраном авторизации Vercel со статусом `HTTP 307 / 401`.

---

## 2. Отключение защиты в 3 шага на vercel.com

1. Войдите в панель управления `https://vercel.com/` и откройте проект платформы `vasilisa-luneville-couture-platform`.
2. Перейдите во вкладку **Settings** ➔ **Deployment Protection**.
3. В блоке **Vercel Authentication** выберите **Disabled** и нажмите **Save**.

---

## 3. Проверка мгновенной публикации из Google Таблицы

1. Откройте таблицу `★ CRM Vasilisa.luneville Couture` [`1ZBQ3iihSkyOECXoXAcIgtDZyrbYQ5rU_NWyF6wxjGZ4`].
2. В верхнем меню выберите:  
   `🧵 1. Витрина и Листы CRM : Vasilisa.luneville ➔ ⚡ Опубликовать изменения на сайте прямо сейчас`
3. Контент всех 15 листов мгновенно доставляется на сайт методом Duplex Push.
