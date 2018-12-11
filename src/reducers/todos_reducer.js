import types from '../actions/types';

const DEFAULT_STATE = {
    todo: {}
};

const todo = (DEFAULT_STATE, action ) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    details: action.details,
                    complete: false
                }
            ];

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

        default: 
            return state;
    }
};

// const testAddTodo = () => {
//     const prevState = [];
//     const action = {
//         type: 'ADD_TODO',
//         id: 0, 
//         text: 'learn Redux'
//     };
//     const newState = [
//         {
//             id:0,
//             text: 'learn Redux',
//             completed: false
//         }
//     ];
// };

