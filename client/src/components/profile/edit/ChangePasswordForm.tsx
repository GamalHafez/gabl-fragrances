import { useForm } from "react-hook-form";
import {
  changePasswordSchema,
  type ChangePasswordRequest,
} from "@shared/validators/editProfileSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/auth/common";
import { FormSubmitButton } from "@/components/ui/forms";
import { useUpdatePassword } from "@/hooks/user/updateUserProfile";
import { getApiErrorMessage } from "@/utils/errors";
import { ErrorMessage } from "@/components/ui/common";
import { SuccessfullyChangedPassword } from "./SuccessfullyChangedPassword";

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordRequest>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const {
    mutate: updatePassword,
    isPending,
    isError,
    error,
    isSuccess,
  } = useUpdatePassword();

  const onSubmit = (data: ChangePasswordRequest) => {
    updatePassword(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return isSuccess ? (
    <SuccessfullyChangedPassword />
  ) : (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
    >
      <PasswordInput
        name="password"
        register={register}
        errors={errors}
        label="Old Password"
        placeholder="Ex: ********"
      />

      <PasswordInput
        name="newPassword"
        register={register}
        errors={errors}
        label="New Password"
        placeholder="Ex: ********"
      />

      <PasswordInput
        name="confirmPassword"
        register={register}
        errors={errors}
        label="Confirm Password"
        placeholder="Ex: ********"
      />

      {isError && error && <ErrorMessage message={getApiErrorMessage(error)} />}
      <FormSubmitButton
        disabled={isPending}
        isLoading={isPending}
        label={isPending ? "Updating" : "Update Password"}
      />
    </form>
  );
};
