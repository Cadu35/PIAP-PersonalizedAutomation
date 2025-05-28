import { useAuth, useLogout } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { LogOut, User, Mail, Calendar, FileText, Users, Cpu, Box } from "lucide-react";

export default function Dashboard() {
  const { user, isLoading } = useAuth();
  const logoutMutation = useLogout();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: projectRequests } = useQuery({
    queryKey: ["/api/project-requests"],
    enabled: !!user,
  });

  const handleLogout = () => {
    logoutMutation.mutate({}, {
      onSuccess: () => {
        toast({
          title: "Logout realizado com sucesso",
          description: "Até logo!",
        });
        setLocation("/");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    setLocation("/login");
    return null;
  }

  const isCliente = user.tipo === "cliente";
  const isCriador = user.tipo === "criador";

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">PIAP</h1>
              <Badge variant={isCliente ? "default" : "secondary"} className="text-sm">
                {isCliente ? "Cliente" : "Criador"}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-neutral-900">{user.nome}</p>
                <p className="text-xs text-neutral-500">{user.email}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">
            Bem-vindo, {user.nome}!
          </h2>
          <p className="text-neutral-600">
            {isCliente 
              ? "Gerencie seus projetos e solicite novos desenvolvimentos." 
              : `Veja os projetos disponíveis para sua especialidade: ${user.especialidade}`
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Perfil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-neutral-500" />
                  {user.email}
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-neutral-500" />
                  Membro desde {new Date(user.createdAt || Date.now()).toLocaleDateString('pt-BR')}
                </div>
                {isCriador && user.especialidade && (
                  <div className="flex items-center text-sm">
                    {user.especialidade === "circuitos" && <Cpu className="h-4 w-4 mr-2 text-neutral-500" />}
                    {user.especialidade === "design3d" && <Box className="h-4 w-4 mr-2 text-neutral-500" />}
                    {user.especialidade === "ambos" && <Users className="h-4 w-4 mr-2 text-neutral-500" />}
                    {user.especialidade === "circuitos" && "Desenvolvimento de Circuitos"}
                    {user.especialidade === "design3d" && "Design 3D"}
                    {user.especialidade === "ambos" && "Circuitos + Design 3D"}
                  </div>
                )}
                
                {isCliente && (
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    onClick={() => setLocation("/#solicitar")}
                  >
                    Solicitar Novo Projeto
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Projects Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  {isCliente ? "Meus Projetos" : "Projetos Disponíveis"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {projectRequests && projectRequests.length > 0 ? (
                  <div className="space-y-4">
                    {projectRequests.map((project: any) => (
                      <div key={project.id} className="border rounded-lg p-4 hover:bg-neutral-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-neutral-900">{project.tipoProjet}</h3>
                          <Badge variant="outline" className="text-xs">
                            {project.orcamento || "A definir"}
                          </Badge>
                        </div>
                        <p className="text-sm text-neutral-600 mb-2">
                          Cliente: {project.nome} ({project.email})
                        </p>
                        <p className="text-sm text-neutral-700 mb-3 line-clamp-2">
                          {project.descricao}
                        </p>
                        <div className="flex justify-between items-center text-xs text-neutral-500">
                          <span>Prazo: {project.prazo || "Flexível"}</span>
                          <span>{new Date(project.createdAt).toLocaleDateString('pt-BR')}</span>
                        </div>
                        {isCriador && (
                          <Button size="sm" className="mt-3 w-full" variant="outline">
                            Interessado neste Projeto
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
                    <p className="text-neutral-500">
                      {isCliente 
                        ? "Você ainda não possui projetos. Solicite seu primeiro projeto!"
                        : "Nenhum projeto disponível no momento."
                      }
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}