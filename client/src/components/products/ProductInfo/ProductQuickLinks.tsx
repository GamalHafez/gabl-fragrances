import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Customer Reviews", href: "#customer-reviews" },
  { label: "Trust Information", href: "#trust-information" },
  { label: "Related Products", href: "#related-products" },
];

export const ProductQuickLinks = () => {
  const { isDark } = useTheme();
  const [visibleLinks, setVisibleLinks] = useState(links);

  useEffect(() => {
    const updateLinks = () => {
      setVisibleLinks(
        links.filter((link) => document.querySelector(link.href)),
      );
    };

    // Initial check
    updateLinks();

    // Watch for sections being added/removed
    const observer = new MutationObserver(updateLinks);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  if (!visibleLinks.length) {
    return null;
  }

  return (
    <div className="mt-2 flex flex-wrap items-center gap-3 pt-2 md:mt-6">
      {visibleLinks.map((link) => (
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
