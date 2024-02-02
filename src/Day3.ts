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

enum Direction{
    EAST = 5,
    SOUTH = 6,
    WEST = 7,
    NORTH = 8
}

if (Direction.NORTH){
    console.log("Delhi")
}
if (Direction.EAST){
    console.log("Bengal")
}
if (Direction.WEST){
    console.log("Mumbai")
}
if (Direction.SOUTH){
    console.log("Indira point")
}

//Program3

enum statusCode{
    NotFound = 404,
    Success = 200,
    Created = 201,
    TimeOut = 503
}

console.log(statusCode.NotFound)

//Program 4

type PersonJ = {
    firstName : string
    lastName : string
    rollNo : number
}

let arina : PersonJ= {
    firstName : "jyoti",
    lastName : "pradhan",
    rollNo : 23
}
