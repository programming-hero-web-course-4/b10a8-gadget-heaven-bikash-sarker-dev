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
  let margins;
  if (scroll) {
    margins = "m-0";
  } else {
    margins = "lg:m-11";
  }

  console.log(margins);
  return (
    <div
      className={` ${
        pathCatch === "/" ||
        pathCatch.includes("laptops") ||
        pathCatch.includes("phones") ||
        pathCatch.includes("chargers") ||
        pathCatch.includes("watches") ||
        pathCatch.includes("cameras")
          ? `bg-p-primary ${margins}`
          : ""
      }   lg:rounded-3xl`}
    >
      <Navbar pathCatch={pathCatch} scroll={scroll} />
      <Hero pathCatch={pathCatch} />
    </div>
  );
};

export default Header;
