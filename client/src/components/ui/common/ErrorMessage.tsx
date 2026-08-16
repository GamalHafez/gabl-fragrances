import { TriangleAlert } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { cn } from "@/utils";

type ErrorMessageProps = {
  message?: string;
  className?: string;
};

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  const { isDark } = useTheme();

  if (!message) {
    return null;
  }

  return (
    <p
      role="alert"
      className={cn(
        "flex items-center gap-1.5 text-sm font-medium",
        isDark ? "text-red-400" : "text-red-600",
        className,
      )}
    >
      <TriangleAlert className="h-3.5 w-3.5 shrink-0" />
      <span>{message}</span>
    </p>
  );
};
