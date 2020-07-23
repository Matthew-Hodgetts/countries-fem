import React from "react";
import "./Overview.scss";

import { Link } from "@reach/router";

const Overview = ({
  flag: flagUrl,
  name,
  population,
  region,
  capital,
  alpha3Code,
}) => {
  return (
    <Link to={`country/${alpha3Code}`} className="overview">
      <img src={flagUrl} alt="Country name" className="overview__flag" />
      <div className="overview__details">
        <h2 className="overview__title">{name}</h2>
        <ul className="overview__details-list">
          <li className="overview__details-listItem">
            <span className="fw-600">Population: </span>{" "}
            {population.toLocaleString()}
          </li>
          <li className="overview__details-listItem">
            <span className="fw-600">Region: </span> {region}
          </li>
          <li className="overview__details-listItem">
            <span className="fw-600">Capital: </span> {capital}
          </li>
        </ul>
      </div>
    </Link>
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
