//Program 1

class MyClass{
    public myProperty:String;
    constructor(){
        this.myProperty = "hello"
    }
}
let aa = new MyClass()
console.log(aa.myProperty)

//Program 2
//private

class MyClass2{
    private myPrivateProperty:String;
    constructor(){
        this.myPrivateProperty = "hello from p";
    }

    //access the private field in public method within the same class

    public getValue(){
        return this.myPrivateProperty
    }
}

let b = new  MyClass2()
//console.log(b.myPrivateProperty)----'myPrivateProperty' is private and  not accessible.

b.getValue()

//Program 3
//protected

class myClass3{
    protected age : number;
    constructor (ag : number){
        this.age = ag
    }

private displayBalance():number{
    return 10000
}
public displayAge(){
    this.displayBalance()
    return this.age
}
}
class myClass4 extends myClass3{
    public displayAge2(): number{
        //private method and properties are not accessible outside the class
        //protected methods and properties are accessible within the inherited properties
        return this.age
    }
}

//interface-----complete abstraction
//abstraction----partially hide----abstract class

abstract class WorldBank{
    //abstract method
    abstract loan() : number
    abstract save() : number
    displayCountryName(){
        return "Nepal"
    }
}

class SBIee extends WorldBank{
    loan():number{
        console.log("I am loan from SBIee")
        return 10
    }
    save():number{
        console.log("I am save from SBIee")
        return 20
    }
    branchName(){
        return "Kathmandu"
    }
}

//We cannot have instance of abstract class
let SBIaa = new SBIee()
SBIaa.branchName()
SBIaa.loan()
SBIaa.save()
SBIaa.displayCountryName()