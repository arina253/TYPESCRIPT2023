"use strict";
//Program 1
//admin, Admin , ADMIN
// enum roles{
//     ADMIN,
//     CUSTOMER,
//     SUPPORT,
//     MANAGER,
//     EMPLOYEE
// }
// if (roles.ADMIN){
//     console.log("admin")
// }
// else if (roles.CUSTOMER){
//     console.log("customer")
// }
// else if (roles.MANAGER){
//     console.log("manager")
// }
// else if (roles.EMPLOYEE){
//     console.log("employee")
// }
//Program 2
var Direction;
(function (Direction) {
    Direction[Direction["EAST"] = 5] = "EAST";
    Direction[Direction["SOUTH"] = 6] = "SOUTH";
    Direction[Direction["WEST"] = 7] = "WEST";
    Direction[Direction["NORTH"] = 8] = "NORTH";
})(Direction || (Direction = {}));
if (Direction.NORTH) {
    console.log("Delhi");
}
if (Direction.EAST) {
    console.log("Bengal");
}
if (Direction.WEST) {
    console.log("Mumbai");
}
if (Direction.SOUTH) {
    console.log("Indira point");
}
//Program3
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Created"] = 201] = "Created";
    statusCode[statusCode["TimeOut"] = 503] = "TimeOut";
})(statusCode || (statusCode = {}));
console.log(statusCode.NotFound);
let arina = {
    firstName: "jyoti",
    lastName: "pradhan",
    rollNo: 23
};
