import { Controller, useForm } from "react-hook-form";
import { ReviewFormButton } from "./ReviewFormButton";
import { RatingField } from "./RatingField";
import {
  reviewSchema,
  type ReviewFormData,
} from "@shared/validators/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/ui/forms";

export const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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
  };

  return (
    <form
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

      <ReviewFormButton />
    </form>
  );
};
