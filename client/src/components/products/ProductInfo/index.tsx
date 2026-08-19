import type { Product, ProductReview } from "@shared/types/product";
import { ProductBadges } from "./ProductBadges/index";
import { ProductHeader } from "./ProductHeader";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { ProductOptions } from "./ProductOptions";
import { useState } from "react";
import { ProductActions } from "./ProductActions";
import { ProductQuickLinks } from "./ProductQuickLinks";
import { getAverageRating, getProductBadges } from "@/utils";

type ProductInfoProps = {
  product: Product;
  reviews: ProductReview[];
  selectedVariant: Product["variants"][number];
  setSelectedVariantId: (variant: string) => void;
};

export const ProductInfo = ({
  product,
  reviews,
  selectedVariant,
  setSelectedVariantId,
}: ProductInfoProps) => {
  const { isDark } = useTheme();
  const { name, variants, inspiredBy, description } = product;

  const [quantity, setQuantity] = useState(1);

  const badges = getProductBadges(product);
  const inStock = product.variants.some(
    (variant) => variant.isActive && variant.stock > 0,
  );

  const handleVariantChange = (variantId: string) => {
    const variant = variants.find((variant) => variant.id === variantId);

    if (!variant) return;

    setQuantity(1);
    setSelectedVariantId(variantId);
  };

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
