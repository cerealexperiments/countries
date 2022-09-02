import React, { useEffect } from "react";
import { useContext, useState } from "react";
import CountriesContext from "../context/CountriesContext";

const RegionFilter = () => {
  const { regions, setShownCountries } = useContext(CountriesContext);
  const [selectedRegion, setSelectedRegion] = useState("");
  console.log(selectedRegion);
  useEffect(() => {
    setShownCountries((prev) => {
      if (selectedRegion === "") {
        return prev;
      }
      return prev.filter((country) => {
        return country.region === selectedRegion;
      });
    });
  }, [selectedRegion]);
  return (
    <select
      onChange={async (e) => {
        setSelectedRegion(e.target.value);
      }}
      className="w-48 py-2 px-4 focus:outline-none shadow-md"
    >
      <option value="">Any region</option>
      {regions.map((region) => {
        return (
          <option key={region} value={region}>
            {region}
          </option>
        );
      })}
    </select>
  );
};

export default RegionFilter;
