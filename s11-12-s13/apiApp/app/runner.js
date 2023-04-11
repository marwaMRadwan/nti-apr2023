const express = require("express")
const app = express()

require("../database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require("../routes/user.route")
app.use("/api/user", userRoutes) //localhost:port/api/user => inside routes

app.all("*", (req,res)=> 
    res.status(404).send({ apiStatus: false, data:null, message:"invalid url" })
)

module.exports = app
