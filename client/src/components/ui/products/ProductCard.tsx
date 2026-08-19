import { ArrowRight } from "lucide-react";
import { AddToCart } from "./AddToCart";
import { Eyebrow } from "@/components/ui/home";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";
import type { Product } from "@shared/types/product";
import { getMainProductVariant } from "@/utils";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { isDark } = useTheme();
  const { name, gender } = product;
  const productMainImage =
    product?.images.find((image) => image.isMain) ?? product?.images[0];

  const mainVariant = getMainProductVariant(product.variants);

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
          src={productMainImage?.url}
          alt={productMainImage?.description ?? product?.name}
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

        {mainVariant && (
          <span>
            <p
              className={clsx(
                "text-sm uppercase",
                isDark ? "text-zinc-400" : "text-zinc-500",
              )}
            >
              {mainVariant.sizeML} ml
            </p>

            <div className="mt-3 flex items-center justify-between md:mt-3">
              <p
                className={clsx(
                  "text-xl font-bold md:text-xl",
                  isDark ? "text-zinc-100" : "text-zinc-900",
                )}
              >
                {mainVariant.price.toString()}
                <span className="ml-1 text-sm">EGP</span>
              </p>
              <AddToCart
                variantId={mainVariant.id}
                quantity={1}
                price={mainVariant.price.toString()}
                image={productMainImage.url}
              />
            </div>
          </span>
        )}
      </div>
    </article>
  );
};
