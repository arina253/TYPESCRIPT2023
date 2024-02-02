//Program 1

class Dog1{
    breed : string
    constructor(bd : string){
        this.breed = bd
    }
bark(): void {
    console.log("woof")
}
}
let gr = new Dog1("GR")
console.log(gr.breed)
gr.bark()


//Program 2

class Animal1{
    type : string;
    constructor(ty:string){
        this.type = ty
    }

    makeSound():void{
        console.log("Make some sound..")
    }
}

class Doggy extends Animal1{

}

let gr2 = new Doggy("gr2")
gr2.makeSound()
console.log(gr2.type)


//Program 3

class Animal2{
    type : string;
    constructor(ty:string){
        this.type = ty
    }
    makeSound():void{
        console.log("Make some sound...")
    }
}

class DoggyA extends Animal2{
    legs : number
    constructor(ty:string, lg:number){
        super(ty)
        this.legs = lg
    }
    makeSound2():void{
        console.log("Bow Bow")
    }
    makeSound():void{
        console.log("Make some sound...but from child")
}
}
let gr3 = new DoggyA("gr3",3)
gr3.makeSound()
console.log(gr3.type)
gr3.makeSound2()
console.log(gr3.type)
console.log(gr3.legs)


//Program 4

class BankAccountI{
    //Properties
    private balance : number = 0;
    private accHolder : number;
    protected accName : string;
    public IFSCode : number

    //constructor
    constructor(accH:number, accN:string){
        this.accHolder = accH
        this.accName = accN
        this.IFSCode = 123
    }
}
let SBIss = new BankAccountI(123,"arina")
/*console.log(SBIss.balance) 
//Property 'balance' is private and only accessible within class 'BankAccountI'.ts(2341)

console.log(SBIss.accHolder) 
//Property 'accHolder' is private and only accessible within class 'BankAccountI'.ts(2341)

console.log(SBIss.accName) 
//Property 'accName' is protected and only accessible within class 'BankAccountI' and its subclasses.ts(2445)

console.log(SBIss.IFSCode)*/

//NOTE:
//"protected" property can be used with inheritance class only
//"private" property can be used within the same class only