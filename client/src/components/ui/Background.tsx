import { useTheme } from "@/context/useTheme";

export const Background = () => {
  const { isDark } = useTheme();

  return (
    <>
      {/* Gradient Base */}
      <div
        className={`absolute inset-0 -z-20 bg-linear-to-br ${
          isDark
            ? "from-zinc-800 via-zinc-950 to-zinc-950"
            : "from-brand-50 to-brand-100 via-white"
        }`}
      />

      {/* Blurred Circles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-brand-500/20 absolute top-1/2 left-1/2 h-68.75 w-68.75 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />
        <div className="bg-brand-600/20 absolute top-0 -left-56 h-[162.5px] w-[162.5px] rounded-full blur-[170px]" />
        <div className="bg-brand-500/20 absolute -right-56 bottom-0 h-[162.5px] w-[162.5px] rounded-full blur-[170px]" />
        <div className="bg-brand-700/15 absolute bottom-0 left-1/3 h-31.25 w-31.25 rounded-full blur-[150px]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "#fff" : "#000"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative Blur Dots */}
      <div
        className={`absolute top-28 left-24 h-4 w-4 animate-pulse rounded-full blur-sm ${
          isDark ? "bg-brand-300/40" : "bg-brand-500/40"
        }`}
      />
      <div
        className={`absolute right-32 bottom-40 h-8 w-8 animate-ping rounded-full blur-md ${
          isDark ? "bg-brand-200/30" : "bg-brand-400/30"
        }`}
      />
      <div
        className={`absolute top-2/3 left-1/3 h-5 w-5 animate-pulse rounded-full blur-sm ${
          isDark ? "bg-brand-100/30" : "bg-brand-300/30"
        }`}
      />
    </>
  );
};
