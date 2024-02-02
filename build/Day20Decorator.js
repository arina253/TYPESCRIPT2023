"use strict";
// Decorator is a function
//Written in capital letter
//Used to run specific things before loading a class or making object of class
// tsconfig.json- CTRL+F-decorator and uncheck
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//class decorator
function Logger(constructor) {
    console.log('Logging');
    console.log(constructor);
}
let PersonW = class PersonW {
    constructor() {
        this.name = "MAX";
        console.log('creating a person object');
    }
};
PersonW = __decorate([
    Logger
], PersonW);
//Program 2
function logClass(con) {
    console.log(con.name);
}
let ExampleClass = class ExampleClass {
    constructor() {
        console.log('Constructor is called');
    }
};
ExampleClass = __decorate([
    logClass
], ExampleClass);
new ExampleClass();
//Method constructor- 3 properties
function decor1(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const result = originalMethod.apply(this);
        return result * 2;
    };
}
class Examples {
    num() {
        return 10;
    }
}
__decorate([
    decor1
], Examples.prototype, "num", null);
