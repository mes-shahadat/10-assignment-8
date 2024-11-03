import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>404 error</h1>,
    children: [
      {
        path: "/product-details/:id",
        element: <h1>product details page</h1>,
      },
      {
        path: "/stats",
        element: <h1>statics page</h1>,
      },
      {
        path: "/dashboard",
        element: <h1>dashboard page</h1>,
      },
      {
        path: "/technical-support",
        element: <h1>support page</h1>,
      },
      {
        path: "/about-us",
        element: <h1>about us page</h1>,
      },
      {
        path: "/contact-us",
        element: <h1>contact page</h1>,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
