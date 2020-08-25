let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

// Another way using function composition
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
// Problems -
// * Need to read the expression from right to left
// * So many brackets