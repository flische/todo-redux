import types from '../actions/types';

const DEFAULT_STATE = {
    item: {}
};

export default (state = DEFAULT_STATE, action ) => {
    switch (action.type) {
        case types.TOGGLE_COMPLETE:
            return state.map(item => {
                if(item.id !== action.id){
                    return item;
                }

                return {
                    ...item,
                    complete: !item.complete
                };
            });
        case types.DELETE_ITEM:
            return [
                ...state,
            ];

        default: 
            return state;
    }
}

