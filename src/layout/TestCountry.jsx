import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const TestCountry = () => {

    const [country, setCountry] = useState([])
    const [continent, setContinent] = useState("africa");
    const [name, setName] = useState("");
    const [endpoint, setEndpoint] = useState("region/americas")




    useEffect(() => {
        const url = `https://restcountries.com/v3.1/${endpoint}`
        axios.get(url).then((res)=>{
           // console.log(res.data);
            const filterData = res.data.map((country)=> ({
                name: country.name,
                flag: country.flags,
                pop: country.population,
                lang: Object.values(country.languages || {}).join(', '),
                coin: Object.values(country.currencies || {})
                  .map((currency) => currency.name)
                  .join(', '),
                cont: country.continents
            }))
            setCountry(filterData)
            //console.log("Paises",filterData);
        })
    },[]);


    const changeEndpoint = (ev)=>{
        setName(ev.target.value)
        if(name !== ""){
          
            setEndpoint(`name/${name}`)
            console.log(endpoint);
        }else{
            setEndpoint("all")
            console.log("default endpoint",endpoint);
        }
    }

      
 
  

  return (
   <>
        <div className="search-box">
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value)
                changeEndpoint(event)
              }}
              value={name}
              placeholder="Buscar por nombre"/>
        </div>
        
        <div className='container-countries'>
            {country.map((countries) => (<CountryCard  key = {countries.name} data = {countries}/>))}
        </div>   
   </>
  )
}
export default TestCountry