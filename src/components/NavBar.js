import React from "react";
import { withRouter, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between p-2"
        id="navbarSupportedContent"
        style={{ backgroundColor: "#2e7373e0" }}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active px-4">
            <Link className="nav-link" to="#!">
              Home
            </Link>
          </li>
          <li className="nav-item active px-4">
            <Link className="nav-link" to="#!">
              Women
            </Link>
          </li>
          <li className="nav-item active px-4">
            <Link className="nav-link" to="#!">
              Men
            </Link>
          </li>
          <li className="nav-item active px-4">
            <Link className="nav-link" to="#!">
              Kids
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav nav-right av-right ml-auto mr-2">
          <li className="nav-item px-4">
            <Link className="nav-link" to="#!">
              Cart
            </Link>
          </li>
          <li className="nav-item px-4">
            <Link className="nav-link" to="#!">
              Signin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
