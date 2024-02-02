//Interface can be used within the class.Interface means abstraction.



//Program 1
interface Person5{
    firstName : string,
    lastName : string,
    age : number
}

let person5a : Person5 = {
    firstName : "arina",
    lastName : "joshi",
    age : 32
}

//Program 2
interface Car{
    brand : string,
    model : string,
    year? : number
}
let volvo : Car = {
    brand : "volvo",
    model : "z1",
    year : 2012
}  

//Program 3
interface Point{
    readonly x : number,
    readonly y : number
}
let points : Point = {
    x : 12,
    y : 4
}
//points.x=10   We cannot update readonly value,it will give error.
//points.y=20

//Program 4
//We can define only signature in function,just gave body when using interface with function.
interface Calculator {
    add(x:number, y:number):number; //function name,parameter name and type mention
    sub(x:number, y:number):number;
}
let calculator : Calculator = {
    add : (x,y) =>{
        return x+y
    },
    sub : (x,y) =>{
        return x-y
    }
}
calculator.add(2,4)
calculator.add(12,34)

//Program 5
interface worldBank {
    save(rate : number):number;
    loan(rate : number):number;
}

let SBI : worldBank = {
    save(rate){
        return 30
    },
    loan(rate){
        return 90
    }
}

