import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../assets/images/banner.jpg";

const HeroHome = () => {
  return (
    <div className="hero relative lg:pb-48 lg:mb-[430px]  bg-p-primary">
      <div className="hero-content text-center">
        <div className="lg:my-12 my-6">
          <h1 className="lg:text-5xl text-3xl font-bold text-t-primary lg:leading-[65px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-t-primary ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="btn bg-t-primary text-p-primary rounded-3xl text-xl font-bold px-8 ">
              shop Now
            </button>
          </Link>
          <div className="max-w-4xl mx-auto mt-8 bg-[#ffffff4d] rounded-3xl border border-[#fff] lg:absolute lg:-bottom-[400px]  inset-x-0 ">
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

export default HeroHome;
