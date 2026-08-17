import sample5mlImage from "@/assets/sample-5ml.webp";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Eyebrow } from "../ui/home";
import { ArrowRight } from "lucide-react";

export const SamplesCard = () => {
  const { isDark } = useTheme();

  return (
    <article className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-3xl">
      {/* Image */}
      <div
        className={clsx(
          "aspect-square overflow-hidden rounded-3xl",
          isDark ? "bg-zinc-900" : "bg-zinc-100",
        )}
      >
        <img
          src={sample5mlImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Floating Content */}
      <div
        className={clsx(
          "relative z-10 mx-5 -mt-8 w-full rounded-3xl border p-4 shadow-md backdrop-blur-sm group-hover:shadow-xl md:mx-auto md:-mt-10 md:w-[calc(100%-2rem)] md:p-6",
          isDark
            ? "border-zinc-800 bg-zinc-900/90 group-hover:bg-zinc-800/60"
            : "border-zinc-100 bg-white group-hover:bg-zinc-100",
        )}
      >
        <div
          className={clsx(
            "flex justify-between",
            isDark ? "text-brand-100" : "text-brand-500",
          )}
        >
          <Eyebrow
            eyebrow="Samples"
            className="text-xs tracking-widest lg:text-xs"
          />
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:h-5 md:w-5" />
        </div>

        <h2
          className={clsx(
            "font-semibold capitalize transition-colors duration-300 md:text-lg",
            isDark
              ? "group-hover:text-brand-100 text-zinc-100"
              : "group-hover:text-brand-500 text-zinc-900",
          )}
        >
          5ML Samples
        </h2>

        <p
          className={clsx(
            "mt-2 line-clamp-3 text-sm leading-6",
            isDark ? "text-zinc-400" : "text-zinc-500",
          )}
        >
          Try our fragrances in 5ML sizes before full-size
        </p>
      </div>
    </article>
  );
};
