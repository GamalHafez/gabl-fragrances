import { Moon, Search, ShoppingCart, Sun } from "lucide-react";
import { HeaderIconAction } from "../index";
import { MobileMenu } from "./index";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { scrollToTop } from "@/utils";

export const MobileHeader = () => {
  const { isDark, toggle } = useTheme();

  const actionStyles = clsx(
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors",
    isDark
      ? "text-brand-300 hover:bg-zinc-900/10 hover:text-red-200"
      : "hover:text-brand-600 hover:bg-brand-100/10",
  );

  return (
    <div className="flex items-center justify-between md:hidden">
      <div className="flex items-center">
        <MobileMenu />
        <HeaderIconAction
          tooltip="Search"
          trigger={
            <Link
              to="/collections"
              onClick={() => scrollToTop()}
              className={actionStyles}
            >
              <Search size={20} />
            </Link>
          }
        />
      </div>

      <Link
        to="/"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={clsx(
          "text-md flex items-center gap-2 font-semibold capitalize",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Gabal fragrances
      </Link>

      <div className="flex items-center">
        <HeaderIconAction
          tooltip="Your Cart"
          trigger={
            <Link
              to="/cart"
              onClick={() => scrollToTop()}
              className={actionStyles}
            >
              <ShoppingCart size={20} />
            </Link>
          }
          contentClassName="w-22"
        />

        <HeaderIconAction
          tooltip="Theme"
          trigger={
            <button type="button" className={actionStyles} onClick={toggle}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          }
        />
      </div>
    </div>
  );
};
