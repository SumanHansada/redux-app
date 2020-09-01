import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from "./middleware/logger";

export default function() {
    return configureStore({ 
        reducer, 
        middleware: [logger] 
    });
}

// If not using redux toolkit
// import { createStore, applyMiddleware } from "redux";
// import reducer from './reducer';

// const store = createStore(reducer, applyMiddleware(logger));