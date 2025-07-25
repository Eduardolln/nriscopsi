import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="font-bold text-xl text-foreground">PsicoRisk</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <Button variant="professional" size="lg">
          Agendar Reunião
        </Button>
      </div>
    </header>
  );
};

export default Header;