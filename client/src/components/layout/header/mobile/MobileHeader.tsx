import { LogIn, Search, ShoppingCart, User } from "lucide-react";
import { HeaderIconButton } from "../index";
import { MobileMenu } from "./index";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const MobileHeader = () => {
  const user = null; // to be replaced
  const { isDark } = useTheme();

  return (
    <div className="flex items-center justify-between md:hidden">
      <div className="flex items-center">
        <MobileMenu />
        <HeaderIconButton tooltip="Search">
          <Search size={20} />
        </HeaderIconButton>
      </div>

      <Link
        to="/"
        className={clsx(
          "text-md flex items-center gap-2 font-semibold capitalize",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Gabal fragrances
      </Link>

      <div className="flex items-center">
        <HeaderIconButton tooltip={user ? "Proile" : "Log in"}>
          {user ? <User size={20} /> : <LogIn size={20} />}
        </HeaderIconButton>

        <HeaderIconButton tooltip="Your Cart" contentClassName="w-22">
          <ShoppingCart size={20} />
        </HeaderIconButton>
      </div>
    </div>
  );
};
