import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const SearchFilter = () => {
  const [filterValue, setFilterValue] = useState("");
  console.log(filterValue);
  const { countries, setShownCountries } = useContext(CountriesContext);
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    setShownCountries(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      })
    );
  }, [filterValue]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center self-center gap-4 w-full shadow-md"
    >
      <FaSearch />
      <input
        value={filterValue}
        onChange={(e) => handleChange(e)}
        className="w-full p-2 focus:outline-none"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchFilter;
