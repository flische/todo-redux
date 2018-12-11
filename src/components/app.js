import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddItem from './add_item';
import ItemDetails from './item_details';

const App = () => (
        <div className="container">
            <Route exact path="/" component={List}/>
            <Route path="/add-item" component={AddItem}/>
            <Route path="/item-details" component={ItemDetails}/>
        </div>
);

export default App;