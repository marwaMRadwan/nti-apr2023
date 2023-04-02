const express = require("express")
const app = express()
const path = require("path")
//engine => hbs 
//path
const viewsDir = path.join(__dirname , "../resources/views")

app.set("view engine", "hbs")
app.set("views", viewsDir)

app.get("/", (req,res)=>{
    res.render("home", {
        name:"marwa",
        age:37,
        email:"marwa@techsexperts.com"
    })
})

module.exports = app