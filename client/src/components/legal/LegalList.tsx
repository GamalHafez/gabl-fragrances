import { useTheme } from "@/context/theme/useTheme";
import type { LegalListData } from "@/data/privacyPolicy";
import clsx from "clsx";
import { GitCommitHorizontal } from "lucide-react";

export const LegalList = ({ title, content }: LegalListData) => {
  const { isDark } = useTheme();

  return (
    <li
      className={clsx(
        "flex items-start gap-4 rounded-xl px-4 py-2 transition-colors duration-300",
        isDark ? "hover:bg-zinc-900/60" : "hover:bg-zinc-100/70",
      )}
    >
      <div
        className={clsx(
          "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isDark
            ? "bg-brand-500/15 text-brand-300"
            : "bg-brand-100 text-brand-700",
        )}
      >
        <GitCommitHorizontal size={16} />
      </div>

      <div>
        <h3
          className={clsx(
            "text-base font-semibold",
            isDark ? "text-zinc-100" : "text-zinc-900",
          )}
        >
          {title}
        </h3>

        <p
          className={clsx(
            "leading-relaxed",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          {content}
        </p>
      </div>
    </li>
  );
};
