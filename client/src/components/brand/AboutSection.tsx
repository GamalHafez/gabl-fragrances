import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

type AboutSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const AboutSection = ({ title, children }: AboutSectionProps) => {
  const { isDark } = useTheme();

  return (
    <section className="mt-8">
      <h3
        className={clsx(
          "text-xl font-semibold capitalize",
          isDark ? "text-zinc-200" : "text-zinc-800",
        )}
      >
        {title}
      </h3>
      <div
        className={clsx(
          "text-base",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {children}
      </div>
    </section>
  );
};
