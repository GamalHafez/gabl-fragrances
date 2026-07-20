import { Container } from "../../ui";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { DesktopHeader } from "./index";
import { MobileHeader } from "./mobile/index";

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
          <DesktopHeader />

          <MobileHeader />
      </Container>
    </header>
  );
};
