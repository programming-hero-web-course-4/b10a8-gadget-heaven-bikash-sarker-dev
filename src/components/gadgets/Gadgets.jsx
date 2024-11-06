import React from "react";
import { Outlet } from "react-router-dom";
import GadgetsCategorys from "./gadgetsCategorys/GadgetsCategorys";

const Gadgets = () => {
  return (
    <div className="max-w-7xl mx-auto py-32">
      <h2 className=" text-3xl lg:text-5xl font-bold mb-16 text-center">
        Explore Cutting-Ed ge Gadgets
      </h2>
      <div className="md:flex gap-6">
        <div className="lg:w-1/5">
          <GadgetsCategorys />
        </div>
        <div className="lg:w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
