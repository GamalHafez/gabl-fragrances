import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { Loader2, SendHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FormSubmitButtonProps = {
  label: string;
  disabled: boolean;
  isLoading?: boolean;
  icon?: LucideIcon;
};

export const FormSubmitButton = ({
  label,
  disabled,
  isLoading = false,
  icon: Icon = SendHorizontal,
}: FormSubmitButtonProps) => {
  const { isDark } = useTheme();

  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={clsx(
        "mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        "disabled:cursor-not-allowed disabled:opacity-60",

        isDark
          ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          : "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800",
      )}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Icon className="h-4 w-4" />
      )}
      {isLoading ? "Processing..." : label}
    </button>
  );
};
