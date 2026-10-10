import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  signupSchema,
  type RegisterBody,
} from "@shared/schemas/auth.validators.js";
import { FormSubmitButton } from "@/components/ui/forms";
import { useNavigate } from "react-router-dom";
import { useRegister } from "@/hooks/auth/useRegister";
import { AuthRedirect } from "../common";
import { ErrorMessage } from "@/components/ui/common";
import { getApiErrorMessage } from "@/utils/errors";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { AddressInfoSection } from "./AddressInfoSection";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { mutate: register, isPending, error } = useRegister();

  const {
    register: registerField,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBody>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      city: "",
      governorate: "",
      country: "Egypt",
      postalCode: "",
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
      className="mx-auto mb-8 w-full max-w-5xl px-4"
    >
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        {/* Personal */}
        <PersonalInfoSection registerField={registerField} errors={errors} />

        {/* Address */}
        <div className="md:-translate-x-4">
          <AddressInfoSection
            control={control}
            registerField={registerField}
            errors={errors}
          />
        </div>
      </div>

      <div className="col-span-full flex flex-col items-center gap-2 pt-2">
        <FormSubmitButton
          disabled={isPending}
          isLoading={isPending}
          label={isPending ? "Registering..." : "Register"}
          className="w-3/5 md:mt-6"
        />

        {error && <ErrorMessage message={getApiErrorMessage(error)} />}

        <AuthRedirect
          message="Already have an account?"
          actionLabel="Log in"
          actionHref="/login"
        />
      </div>
    </form>
  );
};
