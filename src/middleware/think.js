export default store => next => action => {
    if( typeof action !== 'function'){
        return next(action);
    }
    return (action(store.dispatch));  // calls the async function(dispatch) in actions.js
}