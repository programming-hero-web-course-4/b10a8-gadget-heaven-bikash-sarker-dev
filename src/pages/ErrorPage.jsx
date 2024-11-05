import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className=" text-7xl lg:text-[130px] font-bold text-p-primary">
          404
        </h1>
        <p className="text-4xl font-medium mb-6">Page not found !</p>
        <Link className="btn btn-sm" to="/">
          home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
