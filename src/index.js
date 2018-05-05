import React from 'react'
import ReactDOM from 'react-dom'

const MyButton = () => (
    <div>
        <button onClick={() => alert("HIT!")}>
            Click Me!
        </button>
    </div>
);

const MyBox = () => (
    <div>
        <input type="text" />
    </div>
);

const App = () => (
    <div>
        <MyBox />
        <MyButton />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();