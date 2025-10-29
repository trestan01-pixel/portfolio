// src/components/ProjectsSection.tsx

import { Building, School, Car, BrainCircuit } from 'lucide-react';
// ✅ Мы больше не импортируем AiProjectCard, а определяем его прямо здесь

const projectsData = [
  { icon: <Building size={32} />, title: "Medion: Рост оборота ×3", task: "Построить IT-отдел", solution: "Создал платформу, автоматизировал процессы", result: "Оборот ×3, CPL ↓2.2×" },
  { icon: <School size={32} />, title: "Школьная Лига: Оцифровка", task: "Навести порядок в хаосе", solution: "30+ регламентов, автоматизация за 7 месяцев", result: "4 дня → 15 минут" },
  { icon: <Car size={32} />, title: "Karso: IT-платформа", task: "Создать B2B-платформу", solution: "Разработка с нуля в Figma", result: "Партнерство со Сбером" },
  { isSpecial: true, icon: <BrainCircuit size={32} />, title: "AI-платформа для Сколково", task: "Разработать архитектуру AI-системы для прогнозирования успеха сделок.", solution: "Спроектировал data-driven модель, анализирующую коммуникации (звонки, чаты).", result: "Защитил проект, продемонстрировав применимость AI для повышения эффективности продаж." },
];

const NormalCard = ({ project }) => (
    <div className="group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-[#00d9ff]">{project.icon}</div>
      <h3 className="text-xl font-bold">{project.title}</h3>
    </div>
    <div className="space-y-2 text-sm text-gray-300 flex-grow">
      <p><strong className="text-[#00d9ff]">Задача:</strong> {project.task}</p>
      <p><strong className="text-[#00d9ff]">Решение:</strong> {project.solution}</p>
      <p><strong className="text-[#00d9ff]">Результат:</strong> {project.result}</p>
    </div>
  </div>
);

// ✅ КОМПОНЕНТ AiProjectCard теперь живет прямо здесь и ни от чего не зависит
const AiProjectCard = ({ project }) => (
    <div 
        className="relative p-[2px] rounded-3xl h-full"
        style={{
            '--electric-border-color': '#dd8448', // Золотой цвет
            '--electric-light-color': 'oklch(from var(--electric-border-color) l c h)',
            '--gradient-color': 'oklch(from var(--electric-border-color) 0.3 calc(c / 2) h / 0.4)',
            '--color-neutral-900': 'oklch(0.185 0 0)',
            background: 'linear-gradient(-30deg, var(--gradient-color), transparent, var(--gradient-color)), linear-gradient(to bottom, var(--color-neutral-900), var(--color-neutral-900))'
        } as React.CSSProperties}
    >
        {/* Внутренняя структура для слоев */}
        <div className="relative h-full w-full">
            <div 
                className="w-full h-full rounded-3xl border-2 border-[var(--electric-border-color)]"
                style={{ filter: 'url(#electric-gold)' }} // Используем золотой фильтр
            ></div>
            <div className="absolute inset-0 rounded-3xl border-2 border-[oklch(from_var(--electric-border-color)_l_c_h_/_0.6)] blur-sm pointer-events-none"></div>
            <div className="absolute inset-0 rounded-3xl border-2 border-[var(--electric-light-color)] blur-md pointer-events-none"></div>
        </div>

        {/* Контент */}
        <div className="absolute inset-0 p-8 text-white/90 flex flex-col gap-4 font-sans">
            <div className="flex items-center gap-4">
                <div className="text-amber-400">{project.icon}</div>
                <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
            </div>
            <div>
                <p className="font-semibold text-amber-400">Задача: <span className="font-normal text-white/70">{project.task}</span></p>
            </div>
            <div>
                <p className="font-semibold text-amber-400">Решение: <span className="font-normal text-white/70">{project.solution}</span></p>
            </div>
            <div className="mt-auto">
                <p className="font-semibold text-amber-400">Результат: <span className="font-normal text-white/70">{project.result}</span></p>
            </div>
        </div>
    </div>
);


export default function ProjectsSection() {
  return (
    <section className="bg-[#101014] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Ключевые кейсы трансформации
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <div key={index}>
              {project.isSpecial 
                ? <AiProjectCard project={project} /> 
                : <NormalCard project={project} />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}