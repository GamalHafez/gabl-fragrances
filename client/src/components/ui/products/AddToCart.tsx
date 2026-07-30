import clsx from "clsx";
import { Plus, ShoppingCart } from "lucide-react";
import { useTheme } from "@/context/useTheme";

export const AddToCart = ({ isMobile }: { isMobile?: boolean }) => {
  const { isDark } = useTheme();

  return (
    <button
      type="button"
      aria-label="Add to cart"
      className={clsx(
        "group relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-300",
        "hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:ring-brand-500/40 focus-visible:ring-2 focus-visible:outline-none",
        isDark
          ? "hover:border-brand-300/40 hover:bg-brand-300/10 hover:text-brand-200 border-white/10 bg-white/5 text-zinc-300"
          : "hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500 border-zinc-200 bg-white text-zinc-700",
        isMobile && "inline-flex md:hidden",
      )}
    >
      <ShoppingCart
        size={20}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span className="bg-brand-500 absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full shadow-md">
        <Plus size={12} className="text-white" strokeWidth={2.5} />
      </span>
    </button>
  );
};
