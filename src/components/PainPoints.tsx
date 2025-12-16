import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Smartphone, EyeOff, Calculator, ArrowRight } from 'lucide-react';

const points = [
  {
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    title: "1. Вы застряли в операционке",
    desc: "Ваш телефон — главный рабочий инструмент. Ни один вопрос не решается без вас. Вы — не собственник, а самый дорогостоящий сотрудник на должности «решателя проблем»."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-purple-500" />,
    title: "2. Есть оборот, но нет прибыли",
    desc: "Деньги постоянно в кассовых разрывах или заморожены «в товаре». В конце месяца вы не можете с уверенностью сказать, сколько чистой прибыли заработали, и куда она ушла."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
    title: "3. Хаос при масштабировании",
    desc: "Каждая попытка роста — нанять людей, открыть филиал — ломает то, что и так работало. Качество падает, клиенты жалуются, а вы круглосуточно «тушите пожары»."
  },
  {
    icon: <EyeOff className="w-8 h-8 text-indigo-400" />,
    title: "4. Слепое управление",
    desc: "Вы управляете бизнесом по интуиции, а не по цифрам. У вас нет дашборда с 3–5 ключевыми метриками, чтобы видеть угрозы до того, как они станут нерешаемыми проблемами."
  }
];

// Контейнер для каскадной анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

const PainPoints = () => {
  const [isHovered, setIsHovered] = useState(false);

  // ИСПРАВЛЕНО: Скролл к форме контактов
  const scrollToContact = () => {
    const el = document.getElementById('contact'); // Ищем ID секции с формой
    if(el) {
        el.scrollIntoView({ behavior: 'smooth'});
    } else {
        console.warn("Секция 'contact' не найдена.");
    }
  };

  return (
    <section className="py-24 bg-[#0B0F19] relative z-10 border-b border-white/5 overflow-hidden">
      
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-red-900/10 via-purple-900/10 to-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            4 симптома <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">операционного хаоса</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 max-w-3xl mx-auto backdrop-blur-sm"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Если вы узнали себя хотя бы в одном пункте — <span className="text-white font-bold border-b border-red-500/50">вы уже теряете деньги</span>. <br className="hidden md:block"/>
              В двух и более — <span className="text-red-400 font-bold">ваш бизнес в зоне риска</span>.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-8 bg-[#111827] border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex items-start gap-5 overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Box */}
              <div className="relative z-10 bg-[#0B0F19] p-4 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {point.icon}
              </div>
              
              {/* Text */}
              <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {point.desc}
                  </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
          className="mt-16 text-center"
        >
          <button 
            onClick={scrollToContact} // Теперь ведет на id="contact" (к форме)
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            {/* Градиент при наведении (Тревожный Красный -> Фиолетовый) */}
            <div className={`absolute inset-0 bg-gradient-to-r from-red-600 to-purple-700 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className={`relative z-10 flex items-center gap-2 transition-colors ${isHovered ? 'text-white' : 'text-black'}`}>
              <Calculator size={22} />
              Узнать цену вашего хаоса
              <ArrowRight size={20} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;