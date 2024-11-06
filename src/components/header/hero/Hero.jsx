import React from "react";
import HeroContact from "./HeroContact";
import HeroDashboard from "./HeroDashboard";
import HeroDetails from "./HeroDetails";
import HeroHome from "./HeroHome";

const Hero = ({ pathCatch, scroll }) => {
  let mainHero;

  if (
    pathCatch === "/" ||
    pathCatch.includes("laptops") ||
    pathCatch.includes("phones") ||
    pathCatch.includes("chargers") ||
    pathCatch.includes("watches") ||
    pathCatch.includes("cameras")
  ) {
    return (mainHero = <HeroHome />);
  } else if (pathCatch.includes("/details")) {
    return (mainHero = <HeroDetails />);
  } else if (pathCatch === "/dashboard") {
    return (mainHero = <HeroDashboard />);
  } else if (pathCatch === "/contact") {
    return (mainHero = <HeroContact />);
  }
  return <div className={`pb-48  bg-p-primary `}>{mainHero}</div>;
};

export default Hero;
