import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

const Header = () => {
  const location = useLocation();

  let pathCatch = location.pathname;

  return (
    <div
      className={` ${
        pathCatch === "/" ? "bg-p-primary m-11" : ""
      }   rounded-3xl`}
    >
      <Navbar pathCatch={pathCatch} />
      <Hero pathCatch={pathCatch} />
    </div>
  );
};

export default Header;
