import { RefreshCw, TriangleAlert } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Link } from "react-router-dom";

type DataErrorProps = {
  message?: string;
  onRetry?: () => void;
};

export const DataError = ({ message, onRetry }: DataErrorProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "mt-4 mb-8 flex min-h-80 flex-col items-center justify-center rounded-3xl border px-6 py-12 text-center",
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
        {message}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className={clsx(
              "inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              isDark
                ? "bg-zinc-100 text-zinc-900 hover:bg-white"
                : "bg-zinc-900 text-white hover:bg-zinc-700",
            )}
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
        )}

        <Link
          to="/"
          className={clsx(
            "inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
            isDark
              ? "border-zinc-700 text-zinc-200 hover:bg-zinc-800"
              : "border-zinc-300 text-zinc-700 hover:bg-zinc-100",
          )}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};
