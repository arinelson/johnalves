import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada!",
      description: "Você será notificado quando houver uma vaga disponível.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          ENTRE NA <span className="text-neon">LISTA DE ESPERA</span>
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Nome"
              className="bg-dark-purple/50 border-neon/20 text-white placeholder:text-gray-400"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-dark-purple/50 border-neon/20 text-white placeholder:text-gray-400"
              required
            />
            <Input
              type="tel"
              placeholder="Telefone"
              className="bg-dark-purple/50 border-neon/20 text-white placeholder:text-gray-400"
              required
            />
            <select
              className="w-full bg-dark-purple/50 border-neon/20 text-white placeholder:text-gray-400 rounded-md h-10 px-3"
              required
            >
              <option value="">Selecione sua necessidade atual</option>
              <option value="emagrecimento">Emagrecimento</option>
              <option value="hipertrofia">Hipertrofia Muscular</option>
              <option value="condicionamento">Condicionamento Físico</option>
              <option value="reabilitacao">Reabilitação</option>
              <option value="outro">Outro</option>
            </select>
            <Textarea
              placeholder="Mensagem"
              className="bg-dark-purple/50 border-neon/20 text-white placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit"
              className="w-full bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300"
            >
              ENTRAR NA LISTA DE ESPERA
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;