// src/components/MedionExperienceCard.tsx

// ✅ ИСПРАВЛЕННЫЙ ПУТЬ: Используем alias '@'
import { ElectricCard } from '@/components/ElectricCard/ElectricCard';
import { Building, Calendar, TrendingUp } from 'lucide-react';

export const MedionExperienceCard = () => {
  return (
    <ElectricCard color="blue" className="w-full h-full">
      <div className="p-2 h-full">
        <div className="bg-white rounded-[1.3em] p-6 text-gray-800 flex flex-col gap-4 h-full">
          
          <div className="flex items-center gap-3">
            <Building className="text-sky-500" size={32} />
            <h3 className="text-3xl font-bold">Medion</h3>
          </div>
          
          <div>
            <p className="text-xl font-semibold text-sky-600">Технический директор</p>
            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <Calendar size={16} />
              <span>Октябрь 2022 - Февраль 2024 (1 год 5 месяцев)</span>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-lg">
            <li className="flex items-center gap-3"><TrendingUp className="text-sky-500" /> Рост компании в 3 раза за 2 года</li>
            <li className="flex items-center gap-3"><TrendingUp className="text-sky-500" /> Снижение стоимости лида в 2.2 раза</li>
            <li className="flex items-center gap-3"><TrendingUp className="text-sky-500" /> Создание IT-отдела с нуля</li>
            <li className="flex items-center gap-3"><TrendingUp className="text-sky-500" /> NPS внутренних клиентов: 5 → 9.1</li>
            <li className="flex items-center gap-3"><TrendingUp className="text-sky-500" /> Защита AI-проекта в Сколково</li>
          </ul>

        </div>
      </div>
    </ElectricCard>
  );
};