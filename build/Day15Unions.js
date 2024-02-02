"use strict";
//Unions
//example 1
let variable;
variable = "hello";
variable = 10;
//example 2
function displayResult(value) {
    if (typeof value == 'number') {
        console.log("The value number type");
    }
    else {
        console.log("The value is string type");
    }
}
displayResult(12);
displayResult("hello");
const carY = {
    brand: "polo",
    model: "e4",
    batteryType: "al"
};
let CarZ = {
    batteryType: "al2"
};
let CarW = {
    brand: "e5",
    model: "q4"
};
let logD = {
    log: function (message) {
        console.log("hello");
    },
    format: function (input) {
        console.log(input);
    }
};
let userAge = 23;
let PersonP = {
    name: "arina",
    age: 34,
    //'email' is optional, so it's not mandatory to provide it
};
//Type cannot be implemented.
//Interface can be implemented.
