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
import { Checkout } from "@/pages/checkout/Checkout";

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
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
