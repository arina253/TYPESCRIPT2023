//Unions

//example 1
let variable : number|string;
variable = "hello"
variable = 10


//example 2
function displayResult(value:number|string):void{
    if (typeof value == 'number'){
        console.log("The value number type")
    }
    else{
        console.log("The value is string type")
    }
}
displayResult(12)
displayResult("hello")


//example 3
type CarX ={
    brand : string;
    model : string;
}
type ElectricCar = {
    batteryType : string
}

type HybridType = CarX & ElectricCar
type HybridTypeB = CarX | ElectricCar

const carY :HybridType = {
    brand : "polo",
    model : "e4",
    batteryType : "al"
}

let CarZ : HybridTypeB = {
    batteryType : "al2"
}
let CarW : HybridTypeB = {
    brand : "e5",
    model : "q4"
}


//example 4--------value given in function/Intersection used in function
type logger = {
    log:(message:string)=>void;
}
type Foramatter = {
    format:(input:string)=>void;
}
type logFormatter = logger & Foramatter
let logD:logFormatter = {
    log:function(message){
console.log("hello")
    },
    format:function(input){
        console.log(input)
    }
}


//example 5
type Age = number;
let userAge : Age = 23;

type PersonC = {
    name:string;
    age:number;
    email?:string;
};

let PersonP : PersonC = {
    name : "arina",
    age : 34,
    //'email' is optional, so it's not mandatory to provide it
};

//Type cannot be implemented.
//Interface can be implemented.
