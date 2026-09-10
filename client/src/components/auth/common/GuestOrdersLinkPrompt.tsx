import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { GuestOrderSummary } from "@shared/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/shadcn/dialog";
import { ErrorMessage } from "@/components/ui/common";
import { getApiErrorMessage } from "@/utils/errors";

type GuestOrdersLinkPromptProps = {
  orders: GuestOrderSummary[];
  isLinking: boolean;
  error: Error | null;
  onConfirm: () => void;
  onDecline: () => void;
};

export const GuestOrdersLinkPrompt = ({
  orders,
  isLinking,
  error,
  onConfirm,
  onDecline,
}: GuestOrdersLinkPromptProps) => {
  const { isDark } = useTheme();

  return (
    <Dialog open onOpenChange={(open) => !open && onDecline()}>
      <DialogContent
        className={clsx(
          "rounded-3xl border shadow-2xl backdrop-blur-xl",
          isDark
            ? "border-neutral-800 bg-neutral-950/95 shadow-black/40"
            : "border-neutral-200 bg-white/95 shadow-neutral-900/10",
        )}
      >
        <DialogHeader>
          <DialogTitle
            className={clsx(
              "text-lg font-semibold",
              isDark ? "text-neutral-100" : "text-neutral-900",
            )}
          >
            Link your past orders?
          </DialogTitle>
        </DialogHeader>

        <p
          className={clsx(
            "text-sm leading-relaxed",
            isDark ? "text-neutral-400" : "text-neutral-600",
          )}
        >
          We found {orders.length} order{orders.length > 1 ? "s" : ""} placed
          with this email before you had an account. Link{" "}
          {orders.length > 1 ? "them" : "it"} so you can track{" "}
          {orders.length > 1 ? "them" : "it"} from your account.
        </p>

        <ul className="flex flex-col gap-2">
          {orders.map((order) => (
            <li
              key={order.id}
              className={clsx(
                "flex items-center justify-between rounded-xl border px-4 py-3 text-sm",
                isDark
                  ? "border-neutral-800 bg-neutral-900/70 text-neutral-300"
                  : "border-neutral-200 bg-neutral-50 text-neutral-700",
              )}
            >
              <span className="font-medium">Order #{order.orderNumber}</span>

              <span
                className={clsx(
                  "font-medium",
                  isDark ? "text-brand-100" : "text-brand-900",
                )}
              >
                {order.total} EGP
              </span>
            </li>
          ))}
        </ul>

        <ErrorMessage message={error ? getApiErrorMessage(error) : undefined} />

        <DialogFooter className="mt-2 gap-2 bg-transparent sm:gap-2">
          <button
            type="button"
            onClick={onDecline}
            disabled={isLinking}
            className={clsx(
              "cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium",
              "transition-colors focus:outline-none focus-visible:ring-2",
              isDark
                ? "focus-visible:ring-brand-400 text-neutral-300 hover:bg-neutral-900"
                : "focus-visible:ring-brand-600 text-neutral-600 hover:bg-neutral-100",
              isLinking && "cursor-not-allowed opacity-50",
            )}
          >
            Not now
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isLinking}
            className={clsx(
              "cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium",
              "transition-all focus:outline-none focus-visible:ring-2",
              isDark
                ? "bg-brand-900 hover:bg-brand-800 focus-visible:ring-brand-400 text-neutral-100"
                : "bg-brand-900 hover:bg-brand-800 focus-visible:ring-brand-600 text-white",
              isLinking && "cursor-not-allowed opacity-60",
            )}
          >
            {isLinking ? "Linking…" : "Link my orders"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
