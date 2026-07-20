import clsx from "clsx";

type SeparatorProps = {
  mt?: string; // e.g. "2", "4", "8"
  color?: string; // e.g. "brand-700", "zinc-300"
};

export const Separator = ({
  mt = "4",
  color = "brand-700",
}: SeparatorProps) => {
  return (
    <span className={clsx("block h-px w-full", `bg-${color}`, `mt-${mt}`)} />
  );
};
