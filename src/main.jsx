import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/login/Login";
import LoggedIn from "./components/login/LoggedIn";
import LogOut from "./components/login/LogOut";
import Register from "./components/register/Register";
import Admin from "./components/Admin";
import Products from "./components/products/Products";
import UpdateProduct from "./components/products/UpdateProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/item-detail/:itemId",
        element: <ItemDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout/:cartTotal",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logged-in",
        element: <LoggedIn />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "/products/update",
            element: < UpdateProduct />,
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
