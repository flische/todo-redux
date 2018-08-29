import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    error: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL_LIST_DATA:
            return {...state, all: action.payload.data.todos }; // todos (plural)
        case types.GET_SINGLE_ITEM:
            return {...state, single: action.payload.data.todo }; // todo (singular)
        case types.LIST_ERROR:
            return { ...state, single: {}, error: action.error };
        case types.RESET_SINGLE_VIEW:
            return {...state, single: {}, error: null };
        default:
            return state;
    }
}

