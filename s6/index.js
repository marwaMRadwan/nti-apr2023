/*
npm init --y
npm i express
npm i nodemon -g
*/
const express = require("express")
const app = express()
const PORT = 3000
//routes routing
app.get("/", ( req, res )=>{
    res.send("hello world")
})
app.get("/add", (req,res)=>{
    res.send("<h3>hello</h3>")
})
app.get("/about", (req,res)=>{
    res.send({name:"marwa"});
})
app.get("/logo", (req,res)=>{
    // __dirname
    res.sendFile(`${__dirname}/logo.png`)
})
app.get("/html", (req,res)=>{
    // __dirname
    res.sendFile(`${__dirname}/a.html`)
})
app.listen(
    PORT, 
    () => console.log(`you are on http://localhost:${PORT}`)
)