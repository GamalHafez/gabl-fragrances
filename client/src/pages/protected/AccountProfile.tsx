import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { Eyebrow } from "@/components/ui/home";

export const AccountProfile = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col items-start p-5">
          <Eyebrow eyebrow="My Account" className="mb-2 inline-block" />
          <MainHeading title="Personalize" highlighted="Your Experience" />
        </div>
      </Container>
    </PageWrapper>
  );
};
