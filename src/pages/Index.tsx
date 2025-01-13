import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <PainPoints />
      <ContactForm />
    </main>
  );
};

export default Index;