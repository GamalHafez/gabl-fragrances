import { Calendar, MapPin, MapPinned, MessageCircle, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { LocationLink } from "@/components/ui/common/LocationLink";

export type ProfileCardData = {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
};

type ProfileCardInputs = {
  name: string;
  email: string;
  memberSince: string;
  addressValue: string;
  locationUrl?: string | null;
};

export const getProfileCards = ({
  name,
  email,
  memberSince,
  addressValue,
  locationUrl,
}: ProfileCardInputs): ProfileCardData[] => [
  { icon: User, label: "Name", value: name },
  { icon: MessageCircle, label: "Contactable at", value: email },
  { icon: Calendar, label: "Member Since", value: memberSince },
  { icon: MapPin, label: "Default Address", value: addressValue },
  {
    icon: MapPinned,
    label: "Saved Location",
    value: locationUrl ? (
      <LocationLink url={locationUrl} label="View saved location" />
    ) : (
      "No saved location"
    ),
  },
];
