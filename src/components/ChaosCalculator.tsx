import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AlertTriangle, ArrowRight, CheckSquare, Square, Rocket, Siren, HelpCircle } from 'lucide-react';

const PAIN_POINTS = [
  { id: 'no_crm', label: 'Нет CRM / CRM для галочки', weight: 2 },
  { id: 'excel', label: 'Учет ведется в Excel / Таблицах', weight: 2 },
  { id: 'manual', label: 'Ручное формирование документов', weight: 1 },
  { id: 'owner_ops', label: 'Собственник в операционке 24/7', weight: 3 },
  { id: 'no_analytics', label: 'Нет сквозной аналитики', weight: 1 },
  { id: 'staff_turnover', label: 'Текучка кадров / Долгий найм', weight: 2 },
  { id: 'missed_deadlines', label: 'Частые срывы сроков', weight: 2 },
  { id: 'cash_gap', label: 'Бывают кассовые разрывы', weight: 3 },
];

const ChaosCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(10);
  const [employees, setEmployees] = useState(15);
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  
  const [chaosLevel, setChaosLevel] = useState(0);
  const [lossAmount, setLossAmount] = useState(0);
  const controls = useAnimation();

  const togglePainPoint = (id: string) => {
    setSelectedPainPoints(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const currentChaosScore = PAIN_POINTS
      .filter(p => selectedPainPoints.includes(p.id))
      .reduce((acc, curr) => acc + curr.weight, 0);
    
    const normalizedChaos = Math.min(currentChaosScore, 10);
    setChaosLevel(normalizedChaos);

    const revenueLossPercent = normalizedChaos * 0.015;
    const efficiencyLossPerEmployee = 60000 * (normalizedChaos * 0.1);
    
    const calculatedLoss = (revenue * 1000000 * revenueLossPercent) + (employees * efficiencyLossPerEmployee);
    setLossAmount(Math.floor(calculatedLoss));

    if (normalizedChaos >= 8) {
      controls.start({ x: [-1, 1, -1, 1, 0], transition: { repeat: Infinity, duration: 0.2 } });
    } else {
      controls.stop(); controls.set({ x: 0 });
    }
  }, [revenue, employees, selectedPainPoints, controls]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // --- ЛОГИКА ЦВЕТОВ (4 СТАДИИ) ---
  const getTheme = () => {
    if (chaosLevel === 0) return { color: 'text-emerald-400', border: 'border-emerald-500/50', bg: 'bg-emerald-500' };
    if (chaosLevel <= 4) return { color: 'text-cyan-400', border: 'border-cyan-500/50', bg: 'bg-cyan-500' }; // Синий
    if (chaosLevel <= 7) return { color: 'text-amber-400', border: 'border-amber-500/50', bg: 'bg-amber-500' }; // Желтый
    return { color: 'text-red-500', border: 'border-red-500/50', bg: 'bg-red-600' }; // Красный
  };

  const theme = getTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-1000 ${chaosLevel >= 10 ? 'bg-[#1a0505]' : 'bg-[#0B0F19]'}`}>
      
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${chaosLevel >= 8 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 via-transparent to-red-900/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Калькулятор <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">хаоса</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Выберите утверждения, которые описывают вашу ситуацию, чтобы узнать цену хаоса
            </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className={`backdrop-blur-xl border rounded-3xl shadow-2xl grid lg:grid-cols-12 overflow-hidden transition-all duration-500 ${
              chaosLevel >= 8 ? 'bg-red-950/40 border-red-500/30' : 'bg-[#111827]/80 border-gray-800'
            }`}>
            
            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="lg:col-span-7 p-6 md:p-10 space-y-10 border-b lg:border-b-0 lg:border-r border-white/5">
              
              {/* Слайдеры */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Оборот / мес</label>
                    <span className="text-white font-mono font-bold">{revenue} млн ₽</span>
                  </div>
                  <input 
                    type="range" min="1" max="300" step="1" value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all relative z-20"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Сотрудники</label>
                    <span className="text-white font-mono font-bold">{employees} чел.</span>
                  </div>
                  <input 
                    type="range" min="1" max="500" step="1" value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all relative z-20"
                  />
                </div>
              </div>

              {/* Чекбоксы */}
              <div>
                <div className="flex justify-between items-end mb-6">
                    <h4 className="text-white font-bold text-lg">Отметьте, что есть у вас:</h4>
                    {/* СЧЕТЧИК ХАОСА */}
                    {chaosLevel > 0 && (
                        <span className={`text-[10px] font-mono px-2 py-1 rounded border ${theme.color} ${theme.border} bg-black/40`}>
                            УРОВЕНЬ ХАОСА: {chaosLevel}/10
                        </span>
                    )}
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {PAIN_POINTS.map((point) => {
                    const isSelected = selectedPainPoints.includes(point.id);
                    return (
                      <div 
                        key={point.id}
                        onClick={() => togglePainPoint(point.id)}
                        className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 group select-none ${
                          isSelected ? `bg-white/5 ${theme.border}` : 'bg-black/20 border-white/5 hover:bg-white/5'
                        }`}
                      >
                        <div className={`mt-0.5 transition-colors ${isSelected ? theme.color : 'text-gray-600'}`}>
                           {isSelected ? <CheckSquare size={20} /> : <Square size={20} />}
                        </div>
                        <span className={`text-sm leading-tight transition-colors ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                          {point.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <motion.div 
                animate={controls}
                className={`lg:col-span-5 p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden ${
                    chaosLevel >= 8 ? 'bg-red-900/10' : 'bg-black/20'
                }`}
            >
                {/* ИКОНКИ СТАТУСА (4 ВАРИАНТА) */}
                <div className="mb-6">
                    {chaosLevel === 0 ? (
                        // 0: Зеленая ракета
                        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <Rocket size={40} />
                        </div>
                    ) : chaosLevel >= 8 ? (
                        // 8-10: Красная сирена
                        <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-bounce">
                            <Siren size={40} />
                        </div>
                    ) : chaosLevel >= 5 ? (
                        // 5-7: Желтый треугольник (ВЕРНУЛИ)
                        <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                            <AlertTriangle size={40} />
                        </div>
                    ) : (
                        // 1-4: Голубой вопрос (КАК ПРОСИЛ)
                        <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                            <HelpCircle size={40} />
                        </div>
                    )}
                </div>

                {chaosLevel === 0 ? (
                    <>
                       <h3 className="text-2xl font-bold text-white mb-2">Потенциал роста</h3>
                       <p className="text-gray-400 text-sm mb-8 max-w-xs">
                         Система в порядке. Но аудит поможет найти точки для кратного роста.
                       </p>
                    </>
                ) : (
                    <>
                       <div className={`uppercase tracking-widest text-xs font-bold mb-2 ${theme.color}`}>
                          {chaosLevel >= 8 ? "КРИТИЧЕСКИЕ ПОТЕРИ" : "ВЫ ТЕРЯЕТЕ ПРИМЕРНО"}
                       </div>
                       
                       <div className={`font-mono font-black text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight ${theme.color}`}>
                         {new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(lossAmount)} ₽
                       </div>
                       
                       <p className="text-gray-500 text-xs mb-8 uppercase tracking-wide">
                         Ежемесячно из-за неэффективности
                       </p>
                    </>
                )}

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToContact}
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-xl flex items-center justify-center gap-2 transition-all duration-300 group ${
                        chaosLevel >= 8
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:shadow-red-900/50 animate-[pulse_2s_infinite]' 
                        : chaosLevel === 0 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-emerald-900/50'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-900/50'
                    }`}
                >
                    <span>{chaosLevel === 0 ? "Обсудить стратегию" : "Остановить потери"}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosCalculator;