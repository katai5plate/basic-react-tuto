import React from 'react'
import ReactDOM from 'react-dom'

const MyButton = () => (
    <div>
        <button>Click Me!</button>
    </div>
);

const App = () => (
    <div>
        <MyButton />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();