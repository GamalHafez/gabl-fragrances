import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CheckoutLayout } from "@/pages/layouts/CheckoutLayout";
import { Checkout } from "@/pages/checkout";

const router = createBrowserRouter([
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
