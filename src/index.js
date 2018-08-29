import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxPromise from './middleware/redux_promise';
import think from './middleware/think';

import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(think, reduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
