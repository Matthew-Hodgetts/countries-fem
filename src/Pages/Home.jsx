import React from "react";
import Search from "../Components/Search/Search";
import Countries from "../Components/Countries/Countries";

const Home = ({
  regionFilter,
  filteredText,
  countries,
  setFilteredText,
  setRegionFilter,
}) => {
  return (
    <div className="home">
      <Search
        onSearch={setFilteredText}
        currentFilter={regionFilter}
        onRegionFilter={setRegionFilter}
      />
      {filteredText.length > 0 || regionFilter.length > 0 ? (
        <Countries
          countries={countries.filter((country) => {
            if (regionFilter.length > 0) {
              // Filter the region too
              return (
                country.name
                  .toLowerCase()
                  .includes(filteredText.toLowerCase()) &&
                country.region === regionFilter
              );
            } else {
              return country.name
                .toLowerCase()
                .includes(filteredText.toLowerCase());
            }
          })}
        />
      ) : (
        <Countries countries={countries} />
      )}
    </div>
  );
};

export default Home;
