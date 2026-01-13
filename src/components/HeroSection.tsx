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
    <section className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            WhatsApp + Google Calendar = Automação Total
          </span>
        </div>

        {/* Main Title com animação */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
          Seus clientes agendam.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Você fatura.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-2xl mx-auto">
          Automatize 100% dos seus agendamentos via WhatsApp
        </p>
        <p className="text-lg text-slate-500 mb-12">
          Não perca mais clientes por demora na resposta
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://calendarplus-login.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
          >
            <span className="flex items-center gap-2 text-lg font-semibold">
              Começar Agora
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
          <button className="px-8 py-4 border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 rounded-xl transition-all duration-300 hover:scale-105">
            <span className="text-lg font-semibold">Ver Demonstração</span>
          </button>
        </div>

        {/* Stats/Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              +2.500
            </div>
            <div className="text-slate-600">Profissionais Ativos</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-600">Atendimento Automático</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              R$ 59
            </div>
            <div className="text-slate-600">A partir de</div>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="relative">
          {/* Cartão de WhatsApp simulando conversa */}

          {/* Gradient blur effects */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
