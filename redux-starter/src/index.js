import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

// Subscribing the Store
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

// Dispatching Actions
store.dispatch(projectAdded({ name: "Project 1"}));
store.dispatch(bugAdded({ description: "Bug1"}));
store.dispatch(bugAdded({ description: "Bug2"}));
store.dispatch(bugAdded({ description: "Bug3"}));

store.dispatch(bugResolved({id: 1}));

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);

// Unsubscribing the Store
unsubscribe();

store.dispatch(bugRemoved({id: 1}));

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