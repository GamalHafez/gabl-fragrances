import { Dialog, DialogContent } from "@/components/ui/shadcn/dialog";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type EditProfileDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export const EditProfileDialog = ({
  open,
  onOpenChange,
  children,
}: EditProfileDialogProps) => {
  const { isDark } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={clsx(
          "w-[calc(100%-2rem)] max-w-xl rounded-3xl border p-8 shadow-2xl backdrop-blur-xl transition-all duration-300",
          isDark
            ? "border-zinc-700/50 bg-zinc-950/95 shadow-black/40"
            : "border-white/60 bg-white/95 shadow-zinc-900/10",
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
