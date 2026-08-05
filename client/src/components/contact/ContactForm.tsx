import { useForm } from "react-hook-form";
import {
  contactSchema,
  type ContactFormData,
} from "@shared/validators/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormSubmitButton } from "@/components/ui/forms";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex w-full flex-col justify-around gap-3 px-6 md:mt-2 md:grid md:grid-cols-3 md:gap-y-10 md:px-2"
    >
      <FormField
        name="name"
        register={register}
        errors={errors}
        label="Your Name"
        placeholder="Enter your name"
      />

      <FormField
        name="email"
        type="email"
        register={register}
        errors={errors}
        label="Your Email"
        placeholder="Enter your email"
      />

      <FormField
        name="phone"
        type="tel"
        register={register}
        errors={errors}
        label="Your Phone"
        placeholder="Enter your phone number"
      />

      <div className="md:col-span-3">
        <FormField
          isTextarea
          rows={5}
          name="message"
          register={register}
          errors={errors}
          label="Your Message"
          placeholder="Enter your message"
        />
      </div>

      <FormSubmitButton
        disabled={isSubmitting}
        label={isSubmitting ? "Sending..." : "Submit Your Message"}
      />
    </form>
  );
};
