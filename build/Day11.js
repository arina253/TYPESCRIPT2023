"use strict";
//Program1
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    bark() {
        console.log("woof...!");
    }
}
let myDog = new Dog("Gold Retriever");
console.log(myDog.breed);
myDog.bark();
//Program2
class Animal {
    constructor(ty) {
        this.type = ty;
    }
    //method
    makeSound() {
        console.log("Some generic sound..");
    }
}
class Dog2 extends Animal {
    constructor(ty, ag) {
        super(ty);
        this.age = ag;
    }
    makeSound() {
        console.log("woof...");
    }
}
let myDog2 = new Dog2("GR", 3);
console.log(myDog2.age);
console.log(myDog2.type);
myDog2.makeSound();
//Program 3
class BankAccount {
    //constructor
    constructor(accH) {
        //Properties
        this.balance = 0;
        this.accountHolder = accH;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBal() {
        return this.balance;
    }
}
let SBII = new BankAccount("arina joshi");
SBII.getBal();
