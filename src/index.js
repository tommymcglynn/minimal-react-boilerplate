import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from "./MyComponent";

const title = 'My Minimal React Webpack Babel Setup!!!';

const root = (
    <div>
        <div>{title}</div>
        <MyComponent/>
    </div>
);

ReactDOM.render(
root,
document.getElementById('app')
);