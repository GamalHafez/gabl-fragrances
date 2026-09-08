import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useLogin } from "@/hooks/auth/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginBody } from "@shared/schemas/auth.validators";
import { useForm } from "react-hook-form";
import { AuthRedirect, PasswordInput } from "../common";
import { ErrorMessage } from "@/components/ui/common";
import { getApiErrorMessage } from "@/utils/errors";

export const LoginForm = () => {
  const { mutate: login, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginBody) => {
    login(data);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 mb-10 grid grid-cols-1 gap-x-10 gap-y-4 px-8 md:grid-cols-2"
    >
      <FormField
        name="email"
        type="email"
        register={register}
        errors={errors}
        label="Your Email"
        placeholder="Ex: omar@gmail.com"
      />

      <PasswordInput
        name="password"
        register={register}
        errors={errors}
        label="Your Password"
        placeholder="Ex: ********"
      />

      <div className="col-span-full flex flex-col items-center gap-2 pt-2">
        <FormSubmitButton
          disabled={isPending}
          isLoading={isPending}
          label={isPending ? "Logging in..." : "Log in"}
          className="w-full md:mt-6 md:w-3/5 lg:w-1/4"
        />

        {error && <ErrorMessage message={getApiErrorMessage(error)} />}

        <AuthRedirect
          message="Don’t have an account?"
          actionLabel="Sign up"
          actionHref="/signup"
        />
      </div>
    </form>
  );
};
