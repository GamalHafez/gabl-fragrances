import { OrderTotals } from "@/components/checkout/order";
import {
  ConfirmationCard,
  ConfirmationHeader,
  OrderDetails,
  OrderItems,
} from "@/components/checkout/order-confirmation";
import { Container, PageWrapper } from "@/components/ui/common";
import { useOrder } from "@/hooks/checkout";
import { useParams } from "react-router-dom";

export const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { data: order, isPending, isError } = useOrder(orderId ?? "");

  // To be Replaced...
  if (isPending) return <p>Loading your order…</p>;
  if (isError || !order) return <p>We couldn't find that order.</p>;

  const { orderNumber, createdAt, status, items, subTotal, shipping } = order;
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <PageWrapper>
      <Container>
        <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 md:py-2">
          <ConfirmationHeader />
          <OrderDetails
            orderNumber={orderNumber}
            createdAt={createdAt}
            status={status}
          />
          <OrderItems items={items} />

          <ConfirmationCard title="Order Summary">
            <OrderTotals
              subtotal={subTotal ?? "0"}
              totalQuantity={totalQuantity ?? 0}
              shipping={shipping}
            />
          </ConfirmationCard>
        </main>
      </Container>
    </PageWrapper>
  );
};
