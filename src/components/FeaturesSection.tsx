import { 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp, 
  Building2 
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Gestão Empresarial Completa",
    description: "Centralize todos os processos da sua empresa em uma única plataforma intuitiva e poderosa."
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description: "Dashboards dinâmicos com insights precisos para tomadas de decisão estratégicas."
  },
  {
    icon: Users,
    title: "Colaboração Multiusuário",
    description: "Trabalhe em equipe com permissões personalizadas e fluxos de aprovação inteligentes."
  },
  {
    icon: Shield,
    title: "Segurança Avançada (LGPD)",
    description: "Proteção máxima dos dados com criptografia de ponta e compliance total com a LGPD."
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos e ganhe mais tempo para focar no crescimento do negócio."
  },
  {
    icon: TrendingUp,
    title: "Gestão de Vendas Completa",
    description: "CRM integrado com pipeline visual, relatórios de performance e previsões de vendas."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recursos que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformam Negócios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Descubra como o NodeX pode revolucionar a gestão da sua empresa com tecnologia de ponta.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Pronto para experimentar todas essas funcionalidades?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Começar Agora
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;