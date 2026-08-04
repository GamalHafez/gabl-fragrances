import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { SendHorizontal } from "lucide-react";

export const ReviewFormButton = () => {
  const { isDark } = useTheme();

  return (
    <button
      type="submit"
      className={clsx(
        "mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        isDark
          ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          : "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800",
      )}
    >
      <SendHorizontal className="h-4 w-4" />
      Submit Review
    </button>
  );
};
