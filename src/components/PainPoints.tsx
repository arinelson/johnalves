import { Card } from "@/components/ui/card";
import { Activity, Clock, Brain, X } from "lucide-react";

const painPoints = [
  {
    icon: <Clock className="w-8 h-8 text-neon" />,
    title: "Sem tempo para treinar?",
    description: "Treinos otimizados que se encaixam na sua rotina agitada"
  },
  {
    icon: <Activity className="w-8 h-8 text-neon" />,
    title: "Resultados inconsistentes?",
    description: "Método comprovado para resultados duradouros"
  },
  {
    icon: <Brain className="w-8 h-8 text-neon" />,
    title: "Falta de motivação?",
    description: "Acompanhamento personalizado para manter seu foco"
  },
  {
    icon: <X className="w-8 h-8 text-neon" />,
    title: "Dietas restritivas?",
    description: "Plano alimentar flexível e sustentável"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-dark-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          IDENTIFICOU ALGUM DESSES <span className="text-neon">PROBLEMAS</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-dark/50 border border-neon/20 p-6 hover:border-neon transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                {point.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-400">
                  {point.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;