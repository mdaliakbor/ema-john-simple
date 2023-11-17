// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main">
      <nav className="header">
        <img src={logo} alt="logo" />
        <div className="menu_item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-gray-500 rounded-md px-2" : ""
            }
          >
            Home
          </NavLink>
          <Link to="/shop">Shop</Link>
          <Link to="/order">Order Review</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
