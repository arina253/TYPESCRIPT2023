"use strict";
//Enum
//Program 1
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
let movement = Direction1.Up;
console.log(movement); //0
//By default,numeric value is assigned if no value is given in emum and start from 0
//Program 2
var Color1;
(function (Color1) {
    Color1["Red"] = "RED";
    Color1["Green"] = "GREEN";
    Color1["Blue"] = "BLUE";
})(Color1 || (Color1 = {}));
let myFv = Color1.Red;
console.log(myFv);
//let p = 10       // p is number
//const q = 10    // q is 10
//Program 3
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
let currentStatus = Status.Active;
console.log(currentStatus);
//Program 4
var Shape1;
(function (Shape1) {
    Shape1[Shape1["Circle"] = 0] = "Circle";
    Shape1[Shape1["Square"] = 1] = "Square";
    Shape1[Shape1["Triangle"] = 2] = "Triangle";
})(Shape1 || (Shape1 = {}));
function draw(shape1) {
    if (shape1 == 0) {
        console.log("calculate circle");
    }
    if (shape1 == 1) {
        console.log("calculate square");
    }
    if (shape1 == 2) {
        console.log("calculate Triangle");
    }
}
draw(Shape1.Circle);
draw(Shape1.Square);
draw(Shape1.Triangle);
//Program 5
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
//retrieve the value of index
let a2 = WeekDay.Friday;
console.log(a2);
//let a3 : WeekDay = WeekDay[new Date().getDay()]----something wrong, need to fix it.
