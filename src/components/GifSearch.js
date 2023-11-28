import React from "react";
import { useState } from "react";

function GifSearch({handleSearch}){
const [inputValue,setInputValue]=useState("")
  return (
    <>
    <form onSubmit={(e)=>{
                e.preventDefault()
                setInputValue("")
                handleSearch(inputValue)}}>
      <label>Enter Search Term:</label>
      <input 
      type="text" 
      placeholder="search gif" 
      value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)}>
      </input>
      <button>find gifs</button>
    </form>
    </>
  )
}
export default GifSearch;