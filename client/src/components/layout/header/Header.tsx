import { Container } from "@/components/ui/common";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { DesktopHeader } from "./index";
import { MobileHeader } from "./mobile/index";
import { useEffect, useState } from "react";

export const Header = () => {
  const { isDark } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 w-full border-b py-4 backdrop-blur-md transition-all duration-300",
        isDark
          ? "border-zinc-600 bg-zinc-900/80"
          : "border-b-brand-500 border-zinc-300 bg-white/30",
        scrolled ? "shadow-md backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container>
        <DesktopHeader />

        <MobileHeader />
      </Container>
    </header>
  );
};
