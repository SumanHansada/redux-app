import { combineReducers } from "@reduxjs/toolkit";
import bugsReducer from "./bugs";
import projectReducer from "./projects";

export default combineReducers({
    bugs: bugsReducer,
    projects: projectReducer
})