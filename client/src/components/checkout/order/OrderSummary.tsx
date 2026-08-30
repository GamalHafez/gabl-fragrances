import { useCart } from "@/context/cart/useCart";
import { useCartData } from "@/hooks/cart/useCartData";
import { CheckoutHeading } from "../common";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import type { ShippingMethodType } from "@shared/types";
import { useShippingMethods } from "@/hooks/checkout";
import { OrderSummaryBody } from "./OrderSummaryBody";

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
        "flex flex-col gap-4 rounded-2xl p-6 shadow-2xl",
        isDark ? "bg-zinc-900/60 shadow-black" : "bg-white shadow-zinc-400",
      )}
    >
      <CheckoutHeading title="Order Summary" />

      <OrderSummaryBody
        items={items}
        cartData={cartData}
        isPending={isPending}
        isError={isError}
        refetch={refetch}
        shipping={selectedShipping ? Number(selectedShipping.price) : undefined}
      />
    </div>
  );
};
