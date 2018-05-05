import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => (
    <div>Hello-WA!</div>
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