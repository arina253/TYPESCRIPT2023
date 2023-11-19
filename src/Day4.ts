//Section 1

//Variables and types
//Function and arrow functions

//Section 2

//Advances types
//enums
//unions and intersection types
//type guards
//type aliases
//generics

//enum -- named constant variables

//Numeric enum
//Program 1
enum Direction{
    Up ,
    Down,
    Left,
    Right
}

let myDirection:Direction = Direction.Up
console.log(myDirection)     //0
console.log(Direction.Down)  //1
console.log(Direction.Left)  //2
console.log(Direction.Right) //3

//Program 2

enum Color{
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
let myColor: Color = Color.Blue
console.log(myColor)
console.log(Color.Red)
console.log(Color.Green)
console.log(Color.Blue)

//Program 3

//Heterogeneous Enums

enum Status{
    Success = 200,
    NotFound = "Not_Found",
    Error = "Error"
}

let myStatus : Status = Status.Success
console.log(myStatus)
console.log(Status.Error)

//Program 4

//enum with function

enum LogLevel{
    Info = 1,
    Warning = 2,
    Error = 3
}

function logMessage(message:string , a:LogLevel){
    console.log(`${message}${a}`)
    //console.log(LogLevel[a])
}

logMessage("this is info message", LogLevel.Info)
logMessage ("this is info warning",LogLevel.Warning)
logMessage ("this is info error", LogLevel.Error)