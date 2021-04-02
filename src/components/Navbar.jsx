import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    //<Router>
    <div className="topnav">
      <nav>
        <ul>
          <li style={{ color: "#ffffff" }}>OpenInvest</li>
          <li>
            <NavLink exact to="/" activeStyle={{ color: "#ffffff" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/viewBusinesses" activeStyle={{ color: "#ffffff" }}>
              View Businesses
            </NavLink>
          </li>
          <li>
            <NavLink to="/addBusiness" activeStyle={{ color: "#ffffff" }}>
              Enlist Business
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
