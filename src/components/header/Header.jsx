import React from "react";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-p-primary m-11  rounded-3xl">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
