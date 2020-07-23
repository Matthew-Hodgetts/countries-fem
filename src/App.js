import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import CountryPage from "./Pages/CountryPage";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredText, setFilteredText] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    // Get the countries from the api endpoint
    // and set them equal to the countries array in state
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Home
          path="/"
          countries={countries}
          filteredText={filteredText}
          setFilteredText={setFilteredText}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
        />
        <CountryPage path="country/:code" countries={countries} />
      </Router>
    </div>
  );
};

export default App;
