import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  const { isDark } = useTheme();

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input group-has-focus-visible/field-label:not-data-checked:border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-focus-visible/field-label:data-checked:border-primary dark:data-checked:bg-primary relative flex size-4 shrink-0 items-center justify-center rounded-lg border transition-colors outline-none group-has-focus-visible/field-label:ring-0 group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3",
        "h-4 w-4 rounded-md border transition-all duration-200",
        "focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark
          ? [
              "border-zinc-600 bg-zinc-900",
              "data-[state=checked]:border-amber-500",
              "data-[state=checked]:bg-amber-500",
              "data-[state=checked]:text-zinc-950",
              "focus-visible:ring-amber-500/40",
              "focus-visible:ring-offset-zinc-950",
            ]
          : [
              "border-zinc-300 bg-white",
              "data-[state=checked]:border-zinc-900",
              "data-[state=checked]:bg-zinc-900",
              "data-[state=checked]:text-white",
              "focus-visible:ring-zinc-900/20",
              "focus-visible:ring-offset-white",
            ],
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
