import {
  CollectionsHero,
  CollectionsGrid,
  ProductsError,
} from "@/components/collections/index";
import { CollectionsSkeleton } from "@/components/skeleton/CollectionsSkeleton";
import Reveal from "@/components/ui/animation/Reveal";
import { Container, PageWrapper } from "@/components/ui/common";
import { useProducts } from "@/hooks/products";

export const Collections = () => {
  const { data: products, isPending, isError, refetch } = useProducts();

  return (
    <PageWrapper>
      <Container>
        <CollectionsHero />

        {/**  WIll ADD FILTERING BUTTONS ... */}

        {/**  Products... */}
        {isPending ? (
          <CollectionsSkeleton />
        ) : isError ? (
          <ProductsError onRetry={() => refetch()} />
        ) : (
          <Reveal>
            <CollectionsGrid products={products ?? []} />
          </Reveal>
        )}
      </Container>
    </PageWrapper>
  );
};
