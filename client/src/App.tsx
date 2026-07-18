import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages";
import { ThemeProvider } from "@/context/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: false, // add an error page later
    children: [],
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
