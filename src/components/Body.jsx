import React, { useState, useEffect, useContext } from "react";
import { RES_LIST_URL } from "../utils/constants";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
function Body() {
  const [filteredData, setFilteredData] = useState([]); //can later be changed when fetch works
  const [searchValue, setSearchValue] = useState("");
  const [resData, setResData] = useState([]);
  // const [user, setUser] =useState("")
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUser } = useContext(UserContext);
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
    // console.log(
    //   resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    // return resData;
  };
  if (onlineStatus === false)
    return (
      <h1 className="font-bold w-6/12 p-4 m-auto text-lg">Hello! Looks like there is an issue with your internet connection</h1>
    );
  if (resData.length === 0) return <Shimmer />;
  return (
    <div className="p-4  overflow-auto">
      <div className="my-1.5">
        <input
          className="mr-1.5 p-2 border border-cyan-200 rounded-lg"
          type="text"
          placeholder="Search a restuarant/dish"
          value={searchValue}
          onKeyDown={(e) => {
            if (e.key === "Enter"){
                setFilteredData(
              resData.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
            );
            }
          }}
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

        {/* <input className="ml-1.5 p-2 border border-cyan-200 rounded-lg"
          type="text" value={loggedInUser} onChange={(e)=>{setUser(e.target.value)}}/>
          <span className="font-normal px-2">{loggedInUser}</span> */}
      </div>

      <div className="flex flex-wrap">
        {/* {console.log(filteredData)} */}
        {filteredData.map((res) => {
          const restData = res?.info;
          // console.log("single restuarant", restData?.cloudinaryImageId);
          return (
            <Link to={"/restuarants/" + restData?.id} key={restData?.id}>
              <ResCards
                resName={restData?.name}
                cuisines={restData?.cuisines}
                costForTwo={restData?.costForTwo}
                avgRating={restData?.avgRating}
                cloudinaryImageId={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
