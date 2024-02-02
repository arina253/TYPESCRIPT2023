"use strict";
//Interface can be used within the class.Interface means abstraction.
let person5a = {
    firstName: "arina",
    lastName: "joshi",
    age: 32
};
let volvo = {
    brand: "volvo",
    model: "z1",
    year: 2012
};
let points = {
    x: 12,
    y: 4
};
let calculator = {
    add: (x, y) => {
        return x + y;
    },
    sub: (x, y) => {
        return x - y;
    }
};
calculator.add(2, 4);
calculator.add(12, 34);
let SBI = {
    save(rate) {
        return 30;
    },
    loan(rate) {
        return 90;
    }
};
