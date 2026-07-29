import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import type { BestSeller } from "../bestSellers";

export const ProductInfo = ({ product }: { product: BestSeller }) => {
  const { name, price, description } = product;
  const { isDark } = useTheme();

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <h3
          className={clsx(
            "text-3xl font-semibold tracking-tight",
            isDark ? "text-white" : "text-zinc-900",
          )}
        >
          {name}
        </h3>

        <p
          className={clsx(
            "text-xl font-semibold",
            isDark ? "text-brand-300" : "text-brand-500",
          )}
        >
          ${price}
        </p>
      </div>

      <div
        className={clsx("h-px w-full", isDark ? "bg-white/10" : "bg-zinc-200")}
      />

      <p
        className={clsx(
          "max-w-xl text-base leading-8",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {description}
      </p>
    </div>
  );
};
