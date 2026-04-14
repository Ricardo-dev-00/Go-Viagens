import FadeIn from "../UI/FadeIn";

function CTASection() {
  return (
    <section id="consultoria-exclusiva" className="px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-4xl bg-primary px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-20 shadow-lg">
        {/* TEXTO */}
        <FadeIn>
          <div className="max-w-xl">
            <h2 className="text-4xl text-white sm:text-5xl">
              Precisa de ajuda?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Nossa equipe está pronta para ajudar você a planejar cada detalhe
              da sua viagem com mais segurança e praticidade.
            </p>

            <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">
              Tire dúvidas sobre destinos, roteiros e reservas. Fale com a gente
              e receba um atendimento próximo e personalizado.
            </p>
          </div>
        </FadeIn>

        {/* BOTÃO */}
        <FadeIn delay={0.2}>
          <div className="flex">
            <button className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Fale Conosco
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default CTASection;
