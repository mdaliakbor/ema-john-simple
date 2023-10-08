import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
