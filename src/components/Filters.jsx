import React from "react";
import RegionFilter from "./RegionFilter";
import SearchFilter from "./SearchFilter";

const Filters = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 md:flex-row md:justify-between md:items-center mb-8">
      <SearchFilter />
      <RegionFilter />
    </div>
  );
};

export default Filters;
