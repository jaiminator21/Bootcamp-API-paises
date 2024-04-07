import { useState, useEffect } from 'react'
import axios from "axios";

const CountyPage = (props) => {


    const [time, setTime] = useState("")

    const data = props.data

    let native = data.nameNative

    let listNative = []
    for (const key in native) {
       // console.log(native[key].official);
        listNative.push(key)
    }

    useEffect(()=>{
        const url = `http://worldtimeapi.org/api/timezone/${data.cont}/${data.name.common}/${data.capital}`
        axios.get(url).then((res)=>{
        console.log("TimeZone",res);
        
       
          
      })
      },[])


    


  return (
    <>
    <div className='izquierda'>    
        <span className="back-button" onClick={() => history.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5h5.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
    </span>

    </div>

    <div className='page-title'>
        <h1>{data.name.official}</h1>
        <h5>{data.nameNative[listNative[0]].official}</h5>
    </div>
    
    <div className='container-center'>
        <div className='container-half'>
            <div className='flag-div'>
                <img src={data.flag.svg} alt={data.flag.alt} /> 
                <p>{data.flag.alt}</p>
            </div>
    
      
        </div>
        <div className='container-half'>
            <div className='country-info'>
                <div className='country-stat'>
                    <h5><span>Common name:</span> {data.name.common}</h5>
                </div>
                    <div className='country-stat'>
                        <h5><span>Capital:</span> {data.capital}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Languages:</span> {data.lang}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Currency:</span> {data.coin}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Location:</span> {data.subregion}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Borders:</span> {data.borders.join(" ,")}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Continent:</span> {data.cont}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Time zone:</span> {data.time}</h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Link to google maps:</span> <a href={data.maps["googleMaps"]}>Click</a></h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>Link to steet maps:</span> <a href={data.maps["openStreetMaps"]}>Click</a></h5>
                    </div>
                    <div className='country-stat'>
                        <h5><span>{time}</span></h5>
                    </div>
            </div>
         
        </div>
    </div>

    </>
  )
}

export default CountyPage