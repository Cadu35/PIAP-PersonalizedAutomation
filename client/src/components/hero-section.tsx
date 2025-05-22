import { Button } from "@/components/ui/button";
import { Rocket, Cpu, Box, ServerCog, Handshake } from "lucide-react";

export default function HeroSection() {
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
    <section id="inicio" className="pt-16 min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-in fade-in duration-1000">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Conecte-se com os
              <span className="text-orange-400 block">Melhores Profissionais</span>
              em Automação
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A PIAP é a plataforma que conecta clientes, desenvolvedores de circuitos eletrônicos e designers 3D para criar projetos personalizados de automação com qualidade profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('solicitar')}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                size="lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Solicitar Projeto Agora
              </Button>
              <Button 
                onClick={() => scrollToSection('sobre')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all"
                size="lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-lg">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center animate-bounce">
                  <Cpu className="h-12 w-12 text-white mb-2 mx-auto" />
                  <p className="text-white text-sm font-medium">Circuitos</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center animate-bounce" style={{animationDelay: "1s"}}>
                  <Box className="h-12 w-12 text-white mb-2 mx-auto" />
                  <p className="text-white text-sm font-medium">Design 3D</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center animate-bounce" style={{animationDelay: "2s"}}>
                  <ServerCog className="h-12 w-12 text-white mb-2 mx-auto" />
                  <p className="text-white text-sm font-medium">Automação</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="bg-orange-500 rounded-full p-4 inline-block animate-bounce" style={{animationDelay: "0.5s"}}>
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <p className="text-white mt-2 font-semibold">Conexão Inteligente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
