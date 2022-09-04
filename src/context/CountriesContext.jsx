import axios from "axios";
import { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = ["Europe", "Americas", "Africa", "Asia", "Oceania"];
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setShownCountries(response.data);
    });
  }, []);
  useEffect(() => {
    setShownCountries(
      countries.filter((country) => {
        if (selectedRegion === "") {
          return country.name.common
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }
        return (
          country.name.common
            .toLowerCase()
            .includes(filterValue.toLowerCase()) &&
          country.region === selectedRegion
        );
      })
    );
  }, [filterValue, selectedRegion]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        shownCountries,
        setShownCountries,
        regions,
        setFilterValue,
        setSelectedRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesContext;
