import { HeroSection } from './components/HeroSection';
import { BenefitSection } from './components/BenefitSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { PricingSection } from './components/PricingSection';
import { useEffect } from 'react';
import logo from 'figma:asset/4802f6f96af7073bab4238fc5925fe6007987e8f.png';

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
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          {/* Spacer for alignment */}
          <div className="w-24" />
          
          {/* Centered Logo and Name */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <img src={logo} alt="Calendar Plus" className="w-14 h-14" />
            <span className="text-xl">Calendar Plus</span>
          </div>
          
          {/* Right side - Login Button */}
          <a 
            href="https://calendarplus-login.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-slate-700 hover:text-slate-900 transition-colors rounded-[1px]"
          >
            Login
          </a>
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
            © 2025 Calendar Plus. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}