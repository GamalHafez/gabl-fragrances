const HeroContent = () => {
  return (
    <div>
      <h3 className="text-brand-500 mb-5 inline-block text-sm font-semibold tracking-[0.35em] uppercase">
        Luxury Fragrances
      </h3>

      <h1 className="mb-8 text-3xl leading-[1.05] font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
        Freshness That
        <br />
        <span className="text-brand-500">Defies</span> The Heat
      </h1>

      <p className="mb-10 max-w-xs text-sm leading-7 text-zinc-600 sm:max-w-sm sm:text-base md:max-w-xl md:text-lg lg:max-w-2xl lg:text-lg xl:max-w-2xl dark:text-zinc-300">
        Discover handcrafted fragrances inspired by the strength of the
        mountains and designed to leave a lasting impression wherever you go.
      </p>

      <div className="flex flex-wrap gap-5">
        <button className="bg-brand-500 hover:bg-brand-600 rounded-xl px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          Shop Collection
        </button>

        <button className="hover:border-brand-500 hover:text-brand-500 rounded-xl border border-zinc-300 bg-white/70 px-8 py-4 font-medium backdrop-blur transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-900/40 dark:hover:bg-zinc-800">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
