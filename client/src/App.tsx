import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import { RootLayout } from "@/pages/layouts/RootLayout";
import { ErrorPage } from "@/pages";
import {
  AboutUs,
  Collections,
  Contact,
  HomePage,
  PrivacyPolicy,
  ProductDetails,
  SamplesPage,
} from "@/pages/public";
import { CartProvider } from "./context/cart/CartProvider";
import { CheckoutLayout } from "@/pages/layouts/CheckoutLayout";
import { Checkout, OrderConfirmation } from "@/pages/checkout";
import { AuthProvider } from "./context/auth/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "collections/samples",
        element: <SamplesPage />,
      },
      {
        path: "products/:productSlug",
        element: <ProductDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Checkout />,
      },
      {
        path: "orders/:orderId/confirmation",
        element: <OrderConfirmation />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
