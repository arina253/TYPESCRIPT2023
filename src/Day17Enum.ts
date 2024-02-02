//Enum

//Program 1
enum Direction1{
    Up,
    Down,
    Left,
    Right
}
let movement : Direction1=Direction1.Up
console.log(movement)  //0
//By default,numeric value is assigned if no value is given in emum and start from 0


//Program 2
enum Color1{
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
let myFv:Color1=Color1.Red
console.log(myFv)

//let p = 10       // p is number
//const q = 10    // q is 10


//Program 3
enum Status{
    Active,
    Inactive,
    Pending
}
let currentStatus : Status = Status.Active
console.log(currentStatus)


//Program 4
enum Shape1{
    Circle,
    Square,
    Triangle
}
function draw(shape1 : Shape1){
    if (shape1 == 0){
        console.log("calculate circle")
    }
    if (shape1 == 1){
        console.log("calculate square")
    }
    if (shape1 == 2){
        console.log("calculate Triangle")
    }
}
draw (Shape1.Circle)
draw (Shape1.Square)
draw(Shape1.Triangle)


//Program 5
enum WeekDay{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

//retrieve the value of index
let a2 : WeekDay = WeekDay.Friday
console.log(a2)

//let a3 : WeekDay = WeekDay[new Date().getDay()]----something wrong, need to fix it.