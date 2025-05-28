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
                    <Button variant="outline" className="btn-interactive" aria-label="Ir para dashboard">
                      <User className="mr-2 h-4 w-4" aria-hidden="true" />
                      Dashboard
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={() => scrollToSection('solicitar')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium btn-interactive"
                    aria-label="Ir para seção solicitar projeto"
                  >
                    Solicitar Projeto
                  </Button>
                  <Link href="/login">
                    <Button variant="outline" className="btn-interactive" aria-label="Fazer login">
                      <User className="mr-2 h-4 w-4" aria-hidden="true" />
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
              className="text-muted-foreground hover:text-primary btn-interactive"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? 
                <X className="h-6 w-6" aria-hidden="true" /> : 
                <Menu className="h-6 w-6" aria-hidden="true" />
              }
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-background border-t border-border animate-fade-in-up"
          role="menu"
          aria-label="Menu de navegação mobile"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
              role="menuitem"
              aria-label="Ir para seção início"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
              role="menuitem"
              aria-label="Ir para seção sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('funcionamento')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
              role="menuitem"
              aria-label="Ir para seção como funciona"
            >
              Como Funciona
            </button>
            
            {/* Theme Toggle Mobile */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
                role="menuitem"
                aria-label={`Alternar para modo ${theme === "dark" ? "claro" : "escuro"}`}
              >
                <span className="flex items-center">
                  {theme === "dark" ? 
                    <Sun className="h-4 w-4 mr-2" aria-hidden="true" /> : 
                    <Moon className="h-4 w-4 mr-2" aria-hidden="true" />
                  }
                  {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
                </span>
              </button>
            )}
            
            <div className="pt-2 space-y-2">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full btn-interactive" aria-label="Ir para dashboard">
                    <User className="mr-2 h-4 w-4" aria-hidden="true" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Button 
                    onClick={() => scrollToSection('solicitar')}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium btn-interactive"
                    aria-label="Ir para seção solicitar projeto"
                  >
                    Solicitar Projeto
                  </Button>
                  <Link href="/login">
                    <Button variant="outline" className="w-full btn-interactive" aria-label="Fazer login">
                      <User className="mr-2 h-4 w-4" aria-hidden="true" />
                      Entrar
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
