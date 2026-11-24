import { AboutUsHero, BrandStory, TrustSection } from '@/components/about-us';
import { ClosingCTA } from '@/components/about-us/ClosingCTA';
import { Container, PageWrapper } from '@/components/ui/common';

export default function AboutUsPage() {
  return (
    <PageWrapper>
      <Container>
        <main className='px-2 pt-6 pb-16 md:px-0 md:pt-10'>
          <AboutUsHero />
          <BrandStory />
          <TrustSection />
          <ClosingCTA />
        </main>
      </Container>
    </PageWrapper>
  );
}
