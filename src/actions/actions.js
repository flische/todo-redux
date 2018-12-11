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

export function addItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    };
}

export function toggleComplete(id){
    const response = axios.put(`${BASE_URL}/todos${id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        // payload:response.data.todo
        payload:response
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


