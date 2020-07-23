import React, { useState, useEffect } from "react";
import "./Header.scss";
import { FiMoon, FiSun } from "react-icons/fi";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10">
            <h1 className="header__title">Where in the world?</h1>
          </div>
          <div className="col text-right">
            {darkMode ? (
              <button
                className="header__btn"
                onClick={() => setDarkMode(false)}
              >
                <FiSun /> Light Mode
              </button>
            ) : (
              <button className="header__btn" onClick={() => setDarkMode(true)}>
                <FiMoon /> Dark Mode
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
