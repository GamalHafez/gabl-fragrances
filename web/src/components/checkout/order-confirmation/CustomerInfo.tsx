import { User } from "lucide-react";
import { InfoCard } from "./InfoCard";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type CustomerInfoProps = {
  customerName: string;
  customerContact: string;
  customerPhone: string;
};

const normalizePhone = (value: string) => value.replace(/\D/g, "");

export const CustomerInfo = ({
  customerName,
  customerContact,
  customerPhone,
}: CustomerInfoProps) => {
  const { isDark } = useTheme();

  const isDuplicatePhone =
    normalizePhone(customerContact) === normalizePhone(customerPhone) &&
    normalizePhone(customerContact).length > 0;

  return (
    <InfoCard icon={User} label="Customer">
      <p
        className={clsx(
          "font-bold",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        {customerName}
      </p>
      {!isDuplicatePhone && <p>{customerContact}</p>}
      <p>{customerPhone}</p>
    </InfoCard>
  );
};
