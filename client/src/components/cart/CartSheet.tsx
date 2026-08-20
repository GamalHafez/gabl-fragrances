import { Sheet, SheetContent, SheetFooter } from "@/components/ui/shadcn/sheet";
import { CartHeader, CartItem } from "@/components/cart";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { useCart } from "@/context/cart/useCart";

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { isDark } = useTheme();
  // const {
  //   items,
  //   // totalQuantity
  // } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className={clsx(isDark ? "bg-zinc-900" : "bg-zinc-100")}>
        <CartHeader />

        {/* {items.map((item) => {
          const itemVariant = 

          return (          <CartItem key={item.} />
)
        })} */}

        <SheetFooter>footer</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
