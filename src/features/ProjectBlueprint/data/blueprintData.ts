import { Tome, PaletteData } from '../types/blueprint';

// --- ДАННЫЕ ПАЛИТРЫ ---
export const colorPaletteData: PaletteData = {
  accents: [
    { name: 'Cyan / Electric', hex: '#22d3ee', description: 'Основной акцент. Кнопки, иконки, курсор, активные состояния. Символизирует энергию.' },
    { name: 'Royal Blue', hex: '#3b82f6', description: 'Вторичный акцент. Ссылки, инфо-сообщения, границы. Доверие и структура.' },
    { name: 'Violet', hex: '#9333ea', description: 'Глубина. Градиенты, фоновые свечения, границы карточек. Создает атмосферу.' },
    { name: 'Fuchsia', hex: '#d946ef', description: 'Креатив. Выделение важных заголовков, градиенты в блоке «Обо мне».' },
  ],
  backgrounds: [
    { name: 'Midnight', hex: '#0B0F19', description: 'Основной фон страниц' },
    { name: 'Slate', hex: '#111827', description: 'Фон карточек и панелей' },
    { name: 'Surface', hex: '#1f2937', description: 'Второстепенные элементы, поля ввода' },
  ]
};

// --- ОСНОВНАЯ СТРУКТУРА КОНТЕНТА ---
export const blueprintData: Tome[] = [
  // --- ТОМ 1: СМЫСЛЫ (БРЕНД-ПАСПОРТ) ---
  {
    id: 'passport',
    title: 'БРЕНД-ПАСПОРТ (СМЫСЛЫ)',
    chapters: [
      {
        id: 'changelog',
        englishTitle: 'Changelog & Version',
        russianTitle: 'О паспорте и версии',
        tags: ['system', 'meta'],
        related: ['project-structure', 'tech-stack'],
        content: `
          <p class="mb-6 text-lg text-gray-400">Этот документ — "паспорт" проекта, фиксирующий его эволюцию. Здесь мы документируем все ключевые решения и нововведения.</p>
          
          <div class="p-4 bg-[#111827] border border-gray-800 rounded-lg flex items-center justify-between shadow-lg mb-12">
            <span class="text-gray-400 font-medium">Текущая версия системы:</span>
            <code class="px-3 py-1 bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#5eead4] text-sm font-mono rounded-full shadow-[0_0_10px_rgba(34,211,238,0.1)]">v2.3.1</code>
          </div>

          <h3 class="text-white font-bold text-lg mb-4">Легенда статусов версий</h3>
          <div class="p-4 bg-[#111827] border border-gray-800 rounded-lg mb-12 text-xs grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#22d3ee] shadow-[0_0_4px_#22d3ee]"></span><span class="text-gray-300">Новая фича</span></div>
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_4px_#f59e0b]"></span><span class="text-gray-300">Исправление (Fix)</span></div>
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#d946ef] shadow-[0_0_4px_#d946ef]"></span><span class="text-gray-300">Рефакторинг / UI</span></div>
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]"></span><span class="text-gray-300">Контент</span></div>
          </div>

          <h3 class="text-white font-bold text-lg mb-6">История изменений (Changelog)</h3>
          
          <[CHANGELOG]>
        `
      },
      // ... тут выше идет changelog ...
      
      {
        id: 'mission-promise',
        englishTitle: 'Mission & Promise',
        russianTitle: 'Миссия и Обещание',
        tags: ['strategy', 'brand'],
        related: ['voice-tone', 'elevator-pitch'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Философия "Бизнес-хирургии". Мы превращаем хаос в систему.</p>
          
          <div class="mb-8 p-6 rounded-2xl border border-gray-800 bg-gradient-to-r from-[#111827] to-[#0B0F19] relative overflow-hidden group hover:border-[#d946ef]/50 transition-all duration-500">
             <div class="absolute top-0 right-0 w-64 h-64 bg-[#d946ef] opacity-5 blur-[100px] rounded-full group-hover:opacity-10 transition-opacity duration-500"></div>
             
             <div class="relative z-10">
                <div class="inline-flex items-center px-3 py-1 rounded-full border border-[#d946ef]/30 bg-[#d946ef]/10 text-[#d946ef] text-xs font-bold uppercase tracking-wider mb-4">
                    <svg class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Миссия
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 italic leading-tight">
                    «Уменьшаю число провалов бизнеса: <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#9333ea]">превращаю хаос в систему</span>, возвращая владельцу время, прибыль и предсказуемость.»
                </h2>
             </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
             <div class="p-5 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#f87171] hover:bg-[#1f2937] hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div class="text-[#f87171] mb-2 group-hover:scale-110 transition-transform duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg></div>
                <h4 class="text-white font-bold mb-1">Уменьшаю число провалов</h4>
                <p class="text-xs text-gray-400 group-hover:text-gray-300">Фокус на снижении смертности компаний. Работа не «для галочки», а на устойчивость бизнеса.</p>
             </div>
             <div class="p-5 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#22d3ee] hover:bg-[#1f2937] hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div class="text-[#22d3ee] mb-2 group-hover:scale-110 transition-transform duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                <h4 class="text-white font-bold mb-1">Превращаю хаос в систему</h4>
                <p class="text-xs text-gray-400 group-hover:text-gray-300">Убираем «пожары» и рассинхрон. Создаём единую управляемую модель.</p>
             </div>
             <div class="p-5 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#3b82f6] hover:bg-[#1f2937] hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div class="text-[#3b82f6] mb-2 group-hover:scale-110 transition-transform duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                <h4 class="text-white font-bold mb-1">Возвращаю время</h4>
                <p class="text-xs text-gray-400 group-hover:text-gray-300">Владелец перестаёт быть «пожарным». Появляется время на стратегию.</p>
             </div>
             <div class="p-5 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#d946ef] hover:bg-[#1f2937] hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div class="text-[#d946ef] mb-2 group-hover:scale-110 transition-transform duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
                <h4 class="text-white font-bold mb-1">Возвращаю предсказуемость</h4>
                <p class="text-xs text-gray-400 group-hover:text-gray-300">Собственник понимает, что будет через 6 месяцев. Бизнес становится прогнозируемым.</p>
             </div>
          </div>

          <div class="p-6 border-l-4 border-[#22d3ee] bg-[#22d3ee]/5 rounded-r-xl hover:bg-[#22d3ee]/10 transition-colors duration-300 cursor-default">
            <h3 class="text-[#22d3ee] font-bold uppercase text-xs tracking-widest mb-2">Операционное обещание</h3>
            <p class="text-xl md:text-2xl font-bold text-white">«Система под ключ: процессы, CRM и дашборды — <span class="text-gray-400">чтобы ваш бизнес работал без вас.</span>»</p>
          </div>
        `
      },
      {
        id: 'voice-tone',
        englishTitle: 'Voice & Tone',
        russianTitle: 'Голос и тон',
        tags: ['brand', 'text'],
        related: ['brand-vocabulary', 'text-examples'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Как мы говорим с клиентом. Наши принципы коммуникации.</p>
          
          <div class="space-y-4">
            <div class="flex gap-4 p-5 rounded-xl border border-gray-800 bg-[#0B0F19] hover:border-[#22d3ee] hover:bg-[#111827] transition-all duration-300 cursor-default group">
                <div class="shrink-0 w-12 h-12 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee] group-hover:bg-[#22d3ee] group-hover:text-black transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div>
                    <h3 class="text-white font-bold text-lg group-hover:text-[#22d3ee] transition-colors">Прагматичный эксперт</h3>
                    <p class="text-sm text-gray-400 mt-1 leading-relaxed">Стиль «прагматичного хирурга» — мы не разводим демагогию, а ставим диагноз и выписываем рецепт решения.</p>
                </div>
            </div>

            <div class="flex gap-4 p-5 rounded-xl border border-gray-800 bg-[#0B0F19] hover:border-[#3b82f6] hover:bg-[#111827] transition-all duration-300 cursor-default group">
                <div class="shrink-0 w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div>
                    <h3 class="text-white font-bold text-lg group-hover:text-[#3b82f6] transition-colors">Чётко и лаконично</h3>
                    <p class="text-sm text-gray-400 mt-1 leading-relaxed">Наши тексты структурированы и не перегружены «водой». Используем короткие предложения, списки и заголовки.</p>
                </div>
            </div>

            <div class="flex gap-4 p-5 rounded-xl border border-gray-800 bg-[#0B0F19] hover:border-[#d946ef] hover:bg-[#111827] transition-all duration-300 cursor-default group">
                <div class="shrink-0 w-12 h-12 rounded-lg bg-[#d946ef]/10 flex items-center justify-center text-[#d946ef] group-hover:bg-[#d946ef] group-hover:text-white transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <div>
                    <h3 class="text-white font-bold text-lg group-hover:text-[#d946ef] transition-colors">Деловой, но уважительный</h3>
                    <p class="text-sm text-gray-400 mt-1 leading-relaxed">Обращаемся к аудитории на «вы», говорим на профессиональном языке, но без официальной чопорности.</p>
                </div>
            </div>
          </div>
        `
      },
      {
        id: 'elevator-pitch',
        englishTitle: 'Elevator Pitch',
        russianTitle: 'Самопрезентация',
        tags: ['brand', 'text'],
        related: ['mission-promise', 'comm-channels'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Скрипты ответов на вопрос "Чем вы занимаетесь?" для разных ситуаций. Выучите их наизусть.</p>
          
          <div class="space-y-6">
            
            <!-- 10 SEC -->
            <div class="p-6 bg-[#111827] rounded-xl border border-gray-700 relative overflow-hidden hover:border-[#22d3ee] hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-default">
                <div class="absolute top-4 right-4 text-gray-600 font-black text-6xl opacity-10 pointer-events-none">10s</div>
                <div class="flex items-center gap-2 mb-4 text-[#22d3ee] font-bold uppercase text-xs tracking-wider">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    Быстрый контакт
                </div>
                <p class="text-xl text-white font-medium leading-relaxed">
                    «Мы не чиним то, что не сломано. Мы находим, где вы теряете деньги из-за хаоса в процессах, и строим систему, которая работает как часы.»
                </p>
            </div>

            <!-- 30 SEC -->
            <div class="p-6 bg-[#111827] rounded-xl border border-gray-700 relative overflow-hidden hover:border-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default">
                <div class="absolute top-4 right-4 text-gray-600 font-black text-6xl opacity-10 pointer-events-none">30s</div>
                <div class="flex items-center gap-2 mb-4 text-[#3b82f6] font-bold uppercase text-xs tracking-wider">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Стандартная презентация
                </div>
                <p class="text-gray-300 text-sm mb-4 leading-relaxed">«Большинство бизнесов упираются в потолок не из-за маркетинга, а из-за операционки. Мы работаем как "корпоративные хирурги": проводим аудит, находим "тромбы" в процессах и внедряем жесткие регламенты.»</p>
                <div class="p-3 bg-[#1f2937] rounded border-l-2 border-[#3b82f6] text-sm text-gray-400">
                    <strong class="text-white">Результат:</strong> вы выходите из операционки, команда работает автономно, а прибыль растет прогнозируемо.
                </div>
            </div>

             <!-- 60 SEC -->
            <div class="p-6 bg-[#111827] rounded-xl border border-gray-700 relative overflow-hidden hover:border-[#d946ef] hover:shadow-[0_0_20px_rgba(217,70,239,0.1)] transition-all duration-300 cursor-default">
                <div class="absolute top-4 right-4 text-gray-600 font-black text-6xl opacity-10 pointer-events-none">60s</div>
                <div class="flex items-center gap-2 mb-4 text-[#d946ef] font-bold uppercase text-xs tracking-wider">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
                    Развернутый ответ
                </div>
                <p class="text-gray-300 text-sm mb-4 leading-relaxed">«Смотрите, ситуация на рынке такая: компании быстро растут, но внутри начинается хаос. Сотрудники тонут в задачах, сроки горят, а собственник работает 24/7, туша пожары.</p>
                <p class="text-gray-300 text-sm mb-4 leading-relaxed">Мы решаем именно эту проблему. Мы не коучи и не мотивационные спикеры. Мы приходим и оцифровываем бизнес. Внедряем дашборды, прописываем KPI и настраиваем систему контроля.</p>
                <p class="text-gray-300 text-sm leading-relaxed">По сути, мы превращаем бизнес из "творческой студии" в надежный завод по производству прибыли.»</p>
            </div>
          </div>
        `
      },
      {
        id: 'brand-vocabulary',
        englishTitle: 'Vocabulary (Do / Don\'t)',
        russianTitle: 'Словарь бренда',
        tags: ['brand', 'text'],
        related: ['text-examples', 'voice-tone'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Маркеры стиля. Список слов, которые формируют нашу идентичность, и список запрещенных клише.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- DO -->
            <div class="p-6 rounded-2xl bg-[#064e3b]/20 border border-[#059669]/30 hover:bg-[#064e3b]/30 hover:border-[#059669]/60 transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded bg-[#059669]/20 flex items-center justify-center text-[#10b981]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-[#10b981]">Наш лексикон</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Система</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Процесс</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Регламент</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Оцифровка</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Данные</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Метрики</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Контроль</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Управляемость</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#064e3b]/40 border border-[#059669]/30 text-[#34d399] text-xs font-bold uppercase cursor-default hover:bg-[#059669] hover:text-white hover:scale-105 transition-all duration-200">Внедрение</span>
              </div>
            </div>

            <!-- DON'T -->
            <div class="p-6 rounded-2xl bg-[#7f1d1d]/20 border border-[#b91c1c]/30 hover:bg-[#7f1d1d]/30 hover:border-[#b91c1c]/60 transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                 <div class="w-8 h-8 rounded bg-[#7f1d1d]/20 flex items-center justify-center text-[#f87171]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                </div>
                <h3 class="text-xl font-bold text-[#f87171]">Стоп-слова</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Уникальный</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Инновационный</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Эксклюзивный</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Экосистема</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Синергия</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Путешествие</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#7f1d1d]/40 border border-[#b91c1c]/30 text-[#fca5a5] text-xs font-medium line-through decoration-red-500/50 opacity-70 cursor-not-allowed hover:opacity-100 hover:text-white transition-opacity">Магия</span>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'text-examples',
        englishTitle: 'Text Examples',
        russianTitle: 'Примеры текстов',
        tags: ['brand', 'text'],
        related: ['brand-vocabulary', 'comm-channels'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Сравнение хороших и плохих формулировок. Учимся писать конкретно.</p>
          
          <div class="space-y-6">
            <!-- EX 1 -->
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300">
                <div class="p-6 bg-[#064e3b]/10 border-r border-gray-800 hover:bg-[#064e3b]/20 transition-colors">
                    <div class="flex items-center gap-2 text-[#10b981] font-bold text-xs uppercase mb-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> ПРАВИЛЬНО
                    </div>
                    <p class="text-white font-medium text-lg leading-snug">«Ваша проблема — не плохие сотрудники, а отсутствие системы, в которой они могут быть эффективны.»</p>
                    <div class="mt-4 flex gap-2 text-xs text-gray-500 bg-[#111827] p-2 rounded">
                        <span class="text-[#22d3ee]">Почему так:</span> Диагностируем корень проблемы, предлагаем системное решение.
                    </div>
                </div>
                <div class="p-6 bg-[#450a0a]/10 hover:bg-[#450a0a]/20 transition-colors">
                     <div class="flex items-center gap-2 text-[#ef4444] font-bold text-xs uppercase mb-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> НЕПРАВИЛЬНО
                    </div>
                    <p class="text-gray-400 font-medium text-lg leading-snug line-through decoration-red-500/30">«Давайте вместе отправимся в увлекательное путешествие трансформации вашего бизнеса!»</p>
                </div>
            </div>

            <!-- EX 2 -->
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300">
                <div class="p-6 bg-[#064e3b]/10 border-r border-gray-800 hover:bg-[#064e3b]/20 transition-colors">
                    <div class="flex items-center gap-2 text-[#10b981] font-bold text-xs uppercase mb-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> ПРАВИЛЬНО
                    </div>
                    <p class="text-white font-medium text-lg leading-snug">«Я не учу «мыслить позитивно». Я внедряю дашборд, который показывает, где вы теряете деньги.»</p>
                    <div class="mt-4 flex gap-2 text-xs text-gray-500 bg-[#111827] p-2 rounded">
                        <span class="text-[#22d3ee]">Почему так:</span> Конкретика вместо корпоративного жаргона.
                    </div>
                </div>
                <div class="p-6 bg-[#450a0a]/10 hover:bg-[#450a0a]/20 transition-colors">
                     <div class="flex items-center gap-2 text-[#ef4444] font-bold text-xs uppercase mb-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> НЕПРАВИЛЬНО
                    </div>
                    <p class="text-gray-400 font-medium text-lg leading-snug line-through decoration-red-500/30">«Раскроем потенциал вашей команды и достигнем синергии.»</p>
                </div>
            </div>
          </div>
        `
      },
       {
        id: 'comm-channels',
        englishTitle: 'Channels & Style',
        russianTitle: 'Каналы и Стиль',
        tags: ['brand', 'strategy'],
        related: ['social-media', 'document-styling'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Специфика подачи контента в зависимости от платформы и рекомендации по стилю.</p>
          
          <h3 class="text-white font-bold text-lg mb-6">Направления коммуникации</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            
            <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#22d3ee] transition-all duration-300 cursor-default group hover:bg-[#1f2937]">
                <div class="flex items-center gap-3 mb-4 text-[#22d3ee] group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line></svg>
                    <h4 class="font-bold">Лендинги и сайты</h4>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">Лицо компании. Текст максимально отточен. Проблема и решение изложены чётко. Задача — ясно донести ценность.</p>
            </div>

            <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#d946ef] transition-all duration-300 cursor-default group hover:bg-[#1f2937]">
                <div class="flex items-center gap-3 mb-4 text-[#d946ef] group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <h4 class="font-bold">Презентации и КП</h4>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">Для прямых продаж. Оформляем структурировано: заголовки, цифры, графики. Текст основан на фактах: сколько конкретно принесёт выгоды.</p>
            </div>

            <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#3b82f6] transition-all duration-300 cursor-default group hover:bg-[#1f2937]">
                <div class="flex items-center gap-3 mb-4 text-[#3b82f6] group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <h4 class="font-bold">Соцсети (Telegram, LinkedIn)</h4>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">Короткие экспертные заметки, кейсы. Тон допускает легкую неформальность, но по-прежнему деловой. Избегаем пустого хайпа.</p>
            </div>

            <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#f87171] transition-all duration-300 cursor-default group hover:bg-[#1f2937]">
                <div class="flex items-center gap-3 mb-4 text-[#f87171] group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    <h4 class="font-bold">Сценарии (Shorts, Reels)</h4>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">Коротко и ёмко. Сначала проблема (диагноз), затем — системное решение. Демонстрируем экспертизу через примеры.</p>
            </div>
          </div>
        `
      }
    ]
  },

  // --- ТОМ 2: ВИЗУАЛ (БРЕНД-БУК) ---
  {
    id: 'visual',
    title: 'БРЕНД-БУК (ВИЗУАЛ)',
    chapters: [
      {
        id: 'visual-overview',
        englishTitle: 'Brand Book Overview',
        russianTitle: 'Обзор Бренд-бука',
        tags: ['ui', 'ux', 'design'],
        related: ['logobook', 'colors-typography', 'ui-elements'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Техническое руководство по визуальному стилю для дизайнеров, разработчиков и подрядчиков.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Палитра -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#22d3ee] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div class="w-12 h-12 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee] mb-6 group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                </div>
                <h4 class="text-white font-bold text-lg mb-1">Палитра</h4>
                <p class="text-xs text-gray-400">Dark mode only. Неон, глубокие градиенты.</p>
            </div>

            <!-- UI Кит -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#3b82f6] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div class="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
                <h4 class="text-white font-bold text-lg mb-1">UI Кит</h4>
                <p class="text-xs text-gray-400">Готовые классы для кнопок, форм и карточек.</p>
            </div>

            <!-- Соцсети -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#d946ef] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div class="w-12 h-12 rounded-lg bg-[#d946ef]/10 flex items-center justify-center text-[#d946ef] mb-6 group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <h4 class="text-white font-bold text-lg mb-1">Соцсети</h4>
                <p class="text-xs text-gray-400">Шаблоны для YouTube, Telegram и LinkedIn.</p>
            </div>

          </div>
        `
      },
      {
        id: 'logobook',
        englishTitle: 'Logobook',
        russianTitle: 'Логобук',
        tags: ['brand', 'ui', 'design'],
        related: ['colors-typography', 'document-styling'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Правила использования логотипа, вариации и охранные поля.</p>
          
          <h3 class="text-white font-bold text-lg mb-4">Основные версии</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <!-- PRIMARY -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl flex flex-col items-center justify-center relative min-h-[240px] hover:border-[#22d3ee] transition-all duration-300 group">
                <span class="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase">Primary</span>
                <div class="p-6 bg-[#1f2937]/50 rounded-lg border border-gray-700/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all">
                    <div class="text-4xl font-black text-white tracking-tighter flex items-center">
                        <span class="bg-[#22d3ee] text-black px-1.5 rounded-sm mr-2 shadow-[0_0_15px_#22d3ee]">R</span>BRAND
                    </div>
                </div>
                <span class="mt-6 text-xs text-gray-500">Используется в 80% случаев</span>
            </div>

            <!-- ICON -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl flex flex-col items-center justify-center relative min-h-[240px] hover:border-[#22d3ee] transition-all duration-300 group">
                <span class="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase">Symbol / Icon</span>
                <div class="w-24 h-24 bg-[#1f2937]/50 rounded-xl border border-gray-700/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300">
                     <div class="w-12 h-12 bg-[#22d3ee] rounded-lg flex items-center justify-center text-black text-2xl font-black shadow-[0_0_20px_#22d3ee]">R</div>
                </div>
                <span class="mt-6 text-xs text-gray-500">Для аватарок, фавиконов и приложений</span>
            </div>
            
            <!-- Остальные блоки можно оставить без изменений, так как они статичны по смыслу -->
             <!-- MONO BLACK -->
            <div class="p-8 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center relative min-h-[160px] opacity-80 hover:opacity-100 transition-opacity">
                <span class="absolute top-4 left-4 text-[10px] font-mono text-gray-400 uppercase">Monochrome (Black)</span>
                <div class="text-3xl font-black text-black tracking-tighter flex items-center">
                        <span class="bg-black text-white px-1.5 rounded-sm mr-2">R</span>BRAND
                </div>
                <span class="mt-4 text-[10px] text-gray-400">Для светлых фонов и документов</span>
            </div>

            <!-- MONO WHITE -->
            <div class="p-8 bg-black border border-gray-800 rounded-xl flex flex-col items-center justify-center relative min-h-[160px] opacity-80 hover:opacity-100 transition-opacity">
                <span class="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase">Monochrome (White)</span>
                <div class="text-3xl font-black text-white tracking-tighter flex items-center">
                        <span class="bg-white text-black px-1.5 rounded-sm mr-2">R</span>BRAND
                </div>
                <span class="mt-4 text-[10px] text-gray-500">Для темных фото и видео</span>
            </div>
          </div>
          
           <h3 class="text-white font-bold text-lg mb-4">Недопустимое использование</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div class="aspect-square bg-[#111827] border border-red-900/30 rounded-lg flex flex-col items-center justify-center relative group overflow-hidden hover:border-red-500 transition-colors cursor-not-allowed">
                <div class="absolute top-2 right-2 text-red-500 opacity-50 group-hover:opacity-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg></div>
                <div class="text-white font-black scale-x-50 scale-y-150 transform origin-center transition-transform group-hover:scale-y-125">BRAND</div>
                <span class="text-[10px] text-red-400 mt-2 text-center">Не сжимать</span>
             </div>
             <div class="aspect-square bg-[#111827] border border-red-900/30 rounded-lg flex flex-col items-center justify-center relative group overflow-hidden hover:border-red-500 transition-colors cursor-not-allowed">
                <div class="absolute top-2 right-2 text-red-500 opacity-50 group-hover:opacity-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg></div>
                <div class="text-white font-black rotate-12 transition-transform group-hover:rotate-45">BRAND</div>
                <span class="text-[10px] text-red-400 mt-2 text-center">Не вращать</span>
             </div>
             <div class="aspect-square bg-[#111827] border border-red-900/30 rounded-lg flex flex-col items-center justify-center relative group overflow-hidden hover:border-red-500 transition-colors cursor-not-allowed">
                <div class="absolute top-2 right-2 text-red-500 opacity-50 group-hover:opacity-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg></div>
                <div class="text-white font-black shadow-[0_5px_5px_red] transition-shadow group-hover:shadow-[0_0_15px_red]">BRAND</div>
                <span class="text-[10px] text-red-400 mt-2 text-center">Без теней</span>
             </div>
             <div class="aspect-square bg-[#111827] border border-red-900/30 rounded-lg flex flex-col items-center justify-center relative group overflow-hidden hover:border-red-500 transition-colors cursor-not-allowed">
                <div class="absolute top-2 right-2 text-red-500 opacity-50 group-hover:opacity-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg></div>
                <div class="text-red-500 font-black">BRAND</div>
                <span class="text-[10px] text-red-400 mt-2 text-center">Не менять цвет</span>
             </div>
          </div>
        `
      },
      {
        id: 'colors-typography',
        englishTitle: 'Colors & Typography',
        russianTitle: 'Цвета и Шрифты',
        tags: ['ui', 'ux', 'design'],
        related: ['ui-elements', 'grid-system'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Палитра Neon/Cyberpunk и типографика Inter.</p>
          
          <h3 class="text-white font-bold text-lg mb-6">Цветовая система</h3>
          <p class="mb-4 text-sm text-gray-500">Кликните на карточку, чтобы скопировать HEX-код.</p>
          
          <[COLOR_PALETTE]>

          <h3 class="text-white font-bold text-lg mb-6 mt-12">Типографика (Inter)</h3>
          
          <div class="border border-gray-800 rounded-xl overflow-hidden bg-[#0B0F19]">
            
            <!-- SECTION LABEL -->
            <div class="px-6 pt-6 pb-2 border-b border-gray-800/50">
                <span class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Заголовки</span>
            </div>

            <!-- H1 -->
            <div class="p-6 border-b border-gray-800 flex flex-col md:flex-row gap-6 items-start hover:bg-[#111827] transition-colors">
                <div class="w-40 text-xs font-mono text-gray-500 mt-2">H1 / 900 / Tight</div>
                <div>
                    <div class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">Ликвидирую Хаос.</div>
                    <div class="text-sm text-gray-600">Главный экран, героические заголовки.</div>
                </div>
            </div>

            <!-- H2 -->
            <div class="p-6 border-b border-gray-800 flex flex-col md:flex-row gap-6 items-start hover:bg-[#111827] transition-colors">
                <div class="w-40 text-xs font-mono text-gray-500 mt-1">H2 / 700 / Normal</div>
                <div>
                    <div class="text-2xl md:text-3xl font-bold text-white mb-1">Результаты клиентов</div>
                    <div class="text-sm text-gray-600">Заголовки основных секций.</div>
                </div>
            </div>

            <!-- H3 -->
            <div class="p-6 border-b border-gray-800 flex flex-col md:flex-row gap-6 items-start hover:bg-[#111827] transition-colors">
                <div class="w-40 text-xs font-mono text-gray-500 mt-1">H3 / 600 / Normal</div>
                <div>
                    <div class="text-xl font-semibold text-white mb-1">Методология работы</div>
                    <div class="text-sm text-gray-600">Подзаголовки карточек и блоков.</div>
                </div>
            </div>

            <!-- SECTION LABEL -->
            <div class= "px-6 pt-6 pb-2 border-b border-gray-800/50">
                <span class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Основной текст</span>
            </div>

            <!-- BODY LARGE -->
             <div class="p-6 border-b border-gray-800 flex flex-col md:flex-row gap-6 items-start hover:bg-[#111827] transition-colors">
                <div class="w-40 text-xs font-mono text-gray-500 mt-1">Body Large / 400</div>
                <div class="max-w-2xl">
                    <div class="text-base text-gray-200 leading-relaxed mb-2">Я не коуч. Я не консультант, который даёт советы и уходит. Я — наёмный генерал штаба, который строит армию из вашего партизанского отряда.</div>
                    <div class="text-xs text-gray-600">Вводные абзацы, лид-тексты.</div>
                </div>
            </div>

            <!-- BODY REGULAR -->
            <div class="p-6 border-b border-gray-800 flex flex-col md:flex-row gap-6 items-start hover:bg-[#111827] transition-colors">
                <div class="w-40 text-xs font-mono text-gray-500 mt-1">Body / 400</div>
                <div class="max-w-2xl">
                    <div class="text-sm text-gray-400 leading-relaxed mb-2">Большинство бизнесов упираются в потолок не из-за маркетинга, а из-за операционки. Мы работаем как "корпоративные хирурги": проводим аудит, находим "тромбы" в процессах и внедряем жесткие регламенты.</div>
                    <div class="text-xs text-gray-600">Основной контент, описания.</div>
                </div>
            </div>

            <!-- CAPTION -->
            <div class="p-6 flex flex-col md:flex-row gap-6 items-start hover:bg-[#111827] transition-colors">
                <div class="w-40 text-xs font-mono text-gray-500 mt-1">Caption / 400</div>
                <div class="max-w-2xl">
                    <div class="text-xs text-gray-500 mb-1">* Данные основаны на результатах 30+ проектов за 2023 год.</div>
                    <div class="text-[10px] text-gray-700">Подписи, сноски, техническая информация.</div>
                </div>
            </div>

          </div>

          <!-- CODE BLOCK -->
          <div class="mt-8 p-6 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#d946ef] hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] transition-all duration-300 group">
                <h3 class="text-[#d946ef] font-bold text-lg mb-4 group-hover:translate-x-1 transition-transform">Code / Mono</h3>
                <div class="bg-[#0B0F19] p-4 rounded border border-gray-700 font-mono text-sm text-green-400 group-hover:border-[#d946ef]/50 transition-colors">
                    console.log("System Ready");
                </div>
          </div>
        `
      },
      {
        id: 'iconography',
        englishTitle: 'Iconography',
        russianTitle: 'Иконография',
        tags: ['ui', 'ux', 'design'],
        related: ['ui-elements'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Стиль Lucide React. Минимализм, геометрия, тонкие линии (2px).</p>
          
          <div class="space-y-12">
            
            <div>
                <h3 class="text-white font-bold text-lg mb-4">Технические требования</h3>
                <ul class="space-y-3 text-sm text-gray-300">
                    <li class="flex items-start gap-3 group">
                        <div class="mt-1 text-[#22d3ee] group-hover:scale-125 transition-transform"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <span class="group-hover:text-white transition-colors">Толщина штриха: <strong>2px (стандарт)</strong></span>
                    </li>
                    <li class="flex items-start gap-3 group">
                        <div class="mt-1 text-[#22d3ee] group-hover:scale-125 transition-transform"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <span class="group-hover:text-white transition-colors">Скругленные углы (Rounded joins)</span>
                    </li>
                    <li class="flex items-start gap-3 group">
                        <div class="mt-1 text-[#22d3ee] group-hover:scale-125 transition-transform"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <span class="group-hover:text-white transition-colors">Цвет: Белый (на темном) или Акцентный (Cyan/Blue)</span>
                    </li>
                    <li class="flex items-start gap-3 group">
                        <div class="mt-1 text-[#22d3ee] group-hover:scale-125 transition-transform"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <span class="group-hover:text-white transition-colors">Отсутствие заливки (Outline style)</span>
                    </li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-white font-bold text-lg mb-4">Примеры использования</h3>
                <div class="space-y-4 max-w-md">
                    <div class="p-4 rounded-lg bg-[#0B0F19] border border-gray-800 flex items-center gap-4 hover:border-[#22d3ee] transition-colors">
                        <div class="w-10 h-10 bg-[#22d3ee] rounded-lg flex items-center justify-center text-black shadow-[0_0_10px_#22d3ee]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
                        <div>
                            <div class="text-white font-bold text-sm">Акцентная иконка</div>
                            <div class="text-xs text-gray-500">Для важных действий (CTA)</div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-[#0B0F19] border border-gray-800 flex items-center gap-4 hover:border-gray-600 transition-colors">
                        <div class="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center text-gray-400 border border-gray-700"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                        <div>
                            <div class="text-white font-bold text-sm">Нейтральная иконка</div>
                            <div class="text-xs text-gray-500">Для мета-данных</div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-[#0B0F19] border border-gray-800 flex items-center gap-4 hover:border-red-500/50 transition-colors">
                        <div class="w-10 h-10 bg-[#7f1d1d]/20 rounded-lg flex items-center justify-center text-red-500 border border-red-900/50"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                        <div>
                            <div class="text-white font-bold text-sm">Статусная иконка</div>
                            <div class="text-xs text-gray-500">Ошибки, предупреждения</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-white font-bold text-lg mb-4">Библиотека иконок (Preview)</h3>
                <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                    <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></div>
                        <div class="aspect-square rounded bg-[#1f2937] flex items-center justify-center text-white hover:bg-[#22d3ee] hover:text-black transition-all duration-300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                    </div>
                </div>
            </div>

          </div>
        `
      },
      {
        id: 'ui-elements',
        englishTitle: 'UI Elements',
        russianTitle: 'Элементы UI',
        tags: ['ui', 'ux', 'code'],
        related: ['button-component', 'inputs', 'cards'],
        content: `
          <p class="mb-6 text-lg">Библиотека компонентов для веб-интерфейсов.</p>
          
          <div class="space-y-8">
            <!-- BUTTONS -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                 <h4 class="text-white font-bold mb-6 border-b border-gray-700 pb-2">Кнопки (Buttons)</h4>
                 <div class="flex flex-wrap gap-8 items-center justify-center">
                    <div class="text-center">
                        <button class="px-6 py-2.5 bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] text-black font-bold rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:scale-105 transition-transform">Primary Action</button>
                        <div class="mt-2 text-[10px] font-mono text-gray-500">.bg-gradient-to-r .text-black</div>
                    </div>
                    <div class="text-center">
                        <button class="px-6 py-2.5 bg-transparent border border-[#22d3ee] text-[#22d3ee] font-bold rounded-lg hover:bg-[#22d3ee]/10 transition-colors">Secondary Action</button>
                        <div class="mt-2 text-[10px] font-mono text-gray-500">.border .text-brand-cyan</div>
                    </div>
                    <div class="text-center">
                        <button class="px-6 py-2.5 bg-transparent text-gray-400 font-bold rounded-lg hover:text-white transition-colors flex items-center gap-2">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> Ghost Button
                        </button>
                        <div class="mt-2 text-[10px] font-mono text-gray-500">.text-gray-400 .hover:text-white</div>
                    </div>
                 </div>
            </div>

            <!-- INPUTS -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                 <h4 class="text-white font-bold mb-6 border-b border-gray-700 pb-2">Поля ввода (Inputs)</h4>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label class="text-xs font-bold text-gray-500 mb-2 block">Default Input</label>
                        <input type="text" placeholder="Введите текст..." class="w-full bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#22d3ee] focus:ring-1 focus:ring-[#22d3ee] outline-none transition-all" />
                    </div>
                     <div>
                        <label class="text-xs font-bold text-red-500 mb-2 block">Error State</label>
                        <input type="text" value="Неверные данные" class="w-full bg-[#450a0a]/20 border border-red-500 rounded-lg px-4 py-3 text-red-200 outline-none" />
                    </div>
                 </div>
            </div>
            
            <!-- CARDS -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-6 bg-[#0B0F19] border border-gray-800 rounded-xl">
                    <h5 class="text-white font-bold mb-2">Standard Card</h5>
                    <p class="text-xs text-gray-500">Базовый контейнер. Фон charcoal, тонкая рамка white/5.</p>
                </div>
                 <div class="p-6 bg-[#0B0F19] border border-[#22d3ee]/30 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.1)] relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-[#22d3ee]"></div>
                    <h5 class="text-[#22d3ee] font-bold mb-2">Active / Hover Card</h5>
                    <p class="text-xs text-gray-400">Активное состояние. Рамка brand-cyan/30, легкое свечение.</p>
                </div>
            </div>

             <!-- DO & DON'T -->
             <[DO_DONT_EXAMPLE]>
          </div>
        `
      },
      {
        id: 'social-media',
        englishTitle: 'Social Media',
        russianTitle: 'Соцсети',
        tags: ['brand', 'design'],
        related: ['comm-channels'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Шаблоны оформления постов и профилей.</p>
          
          <div class="space-y-12">
            
            <!-- YOUTUBE -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                 <div class="flex items-center gap-3 mb-6 text-[#ef4444]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    <h4 class="font-bold text-white">YouTube Thumbnails</h4>
                 </div>
                 <div class="flex flex-col md:flex-row gap-8">
                    <div class="w-full md:w-2/3 aspect-video bg-black rounded-lg border border-gray-800 relative overflow-hidden flex items-end p-8">
                         <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                         <div class="relative z-10">
                            <span class="bg-[#ef4444] text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">LIVE</span>
                            <div class="text-4xl font-black text-white uppercase leading-none text-shadow">
                                КАК СОЗДАТЬ<br/><span class="text-[#22d3ee]">СИСТЕМУ?</span>
                            </div>
                         </div>
                    </div>
                    <div class="w-full md:w-1/3 text-xs text-gray-400 space-y-2">
                        <strong class="text-white block mb-2">Правила обложек:</strong>
                        <div class="flex gap-2"><span class="text-[#22d3ee]">✓</span> Крупная типографика (читается с телефона)</div>
                        <div class="flex gap-2"><span class="text-[#22d3ee]">✓</span> Контрастные цвета (Cyan/Red)</div>
                        <div class="flex gap-2"><span class="text-[#22d3ee]">✓</span> Эмоциональное лицо спикера (справа)</div>
                        <div class="flex gap-2"><span class="text-[#22d3ee]">✓</span> Темный фон + неоновое свечение</div>
                    </div>
                 </div>
            </div>

            <!-- TELEGRAM -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                 <div class="flex items-center gap-3 mb-6 text-[#3b82f6]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    <h4 class="font-bold text-white">Telegram Post</h4>
                 </div>
                 <div class="flex flex-col md:flex-row gap-8">
                    <div class="w-64 aspect-[4/3] bg-gradient-to-br from-[#3b82f6] to-[#9333ea] rounded-lg relative flex items-center justify-center p-4 text-center">
                        <div class="text-white font-black text-xl uppercase leading-tight drop-shadow-md">
                            5 ОШИБОК<br/>СОБСТВЕННИКА
                        </div>
                    </div>
                    <div class="flex-1 space-y-4">
                         <div class="p-4 bg-[#0B0F19] rounded border border-gray-800 text-sm">
                            <strong class="text-white block mb-1">Хаос убивает прибыль.</strong>
                            <p class="text-gray-400 text-xs">Разобрал типичные ошибки, из-за которых вы живете на работе. Читайте в статье...</p>
                            <button class="w-full mt-3 py-2 bg-[#22d3ee] text-black font-bold text-xs rounded hover:bg-white transition">Читать статью</button>
                         </div>
                         <div class="text-xs text-gray-400 space-y-1">
                            <div class="flex gap-2"><span class="text-[#3b82f6]">✓</span> Картинка 4:3 или 1:1</div>
                            <div class="flex gap-2"><span class="text-[#3b82f6]">✓</span> Заголовок на картинке крупно</div>
                            <div class="flex gap-2"><span class="text-[#3b82f6]">✓</span> Текст поста структурирован (списки, абзацы)</div>
                         </div>
                    </div>
                 </div>
            </div>

            <!-- LINKEDIN -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                 <div class="flex items-center gap-3 mb-6 text-[#0a66c2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <h4 class="font-bold text-white">LinkedIn Carousel</h4>
                 </div>
                 <div class="flex flex-col md:flex-row gap-8">
                    <div class="w-64 aspect-[4/5] bg-white text-black p-6 flex flex-col justify-between rounded relative">
                        <div>
                            <div class="flex items-center gap-2 mb-6">
                                <div class="w-6 h-6 bg-black text-white text-[8px] flex items-center justify-center font-bold">R</div>
                                <div class="text-[8px] font-bold text-gray-500 uppercase">РУСЛАН ЮМАГУЛОВ</div>
                            </div>
                            <div class="text-2xl font-black uppercase leading-none mb-2">КАК ВЫЙТИ ИЗ <span class="text-[#3b82f6]">ОПЕРАЦИОНКИ?</span></div>
                            <div class="text-[10px] text-gray-500 mt-2">Пошаговый план для CEO</div>
                        </div>
                        <div class="flex justify-between items-center border-t border-gray-200 pt-3">
                            <span class="text-[10px] font-mono">01 / 07</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                    </div>
                    <div class="flex-1 text-xs text-gray-400 space-y-2">
                         <strong class="text-white block mb-2">Карусели (PDF):</strong>
                        <div class="flex gap-2"><span class="text-white">✓</span> Светлый фон (белый/серый) для контраста в ленте</div>
                        <div class="flex gap-2"><span class="text-white">✓</span> Формат 4:5 (вертикальный)</div>
                        <div class="flex gap-2"><span class="text-white">✓</span> Крупные заголовки</div>
                        <div class="flex gap-2"><span class="text-white">✓</span> Навигация (слайд X из Y) внизу</div>
                    </div>
                 </div>
            </div>

            <!-- EMAIL -->
            <div class="p-8 bg-[#111827] border border-gray-800 rounded-xl">
                 <div class="flex items-center gap-3 mb-6 text-[#d946ef]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <h4 class="font-bold text-white">Email Newsletter</h4>
                 </div>
                 <div class="flex flex-col md:flex-row gap-8">
                    <div class="w-full md:w-1/2 bg-white text-black p-6 rounded shadow-lg">
                        <div class="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                            <span class="font-black">BRAND</span>
                            <span class="text-[10px] text-gray-400 uppercase">Weekly Digest</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Привет, Руслан!</h3>
                        <p class="text-xs text-gray-600 mb-4 leading-relaxed">На этой неделе мы разобрали кейс компании Medion. Рост прибыли x3 за 2 года. Как это было?</p>
                        <button class="bg-black text-white text-xs font-bold px-4 py-2 rounded mb-6">Читать кейс</button>
                        <div class="bg-gray-100 p-2 text-[8px] text-center text-gray-500 rounded">© 2024 Brand System</div>
                    </div>
                    <div class="flex-1 text-xs text-gray-400 space-y-2">
                         <strong class="text-white block mb-2">Email стиль:</strong>
                        <div class="flex gap-2"><span class="text-[#d946ef]">✓</span> Минимализм, белый фон (хорошо читается)</div>
                        <div class="flex gap-2"><span class="text-[#d946ef]">✓</span> Черно-белая гамма с редкими акцентами</div>
                        <div class="flex gap-2"><span class="text-[#d946ef]">✓</span> Кнопки черные или Cyan</div>
                    </div>
                 </div>
            </div>

          </div>
        `
      },
      {
        id: 'document-styling',
        englishTitle: 'Document Styling',
        russianTitle: 'Оформление документов',
        tags: ['brand', 'design'],
        related: ['logobook'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Правила оформления для PDF (светлая тема) и цифровых презентаций (темная тема).</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- СВЕТЛАЯ ТЕМА (PDF / PRINT) -->
            <div class="space-y-4">
                <h3 class="text-white font-bold text-lg">Светлая тема (Print / PDF)</h3>
                <div class="p-1 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                    <div class="bg-white text-black p-12 rounded-lg relative overflow-hidden">
                        <!-- MOCKUP DOCUMENT -->
                        <div class="absolute top-8 right-8 text-xs font-mono text-gray-300">A4 / PDF</div>
                        
                        <div class="flex items-center gap-2 mb-12">
                            <div class="w-8 h-8 bg-black text-white text-xs flex items-center justify-center font-bold rounded">R</div>
                            <div class="font-black text-lg">BRAND</div>
                        </div>

                        <h1 class="text-3xl font-bold text-black mb-2">Коммерческое предложение</h1>
                        <p class="text-sm text-gray-500 mb-8 border-b border-gray-200 pb-4">Оцифровка бизнес-процессов / Июль 2025</p>

                        <h2 class="text-lg font-bold text-black mb-2">1. Диагностика</h2>
                        <p class="text-sm text-gray-700 leading-relaxed mb-6">На первом этапе мы проводим аудит текущих процессов, чтобы выявить "узкие места". Это позволяет нам составить точную карту проблем и...</p>
                    </div>
                </div>
            </div>

            <!-- ТЕМНАЯ ТЕМА (DIGITAL) -->
            <div class="space-y-4">
                 <h3 class="text-white font-bold text-lg">Темная тема (Digital)</h3>
                 <div class="p-1 rounded-xl bg-gradient-to-br from-[#22d3ee]/20 to-transparent border border-gray-800">
                    <div class="bg-[#0B0F19] text-white p-12 rounded-lg relative overflow-hidden">
                        <!-- MOCKUP DOCUMENT -->
                        <div class="absolute top-8 right-8 text-xs font-mono text-gray-700">16:9 / PITCH</div>
                        
                        <div class="flex items-center gap-2 mb-12">
                           <img src="logo-ry.png" alt="RY Logo" class="h-8 w-auto object-contain" />
                        </div>

                        <h1 class="text-3xl font-bold text-white mb-2">Анализ текущей ситуации</h1>
                        <p class="text-sm text-gray-500 mb-8 border-b border-gray-800 pb-4">Проект Medion / Июль 2025</p>

                        <h2 class="text-lg font-bold text-[#22d3ee] mb-2">Проблема: Рассинхрон отделов</h2>
                        <p class="text-sm text-gray-400 leading-relaxed mb-6">Отдел продаж не видит актуальные данные от производства, что приводит к срыву сроков и потере до 20% маржинальности.</p>
                    </div>
                </div>
            </div>

          </div>
        `
      },
      {
        id: 'grid-system',
        englishTitle: 'Grid & Spacing',
        russianTitle: 'Сетка и отступы',
        tags: ['ui', 'ux', 'layout'],
        related: ['colors-typography', 'project-structure'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Фундамент верстки. Система отступов кратна 4px (Tailwind Scale). Используется 12-колоночная сетка.</p>
          
          <!-- 1. ИНТЕРАКТИВНАЯ СЕТКА -->
          <h3 class="text-white font-bold text-lg mb-4">Grid System (12 Col)</h3>
          <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl mb-12 relative overflow-hidden group/container">
             <!-- Фоновая сетка для красоты -->
             <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
             
             <div class="relative z-10 grid grid-cols-12 gap-2 h-16">
                 <!-- Генерируем 12 колонок с hover-эффектом -->
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">1</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">2</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">3</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">4</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">5</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">6</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">7</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">8</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">9</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">10</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">11</div>
                 <div class="bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded flex items-center justify-center text-[10px] text-[#22d3ee] font-mono hover:bg-[#22d3ee] hover:text-black hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-crosshair transform hover:-translate-y-1">12</div>
             </div>
             <p class="text-center text-[10px] text-gray-600 mt-4 font-mono uppercase tracking-widest group-hover/container:text-[#22d3ee] transition-colors">Fluid Container / Gap-2 (8px)</p>
          </div>

          <!-- 2. BREAKPOINTS (АДАПТИВ) -->
          <h3 class="text-white font-bold text-lg mb-4">Breakpoints (Адаптив)</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
             <!-- Mobile -->
             <div class="p-4 border border-gray-800 bg-[#0B0F19] rounded-lg hover:border-[#3b82f6] transition-colors group">
                <div class="flex items-center gap-3 mb-2 text-[#3b82f6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    <span class="font-bold text-sm text-white">Mobile</span>
                </div>
                <div class="text-xs font-mono text-gray-500 mb-1">sm: 640px</div>
                <div class="w-full h-1 bg-gray-800 rounded overflow-hidden group-hover:bg-[#3b82f6]/20 transition-colors"><div class="w-1/3 h-full bg-[#3b82f6]"></div></div>
                <p class="text-[10px] text-gray-400 mt-2">1 колонка. Отступы px-4.</p>
             </div>

             <!-- Tablet -->
             <div class="p-4 border border-gray-800 bg-[#0B0F19] rounded-lg hover:border-[#d946ef] transition-colors group">
                <div class="flex items-center gap-3 mb-2 text-[#d946ef]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    <span class="font-bold text-sm text-white">Tablet</span>
                </div>
                <div class="text-xs font-mono text-gray-500 mb-1">md: 768px</div>
                <div class="w-full h-1 bg-gray-800 rounded overflow-hidden group-hover:bg-[#d946ef]/20 transition-colors"><div class="w-2/3 h-full bg-[#d946ef]"></div></div>
                <p class="text-[10px] text-gray-400 mt-2">2-6 колонок. Отступы px-6.</p>
             </div>

             <!-- Desktop -->
             <div class="p-4 border border-gray-800 bg-[#0B0F19] rounded-lg hover:border-[#22d3ee] transition-colors group">
                <div class="flex items-center gap-3 mb-2 text-[#22d3ee]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    <span class="font-bold text-sm text-white">Desktop</span>
                </div>
                <div class="text-xs font-mono text-gray-500 mb-1">lg: 1024px / xl: 1280px</div>
                <div class="w-full h-1 bg-gray-800 rounded overflow-hidden group-hover:bg-[#22d3ee]/20 transition-colors"><div class="w-full h-full bg-[#22d3ee]"></div></div>
                <p class="text-[10px] text-gray-400 mt-2">12 колонок. Отступы px-8+.</p>
             </div>
          </div>

          <!-- 3. SPACING SCALE (ШКАЛА ОТСТУПОВ) -->
          <h3 class="text-white font-bold text-lg mb-6">Spacing Scale (Система отступов)</h3>
          <div class="space-y-3 mb-12">
             
             <!-- px-2 -->
             <div class="flex items-center gap-6 group">
                <div class="w-24 text-xs font-mono text-[#d946ef] group-hover:text-white transition-colors">px-2 (8px)</div>
                <div class="h-6 bg-[#d946ef] w-2 rounded animate-pulse"></div>
                <div class="text-xs text-gray-500 group-hover:text-[#d946ef] transition-colors">Микро-отступы: внутри иконок, тегов.</div>
             </div>

             <!-- px-4 -->
             <div class="flex items-center gap-6 group">
                <div class="w-24 text-xs font-mono text-[#d946ef] group-hover:text-white transition-colors">px-4 (16px)</div>
                <div class="h-6 bg-[#d946ef] w-4 rounded animate-pulse"></div>
                <div class="text-xs text-gray-500 group-hover:text-[#d946ef] transition-colors">Стандарт: отступы в кнопках, между мелкими элементами.</div>
             </div>

             <!-- px-6 -->
             <div class="flex items-center gap-6 group">
                <div class="w-24 text-xs font-mono text-[#d946ef] group-hover:text-white transition-colors">px-6 (24px)</div>
                <div class="h-6 bg-[#d946ef] w-6 rounded animate-pulse"></div>
                <div class="text-xs text-gray-500 group-hover:text-[#d946ef] transition-colors">Контейнеры: паддинги карточек (Mobile).</div>
             </div>

             <!-- px-8 -->
             <div class="flex items-center gap-6 group">
                <div class="w-24 text-xs font-mono text-[#d946ef] group-hover:text-white transition-colors">px-8 (32px)</div>
                <div class="h-6 bg-[#d946ef] w-8 rounded animate-pulse"></div>
                <div class="text-xs text-gray-500 group-hover:text-[#d946ef] transition-colors">Крупные блоки: паддинги карточек (Desktop), отступы заголовков.</div>
             </div>

             <!-- px-16 -->
             <div class="flex items-center gap-6 group">
                <div class="w-24 text-xs font-mono text-[#d946ef] group-hover:text-white transition-colors">px-16 (64px)</div>
                <div class="h-6 bg-[#d946ef] w-16 rounded animate-pulse"></div>
                <div class="text-xs text-gray-500 group-hover:text-[#d946ef] transition-colors">Глобальные: отступы между секциями сайта.</div>
             </div>
          </div>

          <!-- 4. LAYOUT EXAMPLE (ПРИМЕР СБОРКИ) -->
          <h3 class="text-white font-bold text-lg mb-6">Layout Composition (Пример сборки)</h3>
          <div class="p-1 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
             <div class="bg-[#05080f] rounded-lg p-4 overflow-hidden relative">
                <!-- UI MOCKUP -->
                <div class="flex gap-4 h-48">
                    <!-- Sidebar -->
                    <div class="w-1/4 h-full rounded border border-dashed border-[#22d3ee]/30 bg-[#22d3ee]/5 flex flex-col items-center justify-center gap-2 p-2 hover:bg-[#22d3ee]/10 transition-colors">
                        <div class="w-8 h-8 rounded bg-[#22d3ee]/20"></div>
                        <div class="w-full h-2 bg-[#22d3ee]/20 rounded"></div>
                        <div class="w-full h-2 bg-[#22d3ee]/20 rounded"></div>
                        <div class="text-[10px] text-[#22d3ee] font-mono mt-2">w-1/4</div>
                    </div>
                    
                    <div class="flex-1 flex flex-col gap-4">
                        <!-- Header -->
                        <div class="w-full h-12 rounded border border-dashed border-[#d946ef]/30 bg-[#d946ef]/5 flex items-center px-4 justify-between hover:bg-[#d946ef]/10 transition-colors">
                             <div class="w-20 h-2 bg-[#d946ef]/20 rounded"></div>
                             <div class="flex gap-2">
                                <div class="w-4 h-4 rounded-full bg-[#d946ef]/20"></div>
                                <div class="w-4 h-4 rounded-full bg-[#d946ef]/20"></div>
                             </div>
                        </div>
                        
                        <!-- Content Grid -->
                        <div class="flex-1 grid grid-cols-2 gap-4">
                            <div class="rounded border border-dashed border-gray-600 bg-[#111827] flex items-center justify-center text-gray-600 text-xs font-mono hover:border-gray-400 transition-colors">Content</div>
                            <div class="rounded border border-dashed border-gray-600 bg-[#111827] flex items-center justify-center text-gray-600 text-xs font-mono hover:border-gray-400 transition-colors">Content</div>
                            <div class="col-span-2 rounded border border-dashed border-gray-600 bg-[#111827] flex items-center justify-center text-gray-600 text-xs font-mono hover:border-gray-400 transition-colors">Full Width Block</div>
                        </div>
                    </div>
                </div>
                
                <!-- Legend -->
                <div class="mt-4 flex gap-4 justify-center">
                    <div class="flex items-center gap-2 text-[10px] text-gray-500">
                        <div class="w-2 h-2 rounded bg-[#22d3ee]"></div> Sidebar
                    </div>
                    <div class="flex items-center gap-2 text-[10px] text-gray-500">
                        <div class="w-2 h-2 rounded bg-[#d946ef]"></div> Header
                    </div>
                    <div class="flex items-center gap-2 text-[10px] text-gray-500">
                        <div class="w-2 h-2 rounded border border-gray-600 border-dashed"></div> Gap-4 (16px)
                    </div>
                </div>

             </div>
          </div>
        `
      },
    ]
  },

  // --- ТОМ 3: UI KIT (КОМПОНЕНТЫ) ---
  {
    id: 'uikit',
    title: 'UI KIT (КОМПОНЕНТЫ)',
    chapters: [
      {
        id: 'inputs',
        englishTitle: 'Inputs & Forms',
        russianTitle: 'Поля ввода',
        tags: ['ui', 'code', 'forms'],
        related: ['cards', 'ui-elements'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Элементы для ввода данных. Акцент на состоянии фокуса.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6 bg-[#111827] rounded-xl border border-gray-800 space-y-4">
                <h3 class="text-white font-bold mb-2">Standard Input</h3>
                <div class="space-y-2">
                    <label class="text-xs text-gray-500 uppercase font-semibold">Username</label>
                    <input type="text" placeholder="enter_username" class="w-full bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 focus:outline-none focus:border-[#22d3ee] focus:ring-1 focus:ring-[#22d3ee] transition-all font-mono text-sm" />
                </div>
            </div>
             <div class="p-6 bg-[#111827] rounded-xl border border-gray-800 space-y-4">
                <h3 class="text-white font-bold mb-2">Toggles</h3>
                <div class="flex items-center justify-between p-3 bg-[#0B0F19] rounded-lg border border-gray-800">
                    <span class="text-gray-300 text-sm">Dev Mode</span>
                    <div class="w-10 h-5 bg-[#22d3ee]/20 rounded-full relative cursor-pointer border border-[#22d3ee]/30">
                        <div class="absolute right-0.5 top-0.5 w-4 h-4 bg-[#22d3ee] rounded-full shadow-[0_0_8px_#22d3ee]"></div>
                    </div>
                </div>
            </div>
          </div>
        `
      },
      {
        id: 'cards',
        englishTitle: 'Cards & Panels',
        russianTitle: 'Карточки',
        tags: ['ui', 'code', 'layout'],
        related: ['inputs', 'grid-system'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Стили контейнеров для группировки контента.</p>
          
          <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-[#22d3ee] to-[#9333ea] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
              <div class="relative p-8 bg-[#0B0F19] rounded-xl border border-gray-800">
                  <h3 class="text-xl font-bold text-white mb-2">Glow Card</h3>
                  <p class="text-gray-400 text-sm mb-4">Карточка с неоновым свечением при наведении.</p>
                  <div class="w-full h-1 bg-gray-800 rounded overflow-hidden">
                      <div class="h-full bg-[#22d3ee] w-2/3 shadow-[0_0_10px_#22d3ee]"></div>
                  </div>
              </div>
          </div>
        `
      }
    ]
  },

  // --- ТОМ 4: SYSTEM API (КОД) [НОВОЕ] ---
  {
    id: 'system-api',
    title: '//_SYSTEM_API (КОД)',
    chapters: [
      {
        id: 'button-component',
        englishTitle: 'Button.tsx',
        russianTitle: 'Компонент кнопки',
        tags: ['code', 'react', 'ui'],
        related: ['ui-elements', 'tech-stack'],
        content: `
          <p class="mb-6 text-lg text-gray-400">Исходный код основного компонента кнопки на React / Tailwind.</p>

          <div class="relative group">
             <div class="absolute -inset-0.5 bg-[#22d3ee] opacity-10 blur rounded-xl"></div>
             <div class="relative bg-[#0B0F19] rounded-xl border border-gray-800 overflow-hidden">
                <div class="flex items-center px-4 py-2 border-b border-gray-800 bg-[#111827]">
                   <div class="flex gap-1.5">
                      <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                   </div>
                   <span class="ml-4 text-xs text-gray-500 font-mono">src/components/ui/Button.tsx</span>
                </div>
                <pre class="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
<span class="text-[#d946ef]">import</span> React <span class="text-[#d946ef]">from</span> <span class="text-[#a5f3fc]">'react'</span>;
<span class="text-[#d946ef]">import</span> { cn } <span class="text-[#d946ef]">from</span> <span class="text-[#a5f3fc]">'@/lib/utils'</span>;

<span class="text-[#6b7280]">// Типы пропсов</span>
<span class="text-[#d946ef]">interface</span> <span class="text-[#fcd34d]">ButtonProps</span> <span class="text-[#d946ef]">extends</span> React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {
  variant?: <span class="text-[#a5f3fc]">'primary'</span> | <span class="text-[#a5f3fc]">'secondary'</span> | <span class="text-[#a5f3fc]">'ghost'</span>;
  glow?: <span class="text-[#d946ef]">boolean</span>;
}

<span class="text-[#d946ef]">export const</span> <span class="text-[#fcd34d]">Button</span> = ({ 
  className, 
  variant = <span class="text-[#a5f3fc]">'primary'</span>, 
  glow = <span class="text-[#d946ef]">false</span>, 
  children, 
  ...props 
}: ButtonProps) => {
  
  <span class="text-[#d946ef]">return</span> (
    &lt;<span class="text-[#22d3ee]">button</span>
      className={cn(
        <span class="text-[#a5f3fc]">'px-6 py-2.5 rounded-lg font-bold transition-all duration-300'</span>,
        <span class="text-[#a5f3fc]">'flex items-center justify-center gap-2'</span>,
        <span class="text-[#6b7280]">// Variants</span>
        variant === <span class="text-[#a5f3fc]">'primary'</span> && 
          <span class="text-[#a5f3fc]">'bg-[#22d3ee] text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'</span>,
        variant === <span class="text-[#a5f3fc]">'secondary'</span> && 
          <span class="text-[#a5f3fc]">'bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/30'</span>,
        
        <span class="text-[#6b7280]">// Glow Effect</span>
        glow && <span class="text-[#a5f3fc]">'shadow-[0_0_15px_#22d3ee]'</span>,
        className
      )}
      {...props}
    &gt;
      {children}
    &lt;/<span class="text-[#22d3ee]">button</span>&gt;
  );
};
                </pre>
             </div>
          </div>
        `
      },
      {
        id: 'tech-stack',
        englishTitle: 'Technology Stack',
        russianTitle: 'Стек технологий',
        tags: ['system', 'code'],
        related: ['project-structure', 'changelog'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Ядро системы. Основные зависимости и библиотеки, обеспечивающие работу приложения.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- REACT -->
            <div class="p-5 bg-[#0B0F19] border border-gray-800 rounded-lg flex items-center justify-between group hover:border-[#22d3ee]/50 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"></circle><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                    </div>
                    <div>
                        <div class="text-white font-bold text-sm">React</div>
                        <div class="text-xs text-gray-500 font-mono">Core Library</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-[#22d3ee] font-mono text-xs">v18.2.0</div>
                    <div class="text-[10px] text-green-500 uppercase tracking-wider mt-1">Active</div>
                </div>
            </div>

            <!-- TYPESCRIPT -->
            <div class="p-5 bg-[#0B0F19] border border-gray-800 rounded-lg flex items-center justify-between group hover:border-[#3b82f6]/50 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
                        <span class="font-bold text-lg">TS</span>
                    </div>
                    <div>
                        <div class="text-white font-bold text-sm">TypeScript</div>
                        <div class="text-xs text-gray-500 font-mono">Static Typing</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-[#3b82f6] font-mono text-xs">v5.0.2</div>
                    <div class="text-[10px] text-green-500 uppercase tracking-wider mt-1">Strict</div>
                </div>
            </div>

            <!-- TAILWIND -->
            <div class="p-5 bg-[#0B0F19] border border-gray-800 rounded-lg flex items-center justify-between group hover:border-[#22d3ee]/50 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.7 1.3 3 3 3s3-1.3 3-3z"></path><path d="M5 19c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.7 1.3 3 3 3s3-1.3 3-3z"></path><path d="M11.5 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.7 1.3 3 3 3s3-1.3 3-3z"></path></svg>
                    </div>
                    <div>
                        <div class="text-white font-bold text-sm">Tailwind CSS</div>
                        <div class="text-xs text-gray-500 font-mono">Utility-First</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-[#22d3ee] font-mono text-xs">v3.3.0</div>
                    <div class="text-[10px] text-green-500 uppercase tracking-wider mt-1">JIT Mode</div>
                </div>
            </div>

            <!-- FRAMER MOTION -->
            <div class="p-5 bg-[#0B0F19] border border-gray-800 rounded-lg flex items-center justify-between group hover:border-[#d946ef]/50 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded bg-[#d946ef]/10 flex items-center justify-center text-[#d946ef]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    </div>
                    <div>
                        <div class="text-white font-bold text-sm">Framer Motion</div>
                        <div class="text-xs text-gray-500 font-mono">Animation Engine</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-[#d946ef] font-mono text-xs">v10.12</div>
                    <div class="text-[10px] text-green-500 uppercase tracking-wider mt-1">60 FPS</div>
                </div>
            </div>

          </div>
        `
      },
      {
        id: 'project-structure',
        englishTitle: 'Project Map',
        russianTitle: 'Карта проекта',
        tags: ['system', 'meta'],
        related: ['tech-stack'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Архитектура файловой системы. Основные модули и связи.</p>
          
          <!-- Интерактивная карта -->
          <[PROJECT_MAP]>
          
          <div class="mt-8 p-4 bg-[#111827] border border-[#22d3ee]/30 rounded-lg flex gap-4">
             <div class="text-[#22d3ee] shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
             <div>
                <h4 class="text-white font-bold text-sm">Feature-Sliced Design (Lite)</h4>
                <p class="text-xs text-gray-400 mt-1">Мы используем гибридную архитектуру: компоненты общего назначения лежат в <code>/components</code>, а сложная бизнес-логика изолирована в <code>/features</code> (например, Blueprint и BpmnMap).</p>
             </div>
          </div>
        `
      },
    ]
  },

  // --- ТОМ 5: БИЗНЕС-ПРОТОКОЛЫ (ИЗ ТВОИХ МАКЕТОВ) ---

  {
    id: 'protocols',
    title: 'BUSINESS PROTOCOLS',
    chapters: [
      {
        id: 'chaos-audit',
        englishTitle: 'Protocol: Chaos Audit',
        russianTitle: 'Протокол: Аудит Хаоса',
        tags: ['process', 'strategy', 'widget'],
        related: ['chaos-calc-widget', 'product-landing'],
        content: `
          <p class="mb-4 text-lg text-gray-400">Интерактивный протокол диагностики. Отмечайте чекбоксы, чтобы увидеть изменение состояния системы.</p>
          <p class="mb-8 text-xs text-gray-500 font-mono">Примечание: Для демонстрации добавлена панель управления "призрачными баллами", чтобы симулировать заполнение всех 30 пунктов.</p>
          
          <!-- ЖИВОЙ КОМПОНЕНТ -->
          <[CHAOS_AUDIT_DEMO]>
        `
      },
      {
        id: 'system-pages',
        englishTitle: 'System Pages (404)',
        russianTitle: 'Служебные страницы',
        tags: ['ui', 'ux', 'system'],
        related: ['logobook', 'colors-typography'],
                content: `
          <p class="mb-6 text-lg text-gray-400">Дизайн страницы ошибки 404. Стиль: Glitch / Terminal.</p>
          
          <div class="w-full aspect-video rounded-xl overflow-hidden border border-gray-800 relative bg-[#05080f] flex items-center justify-center flex-col">
            
            <!-- Имитация 404 -->
            <h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#9333ea] mb-4">404</h1>
            
            <div class="font-mono text-xs text-gray-500 w-64 p-4 border border-gray-800 rounded bg-[#0B0F19] mb-6">
              <div class="text-red-500 mb-2">>_ system_log.txt</div>
              <div class="text-gray-600">> Initiating search protocol...</div>
              <div class="text-red-400">> Error: Path segment not found.</div>
              <div class="text-[#22d3ee] animate-pulse">> Waiting for user input_</div>
            </div>
            

            <button class="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform">
              Вернуться на главную
            </button>
            
          </div>
        `
      },
      {
        id: 'bpmn-logic',
        englishTitle: 'BPMN Architecture',
        russianTitle: 'Архитектура процессов',
        tags: ['process', 'strategy', 'system'],
        related: ['chaos-audit'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Визуальный язык для построения бизнес-процессов. Основан на стандартах BPMN 2.0 с адаптацией под Cyberpunk UI.</p>
          
          <h3 class="text-white font-bold text-lg mb-4">Логика потока данных (Signal Flow)</h3>
          <p class="mb-4 text-sm text-gray-400">Пример взаимодействия между узлами. Сигнал передается асинхронно, активируя целевой узел при достижении.</p>

          <!-- ДЕМО КОМПОНЕНТ -->
          <[BPMN_FLOW_DEMO]>

          <h3 class="text-white font-bold text-lg mb-4 mt-8">Типы узлов (Nodes)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div class="p-4 border border-gray-800 bg-[#111827] rounded flex items-center gap-4">
                <div class="w-10 h-10 rounded bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <div>
                    <div class="text-white font-bold">Start Event</div>
                    <div class="text-xs text-gray-500">Начало цепочки. Триггер запуска.</div>
                </div>
             </div>

             <div class="p-4 border border-gray-800 bg-[#111827] rounded flex items-center gap-4">
                <div class="w-10 h-10 rounded bg-[#22d3ee]/20 text-[#22d3ee] flex items-center justify-center border border-[#22d3ee]/50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                </div>
                <div>
                    <div class="text-white font-bold">Task / Action</div>
                    <div class="text-xs text-gray-500">Действие системы или человека.</div>
                </div>
             </div>
             
             <div class="p-4 border border-gray-800 bg-[#111827] rounded flex items-center gap-4">
                <div class="w-10 h-10 rounded bg-[#d946ef]/20 text-[#d946ef] flex items-center justify-center border border-[#d946ef]/50 transform rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                </div>
                <div>
                    <div class="text-white font-bold">Gateway</div>
                    <div class="text-xs text-gray-500">Разветвление логики (И / ИЛИ).</div>
                </div>
             </div>

             <div class="p-4 border border-gray-800 bg-[#111827] rounded flex items-center gap-4">
                <div class="w-10 h-10 rounded bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <div>
                    <div class="text-white font-bold">End Event</div>
                    <div class="text-xs text-gray-500">Завершение процесса.</div>
                </div>
             </div>
          </div>
        `
      },
      {
        id: 'system-blueprint',
        englishTitle: 'Product: Blueprint System',
        russianTitle: 'Продукт: Дизайн-система',
        tags: ['product', 'system', 'meta'],
        related: ['product-landing', 'project-structure'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Архитектурная база знаний. Единый источник правды для всех проектов.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
             <!-- Карточка 1: Цель -->
             <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#22d3ee] transition-all duration-300 group">
                <div class="w-10 h-10 rounded bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee] mb-4 group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <h4 class="text-white font-bold mb-2">База знаний</h4>
                <p class="text-xs text-gray-400">Централизованное хранилище смыслов, стилей и кода. Доступно 24/7 для всей команды.</p>
             </div>

             <!-- Карточка 2: Технологии -->
             <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#3b82f6] transition-all duration-300 group">
                <div class="w-10 h-10 rounded bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h4 class="text-white font-bold mb-2">Live Code</h4>
                <p class="text-xs text-gray-400">Не просто PDF, а живой React-код. Компоненты рендерятся в реальном времени.</p>
             </div>

             <!-- Карточка 3: Масштабируемость -->
             <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-[#d946ef] transition-all duration-300 group">
                <div class="w-10 h-10 rounded bg-[#d946ef]/10 flex items-center justify-center text-[#d946ef] mb-4 group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a4.5 4.5 0 0 0-4.5 4.5v0A4.5 4.5 0 0 0 9.5 14H17"></path></svg>
                </div>
                <h4 class="text-white font-bold mb-2">Атомарность</h4>
                <p class="text-xs text-gray-400">Система разбита на молекулы (цвета, шрифты) и организмы (сложные виджеты), что позволяет легко собирать новые продукты.</p>
             </div>
          </div>
        `
      },
      {
        id: 'product-landing',
        englishTitle: 'Product: Landing Page',
        russianTitle: 'Продукт: Лендинг',
        tags: ['product', 'strategy'],
        related: ['system-blueprint', 'chaos-calc-widget'],
        content: `
          <p class="mb-4 text-lg text-gray-400">Основная точка входа для клиентов. Высококонверсионная посадочная страница.</p>
          <div class="flex items-center gap-2 mb-8">
             <span class="px-2 py-1 bg-green-500/20 text-green-500 text-[10px] font-bold rounded border border-green-500/30 uppercase">Production Ready</span>
             <span class="text-xs text-gray-500 font-mono">v2.1 / Next.js / Tailwind</span>
          </div>

          <!-- ПРЕВЬЮ ЛЕНДИНГА (СКРИНШОТ) -->
          <[LANDING_PREVIEW]>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-12">
             <div class="p-4 bg-[#111827] border border-gray-800 rounded flex items-start gap-3">
                <div class="mt-1 text-[#22d3ee]">01</div>
                <div>
                    <h5 class="text-white font-bold text-sm">Оффер (Hero)</h5>
                    <p class="text-xs text-gray-500">Четкое обещание результата (X3 рост) и диагностика проблемы.</p>
                </div>
             </div>
             <div class="p-4 bg-[#111827] border border-gray-800 rounded flex items-start gap-3">
                <div class="mt-1 text-[#22d3ee]">02</div>
                <div>
                    <h5 class="text-white font-bold text-sm">Калькулятор потерь</h5>
                    <p class="text-xs text-gray-500">Интерактивный блок вовлечения. Показывает цену бездействия.</p>
                </div>
             </div>
             <div class="p-4 bg-[#111827] border border-gray-800 rounded flex items-start gap-3">
                <div class="mt-1 text-[#22d3ee]">03</div>
                <div>
                    <h5 class="text-white font-bold text-sm">Кейсы (Social Proof)</h5>
                    <p class="text-xs text-gray-500">Реальные цифры и результаты внедрения системы.</p>
                </div>
             </div>
             <div class="p-4 bg-[#111827] border border-gray-800 rounded flex items-start gap-3">
                <div class="mt-1 text-[#22d3ee]">04</div>
                <div>
                    <h5 class="text-white font-bold text-sm">Личная история</h5>
                    <p class="text-xs text-gray-500">Блок доверия. Экспертиза и опыт автора.</p>
                </div>
             </div>
          </div>

          <!-- ЖИВОЙ ВИДЖЕТ КАЛЬКУЛЯТОРА (ИЗ БЛОКА 02) -->
          <h3 class="text-white font-bold text-lg mb-4">Live Demo: Блок "Калькулятор"</h3>
          <p class="mb-4 text-sm text-gray-400">Полностью функциональный виджет, встроенный в лендинг. Попробуйте изменить параметры.</p>
          
          <[CHAOS_CALCULATOR_NEW]>
        `
      },
    ]
  },

  // --- ТОМ 6: ROADMAP (ПЛАНЫ) ---
  {
    id: 'roadmap',
    title: 'ROADMAP (ПЛАНЫ)',
    chapters: [
      {
        id: 'future-ideas',
        englishTitle: 'Roadmap v2.1',
        russianTitle: 'План развития (Канбан)',
        tags: ['system', 'strategy', 'meta'],
        related: ['ai-context'],
        content: `
          <p class="mb-8 text-lg text-gray-400">Стратегический план улучшений, представленный в виде канбан-доски. Здесь мы отслеживаем жизненный цикл идей: от задумки до реализации.</p>
          
          <[ROADMAP_BOARD]>
        `
      },
    ]
  },

  // --- ТОМ 7: AI & AUTOMATION (НОВЫЙ) ---
  {
    id: 'automation',
    title: '//_AI_AUTOMATION',
    chapters: [
      {
        id: 'ai-context',
        englishTitle: 'AI Context (Master Prompt)',
        russianTitle: 'Контекст для ИИ (Мастер-промпт)',
        tags: ['ai', 'system', 'meta'],
        related: ['prompt-library'],
        content: `
          <p class="mb-6 text-lg text-gray-400">Это единая страница-справка о проекте. Используйте её как "контекст" для ИИ, чтобы получать релевантные ответы.</p>
          
          <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl prose prose-invert prose-sm max-w-none prose-pre:bg-[#0B0F19]">
              <h3>Обо мне и проекте:</h3>
              <p>Меня зовут Руслан Юмагулов. Я бизнес-архитектор. Моя миссия — превращать операционный хаос в управляемую систему, возвращая владельцу время и прибыль.</p>
              
              <h3>Ключевые продукты:</h3>
              <ul>
                  <li><strong>Project Blueprint:</strong> Интерактивная дизайн-система и база знаний (продукт, который вы сейчас видите).</li>
                  <li><strong>Product Landing:</strong> Основной сайт (ruslan-yumagulov.com), который привлекает клиентов.</li>
                  <li><strong>Chaos Calculator:</strong> Интерактивный виджет для диагностики бизнес-проблем.</li>
              </ul>

              <h3>Стек технологий:</h3>
              <p>React, TypeScript, Tailwind CSS, Vite, Framer Motion.</p>

              <h3>Голос и тон (Voice & Tone):</h3>
              <p>Прагматичный эксперт, "бизнес-хирург". Говорим четко, по делу, без "воды" и "волшебных таблеток". Акцент на цифры, факты и системный подход.</p>

              <h3>Целевая аудитория:</h3>
              <p>Владельцы бизнеса с оборотом от 10 млн/мес, которые "застряли" в операционке и хотят масштабироваться.</p>
          </div>
        `
      },
      {
        id: 'prompt-library',
        englishTitle: 'Prompt Library',
        russianTitle: 'Библиотека промптов',
        tags: ['ai', 'text', 'code'],
        related: ['ai-context'],
        content: `
            <p class="mb-6 text-lg text-gray-400">Коллекция готовых промптов для генерации кода, текста и стратегий.</p>
            <div class="space-y-4">
                <div class="p-6 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#22d3ee]/50 transition-colors group">
                    <h4 class="font-bold text-white mb-4 group-hover:text-[#22d3ee] transition-colors">Генерация React-компонента</h4>
                    <pre class="text-xs text-gray-400 bg-[#0B0F19] p-4 rounded-lg border border-gray-700 group-hover:border-[#22d3ee]/30 transition-colors whitespace-pre-wrap break-words"><code>Напиши React-компонент на TypeScript и Tailwind CSS. Название: [ИмяКомпонента]. Он должен принимать пропсы: [пропсы]. Стиль: темная тема, минимализм, акцентный цвет #22d3ee.</code></pre>
                </div>
                <div class="p-6 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#d946ef]/50 transition-colors group">
                    <h4 class="font-bold text-white mb-4 group-hover:text-[#d946ef] transition-colors">Написание поста в стиле "Бизнес-хирурга"</h4>
                    <pre class="text-xs text-gray-400 bg-[#0B0F19] p-4 rounded-lg border border-gray-700 group-hover:border-[#d946ef]/30 transition-colors whitespace-pre-wrap break-words"><code>Напиши пост для Telegram на тему "[Тема]". Аудитория: собственники бизнеса. Стиль: прагматичный эксперт, без "воды". Структура: [Боль -> Решение -> Призыв к действию].</code></pre>
                </div>
                <div class="p-6 bg-[#111827] rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
                    <h4 class="font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">Документирование кода компонента</h4>
                    <pre class="text-xs text-gray-400 bg-[#0B0F19] p-4 rounded-lg border border-gray-700 group-hover:border-blue-500/30 transition-colors whitespace-pre-wrap break-words"><code>Задача: Ты — AI-ассистент для документирования кода. Проанализируй React-компонент. Опиши его назначение и ключевые функции. Ответ верни в виде одного HTML-блока 'div' для вставки в Project Blueprint. Структура: h4 с путем к файлу, p с описанием, ul/li для функций.</code></pre>
                </div>
            </div>
        `
      },
      {
        id: 'code-reference',
        englishTitle: 'Code Reference',
        russianTitle: 'Справочник по коду',
        tags: ['ai', 'code', 'system'],
        related: ['project-structure', 'prompt-library'],
        content: `
            <p class="mb-6 text-lg text-gray-400">Документация ключевых файлов проекта. Описание функций и их взаимодействия, сгруппированное по продуктам.</p>
            
            <[CODE_REFERENCE_TABS]>
        `
      },
    ]
  },
];