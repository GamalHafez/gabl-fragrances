import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

export const SectionHeading = ({ title }: { title: string }) => {
  const { isDark } = useTheme();

  return (
    <h2
      className={clsx(
        "mt-2 mb-8 text-xl font-bold tracking-tight md:mb-0 md:text-4xl lg:text-5xl",
        isDark ? "text-brand-50" : "text-zinc-900",
      )}
    >
      {title}
    </h2>
  );
};
