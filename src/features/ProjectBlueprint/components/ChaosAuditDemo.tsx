import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Check, Skull, Activity, HeartPulse, Zap } from 'lucide-react';

// --- ДАННЫЕ ВОПРОСОВ (Частично из твоих скринов) ---
const SECTIONS = [
  {
    id: 'block1',
    title: 'БЛОК 1: ПРОДАЖИ И CRM',
    color: 'text-[#22d3ee]',
    diagnosis: 'Вы думаете, что у вас проблемы с трафиком, а на деле у вас дырявое ведро.',
    items: [
      { id: 'b1_1', text: 'Менеджеры ведут клиентов в Excel / WhatsApp', sub: 'Риск: Потеря базы (2-10 млн ₽)' },
      { id: 'b1_2', text: 'Нет четкого регламента «Следующий шаг»', sub: 'Сгорает 30-40% лидов' },
      { id: 'b1_3', text: 'Нет скриптов — продают «как умеют»', sub: 'Конверсия плавает в 3 раза' },
    ]
  },
  {
    id: 'block6',
    title: 'БЛОК 6: ЛИЧНАЯ ЭФФЕКТИВНОСТЬ',
    color: 'text-[#22d3ee]', // или любой другой цвет
    diagnosis: 'Вы стали заложником собственного творения.',
    items: [
      { id: 'b6_1', text: 'Ваш календарь забит операционкой', sub: 'Нет времени на главное' },
      { id: 'b6_2', text: 'Вы не делегируете, потому что «я сделаю лучше»', sub: 'Потолок роста' },
      { id: 'b6_3', text: 'У вас нет ассистента', sub: 'Потерянные часы CEO' },
      { id: 'b6_4', text: 'Вы работаете 24/7 и выгорели', sub: 'Риск для всего бизнеса' },
      { id: 'b6_5', text: 'Бизнес не может работать без вас и дня', sub: '«Золотая клетка»' },
    ]
  }
];

export const ChaosAuditDemo = () => {
  const [selected, setSelected] = useState<string[]>([]);
  
  // Для демо: добавим кнопку "Выбрать всё" чтобы увидеть "SYSTEM FAILURE"
  const totalPoints = 30; // Максимум по твоей логике
  const currentScore = selected.length;

  const toggleItem = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  // Чит-код для демонстрации (имитация остальных 22 пунктов)
  const [ghostPoints, setGhostPoints] = useState(0); 
  const finalScore = currentScore + ghostPoints;

  const getVerdict = (score: number) => {
    if (score >= 30) return {
      title: 'SYSTEM FAILURE',
      subtitle: 'ВАШ БИЗНЕС — ЭТО ТРУП.',
      desc: 'Вы не управляете ничем. Это уже не реанимация, это морг. Если вы это читаете, у вас есть 24 часа, чтобы всё изменить.',
      color: 'bg-red-600',
      borderColor: 'border-red-600',
      glow: 'shadow-[0_0_50px_rgba(220,38,38,0.5)]',
      icon: <Skull size={48} className="text-black" />
    };
    if (score >= 16) return {
      title: 'РЕАНИМАЦИЯ',
      subtitle: 'Вы не контролируете ситуацию.',
      desc: 'Срочная операция на процессах. Ваш бизнес умирает. Каждый день промедления стоит вам сотни тысяч рублей.',
      color: 'bg-red-900/50',
      borderColor: 'border-red-500',
      glow: 'shadow-[0_0_30px_rgba(239,68,68,0.2)]',
      icon: <HeartPulse size={48} className="text-red-500" />
    };
    if (score >= 6) return {
      title: 'КРОВОТЕЧЕНИЕ',
      subtitle: 'Вы теряете 20-40% прибыли ежемесячно.',
      desc: 'Система держится на героизме команды и ваших нервах. Кассовые разрывы уже близко.',
      color: 'bg-orange-900/50',
      borderColor: 'border-orange-500',
      glow: 'shadow-[0_0_30px_rgba(249,115,22,0.2)]',
      icon: <Activity size={48} className="text-orange-500" />
    };
    return {
      title: 'ЗОНА КОНТРОЛЯ',
      subtitle: 'У вас есть фундамент.',
      desc: 'Требуется точечная автоматизация. Вы контролируете основные процессы.',
      color: 'bg-green-900/50',
      borderColor: 'border-green-500',
      glow: 'shadow-[0_0_30px_rgba(34,197,94,0.2)]',
      icon: <Zap size={48} className="text-green-500" />
    };
  };

  const verdict = getVerdict(finalScore);

  return (
    <div className="my-8 space-y-8 select-none">
      
      {/* УПРАВЛЕНИЕ ДЕМОНСТРАЦИЕЙ */}
      <div className="p-4 bg-[#111827] border border-gray-800 rounded-lg flex items-center justify-between">
        <div className="text-xs font-mono text-gray-500">
            SIMULATION MODE: <span className="text-white">{finalScore} / {totalPoints} POINTS</span>
        </div>
        <div className="flex gap-2">
            <button onClick={() => { setSelected([]); setGhostPoints(0); }} className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded text-white transition">Reset</button>
            <button onClick={() => setGhostPoints(prev => Math.min(prev + 5, 22))} className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded text-white transition">+5 Ghost Points</button>
            <button onClick={() => { setGhostPoints(22); setSelected(SECTIONS.flatMap(s => s.items.map(i => i.id))); }} className="px-3 py-1 text-xs bg-red-900/50 hover:bg-red-800 border border-red-900 text-red-200 rounded transition">MAX FAILURE</button>
        </div>
      </div>

      {/* БЛОКИ ВОПРОСОВ */}
      <div className="grid grid-cols-1 gap-6">
        {SECTIONS.map(section => (
          <div key={section.id} className="border border-gray-800 bg-[#0B0F19] rounded-xl overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex items-center gap-3 bg-[#111827]/50">
              <h3 className={`font-bold tracking-widest text-sm uppercase ${section.color}`}>{section.title}</h3>
            </div>
            <div className="p-6">
               {/* Диагноз блока */}
               <div className="mb-6 relative overflow-hidden rounded border border-red-900/30 bg-red-900/10 p-4">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600/50"></div>
                  <div className="text-[10px] text-red-500 font-mono uppercase tracking-widest mb-1">SYSTEM DIAGNOSIS</div>
                  <p className="text-white font-medium text-sm">{section.diagnosis}</p>
              </div>

              <div className="space-y-3">
                {section.items.map(item => {
                  const isActive = selected.includes(item.id);
                  return (
                    <div 
                      key={item.id} 
                      onClick={() => toggleItem(item.id)}
                      className={`cursor-pointer p-3 rounded border transition-all duration-200 group relative ${isActive ? 'bg-[#22d3ee]/10 border-[#22d3ee]/50' : 'bg-[#111827]/30 border-gray-800 hover:border-gray-600'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors ${isActive ? 'bg-[#22d3ee] border-[#22d3ee]' : 'bg-transparent border-gray-600'}`}>
                           {isActive && <Check size={14} className="text-black stroke-[3]" />}
                        </div>
                        <div>
                          <div className={`text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.text}</div>
                          <div className="mt-1 text-xs text-gray-500 font-mono"><span className="text-[#d946ef]">Цена хаоса:</span> {item.sub}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ИТОГОВЫЙ ВЕРДИКТ */}
      <div className="mt-12">
        <h2 className="text-center text-3xl font-black text-white mb-2 uppercase tracking-tight">Итоговый Вердикт</h2>
        <p className="text-center text-gray-500 mb-8 font-mono">Вы отметили <span className="text-white font-bold">{finalScore}</span> из {totalPoints} пунктов</p>
        
        <AnimatePresence mode='wait'>
            <motion.div 
                key={finalScore >= 30 ? 'dead' : finalScore >= 16 ? 'crit' : finalScore >= 6 ? 'warn' : 'ok'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden rounded-xl border-2 p-8 ${verdict.color} ${verdict.borderColor} ${verdict.glow}`}
            >
                {finalScore >= 30 && (
                    <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)', backgroundSize: '20px 20px' }}></div>
                )}
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-black/30 border-2 ${verdict.borderColor} shrink-0`}>
                        {verdict.icon}
                    </div>
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                             <h3 className={`text-3xl font-black uppercase ${finalScore >= 30 ? 'text-white' : 'text-white'}`}>{verdict.title}</h3>
                             {finalScore >= 16 && <span className="px-2 py-0.5 text-[10px] font-bold bg-black/50 text-red-500 border border-red-500 rounded">CRITICAL</span>}
                        </div>
                        <p className={`text-lg font-bold mb-2 uppercase tracking-wide ${finalScore >= 30 ? 'text-red-500' : 'text-gray-200'}`}>{verdict.subtitle}</p>
                        <p className={`text-sm leading-relaxed ${finalScore >= 30 ? 'text-red-200' : 'text-gray-300'}`}>{verdict.desc}</p>
                    </div>
                </div>

                {/* Штамп "ВАШ УРОВЕНЬ" */}
                <div className="absolute top-4 right-4 rotate-[-12deg] opacity-30 pointer-events-none border-4 border-white p-2 rounded hidden md:block">
                     <span className="text-4xl font-black uppercase text-white">ВАШ УРОВЕНЬ</span>
                </div>
            </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};