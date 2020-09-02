import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from "./middleware/logger";
// import func from './middleware/func';

// Redux toolkit already has thunk middleware to dispatch functions
export default function() {
    return configureStore({ 
        reducer, 
        middleware: [
            // Using Thunk
            ...getDefaultMiddleware(),
            logger({ destination: "console" }) 
            // func
        ] 
    });
}

// If not using redux toolkit
// import { createStore, applyMiddleware } from "redux";
// import reducer from './reducer';

// const store = createStore(reducer, applyMiddleware(logger));