// Файл: src/data/changelogData.ts (ФИНАЛЬНАЯ ПОЛНАЯ ВЕРСИЯ)

export interface ChangelogItem {
  product: 'Blueprint' | 'Telegram Bot' | 'Landing' | 'Audit' | 'BPMN';
  version: string;
  releaseName?: string;
  date: string;
  title: string;
  description: string;
  type: 'feature' | 'fix' | 'refactor' | 'content';
}

export const allChangelogData: ChangelogItem[] = [
  // --- ИСТОРИЯ BLUEPRINT ---

  {
    product: 'Telegram Bot', 
    version: '2.7.1', 
    date: '2025-12-19', 
    title: 'UX/COPYWRITING: BRAND VOICE REFINEMENT',
description: `<p>• <strong>NEW:</strong> Создан централизованный раздел "История версий" для всех продуктов.</p>
              <p>• <strong>FEATURE:</strong> Добавлена фильтрация по продуктам и типам изменений.</p>
              <p>• <strong>CONTENT:</strong> Добавлена прямая ссылка на Telegram-бота в раздел "Живые Демо".</p>
              <p>• <strong>UI:</strong> Внедрены цветовые метки для каждого продукта в общей ленте.</p>`,
              type: 'refactor',
              },
  {
    product: 'Telegram Bot', 
    version: '2.1.0', 
    date: '2025-12-19', 
    title: 'UX/COPYWRITING: BRAND VOICE REFINEMENT',
    description: `<p>• <strong>REWORK:</strong> Обновлен текст приветствия и названия кнопок для соответствия бренду "Прагматичного хирурга".</p>
                  <p>• <strong>UX:</strong> Фокус в кнопках смещен с "инструмента" на "действие" (<em>Диагностировать бизнес-хаос</em>) и с "процесса" на "результат" (<em>Получить персональный разбор</em>).</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', 
    version: '2.7.0', 
    date: '2025-12-19', 
    title: 'REFACTOR: MASTER CHANGELOG',
    description: `<p>• <strong>NEW:</strong> Создан централизованный раздел "История версий" для всех продуктов.</p>
                  <p>• <strong>FEATURE:</strong> Добавлена фильтрация по продуктам (вкладки) и по типам изменений (кликабельная легенда).</p>
                  <p>• <strong>UI:</strong> Внедрены цветовые метки для каждого продукта в общей ленте.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '2.6.0', date: '2025-12-19', title: 'NEW TOMES: PORTFOLIO & CLIENT PROTOCOLS',
    description: `<p>• <strong>NEW:</strong> Добавлен <strong>ТОМ 8: ПРОДУКТОВЫЙ ПОРТФЕЛЬ</strong>.</p><p>• <strong>NEW:</strong> Добавлен <strong>ТОМ 9: КЛИЕНТСКИЕ ПРОТОКОЛЫ</strong>.</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '2.5.3', date: '2025-12-18', title: 'PATCH: MINOR LAYOUT FIXES',
    description: `<p>• <strong>FIX:</strong> Исправлена верстка в блоке 'Живые Демо и Ссылки'.</p><p>• <strong>UI:</strong> Добавлен вертикальный отступ.</p>`,
    type: 'fix',
  },
  {
    product: 'Blueprint', version: '2.5.2', date: '2025-12-18', title: 'CONTENT: SYSTEM MAP LINK',
    description: `<p>• <strong>ДОБАВЛЕНО:</strong> Ссылка на 'Карту проекта (System)' в раздел 'Живые Демо и Ссылки'.</p>`,
    type: 'content',
  },
  {
    product: 'Blueprint', version: '2.5.1', date: '2025-12-18', title: 'CONTENT: LIVE DEMOS SECTION',
    description: `<p>• <strong>ДОБАВЛЕНО:</strong> Новый раздел "Живые Демо и Ссылки" в том 'BUSINESS PROTOCOLS'.</p>`,
    type: 'content',
  },
  {
    product: 'Blueprint', version: '2.5.0', date: '2025-12-14', title: 'UX UPDATE: ON-PAGE NAVIGATION',
    description: `<p>• <strong>ВНЕДРЕНО:</strong> "Липкое" оглавление страницы (Table of Contents).</p><p>• ContentRenderer теперь автоматически добавляет якоря к заголовкам &lt;h3&gt;.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '2.4.2', date: '2025-12-14', title: 'PATCH: PROMPT LIBRARY UI',
    description: `<p>• <strong>UI FIX:</strong> Улучшено форматирование текста в 'Библиотеке промптов'.</p>`,
    type: 'fix',
  },
  {
    product: 'Blueprint', version: '2.4.1', date: '2025-12-14', title: 'PATCH: UI FIX & CONTENT UPDATE',
    description: `<p>• <strong>FIX:</strong> Исправлена Легенда статусов.</p><p>• <strong>CONTENT:</strong> В Библиотеку промптов добавлен 'Мастер-промпт'.</p>`,
    type: 'fix',
  },
  {
    product: 'Blueprint', version: '2.4.0', date: '2025-12-14', title: 'REFACTOR: TABBED CODE REFERENCE',
    description: `<p>• <strong>Справочник по коду</strong> переработан в панель с вкладками.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '2.3.1', date: '2025-12-14', title: 'PATCH: CODE REFERENCE STRUCTURE',
    description: `<p>• Справочник по коду структурирован по проектам.</p>`,
    type: 'fix',
  },
  {
    product: 'Blueprint', version: '2.3.0', date: '2025-12-14', title: 'FEATURE UPDATE: ROADMAP FILTERS',
    description: `<p>• В Roadmap добавлена <strong>фильтрация по тегам</strong>.</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '2.2.0', date: '2025-12-13', title: 'ROADMAP REWORK: INTERACTIVE KANBAN',
    description: `<p>• Раздел <strong>Roadmap</strong> полностью переработан в интерактивную канбан-доску.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '2.1.0', date: '2025-12-13', title: 'ROADMAP 2.0: KANBAN BOARD',
    description: `<p>• Внедрены статусы и визуальные приоритеты в Roadmap.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '2.0.1', date: '2025-12-13', title: 'STRATEGIC UPDATE: ROADMAP V2.0',
    description: `<p>• Сформирован и задокументирован детальный план развития до версии 2.0.</p>`,
    type: 'content',
  },
  {
    product: 'Blueprint', version: '2.0.0', date: '2025-12-13', title: 'SYSTEM REFACTOR: COMPONENT-DRIVEN LOG',
    description: `<p>• Переход на компонентную систему <code>&lt;[CHANGELOG]&gt;</code> для управления версиями.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '1.9.1', date: '2025-12-13', title: 'PATCH: MISSING DATA',
    description: `<p>• 🐞 <strong>FIX:</strong> Добавлены теги и связи для главы 'Служебные страницы'.</p>`,
    type: 'fix',
  },
  {
    product: 'Blueprint', version: '1.9.0', date: '2025-12-13', title: 'FEATURE UPDATE: NAVIGATION', releaseName: 'Connectivity',
    description: `<p>• <strong>ВНЕДРЕНА:</strong> Система тегов и связанных разделов ("Смотри также").</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '1.8.0', date: '2025-12-13', title: 'NEW MODULE: AI & AUTOMATION',
    description: `<p>• <strong>ДОБАВЛЕН ТОМ 7:</strong> AI & Automation.</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '1.7.0', date: '2025-12-13', title: 'ROADMAP & FIXES',
    description: `<p>• Обновлен Roadmap.</p><p>• Исправлена загрузка логотипа.</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '1.6.0', date: '2025-12-13', title: 'NEW SECTION & UI POLISH',
    description: `<p>• <strong>ДОБАВЛЕН ТОМ 6:</strong> Roadmap (Планы).</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '1.5.1', date: '2025-12-12', title: 'VISUAL SYSTEM UPDATE',
    description: `<p>• Переработан раздел Grid & Spacing.</p>`,
    type: 'refactor',
  },
  {
    product: 'Blueprint', version: '1.4.0', date: '2025-12-12', title: 'CONTENT UPDATE: BRAND IDENTITY',
    description: `<p>• <strong>Полностью заполнен ТОМ 1:</strong> Смыслы.</p>`,
    type: 'content',
  },
  {
    product: 'Blueprint', version: '1.3.0', date: '2025-12-12', title: 'MAJOR UPDATE: BUSINESS & ARCHITECTURE',
    description: `<p>• <strong>ДОБАВЛЕН ТОМ 5:</strong> Business Protocols.</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '1.2.0', date: '2025-12-12', title: 'FEATURE UPDATE: INTERACTIVITY',
    description: `<p>• Добавлен том System API.</p><p>• Реализована система плейсхолдеров.</p>`,
    type: 'feature',
  },
  {
    product: 'Blueprint', version: '1.0.0', date: '2025-12-11', title: 'INITIAL RELEASE',
    description: `<p>Инициализация системы Blueprint.</p>`,
    type: 'refactor',
  },

  // --- ИСТОРИЯ TELEGRAM БОТА ---
  {
    product: 'Telegram Bot', version: '2.0.0', date: '2025-12-19', title: 'REFACTOR: MONTH-LONG AUTOFUNNEL',
    description: `<p>• <strong>REWORK:</strong> Капельная кампания переработана в автоворонку на месяц.</p><p>• <strong>CONTENT:</strong> Добавлен контент для 13 "касаний".</p>`,
    type: 'refactor',
  },
  {
    product: 'Telegram Bot', version: '1.2.1', date: '2025-12-19', title: 'UX FIX: ADMIN REPLIES',
    description: `<p>• <strong>FIX:</strong> Уведомление о заявке теперь содержит готовую команду <code>/reply</code> для копирования.</p>`,
    type: 'fix',
  },
  {
    product: 'Telegram Bot', version: '1.2.0', date: '2025-12-19', title: 'FEATURE: INTERACTIVE LEAD GENERATION',
    description: `<p>• <strong>NEW:</strong> Кнопка "Записаться" запускает диалог сбора контактов.</p><p>• <strong>NEW:</strong> Реализована отправка уведомлений администратору.</p><p>• <strong>NEW:</strong> Добавлена админская команда <code>/reply</code>.</p>`,
    type: 'feature',
  },
  {
    product: 'Telegram Bot', version: '1.1.0', date: '2025-12-19', title: 'FEATURE: DRIP CAMPAIGN',
    description: `<p>• <strong>NEW:</strong> Внедрена 5-дневная капельная кампания.</p><p>• <strong>TECH:</strong> Добавлена персистентность (память) бота.</p>`,
    type: 'feature',
  },
  {
    product: 'Telegram Bot', version: '1.0.0', date: '2025-12-19', title: 'INITIAL RELEASE',
    description: `<p>• <strong>INIT:</strong> Запуск бота. Реализовано приветственное меню.</p>`,
    type: 'content',
  },
];

// Сортируем все записи по дате, от новых к старым (ВАЖНО: формат даты YYYY-MM-DD)
allChangelogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());