import React from "react";

const Rating = () => {
  return (
    <div className="my-5">
      <h4 className="text-lg font-semibold ">Ratting </h4>
      <div className="rating rating-md mt-1">
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <span className="bg-[#f6f6f6] py-1 px-3 rounded-xl ml-4 font-medium">
        4.8
      </span>
    </div>
  );
};

export default Rating;
