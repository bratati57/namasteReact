
// import {RES_IMG_URL, RES_COVER_PHOTO_URL} from "../utils/constants"
function ResCards({ resName, cuisines, costForTwo, avgRating, cloudinaryImageId }){
  return (
    <div  className="w-80 rounded-xl m-4 border-2 border-gray-50  hover:border-gray-200 bg-gray-50 hover:bg-gray-200">
        <img
          className="rounded-xl"
          src={cloudinaryImageId}
          alt="restuarant logo"
        />
      <div className="pl-1.5">
        <h3 className="text-lg font-bold">{resName}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4  className="text-sm">{costForTwo}</h4>
        <h4  className="text-sm">{avgRating}</h4>
      </div>
    </div>
  );
};

export default ResCards