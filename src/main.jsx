import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./components/categories/AllProducts";
import Cameras from "./components/categories/Cameras";
import Chargers from "./components/categories/Chargers";
import Laptop from "./components/categories/Laptop";
import Phones from "./components/categories/Phones";
import SmartWatches from "./components/categories/SmartWatches";
import "./index.css";
import Root from "./layout/Root";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import DetailsPage from "./pages/DetailsPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <AllProducts />,
            loader: () => fetch("/gadgetsData.json"),
          },
          {
            path: "/laptops",
            element: <Laptop />,
            loader: () => fetch("/gadgetsData.json"),
          },
          {
            path: "/phones",
            element: <Phones />,
            loader: () => fetch("/gadgetsData.json"),
          },
          {
            path: "/cameras",
            element: <Cameras />,
            loader: () => fetch("/gadgetsData.json"),
          },

          {
            path: "/watches",
            element: <SmartWatches />,
            loader: () => fetch("/gadgetsData.json"),
          },
          {
            path: "/chargers",
            element: <Chargers />,
            loader: () => fetch("/gadgetsData.json"),
          },
        ],
      },
      {
        path: "/details/:productId",
        element: <DetailsPage />,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
