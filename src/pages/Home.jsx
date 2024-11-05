import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Gadgets from "../components/gadgets/Gadgets";

const Home = () => {
  return (
    <div className="bg-[#f6f6f6] ">
      <HelmetProvider>
        <Helmet>
          <title>Home | Gadgets Heaven</title>
        </Helmet>
      </HelmetProvider>
      <Gadgets />
    </div>
  );
};

export default Home;
