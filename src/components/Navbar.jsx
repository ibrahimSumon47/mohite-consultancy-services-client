import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="text-2xl font-semibold">
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className={`${
          location.pathname === "/"
            ? "bg-red-500 p-1 border rounded-lg mr-5"
            : ""
        }`}
      >
        All Data
      </Link>
      <Link
        to="/addadata"
        style={{ textDecoration: "none" }}
        className={`${
          location.pathname === "/addadata"
            ? "bg-red-500 p-1 border rounded-lg ml-5"
            : ""
        }`}
      >
        Add A Data
      </Link>
    </div>
  );
};

export default Navbar;