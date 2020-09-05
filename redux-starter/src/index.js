import configureStore from "./store/configureStore";
import { loadBugs, addBug, resolveBug, assignBugToUser, removeBug } from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// Subscribing the Store
// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// })

// Calling APIs
// UI Layer
// store.dispatch(addBug({ description: "a" }));
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(resolveBug(1)), 2000);
setTimeout(() => store.dispatch(assignBugToUser(1, 5)), 2000);
setTimeout(() => store.dispatch(removeBug(1)), 2000);
// Dispatching Toast Notifications
// store.dispatch({
//     type: "error",
//     payload: { message: "An error has occured"}
// });

// Dispatching Functions
// Thunk
// store.dispatch((dispatch, getState) => {
// Call an API
// when the promise is resloved => dispatch()
// If the promise is rejected => dispatch()
// dispatch({type: "bugsReceived", bugs: [1, 2, 3]})
// });

// Dispatching Actions
// store.dispatch(userAdded({ name: "User 1"}));
// store.dispatch(userAdded({ name: "User 2"}));
// store.dispatch(userAdded({ name: "User 3"}));
// store.dispatch(projectAdded({ name: "Project 1"}));

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// console.log(unresolvedBugs);

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);

// Unsubscribing the Store
// unsubscribe();

// Get the current state of the store
// console.log(store.getState());

// Store object
// console.log(store)
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
