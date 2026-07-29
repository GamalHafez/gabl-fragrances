import clsx from "clsx";
import { useTheme } from "@/context/useTheme";
import type { BestSeller } from "../bestSellers";
import { ProductActions } from "./ProductActions";
import { ProductInfo } from "./ProductInfo";

interface RightProductPreviewProps {
  selectedProduct: BestSeller;
}

export const RightProductPreview = ({
  selectedProduct,
}: RightProductPreviewProps) => {
  const { isDark } = useTheme();
  const { name, image } = selectedProduct;

  return (
    <article
      className={clsx(
        "mt-2 flex flex-col items-center rounded-3xl border p-8 px-8 transition-all duration-300 md:mt-0 lg:w-3/5",
        "lg:p-10",
        isDark
          ? "border-white/10 bg-transparent"
          : "border-zinc-200 bg-white/10 shadow-sm",
      )}
    >
      <div className="mb-8 flex items-center gap-6 md:mb-10 md:flex-col">
        <div className="flex h-40 w-full items-center justify-center md:h-60 lg:h-72">
          <img
            src={image}
            alt={name}
            className="h-full rounded-xl object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        <ProductActions />
      </div>

      <ProductInfo product={selectedProduct} />
    </article>
  );
};
