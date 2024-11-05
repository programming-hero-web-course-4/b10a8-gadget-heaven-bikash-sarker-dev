import React from "react";

const HeroDashboard = () => {
  return (
    <div className="hero relative bg-p-primary">
      <div className="hero-content text-center">
        <div className="my-12">
          <h1 className="text-5xl font-bold text-t-primary leading-[65px]">
            Dashboard
          </h1>
          <p className="max-w-2xl mx-auto my-3 text-t-primary ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div className="mt-8">
            <button className="bg-t-primary mr-6 py-2 px-8 border border-[#fff] rounded-3xl font-semibold">
              Card
            </button>
            <button className=" py-2 px-10 border border-[#fff] rounded-3xl font-semibold">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
