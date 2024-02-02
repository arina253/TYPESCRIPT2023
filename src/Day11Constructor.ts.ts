//Program1

class Dog{
  //Properties
  breed : string;

  constructor(breed:string){
    this.breed = breed
  }

  bark() : void{
    console.log("woof...!")
  }
}

let myDog = new Dog("Gold Retriever")
console.log(myDog.breed)
myDog.bark()


//Program2

class Animal{
    //property
    type : string
    constructor (ty : string){
        this.type = ty
    }
    //method
    makeSound(){
        console.log("Some generic sound..")
    }
}

class Dog2 extends Animal{
    age : number;
    constructor(ty:string,ag:number){
        super(ty)
        this.age = ag
    }
    makeSound() : void{
        console.log("woof...")
    }
}

let myDog2 = new Dog2("GR",3)
console.log(myDog2.age)
console.log(myDog2.type)
myDog2.makeSound()


//Program 3

class BankAccount{
    //Properties
    private balance : number = 0;
    private accountHolder : string;

    //constructor
    constructor(accH : string){
        this.accountHolder = accH
    }

    deposit(amount : number) : void{
        this.balance = this.balance + amount
    }

    withdraw (amount : number): void{
        if (amount < this.balance){
            this.balance = this.balance - amount
        }
        else{
            console.log("Insufficient funds")
        }
    }

    getBal():number{
        return this.balance
    }
}
let SBII = new BankAccount("arina joshi")
SBII.getBal()
