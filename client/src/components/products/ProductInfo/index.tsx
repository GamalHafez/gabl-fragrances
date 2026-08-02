import type { Product } from "@/mockProducts";
import { ProductBadges, type ProductBadge } from "./ProductBadges/index";
import { ProductHeader } from "./ProductHeader";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ProductOptions } from "./ProductOptions";
import { useState } from "react";

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
      {/** Product badges */}
      <ProductBadges
        // To be dynamic later ...
        badges={badges}
      />

      {/** Product Title and Description */}
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

      {/** Size Selection + Quantity Selector      */}
      <ProductOptions
        size={size}
        quantity={quantity}
        onQuantityChange={setQuantity}
      />

      {/** Product Actions */}
      <div>
        <button className="w-full rounded-full bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 lg:w-fit dark:bg-amber-700">
          Add to Cart
        </button>
        <button className="w-full rounded-full bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 lg:w-fit dark:bg-amber-700">
          Buy it now
        </button>
      </div>

      {/** Delivery / Stock Info */}

      {/** will be refered to different sections in the rpoduct page but down */}
      <div>
        <a>Product Details</a>
        <a>Customer Reviews</a>
      </div>
    </div>
  );
};
