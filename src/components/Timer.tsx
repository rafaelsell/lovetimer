import { useEffect, useState } from "react";

interface TimerProps {
  startDate: Date;
}

const calculateDuration = (startDate: Date) => {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const Timer = ({ startDate }: TimerProps) => {
  const [duration, setDuration] = useState(calculateDuration(startDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(calculateDuration(startDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gray-800 rounded-xl shadow-2xl border border-pink-500/20 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-pink-500">Tempo de Namoro</h2>
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="flex flex-col space-y-2">
          <span className="text-5xl font-bold text-white">{duration.days}</span>
          <span className="text-sm text-pink-300">Dias</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-5xl font-bold text-white">{duration.hours}</span>
          <span className="text-sm text-pink-300">Horas</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-5xl font-bold text-white">{duration.minutes}</span>
          <span className="text-sm text-pink-300">Minutos</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-5xl font-bold text-white">{duration.seconds}</span>
          <span className="text-sm text-pink-300">Segundos</span>
        </div>
      </div>
    </div>
  );
};