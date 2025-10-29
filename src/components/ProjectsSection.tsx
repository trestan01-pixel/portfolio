import { Building, School, Car, BrainCircuit } from 'lucide-react';

const projectsData = [
  { icon: <Building size={32} />, title: "Medion: Рост оборота ×3", task: "Построить IT-отдел", solution: "Создал платформу, автоматизировал процессы", result: "Оборот ×3, CPL ↓2.2×" },
  { icon: <School size={32} />, title: "Школьная Лига: Оцифровка", task: "Навести порядок в хаосе", solution: "30+ регламентов, автоматизация за 7 месяцев", result: "4 дня → 15 минут" },
  { icon: <Car size={32} />, title: "Karso: IT-платформа", task: "Создать B2B-платформу", solution: "Разработка с нуля в Figma", result: "Партнерство со Сбером" },
  { isSpecial: true, icon: <BrainCircuit size={32} />, title: "AI-платформа для Сколково", task: "Разработать архитектуру AI-системы для прогнозирования успеха сделок.", solution: "Спроектировал data-driven модель, анализирующую коммуникации (звонки, чаты).", result: "Защитил проект, продемонстрировав применимость AI для повышения эффективности продаж." },
];

// Карточка со стандартным (бирюзовым) дизайном и эффектом при наведении
const NormalCard = ({ project }) => (
    <div className="bg-[#1e1e2f] border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col space-y-4 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="text-cyan-400">{project.icon}</div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
      </div>
      <div className="space-y-2 text-sm text-gray-400 flex-grow">
        <p>
          <strong className="font-medium text-cyan-400">Задача:</strong> {project.task}
        </p>
        <p>
          <strong className="font-medium text-cyan-400">Решение:</strong> {project.solution}
        </p>
        <p>
          <strong className="font-medium text-cyan-400">Результат:</strong> {project.result}
        </p>
      </div>
    </div>
);

// Специальная карточка с золотистым акцентом и эффектом при наведении
const SpecialCard = ({ project }) => (
    <div className="bg-[#1e1e2f] border border-amber-500/50 rounded-2xl p-6 h-full flex flex-col space-y-4 transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="text-amber-400">{project.icon}</div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
      </div>
      <div className="space-y-2 text-sm text-gray-400 flex-grow">
        <p>
          <strong className="font-medium text-amber-400">Задача:</strong> {project.task}
        </p>
        <p>
          <strong className="font-medium text-amber-400">Решение:</strong> {project.solution}
        </p>
        <p>
          <strong className="font-medium text-amber-400">Результат:</strong> {project.result}
        </p>
      </div>
    </div>
);


export default function ProjectsSection() {
  return (
    // ✅ ИЗМЕНЕНИЕ 1: Заменили `bg-black` на правильный темно-синий цвет `bg-[#111827]`
    <section className="bg-[#111827] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Ключевые кейсы трансформации
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <div key={index}>
              {/* ✅ ИЗМЕНЕНИЕ 2: Карточки теперь имеют класс `transition` и `hover:`, что добавляет анимацию при наведении */}
              {project.isSpecial 
                ? <SpecialCard project={project} /> 
                : <NormalCard project={project} />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}