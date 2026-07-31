import { House, LogIn, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

export const BottomNavigation = () => {
  const user = null; // to be replaced
  const { isDark } = useTheme();

  const links = [
    { label: "Home", to: "/", icon: House },
    { label: "Shop", to: "/collections", icon: ShoppingBag },
    {
      label: user ? "Profile" : "Login",
      to: user ? "/profile" : "/login",
      icon: user ? User : LogIn,
    },
  ];

  return (
    <nav
      className={clsx(
        "fixed right-4 bottom-4 left-4 z-50 rounded-2xl border px-2 py-2 backdrop-blur-xl md:hidden",
        isDark
          ? "border-zinc-700 bg-zinc-900/90"
          : "border-zinc-200 bg-white/90 shadow-lg",
      )}
    >
      <ul className="flex items-center justify-around">
        {links.map(({ label, to, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                clsx(
                  "flex min-w-18 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-300",
                  isActive
                    ? isDark
                      ? "bg-brand-500/20 text-brand-100 shadow-brand-500/10 scale-105 shadow-lg"
                      : "bg-brand-100 text-brand-700 scale-105 shadow-md"
                    : isDark
                      ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                      : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
                )
              }
            >
              <Icon size={20} className="transition-transform duration-300" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
