import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { HashScrollHandler } from '@/components/ui/common';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { ScrollToTop } from '@/components/ui/animation';
import { GuestOrderLinkGate } from '@/components/auth/common';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='font-inter flex min-h-screen flex-col'>
      <ScrollToTop />

      <Header />

      <HashScrollHandler />

      <main className='flex-1'>{children}</main>

      <Footer />

      <GuestOrderLinkGate />

      {/* Floating UI */}
      <BottomNavigation />
      <WhatsAppButton />
    </div>
  );
}
