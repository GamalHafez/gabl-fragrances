import { Container, PageWrapper } from "@/components/ui/common";
import { useOrder } from "@/hooks/checkout";
import { useParams } from "react-router-dom";

export const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { data: order, isPending, isError } = useOrder(orderId ?? "");

  if (isPending) return <p>Loading your order…</p>;
  if (isError || !order) return <p>We couldn't find that order.</p>;

  return (
    <PageWrapper>
      <Container>
        <div className="py-50">
          <h1>Thanks, {order.customerName}!</h1>
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
        </div>
      </Container>
    </PageWrapper>
  );
};
