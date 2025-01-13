import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/50 to-dark/90 z-10" />
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="mb-6">
          <span className="block text-4xl md:text-6xl font-serif italic text-white mb-2">
            TRANSFORME
          </span>
          <span className="block text-4xl md:text-6xl font-sans font-bold text-neon">
            SEU CORPO
          </span>
          <span className="block text-3xl md:text-5xl font-sans font-bold text-white mt-2">
            COM JOHNALVES
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Treinamento personalizado para alcançar seus objetivos. 
          Resultados reais, método comprovado.
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300 text-lg px-8 py-6 animate-glow"
        >
          COMECE SUA TRANSFORMAÇÃO
        </Button>
      </div>
    </section>
  );
};

export default Hero;