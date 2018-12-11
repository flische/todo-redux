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

export function deleteItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.DELETE_ITEM,
        payload:response
    };
}

export function toggleComplete(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type:types.TOGGLE_COMPLETE,
        payload:response
    };
}