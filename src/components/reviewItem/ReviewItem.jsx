import React from "react";

const ReviewItem = ({ product, handleRemoveCart }) => {
  const { id, img, name, price } = product;
  // console.log(product);

  return (
    <div className="w-[571px] h-[107px] border rounded-sm p-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="w-20 h-[87px] rounded-md" src={img} alt="Product Img" />
        <div>
          <div className="font-bold">{name}</div>
          <div>
            Price: <span className="text-orange-400">${price}</span>
          </div>
          <div>
            Shipping Charge: <span className="text-orange-400">$5</span>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemoveCart(id)}
          className="bg-red-200 rounded-3xl p-2"
        >
          Del{" "}
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
