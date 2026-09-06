import { User } from "lucide-react";
import { InfoCard } from "./InfoCard";

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
  const isDuplicatePhone =
    normalizePhone(customerContact) === normalizePhone(customerPhone) &&
    normalizePhone(customerContact).length > 0;

  return (
    <InfoCard icon={User} label="Customer">
      <p className="font-medium">{customerName}</p>
      {!isDuplicatePhone && <p>{customerContact}</p>}
      <p>{customerPhone}</p>
    </InfoCard>
  );
};
