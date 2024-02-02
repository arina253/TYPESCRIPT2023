//Program 1

type Result = string | number
let value : Result;
value = 'hello'
value = 10

//Program 2
//Intersection type ---------- can be used in combination

type PersonP = {
    name : string;
    age : number
}
type EmployeeE = {
    jobTitle : string;
    salary : number
}

type EmployeeEPersonP = PersonP & EmployeeE;

let arinaJo : EmployeeEPersonP;

arinaJo = {
    name : "arina",
    age : 23,
    jobTitle : "Engineer",
    salary : 30000
}

//Program 3

type Shape = {color:string};
type Circle = Shape & {radius : number} //color and radius
type Square = Shape & {sideLength : number}; //color and sidelength
type shapeUnion = Circle | Square
type shapeIntersection = Circle & Square

let r1:Shape;
let r2:Circle;
let r3:Square;
let r4:shapeUnion;
let r5:shapeIntersection

r4 = {
    color:"red",
    radius:34
}
r4 = {
    color: "green",
    sideLength:45
}

r5 = {
    color:"blue",
    radius: 23,
    sideLength:31
}

//Program 4

type Carr = {color:string}
type Truck = Carr & {container:string}
type Bus = Carr & {passenger:number}
type CTB = Carr & Truck & Bus
type CTBU = Carr | Truck | Bus

let k:CTB = {
    color:"red",
    container:"big",
    passenger:4
}
let k1:CTBU = {
    color:"red"
}
let k2:CTBU ={
    color:"red",
    container:"big"
}
let k3:CTBU = {
    color:"blue",
    passenger:4
}

