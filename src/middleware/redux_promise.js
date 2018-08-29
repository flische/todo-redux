export default (store) => (next) =>  async(action) => {

    if(!action.payload || !action.payload.then){ 
        return next(action);
     }

     const response = await action.payload;

     const newAction = {
         ...action,
         payload: response
     };

     store.dispatch(newAction);

    }






// export default store => next => action => {
//     // code goes here // recreate redux promise middleware inside code

//     if(!action.payload || !action.payload.then){ 
//         return next(action);
//      }

//      action.payload.then(response => {
//          const newAction = {  // recreate the action 
//              ...action, // we want to make sure we pass in / don't change 'type'
//             payload: response // we're putting data from request on to payload
//             } // now we want to send it back from middleware back to reducer
//             // this is where dispatch function comes into play
//             // every time you change an action, you MUST send to Middleware!
//             // type cannot be changed / altered 
//             // as soon as we change an action, we re-dispatch it!
//             store.dispatch(newAction); // sends to Middleware 
//      });
//      return action.payload;
// }
// store gives us full access to Redux store
// and also gives us access to "dispatch"
// dispatch - dispatches the action to the reducer, sends the action through the middleware then into the reducer
// a function that returns a function that returns another function 

// recreate redux promise middleware inside code
    // if()

// 3 layers deep! What it really does is... (see below)
    // function (store){
    //     return function(next){
    //         return function(action){
    //             // Code goes here
    //         }
    //     }
    // }
    // first time it passes the Redux store then passes another function (next function)
    // the LAST function passed is always the ACTIONS 