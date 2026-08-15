import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const CollectionsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-22 xl:grid-cols-4 xl:gap-x-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
