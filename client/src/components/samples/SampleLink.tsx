import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type SampleLinkProps = {
  selectedSampleSlug: string;
};

export const SampleLink = ({ selectedSampleSlug }: SampleLinkProps) => {
  const { isDark } = useTheme();

  return (
    <Link
      to={`/products/${selectedSampleSlug}`}
      className={clsx(
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
        isDark
          ? "text-brand-300 hover:text-brand-200"
          : "text-brand-500 hover:text-brand-600",
      )}
    >
      Explore full fragrance
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};
