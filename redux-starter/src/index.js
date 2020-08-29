// Forcing Immutability

// Libraries
// * Immutable
// * Immer
// * Mori

import { Map } from "immutable";
// import Map from "immutable";

// Normal object mutation

let book = {title: "Harry Potter"};

function publish(book) {
    book.isPublished = true;
}

publish(book);

console.log(book);

// Using Map from immutable.js

let book1 = Map({title: "Harry Potter"});
console.log(book1);

// Learn new APIs
// To get title
console.log(book1.get("title"));

// To set properties, it will return a new object
function publish1(book) {
    return book.set("isPublished", true);
}

book1 = publish1(book1);

// TO get the actual JavaScript object
console.log(book1.toJS())
