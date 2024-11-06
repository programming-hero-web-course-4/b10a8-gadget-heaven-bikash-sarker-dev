import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const location = useLocation();
  let pathCatch = location.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  });

  return (
    <div
      className={`${scroll ? "m-0" : " "} ${
        pathCatch === "/" ||
        pathCatch.includes("laptops") ||
        pathCatch.includes("phones") ||
        pathCatch.includes("chargers") ||
        pathCatch.includes("watches") ||
        pathCatch.includes("cameras")
          ? `bg-p-primary  m-11`
          : ""
      }   rounded-3xl`}
    >
      <Navbar pathCatch={pathCatch} scroll={scroll} />
      <Hero pathCatch={pathCatch} />
    </div>
  );
};

export default Header;
