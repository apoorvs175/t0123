import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, eventName }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsPast(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Set up interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  if (isPast) {
    return (
      <div className="text-center p-6 bg-pink-50 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-pink-700 mb-2">{eventName}</h3>
        <p className="text-gray-700">This special day has already happened! 💖</p>
      </div>
    );
  }

  return (
    <div className="text-center p-6 bg-pink-50 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold text-pink-700 mb-4">{eventName}</h3>
      
      <div className="grid grid-cols-4 gap-2">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        {formatDate(targetDate)}
      </p>
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white w-full py-2 rounded-lg shadow-sm mb-1">
      <span className="text-2xl font-bold text-pink-600">{value}</span>
    </div>
    <span className="text-xs text-gray-600">{label}</span>
  </div>
);

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default CountdownTimer;