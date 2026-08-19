import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/utils";

export const Eyebrow = ({
  eyebrow,
  className,
}: {
  eyebrow: string;
  className?: string;
}) => {
  const { isDark } = useTheme();

  return (
    <h3
      className={cn(
        "mb-3 text-center text-sm font-semibold tracking-[0.25em] uppercase lg:text-base",
        isDark ? "text-brand-100" : "text-brand-500",
        className,
      )}
    >
      {eyebrow}
    </h3>
  );
};
