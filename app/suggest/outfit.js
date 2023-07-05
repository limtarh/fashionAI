'use client'
import { useState } from "react";

function SuggestedOutfit() {

    const [weather, setWeather] = useState("hot");
  
    function toggleWeather() {
      setWeather(prevWeather => (prevWeather === "hot" ? "cold" : "hot"));
    }
  
    const shirt = weather === "hot" ? "./images/blackT.jpeg" : "./images/summerT.jpeg";
  
    return (
    <>
        <img src={shirt} width = {350} height = {500}/>
        
        <button onClick={()=>{toggleWeather()}}>Toggle</button>
        
        
    </>
    );

}

export default SuggestedOutfit;

