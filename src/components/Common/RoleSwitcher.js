import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Navbar.css";

function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="role-switcher">
      
      <button
        className={role === "viewer" ? "active" : ""}
        onClick={() => setRole("viewer")}
      >
        Viewer
      </button>

      <button
        className={role === "admin" ? "active" : ""}
        onClick={() => setRole("admin")}
      >
        Admin
      </button>

    </div>
  );
}

export default RoleSwitcher;