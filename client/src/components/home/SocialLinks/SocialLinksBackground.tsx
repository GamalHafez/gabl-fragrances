const SocialLinksBackground = () => {
  return (
    <>
      <div className="from-brand-50 to-brand-100 absolute inset-0 -z-20 bg-linear-to-br via-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-brand-500/20 absolute top-1/2 left-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

        <div className="bg-brand-600/20 absolute top-0 -left-44 h-105 w-105 rounded-full blur-[150px]" />

        <div className="bg-brand-500/20 absolute -right-40 bottom-0 h-105 w-105 rounded-full blur-[150px]" />
      </div>

      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#000 1px,transparent 1px),
            linear-gradient(to bottom,#000 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
};

export default SocialLinksBackground;
