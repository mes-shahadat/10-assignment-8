import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';
import Banner from './components/Banner';
import ProdutctList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 error</h1>,
    children: [
      {
        path: "/",
        element: <Banner />,
        children: [
          {
            path: "/",
            element: <ProdutctList />,
            loader: () => fetch('/products.json'),
            children: [
              {
                path: "/products/:category",
                element: <ProdutctList />,
                loader: () => fetch('/products.json'),
              },
            ],
          },
          
        ],
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails/>,
        loader: () => fetch('/products.json'),
      },
      {
        path: "/stats",
        element: <h1>statics page</h1>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch('/products.json'),
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
