import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = () => {
  return (
    <form className="flex items-center self-center gap-4 w-full mb-4">
      <FaSearch />
      <input
        className="w-full p-2"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchFilter;
