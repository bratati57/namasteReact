import React from 'react'
import ResCards from "./ResCards"
import RES_DATA from "../utils/mockData"
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer"
function Body() {
  const [resData, setResData]= useState(RES_DATA)
  const [filteredData, setFilteredData]= useState(RES_DATA)//can later be changed when fetch works
  const [searchValue, setSearchValue]= useState("")
// useEffect(()=>{getData()},[]
// )
// const getData=async()=>{
//   const data=await fetch("https://jsfiddle.net/Ln47kyt2/3/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// const datajson =await data.json()
// console.log(datajson)
// }
  return (
  filteredData.length===0? <Shimmer/>:
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search a restuarant or a dish"
          value={searchValue}
          onChange={(e)=>{setSearchValue(e.target.value)}}
        />
            <button className="btn" onClick={()=>{setFilteredData(resData.filter((res)=>(res.data.name.toLowerCase().includes(searchValue.toLowerCase()))))}}>Search</button>
{/* HIGH RATED RESTUARANT */}
   
         <button  className="btn"  onClick={()=>{setFilteredData(resData.filter((res)=>res.data.avgRating>=4))}} >High Rated Restuarant</button>
      </div>
  
      <div className="card-container">
        {filteredData.map((res) => {
          const restData = res.data;
          return (
            <ResCards
              key={restData?.id}
              resName={restData?.name}
              cuisines={restData?.cuisines}
              costForTwo={restData?.costForTwoString}
              avgRating={restData?.avgRating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body