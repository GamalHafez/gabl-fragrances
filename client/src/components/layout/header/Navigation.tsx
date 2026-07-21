import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/collections" },
  { name: "Contact", href: "/contact" },
];

const navLinkStyles = (isActive: boolean, isDark: boolean) =>
  clsx(
    "capitalize transition-colors duration-300 ease-in-out",
    isActive
      ? clsx(
          "font-medium",
          isDark
            ? "text-brand-300  hover:text-red-400"
            : "text-brand-600 hover:text-brand-700",
        )
      : clsx(
          "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full",
          isDark
            ? "text-zinc-300 after:bg-brand-600 hover:after:bg-brand-400"
            : "text-zinc-800 hover:text-zinc-950 after:bg-red-700 hover:after:bg-red-600",
        ),
  );

export const Navigation = ({ isMobile }: { isMobile?: boolean }) => {
  const { isDark } = useTheme();

  return (
    <nav
      className={clsx(
        "flex",
        isMobile ? "flex-col gap-2 px-6 pt-5" : "flex-row items-center gap-8",
      )}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) => navLinkStyles(isActive, isDark)}
        >
          {isMobile}
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};
