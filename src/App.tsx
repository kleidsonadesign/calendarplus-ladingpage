import { HeroSection } from './components/HeroSection';
import { BenefitSection } from './components/BenefitSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { PricingSection } from './components/PricingSection';
import { useEffect } from 'react';
import logo from 'figma:asset/4802f6f96af7073bab4238fc5925fe6007987e8f.png';

// 1. Importação da logo da Korven (Certifique-se que o caminho está correto)
import korvenLogo from './assets/korven.png';

export default function App() {
  useEffect(() => {
    // Set page title
    document.title = 'CalendarPlus';
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = logo;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Header Fixo 
          'sticky top-0': Faz o menu acompanhar o scroll.
          'backdrop-blur-md': Aumentei o desfoque para ficar mais bonito ao passar por cima do conteúdo.
          'shadow-sm': Adicionei uma sombra leve para separar do conteúdo.
      */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
          
          {/* 1. Lado Esquerdo - Logo Korven (Developer) */}
          <div className="w-24 flex items-center justify-start">
             <img 
               src={korvenLogo} 
               alt="Desenvolvido por Korven" 
               className="h-8 w-auto object-contain hover:opacity-80 transition-opacity" 
             />
          </div>
          
          {/* Lado Central - Logo Calendar Plus */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <img src={logo} alt="Calendar Plus" className="w-12 h-12" />
            <span className="text-xl font-semibold text-slate-800">Calendar Plus</span>
          </div>
          
          {/* 2. Lado Direito - Botão de Login em Destaque */}
          <div className="w-24 flex justify-end">
            <a 
              href="https://calendarplus-login.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                group relative px-6 py-2 rounded-full 
                bg-slate-900 text-white text-sm font-medium 
                shadow-lg hover:shadow-slate-900/30 hover:-translate-y-0.5
                transition-all duration-300 ease-in-out
                overflow-hidden
              "
            >
              {/* Efeito de Overlay (Brilho ao passar o mouse) */}
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
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Calendar Plus. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
