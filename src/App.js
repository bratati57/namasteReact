import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import FallbackUI from "./components/FallbackUI";

//appRouter  a router configuration
const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    errorElement:<FallbackUI/>
},
{
    path:"/about",
    element:<About/>,
},
{
    path:"/contact",
    element:<Contact/>,
},
])
// JSXheading converted to React.createElement using Babel which is then converted to React element which is a JS object and then using render method it is converted to HTML element and endered into the browser
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
