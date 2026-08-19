import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

type CartTriggerProps = {
  onOpenChange: (open: boolean) => void;
};

export const CartTrigger = ({ onOpenChange }: CartTriggerProps) => {
  const { isDark } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <button
              type="button"
              data-cart-trigger
              className={clsx(
                "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors",
                isDark
                  ? "text-brand-300 hover:bg-zinc-900/10 hover:text-red-200"
                  : "hover:bg-brand-100/10 hover:text-brand-600",
              )}
              onClick={() => onOpenChange(true)}
            >
              <ShoppingCart size={20} />
            </button>
          }
        />

        <TooltipContent>
          <p className="capitalize">Your Cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
