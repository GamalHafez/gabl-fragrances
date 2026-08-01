import { cn } from "@/utils";

type SeparatorProps = {
  className?: string;
};

export const Separator = ({ className }: SeparatorProps) => {
  return <span className={cn("bg-brand-700 block h-px w-full", className)} />;
};
