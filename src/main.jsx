import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';
import Banner from './components/Banner';
import ProdutctList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Error from './components/Error';
import AboutUs from "./components/AboutUs"
import ContactUs from './components/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <Statistics/>,
        loader: () => fetch('/products.json'),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch('/products.json'),
      },
      {
        path: "/about-us",
        element: <AboutUs/>,
      },
      {
        path: "/contact-us",
        element: <ContactUs/>,
      },
      {
        path: "*", // error component
        element: <Error/>,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
