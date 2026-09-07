import { RegisterForm } from "@/components/auth/register";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { Eyebrow } from "@/components/ui/home";

export const Register = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col items-start p-5">
          <Eyebrow eyebrow="Join Gabal" className="mb-2 inline-block" />
          <MainHeading title="Create Your" highlighted="Account" />{" "}
        </div>

        <RegisterForm />
      </Container>
    </PageWrapper>
  );
};
