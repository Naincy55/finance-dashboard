import React, { useContext } from "react";
import "./Navbar.css";
import RoleSwitcher from "./RoleSwitcher";
import { AppContext } from "../../context/AppContext";

function Navbar() {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div className="navbar">

      <div className="nav-left">
        <h2>💰 Finance Dashboard</h2>
        <p className="tagline">Track • Manage • Grow</p>
      </div>

      <div className="nav-right">
        <RoleSwitcher />

        {/* 🔥 Theme Toggle */}
        <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

    </div>
  );
}

export default Navbar;