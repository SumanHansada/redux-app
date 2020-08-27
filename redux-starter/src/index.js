import {compose, pipe} from "lodash/fp";

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

// Another way using function composition
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();


// Problems -
// * Need to read the expression from right to left
// * So many brackets
const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

// Using Lodash compose
// Still order of operation is from right to left
const transform = compose(wrapInDiv, toLowerCase, trim);
console.log(transform(input));

// Using Lodash pipe
// Order of operation is from left to right
// pipe function creates a pipeline - output of one function is the input of other function
const transformAnother = pipe(trim, toLowerCase, wrap("div"));
console.log(transformAnother(input));

// Pure Functions
// If we call it every time with same argument, it will return same value
// In Pure Functions, We cannot use
// * Random values
// * No current date/time
// * No global states (DOM, files, db etc)
// * No mutation of parameters

// Benefits
// * Self Documenting
// * Easily Testable
// * Concurrency
// * Cacheable

// Immutability
// Once you create an object, it cannot be changed
// You have to create a copy first and then change that copy

// In Pure Functional Programming Language, Once you create the object, it cannot be changed directly
// JavaScript is not a Pure Functional Programming Language

// const => We can change the object, but we cannot reassign it

// Why Immutability ?
// * Predictability
// * Faster Change Detection (Only need to compare references and not data)
// * Concurrency

// Cons
// * Performance
// * Memory Overhead

// When you are building application with Redux, you should not mutate data.