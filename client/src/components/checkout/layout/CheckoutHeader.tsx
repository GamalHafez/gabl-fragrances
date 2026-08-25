import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import gabalLogo from "@/assets/logo.png";
import { Container } from "@/components/ui/common";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils";
import { HeaderIconAction } from "@/components/layout/header";
import { Moon, Sun } from "lucide-react";

export const CheckoutHeader = () => {
  const { isDark, toggle } = useTheme();

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 w-full border-b py-4 backdrop-blur-md transition-all duration-300",
        isDark
          ? "border-zinc-600 bg-zinc-900/80"
          : "border-b-brand-500 border-zinc-300 bg-white/30",
      )}
    >
      <Container>
        <div className="hidden items-center justify-between md:flex">
          <Link
            to="/"
            onClick={() => scrollToTop()}
            className={clsx(
              "flex items-center gap-2 text-xl font-semibold capitalize",
              isDark ? "text-zinc-100" : "text-zinc-900",
            )}
          >
            <img
              src={gabalLogo}
              alt="Gabal Fragrances"
              className="h-9 w-auto object-contain"
            />

            <h1
              className={clsx(
                "text-base font-medium tracking-wide",
                isDark ? "text-white" : "text-black",
              )}
            >
              Gabal Fragrances
            </h1>
          </Link>

          <HeaderIconAction tooltip="Theme" onClick={toggle}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </HeaderIconAction>
        </div>
      </Container>
    </header>
  );
};
