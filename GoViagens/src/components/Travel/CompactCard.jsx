function CompactCard({ tag, title, location, image, imageAlt }) {
  return (
    <article className="relative flex min-h-[380px] flex-col overflow-hidden rounded-[18px] transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        width="900"
        height="1200"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div>
          <span className="rounded-full border border-white/45 bg-white/12 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white">
            {tag}
          </span>
        </div>

        <div className="flex flex-col gap-2 text-white">
          <h2 className="max-w-xs text-2xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="text-sm uppercase tracking-[0.24em] text-white/82">
            {location}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CompactCard;
