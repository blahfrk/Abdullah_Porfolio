import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Hero from "./assets/components/Hero";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          }
        >
          <Route index element={<Hero darkMode={darkMode} />} />
          <Route path="projects" element={<Projects darkMode={darkMode} />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
