import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/auth/useAuth";
import { useFindGuestOrders } from "@/hooks/auth/useFindGuestOrders";
import { useLinkGuestOrders } from "@/hooks/auth/useLinkGuestOrders";

import type { GuestOrderSummary } from "@shared/types";

import { GuestOrdersLinkPrompt } from "./GuestOrdersLinkPrompt";

export const GuestOrderLinkGate = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const { mutate: findGuestOrders } = useFindGuestOrders();

  const {
    mutate: linkGuestOrders,
    isPending: isLinking,
    error: linkError,
  } = useLinkGuestOrders();

  const [guestOrders, setGuestOrders] = useState<
    GuestOrderSummary[] | null
  >(null);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !checked) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChecked(true);

      findGuestOrders(undefined, {
        onSuccess: (orders) => {
          if (orders.length > 0) {
            setGuestOrders(orders);
          }
        },
      });
    }
  }, [isAuthenticated, checked, findGuestOrders]);

  if (!guestOrders) return null;

  const handleConfirm = () => {
    linkGuestOrders(undefined, {
      onSuccess: () => {
        setGuestOrders(null);
        navigate("/orders");
      },
    });
  };

  return (
    <GuestOrdersLinkPrompt
      orders={guestOrders}
      isLinking={isLinking}
      error={linkError}
      onConfirm={handleConfirm}
      onDecline={() => setGuestOrders(null)}
    />
  );
};