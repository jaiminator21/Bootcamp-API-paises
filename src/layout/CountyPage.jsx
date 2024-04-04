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
    <div className='izquierda'>    
        <span className="back-button" onClick={() => history.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
    </span>

    </div>

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