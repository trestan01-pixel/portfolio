// src/components/EducationSection.tsx

import { useState } from 'react';
import { GraduationCap, ChevronDown } from 'lucide-react';

const educationData = [
  { year: 2025, title: "AI Fluency: Framework & Foundations", subtitle: "Anthropic" },
  { year: 2024, title: "Коммерческий директор", subtitle: "Алексей Назаров" },
  { year: 2022, title: "Работа в amoCRM", subtitle: "официальный курс" },
  { year: 2021, title: "Power BI PRO", subtitle: "Skillbox" },
  { year: 2019, title: "SPIN 2.0", subtitle: "MANGO OFFICE" },
  { year: 2017, title: "Прямолинейная система продаж", subtitle: "Джордан Белфорт" },
];

const initialItemsToShow = 3;

export default function EducationSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? educationData : educationData.slice(0, initialItemsToShow);

  return (
    // ИЗМЕНЕНО: Фон стал темным, основной текст - белым
    <section className="bg-[#1e1e2f] text-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Образование и курсы
        </h2>

        <div className="space-y-4">
          {visibleItems.map((item, index) => (
            // ИЗМЕНЕНО: Стиль карточек адаптирован под темный фон
            <div 
              key={index} 
              className="group flex items-center justify-between p-6 bg-white/5 border-2 border-white/10 rounded-xl transition-all duration-300 hover:border-[#00d9ff] hover:bg-white/10 transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-6">
                <div className="bg-cyan-400 text-black font-bold text-sm rounded-full px-4 py-2 group-hover:bg-cyan-300 transition-colors">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.subtitle}</p>
                </div>
              </div>
              <GraduationCap className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
            </div>
          ))}
        </div>

        {!isExpanded && educationData.length > initialItemsToShow && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(true)}
              className="font-semibold text-cyan-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              Показать все курсы <ChevronDown size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}