function TimelineItem({ title, text, image, imageAlt, isReversed }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] lg:items-stretch">
      {/* ESQUERDA */}
      {isReversed ? (
        <div className="rounded-[2rem] p-8 sm:p-10">
          <h2 className="mb-3 text-xl font-semibold text-stone-900 sm:text-2xl">
            {title}
          </h2>
          <p className="text-stone-600">{text}</p>
        </div>
      ) : (
        <div className="w-full max-w-[360px] justify-self-center overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(120,91,44,0.12)]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 360px"
            width="720"
            height="500"
            className="h-[220px] w-full object-cover sm:h-[250px] transition hover:scale-105"
          />
        </div>
      )}

      {/* LINHA + PONTO */}
      <div className="relative hidden lg:flex items-stretch justify-center">
        <span className="relative z-10 h-4 w-4 self-center rounded-full bg-stone-500 shadow-[0_0_0_8px_rgba(248,243,234,0.95)]" />
      </div>

      {/* DIREITA */}
      {isReversed ? (
        <div className="w-full max-w-[360px] justify-self-center overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(120,91,44,0.12)]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 360px"
            width="720"
            height="500"
            className="h-[220px] w-full object-cover sm:h-[250px] transition hover:scale-105"
          />
        </div>
      ) : (
        <div className="rounded-[2rem] p-8 sm:p-10">
          <h2 className="mb-3 text-xl font-semibold text-stone-900 sm:text-2xl">
            {title}
          </h2>
          <p className="text-stone-600">{text}</p>
        </div>
      )}
    </div>
  );
}

export default TimelineItem;
