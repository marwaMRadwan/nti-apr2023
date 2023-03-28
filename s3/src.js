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

// const num = (n) =>{
//     return {
//         n, //n =5
//         n: ()=> n,
//         incr : () => {
//             ++n
//             console.log(n)
//         },
//         decr: () => {
//             --n
//             console.log(n);
//         }
//     }
// }
// const myVal = num(5)
// myVal.incr()
// myVal.incr()
// myVal.incr()
// myVal.decr()
// console.log(myVal.n())
// console.log(myVal.n);

//callback
// x = [1, 2,3]
// x.forEach(element => { });
// x.addEventListener("click", (e)=>{})

// test = (callback) =>{
//     (() => {
//         let z = 500
//         callback(z, 100)
//     })()
// }
// test( (cb) =>{
//     console.log(cb);
// })

// x = [1,2,3]
// x.forEach((ele, i, arr)=>{

// })
// const myFunction = (myArray) =>{
//     return {
//         myForEach : (callBack) => {
//             for(let i=0; i<myArray.length; i++)
//                 callBack(myArray[i], i, myArray)
//         },
//         myIndex : (val, callBack) =>{
//             for(let i =0; i<myArray.length; i++){
//                 if(myArray[i]==val) 
//                     callBack(myArray[i], i, myArray)
//             }
//         }
//     }
// }
// const arr = myFunction([10,20,30,40,50])
// arr.myForEach((el, i, arr)=>{
//     console.log(el, i)
//     console.log(arr);
// })
// arr.myIndex(40, (el, i, arr)=>{
//     if(el == 40 ) console.log(i)    
// })
// console.log(res);


// console.log(1)
// setTimeOut(()=>console.log(2),1000)
// setTimeOut(()=>console.log(3),500)
// setTimeOut(()=>console.log(4),2000)


//promises
const myPromise = (val )=> {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                typeof val == "number"? 
                resolve("number")
                : reject("not a number")
            }, 2000)
        }
    )
}
// console.log(myPromise(50))

//then catch
// myPromise("ffg")
// .then(result=> console.log(result))
// .catch(err=> console.log(err))

//async await
async function myRun(){
    try{
        res = await myPromise(" gcg")
        console.log(res)
    }
    catch(e){
        console.log(e)
    }
}
myRun()

//apis












