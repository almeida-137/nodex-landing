import { Check, TrendingUp, DollarSign, Target, Clock } from "lucide-react";
import businessIllustration from "@/assets/business-illustration.jpg";

const metrics = [
  { value: "+40%", label: "Produtividade", icon: TrendingUp, color: "text-primary" },
  { value: "60%", label: "Redução de Custos", icon: DollarSign, color: "text-secondary" },
  { value: "6 meses", label: "ROI Garantido", icon: Target, color: "text-primary" },
  { value: "90%", label: "Satisfação dos Clientes", icon: Clock, color: "text-secondary" },
];

const benefits = [
  "Implementação rápida em 48 horas",
  "Atualizações constantes e gratuitas",
  "Suporte especializado 24/7",
  "Integrações nativas com 200+ apps",
  "Treinamento completo da equipe",
  "Backup automático e seguro",
  "Relatórios personalizáveis",
  "API completa para desenvolvedores"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Impacto Real nos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Seus Negócios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Veja como empresas reais alcançaram resultados extraordinários com o NodeX.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Metrics Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 text-center group hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Benefits List */}
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Por que escolher o NodeX?
              </h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative">
              <img 
                src={businessIllustration}
                alt="Equipe trabalhando com analytics - Transformação digital empresarial"
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-elevated border border-primary/20">
              <div className="text-sm text-muted-foreground">Crescimento mensal</div>
              <div className="text-2xl font-bold text-primary">+127%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-elevated border border-secondary/20">
              <div className="text-sm text-muted-foreground">Tempo economizado</div>
              <div className="text-2xl font-bold text-secondary">15h/sem</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Junte-se a mais de 500 empresas que já transformaram seus resultados
            </h3>
            <p className="text-muted-foreground mb-6">
              Comece seu teste gratuito hoje mesmo e veja a diferença em 48 horas.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Iniciar Teste Gratuito de 14 Dias
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;