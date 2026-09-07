import { CreditCard, Banknote } from "lucide-react";
import { InfoCard } from "./InfoCard";
import type { OrderType } from "@shared/types";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type PaymentMethodSectionProps = {
  payments: OrderType["payments"];
};

type PaymentStatusKey = "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";

const METHOD_LABELS: Record<"CARD" | "CASH_ON_DELIVERY", string> = {
  CARD: "Credit or Debit Card",
  CASH_ON_DELIVERY: "Cash on Delivery",
};

const STATUS_LABELS: Record<PaymentStatusKey, string> = {
  PENDING: "Pending",
  SUCCESS: "Paid",
  FAILED: "Failed",
  REFUNDED: "Refunded",
};

const STATUS_COLORS: Record<PaymentStatusKey, string> = {
  PENDING: "bg-amber-100 text-amber-800",
  SUCCESS: "bg-emerald-100 text-emerald-800",
  FAILED: "bg-red-100 text-red-800",
  REFUNDED: "bg-neutral-200 text-neutral-700",
};

const STATUS_DARK_COLORS: Record<PaymentStatusKey, string> = {
  PENDING: "bg-amber-500/15 text-amber-400",
  SUCCESS: "bg-emerald-500/15 text-emerald-400",
  FAILED: "bg-red-500/15 text-red-400",
  REFUNDED: "bg-neutral-500/15 text-neutral-400",
};

export const PaymentMethodSection = ({
  payments,
}: PaymentMethodSectionProps) => {
  const { isDark } = useTheme();
  const payment = payments.at(-1);

  return (
    <InfoCard
      icon={payment?.method === "CARD" ? CreditCard : Banknote}
      label="Payment Method"
    >
      {payment ? (
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between">
            <p
              className={clsx(
                "font-medium",
                isDark ? "text-zinc-100" : "text-zinc-900",
              )}
            >
              {METHOD_LABELS[payment.method]}
            </p>

            <span
              className={clsx(
                "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                isDark
                  ? STATUS_DARK_COLORS[payment.status]
                  : STATUS_COLORS[payment.status],
              )}
            >
              {STATUS_LABELS[payment.status]}
            </span>
          </div>

          <p
            className={clsx(
              "text-sm",
              isDark ? "text-zinc-400" : "text-zinc-500",
            )}
          >
            {payment.amount} EGP
          </p>
        </div>
      ) : (
        <p>No payment recorded.</p>
      )}
    </InfoCard>
  );
};
