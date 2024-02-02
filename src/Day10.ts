//Program 1
interface PersonA5{
    firstName : string;
    lastName : string;
    age : number;
}

//Extended interface
interface Employee5 extends PersonA5{
    employeeId : number;
    role : string
}

let employeeQ :  Employee5 = {
    firstName:"arina",
    lastName: "joshi",
    age: 34,
    employeeId : 12,
    role: "Developer"
}

//Program 2
interface CalculatorA5{
    //only signature
    addE(x : number, y : number): number;
    subE (x: number, y : number): number;
}

let Calc : CalculatorA5 = {
    addE(x, y){
        return x + y
          },
    subE(x, y){
        return x - y
    }
}

//Interface for function type
interface AdditionE {
    (x : number, y : number) : number;
}
let addF : AdditionE = (x,y) => x+y

//Program 3
interface WorldBankA{
    save(): number;
    loan(): number;
}

class SBIA implements WorldBankA{
    save(){
        return 100
    }
    loan(){
        return 200
    }
    branchName(){
        return " nagpur"
    }
}

class PNB implements WorldBankA{
    save(){
        return 300
    }
    loan(){
        return 500
    }
    branchName(){
        return "pune"
    }
}

let a111 = new SBIA()
let a112 = new PNB()