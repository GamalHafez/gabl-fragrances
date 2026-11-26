import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/checkout",
    children: [
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
