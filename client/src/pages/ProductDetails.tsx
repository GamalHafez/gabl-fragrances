import { useParams } from "react-router-dom";
import { Container, PageWrapper } from "@/components/ui/common";

export const ProductDetails = () => {
  const { productSlug } = useParams();

  return (
    <PageWrapper>
      <Container>
        <h1 className="text-brand-900 text-2xl">{productSlug}</h1>
      </Container>
    </PageWrapper>
  );
};
