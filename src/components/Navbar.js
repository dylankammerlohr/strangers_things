import React from "react";
import { NavLink } from "react-router-dom";
import { Logout } from "./";

const Navbar = () => {
  return (
    <nav>
      <h2 className="nav-title">Stranger's Things</h2>
      <div className="nav-links">
        <NavLink to="/" className="post-link">
          Home
        </NavLink>
        <NavLink to="/profile" className="profile-link">
          Profile
        </NavLink>
        <NavLink to="/login-and-register" className="login-register-link">
          Login/Register
        </NavLink>
        {localStorage.getItem("token") ? <Logout /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
