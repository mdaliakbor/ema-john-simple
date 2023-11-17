import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/shop/Shop.jsx";
import Order from "./components/order/Order.jsx";
import Review from "./components/reviewItem/ReviewItem.jsx";
import Inventory from "./components/inventory/Inventory.jsx";
import Login from "./login/Login.jsx";
import cartProductLoader from "./loaders/cartProductLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "order",
        element: <Order></Order>,
        loader: cartProductLoader,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
