import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: false, // add an error page later
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
