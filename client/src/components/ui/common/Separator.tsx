import clsx from "clsx";

type SeparatorProps = {
  className?: string;
};

export const Separator = ({ className }: SeparatorProps) => {
  return <span className={clsx("bg-brand-700 block h-px w-full", className)} />;
};
