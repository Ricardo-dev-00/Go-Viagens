import FadeIn from "../UI/FadeIn";

import HeroCategories from "./HeroCategories";

function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
      <FadeIn>
        <h1 className="max-w-4xl px-2 text-3xl leading-tight font-bold sm:px-4 sm:text-4xl md:text-5xl lg:text-6xl">
          Go Viagens <br /> Marca registrada de viagens de luxo
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <HeroCategories />
      </FadeIn>
    </div>
  );
}

export default HeroContent;
