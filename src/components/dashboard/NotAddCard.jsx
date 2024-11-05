import React from "react";
import { GiEmptyWoodBucket } from "react-icons/gi";

const NotAddCard = () => {
  return (
    <div className="flex gap-5 justify-center items-center bg-t-primary rounded-2xl p-6 py-16 my-6 mt-14">
      <div className="text-center flex justify-center flex-col items-center">
        <GiEmptyWoodBucket className="text-7xl" />

        <p className="opacity-60 mt-5 mb-4">
          this is Not Product Card Add. please Adding your card .
        </p>
      </div>
    </div>
  );
};

export default NotAddCard;
