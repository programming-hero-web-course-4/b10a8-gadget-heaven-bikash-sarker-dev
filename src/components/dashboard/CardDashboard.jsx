import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const CardDashboard = ({ card, handleRemoveCard }) => {
  const { product_image, product_title, price, description } = card;

  return (
    <div className="flex gap-5 items-center bg-t-primary rounded-2xl p-6 my-6">
      <div className="w-1/5">
        <img
          className="w-full rounded-xl h-[150px] object-cover"
          src={product_image}
          alt=""
        />
      </div>
      <div className="flex justify-between w-4/5">
        <div>
          <h3 className="text-2xl font-semibold ">{product_title}</h3>
          <p className="opacity-60 mt-5 mb-4">{description}</p>
          <p className="font-medium opacity-60 mt-2 mb-5">Price: $ {price}</p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveCard(card)}
            className="text-4xl text-[red]"
          >
            <IoCloseCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
