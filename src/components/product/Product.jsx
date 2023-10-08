import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCard = props.handleAddToCard;

  return (
    <div className="product">
      <img src={img} alt="Product" />
      <div className="product_info">
        <h6>{name}</h6>
        <h5>Price: ${price}</h5>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCard(props.product)}>
        Add to Card <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
