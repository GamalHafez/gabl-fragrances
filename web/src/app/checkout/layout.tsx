import { CheckoutHeader, CheckoutFooter } from '@/components/checkout/layout';

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='font-inter flex min-h-screen flex-col'>
      <CheckoutHeader />
      <main>{children}</main>
      <CheckoutFooter />
    </div>
  );
}
