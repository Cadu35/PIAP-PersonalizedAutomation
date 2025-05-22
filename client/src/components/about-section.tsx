import { Users, Brain, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Sobre a PIAP</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Uma plataforma inovadora que revoluciona a forma como projetos de automação personalizada são desenvolvidos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern automation workspace with electronic components" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                <Users className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Conectamos Talentos</h3>
                <p className="text-neutral-600">
                  Reunimos clientes que precisam de soluções de automação com os melhores desenvolvedores de circuitos eletrônicos e designers 3D do mercado.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                <Brain className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Match Inteligente</h3>
                <p className="text-neutral-600">
                  Nosso algoritmo analisa as necessidades do projeto e conecta você com o profissional ideal baseado em expertise, disponibilidade e avaliações.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                <Shield className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Segurança Garantida</h3>
                <p className="text-neutral-600">
                  Pagamentos seguros via Mercado Pago, comunicação protegida e sistema de avaliações para garantir a qualidade dos projetos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
