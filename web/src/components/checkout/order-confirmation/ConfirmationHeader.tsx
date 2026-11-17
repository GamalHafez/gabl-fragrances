import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { CircleCheckBig } from "lucide-react";

export const ConfirmationHeader = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={clsx(
        "flex flex-col items-center gap-3 rounded-2xl border px-6 py-10 text-center sm:px-10 sm:py-12",
        isDark
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-emerald-100 bg-emerald-50/60",
      )}
    >
      <div
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-full",
          isDark ? "bg-emerald-500/10" : "bg-emerald-100",
        )}
      >
        <CircleCheckBig
          className={clsx(
            "h-8 w-8",
            isDark ? "text-emerald-400" : "text-emerald-600",
          )}
          strokeWidth={1.5}
        />
      </div>

      <h1
        className={clsx(
          "mt-1 text-2xl font-semibold tracking-tight sm:text-3xl",
          isDark ? "text-emerald-200" : "text-emerald-800",
        )}
      >
        Order confirmed!
      </h1>

      <p
        className={clsx(
          "font-medium",
          isDark ? "text-emerald-200" : "text-emerald-700",
        )}
      >
        Thanks for your order from{" "}
        <span
          className={clsx(
            "font-semibold tracking-wide",
            isDark ? "text-brand-50" : "text-brand-900",
          )}
        >
          Gabal
        </span>
      </p>

      <p
        className={clsx(
          "max-w-2xl text-sm leading-relaxed sm:text-base",
          isDark ? "text-emerald-300/70" : "text-emerald-700/70",
        )}
      >
        We've received your order successfully. Your order summary is below.
        We'll notify you when it's ready to ship with tracking details.
      </p>
    </header>
  );
};
