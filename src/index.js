import React from 'react'
import ReactDOM from 'react-dom'

const HelloStyle = {
    "color": "red",
    "background-color": "black",
    "font-size": "48px"
};

const Hello = ({ name }) => (
    <div style={HelloStyle}>
        Hello, {name}
    </div>
);

const App = () => (
    <div>
        <Hello name="WA!" />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();