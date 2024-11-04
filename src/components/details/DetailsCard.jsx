import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Rating from "./Rating";

const DetailsCard = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-t-primary rounded-2xl p-6 relative -top-48">
      <div className="md:flex space-x-5">
        <div className="w-2/5">
          <img
            className="rounded-xl"
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt=""
          />
        </div>
        <div className="w-3/5">
          <div>
            <h3 className="text-2xl font-semibold ">
              Samsung Galaxy S23 Ultra
            </h3>
            <p className="font-medium opacity-60 mt-2 mb-5">Price: $9999</p>
            <span className="border border-[#309C08] bg-[#f0fdf4] py-2 px-4 rounded-3xl text-[#309C08]">
              In Stock
            </span>
            <p className="opacity-60 mt-5 mb-4">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold ">Specification:</h4>
            <ol className="list-decimal ml-6">
              <li className="opacity-60">Specification 1</li>
              <li>Specification 2</li>
            </ol>
          </div>
          <Rating />
          <div className="flex items-center space-x-3">
            <button className="btn bg-p-primary rounded-3xl px-8 text-t-primary hover:text-p-primary">
              Add To Card <FiShoppingCart className="text-xl" />
            </button>
            <button className="btn btn-outline btn-circle ">
              <FaRegHeart className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
