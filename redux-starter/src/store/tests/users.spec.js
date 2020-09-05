import configureStore from "../configureStore";
import { userAdded } from "../users";

let store;

beforeEach(() => {
    store = configureStore();
});

const usersSlice = () => store.getState().entities.users;

describe("usersSlice", () => {
    it("should add user to the store", () => {
        const user = { name: "User 1" };
        const savedUser = { ...user, id: 1 };

        store.dispatch(userAdded(user));

        expect(usersSlice()).toContainEqual(savedUser);
    });
});
