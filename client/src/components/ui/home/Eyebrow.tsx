import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const Eyebrow = ({ eyebrow }: { eyebrow: string }) => {
  const { isDark } = useTheme();

  return (
    <h3
      className={clsx(
        "mb-3 text-center text-sm font-semibold tracking-[0.25em] uppercase lg:text-base",
        isDark ? "text-brand-100" : "text-brand-500",
      )}
    >
      {eyebrow}
    </h3>
  );
};
