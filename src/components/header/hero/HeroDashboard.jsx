import React from "react";

const HeroDashboard = () => {
  return (
    <div className="hero relative pb-48 mb-96  bg-p-primary">
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

          {/* <div className="max-w-4xl mx-auto bg-[#ffffff4d] rounded-3xl border border-[#fff] absolute -bottom-[400px] inset-x-0 ">
          <img
            style={{ borderRadius: "50px" }}
            className="w-full rounded-2xl  p-6"
            src={Banner}
            alt="banner"
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
