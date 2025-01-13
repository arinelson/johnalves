import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <PainPoints />
      <Benefits />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Index;