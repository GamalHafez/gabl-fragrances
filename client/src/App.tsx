import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import { RootLayout } from "@/pages/layouts/RootLayout";
import { ErrorPage } from "@/pages";
import {
  AboutUs,
  Collections,
  HomePage,
  PrivacyPolicy,
  ProductDetails,
  SamplesPage,
} from "@/pages/public";
import { Contact } from "lucide-react";

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
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
