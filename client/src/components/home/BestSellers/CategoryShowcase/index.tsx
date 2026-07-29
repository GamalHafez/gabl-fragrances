import { useState } from "react";
import { bestSellers, type BestSeller, type Category } from "../bestSellers";
import { LeftProductList } from "./LeftProductList";
import { RightProductPreview } from "./RightProductPreview";

const CategoryShowcase = ({ category }: { category: Category }) => {
  const [selectedProduct, setSelectedProduct] = useState<BestSeller>(
    bestSellers[category][0],
  );
  const products = bestSellers[category];

  return (
    <article className="mt-2 flex flex-col justify-center px-2 md:flex-row">
      <LeftProductList
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />

      <RightProductPreview selectedProduct={selectedProduct} />
    </article>
  );
};

export default CategoryShowcase;
