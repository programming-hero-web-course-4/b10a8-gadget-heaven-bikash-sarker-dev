import React from "react";
import Banner from "../../../assets/images/banner.jpg";

const Hero = () => {
  return (
    <div className="hero relative pb-48 mb-96 mx-auto">
      <div className="hero-content text-center">
        <div className="my-12">
          <h1 className="text-5xl font-bold text-t-primary leading-[65px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-t-primary ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-t-primary text-p-primary rounded-3xl text-xl font-bold px-8 ">
            shop Now
          </button>
          <div className="max-w-4xl mx-auto bg-[#ffffff4d] rounded-3xl border border-[#fff] absolute -bottom-[400px] inset-x-0 ">
            <img
              style={{ borderRadius: "50px" }}
              className="w-full rounded-2xl  p-6"
              src={Banner}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
