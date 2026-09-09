import { LogIn, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";
import { HeaderIconAction } from "./HeaderIconAction";
import { useState } from "react";
import { CartTrigger } from "@/components/cart/CartTrigger";
import { CartSheet } from "@/components/cart/CartSheet";
import { useAuth } from "@/context/auth/useAuth";
import { AccountMenu } from "@/components/auth/common";

export const HeaderActions = () => {
  const { isAuthenticated } = useAuth();
  const { isDark, toggle } = useTheme();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex place-items-center items-center">
      <HeaderIconAction tooltip="Search" href="/collections">
        <Search size={20} />
      </HeaderIconAction>

      {isAuthenticated ? (
        <AccountMenu />
      ) : (
        <HeaderIconAction tooltip="Sign up" href="/signup">
          <LogIn size={20} />
        </HeaderIconAction>
      )}

      <CartTrigger onOpenChange={setCartOpen} />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />

      <HeaderIconAction tooltip="Theme" onClick={toggle}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </HeaderIconAction>
    </div>
  );
};
