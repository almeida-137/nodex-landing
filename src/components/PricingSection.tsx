import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "89",
    period: "mês",
    description: "Perfeito para pequenas empresas que estão começando",
    features: [
      "Até 5 usuários",
      "10GB de armazenamento",
      "Relatórios básicos",
      "Suporte por email",
      "Integrações essenciais",
      "Dashboard personalizado"
    ],
    popular: false,
  buttonText: "Começar Agora",
  buttonVariant: "outline" as const,
  whatsappMsg: "Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20B%C3%A1sico%20do%20NodeX%20e%20gostaria%20de%20saber%20mais!"
  },
  {
    name: "Profissional",
    price: "189",
    period: "mês",
    description: "Ideal para empresas em crescimento",
    features: [
      "Até 50 usuários",
      "100GB de armazenamento",
      "Relatórios avançados",
      "Suporte prioritário 24/7",
      "Todas as integrações",
      "Analytics em tempo real",
      "Automação avançada",
      "API completa"
    ],
    popular: true,
  buttonText: "Começar Agora",
  buttonVariant: "hero" as const,
  whatsappMsg: "Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20Profissional%20do%20NodeX%20e%20gostaria%20de%20saber%20mais!"
  },
  {
    name: "Premium",
    price: "299",
    period: "mês",
    description: "Para grandes empresas com necessidades específicas",
    features: [
      "Usuários ilimitados",
      "Armazenamento ilimitado",
      "Relatórios personalizados",
      "Gerente de conta dedicado",
      "Integrações customizadas",
      "White label disponível",
      "Backup em tempo real",
      "Compliance avançado"
    ],
    popular: false,
  buttonText: "Começar Agora",
  buttonVariant: "secondary" as const,
  whatsappMsg: "Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20Premium%20do%20NodeX%20e%20gostaria%20de%20saber%20mais!"
  }
];

const PricingSection = () => {
  return (
    <section id="plans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos e{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Escolha o plano ideal para sua empresa.
          </p>
          
          {/* Discount Banner */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              30% de desconto no primeiro ano • Oferta limitada
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group ${
                plan.popular ? 'ring-2 ring-primary scale-105 lg:scale-110' : 'hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    size="lg"
                    className="w-full mb-6"
                    asChild
                  >
                    <a
                      href={`https://wa.me/559991463832?text=${plan.whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.buttonText}
                    </a>
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground mb-4">Incluso no plano:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${plan.popular ? 'opacity-100' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem 30% de desconto no 1º ano
          </p>
          <div className="flex flex-wrap gap-8 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Sem taxa de setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Suporte incluído</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Atualizações gratuitas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;