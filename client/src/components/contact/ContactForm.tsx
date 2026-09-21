import { useForm } from "react-hook-form";
import {
  contactSchema,
  type ContactInput,
} from "@shared/validators/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useSendMessage } from "@/hooks/contact/useSendMessage";
import { useState } from "react";
import { ErrorMessage } from "../ui/common";
import { getApiErrorMessage } from "@/utils/errors";

export const ContactForm = () => {
  const { mutate: sendMessage, isPending, error } = useSendMessage();
  const [justSubmitted, setJustSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    setJustSubmitted(false);

    sendMessage(data, {
      onSuccess: () => {
        reset();
        setJustSubmitted(true);
      },
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => setJustSubmitted(false)}
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

      <div className="mb-4 md:col-span-3 md:mb-0">
        <FormField
          isTextarea
          rows={5}
          name="message"
          register={register}
          errors={errors}
          label="Your Message"
          placeholder="Enter your message..."
        />
      </div>

      {error && (
        <div className="md:col-span-3">
          <ErrorMessage message={getApiErrorMessage(error)} />
        </div>
      )}

      {justSubmitted && (
        <p className="text-sm text-emerald-600 md:col-span-3 dark:text-emerald-400">
          Thanks — your message has been sent. We'll get back to you soon.
        </p>
      )}

      <FormSubmitButton
        disabled={isPending}
        isLoading={isPending}
        label={isPending ? "Sending..." : "Submit Your Message"}
      />
    </form>
  );
};
