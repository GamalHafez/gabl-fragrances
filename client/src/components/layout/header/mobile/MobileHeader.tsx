import { Moon, Search, ShoppingCart, Sun } from "lucide-react";
import { HeaderIconAction } from "../index";
import { MobileMenu } from "./index";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const MobileHeader = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex items-center justify-between md:hidden">
      <div className="flex items-center">
        <MobileMenu />
        <HeaderIconAction tooltip="Search" href="/collections">
          <Search size={20} />
        </HeaderIconAction>
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
        <HeaderIconAction tooltip="Your Cart" href="/cart">
          <ShoppingCart size={20} />
        </HeaderIconAction>

        <HeaderIconAction tooltip="Theme" onClick={toggle}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </HeaderIconAction>
      </div>
    </div>
  );
};
