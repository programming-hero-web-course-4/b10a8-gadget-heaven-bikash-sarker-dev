import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CardContext, WishListContext } from "../../../layout/Root";

const Navbar = ({ pathCatch, scroll }) => {
  const [gadgets] = useContext(CardContext);
  const { wishlists } = useContext(WishListContext);

  let navList = (
    <>
      <li>
        <Link
          className={`${pathCatch === "/" ? "lg:text-t-primary " : ""}`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/statistics"
          className={`${pathCatch === "/" ? "lg:text-t-primary " : ""}`}
        >
          Statistics
        </Link>
      </li>
      <li>
        <Link
          className={`${pathCatch === "/" ? "lg:text-t-primary " : ""}`}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className={`${pathCatch === "/" ? "lg:text-t-primary " : ""}`}
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={`navbar py-5 ${
        scroll ? "sticky w-full p-5 pl-0 md:pl-5 " : "max-w-7xl"
      }  mx-auto  ${pathCatch === "/" ? "pt-5 " : " "}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <a
          className={` btn btn-ghost text-md sm:text-xl ${
            pathCatch === "/" ? "text-t-primary " : ""
          }`}
        >
          {" "}
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end space-x-4 md:space-x-6 mr-3 lg:mr-0">
        <button className="btn  btn-circle btn-sm md:btn-md relative">
          <FaCartArrowDown className="text-xl" />{" "}
          <div className="w-5 h-5 rounded-full bg-[#052e16] p-1 absolute -right-3 top-1">
            <span className="text-t-primary ">{gadgets.length}</span>
          </div>
        </button>
        <button className="btn  btn-circle btn-sm md:btn-md relative">
          <CiHeart className="text-xl" />{" "}
          {wishlists.length === 0 ? (
            " "
          ) : (
            <div className="w-5 h-5 rounded-full bg-[#052e16] p-1 absolute -right-3 top-1">
              <span className="text-t-primary ">{wishlists.length}</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
