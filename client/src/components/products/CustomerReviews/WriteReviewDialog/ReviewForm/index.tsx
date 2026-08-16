import { Controller, useForm } from "react-hook-form";
import { RatingField } from "./RatingField";
import {
  reviewSchema,
  type ReviewFormData,
} from "@shared/validators/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormSubmitButton } from "@/components/ui/forms";
import { useCreateReview } from "@/hooks/reviews";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "@/components/ui/common";
import { ReviewSuccess } from "./ReviewSuccess";

export const ReviewForm = () => {
  const { productSlug } = useParams();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      review: "",
      rating: 0,
    },
  });

  const {
    mutate: createReview,
    isPending,
    isError,
    isSuccess,
  } = useCreateReview(productSlug!);

  const onSubmit = (data: ReviewFormData) => {
    createReview(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  if (isSuccess) {
    return <ReviewSuccess />;
  }

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
        name="review"
        register={register}
        errors={errors}
        label="Your Review"
        placeholder="Tell others what you liked about this fragrance..."
      />

      {isError && (
        <ErrorMessage message="We couldn't submit your review. Please try again." />
      )}

      <FormSubmitButton
        disabled={isPending}
        label={isPending ? "Sending..." : "Submit Review"}
      />
    </form>
  );
};
