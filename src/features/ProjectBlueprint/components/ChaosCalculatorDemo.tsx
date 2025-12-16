import React, { useState } from 'react';
import { Rocket, HelpCircle, AlertTriangle, Flame, Check, ArrowRight } from 'lucide-react';

const SYMPTOMS = [
  { id: 1, text: "Нет CRM / CRM для галочки" },
  { id: 2, text: "Учет ведется в Excel / Таблицах" },
  { id: 3, text: "Ручное формирование документов" },
  { id: 4, text: "Собственник в операционке 24/7" },
  { id: 5, text: "Нет сквозной аналитики" },
  { id: 6, text: "Текучка кадров / Долгий найм" },
  { id: 7, text: "Частые срывы сроков" },
  { id: 8, text: "Бывают кассовые разрывы" },
];

export const ChaosCalculatorDemo = () => {
  const [turnover, setTurnover] = useState(10); // млн руб
  const [employees, setEmployees] = useState(15);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSymptom = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const count = selected.length;
  
  // Логика потерь (примерная формула для демо)
  // Допустим, каждый симптом отъедает 2% от оборота
  const lostMoney = (turnover * 1000000) * (count * 0.02);
  const formattedLoss = new Intl.NumberFormat('ru-RU').format(Math.round(lostMoney));

  // Определение состояния (Цвет и контент)
  const getState = () => {
    if (count <= 2) return {
      theme: 'green',
      color: '#10b981', // emerald-500
      bg: 'bg-emerald-500',
      border: 'border-emerald-500',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]',
      icon: <Rocket size={32} className="text-[#10b981]" />,
      title: "Потенциал роста",
      desc: "Система в порядке. Но аудит поможет найти точки для кратного роста.",
      btnText: "Обсудить стратегию"
    };
    if (count <= 4) return {
      theme: 'blue',
      color: '#3b82f6', // blue-500
      bg: 'bg-blue-500',
      border: 'border-blue-500',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.2)]',
      icon: <HelpCircle size={32} className="text-[#3b82f6]" />,
      title: "Вы теряете примерно",
      isMoney: true,
      desc: "ЕЖЕМЕСЯЧНО ИЗ-ЗА НЕЭФФЕКТИВНОСТИ",
      btnText: "Остановить потери"
    };
    if (count <= 7) return {
      theme: 'orange',
      color: '#f97316', // orange-500
      bg: 'bg-orange-600',
      border: 'border-orange-500',
      glow: 'shadow-[0_0_40px_rgba(249,115,22,0.3)]',
      icon: <AlertTriangle size={32} className="text-[#f97316]" />,
      title: "КРИТИЧЕСКИЕ ПОТЕРИ",
      isMoney: true,
      desc: "ЕЖЕМЕСЯЧНО ИЗ-ЗА НЕЭФФЕКТИВНОСТИ",
      btnText: "Остановить потери"
    };
    return {
      theme: 'red',
      color: '#ef4444', // red-500
      bg: 'bg-[#7f1d1d]',
      border: 'border-red-500',
      glow: 'shadow-[0_0_60px_rgba(220,38,38,0.6)]',
      icon: <Flame size={32} className="text-[#ef4444]" />,
      title: "КРИТИЧЕСКИЕ ПОТЕРИ",
      isMoney: true,
      desc: "ЕЖЕМЕСЯЧНО ИЗ-ЗА НЕЭФФЕКТИВНОСТИ",
      btnText: "Остановить потери"
    };
  };

  const state = getState();

  return (
    <div className={`my-8 p-1 rounded-2xl transition-all duration-500 border border-gray-800 bg-[#0B0F19] overflow-hidden`}>
      <div className={`flex flex-col lg:flex-row min-h-[500px] ${state.theme === 'red' ? 'bg-red-900/10' : ''} transition-colors duration-500`}>
        
        {/* ЛЕВАЯ КОЛОНКА: ВВОДНЫЕ */}
        <div className="flex-1 p-8 border-b lg:border-b-0 lg:border-r border-gray-800">
            <h3 className="text-3xl font-black text-center mb-2 text-white">Калькулятор <span style={{ color: state.color }}>хаоса</span></h3>
            <p className="text-center text-gray-400 text-sm mb-10">Выберите утверждения, которые описывают вашу ситуацию, чтобы узнать цену хаоса</p>

            {/* Слайдеры */}
            <div className="flex gap-8 mb-10">
                <div className="flex-1">
                    <div className="flex justify-between text-xs font-bold text-gray-500 uppercase mb-2">
                        <span>Оборот / мес</span>
                        <span className="text-white">{turnover} млн ₽</span>
                    </div>
                    <input 
                        type="range" min="1" max="100" value={turnover} 
                        onChange={(e) => setTurnover(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#22d3ee]"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between text-xs font-bold text-gray-500 uppercase mb-2">
                        <span>Сотрудники</span>
                        <span className="text-white">{employees} чел.</span>
                    </div>
                    <input 
                        type="range" min="1" max="100" value={employees} 
                        onChange={(e) => setEmployees(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#3b82f6]"
                    />
                </div>
            </div>

            {/* Чекбоксы */}
            <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-white">Отметьте, что есть у вас:</span>
                <span className="text-xs px-2 py-1 rounded border border-gray-700 text-gray-400 font-mono">
                    УРОВЕНЬ ХАОСА: <span style={{ color: state.color }}>{count}/8</span>
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SYMPTOMS.map((s) => {
                    const isActive = selected.includes(s.id);
                    return (
                        <div 
                            key={s.id}
                            onClick={() => toggleSymptom(s.id)}
                            className={`p-4 rounded-lg border cursor-pointer flex items-center gap-3 transition-all duration-300 group
                                ${isActive 
                                    ? `bg-[${state.color}]/10 border-[${state.color}]` 
                                    : 'bg-[#111827] border-gray-800 hover:border-gray-600'
                                }
                            `}
                            style={{ 
                                borderColor: isActive ? state.color : undefined,
                                backgroundColor: isActive ? `${state.color}15` : undefined // 15 = 10% opacity hex
                            }}
                        >
                            <div 
                                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors
                                    ${isActive ? 'text-black' : 'border-gray-600 bg-transparent'}
                                `}
                                style={{
                                    backgroundColor: isActive ? state.color : 'transparent',
                                    borderColor: isActive ? state.color : undefined
                                }}
                            >
                                {isActive && <Check size={14} strokeWidth={4} />}
                            </div>
                            <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                                {s.text}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: РЕЗУЛЬТАТ */}
        <div className="w-full lg:w-[400px] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden transition-colors duration-500">
            {/* Фоновое свечение */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] transition-all duration-500 opacity-20`}
                 style={{ backgroundColor: state.color }}
            ></div>

            <div className="relative z-10">
                <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center border border-gray-700 shadow-2xl relative">
                    {state.icon}
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20`} style={{ backgroundColor: state.color }}></div>
                </div>

                <div className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300`} style={{ color: state.theme === 'green' ? 'white' : state.color }}>
                    {state.title}
                </div>

                {state.isMoney ? (
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                        {formattedLoss} ₽
                    </div>
                ) : null}

                <p className="text-xs text-gray-500 max-w-[250px] mx-auto mb-8 leading-relaxed">
                    {state.desc}
                </p>

                <button 
                    className={`px-8 py-4 rounded-lg font-bold text-white text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    style={{ backgroundColor: state.color }}
                >
                    {state.btnText} <ArrowRight size={16} />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};