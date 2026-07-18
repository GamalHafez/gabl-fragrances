import { Link } from "react-router-dom";
import { Container } from "../../ui";
import { Navigation } from "./Navigation";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300 bg-white/30 py-4 backdrop-blur-md dark:bg-zinc-800">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold text-zinc-900 capitalize"
          >
            Gabal fragrances
          </Link>

          <Navigation />

          <HeaderActions />
        </div>
      </Container>
    </header>
  );
};
