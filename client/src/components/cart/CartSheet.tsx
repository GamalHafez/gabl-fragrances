import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/shadcn/sheet";

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>

        <SheetFooter>footer</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
