import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar o ambiente de trabalho da sua empresa? 
            Entre em contato conosco para uma consultoria personalizada.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="border-primary/20 bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Consultoria Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Oferecemos uma primeira consulta gratuita para avaliar as necessidades da sua empresa
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">Duração: 60 minutos</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm">Presencial ou online</span>
                  </div>
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  Agendar Consultoria Gratuita
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-sm text-muted-foreground">contato@psicorisk.com.br</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">E-mail Corporativo</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="seu.email@empresa.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Empresa</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Conte-nos sobre os desafios da sua empresa..."
                />
              </div>
              
              <Button variant="professional" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;