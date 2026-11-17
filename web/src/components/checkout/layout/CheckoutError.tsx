import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/utils";
import { TriangleAlert } from "lucide-react";

type CheckoutErrorProps = {
  message?: string;
  className?: string;
};

export const CheckoutError = ({ message, className }: CheckoutErrorProps) => {
  const { isDark } = useTheme();

  if (!message) {
    return null;
  }

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-lg border px-4 py-3",
        "text-sm leading-5",
        "animate-in fade-in-0 slide-in-from-top-1 duration-200",
        isDark
          ? "border-red-500/20 bg-red-500/10 text-red-300"
          : "border-red-200 bg-red-50 text-red-700",
        className,
      )}
    >
      <TriangleAlert
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0",
          isDark ? "text-red-400" : "text-red-600",
        )}
      />

      <p>{message}</p>
    </div>
  );
};
