const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
require("../database/connection")

app.use(express.static(path.join(__dirname, "../public")))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require("../routes/user.route")
app.use("/api/user", userRoutes) //localhost:port/api/user => inside routes
const taskRoutes = require("../routes/task.route")
app.use("/api/task", taskRoutes) 

app.all("*", (req,res)=> 
    res.status(404).send({ apiStatus: false, data:null, message:"invalid url" })
)

module.exports = app
