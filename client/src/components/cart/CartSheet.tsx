import { Sheet, SheetContent } from "@/components/ui/shadcn/sheet";
import { CartHeader, CartItem, EmptyCart, CartFooter } from "@/components/cart";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { useCartData } from "@/hooks/cart/useCartData";
import { useCart } from "@/context/cart/useCart";
import { CartItemSkeleton } from "@/components/skeleton";
import { DataError } from "@/components/ui/errors/DataError";

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { isDark } = useTheme();
  const { items } = useCart();
  const { data: cartData, isPending, isError, refetch } = useCartData(items);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className={clsx(
          "flex flex-col",
          isDark ? "bg-zinc-900" : "bg-zinc-100",
        )}
      >
        <CartHeader />

        <div className="min-h-0 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyCart onOpenChange={onOpenChange} />
          ) : isPending && !cartData ? (
            Array.from({ length: 3 }).map((_, index) => (
              <CartItemSkeleton key={index} />
            ))
          ) : isError ? (
            <DataError
              message="We couldn't load your cart right now. Please try again in a moment."
              onRetry={() => refetch()}
              isHomeLink={false}
            />
          ) : !cartData ? (
            <DataError
              message="We couldn't load your cart right now. Please try again in a moment."
              onRetry={refetch}
              isHomeLink={false}
            />
          ) : (
            cartData.items.map((item) => (
              <CartItem key={item.productVariantId} cartItem={item} />
            ))
          )}
        </div>

        {items.length > 0 && (
          <CartFooter
            subtotal={cartData?.subtotal ?? "0"}
            totalQuantity={cartData?.totalQuantity ?? 0}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
