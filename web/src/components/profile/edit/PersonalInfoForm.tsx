import { useForm } from "react-hook-form";
import {
  updatePersonalInfoSchema,
  type UpdatePersonalInfoRequest,
} from "@shared/validators/editProfileSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useAuth } from "@/context/auth/useAuth";
import { useUpdatePersonalInfo } from "@/hooks/user/updateUserProfile";
import type { ProfileDialog } from "./getEditProfileItems";
import { ErrorMessage } from "@/components/ui/common";
import { getApiErrorMessage } from "@/utils/errors";

type PersonalInfoFormProps = {
  setOpenDialog: React.Dispatch<React.SetStateAction<ProfileDialog | null>>;
};

export const PersonalInfoForm = ({ setOpenDialog }: PersonalInfoFormProps) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePersonalInfoRequest>({
    resolver: zodResolver(updatePersonalInfoSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
    },
  });

  const {
    mutate: updatePersonalInfo,
    isPending,
    isError,
    error,
  } = useUpdatePersonalInfo();

  const onSubmit = (data: UpdatePersonalInfoRequest) => {
    updatePersonalInfo(data, {
      onSuccess: () => {
        reset();
        setOpenDialog(null); // Close the dialog
      },
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
    >
      <FormField
        name="name"
        register={register}
        errors={errors}
        label="Updated Name"
        placeholder="Enter your name"
      />

      <FormField
        name="email"
        type="email"
        register={register}
        errors={errors}
        label="Updated Email"
        placeholder="Ex: omar@gmail.com"
      />

      {isError && error && <ErrorMessage message={getApiErrorMessage(error)} />}

      <FormSubmitButton
        disabled={isPending}
        className="gap-1"
        label={isPending ? "Updating..." : "Update Information"}
      />
    </form>
  );
};
