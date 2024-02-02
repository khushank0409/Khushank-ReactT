{/* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
        </div>
    </div> */}

    const parent=React.createElement("div", {id: "parent"},
    React.createElement("div" , {id:"child"},[
    React.createElement("h1",{},"i am h1 tag"),    // nested structure
    React.createElement("h1",{},"i am h2 tag")]
    )
    
    );

console.log(parent);



// const heading= React.createElement("h1", {}, "Hello World from react");
const root= ReactDOM.createRoot(document.getElementById("root"));
                                              // hello world from react
root.render(parent);