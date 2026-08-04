import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { WriteReviewTrigger } from "./WriteReviewTrigger";
import { WriteReviewHeader } from "./WriteReviewHeader";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";
import { ReviewProductCard } from "./ReviewProductCard";
import { ReviewForm } from "./ReviewForm";

export const WriteReviewDialog = () => {
  const { isDark } = useTheme();

  return (
    <Dialog>
      <DialogTrigger
        render={<WriteReviewTrigger>Write a Review</WriteReviewTrigger>}
      />

      <DialogContent
        className={clsx(
          "w-[calc(100%-2rem)] max-w-xl rounded-3xl border p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 md:max-w-xl lg:max-w-xl",
          isDark
            ? "border-zinc-700/50 bg-zinc-950/95 shadow-black/40"
            : "border-white/60 bg-white/95 shadow-zinc-900/10",
        )}
      >
        <WriteReviewHeader />

        <ReviewProductCard />

        <ReviewForm />
        <DialogFooter>
          <DialogClose render={<button>Close</button>} />{" "}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
