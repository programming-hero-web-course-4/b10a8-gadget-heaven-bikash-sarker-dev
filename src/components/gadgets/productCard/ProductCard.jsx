import React from "react";

const ProductCard = ({ gadget }) => {
  const { price, product_image, product_title } = gadget;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-semibold text-xl ">{product_title}</h2>
        <p className="opacity-55">Price: {price}</p>
        <div className="card-actions">
          <button className=" border transition duration-500 ease-out  hover:bg-p-primary hover:text-t-primary rounded-3xl py-2 px-5 text-p-primary font-semibold mt-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
