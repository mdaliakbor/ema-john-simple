import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../reviewItem/ReviewItem";
import { removeCartFromLDB } from "../../utilities/localDB";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  // console.log(cart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeCartFromLDB(id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
