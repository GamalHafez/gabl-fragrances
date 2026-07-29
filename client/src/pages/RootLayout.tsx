import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const RootLayout = () => {
  return (
    <div className="font-inter flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};
