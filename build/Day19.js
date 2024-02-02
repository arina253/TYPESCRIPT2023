"use strict";
//Program 1
function identity1a(arg) {
    return arg;
}
let q5 = identity1a(56);
//Program 2
function identity2a(arg) {
    return arg;
}
let q4 = identity2a(24);
//Program 3
function identity3a(arg) {
    return arg;
}
let q111 = identity3a(12);
let q222 = identity3a("hello");
//Program 4
//Generics - to use a function into types as required
function identity4(arg1, arg2) {
    if (typeof arg1 == 'number' && typeof arg2 == 'number') {
        return arg1 + arg2;
    }
    else if (typeof arg1 == 'string' && typeof arg2 == 'string') {
        return arg1 + arg2;
    }
}
let a8 = identity4(13, 4);
let a9 = identity4("hello", "hello");
function identity5(arg) {
    arg.length;
    return arg;
}
identity5("hello");
//Program 6
class Boxe {
    constructor(a) {
        this.varB = a;
    }
    displayVarB() {
        return this.varB;
    }
}
let obj = new Boxe("hello");
let obj2 = new Boxe(1);
let q12 = obj.displayVarB();
let q13 = obj2.displayVarB();
