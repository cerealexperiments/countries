import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const SearchFilter = () => {
  const { filterValue, setFilterValue } = useContext(CountriesContext);
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };
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
