import axios from "axios";
import MockAdaptor from "axios-mock-adapter";
import { addBug, bugAdded } from "./../bugs";
import { apiCallBegan } from "../api";
import configureStore from "../configureStore";

// Integration Test
describe("bugsSlice", () => {
    it("should handle addBug action", async () => {
        const bug = { description: "a" };
        const savedBug = { ...bug, id: 1 };

        const fakeAxios = new MockAdaptor(axios);
        fakeAxios.onPost("/bugs").reply(200, savedBug);

        const store = configureStore();
        await store.dispatch(addBug(bug));
        expect(store.getState().entities.bugs.list).toContainEqual(savedBug);
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
