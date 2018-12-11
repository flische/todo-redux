import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddItem from './add_item';
import ItemDetails from './item_details';
import ItemView from './item_view';

const App = () => (
        <div className="container">
            <Route exact path="/" component={List}/>
            <Route path="/add-item" component={AddItem}/>
            <Route path="/item-details/:item_id" component={ItemDetails}/>
            <Route path="/item/:id" component={ItemView}/>
        </div>
);

export default App;