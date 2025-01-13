const Programs = () => {
  return (
    <main className="bg-dark text-white min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            NOSSOS <span className="text-neon">PROGRAMAS</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emagrecimento",
                description: "Programa focado em perda de gordura e definição corporal"
              },
              {
                title: "Hipertrofia",
                description: "Ganho de massa muscular com técnicas avançadas"
              },
              {
                title: "Condicionamento",
                description: "Melhora da resistência e performance física"
              }
            ].map((program) => (
              <div key={program.title} className="bg-dark-purple/30 p-6 rounded-lg border border-neon/20 hover:border-neon/40 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-neon">{program.title}</h3>
                <p className="text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;