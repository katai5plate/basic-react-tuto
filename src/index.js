import React from 'react'
import ReactDOM from 'react-dom'

const HelloStyle = {
    "color": "red",
    "background-color": "black",
    "font-size": "48px"
};

const Hello = ({ name, color, extention }) => (
    <div style={HelloStyle}>
        <p style={{ color }}>
            Hello, {name}{("!".repeat(extention))}
        </p>
    </div>
);

const Aaa = ({ count }) => (
    <div>
        {("a".repeat(count))}
    </div>
);

const App = () => (
    <div>
        <Hello name="WA" color="yellowgreen" extention="1" />
        <Hello name="WA" color="yellow" extention="3" />
        <Hello name="WA" color="red" extention="5" />
        <Aaa count="50"/>
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();