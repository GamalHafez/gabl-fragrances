import { useForm } from "react-hook-form";
import {
  updatePersonalInfoSchema,
  type UpdatePersonalInfoRequest,
} from "@shared/validators/editProfileSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useAuth } from "@/context/auth/useAuth";

export const PersonalInfoForm = () => {
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

  const onSubmit = (data: UpdatePersonalInfoRequest) => {
    console.log(data);
    reset();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 flex flex-col gap-4"
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

      <FormSubmitButton
        disabled={false}
        label="Update Information"
        className="gap-1"
        //     label={false ? "Sending..." : "Submit Review"}
      />
    </form>
  );
};
