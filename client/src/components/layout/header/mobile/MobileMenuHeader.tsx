import {
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import clsx from "clsx";
import { X } from "lucide-react";
import { useTheme } from "@/context/useTheme";

export const MobileMenuHeader = () => {
  const { isDark } = useTheme();

  return (
    <DrawerHeader className="mt-2 px-4 py-3">
      <DrawerTitle className="flex items-center justify-between">
        <h2
          className={clsx(
            "text-lg font-semibold capitalize",
            isDark ? "text-white" : "text-brand-700",
          )}
        >
          Gabal Fragrances
        </h2>
        <DrawerClose className="hover:bg-brand-50 hover:text-brand-600 rounded-full p-1 transition-colors">
          <X className={clsx("h-5 w-5", isDark ? "text-white" : "")} />
        </DrawerClose>
      </DrawerTitle>

      <DrawerDescription
        className={clsx(
          "dark:text-brand-300 font-inter text-sm",
          isDark ? "text-zinc-300" : "text-brand-600",
        )}
      >
        Find your perfect fit
      </DrawerDescription>
    </DrawerHeader>
  );
};
