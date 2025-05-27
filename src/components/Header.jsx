import React from 'react'
import {LOGO_URL} from "../utils/constants"

function Header() {
  return (
 <div className="header">
      <div>
        <img
          className="logo-style"
          alt="app-log"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="title"> <span className="title-style1">the </span>
      <span className="title-style2">PeTooK</span></div>
      <div className="navbar-style">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header