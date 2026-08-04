import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { FormLabel } from "@/components/ui/common";
import { ReviewFormButton } from "./ReviewFormButton";
import { RatingField } from "./RatingField";

type ReviewFormData = {
  name: string;
  comment: string;
  rating: number;
};

export const ReviewForm = () => {
  const { register, handleSubmit, control } = useForm<ReviewFormData>({
    defaultValues: {
      name: "",
      comment: "",
      rating: 0,
    },
  });
  const { isDark } = useTheme();

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
          <RatingField value={field.value} onChange={field.onChange} />
        )}
      />
      <div className="flex flex-col gap-1">
        <FormLabel id="name">Your Name</FormLabel>
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Enter your name"
          className={clsx(
            "rounded-2xl border px-4 py-3 text-sm transition-all duration-300 outline-none",
            "focus:ring-4",
            isDark
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
              : "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-amber-200/50",
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel id="comment">Your Review</FormLabel>
        <textarea
          {...register("comment")}
          id="comment"
          rows={5}
          placeholder="Tell others what you liked about this fragrance..."
          className={clsx(
            "resize-none rounded-2xl border px-4 py-3 text-sm transition-all duration-300 outline-none",
            "focus:ring-4",
            isDark
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
              : "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-amber-200/50",
          )}
        />
      </div>

      <ReviewFormButton />
    </form>
  );
};
