import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/common";

export const CheckoutFooter = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={clsx(
        "fixed inset-x-0 bottom-0 z-50 w-full border-t py-4 backdrop-blur-md transition-all duration-300",
        isDark ? "border-white/10 bg-zinc-900/80" : "border-black/10 bg-white",
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-center gap-5 text-sm",
            isDark ? "text-white/50" : "text-black/50",
          )}
        >
          <Link
            to="/privacy-policy"
            className={clsx(
              "transition-colors hover:text-black",
              isDark ? "hover:text-white" : "hover:text-black",
            )}
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
};
