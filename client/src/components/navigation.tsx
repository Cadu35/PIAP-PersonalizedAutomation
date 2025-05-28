import { useState, useEffect } from "react";
import { Menu, X, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "next-themes";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { theme, setTheme } = useTheme();

  // Evita hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg dark:shadow-xl fixed w-full top-0 z-50 border-b border-border transition-colors duration-300" role="navigation" aria-label="Navegação principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Ir para página inicial">
                <h1 className="text-2xl font-bold text-primary cursor-pointer hover:scale-105 transition-transform duration-200">
                  PIAP
                </h1>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-200 btn-interactive"
                aria-label="Ir para seção início"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-200 btn-interactive"
                aria-label="Ir para seção sobre"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('funcionamento')}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-200 btn-interactive"
                aria-label="Ir para seção como funciona"
              >
                Como Funciona
              </button>
              
              {/* Theme Toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="btn-interactive"
                  aria-label={`Alternar para modo ${theme === "dark" ? "claro" : "escuro"}`}
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link href="/dashboard">
                    <Button variant="outline" className="px-4 py-2">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={() => scrollToSection('solicitar')}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Solicitar Projeto
                  </Button>
                  <Link href="/login">
                    <Button variant="outline" className="px-4 py-2">
                      <User className="mr-2 h-4 w-4" />
                      Entrar
                    </Button>
                  </Link>
                </div>
              )}
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
