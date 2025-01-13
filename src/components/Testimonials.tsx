import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    image: "/placeholder.svg",
    text: "Em apenas 3 meses, consegui resultados que não alcancei em anos de academia.",
    rating: 5
  },
  {
    name: "Ana Santos",
    image: "/placeholder.svg",
    text: "O método do John mudou completamente minha relação com exercícios físicos.",
    rating: 5
  },
  {
    name: "Pedro Costa",
    image: "/placeholder.svg",
    text: "Profissional excepcional. Resultados surpreendentes desde o primeiro mês.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          TRANSFORMAÇÕES <span className="text-neon">REAIS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-dark-purple/50 border border-neon/20 p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon text-neon" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <p className="text-white font-semibold">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;