import { TooltipCard } from "@/components/ui/hover-card";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const HeaderIconButton = ({
  tooltip,
  children,
  onClick,
  contentClassName,
}: {
  tooltip: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  contentClassName?: string;
}) => {
  const { isDark } = useTheme();

  return (
    <TooltipCard
      trigger={
        <button
          type="button"
          className={clsx(
            "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors",
            isDark
              ? "text-red-300 hover:bg-zinc-900/10 hover:text-red-200"
              : "hover:bg-red-50 hover:text-red-700",
          )}
          onClick={onClick}
        >
          {children}
        </button>
      }
      content={<p className="text-zinc-900 capitalize">{tooltip}</p>}
      contentClassName={contentClassName}
    />
  );
};
