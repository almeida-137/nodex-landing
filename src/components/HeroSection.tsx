import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const HeroSection = () => {

  const scrollToPlans = () => {
    const section = document.getElementById("plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] bg-[image:radial-gradient(circle_at_center,white_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Simplifique sua{" "}
                <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Gestão Empresarial
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Inteligência, praticidade e centralização em um só lugar. O NodeX revoluciona 
                a forma como você gerencia seu negócio com automação inteligente.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToPlans} variant="hero" size="xl" className="group">
                Começar Agora
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button onClick={scrollToPlans} variant="hero-outline" size="xl">
                Ver Planos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-white/70">Empresas Ativas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">97%</div>
                <div className="text-white/70">Satisfação</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70">Suporte</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative lg:block hidden animate-fade-in">
            <div className="relative">
              <img 
                src={dashboardMockup} 
                alt="Dashboard NodeX - Interface de gestão empresarial moderna"
                className="w-full h-auto rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;