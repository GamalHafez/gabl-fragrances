import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

const SocialLinksBackground = () => {
  const { isDark } = useTheme();

  return (
    <>
      {/* Base gradient */}
      <div
        className={clsx(
          "absolute inset-0 -z-20",
          isDark
            ? "bg-linear-to-br from-zinc-950 via-zinc-950 to-zinc-950"
            : "from-brand-50 to-brand-100 bg-linear-to-br via-white",
        )}
      />

      {/* Glow effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]",
            isDark ? "bg-brand-400/15" : "bg-brand-500/20",
          )}
        />

        <div
          className={clsx(
            "absolute top-0 -left-44 h-105 w-105 rounded-full blur-[150px]",
            isDark ? "bg-brand-500/10" : "bg-brand-600/20",
          )}
        />

        <div
          className={clsx(
            "absolute -right-40 bottom-0 h-105 w-105 rounded-full blur-[150px]",
            isDark ? "bg-brand-400/10" : "bg-brand-500/20",
          )}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          opacity: isDark ? 0.06 : 0.035,
          backgroundImage: `
            linear-gradient(to right, ${
              isDark ? "rgba(255,255,255,0.15)" : "#000"
            } 1px, transparent 1px),
            linear-gradient(to bottom, ${
              isDark ? "rgba(255,255,255,0.15)" : "#000"
            } 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
};

export default SocialLinksBackground;
