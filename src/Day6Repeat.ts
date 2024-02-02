//Program 1
let a : number = 10
a = 23
console.log(a)

//Program 2
function additionB(x: number, y: number){
    return x+y
}
let a1 = additionB(10,3)

//Program 3
let m : number = 10
let n : string = "arina"
let o : boolean = true
let names : string[] = ["ram","sam","hari"]
let numbers:number[]=[1,2,3,4]
let infot:[string,number] = ["arina",10]
let information1 : {firstName : string, lastName : string}= {
    firstName : "arina",
    lastName : "joshi"
}
type Person = {firstName: string,lastName: string}
let information2: Person={
firstName: "arina",
lastName: "joshi"
}
