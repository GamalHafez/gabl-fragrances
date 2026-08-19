import { useTheme } from "@/context/theme/useTheme";
import { SplitText } from "@/components/ui/shadcn/SplitText";
import { cn } from "@/utils";

type MainHeadingProps = {
  title: string;
  highlighted?: string;
  className?: string;
};

export const MainHeading = ({
  title,
  highlighted,
  className,
}: MainHeadingProps) => {
  const { isDark } = useTheme();

  return (
    <SplitText
      key={`${title}-${highlighted ?? ""}`}
      tag="h1"
      text={title}
      highlighted={highlighted}
      className={cn(
        "text-3xl leading-[1.05] font-extrabold tracking-tight md:mb-5 lg:text-4xl",
        isDark ? "text-zinc-100" : "text-zinc-900",
        className,
      )}
    />
  );
};
