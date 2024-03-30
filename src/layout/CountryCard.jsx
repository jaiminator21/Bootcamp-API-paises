import React, { useState } from 'react'

const CountryCard = (props) => {
    const [language, setLanguage] = useState([])
    const data = props.data
    //console.log(data.lang);
    const coin = data.coin
  return (
   <>
        <div className='container-card'>
            <div className='container-card-upper'>
             <img src={data.flag.svg} alt={data.flag.alt} /> 
                
            </div>
            <div className='divider'></div>
            <div className='container-card-lower'>
                <div className='container-country-name'>
                    <div className='container-country-stat'>
                        <h1>{data.name.official}</h1>
                    </div>
                </div>
                <div className='container-country-extra'>
                    <div className='container-country-stat'>
                        <h2><span>Languages:</span> {data.lang}</h2>
                    </div>
                    <div className='container-country-stat'>
                        <h2><span>Currency:</span> {data.coin}</h2>
                    </div>
                    <div className='container-country-stat'>
                        <h2><span>Continent:</span> {data.cont}</h2>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default CountryCard