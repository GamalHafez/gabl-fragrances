type CategoryCardProps = {
  name: string;
  description: string;
  image: string;
};

export const CategoryCard = ({
  name,
  description,
  image,
}: CategoryCardProps) => {
  return (
    <article className="group relative aspect-4/5 overflow-hidden rounded-[2rem] bg-zinc-900 shadow-xl">
      {/* Background */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-brand-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-8">
        <span className="text-brand-300 mb-2 text-xs font-semibold uppercase tracking-[0.35em]">
          Collection
        </span>

        <h3 className="mb-3 text-5xl font-bold text-white">{name}</h3>

        <p className="max-w-xs text-zinc-300">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-300 group-hover:text-brand-300">
            Shop Collection
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:bg-brand-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 transition group-hover:ring-brand-400/50" />
    </article>
  );
};