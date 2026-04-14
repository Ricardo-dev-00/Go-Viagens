function FeaturedCard({ title, paragraphs, topText, ctaLabel }) {
  return (
    <article className="min-h-[340px] rounded-[18px] bg-white">
      <div className="flex h-full flex-col justify-between gap-6 p-6 text-stone-900 sm:p-4">
        {topText ? (
          <p className="max-w-md text-sm leading-6 text-stone-500">{topText}</p>
        ) : (
          <div />
        )}

        {(title || paragraphs?.length) && (
          <div className="flex flex-col gap-4">
            {title && (
              <h2 className="text-3xl font-semibold tracking-[0.08em]">
                {title}
              </h2>
            )}

            {paragraphs?.map((p, i) => (
              <p
                key={i}
                className="max-w-md text-sm leading-6 text-stone-600 py-5"
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {ctaLabel && (
          <button className="w-fit rounded-full border border-stone-300 cursor-pointer px-5 py-2 text-sm font-medium text-stone-900 transition-colors hover:border-stone-900">
            {ctaLabel}
          </button>
        )}
      </div>
    </article>
  );
}

export default FeaturedCard;
