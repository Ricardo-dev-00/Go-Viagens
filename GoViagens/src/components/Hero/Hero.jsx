import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-white sm:px-6 lg:min-h-screen lg:px-8">
      <img
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        sizes="100vw"
        width="1600"
        height="1200"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      <HeroContent />
    </section>
  );
}

export default Hero;
