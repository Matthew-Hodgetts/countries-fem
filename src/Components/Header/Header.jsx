import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="header__title">Where in the world?</h1>
          </div>
          <div className="col text-right">toggle</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
