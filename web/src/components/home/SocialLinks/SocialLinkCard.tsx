import type { SocialLink } from "@/data/socialLinks";
import { useTheme } from "@/context/theme/useTheme";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

export const SocialLinkCard = ({ social }: { social: SocialLink }) => {
  const { isDark } = useTheme();
  const { icon: Icon, username, name, href } = social;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group flex items-center gap-4 rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:block md:rounded-3xl md:p-8",
        isDark
          ? "hover:border-brand-300/40 border-zinc-700 bg-zinc-900/60"
          : "hover:border-brand-500/40 border-white/30 bg-white/60",
      )}
    >
      <div
        className={clsx(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 md:mb-8 md:h-16 md:w-16 md:rounded-2xl",
          isDark
            ? "bg-brand-400/15 text-brand-100 group-hover:bg-brand-500 group-hover:text-white"
            : "bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white",
        )}
      >
        <Icon size={24} className="md:h-7.5 md:w-7.5" />
      </div>

      <div className="flex-1 md:block">
        <h3
          className={clsx(
            "text-lg font-semibold md:text-xl",
            isDark ? "text-zinc-100" : "text-zinc-900",
          )}
        >
          {name}
        </h3>

        <p
          className={clsx(
            "mt-1 text-sm md:mt-2",
            isDark ? "text-zinc-400" : "text-zinc-500",
          )}
        >
          {username}
        </p>

        <div
          className={clsx(
            "mt-3 hidden items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase md:mt-8 md:flex",
            isDark ? "text-brand-100" : "text-brand-500",
          )}
        >
          Follow
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </a>
  );
};
