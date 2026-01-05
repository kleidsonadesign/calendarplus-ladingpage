import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function PricingSection() {
  const plans = [
    {
      name: 'Start',
      price: 'R$ 59,90',
      period: '/mês',
      description: 'Para Autônomos',
      subtitle: 'Barbeiros, Psicólogos',
      limit: '50 agendamentos/mês',
      phrase: 'Custa menos que um agendamento perdido.',
      features: [
        'Até 50 agendamentos por mês',
        'Integração Google Calendar',
        'Integração WhatsApp',
        'Notificações automáticas',
        'Suporte por email',
        'Painel de controle básico',
      ],
      highlighted: false,
      cta: 'Começar Agora',
    },
    {
      name: 'Pro',
      price: 'R$ 149,90',
      period: '/mês',
      description: 'Para Clínicas Pequenas',
      subtitle: 'e Escritórios',
      limit: '200 agendamentos/mês',
      phrase: 'Sua secretária 24 horas por dia.',
      features: [
        'Até 200 agendamentos por mês',
        'Integração Google Calendar',
        'Integração WhatsApp',
        'Notificações automáticas',
        'Suporte prioritário',
        'API de integração',
      ],
      highlighted: true,
      cta: 'Começar Agora',
      badge: 'Mais Popular',
    },
    {
      name: 'Personalizado',
      price: 'A Combinar',
      period: '/mês',
      description: 'Para Grandes Clínicas',
      subtitle: 'Operações em escala',
      limit: 'Ilimitado',
      phrase: 'Atendimento massivo sem fila de espera.',
      features: [
        'Agendamentos ilimitados',
        'Integração Google Calendar',
        'Integração WhatsApp',
        'Notificações automáticas',
        'Suporte 24/7 dedicado',
        'Múltiplas unidades e profissionais',
      ],
      highlighted: false,
      cta: 'Falar com Vendas',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-blue-900">Preços Transparentes</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Cancele quando quiser, sem multas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-1.5">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full flex flex-col transition-all duration-300 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'border-2 border-blue-500 shadow-xl md:scale-105'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.highlighted && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    )}
                  </div>
                  <CardDescription>
                    {plan.description}
                    <br />
                    <span className="text-slate-500">{plan.subtitle}</span>
                  </CardDescription>

                  {/* Price */}
                  <div className="pt-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl">{plan.price}</span>
                      <span className="text-slate-500 mb-1">{plan.period}</span>
                    </div>
                    <div className="text-sm text-slate-500 mt-2">
                      {plan.limit}
                    </div>
                  </div>

                  {/* Phrase */}
                  <div
                    className={`mt-4 p-3 rounded-lg ${
                      plan.highlighted
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        plan.highlighted ? 'text-blue-900' : 'text-slate-700'
                      }`}
                    >
                      "{plan.phrase}"
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? 'text-blue-600'
                              : 'text-green-600'
                          }`}
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
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Precisa de um plano customizado? Entre em contato conosco.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Pagamento seguro</span>
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
