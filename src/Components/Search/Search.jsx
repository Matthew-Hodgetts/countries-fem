import React from "react";
import "./Search.scss";

import RegionFilter from "../RegionFilter/RegionFilter";

const Search = ({ onSearch }) => {
  return (
    <section className="search py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="search-name"
              id="search-name"
              placeholder="Search for a country..."
              className="search__input"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <div className="col">
            <RegionFilter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
