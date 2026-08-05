import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

const links = [
  { label: "Customer Reviews", href: "#customer-reviews" },
  { label: "Trust Information", href: "#trust-information" },
  { label: "Related Products", href: "#related-products" },
];

export const ProductQuickLinks = () => {
  const { isDark } = useTheme();

  return (
    <div className="mt-2 flex flex-wrap items-center gap-3 pt-2 md:mt-6">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={clsx(
            "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
            isDark
              ? "border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:border-amber-500 hover:bg-zinc-800 hover:text-amber-300"
              : "border-zinc-200 bg-white/70 text-zinc-700 hover:border-amber-400 hover:bg-white hover:text-zinc-900",
          )}
        >
          <span>{link.label}</span>

          <ChevronRight
            className={clsx(
              "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
              isDark ? "text-amber-400" : "text-amber-600",
            )}
          />
        </a>
      ))}
    </div>
  );
};
