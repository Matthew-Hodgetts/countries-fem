import React from "react";
import "./RegionFilter.scss";
import { FiChevronDown } from "react-icons/fi";
const RegionFilter = () => {
  return (
    <div className="regionFilter text-right">
      <div className="regionFilter__button">
        <button className="my-0">
          Filter by Country <FiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default RegionFilter;
