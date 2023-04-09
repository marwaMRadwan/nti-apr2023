const express = require("express")
const app = express()

require("../database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require("../routes/user.route")
app.use("/api/user", userRoutes)

module.exports = app