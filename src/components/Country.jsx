import React from "react";

const Country = ({ country }) => {
  return (
    <div className="flex flex-col items-start shadow-md shadow-slate-400 max-w-[320px] min-h-[401px] max-h-[420px]">
      <img
        className="object-fill h-[213px] self-center w-[320px]"
        src={country.flags.png}
        alt=""
      />
      <div className="px-4 py-8">
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
};

export default Country;
