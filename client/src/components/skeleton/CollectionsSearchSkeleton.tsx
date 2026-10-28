import { Skeleton } from "@/components/ui/shadcn/skeleton";

export const CollectionsSearchSkeleton = () => {
  return (
    <div className="flex flex-col justify-between gap-2 px-4 md:w-full md:flex-row md:gap-4">
      {/* Search Input */}
      <Skeleton className="h-12 w-full flex-1 rounded-xl" />

      {/* Filters */}
      <Skeleton className="h-12 w-full rounded-xl md:w-48" />

      {/* Search Button */}
      <Skeleton className="h-12 w-full rounded-xl md:w-40" />
    </div>
  );
};
