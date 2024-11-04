import React from "react";

const ProductCard = () => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-semibold text-2xl ">Shoes!</h2>
        <p className="opacity-55">price: 9999k</p>
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
