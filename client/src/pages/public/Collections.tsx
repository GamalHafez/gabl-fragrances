import type { GenderOption } from "@/components/collections/CollectionsFilter";
import {
  CollectionsHero,
  CollectionsGrid,
  CollectionsSearch,
  CollectionsEmpty,
} from "@/components/collections/index";
import { CollectionsSkeleton } from "@/components/skeleton/CollectionsSkeleton";
import Reveal from "@/components/ui/animation/Reveal";
import { Container, PageWrapper } from "@/components/ui/common";
import { DataError } from "@/components/ui/errors/DataError";
import { useSearchProducts } from "@/hooks/products";
import type { Gender } from "@shared/types/enums";
import type { SearchProductsParams } from "@shared/types/product";
import { useState } from "react";

const GENDER_PARAM: Record<GenderOption, Gender | undefined> = {
  all: undefined,
  men: "MEN",
  women: "WOMEN",
  unisex: "UNISEX",
};

export const Collections = () => {
  const [params, setParams] = useState<SearchProductsParams>({ page: 1 });
  const [searchKey, setSearchKey] = useState(0);
  const { data, isPending, isError, isFetching, refetch } =
    useSearchProducts(params);

  const handleReset = () => {
    setParams({ page: 1 });
    setSearchKey((key) => key + 1);
  };

  return (
    <PageWrapper>
      <Container>
        <CollectionsHero />

        <CollectionsSearch
          key={searchKey}
          onSearch={({ query, sort, gender }) =>
            setParams({
              q: query || undefined,
              sort,
              gender: GENDER_PARAM[gender],
              page: 1,
            })
          }
        />

        {/**  Products... */}
        {isPending || isFetching ? (
          <CollectionsSkeleton />
        ) : isError ? (
          <DataError
            message="We couldn't load our fragrances right now. Please try again in a moment."
            onRetry={() => refetch()}
          />
        ) : data.products.length === 0 ? (
          <CollectionsEmpty onReset={handleReset} />
        ) : (
          <Reveal>
            <CollectionsGrid products={data.products} />
          </Reveal>
        )}
      </Container>
    </PageWrapper>
  );
};
