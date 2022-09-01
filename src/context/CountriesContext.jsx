import axios from "axios";
import { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
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
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesContext;
