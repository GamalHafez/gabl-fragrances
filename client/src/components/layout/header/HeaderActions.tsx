import { LogIn, User, Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { HeaderIconAction } from "./HeaderIconAction";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils";

export const HeaderActions = () => {
  const user = null; // to be replaced
  const { isDark, toggle } = useTheme();

  const actionStyles = clsx(
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors",
    isDark
      ? "text-brand-300 hover:bg-zinc-900/10 hover:text-red-200"
      : "hover:text-brand-600 hover:bg-brand-100/10",
  );

  return (
    <div className="flex place-items-center items-center gap-2">
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

      <HeaderIconAction
        tooltip={user ? "Profile" : "Log in"}
        trigger={
          <Link
            to={user ? "/profile" : "/login"}
            className={actionStyles}
            onClick={() => scrollToTop()}
          >
            {user ? <User size={20} /> : <LogIn size={20} />}
          </Link>
        }
      />

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
  );
};
