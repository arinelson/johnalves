import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-dark-gradient">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-30 animate-grid-flow transform-gpu"></div>
      <div className="absolute inset-0 bg-radial-glow"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/50 to-dark/90"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 min-h-screen flex flex-col justify-center items-center">
        {/* Title group */}
        <div className="max-w-4xl w-full space-y-6 md:space-y-8">
          <h1 className="space-y-4">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-white">
              TRANSFORMANDO
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-neon animate-glow">
              MENTE & CORPO
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-white">
              EM UMA SÓ <span className="font-sans font-bold text-neon">FORÇA</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Treinamento personalizado para alcançar seus objetivos. 
            Resultados reais, método comprovado.
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <Button 
              onClick={scrollToContact}
              className="bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-glow"
            >
              COMECE SUA TRANSFORMAÇÃO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;