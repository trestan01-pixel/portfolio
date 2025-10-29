import myPhoto from '../assets/ruslan.png';

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Левая колонка с текстом */}
          {/* ИЗМЕНЕНО: Задан точный цвет текста #2c3e50 */}
          <div className="text-[#2c3e50] space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
              Обо мне
            </h2>
            <p className="text-lg font-semibold">
              Бизнес-архитектор с опытом масштабирования компаний.
            </p>
            <li className="flex items-center gap-3"></li>
            <p className="text-base">
              За последние 3 года:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"></span>
                <span>Увеличил оборот компании <strong className="font-bold text-[#2c3e50]">в 3 раза</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"></span>
                <span>Снизил стоимость лида <strong className="font-bold text-[#2c3e50]">в 2.2 раза</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"></span>
                <span>Сократил время обработки заявок <strong className="font-bold text-[#2c3e50]">с 4 дней до 15 минут</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"></span>
                <span>Создал <strong className="font-bold text-[#2c3e50]">30+ регламентов и процессов</strong></span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed pt-4">
              Специализируюсь на <span className="text-[#00d9ff] font-semibold">цифровой трансформации</span>, <span className="text-[#00d9ff] font-semibold">автоматизации</span> и построении систем, которые работают без постоянного контроля.
            </p>
          </div>

          {/* Правая колонка с карточкой */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              
              {/* ИЗМЕНЕНО: Карточка стала квадратной (w-80 h-80) и контент выровнен по центру */}
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-xl p-8 w-80 h-80 text-center text-white flex flex-col items-center justify-center">
                <div> {/* Дополнительная обертка для контента */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <img src={myPhoto} alt="Фото Руслана Юмагулова" className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold">Руслан Юмагулов</h3>
                  <p className="opacity-80">COO / Digital Transformation</p>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-[#1e1e2f] rounded-full flex items-center justify-center border-4 border-white">
                {/* ИЗМЕНЕНО: Текст "РЮ" стал голубым */}
                <span className="text-[#00d9ff] text-3xl font-bold">РЮ</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}