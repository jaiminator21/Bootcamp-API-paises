import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [continent, setContinent] = useState("");

  useEffect(() => {
    const url = name !== "" ? `https://restcountries.com/v3.1/name/${name}` : `https://restcountries.com/v3.1/all`;
    axios.get(url)
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
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
          setCountries(filterData);
        } else {
          setCountries([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setCountries([]);
      });
  }, [name, continent]);

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


            <select className="selector" value={continent}
              onChange={(event) => {
                setContinent(event.target.value);
              }}
            >
              <option value="">Todos los continentes</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          
          <div className="container-countries">
            {countries.map((country) => (
              <CountryCard key={country.name} data={country} />
            ))}
          </div>
          <div className="mainSelector">
        {continent !== "" && (
          <CountryCard
            continents={countries.find((countries) => countries.name === continent)}
          />
        )}
      </div>
        </div>
      </div>
    </>
  );
};

export default Country;
