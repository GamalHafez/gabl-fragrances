import type { Product } from "@/mockProducts";
import { ProductBadges, type ProductBadge } from "./ProductBadges/index";
import { ProductHeader } from "./ProductHeader";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ProductOptions } from "./ProductOptions";
import { useState } from "react";
import { ProductActions } from "./ProductActions";
import { ProductQuickLinks } from "./ProductQuickLinks";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { isDark } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const { collection, inStock, name, inspiredBy, price, description, size } =
    product;

  // Will be deleted and get it from BackEnd
  const badges: ProductBadge[] = [
    {
      label: inStock ? "In Stock" : "Out of Stock",
      status: inStock ? "stock" : "out-of-stock",
    },
    {
      label: `${collection}'s Collection`,
      status: "collection",
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center space-y-5">
      <ProductBadges
        // To be dynamic later ...
        badges={badges}
      />

      <ProductHeader
        name={name}
        inspiredBy={inspiredBy}
        rating={4} // To be dynamic later ...
        reviewCount={2} // To be dynamic later ...
        price={price}
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
        size={size}
        quantity={quantity}
        onQuantityChange={setQuantity}
      />

      <ProductActions />

      <ProductQuickLinks />
    </div>
  );
};
