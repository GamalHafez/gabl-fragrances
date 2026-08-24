import { CheckoutHeader, CheckoutFooter } from "@/components/checkout";
import { ScrollToTop } from "@/components/ui/animation";
import { Outlet } from "react-router-dom";

export const CheckoutLayout = () => {
  return (
    <div className="font-inter flex min-h-screen flex-col">
      <ScrollToTop />

      <CheckoutHeader />
      
      <main className="pt-20 pb-16">
        <Outlet />
      </main>

      <CheckoutFooter />
    </div>
  );
};
