import clsx from "clsx";
import type { BestSeller } from "../bestSellers";
import { useTheme } from "@/context/theme/useTheme";
import Reveal from "@/components/ui/animation/Reveal";

interface LeftProductListProps {
  products: readonly BestSeller[];
  selectedProduct: BestSeller;
  onSelectProduct: (product: BestSeller) => void;
}

export const LeftProductList = ({
  products,
  selectedProduct,
  onSelectProduct,
}: LeftProductListProps) => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col rounded-2xl pt-2 md:gap-2 md:pt-8 lg:basis-1/3">
      {products.map((product, index) => {
        const isActive = product.id === selectedProduct.id;

        return (
          <Reveal key={product.id}>
            <button
              onClick={() => onSelectProduct(product)}
              className={clsx(
                "group flex cursor-pointer items-center justify-center gap-3 rounded-xl border px-5 py-2 text-center transition-all duration-300 md:justify-start md:border-r-0 md:py-4 md:text-left",
                isActive
                  ? isDark
                    ? "border-brand-300/20 bg-brand-300/5"
                    : "border-brand-300/30 bg-brand-50"
                  : isDark
                    ? "border-transparent hover:bg-white/5"
                    : "hover:bg-brand-100/40 border-transparent hover:translate-x-1",
              )}
            >
              <p
                className={clsx(
                  "w-4 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? isDark
                      ? "text-brand-200"
                      : "text-brand-500"
                    : "text-zinc-500",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3
                className={clsx(
                  "flex items-center gap-2 text-sm font-medium transition-colors md:text-lg",
                  isActive
                    ? isDark
                      ? "text-brand-200"
                      : "text-brand-500"
                    : isDark
                      ? "text-zinc-400"
                      : "text-zinc-900",
                )}
              >
                {product.name}
                <span className="hidden text-sm md:flex">({product.size})</span>
              </h3>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
};
