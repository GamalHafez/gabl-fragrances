import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { PencilLine } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { cn } from "@/utils";

type WriteReviewTriggerProps = ComponentPropsWithoutRef<"button">;

export const WriteReviewTrigger = forwardRef<
  HTMLButtonElement,
  WriteReviewTriggerProps
>(({ className, children, ...props }, ref) => {
  const { isDark } = useTheme();

  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "mt-2 flex cursor-pointer items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 md:mt-6 md:px-14",
        isDark
          ? "border-amber-500/60 bg-zinc-900 text-amber-300 hover:border-amber-400 hover:bg-zinc-800 hover:text-amber-200 hover:shadow-lg hover:shadow-amber-500/20"
          : "border-amber-300 bg-white text-amber-900 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md hover:shadow-amber-200/40",
        className,
      )}
    >
      <PencilLine className="h-4 w-4" />
      {children}
    </button>
  );
});

WriteReviewTrigger.displayName = "WriteReviewTrigger";
