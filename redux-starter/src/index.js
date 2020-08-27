const { add } = require("lodash");

// Updating Objects
const person = {name: "Suman"};
const updated = Object.assign({}, person, {name: "Bob", age: 30});

console.log(updated);

// Using Spread Operator
const updatedAnother = {...person, name: "Bob"};
console.log(updatedAnother);

// Working With Nested Object
const person1 = {
    name: "Raubin",
    address: {
        state: "Bihar",
        district: "Patna"
    }
}

// Now if we modify name using spread - Shallow Copy
const updated1 = {...person1, name: "Alok"}

// Now if we modify the address in updated1 object
// updated1.address.district = "Saharsa";

// It changed the address of person1 also
console.log(person1);
// address: {state: "Bihar", district: "Saharsa"}
// name: "Raubin"

// How to fix this ?? - Use deep copy

const updated2 = {...person1, address: {...person1.address, district: "Darbhanga"}, name: "Ram"}
console.log(updated2);

// Original object is not changed
console.log(person1);

// Updating Arrays
const numbers = [1, 2, 3];
const added = [...numbers, 4];

console.log(added);

// Adding at specific position
const index = numbers.indexOf(2);
const added1 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added1);

// Removing
const removed = numbers.filter(n => n !== 2);
console.log(removed);

// Updating
const updated3 = numbers.map(n => (n == 2 ? 20: n));
console.log(updated3);