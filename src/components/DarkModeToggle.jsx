import React from "react";
import "../styles/DarkMode.module.css";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default DarkModeToggle;