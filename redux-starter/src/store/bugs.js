import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

let lastId = 0;

const slice = createSlice({
    name: "bugs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        // action => action handlers
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
        },
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
            bugs.list[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            bugs.list = bugs.list.filter((bug) => bug.id !== action.payload.id);
        },
        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.list.findIndex((bug) => bug.id == bugId);
            bugs.list[index].userId = userId;
        },
    },
});

export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser, bugsReceived } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bugs";
export const loadBugs = () =>
    apiCallBegan({
        url,
        onSuccess: bugsReceived.type,
    });

// Selector - It takes state and return the computed state
// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

// Memoization
// bugs => get unresolved bugs from cache

export const getUnresolvedBugs = createSelector(
    (state) => state.entities.bugs.list,
    (state) => state.entities.projects,
    (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
    createSelector(
        (state) => state.entities.bugs.list,
        (bugs) => bugs.filter((bug) => bug.userId === userId)
    );
