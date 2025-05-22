import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PIAP</h3>
            <p className="text-neutral-300 mb-4 max-w-md">
              Conectando ideias inovadoras aos melhores profissionais em automação personalizada. 
              Transformamos sua visão em realidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('funcionamento')}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solicitar')}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Solicitar Projeto
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-neutral-300">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contato@piap.com.br
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (11) 9999-9999
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                São Paulo, SP
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-300">
          <p>&copy; 2024 PIAP - Plataforma de Intermediação para Automação Personalizada. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
