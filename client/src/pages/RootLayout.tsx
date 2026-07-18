import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/Footer";

export const RootLayout = () => {
  return (
    <div className="font-poppins flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
