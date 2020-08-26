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


