import axios from "axios";
import { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);
  const regions = ["Europe", "Americas", "Africa", "Asia", "Oceania"];
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setShownCountries(response.data);
    });
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        shownCountries,
        setShownCountries,
        regions,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesContext;
