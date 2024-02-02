//enum

enum Color {
    Red1,
    Green1,
    Yellow1
}

if (Color.Red1){
    console.log("red color")
}
else if (Color.Green1){
    console.log("green color")
}
else if (Color.Yellow1){
    console.log("yellow color")
}

//any
let numberA : number = 10;
let numberB : any = [10,20,30];

//void
function additionCE() : any {
    console.log("hello")
    return true
}

//null
let apiResponse : null = null;

//undefined
let firstNameNew : undefined = undefined

//Writing functions with typescript

//function declaration
function additionH(x : number, y : number){
    console.log(x + y)
    return x + y
}
let sum = additionH(20,40)

//function expression
let additionK = function (x : number, y : number){
    return x + y
}
let sum2 = addition (40,60)

//optional parameter
function greet (name : string, greeting?:string){
    //greeting ------>undefined
    if(greeting){
        console.log("greeting value was passed")
    }
    else{
        console.log("greeting value was not passed")
    }
}

greet("hello","bye")
greet ("bye")

//If(undefined){condition will be false}