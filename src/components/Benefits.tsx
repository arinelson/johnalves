import { Card } from "@/components/ui/card";
import { Trophy, HeartPulse, Brain, Award } from "lucide-react";

const benefits = [
  {
    icon: <Trophy className="w-12 h-12 text-neon" />,
    title: "Resultados Comprovados",
    description: "Histórico de transformações reais com acompanhamento detalhado"
  },
  {
    icon: <HeartPulse className="w-12 h-12 text-neon" />,
    title: "Saúde em Primeiro Lugar",
    description: "Treinamento focado no bem-estar físico e mental"
  },
  {
    icon: <Brain className="w-12 h-12 text-neon" />,
    title: "Mindset Vencedor",
    description: "Desenvolvimento de uma mentalidade forte e disciplinada"
  },
  {
    icon: <Award className="w-12 h-12 text-neon" />,
    title: "Excelência Profissional",
    description: "Anos de experiência e certificações internacionais"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-dark-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          CONQUISTE SEU <span className="text-neon">POTENCIAL MÁXIMO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-dark/50 border border-neon/20 p-6 hover:border-neon transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;