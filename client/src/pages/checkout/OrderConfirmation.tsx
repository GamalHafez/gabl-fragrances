import { ConfirmationHeader } from "@/components/checkout/order-confirmation";
import { Container, PageWrapper } from "@/components/ui/common";
import { useOrder } from "@/hooks/checkout";
import { useParams } from "react-router-dom";

export const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { data: order, isPending, isError } = useOrder(orderId ?? "");

  // To be Replaced...
  if (isPending) return <p>Loading your order…</p>;
  if (isError || !order) return <p>We couldn't find that order.</p>;

  const { customerName } = order;

  return (
    <PageWrapper>
      <Container>
        <main className="flex flex-col items-center  gap-4 text-center">
          <ConfirmationHeader customerName={customerName} />
          <p>
            Order #{order.orderNumber} — {order.status}
          </p>
          <p>
            Shipping to {order.shippingAddress}, {order.shippingCity}
          </p>
          <p>Total: {String(order.total)} EGP</p>
          <ul>
            {order?.items.map((item, i) => (
              <li key={i}>
                {item.quantity}× {item.productName} ({item.sizeML}ml)
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </PageWrapper>
  );
};
