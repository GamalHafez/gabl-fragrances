import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CheckoutLayout } from "@/pages/layouts/CheckoutLayout";
import { Checkout, OrderConfirmation } from "@/pages/checkout";
import { ProtectedRoute, Register } from "@/pages/auth";
import { AccountProfile, UserOrders } from "./pages/protected";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        children: [
          {
            path: "signup",
            element: <Register />,
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
  return <RouterProvider router={router} />;
}

export default App;
