import { OrderConfirmation } from '@/components/order-confirmation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation',
};

type OrderConfirmationPageProps = {
  params: Promise<{ orderId: string }>;
};

export default async function OrderConfirmationPage({
  params,
}: OrderConfirmationPageProps) {
  const { orderId } = await params;

  return <OrderConfirmation orderId={orderId} />;
}
