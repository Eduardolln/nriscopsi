import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Proteja a <span className="text-primary">Saúde Mental</span> da sua Empresa
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Consultoria especializada em Riscos Psicossociais para criar ambientes de trabalho mais saudáveis e produtivos.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Diagnóstico Especializado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Equipe Qualificada</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Resultados Comprovados</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Agende uma Consultoria
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Consultoria em Riscos Psicossociais"
            className="w-full h-auto rounded-2xl shadow-elegant"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;