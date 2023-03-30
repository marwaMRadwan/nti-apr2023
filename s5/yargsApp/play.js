//fs => file system (writeFile, writeFileSync, readFile, readFileSync, appendFile)
//built-in Local Module
const fs = require("fs")
// const data = [
//     {id:1, name:"marwa"},
//     {id:2, name:"nouran"}
// ]

// fs.writeFileSync("data.json", JSON.stringify(data))
let result
try{
    result = JSON.parse(fs.readFileSync("data.json"))
    if(!Array.isArray(result)) throw new Error("not an array")
}
catch(e){
    console.log(e.message)
    result = []
}
console.log(result)
// result.push("ggg")

JSON.parse(fs.readFileSync("data.json"))