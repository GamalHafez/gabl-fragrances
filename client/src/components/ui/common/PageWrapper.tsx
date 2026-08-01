import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "pt-26 pb-10",
        isDark
          ? "bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950"
          : "bg-brand-100",
      )}
    >
      {children}
    </div>
  );
};
