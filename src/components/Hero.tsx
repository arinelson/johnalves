import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-dark-gradient">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-30 animate-grid-flow"></div>
      <div className="absolute inset-0 bg-radial-glow"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/50 to-dark/90"></div>
      <div className="container mx-auto px-4 relative z-20 text-center min-h-screen flex flex-col justify-center">
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
        <div className="flex justify-center">
          <Button 
            onClick={scrollToContact}
            className="bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300 text-lg px-8 py-6 animate-glow"
          >
            COMECE SUA TRANSFORMAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;