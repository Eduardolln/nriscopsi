import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ClipboardCheck, 
  Settings, 
  Shield, 
  Activity, 
  GraduationCap 
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico e Avaliação",
    description: "Identificação precisa dos riscos psicossociais em sua organização",
    features: [
      "Aplicação de instrumentos validados",
      "Entrevistas e grupos focais",
      "Análise de indicadores organizacionais"
    ]
  },
  {
    icon: Settings,
    title: "Implementação do PGR",
    description: "Programa de Gerenciamento de Riscos com foco psicossocial",
    features: [
      "Foco específico no componente psicossocial",
      "Integração com outros aspectos do PGR",
      "Documentação completa e adequada"
    ]
  },
  {
    icon: Shield,
    title: "Medidas de Prevenção",
    description: "Desenvolvimento de estratégias preventivas personalizadas",
    features: [
      "Programas de suporte psicológico",
      "Treinamentos para líderes e colaboradores",
      "Protocolos de intervenção"
    ]
  },
  {
    icon: Activity,
    title: "Monitoramento Contínuo",
    description: "Acompanhamento e avaliação periódica dos resultados",
    features: [
      "Avaliação periódica de clima organizacional",
      "Acompanhamento de casos",
      "Indicadores de saúde mental"
    ]
  },
  {
    icon: GraduationCap,
    title: "Capacitação de Equipes",
    description: "Formação especializada para equipes internas",
    features: [
      "Treinamento para RH e SESMT",
      "Formação de multiplicadores",
      "Desenvolvimento de competências internas"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas e integradas para o gerenciamento de riscos psicossociais em sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;