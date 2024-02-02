// Decorator is a function
//Written in capital letter
//Used to run specific things before loading a class or making object of class
// tsconfig.json- CTRL+F-decorator and uncheck

//class decorator

function Logger(constructor : Function){
    console.log('Logging')
    console.log(constructor)
}

@Logger
class PersonW{
    name = "MAX"
    constructor(){
        console.log('creating a person object')
    }
}

//Program 2

function logClass(con:Function){
    console.log(con.name)
}

@logClass
class ExampleClass{
    constructor(){
        console.log('Constructor is called')
    }
}
new ExampleClass()

//Method constructor- 3 properties

function decor1(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(){
        const result = originalMethod.apply(this);
        return result * 2
    }
}

class Examples{
    @decor1
    num():number{
        return 10
    }
}