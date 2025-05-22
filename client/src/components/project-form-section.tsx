import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  tipoProjet: z.string().min(1, "Selecione o tipo de projeto"),
  orcamento: z.string().optional(),
  descricao: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  prazo: z.string().optional(),
  termos: z.boolean().refine(val => val === true, "Você deve aceitar os termos")
});

type FormData = z.infer<typeof formSchema>;

export default function ProjectFormSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      tipoProjet: "",
      orcamento: "",
      descricao: "",
      prazo: "",
      termos: false
    }
  });

  const createProjectMutation = useMutation({
    mutationFn: async (data: Omit<FormData, 'termos'>) => {
      const response = await apiRequest('POST', '/api/project-requests', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/project-requests'] });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar solicitação",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: FormData) => {
    const { termos, ...projectData } = data;
    createProjectMutation.mutate(projectData);
  };

  return (
    <section id="solicitar" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Solicite Seu Projeto</h2>
          <p className="text-xl text-neutral-600">
            Conte-nos sobre sua ideia e conectaremos você com os melhores profissionais
          </p>
        </div>
        
        <Card className="bg-neutral-50 shadow-xl">
          <CardContent className="p-8 lg:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-neutral-900">Nome Completo *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field}
                            className="border-neutral-300 focus:border-blue-600 focus:ring-blue-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-neutral-900">E-mail *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu@email.com" 
                            type="email"
                            {...field}
                            className="border-neutral-300 focus:border-blue-600 focus:ring-blue-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="tipoProjet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-neutral-900">Tipo de Projeto *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-neutral-300 focus:border-blue-600 focus:ring-blue-600">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="circuito">Desenvolvimento de Circuito</SelectItem>
                            <SelectItem value="design3d">Design 3D</SelectItem>
                            <SelectItem value="completo">Projeto Completo (Circuito + 3D)</SelectItem>
                            <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="orcamento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-neutral-900">Orçamento Estimado</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-neutral-300 focus:border-blue-600 focus:ring-blue-600">
                              <SelectValue placeholder="Selecione a faixa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ate-1000">Até R$ 1.000</SelectItem>
                            <SelectItem value="1000-5000">R$ 1.000 - R$ 5.000</SelectItem>
                            <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
                            <SelectItem value="10000-mais">Acima de R$ 10.000</SelectItem>
                            <SelectItem value="a-definir">A definir</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-neutral-900">Descrição do Projeto *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva detalhadamente seu projeto de automação. Inclua objetivos, funcionalidades desejadas, requisitos técnicos e qualquer informação relevante."
                          rows={6}
                          {...field}
                          className="border-neutral-300 focus:border-blue-600 focus:ring-blue-600 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="prazo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-neutral-900">Prazo Desejado</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-neutral-300 focus:border-blue-600 focus:ring-blue-600">
                            <SelectValue placeholder="Selecione o prazo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="urgente">Urgente (até 1 semana)</SelectItem>
                          <SelectItem value="rapido">Rápido (1-2 semanas)</SelectItem>
                          <SelectItem value="normal">Normal (2-4 semanas)</SelectItem>
                          <SelectItem value="flexivel">Flexível (mais de 1 mês)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="termos"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-neutral-600">
                          Aceito os <span className="text-blue-600 hover:underline cursor-pointer">termos de uso</span> e 
                          <span className="text-blue-600 hover:underline cursor-pointer"> política de privacidade</span> da PIAP *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    disabled={createProjectMutation.isPending}
                    className="bg-orange-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                    size="lg"
                  >
                    {createProjectMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Solicitação
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
