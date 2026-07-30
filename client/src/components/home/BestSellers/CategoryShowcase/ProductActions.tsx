import { AddToCart } from "@/components/ui/products";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductActions = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center gap-3 md:flex-row">
      <AddToCart />

      <Link
        to="/"
        className={clsx(
          "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
          isDark
            ? "hover:border-brand-300/40 hover:bg-brand-300/10 hover:text-brand-200 border-white/10 bg-white/5 text-zinc-300"
            : "hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500 border-zinc-200 bg-white text-zinc-600",
        )}
      >
        <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
};
