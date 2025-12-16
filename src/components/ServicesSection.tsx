import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Search, Rocket, Crown, Check, Activity, Layers, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';
// import Tilt from './Tilt'; // Убрали импорт Tilt, так как он мылит текст

const services = [
  {
    id: 'audit',
    title: "Стратегический Аудит",
    description: "«Фотография хаоса». Глубокая диагностика бизнеса: поиск потерь, уязвимостей и точек кратного роста.",
    icon: <Activity className="w-8 h-8 text-cyan-400" />,
    features: [
      "Анализ текущих бизнес-процессов",
      "Поиск «бутылочных горлышек»",
      "Оцифровка финансовых потерь",
      "Roadmap трансформации"
    ],
    checkColor: "text-cyan-400",
    borderColor: "border-gray-800 hover:border-cyan-500/50",
    delay: 0
  },
  {
    id: 'project',
    title: "Проектное Внедрение",
    description: "Полная пересборка бизнеса «под ключ». Превращаем ручное управление в системный механизм.",
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    features: [
      "Проектирование архитектуры (BPMN)",
      "Внедрение CRM и дашбордов",
      "Внедрение AI-агентов",
      "Написание регламентов и найм"
    ],
    checkColor: "text-blue-400",
    borderColor: "border-blue-500/50 shadow-blue-900/20",
    delay: 0.1,
    recommended: true
  },
  {
    id: 'retainer',
    title: "Fractional COO",
    description: "Внешний операционный директор. Регулярный менеджмент, контроль топ-команды и доведение системы до идеала.",
    icon: <Crown className="w-8 h-8 text-purple-400" />,
    features: [
      "Участие в советах директоров",
      "Контроль выполнения KPI/OKR",
      "Управление топ-менеджментом",
      "Стратегические сессии"
    ],
    checkColor: "text-purple-400",
    borderColor: "border-gray-800 hover:border-purple-500/50",
    delay: 0.2
  }
];

const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Форматы работы" 
          subtitle="От разовой диагностики до полноценного операционного партнерства" 
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            /* Убрали <Tilt>, оставили только motion.div */
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              viewport={{ once: true }}
              /* Добавил h-full flex flex-col, чтобы карточки были одной высоты */
              className={`relative h-full flex flex-col bg-[#111827] border rounded-2xl p-8 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 ${service.borderColor}`}
            >
              {/* Бейдж для рекомендуемого тарифа */}
              {service.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
                  Рекомендуемый
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gray-900 border border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                {service.description}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${service.checkColor}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <MagneticButton onClick={scrollToContact} className="w-full">
                <div className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 border text-center
                  ${service.recommended
                    ? 'bg-white text-black hover:bg-gray-200 border-transparent'
                    : 'bg-transparent text-white border-gray-700 hover:bg-white/5 hover:border-white/20'
                  }
                `}>
                  Обсудить задачу
                </div>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;