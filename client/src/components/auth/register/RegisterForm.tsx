import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  signupSchema,
  type RegisterBody,
} from "@shared/schemas/auth.validators.js";
import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useNavigate } from "react-router-dom";
import { useRegister } from "@/hooks/auth/useRegister";
import { AuthRedirect, PasswordInput } from "../common";
import { ErrorMessage } from "@/components/ui/common";
import { getApiErrorMessage } from "@/utils/errors";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { mutate: register, isPending, error } = useRegister();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBody>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterBody) => {
    register(data, {
      onSuccess: () => navigate("/"), // adjust: home, /account, wherever a fresh signup should land
    });
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="my-2 grid grid-cols-1 gap-x-10 gap-y-4 px-8 md:grid-cols-2"
      >
        <FormField
          name="name"
          register={registerField}
          errors={errors}
          label="Your Name"
          placeholder="Ex: Omar Gamal"
        />

        <FormField
          name="email"
          type="email"
          register={registerField}
          errors={errors}
          label="Your Email"
          placeholder="Ex: omar@gmail.com"
        />

        <PasswordInput
          name="password"
          register={registerField}
          errors={errors}
          label="Your Password"
          placeholder="Ex: ********"
        />

        <PasswordInput
          name="confirmPassword"
          register={registerField}
          errors={errors}
          label="Confirm Password"
          placeholder="Ex: ********"
        />

        <div className="col-span-full flex flex-col items-center gap-2 pt-2">
          <FormSubmitButton
            disabled={isPending}
            isLoading={isPending}
            label={isPending ? "Registering..." : "Register"}
            className="w-full md:mt-6 md:w-3/5 lg:w-1/4"
          />

          {error && <ErrorMessage message={getApiErrorMessage(error)} />}

          <AuthRedirect
            message="Already have an account?"
            actionLabel="Log in"
            actionHref="/login"
          />
        </div>
      </form>
    </>
  );
};
