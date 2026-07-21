import clsx from "clsx";
import { Link } from "react-router-dom";
import { Navigation, HeaderActions } from "./index";
import { useTheme } from "@/context/useTheme";

export const DesktopHeader = () => {
  const { isDark } = useTheme();

  return (
    <div className="hidden items-center justify-between md:flex">
      <Link
        to="/"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={clsx(
          "flex items-center gap-2 text-xl font-semibold capitalize",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Gabal fragrances
      </Link>

      <Navigation />

      <HeaderActions />
    </div>
  );
};
