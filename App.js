import React from "react"
import ReactDOM from 'react-dom/client';
const parent = React.createElement("div", { id: "parent", key: "lala" },
    [React.createElement("div", { id: "child1", key:"12" },
        [React.createElement("h1", { id: "heading1", key:"13"  }, "I am a h1 tag"),
        React.createElement("h2", { id: "heading2", key:"14" }, "I am a h2 tag")]),
    React.createElement("div", { id: "child2", key:"15" },
        [React.createElement("h1", { id: "heading3", key:"16"  }, "I am a h1 tag"),
        React.createElement("h2", { id: "heading4", key:"17" }, "I am a h2 tag")])])
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)