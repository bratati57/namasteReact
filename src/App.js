import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestuarantMenu from "./components/RestuarantMenu";
import Footer from "./components/Footer"
import FallbackUI from "./components/FallbackUI";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
const Grocery= lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
//appRouter  a router configuration
const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
             path:"/",
            element:<Body/>,
        },
           {
             path:"/about",
            element:<About/>,
        },
        {
             path:"/contact",
            element:<Contact/>,
        },
        {
             path:"/restuarants/:resId",
            element:<RestuarantMenu/>,
        },
         {
             path:"/grocery",
            element:<Suspense fallback={<h1>Loading~~~~~</h1>}><Grocery/></Suspense>,
        }
        
    ],
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
