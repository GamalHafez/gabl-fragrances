import { MapPin } from "lucide-react";
import { InfoCard } from "./InfoCard";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type ShipToSectionProps = {
  shippingAddress: string;
  shippingCity: string;
  shippingGovernorate: string;
  shippingCountry: string;
};

export const ShippingAddressCard = ({
  shippingAddress,
  shippingCity,
  shippingGovernorate,
  shippingCountry,
}: ShipToSectionProps) => {
  const { isDark } = useTheme();

  return (
    <InfoCard icon={MapPin} label="Ship To">
      <p
        className={clsx(
          "font-bold",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        {shippingCity}, {shippingGovernorate}
      </p>
      <p>{shippingAddress}</p>
      <p>{shippingCountry}</p>
    </InfoCard>
  );
};
