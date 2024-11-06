import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const StatisticsPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Statistics | Gadgets Heaven</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <h1 className="text-center text-4xl my-10 font-bold">
          Statistics page
        </h1>
      </div>
    </div>
  );
};

export default StatisticsPage;
