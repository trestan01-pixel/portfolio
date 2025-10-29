import { Building, Calendar, TrendingUp, Briefcase, Car, UserCheck } from 'lucide-react';

// ✅ Данные полностью обновлены, чтобы соответствовать вашему скриншоту
const experienceData = [
  {
    company: 'Школьная Лига',
    role: 'Коммерческий директор',
    period: 'Март 2025 - Сентябрь 2025 (7 месяцев)',
    icon: <Briefcase size={24} />,
    achievements: [
      'Полная оцифровка компании за 7 месяцев',
      'Разработал 30+ регламентов и процессов',
      'Автоматизация: 4 дня → 2 часа → 15 минут',
      'Построил HR-систему: найм, адаптация, мотивация',
    ],
  },
  {
    company: 'Medion',
    role: 'Технический директор',
    period: 'Октябрь 2022 - Февраль 2025 (2 год 6 месяцев)',
    icon: <Building size={24} />,
    achievements: [
      'Рост компании в 3 раза за 2 года',
      'Снижение стоимости лида в 2.2 раза',
      'Создание IT-отдела с нуля',
      'NPS внутренних клиентов: 5 → 9.1',
      'Защита AI-проекта в Сколково',
    ],
  },
  {
    company: 'Karso',
    role: 'Заместитель генерального директора',
    period: 'Май 2021 - Октябрь 2022 (1 год 6 месяцев)',
    icon: <Car size={24} />,
    achievements: [
      'Разработка IT-платформы с нуля',
      'Внедрение CRM и автоматизация продаж',
      'Партнерство с Drom.ru и СберАвто',
    ],
  },
  {
    company: 'Mango Office',
    role: 'Менеджер по продажам',
    period: '2019 - 2020',
    icon: <Briefcase size={24} />,
    achievements: [
      'Изучал внутренние процессы IT-компании, что позволило достичь 13-го места в рейтинге продаж по России среди 250 менеджеров.',
    ],
  },
  {
    company: 'Uber / Яндекс',
    role: 'Партнер-рекрутер',
    period: '2016 - 2018',
    icon: <UserCheck size={24} />,
    achievements: [
      'Самостоятельно создал сайт и настроил рекламные кампании для привлечения водителей, что позволило войти в топ-3 рекрутеров города.',
    ],
  },
];

// ✅ Компонент карточки полностью переделан под новый, единый стиль
const ExperienceCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-cyan-200/80 shadow-sm w-full max-w-md">
      <div className="flex items-center gap-4 mb-2">
        <div className="text-cyan-500">{item.icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{item.company}</h3>
      </div>
      <p className="font-semibold text-cyan-600 ml-11">{item.role}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 mb-4 ml-11">
        <Calendar size={16} />
        <span>{item.period}</span>
      </div>
      <ul className="space-y-2">
        {item.achievements.map((ach, index) => (
          <li key={index} className="flex items-start gap-3">
            <TrendingUp className="text-cyan-500 mt-1 flex-shrink-0" size={16} />
            <span className="text-gray-600">{ach}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    // ✅ Фон изменен на чисто белый
    <section className="bg-white text-gray-800 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          Опыт работы
        </h2>
        
        {/* ✅ Новая верстка для расположения карточек слева и справа */}
        <div className="relative">
          {/* Вертикальная линия временной шкалы */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-200/80 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative flex items-center"
                // Двигаем четные элементы вправо, нечетные влево
                style={{ justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
              >
                {/* Точка на временной шкале */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-cyan-400"></div>

                {/* Отступ для карточки */}
                <div className={index % 2 === 0 ? 'pr-12' : 'pl-12'} style={{ width: '50%' }}>
                  <ExperienceCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}