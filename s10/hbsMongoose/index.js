/*
npm init --y
npm i express dotenv hbs
to run start script => npm start
any other script => npm run scriptName
*/
require("dotenv").config()
const app = require("./app/src")

app.listen(
    process.env.PORT,
    ()=> console.log(`http://localhost:${process.env.PORT}`)
)