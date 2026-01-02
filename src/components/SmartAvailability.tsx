import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// --- TYPES ---
type WidgetMode = 'simulated' | 'real';

interface AvailabilityStatus {
  state: 'available' | 'limited' | 'critical';
  dateLabel: string;
  color: 'cyan' | 'amber' | 'rose';
}

interface SmartAvailabilityProps {
  mode?: WidgetMode;
  className?: string;
}

// --- 🛠 HELPER: Добавляем честные рабочие дни ---
const addBusinessDays = (date: Date, days: number) => {
  const result = new Date(date);
  let added = 0;
  while (added < days) {
    result.setDate(result.getDate() + 1);
    // 0 = Вс, 6 = Сб. Если день не выходной, увеличиваем счетчик
    if (result.getDay() !== 0 && result.getDay() !== 6) {
      added++;
    }
  }
  return result;
}

// --- LOGIC ---
const calculateSimulatedSlot = (): AvailabilityStatus => {
  const today = new Date();
  const currentDay = today.getDate();
  
  // Форматирование месяца
  let monthName = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(today);
  monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  // --- ЛОГИКА 1: КРИТИЧЕСКАЯ СРОЧНОСТЬ (27 число и позже) ---
  // Конец месяца: "Осталось 1 место"
  if (currentDay >= 27) {
    return {
      state: 'critical',
      dateLabel: `Осталось 1 место на ${monthName}`,
      color: 'rose', // Красный
    };
  }

  // --- ЛОГИКА 2: ВЫСОКИЙ СПРОС (25 - 26 число) ---
  // Предконец месяца: "Осталось 3 места"
  if (currentDay >= 25) {
    return {
      state: 'limited',
      dateLabel: `Осталось 3 места на ${monthName}`,
      color: 'amber', // Желтый
    };
  }

  // --- ЛОГИКА 3: ОБЫЧНЫЙ РЕЖИМ (1 - 24 число) ---
  // Ищем дату через 2 РАБОЧИХ дня (не считая сегодня)
  // Пример: Пн -> Чт (+2 раб дня между ними: Вт, Ср)
  // Если нужно быстрее, поставь цифру 1 или 2.
  const targetDate = addBusinessDays(today, 2);

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  }).format(targetDate);

  return {
    state: 'available',
    dateLabel: `Ближайший слот: ${formattedDate}`,
    color: 'cyan',
  };
};

const SmartAvailability: React.FC<SmartAvailabilityProps> = ({ 
  mode = 'simulated', 
  className = '' 
}) => {
  const [status, setStatus] = useState<AvailabilityStatus | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      if (mode === 'simulated') {
        setStatus(calculateSimulatedSlot());
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, [mode]);

  if (!status) return null;

  // Цвета
  const colors = {
    cyan: {
      dot: 'bg-cyan-400',
      glow: 'bg-cyan-400',
      text: 'text-cyan-100',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/40'
    },
    amber: {
      dot: 'bg-amber-400',
      glow: 'bg-amber-400',
      text: 'text-amber-100',
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/40'
    },
    rose: {
      dot: 'bg-rose-500',
      glow: 'bg-rose-500',
      text: 'text-rose-100',
      border: 'border-rose-500/30',
      bg: 'bg-rose-950/40'
    }
  };

  const theme = colors[status.color];

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      key={status.dateLabel}
      className={`
        flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full 
        backdrop-blur-md border shadow-lg select-none cursor-default
        transition-colors duration-500
        ${theme.bg} ${theme.border} ${className}
      `}
    >
      <div className="relative flex items-center justify-center w-2 h-2 md:w-2.5 md:h-2.5">
        <motion.span
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.glow}`}
        />
        <span className={`relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 ${theme.dot} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
      </div>

      <span className={`text-[10px] md:text-xs font-mono font-medium tracking-wide uppercase ${theme.text}`}>
        {status.dateLabel}
      </span>
    </motion.div>
  );
};

export default SmartAvailability;