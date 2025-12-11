import React from "react";
import "./Header.css";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/Mobiles"> Mobiles</NavLink>
        <NavLink to="/Laptop"> Laptop</NavLink>
        <NavLink to="/users"> users</NavLink>
        <NavLink to="/posts"> posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
