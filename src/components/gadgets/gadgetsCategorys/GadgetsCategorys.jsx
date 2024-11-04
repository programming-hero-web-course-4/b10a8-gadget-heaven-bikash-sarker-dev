import React from "react";
import { NavLink } from "react-router-dom";

const GadgetsCategorys = () => {
  return (
    <div className="bg-t-primary  rounded-xl p-5 space-y-5">
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to=""
      >
        All Product
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to=""
      >
        Laptops
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to=""
      >
        Phones
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to=""
      >
        Accessories
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to=""
      >
        smart Watches
      </NavLink>
      <NavLink
        className={`btn btn-block rounded-3xl px-10 ${({
          isActive,
          isPending,
        }) => (isPending ? "pending" : isActive ? "active" : "")}`}
        to=""
      >
        Iphone
      </NavLink>
    </div>
  );
};

export default GadgetsCategorys;
