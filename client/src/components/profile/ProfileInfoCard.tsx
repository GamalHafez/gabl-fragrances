import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { LucideIcon } from "lucide-react";

type ProfileInfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const ProfileInfoCard = ({
  icon: Icon,
  label,
  value,
}: ProfileInfoCardProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-col gap-1 rounded-2xl border px-5 py-4",
        isDark
          ? "border-neutral-800 bg-neutral-900"
          : "border-neutral-200 bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={clsx(
            "text-sm font-semibold",
            isDark ? "text-neutral-100" : "text-neutral-900",
          )}
        >
          {label}
        </h3>

        <Icon
          className={clsx(
            "h-4 w-4 shrink-0",
            isDark ? "text-emerald-400" : "text-emerald-600",
          )}
        />
      </div>

      <p
        className={clsx(
          "text-sm",
          isDark ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {value}
      </p>
    </div>
  );
};
