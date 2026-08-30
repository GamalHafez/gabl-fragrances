import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/shadcn/collapsible";
import { useCart } from "@/context/cart/useCart";
import { useCartData } from "@/hooks/cart/useCartData";
import { useShippingMethods } from "@/hooks/checkout";
import { useTheme } from "@/context/theme/useTheme";
import { OrderSummaryBody } from "./OrderSummaryBody";
import clsx from "clsx";
import type { ShippingMethodType } from "@shared/types";

type OrderSummaryMobileProps = {
  shippingMethodId: string;
};

export const OrderSummaryMobile = ({
  shippingMethodId,
}: OrderSummaryMobileProps) => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const { data: cartData, isPending, isError, refetch } = useCartData(items);
  const { data: shippingMethods } = useShippingMethods();

  const selectedShipping = shippingMethods?.find(
    (method: ShippingMethodType) => method.id === shippingMethodId,
  );
  const shipping = selectedShipping
    ? Number(selectedShipping.price)
    : undefined;

  const total =
    cartData && shipping !== undefined
      ? Number(cartData.subtotal) + shipping
      : undefined;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={clsx(
        "mb-6 rounded-xl px-2 md:mb-10 md:px-18",
        isDark ? "bg-zinc-900/60" : "bg-zinc-100",
      )}
    >
      <CollapsibleTrigger
        className={clsx(
          "flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold",
          isDark ? "text-white" : "text-black",
        )}
      >
        <span className="flex items-center gap-1">
          Order summary
          <ChevronDown
            size={16}
            className={clsx(
              "transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </span>

        <span>{total !== undefined ? `${total.toFixed(2)} EGP` : "—"}</span>
      </CollapsibleTrigger>

      <CollapsibleContent className="flex flex-col gap-4 px-4 pb-4">
        <OrderSummaryBody
          items={items}
          cartData={cartData}
          isPending={isPending}
          isError={isError}
          refetch={refetch}
          shipping={shipping}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};
