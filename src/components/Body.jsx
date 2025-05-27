import React from 'react'
import ResCards from "./ResCards"
import RES_DATA from "../utils/mockData"
import {useState} from "react"
function Body() {
  const [resData, setResData]= useState(RES_DATA)
  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search a restuarant or a dish"
        />
        <button onClick={()=>{setResData(resData.filter((res)=>res.data.avgRating>=4))}} className="search-button">Filter restuarant</button>
      </div>
      <div className="card-container">
        {resData.map((res) => {
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