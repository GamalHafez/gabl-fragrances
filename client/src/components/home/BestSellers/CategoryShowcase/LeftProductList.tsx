import clsx from "clsx";
import type { BestSeller } from "../bestSellers";
import { useTheme } from "@/context/useTheme";

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
    <div className="flex flex-col gap-2">
      {products.map((product, index) => {
        const isActive = product.id === selectedProduct.id;

        return (
          <button
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className={clsx(
              "group flex items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 hover:translate-x-1",
              isActive
                ? isDark
                  ? "border-brand-300/20 bg-brand-300/5"
                  : "border-brand-300/30 bg-brand-50"
                : isDark
                  ? "border-transparent hover:bg-white/5"
                  : "hover:bg-brand-100/40 border-transparent",
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
        );
      })}
    </div>
  );
};
