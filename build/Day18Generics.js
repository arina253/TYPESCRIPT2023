"use strict";
//GENERICS ------- to write reusable code
//Program 1
function identity(arg) {
    return arg;
}
let w = identity(1);
let j = identity("adult");
let f = identity(true);
function identity2(a) {
    return a;
}
let p = identity2(67);
//Program 2
function identityGenerics(arg) {
    return arg;
}
let a11 = identityGenerics(123);
let b11 = identityGenerics('1234');
//Program 3
function addEE(p1, p2) {
    if (typeof p1 == 'number' && typeof p2 == 'number') {
        console.log(p1 + p2);
        return p1 + p2;
    }
    else if (typeof p1 == 'string' && typeof p2 == 'string') {
        return p1 + p2;
    }
}
let q11e = addEE(2, 4);
let q11s = addEE("hello", "world");
console.log(q11s);
console.log(q11e);
//Program 3
class Box {
    constructor(x) {
        this.content = x;
    }
    getContent() {
        return this.content;
    }
}
let numberBox = new Box(123);
let stringBox = new Box("hello");
let q = numberBox.getContent();
let q11 = stringBox.getContent();
//Program 4
class BoxB {
    constructor(x, y) {
        this.content = x;
        this.content2 = y;
    }
    getContent() {
        return this.content;
    }
    getContent2() {
        return this.content2;
    }
}
let numberStringBox = new BoxB(123, "hello");
let numberStringBoxE = new BoxB(123, 235);
let numberStringBoxE2 = new BoxB("hello", "hello");
let t = numberStringBox.getContent();
let t2 = numberStringBox.getContent2();
