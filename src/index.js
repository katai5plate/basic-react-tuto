import React from 'react'
import ReactDOM from 'react-dom'

const items = [
    { name: "aaa", color: "black" },
    { name: "bbb", color: "brown" },
    { name: "ccc", color: "red" },
    { name: "ddd", color: "blue" },
    { name: "eee", color: "green" },
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