import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from "axios";
import CountyPage from "./CountyPage";

const CountryDetail = () => {
    const params = useParams()
    const { state } = useLocation()
    const [countryData, setCountryData] = useState([])

    useEffect(()=>{
      const url = `https://restcountries.com/v3.1/name/${params.name}`
      axios.get(url).then((res)=>{
        console.log(res.data);
        const filterData = res.data.map((country)=> ({
            name: country.name,
            nameNative: country.name.nativeName,
            flag: country.flags,
            pop: country.population,
            capital: country.capital,
            lang: Object.values(country.languages || {}).join(', '),
            coin: Object.values(country.currencies || {})
              .map((currency) => currency.name)
              .join(', '),
            cont: country.continents,
            subregion: country.subregion,
            time: country.timezones,
            maps: Object.values(country.maps || {}).join(', '),
            borders: country.borders

        }))
        setCountryData(filterData)
        console.log("Paises",filterData[0]);
    })
    },[])




  return (
    <>

        {countryData.map((country) => (<CountyPage key={country.name.common} data={country}/>))}
    
    </>
  )
}

export default CountryDetail