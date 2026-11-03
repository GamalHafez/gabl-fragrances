import { ArrowRight } from "lucide-react";
import { AddToCart } from "./AddToCart";
import { Eyebrow } from "@/components/ui/home";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { ProductCardData } from "@shared/types/product";
import { OutOfStockBadge } from "../common/OutOfStockBadge";
import { ProductPrice } from "./ProductPrice";

type ProductCardProps = {
  product: ProductCardData;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { isDark } = useTheme();
  const { name, gender, images, variant } = product;
  const productMainImage = images[0];
  const isOutOfStock = variant && variant.stock <= 0 ? true : false;

  return (
    <article className="group flex cursor-pointer flex-col items-center rounded-3xl">
      {/* Image */}
      <div
        className={clsx(
          "aspect-square overflow-hidden rounded-3xl",
          isDark ? "bg-zinc-900" : "bg-zinc-100",
        )}
      >
        <img
          src={productMainImage?.url}
          alt={productMainImage?.description ?? name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Floating Content */}
      <div
        className={clsx(
          "relative z-10 mx-5 -mt-7 w-full rounded-t-lg rounded-b-3xl border p-4 shadow-md backdrop-blur-sm transition duration-500 group-hover:shadow-xl md:mx-auto md:-mt-10 md:w-[calc(100%-2rem)] md:rounded-3xl",
          isOutOfStock ? "md:p-6 md:pr-4" : "md:p-6",
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
            eyebrow={gender}
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
          {name}
        </h2>

        {variant && (
          <span>
            <p
              className={clsx(
                "text-sm uppercase",
                isDark ? "text-zinc-400" : "text-zinc-500",
              )}
            >
              {variant.sizeML} ml
            </p>

            <div
              className={clsx(
                "lg:mt-3 mt-2",
                isOutOfStock
                  ? "flex flex-col items-start lg:flex-row lg:items-center justify-between"
                  : "grid grid-cols-2 items-end gap-y-1 lg:gap-y-0",
              )}
            >
              <ProductPrice
                price={variant.price}
                compareAtPrice={variant.compareAtPrice}
                isOutOfStock={isOutOfStock}
              />
              {!isOutOfStock ? (
                <AddToCart
                  productVariantId={variant.id}
                  quantity={1}
                  image={productMainImage?.url}
                />
              ) : (
                <OutOfStockBadge />
              )}
            </div>
          </span>
        )}
      </div>
    </article>
  );
};
