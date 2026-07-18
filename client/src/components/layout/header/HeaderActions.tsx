import { LogIn, User, Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { TooltipCard } from "@/components/ui/hover-card";
import { useState } from "react";

export const HeaderActions = () => {
  const user = null; // to be replaced
  const [isDark, setIsDark] = useState(false); // to be inside a context;

  return (
    <div className="flex place-items-center items-center gap-2">
      <TooltipCard
        trigger={
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-red-50 hover:text-red-700"
          >
            <Search size={20} />
          </button>
        }
        content={<p className="text-zinc-900 capitalize">Search</p>}
      />

      <TooltipCard
        trigger={
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-red-50 hover:text-red-700"
          >
            {user ? <User size={20} /> : <LogIn size={20} />}
          </button>
        }

        content={
          user ? (
            <p className="text-zinc-900 capitalize">Proile</p>
          ) : (
            <p className="text-zinc-900 capitalize">Log in</p>
          )
        }
      />

      <TooltipCard
        trigger={
          <button
            type="button"
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-red-50 hover:text-red-700"
          >
            <ShoppingCart />
          </button>
        }
        content={<p className="text-zinc-900 capitalize">Your Cart</p>}
        contentClassName="w-22"
      />

      <TooltipCard
        trigger={
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-red-50 hover:text-red-700"
            onClick={() => setIsDark((prevDark) => !prevDark)}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        }
        content={<p className="text-zinc-900 capitalize">Theme</p>}
      />
    </div>
  );
};
