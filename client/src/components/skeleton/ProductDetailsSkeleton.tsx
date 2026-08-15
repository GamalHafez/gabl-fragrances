import { Skeleton } from "@/components/ui/shadcn/skeleton";

export const ProductDetailsSkeleton = () => {
  return (
    <section className="grid gap-10 md:py-10 lg:grid-cols-2 lg:items-start">
      {/* Product Image */}
      <div className="mx-auto w-4/5 overflow-hidden rounded-2xl border p-4 shadow-xl md:w-full md:p-8">
        <Skeleton className="aspect-square w-full rounded-2xl" />
      </div>

      {/* Product Info */}
      <div className="flex h-full flex-col justify-center space-y-5 px-4 md:px-0">
        {/* Badges */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-28 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        {/* Product name */}
        <Skeleton className="h-9 w-3/4 rounded-md md:h-10" />

        {/* Inspired by */}
        <Skeleton className="h-4 w-1/2 rounded-md" />

        {/* Rating */}
        <Skeleton className="h-5 w-32 rounded-md" />

        {/* Price */}
        <Skeleton className="h-8 w-28 rounded-md" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
          <Skeleton className="h-4 w-2/3 rounded-md" />
        </div>

        {/* Product options */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Skeleton className="h-12 flex-1 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>

        {/* Quick links */}
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-4 w-28 rounded-md" />
        </div>
      </div>
    </section>
  );
};
