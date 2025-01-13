import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          PRONTO PARA <span className="text-neon">COMEÇAR</span>?
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
            <Textarea
              placeholder="Mensagem"
              className="bg-dark-purple/50 border-neon/20 text-white placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit"
              className="w-full bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300"
            >
              ENVIAR MENSAGEM
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;