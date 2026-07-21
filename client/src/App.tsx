import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, HomePage, Collections, Contact } from "./pages";
import { ThemeProvider } from "@/context/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: false, // add an error page later
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
