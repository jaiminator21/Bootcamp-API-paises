import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryCard from './CountryCard'

const Country = () => {

    const [country, setCountry] = useState([])

    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/all`
        axios.get(url).then((res)=>{
            console.log(res.data);
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
        

    },[])

    

  return (
   <>
        <div className='container-countries'>
            {country.map((countries) => (<CountryCard  key = {countries.name} data = {countries}/>))}
        </div>   
   </>
  )
}

export default Country