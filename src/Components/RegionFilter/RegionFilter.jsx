import React, { useState } from "react";
import "./RegionFilter.scss";
import { FiChevronDown } from "react-icons/fi";

const RegionFilter = ({ onRegionFilter, currentFilter }) => {
  const [regionsActive, setRegionsActive] = useState(false);
  return (
    <div
      className="regionFilter"
      onMouseEnter={() => setRegionsActive(true)}
      onMouseLeave={() => setRegionsActive(false)}
    >
      <button className="regionFilter__button">
        Filter by Region <FiChevronDown />
      </button>
      <div
        className={
          regionsActive
            ? "regionsFilter__regions regionsFilter__regions--active"
            : "regionsFilter__regions"
        }
      >
        <button
          className={
            currentFilter === ""
              ? "regionsFilter__regionButton regionsFilter__regionButton--active"
              : "regionsFilter__regionButton"
          }
          onClick={() => onRegionFilter("")}
        >
          All
        </button>
        <button
          className={
            currentFilter === "Africa"
              ? "regionsFilter__regionButton regionsFilter__regionButton--active"
              : "regionsFilter__regionButton"
          }
          onClick={() => onRegionFilter("Africa")}
        >
          Africa
        </button>
        <button
          className={
            currentFilter === "Americas"
              ? "regionsFilter__regionButton regionsFilter__regionButton--active"
              : "regionsFilter__regionButton"
          }
          onClick={() => onRegionFilter("Americas")}
        >
          America
        </button>
        <button
          className={
            currentFilter === "Asia"
              ? "regionsFilter__regionButton regionsFilter__regionButton--active"
              : "regionsFilter__regionButton"
          }
          onClick={() => onRegionFilter("Asia")}
        >
          Asia
        </button>
        <button
          className={
            currentFilter === "Europe"
              ? "regionsFilter__regionButton regionsFilter__regionButton--active"
              : "regionsFilter__regionButton"
          }
          onClick={() => onRegionFilter("Europe")}
        >
          Europe
        </button>
        <button
          className={
            currentFilter === "Oceania"
              ? "regionsFilter__regionButton regionsFilter__regionButton--active"
              : "regionsFilter__regionButton"
          }
          onClick={() => onRegionFilter("Oceania")}
        >
          Oceania
        </button>
      </div>
    </div>
  );
};

export default RegionFilter;
