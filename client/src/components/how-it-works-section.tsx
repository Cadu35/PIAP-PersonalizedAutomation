import { UserPlus, FileText, Brain, MessageCircle, CreditCard, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Cadastro de Usuários",
      description: "Clientes, desenvolvedores de circuitos eletrônicos e designers 3D se cadastram na plataforma com seus perfis especializados.",
      badges: ["Clientes", "Desenvolvedores", "Designers"]
    },
    {
      icon: FileText,
      title: "2. Solicitação de Projeto",
      description: "Cliente preenche formulário detalhado com requisitos, orçamento estimado e prazo desejado para o projeto.",
      features: ["Descrição detalhada", "Orçamento estimado", "Prazo desejado"]
    },
    {
      icon: Brain,
      title: "3. Match Inteligente",
      description: "Algoritmo analisa requisitos e conecta cliente com profissionais qualificados baseado em expertise e disponibilidade.",
      highlight: "IA + Algoritmos"
    },
    {
      icon: MessageCircle,
      title: "4. Comunicação",
      description: "Chat integrado e videoconferência para alinhamento de requisitos e acompanhamento do desenvolvimento.",
      features: ["Chat", "Vídeo"]
    },
    {
      icon: CreditCard,
      title: "5. Pagamento Seguro",
      description: "Integração com Mercado Pago para transações seguras com liberação gradual conforme entregas do projeto."
    },
    {
      icon: Star,
      title: "6. Avaliações",
      description: "Sistema de avaliações mútuas para manter a qualidade e confiabilidade dos profissionais na plataforma."
    }
  ];

  return (
    <section id="funcionamento" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Como Funciona</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Um processo simples e eficiente para transformar sua ideia em realidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-neutral-600 text-center mb-6">
                    {step.description}
                  </p>
                  
                  {step.badges && (
                    <div className="flex justify-center space-x-2 flex-wrap gap-2">
                      {step.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {step.features && (
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <ul className="text-sm text-neutral-600 space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.highlight && (
                    <div className="text-center">
                      <Badge variant="default" className="bg-blue-100 text-blue-600 hover:bg-blue-100">
                        <Brain className="w-4 h-4 mr-1" />
                        {step.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  {step.title.includes("6. Avaliações") && (
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
