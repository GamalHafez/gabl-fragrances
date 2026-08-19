import { MainHeading } from "@/components/ui/common";
import { Rating } from "@/components/ui/products";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type ProductHeaderProps = {
  name: string;
  inspiredBy: string;
  isSample?: boolean;
  rating?: number;
  reviewCount?: number;
  price: number;
};

export const ProductHeader = ({
  name,
  inspiredBy,
  isSample,
  rating,
  reviewCount,
  price,
}: ProductHeaderProps) => {
  const { isDark } = useTheme();

  return (
    <header className="mb-0 flex flex-col items-start justify-between gap-1">
      <MainHeading title={name} className="md:mb-0" />
      <p
        className={clsx(
          "text-muted-foreground mt-1 text-sm",
          isDark ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Inspired by{" "}
        <span
          className={clsx(
            "font-medium",
            isDark ? "text-brand-300" : "text-brand-700",
          )}
        >
          {inspiredBy}
        </span>
      </p>
      {!isSample && <Rating rating={rating ?? 0} reviewCount={reviewCount} />}
      <p
        className={clsx(
          "mt-2 text-3xl font-bold",
          isDark ? "text-zinc-300" : "text-zinc-800",
        )}
      >
        {price.toFixed(2)} <span className="ml-1 text-xl">EGP</span>
      </p>
    </header>
  );
};
