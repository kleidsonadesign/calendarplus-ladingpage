import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-slate-50 border-b border-slate-200 overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      
      {/* --- EFEITO DE FUNDO (Padrão de Pontos + Luz) --- */}
      {/* Grid de pontos para dar textura técnica */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Luz Azul Central (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />


      {/* --- CONTEÚDO --- */}
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="text-center">
          
          {/* Badge de Integração */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:border-blue-300 transition-colors cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">
              Nova integração: Google Calendar
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
            Automatize seus agendamentos no{' '}
            <span className="text-blue-600 inline-block">
              Google Calendar
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Elimine a troca de mensagens interminável. Permita que seus clientes agendem sozinhos, 24 horas por dia.
          </p>

          {/* BOTÕES CORRIGIDOS */}
          {/* Removi 'w-full' e usei 'inline-flex' com larguras controladas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="min-w-[180px] rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 h-12 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Começar Agora
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="min-w-[180px] rounded-full border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-semibold px-8 h-12 transition-all"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Prova Social (Rodapé do Hero) */}
          <div className="border-t border-slate-200/60 pt-8 flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex text-yellow-400">
                 ★★★★★
              </span>
              <span className="text-slate-700">4.9/5 em avaliações</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-700">Setup Instantâneo</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-slate-700">Dados 100% Seguros</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
