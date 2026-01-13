import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-slate-50 border-b border-slate-200 overflow-hidden pt-20 pb-28 md:pt-32 md:pb-40">
      
      {/* --- EFEITOS DE FUNDO --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* --- CONTEÚDO --- */}
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6 cursor-default hover:border-blue-300 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Nova Integração
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight leading-[1.1]">
            Automatize seus agendamentos no{' '}
            <span className="text-blue-600">
              Google Calendar
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Elimine a troca de mensagens interminável. Permita que seus clientes agendem sozinhos, 24/7.
          </p>

          {/* --- BOTÕES AJUSTADOS --- */}
          {/* Removi o 'min-w' para eles não ficarem esticados e reduzi o gap para 3 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-12">
            
            <Button 
              size="xl" 
              className="w-full sm:w-auto shadow-md hover:-translate-y-0.5 transition-all bg-slate-900 hover:bg-slate-800"
            >
              Começar Agora
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              className="w-full sm:w-auto border-2 bg-white text-slate-700 hover:bg-slate-50"
            >
              Ver Demonstração
            </Button>

          </div>

          {/* Prova Social */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 text-base">★★★★★</span>
              <span>4.9/5 avaliações</span>
            </div>
            
            <div className="hidden sm:block text-slate-300">•</div>
            
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Setup Instantâneo</span>
            </div>
            
            <div className="hidden sm:block text-slate-300">•</div>
            
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Dados Seguros</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
