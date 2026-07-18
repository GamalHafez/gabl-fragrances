import { NavLink } from "react-router-dom";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Contact", href: "/contact" },
];

const navLinkStyles = (isActive: boolean) =>
  clsx(
    "capitalize transition-colors duration-300 ease-in-out",
    isActive
      ? "font-medium text-red-700 hover:text-red-800"
      : "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full",
  );

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) => navLinkStyles(isActive)}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};
