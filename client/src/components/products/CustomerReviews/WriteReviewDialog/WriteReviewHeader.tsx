import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/shadcn/dialog";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

export const WriteReviewHeader = () => {
  const { isDark } = useTheme();

  return (
    <DialogHeader className="my-3 text-center">
      <DialogTitle
        className={clsx(
          "text-lg font-bold tracking-tight md:text-2xl",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        How would you rate this product?
      </DialogTitle>

      <DialogDescription
        className={clsx(
          "mx-auto max-w-md text-sm md:leading-6",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        Share your experience with this fragrance and help others discover their
        next signature scent.
      </DialogDescription>
    </DialogHeader>
  );
};
