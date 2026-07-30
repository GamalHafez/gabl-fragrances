import { LogIn, Moon, Search, Sun, User } from "lucide-react";
import { HeaderIconButton } from "../index";
import { MobileMenu } from "./index";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const MobileHeader = () => {
  const user = null; // to be replaced
  const { isDark, toggle } = useTheme();

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
        <HeaderIconButton tooltip={user ? "Proile" : "Log in"}>
          {user ? <User size={20} /> : <LogIn size={20} />}
        </HeaderIconButton>

        <HeaderIconButton tooltip="Theme" onClick={toggle}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </HeaderIconButton>
      </div>
    </div>
  );
};
