import React from 'react'
import ReactDOM from 'react-dom'

const HelloStyle = { color: "red" };

const Hello = () => (
    <div style={ HelloStyle }>
        Hello-WA!
    </div>
);

const App = () => (
    <div>
        <Hello />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();