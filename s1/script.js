//variables
// let var const
// var x = 15
// var x = 16

// let y = 5

//scopes   conditional, loops, functions
// let x = 10
// var y = 25
// if(true){
//     let x = 5
//     var y = 15
// }
// console.log(y)

// function test(){
//     let z = 25
//     var w = 35
// }
// test()
// console.log(w)

// operators
// arithmatic   + - * / % ++ --
// assign  = += -= ....
// ternery ?
// comp. > < >= <= ......
// logical  & | !

/*
enter student degree
< 0 or >100 => invalid
0-100
>90 A
>80 B
>70 C
>60 D
<60 F
browser => bom (alert, prompt, ...)
*/
// const d = 50
// const degree = +prompt("Please enter student degree from 0 to 100")
// console.log(typeof degree);
// console.log(degree)
// Number.isNaN(degree) ? console.log("invalid number") : console.log("a number")
// if(Number.isNaN(degree)) 
//     console.log("invalid format")
// else{
//     if(degree<0 || degree>100) console.log("invalid degree")
//     else if(degree>90) console.log("A");
//     else console.log("C");
// }

/*
 - get input from user
 - check if string
 - check degree and return result
*/

/*
todo list
tasks => title, content
add task
show tasks
*/

// function getInputFromUser(msg){
//     const data = prompt(msg)
//     return data
// }
// function emptyStringChecker(value){
//     return !value.length //0   1=> inf
// }
// function taskCreator (title, content){
//     console.log(title, content);
// }
// const title = getInputFromUser("please enter a title")
// const content = getInputFromUser("please enter a content")
// if(emptyStringChecker(title)) console.log("invalid title");
// if(emptyStringChecker(content)) console.log("invalid content");
// taskCreator(title, content)
// number string boolean object(obj, array)
// let user = {
//     name : "marwa", 
//     age: 38,
//     job: "CEO",
//     gender:"Female",
//     isMarried: true,
//     printMe : function(date){
//         console.log(this.name, date)
//     }
// }
// user.printMe(Date.now())
// let x = 5
// console.log(user.isMarried);
// user.age = 37

// function printObj (obj, x){
//     // console.log(obj.name)
//     obj.job = "developer"
//     x = 15
// }

// printObj(user, x)
// console.log(user)
// console.log(x);

// local storage

// localStorage.setItem("username", "marwa radwan")
// console.log(localStorage.getItem("username"));










