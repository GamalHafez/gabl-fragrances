import {
  CollectionsHero,
  CollectionsGrid,
} from "@/components/collections/index";
import { Container } from "@/components/ui";

export const Collections = () => {
  return (
    <div className="bg-brand-100">
      <Container>
        <CollectionsHero />

        {/**  WIll ADD FILTERING BUTTONS ... */}

        {/**  Products... */}
        <CollectionsGrid />
      </Container>
    </div>
  );
};
