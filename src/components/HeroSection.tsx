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
    <section className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-sm text-blue-900">
            Integrado com WhatsApp e Google Calendar
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
          Automatize seus agendamentos no Google Calendar
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12">
          Não perca clientes por demora na resposta.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 px-8 py-6 h-auto rounded-lg"
          >
            Começar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 h-auto rounded-lg border-slate-300"
          >
            Ver Demonstração
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 em avaliações</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>+2.500 profissionais ativos</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Sem taxa de setup</span>
          </div>
        </div>

        {/* Hero Image/Illustration Placeholder */}
        <div className="mt-16 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-8">
            {/* Mock Dashboard */}
            <div className="space-y-4">
              {/* Calendar Header */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Calendar Plus" className="w-10 h-10" />
                  <div>
                    <h3 className="text-slate-900">Janeiro 2025</h3>
                    <p className="text-sm text-slate-500">Agendamentos automáticos</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-9 px-3 bg-slate-100 hover:bg-slate-200 rounded text-sm text-slate-700 transition-colors">
                    Hoje
                  </button>
                  <button className="h-9 w-9 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center text-white transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Days of week */}
              <div className="grid grid-cols-7 gap-2 pb-2">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs text-slate-500 font-medium"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 30 }).map((_, i) => {
                  const dayNumber = i + 1;
                  const isWeekend = i % 7 === 0 || i % 7 === 6;
                  const isMarked = markedDays.includes(i);
                  const isTentative = tentativeDays.includes(i);
                  
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded transition-all duration-500 flex items-center justify-center relative ${
                        isWeekend
                          ? 'bg-slate-50 text-slate-400'
                          : isMarked
                            ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white scale-110 shadow-lg'
                            : isTentative
                              ? 'bg-blue-100 text-blue-900 scale-105'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span className="text-sm font-medium">{dayNumber}</span>
                      {isMarked && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-200 max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 mb-1">Agendamento confirmado</p>
                  <p className="text-xs text-slate-500">João Silva - 14:00</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-slate-200 max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 mb-1">Novo pedido</p>
                  <p className="text-xs text-slate-500">Maria - Amanhã 10:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient blur effects */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}