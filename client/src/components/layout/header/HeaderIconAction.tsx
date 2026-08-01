import { TooltipCard } from "@/components/ui/shadcn/hover-card";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Link } from "react-router-dom";

type LinkActionProps = {
  href: string;
  onClick?: never;
};

type ButtonActionProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  href?: never;
};

type HeaderIconActionProps = {
  tooltip: string;
  children: React.ReactNode;
  contentClassName?: string;
} & (LinkActionProps | ButtonActionProps);

export const HeaderIconAction = ({
  tooltip,
  href,
  onClick,
  contentClassName,
  children,
}: HeaderIconActionProps) => {
  const { isDark } = useTheme();

  const actionStyles = clsx(
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors",
    isDark
      ? "text-brand-300 hover:bg-zinc-900/10 hover:text-red-200"
      : "hover:text-brand-600 hover:bg-brand-100/10",
  );

  return (
    <TooltipCard
      trigger={
        href ? (
          <Link to={href} className={actionStyles}>
            {children}
          </Link>
        ) : (
          <button type="button" className={actionStyles} onClick={onClick}>
            {children}
          </button>
        )
      }
      content={<p className="capitalize">{tooltip}</p>}
      contentClassName={contentClassName}
    />
  );
};
