"use strict";
//Program 1
function addition(x, y) {
    return x + y;
}
let q1 = addition(2, 4);
//Program 2
function additionB(x, y) {
    return x + y;
}
let q2 = additionB(2, 6);
//Program 3
function additionC(x, y) {
    x + y;
}
let q3 = additionC(10, 20);
//Program 4
function additionD(x, y, avail, message) {
    if (avail) {
        console.log(`${message} ${x + y}`);
    }
    additionD(12, 23, true, "The addition of two numbers");
}
//Program 6
let numbers = [11, 22, 33, 44, 55];
let names = ["arina", "roshini", "jyoti"];
let info1 = ["arina", 12, 24];
let info2 = ["arina", 35, true];
//Program 7
let info3 = {
    firstName: "arina",
    lastName: "joshi"
};
let info4;
info4 = {
    firstName: "arina",
    lastName: "joshi",
    age: 29
};
//Program 8
//Manager, manager, MaNager
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["support"] = 1] = "support";
    Roles[Roles["manager"] = 2] = "manager";
    Roles[Roles["customer"] = 3] = "customer";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log("I am admin");
}
else if (Roles.support) {
    console.log("I am support");
}
else if (Roles.manager) {
    console.log("I am Manager");
}
