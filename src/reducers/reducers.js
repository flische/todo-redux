import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './list_reducer';
import todoReducer from '/todos_reducer';

const rootReducer = combineReducers( {
    list: listReducer,
    todo: todoReducer,
    form: formReducer
});

export default rootReducer;