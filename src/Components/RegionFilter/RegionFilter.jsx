import React, { useState } from "react";
import "./RegionFilter.scss";
import { FiChevronDown } from "react-icons/fi";

const RegionFilter = () => {
  const [regionsActive, setRegionsActive] = useState(false);
  return (
    <div className="regionFilter">
      <button
        className="regionFilter__button"
        onClick={() => setRegionsActive(!regionsActive)}
      >
        Filter by Region <FiChevronDown />
      </button>
      <div
        className={
          regionsActive
            ? "regionsFilter__regions regionsFilter__regions--active"
            : "regionsFilter__regions"
        }
      >
        <button className="regionsFilter__regionButton">Africa</button>
        <button className="regionsFilter__regionButton">America</button>
        <button className="regionsFilter__regionButton">Asia</button>
        <button className="regionsFilter__regionButton">Europe</button>
        <button className="regionsFilter__regionButton">Oceania</button>
      </div>
    </div>
  );
};

export default RegionFilter;
