import { Skeleton } from "@/components/ui/shadcn/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <article className="flex flex-col items-center overflow-hidden rounded-3xl">
      {/* Image */}
      <Skeleton className="aspect-square w-full rounded-3xl" />

      {/* Floating Content */}
      <div className="relative z-10 mx-5 -mt-8 w-full rounded-3xl border bg-zinc-100/20 p-4 shadow-md md:mx-auto md:-mt-10 md:w-[calc(100%-2rem)] md:p-6">
        {/* Gender + Arrow */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-16 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full md:h-5 md:w-5" />
        </div>

        {/* Product name */}
        <Skeleton className="mt-3 h-5 w-32 rounded-md md:h-6" />

        {/* Size */}
        <Skeleton className="mt-2 h-4 w-14 rounded-md" />

        {/* Price + Add to cart */}
        <div className="mt-3 flex items-center justify-between">
          <Skeleton className="h-7 w-24 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-full" />
        </div>
      </div>
    </article>
  );
};
