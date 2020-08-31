import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        // action => action handlers
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            return bugs.filter(bug => bug.id !== action.payload.id);
        }
    }
})

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;

// Selector - It takes state and return the computed state
// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

// Memoization
// bugs => get unresolved bugs from cache

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
);