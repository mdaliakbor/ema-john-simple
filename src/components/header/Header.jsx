// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
  }
  return (
    <div className="main">
      <nav className="header">
        {/* <img src={} alt="logo" /> */}
        <div className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 italic">Simple-Ecom</div>
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
          <Link to="/order">Order</Link>
          <Link to="/inventory">Inventory</Link>
          {
            user ? <>
              <button onClick={handleLogOut} className="text-white">Log out</button>
            </> : <>
              <Link to="/login">Sign in</Link>
            </>
          }
          <Link to="/register">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
