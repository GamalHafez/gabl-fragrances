import { LogOut, Package, User, UserRound } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import { useTheme } from "@/context/theme/useTheme";
import { useAuth } from "@/context/auth/useAuth";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer";
import { useLogout } from "@/hooks/auth/useLogout";
import { HeaderIconAction } from "@/components/layout/header";
import { useState } from "react";
import { ErrorMessage } from "@/components/ui/common";
import { getApiErrorMessage } from "@/utils/errors";

type AccountMenuProps = {
  variant?: "icon" | "nav-item";
};

const ACCOUNT_ROUTES = ["/profile", "/orders"];

const navItemClass = (isDark: boolean, active: boolean) =>
  clsx(
    "flex min-w-18 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-300",
    active
      ? isDark
        ? "bg-brand-500/20 text-brand-100 shadow-brand-500/10 scale-105 shadow-lg"
        : "bg-brand-100 text-brand-700 scale-105 shadow-md"
      : isDark
        ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
        : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
  );

export const AccountMenu = ({ variant = "icon" }: AccountMenuProps) => {
  const { user, isAuthenticated } = useAuth();
  const { isDark } = useTheme();
  const { mutate: logout, isPending, error } = useLogout();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = ACCOUNT_ROUTES.some((route) => pathname.startsWith(route));

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => setOpen(false),
    });
  };

  if (!isAuthenticated) {
    if (variant === "nav-item") {
      return (
        <NavLink
          to="/login"
          className={({ isActive }) => navItemClass(isDark, isActive)}
        >
          <User size={20} />
          <span>Login</span>
        </NavLink>
      );
    }

    return (
      <HeaderIconAction tooltip="Log in" href="/login">
        <User size={20} />
      </HeaderIconAction>
    );
  }

  const linkClass = clsx(
    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
    isDark
      ? "text-zinc-200 hover:bg-zinc-800"
      : "text-zinc-700 hover:bg-zinc-100",
  );

  const trigger =
    variant === "nav-item" ? (
      <button type="button" className={navItemClass(isDark, isActive)}>
        <UserRound size={20} />
        <span>Account</span>
      </button>
    ) : (
      <HeaderIconAction tooltip="Account" href="">
        <User size={20} />
      </HeaderIconAction>
    );

  return (
    <Drawer swipeDirection="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger aria-label="Open account menu" render={trigger} />

      <DrawerContent
        className={clsx(
          "mt-20 h-5/12 border-t",
          isDark ? "border-zinc-800 bg-zinc-900" : "border-zinc-200 bg-zinc-50",
        )}
      >
        <DrawerHeader>
          <div
            className={clsx(
              "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full",
              isDark
                ? "bg-brand-500/20 text-brand-100"
                : "bg-brand-100 text-brand-700",
            )}
          >
            <UserRound size={22} />
          </div>

          <DrawerTitle
            className={clsx(isDark ? "text-zinc-100" : "text-zinc-900")}
          >
            {user?.name || "My Account"}
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-2 p-4">
          <DrawerClose>
            <NavLink to="/profile" className={linkClass}>
              <User size={18} />
              <span>My Profile</span>
            </NavLink>
          </DrawerClose>

          <DrawerClose>
            <NavLink to="/orders" className={linkClass}>
              <Package size={18} />
              <span>My Orders</span>
            </NavLink>
          </DrawerClose>

          <div
            className={clsx(
              "my-2 h-px",
              isDark ? "bg-zinc-800" : "bg-zinc-200",
            )}
          />

          <button
            type="button"
            onClick={handleLogout}
            disabled={isPending}
            className={clsx(
              "flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              isDark
                ? "text-red-400 hover:bg-red-500/10"
                : "text-red-600 hover:bg-red-50",
              isPending && "cursor-not-allowed opacity-50",
            )}
          >
            <LogOut size={18} />
            <span>{isPending ? "Logging out..." : "Log out"}</span>
          </button>
          {error && <ErrorMessage message={getApiErrorMessage(error)} />}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
