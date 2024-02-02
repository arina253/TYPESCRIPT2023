//Program 1

let myVariable : number|string ;
myVariable = 10
myVariable = "arina"

//Program 2

function displayData(data : string | number) : void{
    console.log(data)
}
displayData(13)
displayData ("Arina")

//Program 3

function displayDataThree(data : string|number|boolean):void{
    console.log(data)
}
displayDataThree("hello")
displayDataThree(12)
displayDataThree(true)

//Program 4

let info5 : (string|number)[] = ["arina","joshi",30]
//intersection
type PersonZ = {
    namee : string;
    age : number
}

type Employee = {
    employeeId : string,
    position:string
}
 
type EmployeePerson = PersonZ & Employee
let info6 : EmployeePerson = {
    namee : "arina",
    age : 30,
    employeeId : "34",
    position :"engineer"
}