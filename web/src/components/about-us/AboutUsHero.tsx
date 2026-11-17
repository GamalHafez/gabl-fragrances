import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import brandImage from "@/assets/tablet-banner.png";
import { Sparkles } from "lucide-react";

export const AboutUsHero = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={clsx(
        "relative isolate overflow-hidden rounded-[2rem] border",
        isDark
          ? "border-zinc-800 bg-zinc-950"
          : "border-amber-100 bg-[#faf6ef]",
      )}
    >
      <div className="grid items-center md:grid-cols-2">
        <div className="relative z-10 px-6 py-10 sm:px-10 md:px-12 md:py-16">
          <span
            className={clsx(
              "mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase",
              isDark ? "text-amber-400" : "text-amber-700",
            )}
          >
            <Sparkles size={15} />
            About Gabal
          </span>

          <h1
            className={clsx(
              "max-w-lg text-4xl sm:text-5xl lg:text-6xl",
              isDark ? "text-zinc-50" : "text-zinc-950",
            )}
          >
            More Than Just a Fragrance
          </h1>

          <p
            className={clsx(
              "mt-5 max-w-md text-sm leading-7 sm:text-base",
              isDark ? "text-zinc-400" : "text-zinc-600",
            )}
          >
            Discover scents that express your personality, complement your
            style, and make every moment feel a little more special.
          </p>

          <div
            className={clsx(
              "mt-7 h-px w-16",
              isDark ? "bg-amber-400" : "bg-amber-600",
            )}
          />
        </div>
        <div className="relative min-h-64 overflow-hidden sm:min-h-80 md:min-h-full">
          <img
            src={brandImage}
            alt="Gabal Fragrances perfume collection"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div
            className={clsx(
              "absolute inset-0",
              isDark
                ? "bg-linear-to-t from-zinc-950/40 to-transparent md:bg-linear-to-r md:from-zinc-950 md:via-zinc-950/20 md:to-transparent"
                : "bg-linear-to-t from-black/10 to-transparent",
            )}
          />
        </div>
      </div>
    </section>
  );
};
