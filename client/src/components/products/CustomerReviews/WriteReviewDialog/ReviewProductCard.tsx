import placeholder from "@/assets/placeholder.webp";
import { Eyebrow } from "@/components/ui/home";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const ReviewProductCard = () => {
  const { isDark } = useTheme();

  // TODO: Replace with real product data
  const productName = "Fresh Ocean";
  const inspiredBy = "Inspired by Acqua di Gio";

  return (
    <div
      className={clsx(
        "flex items-center gap-5 rounded-2xl border py-4 transition-all duration-300 md:p-4",
        isDark
          ? "border-zinc-700/60 bg-zinc-900/60"
          : "border-zinc-200 bg-zinc-50/80",
      )}
    >
      <div
        className={clsx(
          "overflow-hidden rounded-xl border shadow-sm",
          isDark ? "border-zinc-700 bg-zinc-950" : "border-zinc-200 bg-white",
        )}
      >
        <img
          src={placeholder}
          alt={productName}
          className="h-24 w-24 object-cover transition-transform duration-300 hover:scale-105 md:h-40 md:w-40"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <Eyebrow
          eyebrow=" You're reviewing"
          className="mb-0 text-left text-xs tracking-widest lg:text-xs"
        />

        <h3
          className={clsx(
            "text-lg font-semibold",
            isDark ? "text-zinc-100" : "text-zinc-900",
          )}
        >
          {productName}
        </h3>

        <p
          className={clsx(
            "text-sm",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          {inspiredBy}
        </p>
      </div>
    </div>
  );
};
