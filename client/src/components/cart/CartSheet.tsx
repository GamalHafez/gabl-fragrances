import { Sheet, SheetContent, SheetFooter } from "@/components/ui/shadcn/sheet";
import { CartHeader, CartItem } from "@/components/cart";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { useCartData } from "@/hooks/cart/useCartData";
import type { CartVariant } from "@shared/types";
import { useCart } from "@/context/cart/useCart";
import { useEffect } from "react";

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { isDark } = useTheme();
  const { items } = useCart();
  const {
    mutate: getCartData,
    data: cartData,
    //  isPending,
    isError,
    //  refetch,
  } = useCartData();

  useEffect(() => {
    if (!open || items.length === 0) return;
    getCartData(items);
  }, [open, items, getCartData]);

  //  if (isPending) {
  //     return <p>Loading cart...</p>;
  //   }

  if (isError) {
    return <p>Failed to load cart.</p>;
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className={clsx(isDark ? "bg-zinc-900" : "bg-zinc-100")}>
        <CartHeader />

        {cartData?.items.map((item: CartVariant) => (
          <CartItem key={item?.id} cartItem={item} />
        ))}

        <SheetFooter>footer</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
