const HeroBackground = () => {
  return (
    <>
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
    </>
  );
};

export default HeroBackground;
