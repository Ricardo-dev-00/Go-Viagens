function DestinationCard({ title, description, image, imageAlt }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          width="800"
          height="960"
          className="h-60 w-full object-cover sm:h-72 transition hover:scale-105"
        />
      </div>

      <h2 className="mt-4 text-xl font-semibold sm:mt-5 sm:text-2xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default DestinationCard;
