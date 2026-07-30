import {
  CollectionsHero,
  CollectionsGrid,
} from "@/components/collections/index";
import { Container } from "@/components/ui/common";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const Collections = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "pb-10",
        isDark
          ? "bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950"
          : "bg-brand-100",
      )}
    >
      <Container>
        <CollectionsHero />

        {/**  WIll ADD FILTERING BUTTONS ... */}

        {/**  Products... */}
        <CollectionsGrid />
      </Container>
    </div>
  );
};
