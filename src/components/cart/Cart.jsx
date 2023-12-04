import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCartHandler, children }) => {
  //   console.log(props);

  // calculate total price
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === "0") {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart rounded-md text-xl leading-10 ">
      <h2 className="text-2xl font-bold">Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: $ {totalPrice}</p>
      <p>Total Shipping Charge: $ {totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <div className="mt-2 grid gap-4">
        <button
          onClick={clearCartHandler}
          className="px-4 p-0.5 w-full mr-40 bg-red-600 text-white flex justify-between rounded-sm"
        >
          <span>Clear Cart</span>
          <span>Del</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
