import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    linksRapidos: [
      { name: "Sobre nós", href: "#" },
      { name: "Funcionalidades", href: "#" },
      { name: "Planos e preços", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    suporte: [
      { name: "Central de ajuda", href: "#" },
      { name: "Documentação técnica", href: "#" },
      { name: "Status do sistema", href: "#" },
      { name: "Contato", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">NodeX</h3>
              <p className="text-white/70 leading-relaxed">
                Simplifique sua Gestão Empresarial com inteligência, 
                praticidade e inovação.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-white/70">contato@nodex.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-white/70">(11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.linksRapidos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Conecte-se</h4>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-white/70 text-sm">
                Receba novidades e dicas de gestão empresarial
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors duration-300">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} NodeX — Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;