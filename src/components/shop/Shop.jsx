import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { addToLocalDb, getShoppingCart } from "../../utilities/localDB";
// import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // Load data from database
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // Load data from Local storage
  useEffect(() => {
    const storedData = getShoppingCart();
    console.log(storedData);
  }, []);

  const handleAddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToLocalDb(product.id);
    // addToDb(product.id);
  };
  return (
    <div className="shop_container">
      <div className="products_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCard={handleAddToCard}
          ></Product>
        ))}
      </div>
      <div className="order_summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
