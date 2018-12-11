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
        payload:response
    };
}

export function deleteItem(id){
    const response = axios.delete(`${BASE_URL}/todos${id + API_KEY}`);

    return {
        type: types.DELETE_ITEM,
        payload:response
    };
}

export function toggleComplete(id){
    const response = axios.put(`${BASE_URL}/todos${id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        payload:response.data.todo
        // payload:response
    };
}