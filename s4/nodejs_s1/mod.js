// const fun1 = () => {
//     console.log("fun 1")
// }
// const fun2 = () =>{
//     console.log("fun 2")
// }
// // module.exports = fun1
// module.exports = {
//     fun1,
//     fun2
// }

class myModule {
    fun1 = () => {
        console.log("fun1");
    }
    fun2 = () => {
        console.log("fun2");
    }
    fun3 =()=>{
        console.log("fun3");
    }
}
const m = new myModule() // {fun1, fun2, fun3}
module.exports = m