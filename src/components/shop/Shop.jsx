import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop_container">
      <div className="products_container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="order_summary">
        <h2>Order Summary</h2>
      </div>
    </div>
  );
};

export default Shop;
