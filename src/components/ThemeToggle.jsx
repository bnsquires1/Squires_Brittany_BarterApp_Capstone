// src/components/ThemeToggle.js
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default ThemeToggle;
