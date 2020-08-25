// In JavaScript Functions are First Class Citizens
// It means, we can -

// * Assign it to a variable

function sayHello() {
    return "Hello World";
}

let fn = sayHello;
// fn(); is same as sayHello();

// * Pass as an argument

function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello);
// passing the reference of sayHello to greet

// * Return from other functions

function sayHelloAgain() {
    return function() {
        return "Hello World";
    }
}

let fnAgain = sayHelloAgain;
let message = fnAgain();
// returning anonymous function from sayHelloAgain