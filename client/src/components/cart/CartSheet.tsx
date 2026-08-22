import { Sheet, SheetContent, SheetFooter } from "@/components/ui/shadcn/sheet";
import { CartHeader, CartItem } from "@/components/cart";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { useCartData } from "@/hooks/cart/useCartData";
import { useCart } from "@/context/cart/useCart";
import { useEffect } from "react";
import { CartItemSkeleton } from "@/components/skeleton";
import { DataError } from "@/components/ui/errors/DataError";
import { EmptyCart } from "./EmptyCart";

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
    isPending,
    isError,
  } = useCartData();

  useEffect(() => {
    if (!open || items.length === 0) return;
    getCartData(items);
  }, [open, items, getCartData]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className={clsx(isDark ? "bg-zinc-900" : "bg-zinc-100")}>
        <CartHeader />

        {items.length === 0 ? (
          <EmptyCart onOpenChange={onOpenChange} />
        ) : isPending && !cartData ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CartItemSkeleton key={index} />
          ))
        ) : isError || !cartData ? (
          <DataError
            message="We couldn't load Cart Data right now. Please try again in a moment."
            onRetry={() => getCartData(items)}
            isHomeLink={false}
          />
        ) : (
          cartData.items.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        )}

        <SheetFooter>footer</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
