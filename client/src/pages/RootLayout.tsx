import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HashScrollHandler } from "@/components/ui/common";

export const RootLayout = () => {
  return (
    <div className="font-inter flex min-h-screen flex-col">
      <Header />

      <HashScrollHandler />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};
