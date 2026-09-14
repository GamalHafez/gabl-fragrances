import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const AuthLoadingScreen = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center gap-3",
        isDark ? "bg-zinc-950" : "bg-white",
      )}
    >
      <div
        className={clsx(
          "h-8 w-8 animate-spin rounded-full border-2 border-t-transparent",
          isDark ? "border-emerald-400" : "border-emerald-600",
        )}
      />
      <p
        className={clsx("text-sm", isDark ? "text-zinc-500" : "text-zinc-400")}
      >
        Loading…
      </p>
    </div>
  );
};
