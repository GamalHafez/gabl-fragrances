import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { ReactNode } from "react";

type ConfirmationCardProps = {
  title: string;
  children: ReactNode;
};

export const ConfirmationCard = ({
  title,
  children,
}: ConfirmationCardProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "rounded-2xl border px-6 py-5 sm:px-8 sm:py-6",
        isDark
          ? "border-neutral-800 bg-neutral-900"
          : "border-neutral-200 bg-white",
      )}
    >
      <h3
        className={clsx(
          "text-base font-semibold sm:text-lg",
          isDark ? "text-neutral-100" : "text-neutral-900",
        )}
      >
        {title}
      </h3>

      <div
        className={clsx(
          "my-4 border-t",
          isDark ? "border-neutral-800" : "border-neutral-200",
        )}
      />

      {children}
    </div>
  );
};
