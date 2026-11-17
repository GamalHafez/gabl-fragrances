import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/shadcn/dialog";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type EditProfileDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export const EditProfileDialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
}: EditProfileDialogProps) => {
  const { isDark } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={clsx(
          "w-[calc(100%-4rem)] max-w-xl rounded-3xl border p-8 shadow-2xl backdrop-blur-xl",
          isDark
            ? "border-zinc-700/50 bg-zinc-950/95 shadow-black/40"
            : "border-white/60 bg-white/95 shadow-zinc-900/10",
        )}
      >
        {(title || description) && (
          <DialogHeader className="my-3 gap-0 text-center">
            {title && (
              <DialogTitle
                className={clsx(
                  "text-lg font-bold tracking-tight md:text-2xl",
                  isDark ? "text-zinc-100" : "text-zinc-900",
                )}
              >
                {title}
              </DialogTitle>
            )}

            {description && (
              <DialogDescription
                className={clsx(
                  "mx-auto max-w-md text-xs md:text-sm md:leading-6",
                  isDark ? "text-zinc-400" : "text-zinc-600",
                )}
              >
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}
      </DialogContent>
    </Dialog>
  );
};
