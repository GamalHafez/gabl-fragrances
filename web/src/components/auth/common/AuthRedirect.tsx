import { Link } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type AuthRedirectProps = {
  message: string;
  actionLabel: string;
  actionHref: string;
};

export const AuthRedirect = ({
  message,
  actionLabel,
  actionHref,
}: AuthRedirectProps) => {
  const { isDark } = useTheme();

  return (
    <p
      className={clsx(
        "text-center text-sm sm:text-left",
        isDark ? "text-neutral-400" : "text-neutral-600",
      )}
    >
      {message}
      <Link
        to={actionHref}
        className={clsx(
          "ml-1.5 font-semibold transition-colors duration-200",
          isDark
            ? "text-neutral-100 hover:text-amber-300"
            : "hover:text-brand-600 text-neutral-950",
        )}
      >
        {actionLabel}
      </Link>
    </p>
  );
};
