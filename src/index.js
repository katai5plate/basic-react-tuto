import React from 'react'
import ReactDOM from 'react-dom'

const HelloStyle = {
    "color": "red",
    "background-color": "black",
    "font-size": "48px"
};

const Hello = () => (
    <div style={ HelloStyle }>
        Hello!
    </div>
);
const World = () => (
    <div style={ HelloStyle }>
        WA!
    </div>
);

const App = () => (
    <div>
        <Hello />
        <World />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();