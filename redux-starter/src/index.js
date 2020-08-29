// Coding Challanges
import { pipe } from "lodash/fp";
import { produce } from "immer";

// Exercise - 1
let input = { tag : "JAVASCRIPT"};

const getObjectValue = obj => obj.tag;
const toLowerCase = str => str.toLowerCase();
const circularBracketify = (str) => `(${str})`;

const transform = pipe(getObjectValue, toLowerCase, circularBracketify);

const output = transform(input);
console.log(output);

// Exercise - 2
let recipe = {
    name : "Spaghetti Bolognese",
    ingredients : ["egg", "salt"]
};

// Add an ingredient
const added = {
    ...recipe,
    ingredients: [...recipe.ingredients, "cream"]
};

// Update an ingredient
const updated = {
    ...recipe,
    ingredients: recipe.ingredients.map(ingredient => 
        ingredient === "egg" ? "egg white" : ingredient
    )
};

// Remove an ingredient
const removed = {
    ...recipe,
    ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};

console.log(recipe);