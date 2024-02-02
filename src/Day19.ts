//Program 1
function identity1a(arg:number) {
    return arg
}
let q5=identity1a(56)

//Program 2
function identity2a(arg:any){
    return arg
}
let q4 = identity2a(24)

//Program 3
function identity3a<T>(arg:T):T{
    return arg
}
let q111 = identity3a<number>(12)
let q222 = identity3a<String>("hello")

//Program 4
//Generics - to use a function into types as required
function identity4<T>(arg1:T,arg2:T){
    if (typeof arg1 == 'number' && typeof arg2 == 'number'){
        return arg1 + arg2
    }
    else if (typeof arg1 == 'string' && typeof arg2 == 'string'){
        return arg1 + arg2
    }
}

let a8 = identity4<number>(13,4)
let a9 = identity4<string>("hello","hello")


//Program 5
interface LengthWise{                    //to enforce rule,we use interface
    length:number
}
function identity5 <T extends LengthWise>(arg: T):T{
    arg.length
    return arg
}
identity5<string>("hello")

//Program 6
class Boxe <T>{
    private varB:T
    constructor (a : T){
        this.varB = a
    }
    displayVarB():T{
        return this.varB
    }
}
let obj = new Boxe<string>("hello")
let obj2 = new Boxe<number>(1)
let q12 = obj.displayVarB()
let q13 = obj2.displayVarB()
