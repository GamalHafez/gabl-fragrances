import { Controller, useForm } from "react-hook-form";
import { RatingField } from "./RatingField";
import {
  reviewSchema,
  type ReviewFormData,
} from "@shared/validators/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormSubmitButton } from "@/components/ui/forms";

export const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      comment: "",
      rating: 0,
    },
  });
  const onSubmit = (data: ReviewFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 flex flex-col gap-4"
    >
      <Controller
        control={control}
        name="rating"
        render={({ field }) => (
          <RatingField
            value={field.value}
            onChange={field.onChange}
            error={errors.rating ? (errors.rating.message ?? "") : ""}
          />
        )}
      />

      <FormField
        name="name"
        register={register}
        errors={errors}
        label="Your Name"
        placeholder="Enter your name"
      />

      <FormField
        isTextarea
        rows={5}
        name="comment"
        register={register}
        errors={errors}
        label="Your Review"
        placeholder="Tell others what you liked about this fragrance..."
      />

      <FormSubmitButton
        disabled={isSubmitting}
        label={isSubmitting ? "Sending..." : "Submit Review"}
      />
    </form>
  );
};
