import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Checkout } from "@/pages/checkout";

const router = createBrowserRouter([
  {
    path: "/checkout",
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
