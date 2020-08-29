import store from "./store";

// Subscribing the Store
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

// Dispatching Actions
store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

// Unsubscribing the Store
unsubscribe();

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});

// Get the current state of the store
// console.log(store.getState());

// Store object
console.log(store)
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()