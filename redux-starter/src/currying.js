// Curring is a technique which allows to convert 
// a function which has N arguments to function which has 1 argument
// N => 1

function add(a) {
    return function() {
        a + b;
    }
}

const add2 = a => b => a + b;

add(1)(5);