"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date("April 1, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00", hours: "00", minutes: "00", seconds: "00"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimerBox = ({ value, label }: { value: string, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="font-orbitron font-bold text-4xl md:text-6xl text-white drop-shadow-lg mb-2 w-20 md:w-32 text-center">
        {value}
      </div>
      <div className="uppercase tracking-[0.2em] text-xs md:text-sm text-gray-400">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-6 flex justify-center items-center gap-4 md:gap-12">
        <TimerBox value={timeLeft.days} label="Days" />
        <div className="font-orbitron text-4xl md:text-6xl text-white/20 animate-pulse pb-8">:</div>
        <TimerBox value={timeLeft.hours} label="Hours" />
        <div className="font-orbitron text-4xl md:text-6xl text-white/20 animate-pulse pb-8">:</div>
        <TimerBox value={timeLeft.minutes} label="Minutes" />
        <div className="font-orbitron text-4xl md:text-6xl text-white/20 animate-pulse pb-8">:</div>
        <TimerBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
}
