import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="Product" />
      <div className="product_info">
        <h6>{name}</h6>
        <h5>Price: ${price}</h5>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button>Add to Card</button>
    </div>
  );
};

export default Product;
