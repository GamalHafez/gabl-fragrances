import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/animation";
import {
  Container,
  HashScrollHandler,
  MainHeading,
  PageWrapper,
} from "@/components/ui/common";
import { Button } from "@/components/ui/shadcn/button";
import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <PageWrapper>
      <ScrollToTop />

      <Header />

      <HashScrollHandler />

      <Container>
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <TriangleAlert
            className="mb-6 h-16 w-16 text-amber-500"
            strokeWidth={1.5}
          />

          <MainHeading title="Oops! Something went wrong." className="mb-4" />

          <p className="mb-8 max-w-lg text-zinc-500 dark:text-zinc-400">
            The page you're looking for doesn't exist or an unexpected error has
            occurred. You can return to the homepage or continue exploring our
            fragrance collection.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button>
              <Link to="/">Back to Home</Link>
            </Button>

            <Button variant="outline">
              <Link to="/collections">Browse Collection</Link>
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
