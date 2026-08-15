import {
  CollectionsHero,
  CollectionsGrid,
} from "@/components/collections/index";
import Reveal from "@/components/ui/animation/Reveal";
import { Container, PageWrapper } from "@/components/ui/common";
import { useProducts } from "@/hooks/products";

export const Collections = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return;
    //<ProductsSkeleton />;
  }

  if (error) {
    return;
    //<ProductsError />;
  }

  if (!products) {
    return null;
  }

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
