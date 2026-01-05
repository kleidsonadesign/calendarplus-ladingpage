import { HeroSection } from './components/HeroSection';
import { BenefitSection } from './components/BenefitSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { PricingSection } from './components/PricingSection';
import { useEffect } from 'react';
import logo from 'figma:asset/4802f6f96af7073bab4238fc5925fe6007987e8f.png';

// Importação da logo da Korven
import korvenLogo from './assets/korven.png';

export default function App() {
  useEffect(() => {
    document.title = 'CalendarPlus';
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = logo;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* HEADER CORRIGIDO */}
      {/* 1. Removi 'backdrop-blur' e a transparência. Agora é 'bg-white' puro (Sólido) */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-md transition-all">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          
          {/* 2. Lado Esquerdo - Logo Korven AUMENTADA */}
          {/* Aumentei o container para w-60 para caber a logo grande sem espremer */}
          <div className="w-60 flex items-center justify-start">
             <img 
               src={korvenLogo} 
               alt="Desenvolvido por Korven" 
               // Mudei para 'h-16' (64px). Se ainda achar pequeno, mude para 'h-20'.
               className="w-18 h-18" 
             />
          </div>
          
          {/* Lado Central - Logo Calendar Plus */}
          {/* Mantida centralizada com posição absoluta */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <img src={logo} alt="Calendar Plus" className="w-12 h-12" />
            <span className="text-xl font-bold text-slate-800 tracking-tight hidden md:block">Calendar Plus</span>
          </div>
          
          {/* Lado Direito - Botão de Login */}
          {/* O container tem a mesma largura (w-60) do lado esquerdo para manter o centro perfeito */}
          <div className="w-60 flex justify-end">
            <a 
              href="https://calendarplus-login.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                group relative px-8 py-2.5 rounded-full 
                bg-slate-900 text-white text-sm font-semibold 
                shadow-lg hover:shadow-slate-900/40 hover:-translate-y-0.5
                transition-all duration-300 ease-in-out
                overflow-hidden
              "
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              <span className="relative z-10">Login</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <WhatsAppSection />
        <BenefitSection />
        <PricingSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Calendar Plus" className="w-8 h-8" />
                <span className="text-white">Calendar Plus</span>
              </div>
              <p className="text-sm">
                Automatize seus agendamentos e nunca mais perca um cliente.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Korven Lab. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
