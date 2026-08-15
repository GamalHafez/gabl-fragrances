import {
  CollectionsHero,
  CollectionsGrid,
} from "@/components/collections/index";
import Reveal from "@/components/ui/animation/Reveal";
import { Container, PageWrapper } from "@/components/ui/common";
import { productsService } from "@/services/products/products.service";
import type { Product } from "@shared/types/product";
import { useEffect, useState } from "react";

export const Collections = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productsService.getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <CollectionsHero />

        {/**  WIll ADD FILTERING BUTTONS ... */}

        {/**  Products... */}
        <Reveal>
          <CollectionsGrid products={products} />
        </Reveal>
      </Container>
    </PageWrapper>
  );
};
