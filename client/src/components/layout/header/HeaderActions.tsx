import { LogIn, User, Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { HeaderIconAction } from "./HeaderIconAction";

export const HeaderActions = () => {
  const user = null; // to be replaced
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex place-items-center items-center gap-2">
      <HeaderIconAction tooltip="Search" href="/collections">
        <Search size={20} />
      </HeaderIconAction>

      <HeaderIconAction
        tooltip={user ? "Profile" : "Log in"}
        href={user ? "/profile" : "/login"}
      >
        {user ? <User size={20} /> : <LogIn size={20} />}
      </HeaderIconAction>

      <HeaderIconAction tooltip="Your Cart" href="/cart">
        <ShoppingCart size={20} />
      </HeaderIconAction>

      <HeaderIconAction tooltip="Theme" onClick={toggle}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </HeaderIconAction>
    </div>
  );
};
