import { Button } from "@/components/ui/button";
import { Rocket, Cpu, Box, ServerCog, Handshake } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="inicio" className="pt-16 min-h-screen bg-gradient-to-br from-primary via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Conecte-se com os
              <motion.span 
                className="text-orange-400 block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Melhores Profissionais
              </motion.span>
              em Automação
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A PIAP é a plataforma que conecta clientes, desenvolvedores de circuitos eletrônicos e designers 3D para criar projetos personalizados de automação com Arduino, IoT e eletrônica inteligente.
            </motion.p>
            
            <motion.div 
              className="flex flex-col xs:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={() => scrollToSection('solicitar')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold btn-interactive shadow-xl hover:shadow-2xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                size="lg"
                aria-label="Solicitar projeto de automação personalizada"
              >
                <Rocket className="mr-2 h-5 w-5" aria-hidden="true" />
                Solicitar Projeto Agora
              </Button>
              <Button 
                onClick={() => scrollToSection('sobre')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold btn-interactive text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                size="lg"
                aria-label="Saber mais sobre a PIAP"
              >
                Saiba Mais
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: Cpu, label: "Circuitos", delay: 1.0 },
                  { icon: Box, label: "Design 3D", delay: 1.2 },
                  { icon: ServerCog, label: "Automação", delay: 1.4 }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="bg-white/20 rounded-2xl p-4 sm:p-6 text-center card-hover"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ y: -5 }}
                  >
                    <item.icon className="h-8 w-8 sm:h-12 sm:w-12 text-white mb-2 mx-auto" aria-hidden="true" />
                    <p className="text-white text-xs sm:text-sm font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.div 
                  className="bg-orange-500 rounded-full p-3 sm:p-4 inline-block"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Handshake className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                </motion.div>
                <p className="text-white mt-2 font-semibold text-sm sm:text-base">Conexão Inteligente</p>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
