import { LogIn, User, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";
import { HeaderIconAction } from "./HeaderIconAction";
import { useState } from "react";
import { CartTrigger } from "@/components/cart/CartTrigger";
import { CartSheet } from "@/components/cart/CartSheet";
import { useAuth } from "@/context/auth/useAuth";

export const HeaderActions = () => {
  const { isAuthenticated } = useAuth();
  const { isDark, toggle } = useTheme();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex place-items-center items-center gap-2">
      <HeaderIconAction tooltip="Search" href="/collections">
        <Search size={20} />
      </HeaderIconAction>

      <HeaderIconAction
        tooltip={isAuthenticated ? "Profile" : "Sign up"}
        href={isAuthenticated ? "/profile" : "/signup"}
      >
        {isAuthenticated ? <User size={20} /> : <LogIn size={20} />}
      </HeaderIconAction>

      <CartTrigger onOpenChange={setCartOpen} />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />

      <HeaderIconAction tooltip="Theme" onClick={toggle}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </HeaderIconAction>
    </div>
  );
};
