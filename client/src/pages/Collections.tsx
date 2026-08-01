import {
  CollectionsHero,
  CollectionsGrid,
} from "@/components/collections/index";
import Reveal from "@/components/ui/animation/Reveal";
import { Container, PageWrapper } from "@/components/ui/common";

export const Collections = () => {
  return (
    <PageWrapper>
      <Container>
        <CollectionsHero />

        {/**  WIll ADD FILTERING BUTTONS ... */}

        {/**  Products... */}
        <Reveal>
          <CollectionsGrid />
        </Reveal>
      </Container>
    </PageWrapper>
  );
};
