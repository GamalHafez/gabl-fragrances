import { CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const ReviewSuccess = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-col items-center rounded-2xl border px-6 py-10 text-center",
        isDark
          ? "border-zinc-800 bg-zinc-900/50"
          : "border-zinc-200 bg-zinc-50/50",
      )}
    >
      <div
        className={clsx(
          "mb-5 flex h-14 w-14 items-center justify-center rounded-full",
          isDark ? "bg-emerald-500/10" : "bg-emerald-50",
        )}
      >
        <CheckCircle2
          className={clsx(
            "h-7 w-7",
            isDark ? "text-emerald-400" : "text-emerald-600",
          )}
        />
      </div>

      <h3
        className={clsx(
          "text-lg font-semibold",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Thank you for your review!
      </h3>

      <p
        className={clsx(
          "mt-2 max-w-sm text-sm leading-relaxed",
          isDark ? "text-zinc-400" : "text-zinc-500",
        )}
      >
        Your review has been submitted and will appear after approval.
      </p>
    </div>
  );
};
