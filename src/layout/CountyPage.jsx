import React from 'react'

const CountyPage = (props) => {
    const data = props.data

    let native = data.nameNative

    let listNative = []
    for (const key in native) {
       // console.log(native[key].official);
        listNative.push(key)
    }
    ///console.log("Array de valores del objeto", listNative);
    /* console.log("Sin entrar en el objeto", data.nameNative);
    console.log("Sin especificar",data.nameNative[`${listNative[0]}`]);*/
    console.log("Especificando oficial",data.nameNative[listNative[0]].official); 
  return (
    <>
    <div className='page-title'>
        <h1>{data.name.official}</h1>
        <h2>{data.nameNative[listNative[0]].official}</h2>
        
     
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