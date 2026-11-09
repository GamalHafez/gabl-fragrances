import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";

export const SuccessfullyChangedPassword = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-col items-center rounded-2xl border px-6 py-10 text-center",
        isDark
          ? "border-zinc-800 bg-zinc-900/50"
          : "border-zinc-200 bg-zinc-50/70",
      )}
    >
      {/* Success Icon */}
      <div
        className={clsx(
          "mb-5 flex h-16 w-16 items-center justify-center rounded-full",
          isDark ? "bg-emerald-500/10" : "bg-emerald-50",
        )}
      >
        <CheckCircle2
          strokeWidth={1.8}
          className={clsx(
            "h-8 w-8",
            isDark ? "text-emerald-400" : "text-emerald-600",
          )}
        />
      </div>

      {/* Content */}
      <h3
        className={clsx(
          "text-lg font-semibold tracking-tight md:text-xl",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Password Updated!
      </h3>

      <p
        className={clsx(
          "mt-2 max-w-sm text-sm leading-6",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        Your account is now protected with your new password.
      </p>

      <div
        className={clsx(
          "mt-6 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium",
          isDark
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-emerald-50 text-emerald-700",
        )}
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
        Password change complete
      </div>
    </div>
  );
};
