import {
  DEFAULT_FILTERS,
  type GenderOption,
  type SortOption,
} from "@/components/collections/CollectionsFilter";
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
import { useSearchParams } from "react-router-dom";

const GENDER_PARAM: Record<GenderOption, Gender | undefined> = {
  all: undefined,
  men: "MEN",
  women: "WOMEN",
  unisex: "UNISEX",
};

const SORT_VALUES: SortOption[] = ["best-selling", "price-asc", "price-desc"];

const isGenderOption = (value: string | null): value is GenderOption =>
  value !== null && Object.hasOwn(GENDER_PARAM, value);

const isSortOption = (value: string | null): value is SortOption =>
  SORT_VALUES.includes(value as SortOption);

export const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = (searchParams.get("q") ?? "").slice(0, 100);
  const genderParam = searchParams.get("gender");
  const sortParam = searchParams.get("sort");

  const gender: GenderOption = isGenderOption(genderParam)
    ? genderParam
    : DEFAULT_FILTERS.gender;
  const sort: SortOption = isSortOption(sortParam)
    ? sortParam
    : DEFAULT_FILTERS.sort;

  const params: SearchProductsParams = {
    q: query || undefined,
    sort,
    gender: GENDER_PARAM[gender],
  };

  const { data, isPending, isError, isFetching, refetch } =
    useSearchProducts(params);

  const handleSearch = (next: {
    query: string;
    sort: SortOption;
    gender: GenderOption;
  }) => {
    const nextParams = new URLSearchParams();
    if (next.query) nextParams.set("q", next.query);
    if (next.gender !== "all") nextParams.set("gender", next.gender);
    if (next.sort !== DEFAULT_FILTERS.sort) nextParams.set("sort", next.sort);
    setSearchParams(nextParams);
  };

  return (
    <PageWrapper>
      <Container>
        <CollectionsHero />

        <CollectionsSearch
          key={searchParams.toString()} // remount when the URL changes (e.g. footer links)
          initialQuery={query}
          initialFilters={{ sort, gender }}
          onSearch={handleSearch}
        />

        {isPending || isFetching ? (
          <CollectionsSkeleton />
        ) : isError ? (
          <DataError
            message="We couldn't load our fragrances right now. Please try again in a moment."
            onRetry={() => refetch()}
          />
        ) : data.products.length === 0 ? (
          <CollectionsEmpty onReset={() => setSearchParams({})} />
        ) : (
          <Reveal>
            <CollectionsGrid products={data.products} />
          </Reveal>
        )}
      </Container>
    </PageWrapper>
  );
};