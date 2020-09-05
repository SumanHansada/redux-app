import configureStore from "../configureStore";
import { projectAdded } from "../projects";

let store;

beforeEach(() => {
    store = configureStore();
});

const projectsSlice = () => store.getState().entities.projects;

describe("projectsSlice", () => {
    it("should add project to the store", () => {
        const project = { name: "Project 1" };
        const savedProject = { ...project, id: 1 };

        store.dispatch(projectAdded(project));

        expect(projectsSlice()).toContainEqual(savedProject);
    });
});
