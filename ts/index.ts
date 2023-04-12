// let username : string = "marwa"
// let age :number = 10
// let mystatus : boolean = true
// let m : any

// function add(a:number, b:number):number{
//     return a+b
// }
// add(5,4)

// interface Task{
//     userId : string
//     title : string
//     content : string
//     file?: string
// }
// const myTask : Task = {
//     userId:"123",
//     title:"kgc",
//     content:"ssss"
// }




// class User{
//     private id: number
//     private name : string
//     private status : boolean
//     static count : number = 0
//     constructor(id:number, name: string, status:boolean){
//         this.id = id
//         this.name = name
//         this.status = status
//         User.count++
//     }
//     set _name(val:string) {
//         this.name = val
//     }
//     get _name() { return this.name }

//     show(){
//         console.log(this.id + " - " + this.name + " - " + this.status)
//     }
// }


// const userData = new User(1, "marwa", true)
// console.log(userData)
// userData.show()
// userData._name = "nouran"
// console.log(userData._name)
// console.log(User.count)

class User{
    id: number
    protected name: string
    age: number
    constructor(id:number, name:string, age:number){
        this.id = id
        this.name=name
        this.age= age
    }
    show(){
        console.log("show")
    }
}

class Student extends User{
    grade: number[] = []
    constructor(id:number, name:string, age:number, grade:number[]=[]){
        super(id,name, age)
    }
    xyz(){
        super.show()
    }
}
class Instructor extends User{
    salary: number
    constructor(id:number, name:string, age:number, salary:number){
        super(id,name, age)
        this.salary= salary
    }

}

new Student(1,"gg", 12,[])



































