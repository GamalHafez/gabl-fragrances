import { LogIn, User, Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { HeaderIconButton } from "./HeaderIconButton";

export const HeaderActions = () => {
  const user = null; // to be replaced
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex place-items-center items-center gap-2">
      <HeaderIconButton tooltip="Search">
        <Search size={20} />
      </HeaderIconButton>

      <HeaderIconButton tooltip={user ? "Profile" : "Log in"}>
        {user ? <User size={20} /> : <LogIn size={20} />}
      </HeaderIconButton>

      <HeaderIconButton tooltip="Your Cart" contentClassName="w-22">
        <ShoppingCart size={20} />
      </HeaderIconButton>

      <HeaderIconButton tooltip="Theme" onClick={toggle}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </HeaderIconButton>
    </div>
  );
};
