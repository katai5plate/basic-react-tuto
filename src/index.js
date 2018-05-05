import React from 'react'
import ReactDOM from 'react-dom'

const items = [
    { name: "aaa", color: "black", ext: 1 },
    { name: "bbb", color: "brown", ext: 2 },
    { name: "ccc", color: "red", ext: 4 },
    { name: "ddd", color: "blue", ext: 5 },
    { name: "eee", color: "green", ext: 8 },
];

const Hello = ({ name, color, ext }) => (
    <div>
        <p style={{ color }}>
            Hello, {name}{"!".repeat(ext)}
        </p>
    </div>
);

const App = () => (
    <div>
        {
            items.map((item) => (
                <Hello name={item.name} color={item.color} ext={item.ext}/>
            ))
        }
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();