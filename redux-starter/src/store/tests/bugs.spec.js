import { addBug, bugAdded } from "./../bugs";
import { apiCallBegan } from "../api";
import configureStore from "../configureStore";

// Integration Test
describe("bugsSlice", () => {
    it("should handle addBug action", async () => {
        const store = configureStore();
        const bug = { description: "a" };
        await store.dispatch(addBug(bug));
        expect(store.getState().entities.bugs.list).toHaveLength(1);
    });
});

// Unit Test
describe("bugsSlice", () => {
    describe("action creators", () => {
        it("addBug", () => {
            const bug = { description: "a" };
            const result = addBug(bug);
            const expected = {
                type: apiCallBegan.type,
                payload: {
                    url: "/bugs",
                    method: "post",
                    data: bug,
                    onSuccess: bugAdded.type,
                },
            };
            expect(result).toEqual(expected);
        });
    });
});
