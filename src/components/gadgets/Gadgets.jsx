import React from "react";
import GadgetsCategorys from "./gadgetsCategorys/GadgetsCategorys";
import GadgetsProducts from "./gadgetsProduct/GadgetsProducts";

const Gadgets = () => {
  return (
    <div className="max-w-7xl mx-auto py-32">
      <h2 className="text-5xl font-bold mb-16 text-center">
        Explore Cutting-Ed ge Gadgets
      </h2>
      <div className="md:flex gap-6">
        <div className="w-1/5">
          <GadgetsCategorys />
        </div>
        <div className="w-4/5">
          <GadgetsProducts />
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
