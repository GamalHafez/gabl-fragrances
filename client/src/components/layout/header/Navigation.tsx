import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Contact", href: "/contact" },
];

const navLinkStyles = (isActive: boolean, isDark: boolean) =>
  clsx(
    "capitalize transition-colors duration-300 ease-in-out",
    isActive
      ? clsx(
          "font-medium",
          isDark
            ? "text-red-300  hover:text-red-200"
            : "text-red-500 hover:text-red-800",
        )
      : clsx(
          "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full",
          isDark
            ? "text-zinc-300 after:bg-red-400 hover:after:bg-red-300"
            : "text-zinc-800 hover:text-zinc-950 after:bg-red-700 hover:after:bg-red-600",
        ),
  );

export const Navigation = () => {
  const { isDark } = useTheme();

  return (
    <nav className="flex items-center gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) => navLinkStyles(isActive, isDark)}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};
