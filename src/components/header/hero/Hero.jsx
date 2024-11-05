import React from "react";
import HeroContact from "./HeroContact";
import HeroDashboard from "./HeroDashboard";
import HeroDetails from "./HeroDetails";
import HeroHome from "./HeroHome";

const Hero = ({ pathCatch }) => {
  let mainHero;

  if (pathCatch === "/") {
    return (mainHero = <HeroHome />);
  } else if (pathCatch.includes("/details")) {
    return (mainHero = <HeroDetails />);
  } else if (pathCatch === "/dashboard") {
    return (mainHero = <HeroDashboard />);
  } else if (pathCatch === "/contact") {
    return (mainHero = <HeroContact />);
  }
  return <div className="pb-48   bg-p-primary">{mainHero}</div>;
};

export default Hero;
