import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import { ErrorPage } from "@/pages";
import { CartProvider } from "./context/cart/CartProvider";
import { CheckoutLayout } from "@/pages/layouts/CheckoutLayout";
import { Checkout, OrderConfirmation } from "@/pages/checkout";
import { AuthProvider } from "./context/auth/AuthProvider";
import { GuestRoute, Login, ProtectedRoute, Register } from "@/pages/auth";
import { AccountProfile, UserOrders } from "./pages/protected";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <GuestRoute />,
        children: [
          {
            path: "signup",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <AccountProfile />,
          },
          {
            path: "orders",
            element: <UserOrders />,
          },
          {
            path: "orders/:orderId",
            element: <OrderConfirmation />,
          },
        ],
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
