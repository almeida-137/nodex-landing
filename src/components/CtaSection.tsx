import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-cta relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[size:40px_40px] bg-[image:radial-gradient(circle_at_center,white_2px,transparent_2px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">
                Transformação Digital Garantida
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para transformar a{" "}
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                gestão da sua empresa?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comece agora mesmo seu teste gratuito e descubra porque empresas 
              inteligentes escolhem o NodeX para crescer mais rápido.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              variant="cta" 
              size="xl" 
              className="group text-lg px-12 py-6"
            >
              Começar Teste Grátis Agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2">14 dias</div>
              <div className="text-white/70">Teste grátis completo</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2">48h</div>
              <div className="text-white/70">Implementação rápida</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2">0%</div>
              <div className="text-white/70">Taxa de setup</div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1L5 4v5.5c0 3.5 2.4 6.9 5 8.5 2.6-1.6 5-5 5-8.5V4l-5-3zM8 10l2 2 4-4-1.5-1.5L10 9l-.5-.5L8 10z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white text-sm font-medium">100% Seguro e Confiável</div>
                <div className="text-white/70 text-xs">LGPD • SSL • ISO 27001</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default CtaSection;