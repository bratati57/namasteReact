import React, { useState, useEffect, useContext } from "react";
import { RES_LIST_URL } from "../utils/constants";
import ResCards from "./ResCards";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
function Body() {
  const [filteredData, setFilteredData] = useState([]); //can later be changed when fetch works
  const [searchValue, setSearchValue] = useState("");
  const [resData, setResData] = useState([]);
  // const [user, setUser] =useState("")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUser}= useContext(UserContext)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(RES_LIST_URL);
    const resjson = await data.json();
    setResData(
      resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // return resData;
  };
  if (onlineStatus === false)
    return (
      <h1>Hello! Looks like there is an issue with your internet connection</h1>
    );
  if (resData.length === 0) return <Shimmer />;
  return (
    <div className="p-3">
      <div className="my-1.5">
        <input
          className="mr-1.5 p-2 border border-cyan-200 rounded-lg"
          type="text"
          placeholder="Search a restuarant/dish"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="p-2 mr-4 bg-cyan-100 rounded-lg cursor-pointer"
          onClick={() => {
            setFilteredData(
              resData.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        {/* HIGH RATED RESTUARANT */}

        <button
          className="p-2 m-1 bg-blue-100 rounded-lg cursor-pointer"
          onClick={() => {
            setFilteredData(resData.filter((res) => res?.info?.avgRating >= 4));
          }}
        >
          High Rated Restuarant
        </button>
    
         <input className="ml-1.5 p-2 border border-cyan-200 rounded-lg"
          type="text" value={loggedInUser} onChange={(e)=>{setUser(e.target.value)}}/>
          <span className="font-normal px-2">{loggedInUser}</span>
      </div>

      <div className="flex p-4">
        {console.log(filteredData)}
        {filteredData.map((res) => {
          const restData = res?.info;
          // console.log("single restuarant", res?.info.id);
          return (
            <Link to={"/restuarants/" + restData?.id} key={restData?.id}>
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
}

export default Body;
