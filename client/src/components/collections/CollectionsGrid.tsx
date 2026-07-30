import { Link } from "react-router-dom";
import { products } from "@/mockProducts";
import { ProductCard } from "@/components/ui/products";

export const CollectionsGrid = () => {
  return (
    <section className="py-12 pt-8">
      <div className="grid grid-cols-2 gap-6 md:gap-10 lg:grid-cols-3 lg:gap-18">
        {products.map((product) => (
          <Link key={product.id} to={product.slug} className="block">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};
