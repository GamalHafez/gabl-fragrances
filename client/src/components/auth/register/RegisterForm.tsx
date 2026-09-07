import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  signupSchema,
  type RegisterBody,
} from "@shared/schemas/auth.validators.js";
import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useNavigate } from "react-router-dom";
import { useRegister } from "@/hooks/auth/useRegister";
import { ErrorMessage } from "@/components/ui/common";

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
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 grid grid-cols-1 gap-x-10 gap-y-4 px-8 md:grid-cols-2"
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

      <FormField
        name="password"
        type="password"
        register={registerField}
        errors={errors}
        label="Your Password"
        placeholder="Ex: ********"
      />

      <FormField
        name="confirmPassword"
        type="password"
        register={registerField}
        errors={errors}
        label="Confirm Password"
        placeholder="Ex: ********"
      />

      {error && <ErrorMessage message={error.message} />}

      <FormSubmitButton
        disabled={isPending}
        isLoading={isPending}
        label={isPending ? "Registering..." : "Register"}
        className="col-span-full mx-auto w-3/6 self-center md:mt-10 mb-10"
      />
    </form>
  );
};
