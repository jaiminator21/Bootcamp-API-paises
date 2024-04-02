import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import SearchFailed from "./SearchFailed";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [continent, setContinent] = useState("");

  const [endpoint, setEndpoint] = useState()

let hasShownErrorAlert = false; 
  
  useEffect(() => {
    const url = name !== "" ?`https://restcountries.com/v3.1/name/${name}` : continent !== "" ?`https://restcountries.com/v3.1/region/${continent}` :`https://restcountries.com/v3.1/all`;
   /*   Funciona de la siguente manera:
        Esto prioriza buscar por nombre, lo primero que hace es comprobar si nombre esta vacio. Si no lo esta, te pone la url de name
        Si esta vacio, pasa a hacer la siguiente comprobación y sucede lo mismo, si no esta vacio, te busca por el continent seleccionado
        Si contient esta vacio te coge la url de all. 
        Lo que se ha hecho aqui es concatenar dos operadores ternarios de forma seguida
   */
    axios.get(url)
      .then((res) => {
        if (res.data.length > 0) {
       //   console.log(res.data);
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
          hasShownErrorAlert = false

          //console.log(filterData);
        } else {
          setCountries([])
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setCountries([])
        if (!hasShownErrorAlert) {
          alert(`El pais que busca no existe \nCodigo de error ${error} \nPusle ESCAPE para cerrar el error`);
          hasShownErrorAlert = true;
        }
      });
  }, [name, continent]);

  return (
    <>
  
        <div className="sub-header">
          <div className="page-title">
            <h1>Paises</h1>
          </div>
          <div className="container-filter">
            <div className="search-box">
              <input
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
                placeholder="Buscar por nombre"/>
            </div>
   
            <div className="drop-selector">
            <select className="selector" value={continent}
                onChange={(event) => {
                  setContinent(event.target.value);
                }}
              >
                <option value="">Todos los continentes</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </div>
      </div>
   
      <div className="container-countries">
            {countries.map((country) => (
              <CountryCard key={country.name} data={country} />
            ))}
          </div>
      
    </>
  );
};

export default Country;
