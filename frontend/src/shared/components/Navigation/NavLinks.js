import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/shortlisted/places">Shortlisted</NavLink>
      </li> */}
      <li>
        <NavLink to="/post/new">Post an Accommodation</NavLink>
      </li>
      <li>
        <NavLink to="/p1/posts">Posts!</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
