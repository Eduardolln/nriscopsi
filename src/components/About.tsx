import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Especialistas em Saúde Mental Corporativa
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Por que os Riscos Psicossociais são Importantes?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Os riscos psicossociais no trabalho podem impactar significativamente a saúde mental dos colaboradores, 
                a produtividade da empresa e os custos operacionais. Nossa consultoria ajuda a identificar, prevenir e 
                gerenciar esses riscos de forma estratégica.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bem-estar dos Colaboradores</h3>
                  <p className="text-sm text-muted-foreground">
                    Ambientes de trabalho mais saudáveis e acolhedores
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Saúde Mental</h3>
                  <p className="text-sm text-muted-foreground">
                    Prevenção de transtornos psicológicos relacionados ao trabalho
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Produtividade</h3>
                  <p className="text-sm text-muted-foreground">
                    Maior engajamento e performance das equipes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Conformidade Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    Cumprimento das normas regulamentadoras
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Impacto dos Riscos Psicossociais
                </h3>
                <p className="text-muted-foreground">
                  Dados alarmantes sobre a realidade brasileira
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Afastamentos por transtornos mentais</span>
                  <span className="text-2xl font-bold text-destructive">30%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="bg-destructive h-2 rounded-full w-[30%]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Redução de produtividade</span>
                  <span className="text-2xl font-bold text-primary">25%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full w-[25%]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Aumento de custos</span>
                  <span className="text-2xl font-bold text-accent">40%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="bg-accent h-2 rounded-full w-[40%]"></div>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic text-center">
                  "Investir em saúde mental é investir no futuro da empresa"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;