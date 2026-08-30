import { CartItem, EmptyCart } from "@/components/cart";
import { useCart } from "@/context/cart/useCart";
import { useCartData } from "@/hooks/cart/useCartData";
import { CheckoutHeading } from "../common";
import { useTheme } from "@/context/theme/useTheme";
import { DataError } from "@/components/ui/errors/DataError";
import { CartItemSkeleton } from "@/components/skeleton";
import { OrderTotals } from "./OrderTotals";
import clsx from "clsx";
import type { ShippingMethodType } from "@shared/types";
import { useShippingMethods } from "@/hooks/checkout";

type OrderSummaryProps = {
  shippingMethodId: string;
};

export const OrderSummary = ({ shippingMethodId }: OrderSummaryProps) => {
  const { isDark } = useTheme();
  const { items } = useCart();
  const { data: cartData, isPending, isError, refetch } = useCartData(items);
  const { data: shippingMethods } = useShippingMethods();

  const selectedShipping = shippingMethods?.find(
    (method: ShippingMethodType) => method.id === shippingMethodId,
  );

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 rounded-2xl border-l-2 p-6 shadow-lg",
        isDark
          ? "border-amber-500 bg-zinc-900/60 shadow-black/30"
          : "border-brand-900 bg-white shadow-zinc-300/40",
      )}
    >
      <CheckoutHeading title="Order Summary" />

      <div className="mb-3 min-h-0 flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <EmptyCart />
        ) : isPending && !cartData ? (
          Array.from({ length: 1 }).map((_, index) => (
            <CartItemSkeleton key={index} />
          ))
        ) : isError ? (
          <DataError
            message="We couldn't load your cart right now. Please try again in a moment."
            onRetry={refetch}
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
            <CartItem key={item.id} cartItem={item} />
          ))
        )}
      </div>

      {items.length > 0 && (
        <OrderTotals
          subtotal={cartData?.subtotal ?? "0"}
          totalQuantity={cartData?.totalQuantity ?? 0}
          shipping={
            selectedShipping ? Number(selectedShipping.price) : undefined
          }
        />
      )}
    </div>
  );
};
