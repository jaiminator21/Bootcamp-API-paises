import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const CountryOld = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const url = name !== "" ? `https://restcountries.com/v3.1/name/${name}` : "https://restcountries.com/v3.1/all";
    axios.get(url)
      .then((res) => {
        if (res.data.length > 0) {
         // //console.log(res.data);
          const filterData = res.data.map((country) => ({
            name: country.name,
            flag: country.flags,
            pop: country.population,
            lang: Object.values(country.languages || {}).join(", "),
            coin: Object.values(country.currencies || {})
              .map((currency) => currency.name)
              .join(", "),
            cont: country.continents,
          }));
          setCountry(filterData);
        } else {
          setCountry([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setCountry([]);
      });
  }, [name]);

  return (
    <>
      <div>
        <div className="main">
          <div className="search">
            <h1>Paises</h1>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name.toLowerCase()}
              placeholder="Buscar por nombre"
            />
          </div>
          <div className="container-countries">
            {country.map((countries) => (
              <CountryCard key={countries.name} data={countries} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;






