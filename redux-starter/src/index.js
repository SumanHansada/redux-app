// Higher Order Functions
// Functions which takes function as an argument, or return it or Both
// Instead of working on string, booleans or number, it goes higher and operates on functions

// Function as an argument in function
function greet(fn) {
    console.log(fn());
}

// Function returned by a function
function sayHello() {
    return function() {
        return "Hello World";
    }
}

// Another example
let numbers = [1, 2, 3];
numbers.map(number => number * 2);

// Another example
setTimeout(() => console.log("Hello"), 1000);