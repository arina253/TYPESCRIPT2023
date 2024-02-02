//Program 1
//Arrow function
let multiple = (x: number, y : number): number => {
    console.log("hello")
    return x * y
}
multiple(10,10)

//Program 2
let additionB2 = (x : number, y : number): number => x * y

//Program 3
class Person1a{

    value : number = 45
    // display() : string{
    //     console.log("hello")
    //     return "hello"
    // }
    //    display = () : string =>{
    //     return "hello"
    //    }

}

//Program 4

//function declaration
function additionB4(x : number, y : number):number{
    return x + y
}

//function expression
let additionB5 = function (x : number, y: number):number{
    return x + y
}

//arrow function
let additionB6 = (x : number, y : number) : number => {
    return x + y
}

let additionB7 = (x : number, y : number):number => x + y

class PersonQ{
    value : number = 2
    display() : string {
        return "hello"
    }
    additionB6 = (x : number, y : number): number =>{
        return x + y
    }
    additionB7 = (x : number, y : number): number => x + y

}

//Interface

//Program 1
interface Persona{
    firstName : string
    lastName : string
    age : number
}

let amol : Persona = {
    firstName : "chinmay",
    lastName : "deshpande",
    age : 24

}

//Program 2
interface SignUp{
    firstName : string,
    lastName : string,
    age? : number
}

let arinaJ:SignUp = {
    firstName : "arinaJ",
    lastName : "joshiJ",
    age : 30
    
}

//Program 3
interface Point{
    readonly x : number,
    readonly y : number
}

let point : Point = {
    x : 12,
    y: 13
}
point.x


