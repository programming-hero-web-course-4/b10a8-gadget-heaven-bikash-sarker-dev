import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";

const GadgetsProducts = () => {
  const allGadgets = useLoaderData();
  const location = useLocation();
  let pathNameCatch = location.pathname.split("/")[1];

  let showGadgets;

  if (location.pathname === "/laptops") {
    showGadgets = allGadgets.filter(
      (phone) => phone.category === pathNameCatch
    );
  } else if (location.pathname === "/phones") {
    showGadgets = allGadgets.filter(
      (phone) => phone.category === pathNameCatch
    );
  } else if (location.pathname === "/watches") {
    showGadgets = allGadgets.filter(
      (phone) => phone.category === pathNameCatch
    );
  } else if (location.pathname === "/cameras") {
    showGadgets = allGadgets.filter(
      (phone) => phone.category === pathNameCatch
    );
  } else if (location.pathname === "/chargers") {
    showGadgets = allGadgets.filter(
      (phone) => phone.category === pathNameCatch
    );
  } else if (location.pathname === "/watches") {
    showGadgets = allGadgets.filter(
      (phone) => phone.category === pathNameCatch
    );
  } else {
    showGadgets = allGadgets;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {showGadgets?.map((gadget) => (
        <ProductCard key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
};

export default GadgetsProducts;
