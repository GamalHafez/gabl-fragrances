import { Link } from "react-router-dom";
import { ArrowRight, Compass, Info, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

const QUICK_LINKS: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Compass, label: "Explore Collections", href: "/collections" },
  { icon: Info, label: "About Us", href: "/about-us" },
  { icon: Mail, label: "Contact Us", href: "/contact" },
];

export const ProfileQuickLinks = () => {
  const { isDark } = useTheme();

  return (
    <div className="mt-16 mb-10 flex flex-col gap-3">
      <h3
        className={clsx(
          "font-semibold",
          isDark ? "text-neutral-100" : "text-neutral-900",
        )}
      >
        Explore More
      </h3>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            to={href}
            className={clsx(
              "group flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-medium transition-all",
              "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none",
              isDark
                ? "border-neutral-800 bg-neutral-900 text-neutral-200 hover:border-emerald-500/30 hover:bg-neutral-800"
                : "border-neutral-200 bg-white text-neutral-700 hover:border-emerald-200 hover:bg-neutral-50 hover:shadow-sm",
            )}
          >
            <Icon
              className={clsx(
                "h-4 w-4 shrink-0",
                isDark ? "text-emerald-400" : "text-emerald-600",
              )}
            />

            <span className="flex-1">{label}</span>

            <ArrowRight
              className={clsx(
                "h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100",
                isDark ? "text-emerald-400" : "text-emerald-600",
              )}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
