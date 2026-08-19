import {
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/shadcn/sheet";
import { useTheme } from "@/context/theme/useTheme";
import { X } from "lucide-react";
import clsx from "clsx";

export const CartHeader = () => {
  const { isDark } = useTheme();

  return (
    <SheetHeader
      className={clsx(
        "border-b px-6 py-5",
        isDark ? "border-zinc-800" : "border-zinc-200",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <SheetTitle
            className={clsx(
              "text-xl font-semibold",
              isDark ? "text-zinc-100" : "text-zinc-900",
            )}
          >
            Your Cart
          </SheetTitle>

          <SheetDescription
            className={clsx(isDark ? "text-zinc-400" : "text-zinc-500")}
          >
            Review the items in your cart.
          </SheetDescription>
        </div>

        <SheetClose
          className={clsx(
            "cursor-pointer rounded-full p-2 transition-colors",
            isDark
              ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
          )}
        >
          <X className="size-5" />
          <span className="sr-only">Close cart</span>
        </SheetClose>
      </div>
    </SheetHeader>
  );
};
