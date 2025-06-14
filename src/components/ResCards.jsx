import React from 'react'
import { RES_IMG_URL} from "../utils/constants"
function ResCards({ resName, cuisines, costForTwo, avgRating, cloudinaryImageI }){
  return (
    <div  className="w-36 mr-2 my-2 p-0.5 border-blue-400">
      <div>
        <img
          className="h-24 w-24"
          // src={`${IMG_CDN_URL} + ${cloudinaryImageI}`}
          src={RES_IMG_URL}
          alt="restuarant logo"
        />
      </div>
      <div className="pl-1.5">
        <h3 className="text-lg font-bold">{resName}</h3>
        {/* <h4>{cuisines.join(", ")}</h4> */}
        <h4  className="text-sm">{costForTwo}</h4>
        <h4  className="text-sm">{avgRating}</h4>
      </div>
    </div>
  );
};

export default ResCards