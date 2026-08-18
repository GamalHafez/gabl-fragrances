import {
  CollectionsHero,
  CollectionsGrid,
} from "@/components/collections/index";
import { CollectionsSkeleton } from "@/components/skeleton/CollectionsSkeleton";
import Reveal from "@/components/ui/animation/Reveal";
import { Container, PageWrapper } from "@/components/ui/common";
import { DataError } from "@/components/ui/errors/DataError";
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
          <DataError
            message="We couldn't load our fragrances right now. Please try again in a moment."
            onRetry={() => refetch()}
          />
        ) : (
          <Reveal>
            <CollectionsGrid products={products ?? []} />
          </Reveal>
        )}
      </Container>
    </PageWrapper>
  );
};
