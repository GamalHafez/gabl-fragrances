import type { Product } from "@shared/types/product";
import { ProductBadges } from "./ProductBadges/index";
import { ProductHeader } from "./ProductHeader";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ProductOptions } from "./ProductOptions";
import { useState } from "react";
import { ProductActions } from "./ProductActions";
import { ProductQuickLinks } from "./ProductQuickLinks";
import { getProductBadges } from "@/utils";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { isDark } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const { name, inspiredBy, variants, description } = product;
  const badges = getProductBadges(product);
  const inStock = product.variants.some(
    (variant) => variant.isActive && variant.stock > 0,
  );

  return (
    <div className="flex h-full flex-col justify-center space-y-5 px-4 md:px-0">
      <ProductBadges badges={badges} />

      {variants.map((v) => (
        <ProductHeader
          key={v.id}
          name={name}
          inspiredBy={String(inspiredBy)}
          rating={4} // To be dynamic later ...
          reviewCount={2} // To be dynamic later ...
          price={Number(v.price)}
        />
      ))}

      <p
        className={clsx(
          "mt-3 mb-5 text-sm",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {description}
      </p>

      {variants.map((v) => (
        <ProductOptions
          key={v.id}
          size={v.sizeML}
          quantity={quantity}
          onQuantityChange={setQuantity}
          inStock={inStock}
        />
      ))}

      <ProductActions inStock={inStock} />

      <ProductQuickLinks />
    </div>
  );
};
