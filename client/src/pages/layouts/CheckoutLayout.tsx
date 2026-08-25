import { CheckoutHeader, CheckoutFooter } from "@/components/checkout/layout";
import { ScrollToTop } from "@/components/ui/animation";
import { Outlet } from "react-router-dom";

export const CheckoutLayout = () => {
  return (
    <div className="font-inter flex min-h-screen flex-col">
      <ScrollToTop />

      <CheckoutHeader />

      <main>
        <Outlet />
      </main>

      <CheckoutFooter />
    </div>
  );
};
