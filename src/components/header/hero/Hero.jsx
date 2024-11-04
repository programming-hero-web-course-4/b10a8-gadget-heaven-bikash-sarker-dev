import React from "react";
import HeroDashboard from "./HeroDashboard";
import HeroDetails from "./HeroDetails";
import HeroHome from "./HeroHome";

const Hero = ({ pathCatch }) => {
  let mainHero;
  if (pathCatch === "/") {
    return (mainHero = <HeroHome />);
  } else if (pathCatch === "/details") {
    return (mainHero = <HeroDetails />);
  } else if (pathCatch === "/dashboard") {
    return (mainHero = <HeroDashboard />);
  }
  return <div className="pb-48 mb-96  bg-p-primary">{mainHero}</div>;
};

export default Hero;
