import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkToggleIcon from "../icons/dark-toggle.svg";
import LightToggleIcon from "../icons/light-toggle.svg";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full md:fixed flex justify-between items-center p-5 bg-gray-200 text-black dark:bg-gray-900 dark:text-white z-50">
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden text-black dark:text-white"
        onClick={toggleMenu}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex justify-center md:w-full bg-gray-300 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent absolute md:static top-16 left-4 z-50 p-4 md:p-0 rounded-lg`}
      >
        <ul className="flex flex-col md:flex-row text-lg font-roboto">
          <li className="py-2 md:py-0 px-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg p-2 md:p-2 underline underline-offset-8 decoration-2"
                  : "rounded-lg p-2 md:p-2 hover:underline underline-offset-8 decoration-2"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="py-2 md:py-0 px-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg p-2 md:p-2 underline underline-offset-8 decoration-2"
                  : "rounded-lg p-2 md:p-2 hover:underline underline-offset-8 decoration-2"
              }
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li className="py-2 md:py-0 px-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg p-2 md:p-2 underline underline-offset-8 decoration-2"
                  : "rounded-lg p-2 md:p-2 hover:underline underline-offset-8 decoration-2"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleDarkMode}
        className="p-2 text-black dark:text-white rounded"
      >
        {darkMode ? (
          <img src={DarkToggleIcon} alt="Dark Mode" className="h-5 w-5" />
        ) : (
          <img src={LightToggleIcon} alt="Light Mode" className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
