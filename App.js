const parent = React.createElement("div", { id: "parent", key: "lala" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", { id: "heading1" }, "I am a h1 tag"),
        React.createElement("h2", { id: "heading2" }, "I am a h2 tag")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "heading3" }, "I am a h1 tag"),
        React.createElement("h2", { id: "heading4" }, "I am a h2 tag")])])
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)