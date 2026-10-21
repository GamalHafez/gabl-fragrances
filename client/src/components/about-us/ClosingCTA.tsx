import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const ClosingCTA = () => {
  const { isDark } = useTheme();

  return (
    <section className="px-4 py-16 text-center sm:py-20">
      <p
        className={clsx(
          "mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
          isDark ? "text-amber-400" : "text-amber-700",
        )}
      >
        Your next favorite awaits
      </p>

      <h2
        className={clsx(
          "text-3xl sm:text-4xl md:text-5xl",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Find Your Signature Scent
      </h2>

      <p
        className={clsx(
          "mx-auto mt-4 max-w-lg text-sm leading-7",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        Explore a collection of fragrances and discover the scents that feel
        right for you.
      </p>

      <Link
        to="/collections"
        className={clsx(
          "group mt-7 inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 active:scale-95",
          "focus-visible:ring-4 focus-visible:outline-none",
          isDark
            ? "bg-amber-400 text-zinc-950 hover:bg-amber-300 focus-visible:ring-amber-400/40"
            : "bg-amber-700 text-white hover:bg-amber-800 focus-visible:ring-amber-700/30",
        )}
      >
        <ShoppingBag size={18} />
        Explore Our Collection
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
};
