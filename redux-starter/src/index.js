import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugResolved, bugRemoved } from "./actions";

// Subscribing the Store
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

// Dispatching Actions
store.dispatch(bugAdded("Bug1"));

store.dispatch(bugResolved(1));

// Unsubscribing the Store
unsubscribe();

store.dispatch(bugRemoved(1));

// Get the current state of the store
// console.log(store.getState());

// Store object
console.log(store)
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()

// To use customStore
// import store from "./customStore";
// import * as actions from "./actions";

// store.subscribe(() => console.log("Status Changed!"))

// store.dispatch(actions.bugAdded("Bug1"));

// console.log(store.getState());