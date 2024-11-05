import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = ({ rating }) => {
  const star = parseInt(rating);
  return (
    <div className="my-5">
      <h4 className="text-lg font-semibold ">Ratting </h4>
      <div className="flex items-center">
        <ReactStars count={star} size={26} color="#ffd700" />
        <span className="bg-[#f6f6f6] py-1 px-3 rounded-xl ml-4 ">
          {rating}
        </span>
      </div>
    </div>
  );
};

export default Rating;
