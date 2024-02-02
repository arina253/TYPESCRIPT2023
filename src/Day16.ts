//Type Assertion

//Program 1
let variable1: any = "Hello javascript";
let length1: number = (variable1 as string).length        // one method to make variable1 as string
                                                         // forceful

//Program 2
let variable2: any = "Hello JS 2"
let length2: number = (<string>variable2).length       // second method to make variable2 as string

//Program 3
type Person3 = {name:string,age:number}
let variable3 : any = {name:"arina",age:37}
//let variable4:Person3 = variable3 as Person3
let variable4:Person3 = variable3 as {name : string, age : number}

//Program 4
let arr : any[] = ["arina","joshi",9803753479]
let lastName = (arr[1] as string).toLowerCase().length   //to make first element of array as strength

//Program 5
type EmployeeX = {id:number;name:string;salary:number}
let dataX:any = {id:1,name:"arina",salary:10000}
let variable5:EmployeeX = dataX as EmployeeX

//Program 6
let aaa = document.querySelector('input') as HTMLInputElement
aaa.value