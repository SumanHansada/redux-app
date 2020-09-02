import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from "./middleware/logger";
import toast from './middleware/toast';
// import func from './middleware/func';

// Redux toolkit already has thunk middleware to dispatch functions
export default function() {
    return configureStore({ 
        reducer, 
        middleware: [
            // Using Thunk
            ...getDefaultMiddleware(),
            logger({ destination: "console" }),
            toast
            // func
        ] 
    });
}

// If not using redux toolkit
// import { createStore, applyMiddleware } from "redux";
// import reducer from './reducer';

// const store = createStore(reducer, applyMiddleware(logger));