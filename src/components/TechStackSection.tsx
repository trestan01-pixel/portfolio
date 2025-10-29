// src/components/TechStackSection.tsx

const techStackData = [
  {
    category: "Методологии",
    skills: ["Agile", "Scrum", "Kanban", "SWOT", "BPMN", "CJM"],
  },
  {
    category: "Инструменты и Платформы",
    skills: ["Bitrix24", "amoCRM", "Miro", "Figma", "Power BI"],
  },
  {
    category: "Управленческие компетенции",
    skills: ["Product Management", "Управление командами", "Управление P&L", "Due Diligence", "AI-решения"],
  },
];

export default function TechStackSection() {
  return (
    <section className="bg-white text-[#2c3e50] py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* ИЗМЕНЕНО: Заголовку возвращен темный цвет, чтобы он был виден */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2c3e50]">
          Технический стек
        </h2>
        
        <div className="space-y-10">
          {techStackData.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-600 mb-4">{group.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill, i) => (
                  // ИЗМЕНЕНО: Фон тегов стал белым, а рамка - ярко-голубой
                  <div 
                    key={i} 
                    className="bg-white border-2 border-[#00d9ff] text-gray-800 rounded-full px-5 py-2 text-sm transition-all duration-300 hover:bg-[#00d9ff] hover:text-white hover:border-transparent cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}