import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CardContext } from "../../../layout/Root";

const Navbar = ({ pathCatch }) => {
  const [gadgets] = useContext(CardContext);
  let navList = (
    <>
      <li>
        <Link
          className={`${pathCatch === "/" ? "text-t-primary " : ""}`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link className={`${pathCatch === "/" ? "text-t-primary " : ""}`}>
          Statistics
        </Link>
      </li>
      <li>
        <Link
          className={`${pathCatch === "/" ? "text-t-primary " : ""}`}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className={`${pathCatch === "/" ? "text-t-primary " : ""}`}
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={`navbar  max-w-7xl mx-auto  ${
        pathCatch === "/" ? "pt-7 " : ""
      }`}
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
          className={` btn btn-ghost text-xl ${
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
      <div className="navbar-end space-x-6">
        <a className="btn  btn-circle relative">
          <FaCartArrowDown className="text-xl" />{" "}
          <div className="w-5 h-5 rounded-full bg-[#052e16] p-1 absolute -right-3 top-1">
            <span className="text-t-primary ">{gadgets.length}</span>
          </div>
        </a>
        <a className="btn  btn-circle">
          <CiHeart className="text-xl" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
