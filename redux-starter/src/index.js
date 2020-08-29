// Forcing Immutability

// Libraries
// * Immutable
// * Immer
// * Mori

import { produce } from 'immer';

let book = {title: "Harry Potter"};

// Using Immer.js

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);
// {title: "Harry Potter"}

console.log(updated);
// {title: "Harry Potter", isPublished: true}