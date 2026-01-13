import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-white border-b border-slate-100 overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      
      {/* --- EFEITOS DE FUNDO (Background Blobs) --- */}
      {/* Mancha Azul Esquerda */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      {/* Mancha Índigo Direita */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      {/* Grid sutil (opcional, dá um toque técnico) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />


      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8 hover:border-blue-200 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">
              Integrado com WhatsApp e Google Calendar
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
            Automatize seus agendamentos no{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Google Calendar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Elimine a troca de mensagens interminável. Permita que seus clientes agendem sozinhos, 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-7 text-lg h-auto rounded-full shadow-xl shadow-slate-200 transition-all hover:-translate-y-1"
            >
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-7 text-lg h-auto rounded-full border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Social Proof (Mais clean) */}
          <div className="border-t border-slate-100 pt-10">
            <p className="text-sm text-slate-400 mb-6 font-medium">CONFIADO POR MAIS DE 2.500 PROFISSIONAIS</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 em avaliações</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Setup Instantâneo</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Dados Seguros</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
