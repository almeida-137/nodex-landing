import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a integração com outros sistemas?",
    answer: "O NodeX oferece APIs RESTful completas e integrações nativas com mais de 200 aplicações populares, incluindo CRMs, ERPs, ferramentas de contabilidade e plataformas de e-commerce. Nossa equipe técnica também pode desenvolver integrações customizadas para suas necessidades específicas."
  },
  {
    question: "Que tipo de suporte vocês oferecem?",
    answer: "Oferecemos suporte 24/7 através de chat, email e telefone. Todos os planos incluem acesso à nossa base de conhecimento, tutoriais em vídeo e webinars de treinamento. Clientes Premium têm acesso a um gerente de conta dedicado e suporte prioritário."
  },
  {
    question: "Como vocês garantem a segurança dos dados?",
    answer: "Utilizamos criptografia de ponta AES-256, autenticação de dois fatores obrigatória e hospedagem em servidores certificados ISO 27001. Somos 100% compatíveis com a LGPD e realizamos auditorias de segurança regulares. Todos os dados são mantidos em servidores brasileiros."
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais. Após o cancelamento, você mantém acesso aos recursos até o final do período já pago. Oferecemos também a exportação completa dos seus dados."
  },
  {
    question: "Como funciona o teste gratuito?",
    answer: "O teste gratuito de 14 dias inclui acesso completo a todos os recursos do plano escolhido, sem limitações. Não é necessário cartão de crédito para começar. Nossa equipe oferece onboarding gratuito para ajudar na configuração inicial."
  },
  {
    question: "O sistema funciona offline?",
    answer: "O NodeX possui funcionalidades offline limitadas através do nosso aplicativo mobile, permitindo visualizar dados previamente sincronizados e fazer anotações. Quando a conexão é restaurada, todos os dados são sincronizados automaticamente."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tire suas dúvidas sobre o NodeX e descubra como podemos ajudar sua empresa.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden border border-border/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0">
                    <div className="bg-accent/50 p-4 rounded-xl">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você a encontrar a solução perfeita para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/559991463832?text=Ol%C3%A1%2C%20vi%20o%20site%20do%20NodeX%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;