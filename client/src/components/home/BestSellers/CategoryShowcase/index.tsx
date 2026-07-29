import { useState } from "react";
import { bestSellers, type BestSeller, type Category } from "../bestSellers";
import { LeftProductList } from "./LeftProductList";

const CategoryShowcase = ({ category }: { category: Category }) => {
  const [selectedProduct, setSelectedProduct] = useState<BestSeller>(
    bestSellers[category][0],
  );
  const products = bestSellers[category];

  return (
    <article className="mt-2 flex flex-col px-2">
      <LeftProductList
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />
    </article>
  );
};

export default CategoryShowcase;
