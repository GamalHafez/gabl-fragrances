import { Link } from "react-router-dom";
import { Container } from "../../ui";
import { Navigation } from "./Navigation";
import { HeaderActions } from "./HeaderActions";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b py-4 backdrop-blur-md",
        isDark
          ? "border-zinc-600 bg-zinc-900/80"
          : "border-zinc-300 bg-white/30",
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={clsx(
              "flex items-center gap-2 text-xl font-semibold capitalize",
              isDark ? "text-zinc-100" : "text-zinc-900",
            )}
          >
            Gabal fragrances
          </Link>

          <Navigation />

          <HeaderActions />
        </div>
      </Container>
    </header>
  );
};
