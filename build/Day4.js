"use strict";
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let myDirection = Direction.Up;
console.log(myDirection); //0
console.log(Direction.Down); //1
console.log(Direction.Left); //2
console.log(Direction.Right); //3
//Program 2
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
//Program 3
//Heterogeneous Enums
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status["NotFound"] = "Not_Found";
    Status["Error"] = "Error";
})(Status || (Status = {}));
let myStatus = Status.Success;
console.log(myStatus);
console.log(Status.Error);
//Program 4
//enum with function
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(message, a) {
    console.log(`${message}${a}`);
    //console.log(LogLevel[a])
}
logMessage("this is info message", LogLevel.Info);
logMessage("this is info warning", LogLevel.Warning);
logMessage("this is info error", LogLevel.Error);
