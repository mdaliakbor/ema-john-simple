import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCard = props.handleAddToCard;

  return (
    <div className=" border rounded-md ">
      <div className="p-1">
        <img src={img} alt="Product" className="rounded-md" />
      </div>
      <div className="p-4 font-bold leading-relaxed ">
        <h6 className="text-xl pb-4">{name}</h6>
        <h5>Price: ${price}</h5>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <div className=" h-10 w-full ">
        <button
          className=" w-full  bg-yellow-100 rounded-b-md py-2 items-center flex justify-center"
          onClick={() => handleAddToCard(props.product)}
        >
          Add to Card <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
