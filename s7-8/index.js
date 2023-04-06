/*
npm init --y
npm i express dotenv hbs
to run start script => npm start
any other script => npm run scriptName
*/
const app = require("./app/src")

require("dotenv").config()

app.listen(
    process.env.PORT,
    ()=> console.log(`http://localhost:${process.env.PORT}`)
)