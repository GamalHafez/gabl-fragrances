import { RefreshCw, TriangleAlert } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

type ProductsErrorProps = {
  onRetry?: () => void;
};

export const ProductsError = ({ onRetry }: ProductsErrorProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex mb-8 mt-4 min-h-80 flex-col items-center justify-center rounded-3xl border px-6 py-12 text-center",
        isDark
          ? "border-zinc-800 bg-zinc-900/50"
          : "border-zinc-200 bg-zinc-50/20",
      )}
    >
      <div
        className={clsx(
          "mb-5 flex h-14 w-14 items-center justify-center rounded-full",
          isDark ? "bg-zinc-800" : "bg-zinc-100",
        )}
      >
        <TriangleAlert
          className={clsx(
            "h-6 w-6",
            isDark ? "text-zinc-300" : "text-zinc-600",
          )}
        />
      </div>

      <h2
        className={clsx(
          "text-lg font-semibold",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Something went wrong
      </h2>

      <p
        className={clsx(
          "mt-2 max-w-md text-sm",
          isDark ? "text-zinc-400" : "text-zinc-500",
        )}
      >
        We couldn't load our fragrances right now. Please try again in a moment.
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className={clsx(
            "mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
            isDark
              ? "bg-zinc-100 text-zinc-900 hover:bg-white"
              : "bg-zinc-900 text-white hover:bg-zinc-700",
          )}
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      )}
    </div>
  );
};
