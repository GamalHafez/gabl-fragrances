import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type InfoCardProps = {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
};

export const InfoCard = ({ icon: Icon, label, children }: InfoCardProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-col gap-2 rounded-2xl border px-5 py-4 sm:px-6 sm:py-5",
        isDark
          ? "border-neutral-800 bg-neutral-900"
          : "border-neutral-200 bg-white",
      )}
    >
      <div className="flex items-center gap-2">
        <Icon
          className={clsx(
            "h-4 w-4",
            isDark ? "text-neutral-400" : "text-neutral-500",
          )}
        />
        <h4
          className={clsx(
            "text-sm font-semibold",
            isDark ? "text-neutral-100" : "text-neutral-900",
          )}
        >
          {label}
        </h4>
      </div>

      <div
        className={clsx(
          "flex flex-col text-sm leading-relaxed",
          isDark ? "text-neutral-300" : "text-neutral-600",
        )}
      >
        {children}
      </div>
    </div>
  );
};