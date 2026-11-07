import { useForm } from "react-hook-form";
import type { ProfileDialog } from "./getEditProfileItems";
import {
  changePasswordSchema,
  type ChangePasswordRequest,
} from "@shared/validators/editProfileSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/auth/common";
import { FormSubmitButton } from "@/components/ui/forms";

type ChangePasswordFormProps = {
  setOpenDialog: React.Dispatch<React.SetStateAction<ProfileDialog | null>>;
};

export const ChangePasswordForm = ({
  setOpenDialog,
}: ChangePasswordFormProps) => {
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

  const onSubmit = (data: ChangePasswordRequest) => {
    console.log(data);

    reset();
    setOpenDialog(null); // Close the dialog
  };

  return (
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

      {/* {isError && error && <ErrorMessage message={getApiErrorMessage(error)} />} */}

      <FormSubmitButton
        disabled={false}
        //    isLoading={isPending}
        label="Update Password"
        //    label={isPending ? "Logging in..." : "Log in"}
      />
    </form>
  );
};
