import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">PIAP</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-neutral-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-neutral-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('funcionamento')}
                className="text-neutral-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Como Funciona
              </button>
              <Button 
                onClick={() => scrollToSection('solicitar')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Solicitar Projeto
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-neutral-900 hover:text-primary"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-3 py-2 text-neutral-600 hover:text-primary"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('funcionamento')}
              className="block w-full text-left px-3 py-2 text-neutral-600 hover:text-primary"
            >
              Como Funciona
            </button>
            <Button 
              onClick={() => scrollToSection('solicitar')}
              className="w-full bg-orange-500 text-white rounded-lg text-center mx-3 mt-4"
            >
              Solicitar Projeto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
