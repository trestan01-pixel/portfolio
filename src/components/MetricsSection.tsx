// src/components/MetricsSection.tsx

// ИЗМЕНЕНО: Импортируем иконки из Lucide
import { TrendingUp, Target, FileText, CheckCircle } from 'lucide-react';

// ИЗМЕНЕНО: Добавляем поле 'icon' для каждой метрики
const metricsData = [
  {
    icon: <TrendingUp size={32} className="text-[#00d9ff]" />,
    value: "×3",
    title: "Рост оборота",
    subtitle: "За 2 года работы",
  },
  {
    icon: <Target size={32} className="text-[#00d9ff]" />,
    value: "2.2×",
    title: "Снижение CPL",
    subtitle: "Оптимизация затрат",
  },
  {
    icon: <FileText size={32} className="text-[#00d9ff]" />,
    value: "30+",
    title: "Регламентов",
    subtitle: "Создано процессов",
  },
  {
    icon: <CheckCircle size={32} className="text-[#00d9ff]" />,
    value: "93-97%",
    title: "Выполнение",
    subtitle: "KPI команды",
  },
];

// Компонент одной карточки, теперь он принимает и иконку
const MetricCard = ({ icon, value, title, subtitle }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-[#00d9ff] transform hover:-translate-y-2">
    {/* ИЗМЕНЕНО: Добавляем иконку над цифрой */}
    <div className="mb-4">{icon}</div>
    <p className="text-5xl font-extrabold text-[#00d9ff] mb-2">{value}</p>
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{subtitle}</p>
  </div>
);

export default function MetricsSection() {
  return (
    <section className="bg-[#1e1e2f] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Результаты в цифрах
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon} // Передаем иконку в компонент
              value={metric.value}
              title={metric.title}
              subtitle={metric.subtitle}
            />
          ))}
        </div>
        <p className="text-center text-gray-400 mt-16 max-w-3xl mx-auto">
          Каждая цифра — это результат системного подхода к управлению и внедрения современных технологий в бизнес-процессы
        </p>
      </div>
    </section>
  );
}