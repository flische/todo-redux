import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';

const App = () => (
    <div>
        <div className="container">
            <h1 className="center">Redux To Do</h1>
            <Route exact path="/" component={List}/>
        </div>
    </div>
);

export default App;
