// node -v
//mean => mongo express angular node
// console.log("test")
// document.createElement("p")
// const myMod = require("./mod.js")
// // myMod()
// myMod.fun1()
// myMod.fun2()
// myMod.fun3()


// const cal = require("./calculator")
// console.log(cal.add(5,3))
// cal.c()


// const os = require("os")
// console.log(os.hostname());

//fs
const fs = require("fs")
fs.writeFile("data.txt", "hello", ()=>{})
fs.writeFileSync("a.txt", "hi")
files = [
    { name:"a.json", data:[] }, 
    { name:"b.json", data:[1,2,3] }
]

files.forEach(element => {
    fs.writeFileSync(element.name, JSON.stringify(element.data))

});