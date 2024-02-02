"use strict";
//Program 1
class MyClass {
    constructor() {
        this.myProperty = "hello";
    }
}
let aa = new MyClass();
console.log(aa.myProperty);
//Program 2
//private
class MyClass2 {
    constructor() {
        this.myPrivateProperty = "hello from p";
    }
    //access the private field in public method within the same class
    getValue() {
        return this.myPrivateProperty;
    }
}
let b = new MyClass2();
//console.log(b.myPrivateProperty)----'myPrivateProperty' is private and  not accessible.
b.getValue();
//Program 3
//protected
class myClass3 {
    constructor(ag) {
        this.age = ag;
    }
    displayBalance() {
        return 10000;
    }
    displayAge() {
        this.displayBalance();
        return this.age;
    }
}
class myClass4 extends myClass3 {
    displayAge2() {
        //private method and properties are not accessible outside the class
        //protected methods and properties are accessible within the inherited properties
        return this.age;
    }
}
//interface-----complete abstraction
//abstraction----partially hide----abstract class
class WorldBank {
    displayCountryName() {
        return "Nepal";
    }
}
class SBIee extends WorldBank {
    loan() {
        console.log("I am loan from SBIee");
        return 10;
    }
    save() {
        console.log("I am save from SBIee");
        return 20;
    }
    branchName() {
        return "Kathmandu";
    }
}
//We cannot have instance of abstract class
let SBIaa = new SBIee();
SBIaa.branchName();
SBIaa.loan();
SBIaa.save();
SBIaa.displayCountryName();
