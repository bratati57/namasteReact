import React from "react"
import ReactDOM from 'react-dom/client';


const JSXheading=()=> <h2 className="heading">Namaste React using JSX</h2>
const title=<h3>Bratati Ghosh</h3>

const MyFirstComponent=()=>{
    return <div>
             <h1>Chapter 3</h1>
             <h2>Three different ways to render a functional component are: (Please check App.js)</h2>
        <JSXheading/>
        {JSXheading()}
        <JSXheading></JSXheading>
        {title}
   
    </div>
}
// JSXheading converted to React.createElement using Babel which is then converted to React element which is a JS object and then using render method it is converted to HTML element and endered into the browser
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MyFirstComponent/>)