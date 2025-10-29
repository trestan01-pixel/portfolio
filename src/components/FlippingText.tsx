// src/components/FlippingText.tsx

// ИЗМЕНЕНО: Добавлено 4-е слово и изменены цвета для лучшего контраста
const words = [
  { text: "Бизнес-процессы", color: "bg-cyan-500" },
  { text: "IT-системы", color: "bg-blue-500" },
  { text: "Команды", color: "bg-rose-500" },
  // Добавляем четвертое слово, чтобы анимация была полной
  { text: "Бизнес-процессы", color: "bg-cyan-500" },
];

export default function FlippingText() {
  return (
    <div className="text-xl md:text-2xl font-semibold text-gray-200 uppercase flex items-center justify-center gap-3">
      <span>Строю эффективные</span>
      {/* ИЗМЕНЕНО: Задаем точную высоту */}
      <div className="h-[36px] overflow-hidden">
        {/* ИЗМЕНЕНО: Анимация теперь применяется к этому блоку */}
        <div className="animate-text-flip">
          {words.map((word, index) => (
            // ИЗМЕНЕНО: Задаем точную высоту и отступ
            <div key={index} className="h-[36px] mb-0 flex items-center">
              <div className={`text-white px-3 py-1 rounded-md ${word.color}`}>
                {word.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}