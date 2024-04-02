import React from 'react'

const CountyPage = (props) => {
    const data = props.data

    let native = data.nameNative

    let listNative = []
    for (const key in native) {
        listNative.push(key)
    }
    console.log(data.nameNative[`${listNative[0]}`]);
    console.log(data.nameNative[`${listNative[0].common}`]);
  return (
    <>
    <div className='page-title'>
        <h1>{data.name.official}</h1>
        
     
    </div>
    
    <div className='container-center'>
        <div className='container-half'>
            <div className='flag-div'>
                <img src={data.flag.svg} alt={data.flag.alt} /> 
                <p>{data.flag.alt}</p>
            </div>
    
      
        </div>
        <div className='container-half'>
            <h2>{data.name.common}</h2>
        </div>
    </div>

    </>
  )
}

export default CountyPage