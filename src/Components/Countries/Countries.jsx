import React from "react";
import "./Countries.scss";

import Overview from "../Overview/Overview";
const Countries = ({ countries }) => {
  return (
    <section className="countries">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="countries__grid">
              {countries.map((country) => (
                <Overview
                  name={country.name}
                  flag={country.flag}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                  key={country.alpha3Code}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
