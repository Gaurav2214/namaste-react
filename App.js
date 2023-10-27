
const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement("div", {id:"child1"},
    [React.createElement("h1",{id:"heading"},"I'm an h1 tag."), 
    React.createElement("h2",{id:"heading2"}, "I'm an h2 tag.")]),

    React.createElement("div", {id:"child2"},
        [React.createElement("h1",{id:"heading"},"I'm an h1 tag."), 
        React.createElement("h2",{id:"heading2"}, "I'm an h2 tag.")])]
    )

const heading = React.createElement(
    "h1", 
    {
        id:"heading",
        className:"head_main",
    }, 
    "Hello world from React"
    );

    console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);