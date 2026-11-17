import { Container, PageWrapper } from "../ui/common";
import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/shadcn/button";

type SamplesPageErrorProps = {
  refetch: () => void;
};

export const SamplesPageError = ({ refetch }: SamplesPageErrorProps) => {
  return (
    <PageWrapper>
      <Container>
        <section className="flex flex-col items-center justify-center gap-6 py-20 md:py-40">
          <TriangleAlert
            className="h-16 w-16 text-amber-500"
            strokeWidth={1.5}
          />

          <p className="max-w-lg text-zinc-500 dark:text-zinc-400">
            We couldn't load the samples right now.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button type="button" onClick={() => refetch()}>
              Try again
            </Button>
            <Button variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </section>
      </Container>
    </PageWrapper>
  );
};
