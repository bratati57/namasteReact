import React from 'react'
import { RES_IMG_URL,IMG_CDN_URL} from "../utils/constants"
function ResCards({ resName, cuisines, costForTwo, avgRating, cloudinaryImageI }){
  return (
    <div  className="res-card">
      <div>
        <img
          className="res-img"
          // src={`${IMG_CDN_URL} + ${cloudinaryImageI}`}
          src={RES_IMG_URL}
          alt="restuarant logo"
        />
      </div>
      <div className="res-details">
        <h3>{resName}</h3>
        {/* <h4>{cuisines.join(", ")}</h4> */}
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
    </div>
  );
};

export default ResCards