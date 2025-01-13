import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ toggleDarkMode, darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-gray-200 dark:bg-gray-900`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </div>
  );
}
