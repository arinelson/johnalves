import { Card } from "@/components/ui/card";
import { Dumbbell, Target, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: <Target className="w-12 h-12 text-neon" />,
    title: "Treinos Personalizados",
    description: "Programas exclusivos adaptados aos seus objetivos e limitações"
  },
  {
    icon: <Clock className="w-12 h-12 text-neon" />,
    title: "Horários Flexíveis",
    description: "Acompanhamento nos horários que melhor se adequam à sua rotina"
  },
  {
    icon: <Dumbbell className="w-12 h-12 text-neon" />,
    title: "Método Exclusivo",
    description: "Técnicas avançadas para maximizar seus resultados"
  },
  {
    icon: <Shield className="w-12 h-12 text-neon" />,
    title: "Suporte Contínuo",
    description: "Acompanhamento nutricional e motivacional constante"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-dark-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          POR QUE ESCOLHER O <span className="text-neon">MÉTODO JOHNALVES</span>?
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