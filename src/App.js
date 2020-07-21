import React, { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Countries from "./Components/Countries/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredText, setFilteredText] = useState("");

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
      <Search onSearch={setFilteredText} />
      {filteredText.length > 0 ? (
        <Countries
          countries={countries.filter((country) =>
            country.name.toLowerCase().includes(filteredText.toLowerCase())
          )}
        />
      ) : (
        <Countries countries={countries} />
      )}
    </div>
  );
};

export default App;
