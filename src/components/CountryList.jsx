import React from "react";
import { useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import Country from "./Country";

const CountryList = () => {
  const { shownCountries, regions } = useContext(CountriesContext);
  return (
    <div className="flex flex-col md:flex-row md:justify-around flex-wrap justify-center items-center gap-12">
      {shownCountries.map((country) => {
        return <Country key={country.name.common} country={country} />;
      })}
    </div>
  );
};

export default CountryList;
