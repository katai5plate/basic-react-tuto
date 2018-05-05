import React from 'react'
import ReactDOM from 'react-dom'

const HelloStyle = {
    "color": "red",
    "background-color": "black",
    "font-size": "48px"
};

const items = [
    { name: "aaa", color: "black" },
    { name: "bbb", color: "brown" },
    { name: "ccc", color: "red" },
    { name: "ddd", color: "blue" },
];

const Hello = ({ name, color }) => (
    <div>
        <p style={{ color }}>
            Hello, {name}!
        </p>
    </div>
);

const App = () => (
    <div>
        {
            items.map((item) => (
                <Hello name={item.name} color={item.color} />
            ))
        }
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();