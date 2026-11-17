import { Truck } from "lucide-react";
import { InfoCard } from "./InfoCard";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type ShippingMethodCardProps = {
  shippingMethodName: string | null;
  shippingPrice: string;
};

export const ShippingMethodCard = ({
  shippingMethodName,
  shippingPrice,
}: ShippingMethodCardProps) => {
  const { isDark } = useTheme();
  const price = Number(shippingPrice);

  return (
    <InfoCard icon={Truck} label="Shipping Method">
      <p className="font-medium">{shippingMethodName ?? "Standard Shipping"}</p>
      <p
        className={clsx("text-sm", isDark ? "text-zinc-400" : "text-zinc-500")}
      >
        {price > 0 ? `${shippingPrice} EGP` : "Free"}
      </p>
    </InfoCard>
  );
};
