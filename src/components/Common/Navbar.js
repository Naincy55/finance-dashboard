import React from "react";
import "./Navbar.css";
import RoleSwitcher from "./RoleSwitcher";

function Navbar() {
  return (
    <div className="navbar">

      <div className="nav-left">
        <h2>💰 Finance Dashboard</h2>
        <p className="tagline">Track • Manage • Grow</p>
      </div>

      <div className="nav-right">
        <RoleSwitcher />
      </div>

    </div>
  );
}

export default Navbar;