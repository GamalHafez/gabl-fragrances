import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { CollectionsSearchSkeleton } from "./CollectionsSearchSkeleton";

export const CollectionsSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <CollectionsSearchSkeleton />

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-22 xl:grid-cols-4 xl:gap-x-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
