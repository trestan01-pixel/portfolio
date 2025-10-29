// src/components/CompetenciesSection.tsx

// ИЗМЕНЕНО: Импортируем иконки из Lucide
import { Building2, Settings, Users } from 'lucide-react';

const competenciesData = [
  {
    icon: <Building2 size={32} className="text-[#00d9ff]" />,
    title: "Бизнес-архитектура",
    items: ["Проектирование процессов (BPMN)", "SWOT-анализ и Due Diligence", "Построение операционных моделей", "Стратегическое планирование"],
  },
  {
    icon: <Settings size={32} className="text-[#00d9ff]" />,
    title: "Цифровая трансформация",
    items: ["Автоматизация процессов", "Внедрение AI-решений", "CRM-системы (amoCRM, Bitrix24)", "BI-аналитика (Power BI)"],
  },
  {
    icon: <Users size={32} className="text-[#00d9ff]" />,
    title: "Управление",
    items: ["Построение отделов с нуля", "Снижение операционных расходов", "Масштабирование бизнеса", "Разработка регламентов и KPI"],
  },
];

export default function CompetenciesSection() {
  return (
    <section id="competencies" className="bg-[#1e1e2f] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Ключевые компетенции</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competenciesData.map((competency, index) => (
            <div key={index} className="group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                {/* ИЗМЕНЕНО: Рендерим иконку вместо эмодзи */}
                <div>{competency.icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#2c3e50] transition-colors duration-300">{competency.title}</h3>
              </div>
              <ul className="space-y-2">
                {competency.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#00d9ff] flex-shrink-0"></span>
                    <span className="text-gray-300 group-hover:text-gray-700 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}