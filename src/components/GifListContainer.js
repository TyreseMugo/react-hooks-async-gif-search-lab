import React from "react";
import { useState,useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
  const [isGifs,setIsGifs]=useState([])
  const [isSearching, setIsSearching] = useState(false);
  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=7XhHOIonE0SScHmsknK9aGrD2njt8bZs&rating=g`)
    .then((res)=>res.json())
    .then(data=>{
       const theData = data.data
       console.log(theData)
      const topThree = theData.slice(0,4)

      setIsGifs(topThree.map((urls)=>urls.images.original.url))


    })

  },[])
  function handleSearch(searchInput){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=7XhHOIonE0SScHmsknK9aGrD2njt8bZs&rating=g`)
    .then(res => res.json())
    .then((data)=>{
      const searchedUrls = data.data.map((gif)=> gif.images.original.url)
      setIsGifs(searchedUrls)
      setIsSearching(true);
  })
  }
  return (
    <div>
      <GifSearch handleSearch={handleSearch}/>
      {/* {isSearching ? <GifList image={isGifs} /> : null} */}
      <GifList image={isGifs}/>

    </div>
  )
}
export default GifListContainer