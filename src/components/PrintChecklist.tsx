import React, { useEffect, useState } from 'react';
import { 
  Printer, Check, ShieldAlert, AlertTriangle, AlertCircle, 
  TrendingUp, Users, Settings, PieChart, Compass, BrainCircuit, Skull, 
  FileText, Send
} from 'lucide-react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';

// --- ИМПОРТИРУЕМ ОБА КОМПОНЕНТА ---
import AuditForm from './AuditForm'; // Форма отправки

// --- 1. УМНЫЙ КУРСОР (без изменений) ---
const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      const target = e.target as HTMLElement;
      if (!target) return;
      const computedStyle = window.getComputedStyle(target);

      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || computedStyle.cursor === 'text') {
        setCursorType('text');
        return;
      }
      const isClickable = target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.closest('.hover-target') || computedStyle.cursor === 'pointer';

      if (isClickable) {
        setCursorType('pointer');
        return;
      }
      setCursorType('default');
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <motion.div className="fixed top-0 left-0 pointer-events-none z-[9999] print-hide" style={{ x: mouseX, y: mouseY, opacity: isVisible ? 1 : 0 }}>
      <div className="relative drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
        <AnimatePresence mode="wait">
          {cursorType === 'default' && (
            <motion.svg key="default" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.15 }} width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ x: -3, y: -3 }} className="rotate-[-15deg]">
              <path d="M3 3L10.5 20.5L13.5 13.5L20.5 10.5L3 3Z" fill="#0B0F19" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" />
            </motion.svg>
          )}
          {cursorType === 'pointer' && (
            <motion.div key="pointer" initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative" style={{ x: -20, y: -20 }}>
                <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-0 left-0" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                    <circle cx="20" cy="20" r="18" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
                </motion.svg>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="19" y="8" width="2" height="6" fill="#22d3ee" />
                    <rect x="19" y="26" width="2" height="6" fill="#22d3ee" />
                    <rect x="8" y="19" width="6" height="2" fill="#22d3ee" />
                    <rect x="26" y="19" width="6" height="2" fill="#22d3ee" />
                    <circle cx="20" cy="20" r="2" fill="#22d3ee" />
                </svg>
            </motion.div>
          )}
           {cursorType === 'text' && (
             <motion.div key="text" initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: 0 }} className="-translate-x-1/2 -translate-y-1/2">
               <div className="w-[2px] h-6 bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// --- 2. ДАННЫЕ (без изменений) ---
const getIconForSection = (index: number) => {
  const icons = [TrendingUp, Users, Settings, PieChart, Compass, BrainCircuit];
  const Icon = icons[index] || ShieldAlert;
  return <Icon size={24} className="text-cyan-400" />;
};
const auditData = {
    intro: { title: "ВВЕДЕНИЕ", text: "Давайте начистоту. Хаос в бизнесе – это не «творческий беспорядок» и не «болезнь роста». Это дыры в корабле, через которые ежечасно утекает ваша чистая прибыль. Пока вы тешите себя иллюзиями о «гибкости» и «ручном управлении», ваши конкуренты строят системы и забирают вашу долю рынка." },
    sections: [
        { id: 1, heading: "ПРОДАЖИ И CRM", diagnosis: "Вы думаете, что у вас проблемы с трафиком, а на деле у вас дырявое ведро.", points: [ { id: 1, text: "Менеджеры ведут клиентов в Excel / WhatsApp", price: "Риск: Потеря базы (2-10 млн ₽)" }, { id: 2, text: "Нет четкого регламента «Следующий шаг»", price: "Сгорает 30-40% лидов" }, { id: 3, text: "Нет скриптов — продают «как умеют»", price: "Конверсия плавает в 3 раза" }, { id: 4, text: "SLA реакции на заявку > 1 часа", price: "Слив 50% бюджета" }, { id: 5, text: "Нет работы с текущей базой (LTV)", price: "Упущенные +30% к обороту" }, ], conclusions: { low: "Есть база, но контроль ослаблен. Проверьте CRM.", medium: "Отдел продаж работает вполсилы. Вы теряете горячих клиентов.", high: "КАТАСТРОФА. Вы сливаете 80% бюджета. Срочно внедрять регламенты." } },
        { id: 2, heading: "КОМАНДА И НАЙМ", diagnosis: "Вы нанимаете «хороших парней», а нужны профессиональные функции.", points: [ { id: 6, text: "Найм интуитивно, без профиля должности", price: "Убыток 3-6 окладов" }, { id: 7, text: "Нет системы адаптации (новичка кидают в бой)", price: "Полгода неэффективности" }, { id: 8, text: "Есть «незаменимые звезды» (шантаж)", price: "Риск остановки бизнеса" }, { id: 9, text: "Нет KPI — оклад за присутствие", price: "Имитация бурной деятельности" }, { id: 10, text: "Сотрудники приходят с проблемами", price: "Собственник — главный «решала»" }, ], conclusions: { low: "Команда стабильна, но есть риск зависимости от личностей.", medium: "Вы платите зарплату за «присутствие». Низкая эффективность.", high: "ЗАЛОЖНИК КОМАНДЫ. Бизнес встанет, если уйдет пара человек." } },
        { id: 3, heading: "ПРОЦЕССЫ И ОПЕРАЦИОНКА", diagnosis: "Ручное управление, которое ломается при попытке масштабирования.", points: [ { id: 11, text: "Собственник утверждает каждый счет", price: "Вы — узкое горлышко" }, { id: 12, text: "Одни и те же ошибки повторяются ежемесячно", price: "Минус 10-15% маржи" }, { id: 13, text: "Знания хранятся в головах, а не в Базе Знаний", price: "Невозможно масштабироваться" }, { id: 14, text: "Вы занимаетесь «тушением пожаров» > 50% времени", price: "Нет времени на стратегию" }, { id: 15, text: "Нельзя уехать в отпуск без падения выручки", price: "Это не бизнес, а самозанятость" }, ], conclusions: { low: "Процессы есть, но они завязаны на вас.", medium: "Ручное управление тормозит рост. Вы — узкое горлышко.", high: "ОПЕРАЦИОННЫЙ АД. Вы не владеете бизнесом, он владеет вами." } },
        { id: 4, heading: "ФИНАНСЫ И ДАННЫЕ", diagnosis: "Вы управляете самолетом, глядя в зеркало заднего вида.", points: [ { id: 16, text: "Отчет P&L собирается к 20-му числу", price: "Управление вслепую" }, { id: 17, text: "Личные деньги смешаны с бизнесом", price: "Риск кассового разрыва" }, { id: 18, text: "Не считается Unit-экономика", price: "Масштабирование убытков" }, { id: 19, text: "Кассовые разрывы «внезапны»", price: "Стресс и потеря репутации" }, { id: 20, text: "Решения на эмоциях, а не на цифрах", price: "Цена ошибки — миллионы" }, ], conclusions: { low: "Финансы под контролем, но нужна детализация.", medium: "Высокий риск кассового разрыва. Деньги бесконтрольны.", high: "ФИНАНСОВАЯ СЛЕПОТА. Вы можете обанкротиться в любой момент." } },
        { id: 5, heading: "СТРАТЕГИЯ И МАСШТАБИРОВАНИЕ", diagnosis: "Вы бежите быстро, но возможно, не в ту сторону.", points: [ { id: 21, text: "Нет оцифрованной цели на 1-3 года", price: "Движение без карты" }, { id: 22, text: "Продукт не менялся больше 2 лет", price: "Потеря актуальности" }, { id: 23, text: "Вы не знаете, кто ваш идеальный клиент (ICP)", price: "Пальба по воробьям" }, { id: 24, text: "Новые каналы привлечения не тестируются", price: "Зависимость от одного источника" }, { id: 25, text: "Вы конкурируете только ценой", price: "Путь к нулевой марже" }, ], conclusions: { low: "Есть вектор, но нет четкой карты действий.", medium: "Стагнация. Вы доедаете старую базу и старые идеи.", high: "ТУПИК. Без смены стратегии бизнес умрет в течение года." } },
        { id: 6, heading: "ЛИЧНАЯ ЭФФЕКТИВНОСТЬ", diagnosis: "Вы стали заложником собственного творения.", points: [ { id: 26, text: "Ваш календарь забит операционкой", price: "Нет времени на главное" }, { id: 27, text: "Вы не делегируете, потому что «я сделаю лучше»", price: "Потолок роста" }, { id: 28, text: "У вас нет ассистента", price: "Потерянные часы СЕО" }, { id: 29, text: "Вы работаете 24/7 и выгорели", price: "Риск для всего бизнеса" }, { id: 30, text: "Бизнес не может работать без вас и дня", price: "«Золотая клетка»" }, ], conclusions: { low: "Вы справляетесь, но ресурс на пределе.", medium: "Выгорание близко. Вы тратите время на дешевку.", high: "ЗОЛОТАЯ КЛЕТКА. Срочно выходить из операционки." } }
    ]
};
const Barcode = () => ( <div className="flex items-end gap-[2px] opacity-40 h-8"> {[...Array(30)].map((_, i) => ( <div key={i} className="bg-white" style={{ width: Math.random() > 0.5 ? '1px' : '3px', height: Math.random() > 0.3 ? '100%' : '60%' }} /> ))} </div> );
const IntroChart = () => ( <div className="relative w-full h-48 md:h-64 bg-[#090c15] border border-slate-800 rounded-xl p-4 overflow-hidden group hover:border-slate-600 transition-colors"> <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Прогноз потери выручки</p> <svg viewBox="0 0 400 200" className="w-full h-full"> <line x1="0" y1="180" x2="400" y2="180" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" /> <line x1="0" y1="120" x2="400" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" /> <path d="M10 180 C 100 170, 200 100, 390 50" fill="none" stroke="#10b981" strokeWidth="2" /> <text x="320" y="40" fill="#10b981" fontSize="10" fontWeight="bold">Потенциал Рынка</text> <path d="M10 180 C 100 175, 200 190, 250 210" fill="none" stroke="#ef4444" strokeWidth="3" /> <path d="M10 180 C 100 175, 200 190, 250 210 L 10 210 Z" fill="url(#redGradient)" opacity="0.2" /> <defs> <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stopColor="#ef4444" /> <stop offset="100%" stopColor="transparent" /> </linearGradient> </defs> <circle cx="10" cy="180" r="3" fill="#3b82f6" /> </svg> <div className="absolute bottom-4 right-4 bg-red-950/80 border border-red-900 text-red-500 text-[10px] px-2 py-1 uppercase tracking-wider font-bold rounded shadow-[0_0_10px_red]"> Ваша траектория </div> </div> );

const PrintChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [forceBlankMode, setForceBlankMode] = useState(false);

  const toggleCheck = (id: number) => setCheckedItems(prev => ({...prev, [id]: !prev[id]}));
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isTotalFailure = checkedCount === 30;
  
  const isReportMode = checkedCount > 0 && !forceBlankMode;

  const handlePrintBlank = () => {
    setForceBlankMode(true);
    setTimeout(() => {
        window.print();
        setTimeout(() => setForceBlankMode(false), 500);
    }, 100);
  };

  const handleShare = () => {
    let verdict = "";
    if (checkedCount <= 5) verdict = "Зона контроля";
    else if (checkedCount <= 15) verdict = "Кровотечение";
    else verdict = "Реанимация";
    if (isTotalFailure) verdict = "SYSTEM FAILURE";

    const text = `Я прошел Аудит Хаоса в бизнесе.\nМой результат: ${checkedCount} из 30.\nВердикт: ${verdict}.\n\nПроверь свой бизнес здесь:`;
    const url = "https://ruslan-yumagulov.ru"; 
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(tgUrl, '_blank');
  };

  if (!auditData || !auditData.sections) {
      return <div className="p-10 text-red-500">Ошибка: Данные не загружены. Проверьте код.</div>;
  }

  return (
    <div className="bg-[#050810] text-slate-300 min-h-screen relative font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100 cursor-none">
      
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <CustomCursor />

      {/* --- СТИЛИ (без изменений) --- */}
      <style>{ ` @keyframes borderRotate { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .animate-border-gradient { background-size: 300% 300%; animation: borderRotate 3s ease infinite; } @media screen { @keyframes glitch-anim { 0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); } 20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); } 40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); } 60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); } 80% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); } 100% { clip-path: inset(30% 0 40% 0); transform: translate(1px, -1px); } } .glitch-text { position: relative; } .glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000; } .glitch-text::before { left: 2px; text-shadow: -1px 0 red; clip: rect(24px, 550px, 90px, 0); animation: glitch-anim 2s infinite linear alternate-reverse; } .glitch-text::after { left: -2px; text-shadow: -1px 0 blue; clip: rect(85px, 550px, 140px, 0); animation: glitch-anim 2s infinite linear alternate-reverse; } } @media print { @page { margin: 0.5cm; size: A4; } body { background: white !important; -webkit-print-color-adjust: exact; } .print-hide { display: none !important; } .screen-hide { display: block !important; } * { color: black !important; text-shadow: none !important; box-shadow: none !important; } .print-only { display: block !important; } .cyber-card { background: none !important; border: 1px solid #000 !important; break-inside: avoid; page-break-inside: avoid; margin-bottom: 10px !important; padding: 8px !important; } .cyber-checkbox { border: 2px solid #000 !important; background: white !important; } h1 { color: black !important; -webkit-text-fill-color: black !important; } .print-border-hidden { display: none !important; } p, span, div, h1, h2, h3, h4, li { color: black !important; } .checklist-item-text { color: black !important; opacity: 1 !important; font-size: 11px !important; } .checklist-price-container { opacity: 1 !important; color: black !important; } .checklist-price-text { color: black !important; } .system-failure-box { background: white !important; border: 4px solid red !important; color: black !important; box-shadow: none !important; } footer { page-break-inside: avoid !important; break-inside: avoid !important; } } ` }</style>

      <div className="max-w-4xl mx-auto relative z-10 p-4 md:p-12 space-y-20 print:space-y-4 print:p-0">
        
        <header className="space-y-6 intro-card print:space-y-2">
            <div className="flex items-center gap-4"><div className="h-[2px] w-12 bg-cyan-500 shadow-[0_0_10px_#06b6d4] print:bg-black print:shadow-none"></div><p className="font-mono text-cyan-400 text-xs tracking-[0.2em] uppercase font-bold print:text-black">Business Architecture Protocol</p></div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] print:text-4xl print:drop-shadow-none">Аудит <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white print:text-black">Хаоса</span></h1>
            <div className="inline-block bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 w-full md:w-auto print:border-none print:p-0"><p className="text-xl text-slate-200 font-light leading-relaxed print:text-sm print:text-black"><span className="font-mono font-bold text-cyan-400 print:text-black">30 маркеров</span> того, что ваш бизнес теряет деньги прямо сейчас</p></div>
        </header>

        <section className="space-y-8 intro-card print:hidden">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest flex items-center gap-3"><span className="text-blue-600 font-mono">00.</span> {auditData.intro.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"><p className="text-slate-400 leading-relaxed text-justify">{auditData.intro.text}</p><div className="print-hide hover-target"><IntroChart /></div></div>
        </section>

        <main className={`space-y-16 print:space-y-2 ${isReportMode ? 'print:hidden' : 'print:block'}`}>
          {auditData.sections.map((section, index) => {
            const sectionCheckedCount = section.points.filter(p => checkedItems[p.id]).length;
            const blockNumber = String(index + 1);
            return (
              <div key={index} className="relative group rounded-xl break-inside-avoid" style={{ isolation: 'isolate' }}>
                <div className="print-border-hidden absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-border-gradient opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-[3px] -z-10"></div>
                <div className="cyber-card relative bg-[#090c15] rounded-xl p-8 h-full border border-slate-800/80 z-0 print:p-2 print:border-black">
                    <div className="flex items-center gap-4 mb-8 print:mb-1">
                       <div className="w-10 h-10 flex items-center justify-center bg-cyan-950/20 rounded border border-cyan-900/50 shadow-[0_0_15px_rgba(34,211,238,0.1)] print:hidden">{getIconForSection(index)}</div>
                       <h3 className="text-2xl font-bold text-sky-400 uppercase tracking-wider font-mono print:text-black print:text-base">Блок {blockNumber}: {section.heading}</h3>
                    </div>
                    <div className="mb-8 border border-red-900/50 bg-[#1a0505] rounded-lg overflow-hidden relative group/diag print:hidden">
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#7f1d1d 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                        <div className="flex items-center justify-between p-3 border-b border-red-900/30 bg-red-950/20"><div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-[0.2em] uppercase font-bold"><ShieldAlert size={14} /> SYSTEM DIAGNOSIS</div></div>
                        <div className="p-6 relative z-10"><p className="text-white font-medium text-lg leading-relaxed">{section.diagnosis}</p></div>
                    </div>
                    <div className="space-y-8 pl-1 print:space-y-1">
                        {section.points.map((point) => (
                            <div key={point.id} onClick={() => toggleCheck(point.id)} className="group/item cursor-pointer hover-target">
                                <div className="flex items-start gap-5 print:gap-2">
                                    <div className={`cyber-checkbox mt-1 w-6 h-6 border-2 rounded flex-shrink-0 flex items-center justify-center transition-all duration-300 ${checkedItems[point.id] ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] print:bg-white print:border-black' : 'border-slate-700 bg-slate-900/30 group-hover/item:border-cyan-600 print:bg-white print:border-black'}`}>{checkedItems[point.id] && !forceBlankMode && <Check size={16} className="text-cyan-400 print:text-black" />}</div>
                                    <div className="flex-1">
                                        <p className={`checklist-item-text text-base font-medium transition-all duration-300 ${checkedItems[point.id] ? 'text-white' : 'text-slate-200 group-hover/item:text-white'}`}>{point.text}</p>
                                        <div className={`checklist-price-container mt-3 ml-1 pl-4 relative border-l-2 transition-all duration-500 print:mt-0 print:pl-2 print:border-l print:border-gray-400 print:opacity-100 ${checkedItems[point.id] ? 'border-purple-500 opacity-100' : 'border-purple-900/30 opacity-60'}`}>
                                            <div className="text-sm md:text-base leading-relaxed print:text-[10px]"><span className="text-purple-400 font-bold shadow-purple-500/50 drop-shadow-sm mr-2 print:text-black print:shadow-none">Цена хаоса:</span><span className="checklist-price-text checklist-item-text text-slate-400 print:text-black">{point.price}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="print-hide mt-10">
                        <AnimatePresence mode="wait">
                            {sectionCheckedCount === 1 && ( <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="border border-cyan-900/50 bg-cyan-950/20 p-4 rounded-lg flex gap-4 items-center"><AlertCircle className="text-cyan-400 flex-shrink-0" /><p className="text-cyan-200 text-sm font-bold">{section.conclusions.low}</p></motion.div> )}
                            {sectionCheckedCount >= 2 && sectionCheckedCount <= 3 && ( <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="border border-yellow-900/50 bg-yellow-950/20 p-4 rounded-lg flex gap-4 items-center"><AlertTriangle className="text-yellow-400 flex-shrink-0" /><p className="text-yellow-200 text-sm font-bold">{section.conclusions.medium}</p></motion.div> )}
                            {sectionCheckedCount >= 4 && ( <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="border border-red-600 bg-red-950/40 p-4 rounded-lg flex gap-4 items-center shadow-[0_0_20px_rgba(220,38,38,0.2)]"><ShieldAlert className="text-red-500 flex-shrink-0" size={28} /><div><p className="text-red-500 text-xs font-black tracking-widest uppercase mb-1">КРИТИЧЕСКОЕ СОСТОЯНИЕ</p><p className="text-white text-sm font-bold">{section.conclusions.high}</p></div></motion.div> )}
                        </AnimatePresence>
                    </div>
                </div>
              </div>
            );
          })}
        </main>

        <section className="space-y-8 pt-10 border-t border-slate-800 break-inside-avoid print:pt-4">
            
            {isReportMode && ( <div className="hidden print-only mb-12 border-t-2 border-black pt-8"> <h3 className="text-xl font-black text-black uppercase mb-6">ДЕТАЛИЗАЦИЯ ВЫЯВЛЕННЫХ ПРОБЛЕМ</h3> <div className="space-y-4"> {auditData.sections.map((section) => { const checkedPoints = section.points.filter(p => checkedItems[p.id]); if (checkedPoints.length === 0) return null; return ( <div key={section.id} className="mb-4 break-inside-avoid"> <h4 className="font-bold text-sm uppercase mb-2 border-b border-gray-400 pb-1">{section.heading}</h4> <ul className="list-disc pl-5 space-y-1"> {checkedPoints.map(p => ( <li key={p.id} className="text-xs"> <span className="font-semibold">{p.text}</span> <span className="block text-[10px] text-gray-600 italic">Цена: {p.price}</span> </li> ))} </ul> </div> ) })} </div> </div> )}
            
            <h2 className="text-2xl font-black text-center text-white uppercase mb-12 print:text-black print:text-2xl print:mb-4">Итоговый Вердикт</h2>
            
            {/* --- БЛОК СЧЕТЧИКА С ЦВЕТОВОЙ ИНДИКАЦИЕЙ --- */}
            <div className="text-center mb-6 text-slate-400 print:text-black">
                Вы отметили <span 
                    className={`
                        font-black text-1xl transition-colors duration-300
                        ${isTotalFailure ? 'text-red-500 animate-pulse' : 
                        checkedCount > 15 ? 'text-red-500' :
                        checkedCount > 5 ? 'text-yellow-500' :
                        'text-green-500'
                        }
                    `}
                >
                    {checkedCount}
                </span> из 30 пунктов
            </div>
            
            <div className="space-y-6 print:space-y-2">
                {isTotalFailure && ( <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="system-failure-box relative border-4 border-red-600 bg-black p-8 rounded-lg shadow-[0_0_50px_red] overflow-hidden group print:border-2 print:border-black print:bg-white print:p-4 print:shadow-none"> <div className="print-hide absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div> <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 text-center"> <div className="p-4 bg-red-600 rounded-full print-hide animate-bounce"><Skull size={48} className="text-black" /></div> <div> <h4 className="glitch-text text-3xl md:text-4xl font-black text-white print:text-black uppercase mb-2 tracking-tighter" data-text="SYSTEM FAILURE">SYSTEM FAILURE</h4> <p className="text-red-500 font-mono font-bold text-lg print:text-black print:text-sm">ВАШ БИЗНЕС — ЭТО ТРУП. <br/> Вы не управляете ничем. Это уже не реанимация, это морг. <br/> Если вы это читаете, у вас есть 24 часа, чтобы всё изменить.</p> </div> </div> </motion.div> )}
                {!isTotalFailure && ( <div className={`relative border p-6 rounded-lg transition-all duration-300 print:p-3 print:border-black ${checkedCount <= 5 ? 'border-green-500 bg-green-950/20 opacity-100' : 'border-green-900/30 bg-green-950/5 opacity-50 grayscale'}`}> <div className="flex justify-between items-center mb-2"><h4 className="text-green-500 font-bold text-lg print:text-black">0-5 пунктов: Зона контроля</h4><span className="font-mono text-green-700 border border-green-900 px-2 py-0.5 text-xs rounded print:text-black print:border-black">OK</span></div> {checkedCount <= 5 && <div className="print-hide absolute right-10 top-2 rotate-[-12deg] border-4 border-green-500 text-green-500 font-black text-2xl px-4 py-1 uppercase opacity-80 shadow-[0_0_20px_lime]">ВАШ УРОВЕНЬ</div>} <p className="text-slate-500 text-sm leading-relaxed print:text-black">У вас есть фундамент. Требуется точечная автоматизация. Вы контролируете основные процессы, но ручное управление все еще отнимает ресурс собственника.</p> </div> )}
                {!isTotalFailure && ( <div className={`relative border p-6 rounded-lg transition-all duration-300 print:p-3 print:border-black ${checkedCount > 5 && checkedCount <= 15 ? 'border-yellow-500 bg-yellow-950/20 opacity-100' : 'border-yellow-900/30 bg-yellow-950/5 opacity-50 grayscale'}`}> <div className="flex justify-between items-center mb-2"><h4 className="text-yellow-500 font-bold text-lg print:text-black">6-15 пунктов: Кровотечение</h4><span className="font-mono text-yellow-700 border border-yellow-900 px-2 py-0.5 text-xs rounded print:text-black print:border-black">WARN</span></div> {checkedCount > 5 && checkedCount <= 15 && <div className="print-hide absolute right-10 top-2 rotate-[-12deg] border-4 border-yellow-500 text-yellow-500 font-black text-2xl px-4 py-1 uppercase opacity-80 shadow-[0_0_20px_orange]">ВАШ УРОВЕНЬ</div>} <p className="text-slate-500 text-sm leading-relaxed print:text-black">Вы теряете 20-40% прибыли ежемесячно. Система держится на героизме команды и ваших нервах. Кассовые разрывы уже близко.</p> </div> )}
                {!isTotalFailure && ( <div className={`relative border p-6 rounded-lg transition-all duration-300 print:p-3 print:border-black ${checkedCount > 15 ? 'border-red-500 bg-red-950/20 opacity-100 shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'border-red-900/30 bg-red-950/5 opacity-50 grayscale'}`}> <div className="flex justify-between items-center mb-2"><h4 className="text-red-500 font-bold text-lg print:text-black">16+ пунктов: Реанимация</h4><span className="font-mono text-red-700 border border-red-900 px-2 py-0.5 text-xs rounded print:text-black print:border-black">CRITICAL</span></div> {checkedCount > 15 && <div className="print-hide absolute right-10 top-2 rotate-[-12deg] border-4 border-red-500 text-red-500 font-black text-2xl px-4 py-1 uppercase opacity-80 shadow-[0_0_20px_red]">ВАШ УРОВЕНЬ</div>} <p className="text-slate-400 text-sm font-medium leading-relaxed print:text-black">Вы не контролируете ситуацию. Срочная операция на процессах. Ваш бизнес умирает. Каждый день промедления стоит вам сотни тысяч рублей.</p> </div> )}
            </div>
        </section>

        

        {/* --- КОМПОНЕНТ ФОРМЫ --- */}
        <AuditForm 
          checkedCount={checkedCount}
          checkedItems={checkedItems}
          auditData={auditData}
        />

        <footer className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-end gap-6 text-xs text-slate-600 font-mono break-inside-avoid print:border-black print:pt-4">
             <div className="space-y-2"><p className="print:text-black">TELEGRAM: @Trestan01</p><p className="print:text-black">SITE: RUSLAN-YUMAGULOV.RU</p><p className="pt-4 text-slate-700 print:text-black">CONFIDENTIAL AUDIT © 2024</p></div>
             <div className="flex items-center gap-6"><div className="w-16 h-16 bg-white p-1 rounded-sm border border-black"><div className="w-full h-full bg-black flex items-center justify-center text-[8px] text-white text-center leading-none">QR CODE</div></div><div className="flex flex-col items-end gap-2"><span className="print:text-black">ФИНАЛ // <span className="text-cyan-600 print:text-black">СТР. 07</span></span><Barcode /></div></div>
        </footer>
      </div>

      <div className="print-hide fixed bottom-8 right-8 flex flex-col gap-4 items-end z-50">
          {checkedCount > 0 && ( <motion.button initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onClick={handleShare} className="hover-target bg-blue-600 hover:bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/50 transition-all hover:scale-110 active:scale-95" title="Поделиться в Telegram"><Send size={20} /></motion.button> )}
          <motion.button initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onClick={handlePrintBlank} className="hover-target bg-slate-700 hover:bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-slate-900/50 transition-all hover:scale-110 active:scale-95 group relative" title="Распечатать пустой бланк"><FileText size={20} /><span className="absolute right-14 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Пустой бланк</span></motion.button>
          <button onClick={() => window.print()} className="hover-target bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] font-bold transition-all hover:scale-105 active:scale-95"><Printer size={20} />{checkedCount > 0 ? 'Распечатать отчет' : 'Распечатать бланк'}</button>
      </div>

    </div>
  );
};

export default PrintChecklist;