//CODIGO FANTASMA APENAS PARA NAO QUEBRAR A PAGINA, ELE NAO CONTEM NADA
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import logo from 'figma:asset/4802f6f96af7073bab4238fc5925fe6007987e8f.png';

export function HeroSection() {
  const [markedDays, setMarkedDays] = useState<number[]>([]);
  const [tentativeDays, setTentativeDays] = useState<number[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const workDays = Array.from({ length: 35 })
      .map((_, i) => i)
      .filter((i) => i % 7 !== 0 && i % 7 !== 6); // Apenas dias úteis

    const interval = setInterval(() => {
      const nextDay = workDays[currentIndex % workDays.length];
      
      // Adiciona como tentativo primeiro
      setTentativeDays((prev) => [...prev, nextDay]);
      
      // Depois de 800ms, confirma como marcado e remove do tentativo
      setTimeout(() => {
        setMarkedDays((prev) => {
          const newMarked = [...prev, nextDay];
          // Mantém apenas os últimos 5 dias marcados
          return newMarked.slice(-5);
        });
        setTentativeDays((prev) => prev.filter((d) => d !== nextDay));
      }, 800);

      currentIndex++;

      // Reset após completar o ciclo
      if (currentIndex % workDays.length === 0) {
        setTimeout(() => {
          setMarkedDays([]);
          setTentativeDays([]);
        }, 2000);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    null
  );
}
