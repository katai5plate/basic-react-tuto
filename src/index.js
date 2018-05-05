import React from 'react'
import ReactDOM from 'react-dom'

const HelloStyle = {
    "color": "red",
    "background-color": "black",
    "font-size": "48px"
};

const Hello = ({ name, color }) => (
    <div style={HelloStyle}>
        <p style={{ color }}>
            Hello, {name}
        </p>
    </div>
);

const App = () => (
    <div>
        <Hello name="WA!" color="cyan" />
        <Hello name="WA!" color="yellow" />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();