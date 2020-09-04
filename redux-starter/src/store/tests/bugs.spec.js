import axios from "axios";
import MockAdaptor from "axios-mock-adapter";
import { addBug, bugAdded } from "./../bugs";
import { apiCallBegan } from "../api";
import configureStore from "../configureStore";

let fakeAxios;
let store;

beforeEach(() => {
    fakeAxios = new MockAdaptor(axios);
    store = configureStore();
});

const bugsSlice = () => store.getState().entities.bugs;

// Integration Test
describe("bugsSlice", () => {
    it("should add the bug to the store if it's saved to the server", async () => {
        const bug = { description: "a" };
        const savedBug = { ...bug, id: 1 };
        fakeAxios.onPost("/bugs").reply(200, savedBug);

        await store.dispatch(addBug(bug));

        expect(bugsSlice().list).toContainEqual(savedBug);
    });
    it("should not add the bug to the store if it's not saved to the server", async () => {
        const bug = { description: "a" };
        fakeAxios.onPost("/bugs").reply(500);

        await store.dispatch(addBug(bug));

        expect(bugsSlice().list).toHaveLength(0);
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
