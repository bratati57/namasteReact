import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout"
/**
 *
 * Header
 *  -Logo Section
 *  -navbar-Home, Navbar, Cart
 * Body
 *  -Search bar and a search button
 *  -Card Container and Cards
 * Footer
 *  -Copyright
 *  -Location/ address
 *  -email address
 */


// JSXheading converted to React.createElement using Babel which is then converted to React element which is a JS object and then using render method it is converted to HTML element and endered into the browser
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
