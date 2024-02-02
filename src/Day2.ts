//Program 1
function addition(x:number, y:number){
    return x+y
}
let q1 = addition(2,4)

//Program 2
function additionB1(x:number, y:number):number{
    return x+y
}
let q2 = additionB1(2,6)

//Program 3
function additionC (x: number, y:number):void{
    x+y
}
let q3 = additionC(10,20)

//Program 4
function additionD(x: number, y:number, avail:boolean, message:string){
    if(avail){
       console.log(`${message} ${x+y}`)
    }
    additionD(12,23,true,"The addition of two numbers")

}

//Program 6
let numbers1 : number [] = [11,22,33,44,55]
let names1 : string [] = ["arina","roshini","jyoti"]
let info1 : [string, number, number] = ["arina", 12,24]
let info2 : [string,number,boolean] = ["arina",35,true]

//Program 7
let info3 = {
    firstName : "arina",
    lastName : "joshi"
}

let info4 : {firstName : string, lastName : string, age : number}
info4 = {
    firstName : "arina",
    lastName : "joshi",
    age : 29
}

//Program 8
//Manager, manager, MaNager

enum Roles{
    admin,
    support,
    manager,
    customer
}

    if (Roles.admin){
        console.log("I am admin")
    }
    else if (Roles.support){
        console.log("I am support")
    }
    else if (Roles.manager){
        console.log("I am Manager")
    }
