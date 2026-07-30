import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

type MainHeadingProps = {
  title: string;
  highlighted?: string;
};

export const MainHeading = ({ title, highlighted }: MainHeadingProps) => {
  const { isDark } = useTheme();

  return (
    <h1
      className={clsx(
        "text-3xl leading-[1.05] font-extrabold tracking-tight md:mb-5 lg:text-5xl",
        isDark ? "text-zinc-50" : "text-zinc-900",
      )}
    >
      {title}{" "}
      {highlighted && (
        <span className={clsx(isDark ? "text-brand-300" : "text-brand-500")}>
          {highlighted}
        </span>
      )}
    </h1>
  );
};
