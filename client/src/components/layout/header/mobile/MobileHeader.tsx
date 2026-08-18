import { Moon, Search, Sun } from "lucide-react";
import { HeaderIconAction } from "../index";
import { MobileMenu } from "./index";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { CartTrigger } from "@/components/cart/CartTrigger";
import { CartSheet } from "@/components/cart/CartSheet";
import { useState } from "react";

export const MobileHeader = () => {
  const { isDark, toggle } = useTheme();
  const [cartOpen, setCartOpen] = useState(false);

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
        <CartTrigger onOpenChange={setCartOpen} />
        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />

        <HeaderIconAction tooltip="Theme" onClick={toggle}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </HeaderIconAction>
      </div>
    </div>
  );
};
