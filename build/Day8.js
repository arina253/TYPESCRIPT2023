"use strict";
//Program 1
//Arrow function
let multiple = (x, y) => {
    console.log("hello");
    return x * y;
};
multiple(10, 10);
//Program 2
let additionB2 = (x, y) => x * y;
//Program 3
class Person1a {
    constructor() {
        this.value = 45;
        // display() : string{
        //     console.log("hello")
        //     return "hello"
        // }
        //    display = () : string =>{
        //     return "hello"
        //    }
    }
}
//Program 4
//function declaration
function additionB4(x, y) {
    return x + y;
}
//function expression
let additionB5 = function (x, y) {
    return x + y;
};
//arrow function
let additionB6 = (x, y) => {
    return x + y;
};
let additionB7 = (x, y) => x + y;
class PersonQ {
    constructor() {
        this.value = 2;
        this.additionB6 = (x, y) => {
            return x + y;
        };
        this.additionB7 = (x, y) => x + y;
    }
    display() {
        return "hello";
    }
}
let amol = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 24
};
let arinaJ = {
    firstName: "arinaJ",
    lastName: "joshiJ",
    age: 30
};
let point = {
    x: 12,
    y: 13
};
point.x;
