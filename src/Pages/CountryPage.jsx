import React from "react";
import { Link } from "@reach/router";
import { FiArrowLeft } from "react-icons/fi";

import Country from "../Components/Country/Country";
const CountryPage = ({ countries, code }) => (
  <section className="countryPage">
    <div className="container">
      <div className="row">
        <div className="col py-5">
          <Link to="/" className="back-btn">
            <FiArrowLeft /> <span>Back</span>
          </Link>
        </div>
      </div>
    </div>
    <Country code={code} countries={countries} />
  </section>
);

export default CountryPage;
