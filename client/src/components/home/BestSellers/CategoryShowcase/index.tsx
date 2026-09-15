import { useEffect, useState } from "react";
import { LeftProductList } from "./LeftProductList";
import { RightProductPreview } from "./RightProductPreview";
import type { BestSellerProduct } from "@shared/types/product";

type CategoryShowcaseProps = {
  bestSellers?: BestSellerProduct[];
};

const CategoryShowcase = ({ bestSellers = [] }: CategoryShowcaseProps) => {
  const [selectedProduct, setSelectedProduct] = useState<
    BestSellerProduct | undefined
  >(bestSellers[0]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedProduct(bestSellers[0]);
  }, [bestSellers]);

  if (bestSellers.length === 0 || !selectedProduct) {
    return (
      <p className="py-6 text-center text-sm text-zinc-500">
        No best sellers in this category yet.
      </p>
    );
  }

  return (
    <article className="mt-2 flex flex-col justify-center px-2 md:flex-row">
      <LeftProductList
        products={bestSellers}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />

      <RightProductPreview selectedProduct={selectedProduct} />
    </article>
  );
};

export default CategoryShowcase;
