import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const [btnContent, setBtnContent] = useState("Logout");
  // const [isLoggedIn, setIsLoggedIn]= useState("true")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="logo-style" alt="app-log" src={LOGO_URL}></img>
      </div>
      <div className="title">
        {" "}
        <span className="title-style1">the </span>
        <span className="title-style2">PeTooK</span>
      </div>
      <div className="navbar-style">
        <ul>
          <li>Online~~ {onlineStatus ? "ONLINE" : "OFFLINE"}</li>

          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
        <button
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
