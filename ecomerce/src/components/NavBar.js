import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <ul>
          <li>
            <NavLink to={"/"}>Home cara</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Sobre meus manos</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
