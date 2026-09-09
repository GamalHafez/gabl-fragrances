import { LoginForm } from "@/components/auth/login";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { Eyebrow } from "@/components/ui/home";

export const Login = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col items-start py-5 px-2">
          <Eyebrow eyebrow="Welcome Back" className="mb-2 inline-block" />{" "}
          <MainHeading title="Sign In to Your" highlighted="Account" />{" "}
        </div>

        <LoginForm />
      </Container>
    </PageWrapper>
  );
};
