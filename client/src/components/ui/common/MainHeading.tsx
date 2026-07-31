import clsx from "clsx";
import { useTheme } from "@/context/useTheme";
import SplitText from "@/components/ui/shadcn/SplitText";

type MainHeadingProps = {
  title: string;
  highlighted?: string;
};

export const MainHeading = ({ title, highlighted }: MainHeadingProps) => {
  const { isDark } = useTheme();

  return (
    <SplitText
      tag="h1"
      text={title}
      highlighted={highlighted}
      className={clsx(
        "text-3xl leading-[1.05] font-extrabold tracking-tight md:mb-5 lg:text-4xl",
        isDark ? "text-zinc-100" : "text-zinc-900",
      )}
    />
  );
};
