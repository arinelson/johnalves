import { Card } from "@/components/ui/card";
import { Puzzle, Target, Workflow, Brain } from "lucide-react";

const painPoints = [
  {
    icon: <Puzzle className="w-8 h-8 text-neon" />,
    title: "Estratégia Personalizada",
    description: "Planejamento exclusivo baseado no seu biotipo e objetivos"
  },
  {
    icon: <Target className="w-8 h-8 text-neon" />,
    title: "Metas Alcançáveis",
    description: "Definição clara de objetivos e prazos realistas"
  },
  {
    icon: <Workflow className="w-8 h-8 text-neon" />,
    title: "Progressão Inteligente",
    description: "Evolução constante com ajustes periódicos"
  },
  {
    icon: <Brain className="w-8 h-8 text-neon" />,
    title: "Mentalidade Forte",
    description: "Desenvolvimento de disciplina e foco"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-dark-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          DESCUBRA SEU <span className="text-neon">CAMINHO</span>
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