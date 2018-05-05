import React from 'react'
import ReactDOM from 'react-dom'

const randExt = ()=>Math.random()*10;
const items = [
    [
        { name: "aaa", color: "black", ext: randExt() },
        { name: "bbb", color: "brown", ext: randExt() },
        { name: "ccc", color: "red", ext: randExt() },
        { name: "ddd", color: "blue", ext: randExt() },
        { name: "eee", color: "green", ext: randExt() },
    ],
    [
        { name: "aaa", color: "gray", ext: randExt() },
        { name: "bbb", color: "aqua", ext: randExt() },
        { name: "ccc", color: "orange", ext: randExt() },
        { name: "ddd", color: "purple", ext: randExt() },
        { name: "eee", color: "lightgray", ext: randExt() },
    ],
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
            items.map((item) => {
                return item.map((i)=>(
                    <Hello name={i.name} color={i.color} ext={i.ext}/>
                ))
            })
        }
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();