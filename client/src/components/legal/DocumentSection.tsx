import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type AboutSectionProps = {
  title?: string;
  children: React.ReactNode;
};

export const DocumentSection = ({ title, children }: AboutSectionProps) => {
  const { isDark } = useTheme();

  return (
    <section className="mt-4">
      {title && (
        <h3
          className={clsx(
            "mb-1 text-xl font-semibold capitalize",
            isDark ? "text-zinc-200" : "text-zinc-800",
          )}
        >
          {title}
        </h3>
      )}
      <div
        className={clsx(
          "mb-8 text-base",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {children}
      </div>
    </section>
  );
};
