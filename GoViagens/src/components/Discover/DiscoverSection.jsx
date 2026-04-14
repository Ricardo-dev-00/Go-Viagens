import { destinations } from "./discoverData";
import FadeIn from "../UI/FadeIn";
import DestinationCard from "./DestinationCard";

function DiscoverSection() {
  return (
    <section
      id="planeje-sua-viagem"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* TOP */}
      <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-12">
        <FadeIn className="w-full lg:w-1/2">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Descubra o <br /> seu lugar ideal
          </h2>
        </FadeIn>

        <FadeIn className="w-full lg:w-1/2" delay={0.15}>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Selecionamos destinos que unem beleza natural, hospedagens marcantes
            e experiências pensadas para quem busca viajar com conforto, estilo
            e significado. Explore cenários que transformam descanso em memória.
          </p>

          <div className="mt-5 flex sm:mt-6 lg:justify-end">
            <button className="rounded-2xl bg-[#627475] px-6 py-2 text-sm text-white transition hover:opacity-90 sm:px-8 sm:text-base">
              Ver detalhes
            </button>
          </div>
        </FadeIn>
      </div>

      {/* GRID */}
      <div className="mt-12 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {destinations.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.2}>
            <DestinationCard {...item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default DiscoverSection;
