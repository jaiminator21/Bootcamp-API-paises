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
            <div className='container-card-lower'>
                <div className='container-country-stat'>
                    <h1>{data.name.official}</h1>
                </div>
                <div className='container-country-stat'>
                   <h1>{data.lang}</h1>
                </div>
                <div className='container-country-stat'>
                   <h1>{data.coin}</h1>
                </div>
                <div className='container-country-stat'>
                   <h1>{data.cont}</h1>
                </div>
            </div>
        </div>
   </>
  )
}

export default CountryCard