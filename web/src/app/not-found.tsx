import { TriangleAlert } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { ScrollToTop } from '@/components/ui/animation';
import {
  Container,
  HashScrollHandler,
  MainHeading,
  PageWrapper,
} from '@/components/ui/common';
import Link from 'next/link';
import { Button } from '@/components/ui/shadcn/combobox';
import { Footer } from '@/components/layout/Footer';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

const NotFound = () => {
  return (
    <PageWrapper>
      <ScrollToTop />

      <Header />

      <HashScrollHandler />

      <Container>
        <section className='flex min-h-[60vh] flex-col items-center justify-center px-4 text-center'>
          <TriangleAlert
            className='mb-6 h-16 w-16 text-amber-500'
            strokeWidth={1.5}
          />

          <MainHeading title='Oops! Something went wrong.' className='mb-4' />

          <p className='mb-8 max-w-lg text-zinc-500 dark:text-zinc-400'>
            The page you&apos;re looking for doesn&apos;t exist or an unexpected
            error has occurred. You can return to the homepage or continue
            exploring our fragrance collection.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <Button>
              <Link href='/'>Back to Home</Link>
            </Button>

            <Button variant='outline'>
              <Link href='/collections'>Browse Collection</Link>
            </Button>
          </div>
        </section>
      </Container>

      <Footer />

      {/* Floating UI */}
      <BottomNavigation />
      <WhatsAppButton />
    </PageWrapper>
  );
};

export default NotFound;
