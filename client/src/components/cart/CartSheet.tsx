import { Sheet, SheetContent, SheetFooter } from "@/components/ui/shadcn/sheet";
import { CartHeader } from "./CartHeader";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { isDark } = useTheme();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className={clsx(isDark ? "bg-zinc-900" : "bg-zinc-100")}>
        <CartHeader />

        <SheetFooter>footer</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
