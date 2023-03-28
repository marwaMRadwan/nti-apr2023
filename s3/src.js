// x=5
// console.log(x++) //5
// console.log(++x) //7


// //try catch
// try{
//     const x = parseInts("5")
//     // console.log(data);
//     console.log(5/0)
// }
// catch(err){
//     console.log(err.message);
// }
// console.log("hello")

// function test(){
//     x=y=z=10
//     return {
//         y, //y:y
//         x, //x:x
//         z //z:z
//     }
// }

//clousers
// const counter = (x, y) =>{
//     return {
//         x,
//         y,
//         add:()=>{
//             console.log(x+y)
//         },
//         sub:()=>{
//             console.log(x-y);
//         }
//     }
// }
// const c = counter(5,3)
// c.add()
// c.sub()
// c2=counter(10,8)

const num = (n) =>{
    return {
        n, //n =5
        n: ()=> n,
        incr : () => {
            ++n
            console.log(n)
        },
        decr: () => {
            --n
            console.log(n);
        }
    }
}
const myVal = num(5)
myVal.incr()
myVal.incr()
myVal.incr()
myVal.decr()
console.log(myVal.n())
console.log(myVal.n);
//callback

//promises

//then catch

//async await

//apis
