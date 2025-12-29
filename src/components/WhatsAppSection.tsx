import { MessageCircle, Calendar, CheckCircle, Zap } from 'lucide-react';

export function WhatsAppSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-900">Integração WhatsApp</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Seus clientes agendam direto pelo WhatsApp
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            O Calendar Plus se conecta ao seu WhatsApp e automatiza todo o processo de agendamento. 
            Seus clientes conversam normalmente e o sistema faz o resto.
          </p>
        </div>

        {/* How it Works */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Steps */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-700">1</span>
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Cliente manda mensagem no WhatsApp</h3>
                <p className="text-slate-600">
                  Seu cliente envia uma mensagem pedindo para agendar um horário, como sempre faz.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700">2</span>
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Calendar Plus processa automaticamente</h3>
                <p className="text-slate-600">
                  Nossa IA entende a mensagem, consulta sua agenda no Google Calendar e encontra os melhores horários disponíveis.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700">3</span>
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Agendamento confirmado instantaneamente</h3>
                <p className="text-slate-600">
                  O cliente escolhe o horário e recebe confirmação na hora. Tudo vai direto para seu Google Calendar, sem você fazer nada.
                </p>
              </div>
            </div>
          </div>

          {/* Right - WhatsApp Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-sm mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white">Sua Empresa</h4>
                  <p className="text-green-100 text-xs">online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 bg-slate-50 min-h-[400px]">
                {/* Client message */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow max-w-[80%]">
                    <p className="text-sm text-slate-800">
                      Oi! Gostaria de agendar um horário para amanhã se possível
                    </p>
                    <span className="text-xs text-slate-400 mt-1 block">14:30</span>
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg rounded-tr-none p-3 shadow max-w-[80%]">
                    <p className="text-sm text-white">
                      Olá! 😊 Tenho os seguintes horários disponíveis para amanhã:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="bg-white/20 rounded p-2 text-white text-sm">
                        ✓ 09:00 - 10:00
                      </div>
                      <div className="bg-white/20 rounded p-2 text-white text-sm">
                        ✓ 14:00 - 15:00
                      </div>
                      <div className="bg-white/20 rounded p-2 text-white text-sm">
                        ✓ 16:00 - 17:00
                      </div>
                    </div>
                    <p className="text-sm text-white mt-2">
                      Qual horário prefere?
                    </p>
                    <span className="text-xs text-green-100 mt-1 block">14:30</span>
                  </div>
                </div>

                {/* Client choice */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow max-w-[80%]">
                    <p className="text-sm text-slate-800">14:00 está perfeito!</p>
                    <span className="text-xs text-slate-400 mt-1 block">14:31</span>
                  </div>
                </div>

                {/* Confirmation */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg rounded-tr-none p-3 shadow max-w-[80%]">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <p className="text-sm text-white">
                        Agendamento confirmado!
                      </p>
                    </div>
                    <p className="text-sm text-white">
                      Amanhã às 14:00<br />
                      Você receberá um lembrete 1 hora antes ⏰
                    </p>
                    <span className="text-xs text-green-100 mt-1 block">14:31</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-green-200 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-900">Resposta em</p>
                  <p className="text-green-600">menos de 5 segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-slate-900 mb-2">100% pelo WhatsApp</h3>
            <p className="text-slate-600">
              Seus clientes não precisam entrar em nenhum site ou app. Tudo acontece no WhatsApp que eles já usam.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-slate-900 mb-2">Sincronizado com Google Calendar</h3>
            <p className="text-slate-600">
              Todos os agendamentos vão automaticamente para sua agenda do Google. Você vê tudo em um só lugar.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-slate-900 mb-2">Resposta instantânea</h3>
            <p className="text-slate-600">
              Seus clientes recebem resposta em segundos, mesmo de madrugada ou fim de semana. Zero tempo de espera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
