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
        "text-xl leading-[1.05] font-extrabold tracking-tight md:mb-5 md:text-2xl lg:text-4xl",
        isDark ? "text-zinc-100" : "text-zinc-900",
        className,
      )}
    />
  );
};
