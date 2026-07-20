import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <div className="from-brand-50 to-brand-100 absolute inset-0 -z-20 bg-linear-to-br via-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-brand-500/20 absolute top-1/2 left-1/2 h-275 w-275 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />

        <div className="bg-brand-600/20 absolute top-0 -left-56 h-162.5 w-162.5 rounded-full blur-[170px]" />

        <div className="bg-brand-500/20 absolute -right-56 bottom-0 h-162.5 w-162.5 rounded-full blur-[170px]" />

        <div className="bg-brand-700/15 absolute bottom-0 left-1/3 h-125 w-125 rounded-full blur-[150px]" />
      </div>

      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative Blur Dots */}
      <div className="bg-brand-500/40 absolute top-28 left-24 h-4 w-4 rounded-full blur-sm" />
      <div className="bg-brand-400/30 absolute right-32 bottom-40 h-8 w-8 rounded-full blur-md" />
      <div className="bg-brand-300/30 absolute top-2/3 left-1/3 h-5 w-5 rounded-full blur-sm" />

      <div className="xlmt-0 mx-auto mt-4 flex min-h-screen w-full max-w-360 items-center px-6 md:mt-0 lg:mt-0 lg:px-10">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
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
              mountains and designed to leave a lasting impression wherever you
              go.
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

          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-brand-500/25 absolute h-120 w-120 rounded-full blur-[90px]" />

            <div className="bg-brand-500/10 absolute inset-12 rounded-full blur-[80px]" />

            <img
              src={hero}
              alt="Gabal Fragrances Collection"
              className="relative z-10 w-full max-w-66 animate-[float_6s_ease-in-out_infinite] rounded-md drop-shadow-[0_70px_90px_rgba(0,0,0,0.45)] sm:max-w-88 md:max-w-95 lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
