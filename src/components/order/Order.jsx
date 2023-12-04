import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../reviewItem/ReviewItem";
import {
  deleteShoppingCartFromLDB,
  removeCartFromLDB,
} from "../../utilities/localDB";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  // console.log(cart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeCartFromLDB(id);
  };

  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCartFromLDB();
  };

  // console.log(cart);
  return (
    <div className="flex justify-around mt-28 ">
      <div className="gap-4 grid">
        {cart.map((product, i) => (
          <ReviewItem
            key={i}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="w-96">
        <Cart cart={cart} clearCartHandler={clearCartHandler}>
          <Link to="/checkout">
            <button className="px-4 p-0.5 w-full mr-40 bg-yellow-600 text-white flex justify-between rounded-sm">
              <span>Proceed Checkout</span>
              <span>icon</span>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
