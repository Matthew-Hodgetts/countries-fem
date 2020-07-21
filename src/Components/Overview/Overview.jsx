import React from "react";
import "./Overview.scss";

const Overview = ({ flag: flagUrl, name, population, region, capital }) => {
  return (
    <div className="overview">
      <img src={flagUrl} alt="Country name" className="overview__flag" />
      <div className="overview__details">
        <h2 className="overview__title">{name}</h2>
        <ul className="overview__details-list">
          <li className="overview__details-listItem">
            <span>Population: </span> {population}
          </li>
          <li className="overview__details-listItem">
            <span>Region: </span> {region}
          </li>
          <li className="overview__details-listItem">
            <span>Capital: </span> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

Overview.defaultProps = {
  flagUrl: "https://restcountries.eu/data/gbr.svg",
  name: "Country Name",
  population: 0,
  region: "Region",
  capital: "Capital",
};

export default Overview;
