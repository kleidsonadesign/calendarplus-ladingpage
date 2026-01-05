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
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl relative">
          
          {/* 1. Lado Esquerdo - Logo Korven */}
          {/* Defini w-64 para garantir espaço, mas usei 'h-12' na imagem para travar a altura */}
          <div className="w-64 flex items-center justify-start">
             <img 
               src={korvenLogo} 
               alt="Desenvolvido por Korven" 
               // CORREÇÃO AQUI: 'h-12' é uma altura segura. 'w-auto' mantém a proporção.
               className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity" 
             />
          </div>
          
          {/* 2. Lado Central - Logo Calendar Plus */}
          {/* Mantido com position absolute para ficar EXATAMENTE no meio da tela */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            <img src={logo} alt="Calendar Plus" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight whitespace-nowrap">
              Calendar Plus
            </span>
          </div>
          
          {/* 3. Lado Direito - Botão de Login */}
          <div className="w-64 flex justify-end">
            <a 
              href="https://calendarplus-login.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                group relative px-6 py-2.5 rounded-full 
                bg-slate-900 text-white text-sm font-semibold 
                shadow-md hover:shadow-lg hover:-translate-y-0.5
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
                <span className="text-white font-bold">Calendar Plus</span>
              </div>
              <p className="text-sm text-slate-400">
                Automatize seus agendamentos e nunca mais perca um cliente.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center text-slate-500">
            © {new Date().getFullYear()} Korven Lab. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
