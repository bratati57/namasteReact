import React,{useState, useEffect}  from 'react'
import ResCards from "./ResCards"
import RES_DATA from "../utils/mockData"
import { RES_LIST_URL} from '../utils/constants'
import Shimmer from "./Shimmer"
import {LOGO_URL} from "../utils/constants"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
function Body() {
  const [resData, setResData]= useState([])
  const [filteredData, setFilteredData]= useState([])//can later be changed when fetch works
  const [searchValue, setSearchValue]= useState("")

useEffect(()=>{getData()},[]
)
const onlineStatus=useOnlineStatus()

   const getData=async()=>{
  const data=await fetch(RES_LIST_URL)
const resjson =await data.json()
setResData(resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredData(resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log(resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
if (onlineStatus===false) return <h1>Hello! Looks like there is an issue with your internet connection</h1>
   if (filteredData.length===0) return <Shimmer/>
  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search a restuarant or a dish"
          value={searchValue}
          onChange={(e)=>{setSearchValue(e.target.value)}}
        />
            <button className="btn" onClick={()=>{setFilteredData(resData.filter((res)=>(res?.info?.name.toLowerCase().includes(searchValue.toLowerCase()))))}}>Search</button>
{/* HIGH RATED RESTUARANT */}
   
         <button  className="btn"  onClick={()=>{setFilteredData(resData.filter((res)=>res?.info?.avgRating>=4))}} >High Rated Restuarant</button>
      </div>
  
      <div className="card-container">
        {filteredData.map((res) => {
          const restData = res?.info;
          console.log("single restuarant", res?.info.id)
          return (
            <Link to={"/restuarants/"+restData?.id}   key={restData?.id}>
                <ResCards
              resName={restData?.name}
              cuisines={restData?.cuisines}
              costForTwo={restData?.costForTwo}
              avgRating={restData?.avgRating}
              cloudinaryImageI={resData?.cloudinaryImageId}
            />
            </Link>
        
          );
        })}
      </div>
    </div>
  );
};

export default Body