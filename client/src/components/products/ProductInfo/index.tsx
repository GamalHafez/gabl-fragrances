import type { Product } from "@/mockProducts";
import { ProductBadges, type ProductBadge } from "./ProductBadges/index";
import { ProductHeader } from "./ProductHeader";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const sizes = [30, 50, 100];
  const {
    collection,
    inStock,
    name,
    inspiredBy,
    price,
    description,
    size: productSize,
  } = product;

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

      <p className="text-muted-foreground leading-7">{description}</p>

      {/** Size Selection + Quantity Selector      */}
      <div>
        <p>size:</p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              disabled={!inStock || size !== productSize}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
        {/** + 1 - button */}
      </div>

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
