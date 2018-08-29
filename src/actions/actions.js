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

export const getSingleItem = id => async dispatch => {
    try {
        const response = await axios.get(`${BASE_URL}/todos/${id + API_KEY}`);
        dispatch({
            type: types.GET_SINGLE_ITEM,
            payload: response
        });
    } catch (error){
        dispatch({
            type:types.LIST_ERROR,
            error: 'No item found'
        });
    }
}

// export function getSingleItem(id){
//     const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

//     return { 
//         type: types.GET_SINGLE_ITEM,
//         payload: response
//     };
// }

export function addItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    };
}

export function deleteItem(id){
    return async function (dispatch){
        try {
            const response = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
            
            console.log('delete worked!');
            dispatch({
                type: types.DELETE_ITEM,
                payload: response
            });
        } catch(error){

            console.log('delete failed');
            dispatch({
                type: types.LIST_ERROR,
                error: 'Failed to delete item'
            });
        }
    }
}

// export const restSingleView = () => ({type: types.RESET_SINGLE_VIEW});
// below: same as above !!!

export function resetSingleView(){
    return {
        type:types.RESET_SINGLE_VIEW
    }
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
