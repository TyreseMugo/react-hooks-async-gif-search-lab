import React from 'react';
 function GifList({image}){

  return(
    <ul>

      {image.map((url,index)=>{
                    return <li key={index}>
                            <img src={url} alt="gif"/>
                        </li>
                })}


      </ul>
  )
 }
  export default GifList