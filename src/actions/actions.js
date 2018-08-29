import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_demofed';

export function getAllListData(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_ALL_LIST_DATA,  // <-- this is just setting a string to the type property!
        payload: response               // <-- certain 'middleware' expects you to use 'payload'
    };
}

export function addItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    };
}




// function makeActionCreator(type, ...argNames) {
//     return function (...args) {
//         const action = { type };
//         argNames.forEach((arg, index) => {
//             action[argNames[index]] = args[index];
//         });
//         return action
//     }
// }
// ​
// const ADD_TODO = 'ADD_TODO';
// const EDIT_TODO = 'EDIT_TODO';
// const REMOVE_TODO = 'REMOVE_TODO';
// ​
// export const addTodo = makeActionCreator(ADD_TODO, 'text');
// export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text');
// export const removeTodo = makeActionCreator(REMOVE_TODO, 'id');
