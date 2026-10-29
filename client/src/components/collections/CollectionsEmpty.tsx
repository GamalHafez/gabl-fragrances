import clsx from "clsx";
import { SearchX } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";

type CollectionsEmptyProps = {
  onReset?: () => void;
};

export const CollectionsEmpty = ({ onReset }: CollectionsEmptyProps) => {
  const { isDark } = useTheme();

  return (
    <div
      role="status"
      className={clsx(
        "mx-auto my-12 flex max-w-md flex-col items-center gap-3 rounded-2xl border px-6 py-12 text-center",
        isDark ? "border-white/10 bg-white/5" : "border-zinc-200 bg-zinc-50",
      )}
    >
      <div
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-full",
          isDark ? "bg-white/10 text-zinc-300" : "bg-zinc-200 text-zinc-600",
        )}
      >
        <SearchX aria-hidden className="h-6 w-6" />
      </div>

      <h3
        className={clsx(
          "text-lg font-semibold",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        No fragrances found
      </h3>

      <p
        className={clsx("text-sm", isDark ? "text-zinc-400" : "text-zinc-600")}
      >
        We couldn't find anything matching your search. Try a different name or
        adjust the filters.
      </p>

      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className={clsx(
            "mt-2 cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors",
            isDark
              ? "bg-white text-zinc-900 hover:bg-zinc-200"
              : "bg-zinc-900 text-white hover:bg-zinc-700",
          )}
        >
          Clear search
        </button>
      )}
    </div>
  );
};
