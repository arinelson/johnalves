const About = () => {
  return (
    <main className="bg-dark text-white min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            SOBRE <span className="text-neon">JOHNALVES</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <p>
              Com mais de 10 anos de experiência em treinamento personalizado, 
              JOHNALVES tem ajudado centenas de alunos a alcançarem seus objetivos.
            </p>
            <p>
              Especializado em transformação corporal, utiliza métodos científicos 
              e comprovados para garantir resultados reais e duradouros.
            </p>
            <p>
              Formado em Educação Física e especializado em Fisiologia do Exercício,
              está sempre atualizado com as últimas tendências e pesquisas da área.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;