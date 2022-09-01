import React from "react";
import { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const CountryList = () => {
  const { shownCountries } = useContext(CountriesContext);
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
      {shownCountries.map((country) => {
        return (
          <div className="flex flex-col items-center shadow-md max-w-[320px]">
            <img
              className="object-fill min-h-[213px]"
              src={country.flags.png}
              alt=""
            />
            <div className="px-4 py-8 mr-24">
              <p className="font-bold text-lg mb-2">{country.name.common}</p>
              <p className="mb-2">
                <span className="font-bold">Population: </span>
                <span>{country.population}</span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Region: </span>
                <span>{country.region}</span>
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                <span>{country.capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
