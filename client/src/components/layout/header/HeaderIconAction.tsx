import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { useTheme } from "@/context/theme/useTheme";
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
  href?: string;
  onClick?: () => void;
  label?: string;
  children: React.ReactNode;
  contentClassName?: string;
} & (LinkActionProps | ButtonActionProps);

export const HeaderIconAction = ({
  tooltip,
  href,
  onClick,
  label,
  contentClassName,
  children,
}: HeaderIconActionProps) => {
  const { isDark } = useTheme();

  const actionStyles = clsx(
    "flex cursor-pointer items-center justify-center transition-colors",
    label
      ? "h-10 shrink-0 gap-1.5 rounded-full md:px-3"
      : "h-10 w-10 rounded-full",
    isDark
      ? "text-brand-300 hover:bg-zinc-900/10 hover:text-red-200"
      : "hover:bg-brand-100/10 hover:text-brand-600",
  );

  const content = (
    <>
      {children}
      {label && (
        <span className="text-sm font-medium whitespace-nowrap">{label}</span>
      )}
    </>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={(props) =>
            href ? (
              <Link {...props} to={href} className={actionStyles}>
                {content}
              </Link>
            ) : (
              <button
                {...props}
                type="button"
                className={actionStyles}
                onClick={onClick}
              >
                {content}
              </button>
            )
          }
        />

        <TooltipContent className={contentClassName}>
          <p className="capitalize">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
