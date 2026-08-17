import type { Product, ProductReview } from "@shared/types/product";
import { ProductBadges } from "./ProductBadges/index";
import { ProductHeader } from "./ProductHeader";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ProductOptions } from "./ProductOptions";
import { useState } from "react";
import { ProductActions } from "./ProductActions";
import { ProductQuickLinks } from "./ProductQuickLinks";
import { getAverageRating, getProductBadges } from "@/utils";

type ProductInfoProps = {
  product: Product;
  reviews: ProductReview[];
};

export const ProductInfo = ({ product, reviews }: ProductInfoProps) => {
  const { isDark } = useTheme();
  const { name, inspiredBy, variants, description } = product;

  const mainVariant =
    variants.find((variant) => variant.sizeML !== 5) ?? variants[0];

  const [selectedVariant, setSelectedVariant] = useState(mainVariant);
  const [quantity, setQuantity] = useState(1);

  const badges = getProductBadges(product);
  const inStock = product.variants.some(
    (variant) => variant.isActive && variant.stock > 0,
  );

  const handleVariantChange = (variantId: string) => {
    setQuantity(1); // Reset quantity when switching variants

    const variant = variants.find((variant) => variant.id === variantId);

    if (!variant) return;

    setSelectedVariant(variant);
  };

  if (!selectedVariant) {
    return null;
  }

  return (
    <div className="flex h-full flex-col justify-center space-y-5 px-4 md:px-0">
      <ProductBadges badges={badges} />

      <ProductHeader
        name={name}
        inspiredBy={String(inspiredBy)}
        rating={getAverageRating(reviews)}
        reviewCount={reviews.length}
        price={Number(selectedVariant.price)}
      />

      <p
        className={clsx(
          "mt-3 mb-5 text-sm",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {description}
      </p>

      <ProductOptions
        variants={variants}
        selectedVariantId={selectedVariant.id}
        onVariantChange={handleVariantChange}
        stock={selectedVariant.stock}
        quantity={quantity}
        onQuantityChange={setQuantity}
        inStock={inStock}
      />

      <ProductActions inStock={inStock} />

      <ProductQuickLinks />
    </div>
  );
};
