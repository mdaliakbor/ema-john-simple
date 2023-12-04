import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/shop/Shop.jsx";
import Order from "./components/order/Order.jsx";
import Inventory from "./components/inventory/Inventory.jsx";
import Login from "./login/Login.jsx";
import cartProductLoader from "./loaders/cartProductLoader.js";
import ReviewOrder from "./components/reviewOrder/ReviewOrder.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Register from "./components/register/Register.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivetRoute from "./routes/PrivetRoute.jsx";

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
        element: <ReviewOrder></ReviewOrder>,
      },
      {
        path: "checkout",
        element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
      },
      {
        path: "inventory",
        element: <PrivetRoute><Inventory></Inventory></PrivetRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
