import { CartItem, EmptyCart } from "@/components/cart";
import { DataError } from "@/components/ui/errors/DataError";
import { CartItemSkeleton } from "@/components/skeleton";
import { OrderTotals } from "./OrderTotals";
import type {
  StoredCartItem,
  CartRepresentation,
  CartVariant,
} from "@shared/types";

type OrderSummaryBodyProps = {
  items: StoredCartItem[];
  cartData: CartRepresentation | undefined;
  isPending: boolean;
  isError: boolean;
  refetch: () => void;
  shipping?: number;
};

export const OrderSummaryBody = ({
  items,
  cartData,
  isPending,
  isError,
  refetch,
  shipping,
}: OrderSummaryBodyProps) => {
  return (
    <>
      <div className="mb-3 min-h-0 flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <EmptyCart />
        ) : isPending && !cartData ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CartItemSkeleton key={index} />
          ))
        ) : isError || !cartData ? (
          <DataError
            message="We couldn't load your cart right now. Please try again in a moment."
            onRetry={refetch}
            isHomeLink={false}
          />
        ) : (
          cartData.items.map((item: CartVariant) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        )}
      </div>

      {items.length > 0 && (
        <OrderTotals
          subtotal={cartData?.subtotal ?? "0"}
          totalQuantity={cartData?.totalQuantity ?? 0}
          shipping={shipping}
        />
      )}
    </>
  );
};
