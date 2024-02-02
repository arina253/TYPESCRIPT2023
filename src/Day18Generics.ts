//GENERICS ------- to write reusable code

//Program 1
function identity(arg: any):any{                    //Utility less and have to write more code
    return arg
}
let w = identity(1)
let j = identity("adult")
let f = identity(true)

function identity2(a : number):number{
    return a
}
let p = identity2(67)

//Program 2

function identityGenerics<T>(arg: T): T{
    return arg
}
let a11 = identityGenerics<number>(123)
let b11 = identityGenerics<string>('1234')


//Program 3
function addEE <T>(p1: T, p2: T){
    if (typeof p1 == 'number' && typeof p2 == 'number'){
        console.log(p1 +p2)
        return p1+p2
    }
    else if (typeof p1 == 'string' && typeof p2 == 'string'){
        return p1+p2
    }
}
let q11e = addEE<number>(2,4)
let q11s = addEE<string>("hello","world")
console.log(q11s)
console.log(q11e)

//Program 3
class Box<T>{
    private content : T
    constructor (x : T){
        this.content = x
    }
    getContent():T{
        return this.content
    }
}
let numberBox = new Box<number>(123)
let stringBox = new Box<string>("hello")
let q = numberBox.getContent()
let q11 = stringBox.getContent()

//Program 4
class BoxB <T,U>{
    private content :T
    private content2 :U
    constructor(x:T, y:U){
        this.content = x
        this.content2 = y
    }
    getContent():T{
        return this.content
    }
    getContent2(): U{
        return this.content2
    }
}
let numberStringBox = new BoxB<number,string>(123,"hello")
let numberStringBoxE = new BoxB<number,number>(123,235)
let numberStringBoxE2 = new BoxB<string,string>("hello","hello")

let t = numberStringBox.getContent();
let t2 = numberStringBox.getContent2();