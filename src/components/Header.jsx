import React, { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import {useSelector} from "react-redux"
function Header() {
  const [btnContent, setBtnContent] = useState("Logout");
  // const [isLoggedIn, setIsLoggedIn]= useState("true")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext)
      const cartItems=useSelector((state)=>state.cart.items)
  return (
    <div className=" bg-emerald-100 flex justify-between px-2.5 shadow-xl mb-4">
      <div>
        <img className="w-26 h-26" alt="app-log" src={LOGO_URL}></img>
      </div>
      <div className="mt-5">
        {" "}
        <span className="text-4xl font-bold italic text-red-800">the </span>
        <span className="text-5xl font-extrabold text-rose-700">PeTooK</span>
      </div>
      <div className="flex my-7">
        <ul className="flex justify-evenly align-middle text-nowrap">
          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950 font-medium">{onlineStatus ? "ONLINE" : "OFFLINE"}</li>
          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950 font-medium">{loggedInUser}</li>

          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950  font-medium">
            <Link to="/">HOME</Link>
          </li>
          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950  font-medium">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950 font-medium">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950  font-medium">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950  font-medium">
            <Link to="/cart">CART-({cartItems.length})</Link>
          </li>
        </ul>
        <button className="bg-emerald-200 rounded-lg m-1 p-2 text-blue-950  font-medium"
          onClick={() =>
            setBtnContent(btnContent === "Logout" ? "Login" : "Logout")
          }
        >
          {btnContent}
        </button>
      </div>
    </div>
  );
}

export default Header;
