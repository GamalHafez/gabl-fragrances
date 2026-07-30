import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer";
import { Menu } from "lucide-react";
import { Navigation } from "../index";
import { MobileMenuHeader } from "./index";
import { Separator } from "@/components/ui/common";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

export const MobileMenu = () => {
  const { isDark } = useTheme();

  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <button
            className={clsx(
              "hover:bg-brand-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              isDark ? "text-brand-300" : "text-zinc-800",
            )}
          />
        }
      >
        <Menu size={20} />
      </DrawerTrigger>

      <DrawerContent
        className={clsx(
          "font-inter mt-18 h-[30vh] w-58 pt-2",
          isDark ? "bg-zinc-900/80" : "bg-zinc-50",
        )}
      >
        <MobileMenuHeader />

        <Separator className="mt-4 bg-zinc-400" />

        <Navigation isMobile />
      </DrawerContent>
    </Drawer>
  );
};
