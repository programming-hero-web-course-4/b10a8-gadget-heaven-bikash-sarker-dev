import React from "react";
import { NavLink } from "react-router-dom";

const GadgetsCategorys = () => {
  return (
    <div className="bg-t-primary w-full rounded-xl p-5 space-y-5">
      <NavLink
        className={`btn btn-block  rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to="/"
      >
        All Product
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to="/laptops"
      >
        Laptops
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to="/phones"
      >
        Phones
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to="/chargers"
      >
        Accessories
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to="/watches"
      >
        smart Watches
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to="/cameras"
      >
        cameras
      </NavLink>
    </div>
  );
};

export default GadgetsCategorys;
