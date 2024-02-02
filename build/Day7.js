"use strict";
//enum
var Color;
(function (Color) {
    Color[Color["Red1"] = 0] = "Red1";
    Color[Color["Green1"] = 1] = "Green1";
    Color[Color["Yellow1"] = 2] = "Yellow1";
})(Color || (Color = {}));
if (Color.Red1) {
    console.log("red color");
}
else if (Color.Green1) {
    console.log("green color");
}
else if (Color.Yellow1) {
    console.log("yellow color");
}
//any
let numberA = 10;
let numberB = [10, 20, 30];
//void
function additionCE() {
    console.log("hello");
    return true;
}
//null
let apiResponse = null;
//undefined
let firstNameNew = undefined;
//Writing functions with typescript
//function declaration
function additionH(x, y) {
    console.log(x + y);
    return x + y;
}
let sum = additionH(20, 40);
//function expression
let additionK = function (x, y) {
    return x + y;
};
let sum2 = addition(40, 60);
//optional parameter
function greet(name, greeting) {
    //greeting ------>undefined
    if (greeting) {
        console.log("greeting value was passed");
    }
    else {
        console.log("greeting value was not passed");
    }
}
greet("hello", "bye");
greet("bye");
//If(undefined){condition will be false}
