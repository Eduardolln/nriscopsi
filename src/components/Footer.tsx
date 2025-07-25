import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="font-bold text-xl">PsicoRisk</span>
            </div>
            <p className="text-sm text-background/70">
              Consultoria especializada em Riscos Psicossociais para empresas que se preocupam com o bem-estar dos colaboradores.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Diagnóstico e Avaliação</li>
              <li>Implementação do PGR</li>
              <li>Medidas de Prevenção</li>
              <li>Monitoramento Contínuo</li>
              <li>Capacitação de Equipes</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Sobre Nós</li>
              <li>Nossa Equipe</li>
              <li>Cases de Sucesso</li>
              <li>Blog</li>
              <li>Carreiras</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>(11) 9999-9999</li>
              <li>contato@psicorisk.com.br</li>
              <li>São Paulo - SP</li>
              <li>Atendimento nacional</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/70">
            © 2024 PsicoRisk. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-background/70">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;