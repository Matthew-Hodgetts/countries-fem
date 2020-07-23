import React, { useEffect, useState } from "react";
import "./Country.scss";

const Country = ({ code }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [code]);

  if (country) {
    return (
      <div className="country">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={country.flag}
                alt={country.name}
                className="country__flag"
              />
            </div>
            <div className="col-lg-6 p-5">
              <div className="row">
                <div className="col">
                  <h2 className="country__name mb-3">{country.name}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="country__details">
                    <li>
                      <span className="fw-800">Native name:</span>{" "}
                      {country.nativeName}
                    </li>
                    <li>
                      <span className="fw-800">Population:</span>{" "}
                      {country.population}
                    </li>
                    <li>
                      <span className="fw-800">Region:</span> {country.region}
                    </li>
                    <li>
                      <span className="fw-800">Sub-region:</span>{" "}
                      {country.subregion}
                    </li>
                    <li>
                      <span className="fw-800">Capital:</span> {country.capital}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="country__details">
                    <li>
                      <span className="fw-800">Top Level Domain: </span>
                      {country.topLevelDomain.map((domain, index) => (
                        <span key={domain}>{(index ? ", " : "") + domain}</span>
                      ))}
                    </li>
                    <li>
                      <span className="fw-800">Currencies: </span>
                      {country.currencies.map((currency, index) => (
                        <span key={currency.name}>
                          {(index ? ", " : "") + currency.name}
                        </span>
                      ))}
                    </li>
                    <li>
                      <span className="fw-800">Languages: </span>
                      {country.languages.map((language, index) => (
                        <span key={language.name}>
                          {(index ? ", " : "") + language.name}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="country">Loading...</div>;
};

export default Country;
