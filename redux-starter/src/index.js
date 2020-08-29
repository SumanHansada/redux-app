import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved } from "./actions";

// Subscribing the Store
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

// Dispatching Actions
store.dispatch(bugAdded("Bug2"));

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