import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { FormLabel } from "@/components/ui/common";
import { LockKeyhole } from "lucide-react";

export const CountryField = () => {
  const { isDark } = useTheme();

  return (
    <div>
      <FormLabel id="country">Country / Region</FormLabel>
      <div
        aria-disabled="true"
        className={clsx(
          "flex items-center justify-between rounded-xl border px-4 py-3",
          "text-sm transition-colors",
          "cursor-not-allowed select-none",
          isDark
            ? "border-zinc-800 bg-zinc-900/60 text-zinc-500"
            : "border-zinc-200 bg-zinc-100 text-zinc-500",
        )}
      >
        <span>Egypt</span>

        <LockKeyhole
          aria-hidden="true"
          className={clsx(
            "h-4 w-4",
            isDark ? "text-zinc-600" : "text-zinc-400",
          )}
        />
      </div>

      <p
        className={clsx(
          "px-2 pt-1 pb-2 text-xs",
          isDark ? "text-zinc-600" : "text-zinc-400",
        )}
      >
        We currently deliver within Egypt only.
      </p>
    </div>
  );
};
